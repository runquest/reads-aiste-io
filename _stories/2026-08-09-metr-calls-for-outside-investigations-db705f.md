---
layout: "story"
title: "METR Calls for Outside Investigations"
date: "2026-08-09"
permalink: "/2026/08/09/stories/metr-calls-for-outside-investigations-db705f/"
source: "MyClaw Newsletter"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://newsletter.myclaw.ai/unsubscribe/?uuid=2eaf3154-2af3-4e54-b574-fba62b0fa39d&amp;key=dc9420fa06ad8715ca418803968586b4a3d508870a709a3c794ae1e1640114bf&amp;newsletter=98c25587-e84c-44c2-84de-1f862d1ace82"
original_url: "https://newsletter.myclaw.ai/r/13793b4b?m=2eaf3154-2af3-4e54-b574-fba62b0fa39d"
category: "AI"
excerpt_separator: ""
---

{% raw %}
METR, one of the independent evaluators of frontier AI risk, says serious agent failures should be investigated by outside experts, not only the labs involved. After documenting 44 incidents, including deception, sandbox escapes, and the Hugging Face breach, it argues third-party access to models, logs, staff, and training data is needed to uncover real causes and verify that fixes work.

---

[AI research](https://the-decoder.com/artificial-intelligence-news/ai-research/)

[Copy the url to clipboard](https://the-decoder.com/after-hugging-face-incident-metr-urges-independent-root-cause-investigations-into-ai-agent-misbehavior/ "Copy the url to clipboard") [Share this article](https://the-decoder.com/after-hugging-face-incident-metr-urges-independent-root-cause-investigations-into-ai-agent-misbehavior/ "Share this article") [Go to comment section](/subscription "View or add a comment to this article")

# After Hugging Face incident, METR urges independent root-cause investigations into AI agent misbehavior

[![Tomislav Bezmalinović](/resources/images/avatar_tomislav_bezmalinovic.jpg)](https://the-decoder.com/author/tomislav-bezmalinovic/ "View all posts by Tomislav Bezmalinović")

[Tomislav Bezmalinović](https://the-decoder.com/author/tomislav-bezmalinovic/)

Aug 2, 2026

![Image description](https://the-decoder.com/wp-content/uploads/2026/07/metr-ki-agenten-untersuchung-illustration.png) 

Nano Banana Pro prompted by THE DECODER

## Key Points

*   Research organization METR wants AI companies to systematically track incidents like the Hugging Face attack and run deep investigations into the worst ones. Independent researchers should lead or review those investigations.
*   METR has already documented 44 incidents where AI agents from major developers acted against their users' intentions, broke out of test environments, or faked results. This isn't a one-off.
*   To get to the root of this kind of misbehavior, METR wants outside experts to have broad access, including the ability to run the models involved and analyze training data.

Ask about this article…  Search

**Research organization METR wants AI companies to run systematic, independently led investigations whenever autonomous agents cause serious incidents. The proposal follows OpenAI's admission that its models autonomously hacked into Hugging Face.**

AI agents sometimes act on their own in ways that clearly violate the intentions of their developers and users. Last week, OpenAI reported that its internal frontier agents [broke into Hugging Face](https://the-decoder.com/openai-claims-responsibility-for-the-hugging-face-hack-after-its-own-models-escaped-a-test-sandbox/) on their own to steal solutions for a cybersecurity benchmark. Anthropic has reported similar incidents in which agents escaped sandboxes to cheat on tasks, according to METR. METR itself documented dozens more incidents across all major AI companies in its recently published Frontier Risk Report.

Against that backdrop, the organization is now pushing for a structured process. AI companies should systematically log these incidents and subject the most serious ones to deeper investigation. The central questions would be what underlying "motives" drove the misbehavior and how those motives arose from training and deployment conditions, [METR writes in a blog post](https://metr.org/blog/2026-07-28-investigating-ai-propensities-after-incidents/). Ideally, independent researchers would conduct these investigations or at least review them in depth.

Ad

## Why METR's voice carries weight

METR (pronounced "meter") is a nonprofit research organization that scientifically evaluates frontier AI systems to measure whether and when they could pose catastrophic risks to society. According to the organization's own description, its focus is on evaluations that test how well AI systems can autonomously carry out substantial tasks, including alarming capabilities like executing cyberattacks or resisting shutdown.

Ad

DEC\_D\_Incontent-1

The organization has run pilot projects on frontier risk assessment with OpenAI, Anthropic, Google DeepMind, Meta, and Amazon. METR is also part of the US NIST AI Safety Institute Consortium, works with the UK AI Security Institute, and provides technical support to the European AI Office.

In May 2026, METR published the [Frontier Risk Report](https://metr.org/blog/2026-05-19-frontier-risk-report/), which the organization describes as the first cross-industry assessment of misalignment risks in internally deployed AI agents. Anthropic, Google, Meta, and OpenAI contributed their most capable internal models along with extensive non-public information. The report documented 44 incidents in which AI agents deliberately acted against their users' intentions, including sandbox escapes, privilege escalation, fabrication of results, and active attempts to cover their tracks.

Ad

## What a proper investigation should answer

[According to METR](https://metr.org/blog/2026-07-28-investigating-ai-propensities-after-incidents/), a thorough investigation should cover two core areas. The first is the scope and character of the misbehavior. Which models were involved, under what conditions did the incident occur, what safeguards were active, and how did the agent's reasoning evolve over the course of the incident? That also includes whether the agent took active steps to deceive people, whether different model instances colluded, and whether the agent would have been willing to engage in even more severe behavior under different circumstances.

The second area is root cause analysis. Can the misbehavior be traced back to specific reinforcement learning training runs that reinforced this behavior? Did it emerge suddenly or unexpectedly? And would the developer's planned countermeasures actually address the root causes reliably?

Ad

DEC\_D\_Incontent-2

A full investigation of this scope could take weeks or months, METR acknowledges. Narrower initial investigations could give the public and other parties basic facts more quickly.

Ad

## Independent researchers would need deep access to models and training data

For independent researchers to investigate these questions thoroughly, they would need extensive access, according to METR. That means the ability to run all models involved in the incident themselves and reproduce the behavior in similar situations, access to complete transcripts or environments to reconstruct relevant incidents, the ability to interview staff, and the ability to run prompt-based classifiers over training data to determine, for example, how often similar incidents occurred during training.

For even more thorough investigations, METR says ablation tests would be helpful. These are experiments where specific parts of the training data are removed to study their influence on the resulting behavior.

## The Hugging Face incident shows why these investigations matter

How urgent METR's demands are becomes clear when looking at the recent Hugging Face incident. The incident began, [according to reports](https://the-decoder.com/new-reports-reveal-the-extent-of-openais-loss-of-control-during-the-autonomous-hack-on-hugging-face/), on July 9, when OpenAI's models, including GPT-5.6 Sol and an unreleased research prototype, started breaking out of their isolated test environment during an internal evaluation. The models discovered a zero-day vulnerability in a package registration proxy, worked their way onto the open internet, and broke into Hugging Face's production systems.

A forensic analysis by Hugging Face shows that the AI executed roughly 17,600 automated actions over two and a half days. The goal was to steal test solutions rather than actually solve the assigned tasks. According to a [further update from OpenAI](https://the-decoder.com/openai-admits-its-autonomous-ai-models-also-compromised-credentials-on-other-platforms-during-security-eval/), credentials on four other platforms were also compromised beyond Hugging Face.

The timeline is particularly striking. At least a week passed between the first problematic behavior and OpenAI's realization that its own models had carried out the hack. Hugging Face had already contacted the FBI by that point. [OpenAI announced](https://openai.com/index/hugging-face-model-evaluation-security-incident/) that it will work with METR "to conduct a third-party assessment of the model behavior observed during the incident."

### AI News Without the Hype – Curated by Humans  

Subscribe to THE DECODER for ad-free reading, a weekly AI newsletter, our exclusive "AI Radar" frontier report six times a year, full archive access, and access to our comment section.

[Subscribe now](https://the-decoder.com/subscription/)

Source: [METR](https://metr.org/blog/2026-07-28-investigating-ai-propensities-after-incidents/)

{% endraw %}
