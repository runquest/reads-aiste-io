---
layout: "story"
title: "The new GPT-5.6 family: Luna, Terra, Sol"
date: "2026-08-09"
permalink: "/2026/08/09/stories/the-new-gpt-5-6-family-luna-terra-sol-c22999/"
slug: "the-new-gpt-5-6-family-luna-terra-sol-c22999"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22740/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "AI"
excerpt_separator: ""
---

{% raw %}
---

The new GPT-5.6 family: Luna, Terra, Sol                (function() { // Apply theme immediately to prevent flash const theme = localStorage.getItem('theme'); if (theme === 'light' || theme === 'dark') { document.documentElement.setAttribute('data-theme', theme); } })();

# [Simon Willison’s Weblog](/)

[Subscribe](/about/#subscribe)

**Sponsored by:** Dynatrace — When agents enter the SDLC, observability becomes the enabler to move from code generation to scalable engineering. [Read the blog for a framework to get started](https://fandf.co/4fwyS92)

## The new GPT-5.6 family: Luna, Terra, Sol

9th July 2026

OpenAI’s latest flagship model [hit general availability this morning](https://openai.com/index/gpt-5-6/), and comes in three sizes: Luna, Terra, and Sol (from smallest to largest).

The new models are priced per 1M input/output tokens as Luna $1/$6, Terra $2.50/$15, Sol $5/$30. For comparison, the Claude Opus series are $5/$25 and the Claude Fable 5 is $10/$50, but price-per-million tokens doesn’t tell us much now that the number of reasoning tokens can differ so much between models for the same task.

All three models have a February 16th 2026 knowledge cutoff, a million token context window, and 128,000 maximum output tokens.

OpenAI’s biggest benchmark claim concerns long-running agentic performance, with one benchmark showing all three models outperforming Claude Fable 5:

> We trained GPT-5.6 to get more useful work from every token. On [Agents’ Last Exam](https://agents-last-exam.org/), an evaluation of long-running professional workflows across 55 fields, GPT-5.6 Sol sets a new high of 53.6, eclipsing Claude Fable 5 (adaptive reasoning) by 13.1 points. Even at medium reasoning, it beats Fable 5 by 11.4 points at roughly one-quarter the estimated cost. That efficiency extends to smaller models, which are essential to making intelligence more abundant and affordable: GPT-5.6 Terra and GPT-5.6 Luna outperform Fable 5 at around one-sixteenth the cost.

Amusingly, one self-reported benchmark that Fable 5 crushed the GPT-5.6 family on was SWE-Bench Pro, where Fable 5 got 80% compared to GPT-5.6 Sol getting 64.6%. This may help explain why OpenAI chose to publish [this article yesterday](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) specifically calling out SWE-Bench Pro for problems they found while auditing that benchmark:

> In light of these results, we estimate that ~30% of SWE-bench Pro tasks are broken, and advise that model developers carefully examine results

I’ve had some early access to GPT-5.6 Sol—it’s definitely very competent, though so far it hasn’t struck me as better than Fable at the kind of complex coding tasks I’ve been using with Anthropic’s model.

As usual, the [model guidance for using GPT-5.6](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-5.6) has the most interesting details. There are a bunch of new API features that I need to explore (and probably add support for in [LLM](https://llm.datasette.io/)), including:

*   [Programmatic Tool Calling](https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling) allows the models to “compose and run JavaScript that orchestrates tool calls”—which sounds to me like it could help bridge the gap between MCPs and full terminal sessions that can compose CLI utilities in useful ways. Also reminiscent of the [dynamic filtering](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool#dynamic-filtering) mechanism Anthropic added to their web search tool, which allows code execution against web results as part of a single model turn.
*   [Multi-agent](https://developers.openai.com/api/docs/guides/tools-multi-agent) lets the model “spin up subagents for parallel, focused work”—the sub-agent pattern now baked into the core API.
*   [Prompt cache breakpoints](https://developers.openai.com/api/docs/guides/prompt-caching#prompt-cache-breakpoints) brings the Claude model of prompt caching to OpenAI, letting you be explicit about where the cache breakpoints are rather than relying on the API to detect them automatically. Personally I much prefer automatic detection (still supported by OpenAI), but presumably there are optimization cost savings to be had here if you put the work in.
*   You can now set [detail: original](https://developers.openai.com/api/docs/guides/images-vision#choose-an-image-detail-level) on image requests to avoid resizing the image at all before it is processed.

Here’s [a full page with 18 different pelicans](https://static.simonwillison.net/static/2026/gpt-5.6-pelicans.html)—for reasoning efforts none, low, medium, high, xhigh, and max across the three different models. It also lists their token and calculated costs—the least expensive was gpt-5.6-luna at effort none for 0.71 cents, the most expensive was gpt-5.6-sol at max reasoning level for 48.55 cents.

![A grid of nine pelicans riding bicycles, of varying quality](https://static.simonwillison.net/static/2026/gpt-5.6-pelicans.webp)

In further pelican news, if you jump to 17:50 in [their livestream from this morning](https://www.youtube.com/live/Wq45rvPGNHs?t=1070s) you’ll see OpenAI’s own demo of 3D pelicans riding a tricycle, a bicycle, a pony, and another pelican!

![Frame from a livestream showing a 3D model of a pelican riding another pelican](https://static.simonwillison.net/static/2026/pelican-riding-a-pelican.jpg)

Posted [9th July 2026](/2026/Jul/9/) at 7:46 pm · Follow me on [Mastodon](https://fedi.simonwillison.net/@simon), [Bluesky](https://bsky.app/profile/simonwillison.net), [Twitter](https://twitter.com/simonw) or [subscribe to my newsletter](https://simonwillison.net/about/#subscribe)

## More recent articles

*   [Now we have a timeline of the OpenAI accidental attack against Hugging Face](/2026/Aug/7/openai-timeline/) - 7th August 2026
*   [One-shotting a Raccoon Heist game using Claude Fable 5](/2026/Aug/5/raccoon-heist/) - 5th August 2026
*   [New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smarter logging](/2026/Aug/4/new-release-of-llm/) - 4th August 2026

This is **The new GPT-5.6 family: Luna, Terra, Sol** by Simon Willison, posted on [9th July 2026](/2026/Jul/9/).

[ai 2,177](/tags/ai/) [openai 446](/tags/openai/) [generative-ai 1,928](/tags/generative-ai/) [llms 1,895](/tags/llms/) [llm-tool-use 75](/tags/llm-tool-use/) [llm-pricing 89](/tags/llm-pricing/) [pelican-riding-a-bicycle 131](/tags/pelican-riding-a-bicycle/) [llm-release 221](/tags/llm-release/) [gpt-5 31](/tags/gpt-5/)

**Next:** [Kimi K3, and what we can still learn from the pelican benchmark](/2026/Jul/16/kimi-k3/)

**Previous:** [sqlite-utils 4.0, now with database schema migrations](/2026/Jul/7/sqlite-utils-4/)

### Monthly briefing

Sponsor me for **$10/month** and get a curated email digest of the month's most important LLM developments.

Pay me to send you less!

[Sponsor & subscribe](https://github.com/sponsors/simonw/)

*   [Disclosures](/about/#disclosures)
*   [Colophon](/about/#about-site)
*   ©
*   [2002](/2002/)
*   [2003](/2003/)
*   [2004](/2004/)
*   [2005](/2005/)
*   [2006](/2006/)
*   [2007](/2007/)
*   [2008](/2008/)
*   [2009](/2009/)
*   [2010](/2010/)
*   [2011](/2011/)
*   [2012](/2012/)
*   [2013](/2013/)
*   [2014](/2014/)
*   [2015](/2015/)
*   [2016](/2016/)
*   [2017](/2017/)
*   [2018](/2018/)
*   [2019](/2019/)
*   [2020](/2020/)
*   [2021](/2021/)
*   [2022](/2022/)
*   [2023](/2023/)
*   [2024](/2024/)
*   [2025](/2025/)
*   [2026](/2026/)

image-gallery:not(:defined) img {max-height: 150px;} captioned-image-gallery:not(:defined) > figure {max-height: 240px; overflow: hidden;} document.addEventListener('DOMContentLoaded', () => { document.querySelectorAll('h2\[id\],h3\[id\],h4\[id\],h5\[id\],h6\[id\]').forEach(el => { const id = el.getAttribute('id'); const permalinkContext = el.closest('\[data-permalink-context\]'); if (permalinkContext) { const url = permalinkContext.getAttribute('data-permalink-context'); const hashLink = document.createElement('a'); hashLink.style.borderBottom = 'none'; hashLink.style.color = '#666'; hashLink.style.fontSize = '1em'; hashLink.style.opacity = 0.8; hashLink.setAttribute('href', url + '#' + id); hashLink.innerText = '#'; el.appendChild(document.createTextNode('\\u00A0')); el.appendChild(hashLink); } }); }); const config = \[ {"tag": "lite-youtube", "js": "/static/lite-yt-embed.js", "css": "/static/lite-yt-embed.css"}, {"tag": "image-gallery", "js": "/static/image-gallery.js", "css": null}, {"tag": "captioned-image-gallery", "js": "/static/captioned-image-gallery.js", "css": null}, {"tag": "click-to-play", "js": "/static/click-to-play.js", "css": "/static/click-to-play.css"}, {"tag": "github-code", "js": "/static/github-code.js", "css": null} \]; for (const {tag, js, css} of config) { if (document.querySelector(tag)) { if (css) { document.head.appendChild( Object.assign(document.createElement('link'), { rel: 'stylesheet', href: css }) ); } if (js) { await import(js); } } } document.addEventListener('DOMContentLoaded', () => { if (window.localStorage.getItem('ADMIN')) { document.querySelectorAll('.edit-page-link').forEach(el => { const url = el.getAttribute('data-admin-url'); if (url) { const a = document.createElement('a'); a.href = url; a.className = 'edit-link'; a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Edit'; el.appendChild(a); el.style.display = 'block'; } }); } }); // Random tag navigation - shows button if recently came from tag random (function() { const stored = localStorage.getItem('random\_tag'); if (!stored) return; try { const data = JSON.parse(stored); const elapsed = Date.now() - data.timestamp; // Only show if within 5 seconds if (elapsed > 5000) return; const header = document.getElementById('smallhead-inner'); if (!header) return; const btn = document.createElement('a'); btn.href = '/random/' + encodeURIComponent(data.tag) + '/'; btn.className = 'random-tag-nav'; btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"></circle><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"></circle><circle cx="8.5" cy="15.5" r="1.5" fill="currentColor" stroke="none"></circle><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" stroke="none"></circle><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"></circle></svg> Random ' + data.tag; btn.addEventListener('click', function(e) { // Bump the timestamp before navigating localStorage.setItem('random\_tag', JSON.stringify({ tag: data.tag, timestamp: Date.now() })); }); // Insert before the Subscribe link const subscribeLink = document.getElementById('smallhead-about'); if (subscribeLink) { header.insertBefore(btn, subscribeLink); } else { header.appendChild(btn); } } catch (e) { // Invalid JSON, clear it localStorage.removeItem('random\_tag'); } })(); // Theme toggle functionality (function() { const toggle = document.getElementById('theme-toggle'); const iconAuto = document.getElementById('icon-auto'); const iconLight = document.getElementById('icon-light'); const iconDark = document.getElementById('icon-dark'); // Theme states: 'auto' (default), 'light', 'dark' function getTheme() { return localStorage.getItem('theme') || 'auto'; } function setTheme(theme) { if (theme === 'auto') { localStorage.removeItem('theme'); document.documentElement.removeAttribute('data-theme'); } else { localStorage.setItem('theme', theme); document.documentElement.setAttribute('data-theme', theme); } updateIcon(theme); } function updateIcon(theme) { iconAuto.style.display = theme === 'auto' ? 'block' : 'none'; iconLight.style.display = theme === 'light' ? 'block' : 'none'; iconDark.style.display = theme === 'dark' ? 'block' : 'none'; // Update aria-label for accessibility const labels = { 'auto': 'Theme: Auto (system preference). Click to switch to light.', 'light': 'Theme: Light. Click to switch to dark.', 'dark': 'Theme: Dark. Click to switch to auto.' }; toggle.setAttribute('aria-label', labels\[theme\]); } // Cycle through themes: auto -> light -> dark -> auto function cycleTheme() { const current = getTheme(); const next = current === 'auto' ? 'light' : current === 'light' ? 'dark' : 'auto'; setTheme(next); } // Initialize updateIcon(getTheme()); toggle.addEventListener('click', cycleTheme); })();

{% endraw %}
