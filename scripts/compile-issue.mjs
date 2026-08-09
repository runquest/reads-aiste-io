#!/usr/bin/env node
// Reads raw/<date>/*.json articles that don't yet have a processed/ counterpart,
// summarizes + categorizes each via the Anthropic API, and writes today's Issue
// to _posts/. Idempotent: re-running only processes what's new.

import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

const RAW_DIR = "raw";
const PROCESSED_DIR = "processed";
const POSTS_DIR = "_posts";

// Newsletters that are mostly a "read more" teaser leave too little in the
// email body to summarize well — below this, we try to fetch the linked
// article instead of settling for the teaser.
const THIN_ARTICLE_WORD_COUNT = 200;
const FETCH_TIMEOUT_MS = 10_000;
const SKIP_LINK_PATTERN = /unsubscribe|privacy|preferences|mailto:|twitter\.com|x\.com|facebook\.com|linkedin\.com|instagram\.com|\.(png|jpe?g|gif|svg)(\?|$)/i;

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

function stripHtml(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

// Picks the anchor most likely to be "the article" rather than nav/social/
// unsubscribe chrome: longest anchor text (real headlines read as sentences;
// boilerplate links read as single words), skipping known non-article hosts.
function extractLikelyArticleLink(html) {
  if (!html) return null;
  const anchorRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let best = null;
  for (const match of html.matchAll(anchorRegex)) {
    const href = match[1];
    const text = stripHtml(match[2]);
    if (!href.startsWith("http") || SKIP_LINK_PATTERN.test(href)) continue;
    if (text.length < 15) continue;
    if (!best || text.length > best.text.length) best = { href, text };
  }
  return best?.href ?? null;
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
    const text = stripHtml(articleMatch ? articleMatch[1] : html);
    return text.length > 200 ? text : null;
  } catch {
    return null;
  }
}

async function summarizeArticle(raw) {
  let cleanedText = raw.text_body?.trim() || stripHtml(raw.html_body || "");

  if (countWords(cleanedText) < THIN_ARTICLE_WORD_COUNT) {
    const link = extractLikelyArticleLink(raw.html_body || "");
    if (link) {
      console.log(`  ↳ email looks like a teaser, fetching ${link}`);
      const fetched = await fetchArticleText(link);
      if (fetched) cleanedText = fetched;
      else console.log(`  ↳ fetch failed or too short, falling back to email body`);
    }
  }

  const message = await anthropic.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are compiling a daily newsletter digest. Given the article below, respond with ONLY strict JSON, no prose:
{"category": "<one short topical category, e.g. 'Tech', 'AI', 'Health', 'Product'>", "summary_bullets": ["<bullet 1>", "<bullet 2>", "<bullet 3>"]}

Newsletter source: ${raw.from}
Subject: ${raw.subject}

Article text:
${cleanedText.slice(0, 12000)}`,
      },
    ],
  });

  // The model sometimes wraps its JSON in a ```json fence despite being told
  // not to; parse whatever's between the outermost braces instead of the raw text.
  const responseText = message.content[0].text;
  const jsonStart = responseText.indexOf("{");
  const jsonEnd = responseText.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error(`No JSON object found in model response: ${responseText.slice(0, 200)}`);
  }
  const parsed = JSON.parse(responseText.slice(jsonStart, jsonEnd + 1));

  return {
    source: raw.from,
    subject: raw.subject,
    category: parsed.category,
    summary_bullets: parsed.summary_bullets,
    cleaned_text: cleanedText,
  };
}

async function main() {
  const unprocessed = findUnprocessedRawFiles();
  if (unprocessed.length === 0) {
    console.log("No new articles to compile.");
    return;
  }

  const articles = [];
  for (const { rawFilePath, dateDir, file } of unprocessed) {
    const raw = JSON.parse(fs.readFileSync(rawFilePath, "utf8"));
    console.log(`Summarizing: ${raw.subject}`);
    const processed = await summarizeArticle(raw);
    articles.push(processed);

    const processedDir = path.join(PROCESSED_DIR, dateDir);
    fs.mkdirSync(processedDir, { recursive: true });
    fs.writeFileSync(path.join(processedDir, file), JSON.stringify(processed, null, 2));
  }

  const byCategory = {};
  for (const article of articles) {
    (byCategory[article.category] ??= []).push(article);
  }

  const today = new Date().toISOString().slice(0, 10);
  let body = `---\nlayout: issue\ntitle: "Issue — ${today}"\ndate: ${today}\n---\n\n`;

  for (const [category, categoryArticles] of Object.entries(byCategory)) {
    body += `## ${category}\n\n`;
    for (const article of categoryArticles) {
      body += `### ${article.subject}\n_${article.source}_\n\n`;
      for (const bullet of article.summary_bullets) {
        body += `- ${bullet}\n`;
      }
      body += `\n<details><summary>Read full piece</summary>\n\n${article.cleaned_text}\n\n</details>\n\n`;
    }
  }

  fs.mkdirSync(POSTS_DIR, { recursive: true });
  const postPath = path.join(POSTS_DIR, `${today}-issue.md`);
  fs.writeFileSync(postPath, body);
  console.log(`Compiled ${articles.length} article(s) into ${postPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
