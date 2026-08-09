#!/usr/bin/env node
// Reads raw/<date>/*.json emails that don't yet have a processed/ counterpart,
// splits each into its distinct stories (a forwarded email may bundle several,
// as link-digest newsletters do), summarizes + categorizes each via the
// Anthropic API, and writes today's Issue to _posts/. Idempotent: re-running
// only processes what's new.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import Anthropic from "@anthropic-ai/sdk";
import TurndownService from "turndown";

const RAW_DIR = "raw";
const PROCESSED_DIR = "processed";
const FETCHED_DIR = "fetched";
const POSTS_DIR = "_posts";

const EXTRACTION_MODEL = "claude-haiku-4-5-20251001";
const FETCH_TIMEOUT_MS = 10_000;
const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });
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

// All processed items for a date, regardless of which run produced them —
// used to rebuild the day's post from everything done so far, not just
// what the current run happened to add.
function loadProcessedItems(dateDir) {
  const dir = path.join(PROCESSED_DIR, dateDir);
  if (!fs.existsSync(dir)) return [];
  const items = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    items.push(...JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")));
  }
  return items;
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

function urlCachePath(url) {
  const hash = crypto.createHash("sha1").update(url).digest("hex");
  return path.join(FETCHED_DIR, `${hash}.html`);
}

// Published articles don't change, so a URL only ever needs fetching once —
// the raw HTML is stored permanently alongside raw/ and processed/, not as
// an evictable cache. This means future changes to how we convert HTML to
// Markdown (or anything else about rendering) replay from disk, with no
// network calls and no re-summarizing.
async function fetchHtml(url) {
  const cachePath = urlCachePath(url);
  if (fs.existsSync(cachePath)) {
    return fs.readFileSync(cachePath, "utf8");
  }
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: { "User-Agent": "Mozilla/5.0 (compatible; reads-aiste-io/1.0)" },
  });
  if (!response.ok) return null;
  const html = await response.text();
  fs.mkdirSync(FETCHED_DIR, { recursive: true });
  fs.writeFileSync(cachePath, `<!-- source: ${url} -->\n${html}`);
  return html;
}

async function fetchArticleText(url) {
  try {
    const html = await fetchHtml(url);
    if (!html) return null;
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    const markdown = turndown
      .turndown(articleMatch ? articleMatch[1] : html)
      // Empty "copy link to heading" anchors many sites attach to every
      // heading turn into noisy empty markdown links; drop them.
      .replace(/\[]\(#[^)]*\)/g, "")
      .trim();
    return markdown.length > 200 ? markdown : null;
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
    model: EXTRACTION_MODEL,
    max_tokens: 8192,
    messages: [
      {
        role: "user",
        content: `This is a forwarded newsletter email. Sometimes it's a single article; sometimes it's a link digest bundling several distinct stories, each with its own headline, byline, and link. Identify every distinct story, including sponsored/promoted placements (mark those with "sponsored": true rather than dropping them). Ignore forwarding headers, email signatures, and "read online"/unsubscribe/social links, which are not stories.

Some newsletters (curated link roundups) already include their own written blurb or tl;dr for each story — capture that verbatim (lightly trimmed) as "existing_summary". Others don't, and there's nothing to capture there.

Respond with ONLY strict JSON, no prose:
{"items": [{"title": "<story headline>", "url": "<the story's own link exactly as it appears in the text, or null if none>", "category": "<one short topical category, e.g. 'Tech', 'AI', 'Health', 'Product'>", "byline": "<the story's own credited author, if the newsletter names one, else null>", "existing_summary": "<the newsletter's own verbatim blurb/tl;dr for this story, if it has one, else null>", "sponsored": <true if this is a paid/promoted placement rather than an editorial pick, else false>, "summary_bullets": ["<bullet 1>", "<bullet 2>", "<bullet 3>"]}]}

Newsletter source: ${raw.from}
Subject: ${raw.subject}

Email text:
${cleanedText.slice(0, 15000)}`,
      },
    ],
  });

  // content[0] isn't reliably the text block (a thinking block can precede
  // it), so find the text block explicitly rather than assuming its index.
  const textBlock = message.content.find((block) => block.type === "text");
  if (!textBlock) {
    throw new Error(`No text block in model response (stop_reason: ${message.stop_reason})`);
  }
  return extractJson(textBlock.text).items;
}

// Above this many stories in one email, it's a curated links roundup (e.g.
// Pointer) rather than a handful of full pieces (e.g. Leadership in Tech) —
// its editor already wrote a blurb per item, so we relay that instead of
// fetching and re-summarizing 10+ external links ourselves.
const ROUNDUP_THRESHOLD = 6;

async function summarizeEmail(raw) {
  const cleanedText = normalizeText(raw.text_body?.trim() || htmlToText(raw.html_body || ""));
  const items = await extractItems(raw, cleanedText);
  const isRoundup = items.length > ROUNDUP_THRESHOLD;

  for (const item of items) {
    item.source = raw.from;
    // Sponsored placements and roundup items are relayed as-is, not fetched
    // and re-summarized — the former because they're ads, not picks worth
    // the extra scrape; the latter because the editor's own blurb is right there.
    item.lightweight = item.sponsored || isRoundup;
    item.full_text = !item.lightweight && item.url ? await fetchArticleText(item.url) : null;
    // Single-story email with no fetchable link: the email body itself is
    // the only full text we have.
    if (!item.full_text && !item.lightweight && items.length === 1) item.full_text = cleanedText;
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
  const failures = [];
  for (const { rawFilePath, dateDir, file } of unprocessed) {
    const raw = JSON.parse(fs.readFileSync(rawFilePath, "utf8"));
    console.log(`Summarizing: ${raw.subject}`);
    // One email failing to summarize (a truncated model response, an
    // unreachable link, etc.) shouldn't discard everything already
    // processed in this run — skip it and leave it unprocessed so the
    // next run retries just that one.
    let items;
    try {
      items = await summarizeEmail(raw);
    } catch (err) {
      console.error(`  ↳ failed, will retry next run: ${err.message}`);
      failures.push(raw.subject);
      continue;
    }
    console.log(`  ↳ ${items.length} stor${items.length === 1 ? "y" : "ies"}`);
    allItems.push(...items);

    const processedDir = path.join(PROCESSED_DIR, dateDir);
    fs.mkdirSync(processedDir, { recursive: true });
    fs.writeFileSync(path.join(processedDir, file), JSON.stringify(items, null, 2));
  }

  if (allItems.length === 0 && failures.length > 0) {
    console.log("Nothing compiled successfully this run.");
    process.exitCode = 1;
    return;
  }

  // Rebuild the post from every item processed today, not just what this
  // run added — a retry after a partial failure must not drop the items an
  // earlier run in the same day already succeeded on.
  const today = new Date().toISOString().slice(0, 10);
  const todaysItems = loadProcessedItems(today);

  const byCategory = {};
  for (const item of todaysItems) {
    (byCategory[item.category] ??= []).push(item);
  }

  let body = `---\nlayout: issue\ntitle: "Issue — ${today}"\ndate: ${today}\n---\n\n`;

  for (const [category, categoryItems] of Object.entries(byCategory)) {
    body += `## ${category}\n\n`;
    for (const item of categoryItems) {
      const heading = item.url ? `[${item.title}](${item.url})` : item.title;
      const byline = item.byline ? `${item.byline} · ${item.source}` : item.source;
      const sponsoredTag = item.sponsored ? " · *Sponsored*" : "";
      body += `### ${heading}\n_${byline}${sponsoredTag}_\n\n`;

      if (item.lightweight) {
        const summary = item.existing_summary || item.summary_bullets?.join(" ") || "";
        body += item.url ? `${summary} [↗](${item.url})\n\n` : `${summary}\n\n`;
      } else {
        for (const bullet of item.summary_bullets) {
          body += item.url ? `- ${bullet} [↗](${item.url})\n` : `- ${bullet}\n`;
        }
        body += item.full_text
          ? `\n<details markdown="1"><summary>Read full piece</summary>\n\n${item.full_text}\n\n</details>\n\n`
          : "\n";
      }
    }
  }

  fs.mkdirSync(POSTS_DIR, { recursive: true });
  const postPath = path.join(POSTS_DIR, `${today}-issue.md`);
  fs.writeFileSync(postPath, body);
  const processedCount = unprocessed.length - failures.length;
  console.log(
    `Compiled ${todaysItems.length} item(s) total (${allItems.length} new from ${processedCount}/${unprocessed.length} email(s) this run) into ${postPath}`
  );
  if (failures.length > 0) {
    console.log(`Skipped ${failures.length} email(s), will retry next run: ${failures.join("; ")}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
