# reads.aiste.io

Daily newsletter digest — forwarded newsletters get cleaned, summarized, and grouped by category into one dated "Issue," published as a static site. Phase 1 of the [Kindle newsletter digest](https://github.com/runquest/delulu-lab/tree/main/raw/kindle-newsletter-digest) idea; design/architecture rationale lives there (`CONTEXT.md`, `docs/adr/`).

## How it works

1. **Intake** (`worker/`) — a Cloudflare Worker receives Postmark's inbound-webhook POST for each forwarded newsletter and commits it as raw JSON under `raw/<date>/`.
2. **Compile** (`scripts/compile-issue.mjs`, run daily by `.github/workflows/compile-issue.yml`) — cleans, summarizes, and categorizes every raw article that doesn't yet have a `processed/` counterpart, via the Anthropic API, then writes `_posts/<date>-issue.md`.
3. **Publish** — Jekyll (GitHub Pages' native build) renders `_posts/` into the site.

## Local development

```sh
bundle install
bundle exec jekyll serve   # site at localhost:4000

npm install
ANTHROPIC_API_KEY=sk-... npm run compile   # test the compile step against raw/ files you drop in manually
```

To test compilation without live intake, hand-craft a file like `raw/2026-08-09/test.json`:

```json
{
  "from": "Stratechery",
  "subject": "Some article title",
  "text_body": "The full article text...",
  "received_at": "2026-08-09T08:00:00.000Z"
}
```

then run `npm run compile`.

## Setup still needed

See the setup wizard for: Postmark account + inbound route, DNS records at Namecheap, Cloudflare Worker deploy + secrets, and GitHub repo secrets. Not yet done — this repo currently only proves the compile → publish half of the pipeline.
