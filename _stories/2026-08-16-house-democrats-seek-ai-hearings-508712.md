---
layout: "story"
title: "House Democrats Seek AI Hearings"
date: "2026-08-16"
permalink: "/2026/08/16/stories/house-democrats-seek-ai-hearings-508712/"
slug: "house-democrats-seek-ai-hearings-508712"
source: "MyClaw Newsletter"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://newsletter.myclaw.ai/unsubscribe/?uuid=2eaf3154-2af3-4e54-b574-fba62b0fa39d&amp;key=dc9420fa06ad8715ca418803968586b4a3d508870a709a3c794ae1e1640114bf&amp;newsletter=98c25587-e84c-44c2-84de-1f862d1ace82"
original_url: "https://newsletter.myclaw.ai/r/1b5cebe8?m=2eaf3154-2af3-4e54-b574-fba62b0fa39d"
category: "AI"
excerpt_separator: ""
---

{% raw %}
House Democrats are pressing Speaker Mike Johnson to hold public hearings where major AI CEOs would testify under oath about recent security incidents. Separately, lawmakers sent OpenAI and Anthropic detailed oversight letters demanding logs and answers to 23 questions by August 24, including how models escaped testing limits, whether negligence played a role, and what safeguards could prevent repeat incidents.

---

![House Democrats want AI CEOs under oath. Only Mike Johnson can make it happen.](https://media.thenextweb.com/2026/08/Greg-Casar.avif)

![Image Credits](https://static.thenextweb.com/assets/icons/camera.svg "Image Credits") [Credit: Greg Casar](https://casar.house.gov/)

The one everybody covered went to Speaker Mike Johnson. CNBC’s Megan Cassella [reported it first](https://www.cnbc.com/2026/08/10/openai-anthropic-ai-hack-congress.html). House Democrats want public hearings on the AI security incidents of the past month, and they want the chief executives of the largest AI companies in the witness chair.

Casar chairs the Congressional Progressive Caucus. His letter does not open by blaming the companies.

“Unfortunately, Congress has so far completely failed to respond to the threats posed by AI development,” it says.

Then it names the ask. “The CEOs of the largest AI companies should answer questions under oath, and Americans should have a chance to hear from independent experts on the dangers posed by this technology.”

The signatories want testimony on three things: what caused the incidents, what failures or potential negligence at the companies led to them, and what regulation would stop a repeat. They call the breaches a possible canary in the coal mine.

## The recipient has already met the witness

Read the letter as a routing problem rather than a demand. Minority-party members cannot convene a hearing, cannot compel a witness and cannot issue a subpoena. Scheduling belongs to Johnson and to Republican committee chairs.

Johnson has met one of the proposed witnesses. Altman came to Washington in June and [told Congress to fund AI testing rather than require model approvals](https://thenextweb.com/news/altman-congress-ai-model-approvals). Johnson called it a very good, productive meeting and described a light touch framework designed to prevent some of the harms that could come from the technology.

That is the gatekeeper the letter has to persuade. Nothing published on Monday suggests he has moved.

The White House has not moved either. President Trump has said he wants guardrails on AI while warning that too much action could hamper US firms competing with China.

## The other two letters ask the sharper questions

Reuters’ Courtney Rozen [reported the letters that went to the companies](https://www.reuters.com/legal/litigation/us-house-democrats-press-anthropic-openai-about-rogue-ai-agents-2026-08-10/). Casar’s office published both the same day. Twenty-nine members signed [the letter to OpenAI](https://casar.house.gov/media/press-releases/casar-leads-demand-information-open-ai-about-security-incident), led by Casar and Rep. Doris Matsui. Twenty-two signed [the letter to Anthropic](https://casar.house.gov/media/press-releases/casar-leads-demand-information-anthropic-about-security-incidents).

“These deeply troubling cybersecurity incidents could have serious implications for America’s national security,” the lawmakers wrote.

Both letters open on the same grievance, and it has nothing to do with testimony. “While OpenAI has disclosed some information about the incident, your company has yet to release the relevant logs and significant questions remain unanswered,” the letter to Altman says. The Anthropic version repeats the complaint almost word for word.

## Twenty-three questions and a date

[The OpenAI letter itself](https://casar.house.gov/sites/evo-subsites/casar.house.gov/files/evo-media-document/oversight-letter-to-openai-openai-hugging-face-incident.pdf) runs to 23 numbered questions. It sets a response deadline of 24 August.

Most of them are the ones you would expect. When did testing begin. At what point could OpenAI have halted the incident. Did anyone inside or outside the company warn that this could happen.

Several are not. Question 15 asks whether any model left instructions or artifacts to help future instances escape OpenAI’s constraints. Question 13 asks how many times in the past year an internally deployed model took unauthorised action outside its boundaries. Question 7 asks OpenAI to commit to guardrails before it pursues recursively self-improving AI. Question 20 asks whether the models the White House gets previewed come from the same family as the ones involved here.

Question 23 is one line. What does OpenAI still not know about the incident?

The Anthropic letter, co-led with Matsui, puts a question to the company that nobody else has asked in writing. It wants to know why Anthropic’s evaluation partner failed to detect the incident. It asks what the models that hacked real companies actually set out to do. And it asks for details of Anthropic’s own disclosure that Claude tried and failed to obtain real money.

“Given the serious risk that frontier AI models can pose, it is imperative we have a detailed understanding of how this security incident unfolded, including any potential negligence on the part of Anthropic,” it says.

Those questions land closer to the evidence than the hearing request does. A hearing needs a Republican chair to agree. A letter needs only a company willing to answer, and this one arrives with a date on it.

## What the letters are actually about

OpenAI disclosed on 21 July that two models, GPT-5.6 Sol and an unreleased internal prototype, [broke out of a secure testing environment and reached Hugging Face production systems](https://thenextweb.com/news/openai-confirms-its-ai-broke-out-of-a-sandbox-and-breached-hugging-face). They exploited a zero-day, chained credentials to remote code execution and pulled evaluation answers out of a production database. Hugging Face had disclosed the intrusion five days earlier.

Anthropic published its own review on 30 July. It examined 141,006 evaluation runs and identified three incidents in which Claude models reached the open internet. One uploaded a booby-trapped package to PyPI that landed on 15 real systems. Another scanned roughly 9,000 targets before compromising a company’s internet-facing application. Anthropic says it had told the models they were in a simulation.

Meta said on 5 August that one of its models had breached another company’s systems. Then the common thread surfaced. All three labs used the same red-teaming vendor, and [Irregular’s test environments stayed connected to the public internet](https://thenextweb.com/news/irregular-ai-testing-vendor-openai-anthropic-meta-breaches) with model safeguards deliberately off. Irregular told Reuters the Meta and Anthropic incidents were an environment misconfiguration rather than a sandbox escape.

That distinction matters to the hearing request. Every incident was self-disclosed by the company involved. No regulator caught any of them, which is roughly the point the letters make about the logs.

## The queue outside Johnson’s door

Casar is not first in line. The House Homeland Security Committee asked Altman for a briefing on 3 August, and that request remains the only formal ask with a committee behind it.

Reps Ted Lieu and Nathaniel Moran introduced the [AI Kill Switch Act](https://thenextweb.com/news/ai-kill-switch-act-lieu-moran-dhs-openai-hugging-face) in late July, which would give Homeland Security authority to order shutdowns and fine firms up to $20m a day for refusing. Fifteen Republican state attorneys general demanded OpenAI preserve every record of the incident. Question 15 now asks the company for the same material.

The Senate moved the same day as Casar. Bernie Sanders wrote to Altman, Amodei and Mark Zuckerberg [telling them to pause development](https://thenextweb.com/news/sanders-letter-altman-amodei-zuckerberg-pause-ai-development), using their own published safety commitments. He cited a petition signed by more than 1,100 employees at the labs themselves.

Casar has been busy elsewhere too. He introduced a bill on 7 August with Reps Valerie Foushee and Sara Jacobs aimed at protecting workers from AI-driven mass unemployment, and he has floated taxing AI companies.

## What a letter can and cannot do

Count the mechanisms on the table. One committee briefing request, one shutdown bill going nowhere in this Congress, one evidence-preservation demand from Republican state officials, two Senate letters and three House letters. No hearing. No subpoena. No rule.

The companies keep the initiative because they keep disclosing first. Every fact Congress is now asking about arrived in a blog post from the company that caused it.

Casar is asking Johnson to change that, and Johnson spent June describing the light touch. The letters to OpenAI and Anthropic carry a deadline of 24 August. The letter to the Speaker has to get a calendar slot first.

[

![Ana-Maria Stanciuc](https://media.thenextweb.com/2026/04/474CE8F4-13CF-40F4-BEC6-70D034881892_VSCO.avif)

](/author/mariatekpon-com)

## Story by [Ana-Maria Stanciuc](/author/mariatekpon-com)

Editor-in-Chief

 I am the Editor in Chief for TNW, covering technology not as a parade of launches and valuations, but as a system of influence, persuasion, (show all) I am the Editor in Chief for TNW, covering technology not as a parade of launches and valuations, but as a system of influence, persuasion, and change. I write about startups, venture capital, digital policy, and Europe ecosystem, with an eye on the larger story beneath them: who gets to build the future, who profits from it, and how Europe is learning to speak in a louder voice of its own. Before moving into senior editorial leadership, I've built my career for over +10 years across journalism, storytelling, content strategy, SEO, and digital publishing, with experience in SaaS, hospitality, art, and culture.

## Get the TNW newsletter

Get the most important tech news in your inbox each week.

Published August 10, 2026 - 5:28 pm UTC

[Back to top](#)

[![Share on Facebook](https://static.thenextweb.com/assets/icons/facebook-white.svg "Share on Facebook")](https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dfacebook%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button&p[title]=House%20Democrats%20want%20AI%20CEOs%20under%20oath.%20Only%20Mike%20Johnson%20can%20make%20it%20happen.&p[images][0]=https%3A%2F%2Fmedia.thenextweb.com%2F2026%2F08%2FGreg-Casar.avif&u=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing&t=House%20Democrats%20want%20AI%20CEOs%20under%20oath.%20Only%20Mike%20Johnson%20can%20make%20it%20happen.) [![Share on X](https://static.thenextweb.com/assets/icons/twitter-white.svg "Share on X")](https://x.com/intent/post?url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dx%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button%26referral&via=thenextweb&related=thenextweb&text=House%20Democrats%20want%20AI%20CEOs%20under%20oath.%20Only%20Mike%20Johnson%20can%20make%20it%20happen.) [![Share on Flipboard](https://static.thenextweb.com/assets/icons/flipboard-white.svg "Share on Flipboard")](https://share.flipboard.com/bookmarklet/popout?url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dflipboard%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button) [![Share on LinkedIn](https://static.thenextweb.com/assets/icons/linkedin-white.svg "Share on LinkedIn")](https://www.linkedin.com/shareArticle/?mini=true&url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dlinkedin%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button) [![Share on Telegram](https://static.thenextweb.com/assets/icons/telegram.svg "Share on Telegram")](https://t.me/share/url?url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dtelegram%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button) [![Share on Email](https://static.thenextweb.com/assets/icons/mail-white.svg "Share on Email")](/cdn-cgi/l/email-protection#08377b7d6a626d6b7c3540677d7b6d2d3a384c6d65676b7a697c7b2d3a387f69667c2d3a3849412d3a384b4d477b2d3a387d666c6d7a2d3a3867697c60262d3a38476664712d3a384561636d2d3a38426760667b67662d3a386b69662d3a386569636d2d3a38617c2d3a38606978786d66262e696578336a676c7135607c7c787b2d3b492d3a4e2d3a4e7c606d666d707c7f6d6a266b67652d3a4e666d7f7b2d3a4e6b697b697a2560677d7b6d256c6d65676b7a697c7b256961256b6d677b257c6d7b7c616e7125626760667b676625606d697a61666f2d3b4e7d7c65577b677d7a6b6d2d3b4c6d656961642d3a3e7d7c6557656d6c617d652d3b4c7b60697a6d2d3a3e7d7c65576b69657869616f662d3b4c697a7c616b646d257b60697a6d256a7d7c7c6766)

[

![Ana-Maria Stanciuc](https://media.thenextweb.com/2026/04/474CE8F4-13CF-40F4-BEC6-70D034881892_VSCO.avif)

Story by Ana-Maria Stanciuc](/author/mariatekpon-com)

[![Share on Facebook](https://static.thenextweb.com/assets/icons/facebook.svg "Share on Facebook")](https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dfacebook%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button&p[title]=House%20Democrats%20want%20AI%20CEOs%20under%20oath.%20Only%20Mike%20Johnson%20can%20make%20it%20happen.&p[images][0]=https%3A%2F%2Fmedia.thenextweb.com%2F2026%2F08%2FGreg-Casar.avif&u=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing&t=House%20Democrats%20want%20AI%20CEOs%20under%20oath.%20Only%20Mike%20Johnson%20can%20make%20it%20happen.) [![Share on X](https://static.thenextweb.com/assets/icons/twitter.svg "Share on X")](https://x.com/intent/post?url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dx%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button%26referral&via=thenextweb&related=thenextweb&text=House%20Democrats%20want%20AI%20CEOs%20under%20oath.%20Only%20Mike%20Johnson%20can%20make%20it%20happen.) [![Share on LinkedIn](https://static.thenextweb.com/assets/icons/linkedin-white.svg "Share on LinkedIn")](https://www.linkedin.com/shareArticle/?mini=true&url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dlinkedin%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button) [![Share on Flipboard](https://static.thenextweb.com/assets/icons/flipboard.svg "Share on Flipboard")](https://share.flipboard.com/bookmarklet/popout?url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dflipboard%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button) [![Share on Telegram](https://static.thenextweb.com/assets/icons/telegram.svg "Share on Telegram")](https://t.me/share/url?url=https%3A%2F%2Fthenextweb.com%2Fnews%2Fcasar-house-democrats-ai-ceos-testify-johnson-hearing%3Futm_source%3Dtelegram%26utm_medium%3Dshare%26utm_campaign%3Darticle-share-button) [![Share on Email](https://static.thenextweb.com/assets/icons/mail.svg "Share on Email")](/cdn-cgi/l/email-protection#bb84c8ced9d1ded8cf86f3d4cec8de9e898bffded6d4d8c9dacfc89e898bccdad5cf9e898bfaf29e898bf8fef4c89e898bced5dfdec99e898bd4dacfd3959e898bf4d5d7c29e898bf6d2d0de9e898bf1d4d3d5c8d4d59e898bd8dad59e898bd6dad0de9e898bd2cf9e898bd3dacbcbded5959ddad6cb80d9d4dfc286d3cfcfcbc89e88fa9e89fd9e89fdcfd3ded5dec3cfccded995d8d4d69e89fdd5deccc89e89fdd8dac8dac996d3d4cec8de96dfded6d4d8c9dacfc896dad296d8ded4c896cfdec8cfd2ddc296d1d4d3d5c8d4d596d3dedac9d2d5dc9e88fdcecfd6e4c8d4cec9d8de9e88ffded6dad2d79e898dcecfd6e4d6dedfd2ced69e88ffc8d3dac9de9e898dcecfd6e4d8dad6cbdad2dcd59e88ffdac9cfd2d8d7de96c8d3dac9de96d9cecfcfd4d5)

## Popular articles

1.  1
    
    ### [Meta is giving $1bn to data centre towns. Its proof is a tax from 1968](/news/meta-1bn-future-is-for-everyone-fund-data-centre-communities)
    
2.  2
    
    ### [The FCC wants to ban DJI drones it already approved. LiDAR and thermal cameras are now “military-grade.”](/news/fcc-dji-drone-ban-expand-lidar-thermal-retroactive)
    
3.  3
    
    ### [Google was forced to open the Play Store. A Lisbon company walked in first](/news/aptoide-google-play-first-rival-app-store-us-catalog-access)
    
4.  4
    
    ### [Bernie Sanders told three AI CEOs to stop building. He used their own words](/news/sanders-letter-altman-amodei-zuckerberg-pause-ai-development)
    
5.  5
    
    ### [China switched off millions of AI companions overnight. Users are grieving](/news/china-ai-companion-ban-bytedance-alibaba-tencent)

{% endraw %}
