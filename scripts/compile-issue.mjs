#!/usr/bin/env node
// Reads raw/<date>/*.json emails that don't yet have a processed/ counterpart,
// splits each into its distinct stories (a forwarded email may bundle several,
// as link-digest newsletters do), summarizes + categorizes each via the
// Anthropic API, and writes today's Issue to _posts/. Idempotent: re-running
// only processes what's new.

import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

const RAW_DIR = "raw";
const PROCESSED_DIR = "processed";
const POSTS_DIR = "_posts";

const FETCH_TIMEOUT_MS = 10_000;
// Zero-width/invisible characters mail clients use as tracking pixels or
// spacers — harmless to strip, but they pollute forwarded plain-text bodies.
const INVISIBLE_CHARS = /[\u200B-\u200F\u2028-\u202F\u205F-\u206F\uFEFF\u00AD\u034F]/g;
const GMAIL_FORWARD_HEADER = /-{5,}\s*Forwarded message\s*-{5,}\nFrom:.*\nDate:.*\nSubject:.*\nTo:.*\n+/;

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function findUnprocessedRawFiles() {
  const results = [];
  if (!fs.existsSync(RAW_DIR)) return results;

  for (const dateDir of fs.readdirSync(RAW_DIR)) {
    const rawDatePath = path.join(RAW_DIR, dateDir);
    if (!fs.statSync(rawDatePath).isDirectory()) continue;

    for (const file of fs.readdirSync(rawDatePath)) {
      if (!file.endsWith(".json")) continue;
      const processedFilePath = path.join(PROCESSED_DIR, dateDir, file);
      if (!fs.existsSync(processedFilePath)) {
        results.push({ rawFilePath: path.join(rawDatePath, file), dateDir, file });
      }
    }
  }
  return results;
}

// Converts HTML to text while keeping paragraph breaks, so a fetched article
// reads as paragraphs instead of one flattened line.
function htmlToText(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|blockquote|tr)>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Strips forwarding boilerplate and invisible tracking characters so word
// counts and prompts aren't polluted by email plumbing rather than content.
function normalizeText(text) {
  let t = text.replace(/\r\n/g, "\n");
  const fwdMatch = t.match(GMAIL_FORWARD_HEADER);
  if (fwdMatch) t = t.slice(fwdMatch.index + fwdMatch[0].length);
  return t
    .replace(INVISIBLE_CHARS, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// The model sometimes wraps its JSON in a ```json fence despite being told
// not to; parse whatever's between the outermost braces instead of the raw text.
function extractJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error(`No JSON object found in model response: ${text.slice(0, 200)}`);
  }
  return JSON.parse(text.slice(start, end + 1));
}

async function fetchArticleText(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; reads-aiste-io/1.0)" },
    });
    if (!response.ok) return null;
    const html = await response.text();
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    const text = htmlToText(articleMatch ? articleMatch[1] : html);
    return text.length > 200 ? text : null;
  } catch {
    return null;
  }
}

// A forwarded email is one story most of the time, but link-digest
// newsletters bundle several distinct headlines/links into one email — ask
// the model to split those out rather than summarizing the whole bundle as
// if it were a single article.
async function extractItems(raw, cleanedText) {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `This is a forwarded newsletter email. Sometimes it's a single article; sometimes it's a link digest bundling several distinct stories, each with its own headline, byline, and link. Identify every distinct story. Ignore forwarding headers, email signatures, "read online" links, unsubscribe/social links, and sponsored ad blurbs (unless the ad IS the newsletter's only content).

Respond with ONLY strict JSON, no prose:
{"items": [{"title": "<story headline>", "url": "<the story's own link exactly as it appears in the text, or null if none>", "category": "<one short topical category, e.g. 'Tech', 'AI', 'Health', 'Product'>", "summary_bullets": ["<bullet 1>", "<bullet 2>", "<bullet 3>"]}]}

Newsletter source: ${raw.from}
Subject: ${raw.subject}

Email text:
${cleanedText.slice(0, 15000)}`,
      },
    ],
  });

  return extractJson(message.content[0].text).items;
}

async function summarizeEmail(raw) {
  const cleanedText = normalizeText(raw.text_body?.trim() || htmlToText(raw.html_body || ""));
  const items = await extractItems(raw, cleanedText);

  for (const item of items) {
    item.source = raw.from;
    item.full_text = item.url ? await fetchArticleText(item.url) : null;
    // Single-story email with no fetchable link: the email body itself is
    // the only full text we have.
    if (!item.full_text && items.length === 1) item.full_text = cleanedText;
  }

  return items;
}

async function main() {
  const unprocessed = findUnprocessedRawFiles();
  if (unprocessed.length === 0) {
    console.log("No new articles to compile.");
    return;
  }

  const allItems = [];
  for (const { rawFilePath, dateDir, file } of unprocessed) {
    const raw = JSON.parse(fs.readFileSync(rawFilePath, "utf8"));
    console.log(`Summarizing: ${raw.subject}`);
    const items = await summarizeEmail(raw);
    console.log(`  ↳ ${items.length} stor${items.length === 1 ? "y" : "ies"}`);
    allItems.push(...items);

    const processedDir = path.join(PROCESSED_DIR, dateDir);
    fs.mkdirSync(processedDir, { recursive: true });
    fs.writeFileSync(path.join(processedDir, file), JSON.stringify(items, null, 2));
  }

  const byCategory = {};
  for (const item of allItems) {
    (byCategory[item.category] ??= []).push(item);
  }

  const today = new Date().toISOString().slice(0, 10);
  let body = `---\nlayout: issue\ntitle: "Issue — ${today}"\ndate: ${today}\n---\n\n`;

  for (const [category, categoryItems] of Object.entries(byCategory)) {
    body += `## ${category}\n\n`;
    for (const item of categoryItems) {
      const heading = item.url ? `[${item.title}](${item.url})` : item.title;
      body += `### ${heading}\n_${item.source}_\n\n`;
      for (const bullet of item.summary_bullets) {
        body += item.url ? `- ${bullet} [↗](${item.url})\n` : `- ${bullet}\n`;
      }
      body += item.full_text
        ? `\n<details><summary>Read full piece</summary>\n\n${item.full_text}\n\n</details>\n\n`
        : "\n";
    }
  }

  fs.mkdirSync(POSTS_DIR, { recursive: true });
  const postPath = path.join(POSTS_DIR, `${today}-issue.md`);
  fs.writeFileSync(postPath, body);
  console.log(`Compiled ${allItems.length} item(s) from ${unprocessed.length} email(s) into ${postPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
