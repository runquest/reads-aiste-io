// Receives Postmark's inbound-webhook POST for each forwarded newsletter,
// and commits it as a raw article JSON file into this repo via the GitHub
// Contents API. Deploy with `wrangler deploy` from the worker/ directory.

export default {
  async fetch(request, env) {
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

    const githubResponse = await fetch(
      `https://api.github.com/repos/${env.GITHUB_REPO}/contents/${filePath}`,
      {
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
      }
    );

    if (!githubResponse.ok) {
      const errorText = await githubResponse.text();
      return new Response(`GitHub commit failed: ${errorText}`, { status: 502 });
    }

    return new Response("OK", { status: 200 });
  },
};
