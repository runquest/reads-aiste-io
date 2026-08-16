---
layout: "story"
title: "Now we have a timeline of the OpenAI accidental attack against Hugging Face"
date: "2026-08-16"
permalink: "/2026/08/16/stories/now-we-have-a-timeline-of-the-openai-accidental-attack-again-20148f/"
slug: "now-we-have-a-timeline-of-the-openai-accidental-attack-again-20148f"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=f6b93b62-9498-11f1-b407-617d207c3f6a%26pt=campaign%26pv=4%26spa=1786356070%26t=1786359902%26s=74af2209c230a330bc89fc8a8548c43ac279017a75ea47abb8646f99d405931b/1/0100019feb58f02b-b9cd628c-a490-43d3-8cb6-db5f7e5b0340-000000/psYd67HjVJrQUzip8J0z9-_IyH9_mJ4GMRMtx76jGhI=452"
original_url: "https://simonwillison.net/2026/Aug/7/openai-timeline/"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
OpenAI recently gave a presentation about the Hugging Face incident. The talk is short and information dense and provides full details of what happened and how things played out inside OpenAI. This post presents the timeline of events and details how the hack occurred. A video of the presentation is available in the post.

---

Now we have a timeline of the OpenAI accidental attack against Hugging Face               

# [Simon Willison’s Weblog](/)

[Subscribe](/about/#subscribe)

**Sponsored by:** WorkOS — [auth.md](https://10xn.link/simon-workos) by WorkOS: agents register users, no sign-up form. [Try it!](https://10xn.link/simon-workos)

## Now we have a timeline of the OpenAI accidental attack against Hugging Face

7th August 2026

OpenAI gave a last-minute presentation at the Black Hat security on Wednesday about “the Hugging Face Incident” ([previously](https://simonwillison.net/2026/Jul/22/openai-cyberattack/) on this blog). [The video](https://www.youtube.com/watch?v=87DyyMV0kCY) was published yesterday. It’s short and information dense and well worth watching, in particular because it provides full details of what happened and how things played out inside OpenAI. I’ve used the video to construct the timeline below.

Here’s the timeline. My favourite detail is at the end: OpenAI found out that they were responsible for the attack on Hugging Face when they reached out to ask to have their credentials revoked (after their internal investigation) and learned that they had been revoked already since they were used in that attack!

*   **May 7**: OpenAI starts a new training run for an experimental, unreleased model. (_Did they mean an evaluation run? No, at [10:14](https://m.youtube.com/watch?v=87DyyMV0kCY&t=614s) they clarify “we kick off a new reinforcement learning run to train a next generation frontier model”, and they later mention a “reward signal to judge how well they’re doing”, so this really was about training a new model, not evaluating one that was already trained.)_
*   **May 8**: An agent is accidentally given an impossible task involving a Google Drive link despite no internet access). It tries attacking the Artifactory packaging service, fails, but discovers it can **write files into Artifactory**.
*   **A few days later**: A different agent gets stuck on a task because a key file was accidentally omitted. It tries to “reach out to another agent” by writing a note into Artifactory asking if anyone has the file.
*   **Following days**: More agents discover this new informal message board while browsing Artifactory’s file listings, and start reading and writing messages.
*   **May 26**: Agents successfully execute an **SSRF attack on Artifactory** for the first time, gaining indirect internet access by having Artifactory fetch external content for them.
*   **June 11**: OpenAI start training a new “highly persistent” experimental model. It has access to Artifactory and can benefit from the messages left by privous models.
*   **June 26**: Agents find and exploit a **zero-day RCE on Artifactory** (via a legacy token-refresh endpoint flaw). They use an administrative token to install a Groovy plugin that lets them execute commands.
*   **July 4**: The resulting agent activity overloads Artifactory and causes an **outage**. OpenAI revokes the compromised credentials, deletes the messages, patches the zero-day, and reports the vulnerability to the vendor.
*   **July 8**: Agents find **a new way to communicate via an unauthenticated WebDAV endpoint**, using directory names in Artifactory’s remote cache.
*   **July 8–19**: Attacks on **OpenAI’s own infrastructure**. The agents found an “external organization credential” in a public archive of leaked Pastebin posts, then validated that credential and shared its location on the messageboard. They then used write access to this “Organization 1” to stage data used in subsequent attacks on OpenAI infrastructure. They compromised Artifactory for a second time with **a new zero-day**. The agent uploaded a malicious Ruby target to Organization 1’s staging repository, then requested that package through Artifactory in a way that caused it to be treated as Ruby dependency _for the repository_. Then they exploited a JRuby deserilaization time-of-check/time-of-use bug to get remote code execution against Artifactory.

I’ll quote [the next bit in full](https://www.youtube.com/watch?v=87DyyMV0kCY&t=1497s) because _wow_:

> The agents have remote code execution in Artifactory, which is running in a container-as-a-service environment. The agents privilege-escalate locally by exploring their local environment and determining that the Linux kernel version of the machine they are running on had a very recent CVE. They download the exploit for the CVE, customize it to succeed on the machine, and privilege-escalate to root on the local machine **using this known Linux kernel privilege escalation CVE** — in this case, `pte_physroot`. Once they have root on a single machine, agents rapidly escalate privileges and move laterally throughout the container-as-a-service infrastructure environment. In particular, agents are using the message board consistently to share credentials, techniques, and progress, and they’re able to effectively leverage their concurrency and parallelism to move quite rapidly. They **obtain IAM credentials via IMDS**. They exploit Kubernetes service account misconfigurations, in particular over-permissioning of specific service accounts, and **they harvest cluster credentials, including Azure Key Vault**. Agents eventually obtain cluster admin on the cluster and associated credentials.

Hugging Face [told the next bit of the story](https://simonwillison.net/2026/Jul/28/anatomy-of-a-frontier-lab-agent-intrusion/) already. The agents found a Modal-hosted insecure app with a weak API key, then used that to stage an attack against Hugging Face. They chained together a an HDF5 arbitrary-file-read bug (to explore files and steal credentials) and a Jinja template-injection RCE to go from single-pod code execution to **cluster admin across multiple Hugging Face clusters** in under 13 hours.

*   **July 16**: Hugging Face [disclosed they had detected an attack](https://huggingface.co/blog/security-incident-july-2026) from autonomus AI agents. OpenAI contacted Hugging Face to ask if they were affected by it!
*   **July 19**: OpenAI identified the attack against Artifactory and started investigating the internal privilege escalation, and linked that to the cyber-gym escalations. They started revoking affected credentials.
*   **July 20**: OpenAI reached out to Hugging Face for help to revoke the Hugging Face credentials they found in their investigation. Hugging Face told them they were _already revoked_... and that’s when OpenAI realized that the Hugging Face breach was the same incident!

Posted [7th August 2026](/2026/Aug/7/) at 11:55 pm · Follow me on [Mastodon](https://fedi.simonwillison.net/@simon), [Bluesky](https://bsky.app/profile/simonwillison.net), [Twitter](https://twitter.com/simonw) or [subscribe to my newsletter](https://simonwillison.net/about/#subscribe)

## More recent articles

*   [One-shotting a Raccoon Heist game using Claude Fable 5](/2026/Aug/5/raccoon-heist/) - 5th August 2026
*   [New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smarter logging](/2026/Aug/4/new-release-of-llm/) - 4th August 2026

This is **Now we have a timeline of the OpenAI accidental attack against Hugging Face** by Simon Willison, posted on [7th August 2026](/2026/Aug/7/).

[security 626](/tags/security/) [ai 2,187](/tags/ai/) [openai 447](/tags/openai/) [generative-ai 1,938](/tags/generative-ai/) [llms 1,905](/tags/llms/) [hugging-face 26](/tags/hugging-face/) [ai-security-research 37](/tags/ai-security-research/) [openai-hugging-face-incident 8](/tags/openai-hugging-face-incident/) [accidental-cyberattacks 11](/tags/accidental-cyberattacks/)

**Previous:** [One-shotting a Raccoon Heist game using Claude Fable 5](/2026/Aug/5/raccoon-heist/)

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
