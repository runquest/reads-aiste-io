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
    const scoped = articleMatch ? articleMatch[1] : html;
    // turndown doesn't strip script/style content by default — it just
    // drops the tags and keeps the text, which once broke the whole site
    // build when a page's ad-tech JS containing "{{" leaked through and
    // Jekyll's Liquid parser choked on it.
    const withoutScripts = scoped
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
    const markdown = turndown
      .turndown(withoutScripts)
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

// The issue page is generated as raw HTML blocks (not markdown headers) so
// it can match the magazine layout's exact grid/index-number structure —
// kramdown passes a block-level HTML element through byte-for-byte rather
// than parsing markdown inside it. That means, unlike plain markdown text
// (which kramdown HTML-escapes automatically), anything interpolated here
// from newsletter content needs escaping ourselves, or a malicious/
// compromised sender could inject arbitrary HTML/script into the page.
function escapeHtml(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function teaserText(item) {
  return item.existing_summary || (item.summary_bullets || []).join(" ");
}

// Which link (and label) a story's headline/CTA points at: the internal
// story page when we have full text worth reading there, straight to the
// original site when we only ever had a link, or nothing for a linkless
// sponsored blurb.
function ctaFor(item) {
  if (item.full_text) return { href: item.permalink, label: "Read full piece →" };
  if (item.url) return { href: item.url, label: "Read on original site ↗" };
  return null;
}

function attributionHtml(item) {
  const parts = [escapeHtml(item.source)];
  if (item.sponsored) parts.push("Sponsored");
  if (item.subscriptionEmail) parts.push(`via ${escapeHtml(item.subscriptionEmail)}`);
  // Not escapeHtml() here: unsubscribeUrl comes from extractUnsubscribeLink,
  // a regex over raw HTML source, so it's already HTML-attribute-encoded
  // (e.g. literal "&amp;" for a query string "&") exactly as the source
  // markup had it — escaping again would double-encode it and break the URL.
  if (item.unsubscribeUrl) parts.push(`<a href="${item.unsubscribeUrl}">unsubscribe</a>`);
  return parts.join(" &middot; ");
}

// Picks the longest word (≥4 alnum chars, punctuation trimmed) in a title as
// the one phrase to render in italic serif, per the design spec ("pick the
// most evocative word"). A real editorial choice would beat this, but that's
// a judgment call better made by a human later, not worth a dedicated model
// call for every story every day — this is a cheap, deterministic stand-in.
function pickEmphasisPhrase(title) {
  const words = title.split(/\s+/).filter(Boolean);
  let best = null;
  for (const word of words) {
    const clean = word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
    if (clean.length < 4) continue;
    if (!best || clean.length > best.length) best = clean;
  }
  return best;
}

// Escaping happens around the chosen phrase, not on the whole string first
// — escaping can change string length (e.g. "&" → "&amp;"), which would
// throw off a naive index-based split if done the other way around.
function renderEmphasizedTitle(title) {
  const phrase = pickEmphasisPhrase(title);
  if (!phrase) return escapeHtml(title);
  const idx = title.indexOf(phrase);
  const before = title.slice(0, idx);
  const after = title.slice(idx + phrase.length);
  return `${escapeHtml(before)}<em class="issue-emphasis">${escapeHtml(phrase)}</em>${escapeHtml(after)}`;
}

function renderStoryGridItem(item) {
  const cta = ctaFor(item);
  const titleHtml = escapeHtml(item.title);
  const titleInner = cta ? `<a href="${escapeHtml(cta.href)}">${titleHtml}</a>` : titleHtml;
  return `<div class="issue-story">
<h3 class="issue-story-heading">${titleInner} <span class="reads-controls" data-reads-slug="${item.slug}"></span></h3>
<div class="issue-story-blurb">${escapeHtml(teaserText(item))}</div>
<div class="issue-story-meta">${attributionHtml(item)}</div>
</div>`;
}

function renderStoryGrid(items) {
  const singleClass = items.length === 1 ? " issue-story-grid-single" : "";
  return `<div class="issue-story-grid${singleClass}">\n${items.map(renderStoryGridItem).join("\n")}\n</div>`;
}

function renderCategoryBlock(index, category, items) {
  return `<div class="issue-category-rule"></div>
<div class="issue-index-num">${String(index).padStart(2, "0")}</div>
<div class="issue-category-body">
<h2 class="issue-category-label">${escapeHtml(category)}</h2>
${renderStoryGrid(items)}
</div>`;
}

// The first category's first story gets the big lead treatment; any other
// stories that same category has follow immediately as a plain grid (no
// second index number/rule — they're still part of "01", not a new one).
function renderLead(item) {
  const cta = ctaFor(item);
  const ctaHtml = cta ? `<a class="issue-cta-btn" href="${escapeHtml(cta.href)}">${escapeHtml(cta.label)}</a>` : "";
  return `<div class="issue-lead">
<h2 class="issue-category-label">01 &middot; ${escapeHtml(item.category)}</h2>
<h1 class="issue-story-heading issue-lead-headline">${renderEmphasizedTitle(item.title)}</h1>
<div class="issue-lead-body">${escapeHtml(teaserText(item))}</div>
<div class="issue-lead-cta">
${ctaHtml}
<span class="issue-credit">${attributionHtml(item)}</span>
<span class="reads-controls" data-reads-slug="${item.slug}"></span>
</div>
</div>`;
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
    slug: item.slug,
    source: item.source,
    subscription_email: item.subscriptionEmail,
    unsubscribe_url: item.unsubscribeUrl,
    original_url: item.url,
    category: item.category,
    // We don't use page.excerpt anywhere; disabling it avoids Jekyll's
    // "Excerpt modified" build-log noise from the excerpt separator
    // landing inside our {% raw %} block on every single story.
    excerpt_separator: "",
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

  // Everything above is text from other people's emails/websites, not ours
  // — wrap it so a stray "{{" or "{%" in someone's article (ad-tech JS,
  // a code sample, whatever) can't be parsed as a Liquid tag and break
  // the whole site build, the way one already did.
  return `${front}{% raw %}\n${body}\n{% endraw %}\n`;
}

function writeStoryFile(item, dateDir) {
  fs.mkdirSync(STORIES_DIR, { recursive: true });
  const filePath = path.join(STORIES_DIR, `${dateDir}-${item.slug}.md`);
  fs.writeFileSync(filePath, buildStoryMarkdown(item, dateDir));
}

// Rebuilds one day's story files and index post from whatever's in
// processed/<dateDir>/ — pure local re-render, no network or API calls, so
// it's cheap enough to run for every day on every invocation. That's what
// makes a rendering/layout change apply everywhere without reprocessing,
// including days before the one currently running.
function renderIssueDate(dateDir) {
  const items = loadProcessedItems(dateDir);
  if (items.length === 0) return 0;

  for (const item of items) {
    writeStoryFile(item, dateDir);
  }

  const byCategory = {};
  for (const item of items) {
    (byCategory[item.category] ??= []).push(item);
  }

  const categoryEntries = Object.entries(byCategory);
  const [leadCategoryName, leadCategoryItems] = categoryEntries[0];
  const [leadItem, ...restOfLeadCategory] = leadCategoryItems;
  const remainingCategories = categoryEntries.slice(1);

  let body = `---\nlayout: issue\ntitle: "Issue — ${dateDir}"\ndate: ${dateDir}\n---\n\n`;
  // Everything below is text from other people's emails/websites, not ours,
  // and rendered as raw HTML blocks rather than markdown (see escapeHtml
  // above) — wrap the lot so a stray "{{"/"{%" can't be parsed as Liquid
  // and break the whole site build, the way one already did.
  body += "{% raw %}\n";
  body += renderLead(leadItem) + "\n";
  if (restOfLeadCategory.length > 0) {
    body += renderStoryGrid(restOfLeadCategory) + "\n";
  }

  if (remainingCategories.length > 0) {
    body += `<div class="issue-categories">\n`;
    body += remainingCategories.map(([category, catItems], i) => renderCategoryBlock(i + 2, category, catItems)).join("\n");
    body += `\n</div>\n`;
  }
  body += "{% endraw %}\n";

  fs.mkdirSync(POSTS_DIR, { recursive: true });
  fs.writeFileSync(path.join(POSTS_DIR, `${dateDir}-issue.md`), body);
  return items.length;
}

async function main() {
  const unprocessed = findUnprocessedRawFiles();
  const allItems = [];
  const failures = [];

  if (unprocessed.length === 0) {
    console.log("No new emails to extract — re-rendering every day's index and stories from cached data.");
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

  // Rebuild every day's story files and index post, not just today's — a
  // rendering/layout change should apply everywhere without reprocessing,
  // and this is cheap (pure local re-render, no network or API calls).
  const dateDirs = fs.existsSync(PROCESSED_DIR)
    ? fs.readdirSync(PROCESSED_DIR).filter((f) => fs.statSync(path.join(PROCESSED_DIR, f)).isDirectory())
    : [];
  let totalItems = 0;
  for (const dateDir of dateDirs) {
    totalItems += renderIssueDate(dateDir);
  }

  const today = new Date().toISOString().slice(0, 10);
  const todaysCount = loadProcessedItems(today).length;
  const processedCount = unprocessed.length - failures.length;
  console.log(
    `Compiled ${totalItems} item(s) across ${dateDirs.length} day(s) (${todaysCount} today, ${allItems.length} new from ${processedCount}/${unprocessed.length} email(s) this run)`
  );
  if (failures.length > 0) {
    console.log(`Skipped ${failures.length} email(s), will retry next run: ${failures.join("; ")}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
