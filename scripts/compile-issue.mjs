#!/usr/bin/env node
// Reads raw/<date>/*.json emails that don't yet have a processed/ counterpart,
// splits each into its distinct stories (a forwarded email may bundle several,
// as link-digest newsletters do), summarizes + categorizes each via the
// Anthropic API, writes each story as its own page under _stories/, and
// writes today's Issue (an index linking to each story) to _posts/.
// Idempotent: re-running only processes what's new.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import Anthropic from "@anthropic-ai/sdk";
import TurndownService from "turndown";

const RAW_DIR = "raw";
const PROCESSED_DIR = "processed";
const FETCHED_DIR = "fetched";
const POSTS_DIR = "_posts";
const STORIES_DIR = "_stories";

const EXTRACTION_MODEL = "claude-haiku-4-5-20251001";
const FETCH_TIMEOUT_MS = 10_000;
const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });

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
// used to rebuild the day's index from everything done so far, not just
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
// reads as paragraphs instead of one flattened line. Used only for parsing
// an email's own body when there's no plain-text version to work with —
// fetched external articles go through turndown() instead, for real Markdown.
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

// Zero-width/invisible characters mail clients use as tracking pixels or
// spacers — harmless to strip, but they pollute forwarded plain-text bodies.
const INVISIBLE_CHARS_RANGES = [
  [0x200b, 0x200f],
  [0x2028, 0x202f],
  [0x205f, 0x206f],
  [0xfeff, 0xfeff],
  [0x00ad, 0x00ad],
  [0x034f, 0x034f],
];
const INVISIBLE_CHARS = new RegExp(
  "[" + INVISIBLE_CHARS_RANGES.map(([a, b]) => `\\u{${a.toString(16)}}-\\u{${b.toString(16)}}`).join("") + "]",
  "gu"
);

// Captures the newsletter's real "From" and your subscription's "To" address
// out of Gmail's forward header before stripping it — without this, the only
// "source" available is whichever of your addresses did the forwarding.
const GMAIL_FORWARD_HEADER = /-{5,}\s*Forwarded message\s*-{5,}\nFrom:\s*(.*)\nDate:\s*.*\nSubject:\s*.*\nTo:\s*(.*)\n+/;

function extractEmailAddress(line) {
  const angleMatch = line.match(/<([^>]+)>/);
  if (angleMatch) return angleMatch[1];
  const bareMatch = line.match(/([^\s<>]+@[^\s<>]+)/);
  return bareMatch ? bareMatch[1] : null;
}

// Strips Gmail's forwarding header and invisible tracking characters, while
// pulling out the newsletter's real identity and which of your addresses
// it's subscribed under before that header is thrown away.
function parseForwardedEmail(text) {
  let t = text.replace(/\r\n/g, "\n");
  let newsletterName = null;
  let subscriptionEmail = null;

  const match = t.match(GMAIL_FORWARD_HEADER);
  if (match) {
    const fromLine = match[1].trim();
    const toLine = match[2].trim();
    const newsletterEmail = extractEmailAddress(fromLine);
    const angleIndex = fromLine.indexOf("<");
    newsletterName = (angleIndex > -1 ? fromLine.slice(0, angleIndex).trim() : fromLine) || newsletterEmail;
    subscriptionEmail = extractEmailAddress(toLine);
    t = t.slice(match.index + match[0].length);
  }

  const cleanedText = t
    .replace(INVISIBLE_CHARS, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return { newsletterName, subscriptionEmail, cleanedText };
}

// Most ESPs put an "unsubscribe" link somewhere in the footer — find it so
// each story can carry a direct way to leave that specific subscription.
function extractUnsubscribeLink(html) {
  if (!html) return null;
  const anchorRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorRegex)) {
    const href = match[1];
    const linkText = match[2].replace(/<[^>]+>/g, "").trim();
    // Often it's "unsubscribe" as plain text right before a generic "here"
    // link, not the anchor's own text — check what precedes the link too.
    const precedingText = html.slice(Math.max(0, match.index - 150), match.index).replace(/<[^>]+>/g, " ");
    if (
      /unsubscribe/i.test(href) ||
      /unsubscribe/i.test(linkText) ||
      /unsubscribe\s*$/i.test(precedingText.trim())
    ) {
      return href;
    }
  }
  return null;
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

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

async function summarizeEmail(raw, rawFile) {
  const { newsletterName, subscriptionEmail, cleanedText } = parseForwardedEmail(
    raw.text_body?.trim() || htmlToText(raw.html_body || "")
  );
  const unsubscribeUrl = extractUnsubscribeLink(raw.html_body);
  const source = newsletterName || raw.from;

  const items = await extractItems(raw, cleanedText);

  for (const [index, item] of items.entries()) {
    item.source = source;
    item.subscriptionEmail = subscriptionEmail;
    item.unsubscribeUrl = unsubscribeUrl;
    // Sponsored placements are relayed as-is, not fetched — they're ads,
    // not picks worth reading in full. Everything else gets its full text,
    // now that fetches are cheap (cached permanently, never repeated).
    item.full_text = !item.sponsored && item.url ? await fetchArticleText(item.url) : null;
    // Single-story email with no fetchable link: the email body itself is
    // the only full text we have.
    if (!item.full_text && !item.sponsored && items.length === 1) item.full_text = cleanedText;

    const uniquePart = crypto.createHash("sha1").update(`${rawFile}-${index}`).digest("hex").slice(0, 6);
    item.slug = `${slugify(item.title)}-${uniquePart}`;
  }

  return items;
}

function frontMatterValue(value) {
  return JSON.stringify(value);
}

function buildStoryMarkdown(item, dateDir) {
  const fields = {
    layout: "story",
    title: item.title,
    date: dateDir,
    permalink: item.permalink,
    source: item.source,
    subscription_email: item.subscriptionEmail,
    unsubscribe_url: item.unsubscribeUrl,
    original_url: item.url,
    category: item.category,
  };

  let front = "---\n";
  for (const [key, value] of Object.entries(fields)) {
    if (value == null) continue;
    front += `${key}: ${frontMatterValue(value)}\n`;
  }
  front += "---\n\n";

  const teaser = item.existing_summary || (item.summary_bullets || []).map((b) => `- ${b}`).join("\n");
  let body = teaser ? `${teaser}\n\n` : "";

  if (item.full_text) {
    body += `---\n\n${item.full_text}\n`;
  } else if (item.url) {
    body += `*Couldn't fetch the full article — [read it on the original site ↗](${item.url}).*\n`;
  }

  return front + body;
}

function writeStoryFile(item, dateDir) {
  fs.mkdirSync(STORIES_DIR, { recursive: true });
  const filePath = path.join(STORIES_DIR, `${dateDir}-${item.slug}.md`);
  fs.writeFileSync(filePath, buildStoryMarkdown(item, dateDir));
}

async function main() {
  const unprocessed = findUnprocessedRawFiles();
  const allItems = [];
  const failures = [];

  if (unprocessed.length === 0) {
    console.log("No new emails to extract — re-rendering today's index and stories from cached data.");
  }

  for (const { rawFilePath, dateDir, file } of unprocessed) {
    const raw = JSON.parse(fs.readFileSync(rawFilePath, "utf8"));
    console.log(`Summarizing: ${raw.subject}`);
    // One email failing to summarize (a truncated model response, an
    // unreachable link, etc.) shouldn't discard everything already
    // processed in this run — skip it and leave it unprocessed so the
    // next run retries just that one.
    let items;
    try {
      items = await summarizeEmail(raw, file);
    } catch (err) {
      console.error(`  ↳ failed, will retry next run: ${err.message}`);
      failures.push(raw.subject);
      continue;
    }
    console.log(`  ↳ ${items.length} stor${items.length === 1 ? "y" : "ies"}`);

    const [year, month, day] = dateDir.split("-");
    for (const item of items) {
      item.permalink = `/${year}/${month}/${day}/stories/${item.slug}/`;
    }

    allItems.push(...items);

    const processedDir = path.join(PROCESSED_DIR, dateDir);
    fs.mkdirSync(processedDir, { recursive: true });
    fs.writeFileSync(path.join(processedDir, file), JSON.stringify(items, null, 2));
  }

  if (unprocessed.length > 0 && allItems.length === 0 && failures.length > 0) {
    console.log("Nothing compiled successfully this run.");
    process.exitCode = 1;
    return;
  }

  // Rebuild the index from every item processed today, not just what this
  // run added — a retry after a partial failure must not drop the items an
  // earlier run in the same day already succeeded on. Also covers the
  // no-new-emails case: re-renders from whatever's already cached.
  const today = new Date().toISOString().slice(0, 10);
  const todaysItems = loadProcessedItems(today);
  if (todaysItems.length === 0) {
    console.log("Nothing processed for today yet.");
    return;
  }

  // Regenerate every story file for the day, not just the ones this run
  // added — pure local re-render from cached data, no network or API calls,
  // so layout/rendering changes apply to everything without reprocessing.
  for (const item of todaysItems) {
    writeStoryFile(item, today);
  }

  const byCategory = {};
  for (const item of todaysItems) {
    (byCategory[item.category] ??= []).push(item);
  }

  let body = `---\nlayout: issue\ntitle: "Issue — ${today}"\ndate: ${today}\n---\n\n`;

  const categories = Object.keys(byCategory);
  body += `**Jump to:** ${categories.map((c) => `[${c}](#${slugify(c)})`).join(" · ")}\n\n`;

  for (const [category, categoryItems] of Object.entries(byCategory)) {
    body += `## ${category}\n\n`;
    for (const item of categoryItems) {
      const attributionParts = [item.source];
      if (item.sponsored) attributionParts.push("*Sponsored*");
      if (item.subscriptionEmail) attributionParts.push(`via ${item.subscriptionEmail}`);
      if (item.unsubscribeUrl) attributionParts.push(`[unsubscribe](${item.unsubscribeUrl})`);

      body += `### [${item.title}](${item.permalink})\n_${attributionParts.join(" · ")}_\n\n`;
      const teaser = item.existing_summary || (item.summary_bullets || []).join(" ");
      body += `${teaser}\n\n`;
      body += item.full_text
        ? `[Read full piece →](${item.permalink})\n\n`
        : item.url
          ? `[Read on original site ↗](${item.url})\n\n`
          : "\n";
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
