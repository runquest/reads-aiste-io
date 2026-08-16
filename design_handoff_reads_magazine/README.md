# Handoff: Reads Magazine Redesign (aiste.io style)

## Overview
Redesign of reads.aiste.io — a daily digest of newsletters, currently rendered as an unstyled list of jump-links and plain text. This handoff covers the selected direction: a magazine layout styled after the aiste.io brand (warm palette, italic-serif emphasis, numbered index sections), responsive from desktop down to mobile.

## About the Design Files
The bundled HTML file is a **design reference** built as static mockups (desktop + mobile frames side by side), not production code. Recreate this design **in the existing Jekyll site** (reads.aiste.io) using Jekyll layouts, includes, and Sass — not by copying the HTML wrapper/scaling divs used to present the mockup.

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy below are final — implement pixel-close using the codebase's existing Jekyll/Sass setup.

## Site structure (Jekyll)
Two templates are needed:
1. **Home** (`index.html` / `layout: home`) — masthead + list of issues (currently just a bare bullet list of dates).
2. **Issue page** (`_layouts/issue.html`, used by `_posts`/collection items under `/YYYY/MM/DD/issue/`) — the magazine layout below, repeated once per category found in the issue's front matter/data.

Each issue is a sequence of **categories**, each containing one or more **stories** with: title, link, source name, optional "Sponsored" flag, and a summary blurb. Preserve this data shape — only the presentation changes.

## Layout — Issue page (desktop, ≥1024px)
- Max content width: 920px for the lead story block; full-bleed header bar above it.
- **Header bar**: flex row, `padding: 16px 40px`, `border-bottom: 1px solid #ece7da`. Left: wordmark "aiste.io" (700 weight) + " / reads" (400 weight, `#8a8270`). Right: nav links "All Articles", "Revisit List" (13px, 600 weight, plain text) + a pill badge showing the issue date (`background:#e8b84b; color:#1c1c1a; padding:6px 14px; border-radius:24px`).
- **Lead story** (first category of the issue): category label above headline — 12px, 700 weight, uppercase, `letter-spacing:.08em`, color `#a3833a`, prefixed with an index number ("01 · Culture"). Headline 38px/1.12, 700 weight, `letter-spacing:-.01em`; one emphasized word/phrase per headline rendered in italic serif (`font-family:'Instrument Serif', serif; font-style:italic; font-weight:400; color:#a3833a`) — pick the most evocative word from the title. Body copy below at 14.5px/1.6, `color:#4a4638`, max-width 680px. CTA row: black pill button "Read full piece →" (`background:#1c1c1a;color:#fff;padding:9px 18px;border-radius:24px;font-size:13px;font-weight:600`) + italic source credit next to it (13px, `#8a8270`).
- **Subsequent categories**: two-column grid, `grid-template-columns: 28px 1fr` — left column holds the running index number (02, 03…, 12px/700/`#a3833a`), right column holds the category label (11.5px/700/uppercase/`#a3833a`) then its stories. A 1px `#ece7da` rule sits above each category block.
- Multi-story categories lay stories out in a `grid-template-columns: 1fr 1fr` row (or single column if only one story): story title 19px/700/1.3, blurb 13.5px/1.6/`#4a4638` 6px below.
- One story per issue may carry a highlighter treatment on a key phrase: `background:#e8b84b; padding:0 4px` inline on the phrase.
- **Editor's Notes**: closing line under the last category — `border-top:1px solid #ece7da; padding-top:12px`, label "Editor's Notes · " (11px/700/uppercase/`#a3833a`) followed by an italic note (14px/1.6/`#4a4638`). No background fill — keep it a plain rule + text, not a card.
- Background: `#ffffff` throughout (not the cream `#f7f2e8` used on aiste.io's marketing pages — the digest reads cleaner in white).
- Typography: body font **Work Sans** (400/500/600/700/800), emphasis font **Instrument Serif** italic. Both loaded from Google Fonts.

## Layout — Issue page (mobile, ≤480px)
Same structure collapsed to a single column, padding reduced from 40px→16px, headline 38px→23px, story title 19px→18px, all vertical gaps tightened roughly 30–40% versus desktop (see spacing scale below). Nav pills stay but "All Articles"/"Revisit List" text links move behind a hamburger or a horizontally-scrollable strip if more than 2 links are needed later.

## Home page
Keep it minimal: same header bar treatment, then a plain list of issue dates as index-numbered rows (reuse the "01/02" numbered-row pattern from the issue page's category list) instead of a bare bullet list — each row links to that issue.

## Design tokens
**Colors**
- Ink / text: `#1c1c1a`
- Body copy: `#4a4638`
- Muted / meta text: `#8a8270`
- Accent (category labels, index numbers, index color): `#a3833a`
- Accent fill (badges, highlighter): `#e8b84b`
- Hairline rules: `#ece7da`
- Background: `#ffffff`

**Typography**
- Display/emphasis: `Instrument Serif`, italic, 400 — used sparingly, one phrase per lead headline only
- Body/UI: `Work Sans`, weights 400/600/700
- Scale (desktop → mobile): headline 38px→23px, story title 19px→18px, body 14.5px→13px, label 11–12px (fixed), meta 13px (fixed)

**Spacing**
- Section padding (desktop): 32px/24px vertical, 40px horizontal
- Section padding (mobile): 16px vertical/horizontal
- Rule margin: 20px desktop, 12–14px mobile
- Border radius: 24px (pills), none elsewhere

## Interactions & behavior
- "Read full piece →" pill links out to the story's original source URL (external link).
- Category jump nav (the current site's giant list of 50 anchor links) should be dropped from the visible layout — replace with the numbered in-page category flow; keep anchors (`id="culture"` etc.) on each category heading for deep-linking, just don't render them as a link wall.
- No JS-driven interactivity is required for v1 — this is a static Jekyll render.

## Assets
No images/icons used — text and color only. If a future revision adds a masthead image, source it from the existing aiste.io brand assets.

## Files
- `Reads Magazine Concepts.dc.html` (included in this folder) — contains all explored directions; the selected one is the option tagged **2a** ("Aiste.io house style") inside turn 2. Reference that section for exact markup/values; ignore the other options (1a/1b/1c) and the canvas/frame scaffolding (`.deskbox`, `.mobbox`, scaling transforms) used only to present the mockups side by side.
