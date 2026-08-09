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

async function summarizeArticle(raw) {
  const cleanedText = raw.text_body?.trim() || stripHtml(raw.html_body || "");

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

  const parsed = JSON.parse(message.content[0].text);

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
