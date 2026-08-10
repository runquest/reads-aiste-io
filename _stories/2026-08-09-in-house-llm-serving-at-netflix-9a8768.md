---
layout: "story"
title: "In-house LLM serving at Netflix"
date: "2026-08-09"
permalink: "/2026/08/09/stories/in-house-llm-serving-at-netflix-9a8768/"
slug: "in-house-llm-serving-at-netflix-9a8768"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22802/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Netflix runs its own LLM serving stack on top of vLLM and NVIDIA Triton, integrated into existing production infrastructure rather than a separate system. Key decisions around engine choice, model packaging, API design, and deployment strategies each revealed unexpected trade-offs only under real production load. A notable example is constrained decoding, where per-request CPU processing caused latency to grow linearly with batch size until a rewrite using vLLM V1's batch-level API and C++ solved the bottleneck.

*Couldn't fetch the full article — [read it on the original site ↗](https://programmingdigest.net/links/22802/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email).*

{% endraw %}
