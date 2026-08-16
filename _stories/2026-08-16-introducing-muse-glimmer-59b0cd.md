---
layout: "story"
title: "Introducing Muse Glimmer"
date: "2026-08-16"
permalink: "/2026/08/16/stories/introducing-muse-glimmer-59b0cd/"
slug: "introducing-muse-glimmer-59b0cd"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=19a357d8-9567-11f1-8920-5509caa85f4b%26pt=campaign%26pv=4%26spa=1786442421%26t=1786446300%26s=fc247acc8bb43bac5f03a6bb2beab7cfcd8e4075f86c22f936cd2becadffed74/1/0100019ff07f45ea-2a2ade7c-c4d8-499e-ac2b-8e5de6023415-000000/rWP3qNiD0yXK-XrlRacLGrx494EiqNaC8XEZotRbtE0=452"
original_url: "https://simonwillison.net/2026/Aug/10/introducing-muse-glimmer/"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Muse Glimmer is a 30B open weights model optimized for end-to-end agentic task completion, reliable tool use, and multi-step reasoning.

---

Introducing Muse Glimmer               

# [Simon Willison’s Weblog](/)

[Subscribe](/about/#subscribe)

**Sponsored by:** WorkOS — [auth.md](https://10xn.link/simon-workos) by WorkOS: agents register users, no sign-up form. [Try it!](https://10xn.link/simon-workos)

10th August 2026 - Link Blog

**[Introducing Muse Glimmer](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)** ([via](https://news.ycombinator.com/item?id=49241679 "Hacker News")) Meta are back in the open weights game! Muse Glimmer is a brand new 30B model under a clean Apache 2.0 license (a step up from the janky Llama licenses of old).

They claim to have optimized it for exactly the kind of things I'm looking for in a local model:

> *   **End-to-end Agentic Task Completion.** Muse Glimmer achieves strong success rates on full-task benchmarks including DeepSearch QA, MCP-Atlas, 𝛕-Bench and SWE-Bench, which measure its ability to work within scaffolds, write and debug code, and resolve multi-turn requests from start to finish.
> *   **Reliable Tool Use.** The model handles a wide range of function calls, invoking tools with precise schemas throughout extended workflows.
> *   **Multi-Step Reasoning.** Muse Glimmer chains reasoning over long horizons, sustaining coherent plans across complex, extended workflows. \[...\]

Here's [a pelican](https://gist.github.com/simonw/f20d4cd0ea7596990f7910ead616493e) which I generated using LM Studio's [18.16 GB version of the model](https://lmstudio.ai/models/muse-glimmer):

![All the pieces are there but they are pretty jumbled together.](https://static.simonwillison.net/static/2026/glimmer-pelican.png)

I also tried it out with my [llm-coding-agent](https://github.com/simonw/llm-coding-agent) plugin, running against a fresh checkout of Datasette with the prompt:

> `how does auth work?`

[Here's the response](https://gist.github.com/simonw/3623676275da1a6078b2500dcc78116f#response-24), at the end of a long transcript showing all of the tool calls it made to explore the codebase. I ran this using `llm-lmstudio` with [this patch applied](https://github.com/agustif/llm-lmstudio/pull/14) to upgrade it for compatibility with [LLM 0.32](https://llm.datasette.io/en/stable/changelog.html#v0-32).

I really like this size of model, because if a machine has 32 GB of RAM or more (mine has 128GB) it leaves plenty of space for running other applications at the same time.

Glimmer is a vision model, so I asked it to describe this image:

`llm -m lmstudio/meta/muse-glimmer -a https://static.inaturalist.org/photos/714731804/large.jpg 'describe image'`

![Two pelicans on some rocks](https://static.simonwillison.net/static/2026/pelicans-on-rocks.jpg)

Here's [what I got back](https://gist.github.com/simonw/288ef0dd33a913455d1b1ecc329637e0#response):

> The photograph shows a rocky, breakwater-style shoreline on an overcast day with a smooth, gray body of water and a faint dock/pier line in the soft-focused background.
> 
> In the foreground two large brown pelicans, _Pelecanus occidentalis_, are perched on the jumbled gray-white stones. They have the species’ characteristic long, down-curved yellow-orange bills with a large throat pouch, long slender necks and mottled brown-gray plumage on the back and wings. The pelican on the left is turned slightly toward the camera and appears to be preening or resting its bill against its chest; a pale, whitish patch is visible on the crown and nape and a small crest of feathers is raised. The pelican on the right faces mostly forward/right, its head up, bill pointing down and to the right, with the same pale head markings and the barred, darker wing feathers clearly visible.
> 
> Scattered among the rocks around the two pelicans are several much smaller dark birds — gulls/tern-like birds in muted brown-gray plumage. One dark bird sits on the far left on a rock, another brownish bird stands to the right of the right-hand pelican, a grayish bird with a reddish bill is in the lower right foreground, and a further small dark bird is at the extreme right edge of the frame.
> 
> The overall light is flat and diffused, giving the water and sky a muted, almost monochromatic palette that contrasts with the textured rock and the detailed feathering of the pelicans. The composition places the two big birds as the dominant subjects, framed against the calm water and the low, rocky perch.

Posted [10th August 2026](/2026/Aug/10/) at 11:56 pm

## Recent articles

*   [Now we have a timeline of the OpenAI accidental attack against Hugging Face](/2026/Aug/7/openai-timeline/) - 7th August 2026
*   [One-shotting a Raccoon Heist game using Claude Fable 5](/2026/Aug/5/raccoon-heist/) - 5th August 2026
*   [New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smarter logging](/2026/Aug/4/new-release-of-llm/) - 4th August 2026

This is a **link post** by Simon Willison, posted on [10th August 2026](/2026/Aug/10/).

[ai 2,187](/tags/ai/) [generative-ai 1,938](/tags/generative-ai/) [llama 81](/tags/llama/) [local-llms 163](/tags/local-llms/) [llms 1,905](/tags/llms/) [llm 622](/tags/llm/) [vision-llms 87](/tags/vision-llms/) [meta 42](/tags/meta/) [pelican-riding-a-bicycle 134](/tags/pelican-riding-a-bicycle/) [llm-release 224](/tags/llm-release/)

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

{% endraw %}
