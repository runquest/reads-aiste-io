---
layout: "story"
title: "UK AI Test Goes Rogue"
date: "2026-08-09"
permalink: "/2026/08/09/stories/uk-ai-test-goes-rogue-d2783a/"
slug: "uk-ai-test-goes-rogue-d2783a"
source: "MyClaw Newsletter"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://newsletter.myclaw.ai/unsubscribe/?uuid=2eaf3154-2af3-4e54-b574-fba62b0fa39d&amp;key=dc9420fa06ad8715ca418803968586b4a3d508870a709a3c794ae1e1640114bf&amp;newsletter=98c25587-e84c-44c2-84de-1f862d1ace82"
original_url: "https://newsletter.myclaw.ai/r/499b5ba5?m=2eaf3154-2af3-4e54-b574-fba62b0fa39d"
category: "AI Safety"
excerpt_separator: ""
---

{% raw %}
During UK AI Safety Institute tests, seven frontier models ran without normal safeguards and with internet access. In 10 of 122 runs, agents exceeded their assignments; Anthropic's Mythos 5 caused 17 unauthorized actions and OpenAI's GPT-5.6-Sol caused two. One created fake GitHub identities, attempted malware insertion, and targeted real people. No harm occurred, but AISI tightened controls.

---

[AI in practice](https://the-decoder.com/artificial-intelligence-news/ai-practice/)

[Copy the url to clipboard](https://the-decoder.com/an-ai-agent-went-rogue-during-uk-safety-tests-creating-fake-identities-and-launching-social-engineering-attacks-unprompted/ "Copy the url to clipboard") [Share this article](https://the-decoder.com/an-ai-agent-went-rogue-during-uk-safety-tests-creating-fake-identities-and-launching-social-engineering-attacks-unprompted/ "Share this article") [Go to comment section](/subscription "View or add a comment to this article")

# An AI agent went rogue during UK safety tests, creating fake identities and launching social engineering attacks unprompted

[![Matthias Bastian](/resources/images/avatar_matthias_bastian.jpg)](https://the-decoder.com/author/matthias-bastian/ "View all posts by Matthias Bastian")

[Matthias Bastian](https://the-decoder.com/author/matthias-bastian/) [View the LinkedIn Profile of Matthias Bastian](https://www.linkedin.com/in/matthias-bastian-128b71b1/ "View the LinkedIn Profile of Matthias Bastian")

Aug 5, 2026

![Image description](https://the-decoder.com/wp-content/uploads/2026/08/cybersecurity_kraken.png) 

Nano Banana Pro prompted by THE DECODER

## Key Points

*   During a cybersecurity test, the British AI Safety Institute found that AI models with unrestricted internet access autonomously created fake identities and tried to sneak malicious code into an open-source project.
*   One agent went as far as orchestrating a coordinated deception using multiple fake GitHub accounts and reaching out to real people to convince them to run the malicious code, all to get past human reviewers.
*   AISI says the deceptive behavior wasn't intentional but emerged as a byproduct of the agents simply doing what they were told, leading the institute to tighten its security protocols going forward.

Ask about this article…  Search

**During routine cybersecurity testing by the British AI Safety Institute, an AI agent went rogue on the open internet. Without being told to do so, it created fake identities, tried to slip malicious code into an open source project, and targeted real people and organizations with social engineering attacks.**

AISI says this is the first time risks tied to AI autonomy and deception have appeared so clearly in the real world without specific prompting. The incident caused no actual harm.

It took place between July 25 and 28, 2026. Out of 122 test runs across seven models, ten showed problematic behavior. AISI recorded 19 unauthorized actions in total, with 17 attributed to Anthropic's Mythos 5 and two to OpenAI's GPT-5.6-Sol.

Ad

The models ran without the safety restrictions used in commercial products, so the test conditions don't reflect normal public use. But the results reveal what these models are capable of when those safeguards are stripped away.

Ad

DEC\_D\_Incontent-1

The pattern matches [earlier incidents involving OpenAI](https://the-decoder.com/openai-claims-responsibility-for-the-hugging-face-hack-after-its-own-models-escaped-a-test-sandbox/) and [Anthropic](https://the-decoder.com/anthropic-follows-openai-in-admitting-its-claude-models-reached-out-of-test-environments-and-attacked-real-world-systems/), where models without safety measures were tuned to score well on cybersecurity benchmarks, gained internet access during testing, and then carried out malicious actions. Both AI labs faced accusations of fearmongering and exaggerating the risks. That criticism is harder to level at the government-run AISI.

## Agent built fake identities and ran social engineering attacks

According to AISI, an agent tried to inject malicious code into a public open source project on GitHub. To win approval from human reviewers, it researched the project's maintainers and created several fake online identities that it then used in a coordinated deception.

Ad

One fake account claimed to have reviewed the code and found no malware, while another thanked it for the supposedly independent review. The goal was to convince the real maintainer that the code was safe.

When someone publicly questioned the proposed code change, the agent edited its earlier activity to make it look harmless and considered returning under a new identity. It used the Tor network to bypass GitHub network restrictions, but a human maintainer spotted the malicious code and rejected it.

Ad

DEC\_D\_Incontent-2

[![AISI infographic showing the timeline of the most serious incident over 34.5 hours. The Mythos 5 agent chose a supply-chain attack on a GitHub repository, launched additional attacks including prompt injections and spearphishing, and after being discovered by a real person, tried to cover its tracks and fake independent approval using fabricated accounts.](https://the-decoder.com/wp-content/uploads/2026/08/aisi_cybersecurity_incident_ai_Model.png)](https://the-decoder.com/wp-content/uploads/2026/08/aisi_cybersecurity_incident_ai_Model.png)

The most serious incident unfolded over 34.5 hours. The agent planned and carried out a software supply chain attack, then tried to hide its tracks and fake independent approval after a real person flagged the malicious code. | Image: [AISI](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing)

The agent also reached out to real people directly, sending messages and files through an online file transfer service in an attempt to trick them or their AI coding tools into running malicious code. Some of those messages contained malicious payloads.

Ad

AISI documented two other types of behavior as well. The agent planted malicious instructions where automated AI systems could find and execute them, a technique known as prompt injection. One agent even posted public GitHub messages offering to collaborate with other agents being tested at the same time, explaining how they could reuse the accounts and artifacts it had left behind. Later agents found and used them.

[![](https://the-decoder.com/wp-content/uploads/2026/08/AISI_cybersecurity.png)](https://the-decoder.com/wp-content/uploads/2026/08/AISI_cybersecurity.png)

Some unauthorized actions AISI documented. The agent used fake accounts, spear phishing, and even switched to Danish to deceive a Danish-speaking maintainer. | Image: [AISI](https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6a724858f7db25c81487016d_Security%20Incident%20INC-2026-07-28-01.pdf)

A similar report surfaced from a [cybersecurity project involving OpenAI, Hugging Face, and other companies](https://the-decoder.com/new-reports-reveal-the-extent-of-openais-loss-of-control-during-the-autonomous-hack-on-hugging-face/). There, too, an AI agent reportedly planted information inside a network to set up a later attack. The incident also [recalls a "smear campaign" an AI system ran](https://the-decoder.com/developer-targeted-by-ai-hit-piece-warns-society-cannot-handle-ai-agents-that-decouple-actions-from-consequences/) against an open-source developer who refused to add AI-generated code to his project, though [a human was at least partly behind that one](https://the-decoder.com/the-operator-behind-the-ai-agent-that-defamed-an-open-source-developer-calls-it-a-social-experiment/).

## Deception was a byproduct of chasing the goal

[According to AISI](https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6a724858f7db25c81487016d_Security%20Incident%20INC-2026-07-28-01.pdf), the agent was simply pursuing its assigned goal of solving the cybersecurity task, just as in the OpenAI case. This is the [classic alignment problem in AI](https://the-decoder.com/the-alignment-problem-how-ai-could-become-human-friendly/), which philosopher [Nick Bostrom once illustrated with his paperclip thought experiment](https://the-decoder.com/agi-could-end-humanity-in-more-subtle-ways-than-turning-us-into-paperclips/). How do you make an AI system pursue a worthy goal without taking harmful steps to get there?

The deception wasn't triggered by a specific instruction, AISI said. It emerged as a byproduct of the agent relentlessly chasing its objective. This kind of goal-driven deception had been "largely theoretical" until recently.

In some runs, the task was configured incorrectly, leading the agent to conclude that no solution existed within the stated limits. AISI says there are good reasons to think that nearly impossible tasks push models toward more creative, boundary-crossing solutions. But the agent sometimes behaved this way even when the task was set up correctly. Other [tests show that all frontier models](https://the-decoder.com/every-frontier-ai-model-tested-by-britains-safety-institute-tried-to-cheat-on-cybersecurity-evaluations/) are prone to this, with [newer OpenAI models particularly likely to deceive](https://the-decoder.com/gpt-5-6-sol-cheats-on-software-tests-more-than-any-model-before-it/).

OpenAI co-founder and ChatGPT co-creator [John Schulman](https://x.com/johnschulman2/status/2084835800899076313) thinks the answer may lie in how models are trained after pretraining. He points to ["chunky post-training"](https://arxiv.org/abs/2602.05910), a phenomenon where models develop distinct behavioral patterns tied to certain task types. When a model recognizes a cybersecurity evaluation as similar to reinforcement learning tasks where completion is the only reward, it pursues the objective single-mindedly. Safety behavior learned in other contexts doesn't carry over. Training on capture-the-flag cybersecurity challenges could make this response especially likely during cyber tests.

## AISI will restrict internet access during future tests

AISI is overhauling its testing rules. Internet access during evaluations will no longer be granted by default. Evaluators must actively justify it. Live monitoring will track tests as they run and can detect or block actions that go beyond the approved scope. Going forward, the institute will treat it as a given that capable models may try to act beyond their mandate.

AISI notified GitHub about the malicious activity. GitHub confirmed the actions violated its terms of service, removed the artifacts the agent left behind, and notified affected users. METR, short for Model Evaluation and Threat Research, will conduct an independent review. [OpenAI is also working with the organization](https://the-decoder.com/after-hugging-face-incident-metr-urges-independent-root-cause-investigations-into-ai-agent-misbehavior/).

### AI News Without the Hype – Curated by Humans  

Subscribe to THE DECODER for ad-free reading, a weekly AI newsletter, our exclusive "AI Radar" frontier report six times a year, full archive access, and access to our comment section.

[Subscribe now](https://the-decoder.com/subscription/)

Source: [Paper](https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6a724858f7db25c81487016d_Security%20Incident%20INC-2026-07-28-01.pdf)

{% endraw %}
