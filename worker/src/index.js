// Two responsibilities, routed by path:
//  - POST /            Postmark's inbound-webhook for each forwarded newsletter,
//                       committed as raw article JSON via the GitHub Contents API.
//  - GET/POST /state    Per-story read/revisit flags, backed by KV, so the state
//                       is shared across every device instead of living in one
//                       browser's localStorage.
// Deploy with `wrangler deploy` from the worker/ directory.

// localhost is allowed alongside production so `bundle exec jekyll serve`
// can exercise the real Worker while developing, not just production.
const ALLOWED_ORIGINS = ["https://reads.aiste.io", "http://localhost:4000"];

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

async function handlePostState(request, env, slug) {
  let update;
  try {
    update = await request.json();
  } catch {
    return jsonResponse(request, { error: "invalid JSON body" }, { status: 400 });
  }

  const key = `state:${slug}`;
  const existing = await env.READS_STATE.getWithMetadata(key);
  const merged = {
    read: typeof update.read === "boolean" ? update.read : existing.metadata?.read ?? false,
    revisit: typeof update.revisit === "boolean" ? update.revisit : existing.metadata?.revisit ?? false,
    updated: new Date().toISOString(),
  };

  await env.READS_STATE.put(key, "", { metadata: merged });
  return jsonResponse(request, merged);
}

async function handleState(request, env) {
  if (!checkStateAuth(request, env)) {
    return jsonResponse(request, { error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean); // ["state"] or ["state", slug]

  if (request.method === "GET" && parts.length === 1) {
    return handleGetState(request, env);
  }
  if (request.method === "POST" && parts.length === 2) {
    return handlePostState(request, env, parts[1]);
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
