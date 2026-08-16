// Two responsibilities, routed by path:
//  - POST /            Postmark's inbound-webhook for each forwarded newsletter,
//                       committed as raw article JSON via the GitHub Contents API.
//  - GET/POST /state    Per-story read/revisit flags, backed by KV, so the state
//                       is shared across every device instead of living in one
//                       browser's localStorage.
//  - GET/POST /state/<slug>/note   Per-story free-text notes, backed by KV.
//  - GET/POST /state/<slug>/highlights            List/create passage- or
//                                    unanchored quick-capture annotations.
//  - POST/DELETE /state/<slug>/highlights/<id>    Edit/remove one annotation.
// Deploy with `wrangler deploy` from the worker/ directory.

// localhost is allowed alongside production so `bundle exec jekyll serve`
// can exercise the real Worker while developing, not just production.
const ALLOWED_ORIGINS = ["https://reads.aiste.io", "http://localhost:4000"];

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(request, data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { "Content-Type": "application/json", ...corsHeaders(request), ...(init.headers || {}) },
  });
}

async function handleIntake(request, env) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const url = new URL(request.url);
  if (url.searchParams.get("secret") !== env.WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = await request.json();

  const article = {
    from: payload.From,
    subject: payload.Subject,
    html_body: payload.HtmlBody,
    text_body: payload.TextBody,
    received_at: new Date().toISOString(),
  };

  const date = article.received_at.slice(0, 10);
  const slug = (payload.Subject || "untitled")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
  const filePath = `raw/${date}/${Date.now()}-${slug}.json`;

  const githubResponse = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "User-Agent": "reads-aiste-io-worker",
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      message: `Capture raw email: ${payload.Subject}`,
      content: btoa(unescape(encodeURIComponent(JSON.stringify(article, null, 2)))),
    }),
  });

  if (!githubResponse.ok) {
    const errorText = await githubResponse.text();
    return new Response(`GitHub commit failed: ${errorText}`, { status: 502 });
  }

  return new Response("OK", { status: 200 });
}

// STATE_SECRET isn't real access control — it's embedded in the site's public
// JS, so anyone can read it. Its only job is to stop random bots from
// spamming the endpoint; the data behind it (which articles you've read)
// isn't sensitive.
function checkStateAuth(request, env) {
  const url = new URL(request.url);
  return url.searchParams.get("token") === env.STATE_SECRET;
}

async function handleGetState(request, env) {
  const state = {};
  let cursor;
  do {
    const page = await env.READS_STATE.list({ prefix: "state:", cursor });
    for (const key of page.keys) {
      const slug = key.name.slice("state:".length);
      state[slug] = key.metadata || {};
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return jsonResponse(request, state);
}

// Shared by handlePostState (read/revisit toggles) and handlePostNote (which
// only ever patches hasNote) so both go through one merge-and-persist path
// instead of duplicating the "read existing metadata, overlay the patch"
// logic. Any field omitted from `patch` keeps its existing value, defaulting
// to false for a slug seen for the first time.
async function mergeState(env, slug, patch) {
  const key = `state:${slug}`;
  const existing = await env.READS_STATE.getWithMetadata(key);
  const merged = {
    read: typeof patch.read === "boolean" ? patch.read : existing.metadata?.read ?? false,
    revisit: typeof patch.revisit === "boolean" ? patch.revisit : existing.metadata?.revisit ?? false,
    hasNote: typeof patch.hasNote === "boolean" ? patch.hasNote : existing.metadata?.hasNote ?? false,
    updated: new Date().toISOString(),
  };
  await env.READS_STATE.put(key, "", { metadata: merged });
  return merged;
}

async function handlePostState(request, env, slug) {
  let update;
  try {
    update = await request.json();
  } catch {
    return jsonResponse(request, { error: "invalid JSON body" }, { status: 400 });
  }

  const merged = await mergeState(env, slug, update);
  return jsonResponse(request, merged);
}

// Notes are free text, potentially well over KV's 1024-byte metadata limit,
// so they live in their own "note:<slug>" key's value instead of riding
// along in the read/revisit metadata. That also means the bulk GET /state
// list (which reads metadata only, no per-key value fetch) stays cheap as
// story count grows — notes are only ever fetched one slug at a time.
// The one exception is *whether* a note exists: handlePostNote mirrors that
// into the state metadata's `hasNote` flag, so index pages can show a "has
// notes" indicator using the bulk /state fetch they already make, without a
// second endpoint or per-slug requests.
async function handleGetNote(request, env, slug) {
  const note = await env.READS_STATE.get(`note:${slug}`);
  return jsonResponse(request, { note: note || "" });
}

// hasNote now covers two independent things — the general note and the
// highlights list — so it can't be set from just one of them in isolation
// (deleting the last highlight shouldn't clear it if a general note still
// exists, and vice versa). Both handlePostNote and the highlight mutators
// recompute it fresh from both sources rather than passing a boolean through.
async function computeHasNote(env, slug) {
  const note = await env.READS_STATE.get(`note:${slug}`);
  if (note && note.trim() !== "") return true;
  const highlights = await getHighlights(env, slug);
  return highlights.length > 0;
}

async function handlePostNote(request, env, slug) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(request, { error: "invalid JSON body" }, { status: 400 });
  }

  const note = typeof body.note === "string" ? body.note : "";
  const key = `note:${slug}`;
  if (note.trim() !== "") {
    await env.READS_STATE.put(key, note);
  } else {
    await env.READS_STATE.delete(key);
  }

  await mergeState(env, slug, { hasNote: await computeHasNote(env, slug) });
  return jsonResponse(request, { note });
}

// Highlights double as both passage-anchored annotations (quote/prefix/suffix
// set) and unanchored quick-capture notes (quote null) — same shape, same
// list, since a quick-capture note is just an annotation with nothing to
// anchor to. Stored as one JSON array per story rather than one KV key per
// highlight: simplest to read/write atomically, and article-scale lists are
// nowhere near KV's per-value size limit.
async function getHighlights(env, slug) {
  const raw = await env.READS_STATE.get(`highlights:${slug}`);
  if (!raw) return [];
  try {
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

async function putHighlights(env, slug, list) {
  await env.READS_STATE.put(`highlights:${slug}`, JSON.stringify(list));
}

async function handleGetHighlights(request, env, slug) {
  const highlights = await getHighlights(env, slug);
  return jsonResponse(request, { highlights });
}

async function handleCreateHighlight(request, env, slug) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(request, { error: "invalid JSON body" }, { status: 400 });
  }

  const note = typeof body.note === "string" ? body.note.trim() : "";
  if (!note) {
    return jsonResponse(request, { error: "note text is required" }, { status: 400 });
  }

  const entry = {
    id: crypto.randomUUID(),
    quote: typeof body.quote === "string" ? body.quote : null,
    prefix: typeof body.prefix === "string" ? body.prefix : null,
    suffix: typeof body.suffix === "string" ? body.suffix : null,
    note,
    created: new Date().toISOString(),
  };

  const list = await getHighlights(env, slug);
  list.push(entry);
  await putHighlights(env, slug, list);
  await mergeState(env, slug, { hasNote: true });

  return jsonResponse(request, entry, { status: 201 });
}

async function handleUpdateHighlight(request, env, slug, id) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(request, { error: "invalid JSON body" }, { status: 400 });
  }

  const note = typeof body.note === "string" ? body.note.trim() : "";
  if (!note) {
    return jsonResponse(request, { error: "note text is required" }, { status: 400 });
  }

  const list = await getHighlights(env, slug);
  const entry = list.find((h) => h.id === id);
  if (!entry) {
    return jsonResponse(request, { error: "not found" }, { status: 404 });
  }

  entry.note = note;
  await putHighlights(env, slug, list);
  return jsonResponse(request, entry);
}

async function handleDeleteHighlight(request, env, slug, id) {
  const list = await getHighlights(env, slug);
  const next = list.filter((h) => h.id !== id);
  if (next.length === list.length) {
    return jsonResponse(request, { error: "not found" }, { status: 404 });
  }

  await putHighlights(env, slug, next);
  await mergeState(env, slug, { hasNote: await computeHasNote(env, slug) });
  return jsonResponse(request, { deleted: true });
}

async function handleState(request, env) {
  if (!checkStateAuth(request, env)) {
    return jsonResponse(request, { error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  // ["state"], ["state", slug], ["state", slug, "note"],
  // ["state", slug, "highlights"], or ["state", slug, "highlights", id]
  const parts = url.pathname.split("/").filter(Boolean);

  if (request.method === "GET" && parts.length === 1) {
    return handleGetState(request, env);
  }
  if (request.method === "POST" && parts.length === 2) {
    return handlePostState(request, env, parts[1]);
  }
  if (request.method === "GET" && parts.length === 3 && parts[2] === "note") {
    return handleGetNote(request, env, parts[1]);
  }
  if (request.method === "POST" && parts.length === 3 && parts[2] === "note") {
    return handlePostNote(request, env, parts[1]);
  }
  if (request.method === "GET" && parts.length === 3 && parts[2] === "highlights") {
    return handleGetHighlights(request, env, parts[1]);
  }
  if (request.method === "POST" && parts.length === 3 && parts[2] === "highlights") {
    return handleCreateHighlight(request, env, parts[1]);
  }
  if (request.method === "POST" && parts.length === 4 && parts[2] === "highlights") {
    return handleUpdateHighlight(request, env, parts[1], parts[3]);
  }
  if (request.method === "DELETE" && parts.length === 4 && parts[2] === "highlights") {
    return handleDeleteHighlight(request, env, parts[1], parts[3]);
  }
  return jsonResponse(request, { error: "not found" }, { status: 404 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS" && url.pathname.startsWith("/state")) {
      return new Response(null, { headers: corsHeaders(request) });
    }
    if (url.pathname.startsWith("/state")) {
      return handleState(request, env);
    }
    return handleIntake(request, env);
  },
};
