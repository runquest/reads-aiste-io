---
layout: "story"
title: "Rethinking the Data Moat"
date: "2026-08-21"
permalink: "/2026/08/21/stories/rethinking-the-data-moat-8cbc95/"
slug: "rethinking-the-data-moat-8cbc95"
source: "TLDR"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=979e8654-9bab-11f1-aa26-07656c2bb054%26pt=campaign%26pv=4%26spa=1787133654%26t=1787137519%26s=a63edfd53e804fb788c6ed7072f817ed2f35e7820e2f870fb333928b10886f0b/1/010001a019b270c4-78c7b3d9-5825-409e-898e-3a3d57c2c2df-000000/GD-gFyGjL6CtWphoA5YbGp6PtCeS82wzkev7oOK2E04=452"
original_url: "https://www.mbi-deepdives.com/data-moat/?utm_source=tldrnewsletter"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Raw data from the internet is unlikely to be the best data distribution for AGI. Not all tokens are created equal. The scaling law can be improved by equalizing intelligence per token. Better quality tokens maximize the efficiency of compute.

---

By [MBI Deep Dives](/author/mbi/) in [Mag7](https://www.mbi-deepdives.com/tag/mag7/) — Aug 18, 2026

# Rethinking the Data Moat

I want to highlight a couple of pieces which I found to be quite intriguing. The first is Dwarkesh Patel’s [conversation](https://www.dwarkesh.com/p/ryan-greenblatt?ref=mbi-deepdives.com) with Ryan Greenblatt, chief scientist at Redwood Research. Admittedly, while the conversation about whether automating AI research triggers recursive self-improvement was thought provoking, it was also quite spooky at times.

The second piece that I would like to highlight is a [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com) by Shuchao Bi, titled “Advancing the Frontier of Silicon Intelligence: Past, Open Problems, and the Future”. Bi co-founded YouTube Shorts at Google, ran multimodal post-training at OpenAI, and now works at Meta Superintelligence Labs.

While Greenblatt’s conversation with Dwarkesh was published last week, Bi gave the presentation more than a year ago. Since I happened to stumble onto both of these during the weekend, I could notice a healthy dose of similarity in Greenblatt’s and Bi’s arguments. Last month, I wrote about the [**salience of data**](https://www.mbi-deepdives.com/data/) in the context of AI and Alphabet [bidding](https://www.axios.com/2026/08/17/google-spirit-airlines-bankruptcy?ref=mbi-deepdives.com) for bankruptcy auction for Spirit Airline’s data certainly corroborates to that. However, both Greenblatt and Bi made me re-think my position a bit on this topic. Greenblatt had an interesting thought experiment: if you could hold compute or data constant, how much the model would still improve? That delta of improvement could be labeled as “algorithmic progress” and he made the case that it is a very important driver of AI progress over the last few years (emphasis mine):

> “GPT-3 was released in 2020, so it was trained about six and a half, seven years ago. It’s worth noting that GPT-3 is maybe a little too far in the past, but let’s go with this for a second.  
>   
> If we were to train a model with GPT-3-level compute today, how good would that model be? My understanding, based on how algorithmic progress works, is that we’d be able to train a model that’s as good as the best model we had perhaps around three years ago. **So I think that right now we’d be able to train a version of GPT-3 that’s probably somewhat better than GPT-4, a moderate amount better than GPT-4.** I think that’s about right. That roughly lines up with how algorithmic progress has worked.”

Bi didn’t quite say “algorithmic progress”, but pointed out that the raw data is “unlikely to be the best data distribution”. He suggested that the incremental improvement in scaling law may come from changing the data distributions or to say it differently, “by equalizing intelligence per token”. My read is that they are essentially alluding to the same argument but using different words to explain their intuitions.

![](https://substackcdn.com/image/fetch/$s_!TTdu!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc4a4499-be67-4507-a260-117c199a3b2d_1282x637.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

Later in the conversation, Greenblatt expanded why he is not a big believer of the role of “human expert data” in model improvements, rather the process improvement around data itself is the larger driver. From the podcast (emphasis mine):

> “I think the vast majority of pre-training data improvements are from science on better understanding what data sets are good and schleppy labor on figuring out how to filter down.  
>   
> So my view is that improvements of the form of, like, [OpenWebText](https://github.com/Skylion007/openwebtext?ref=mbi-deepdives.com) to [FineWeb](https://huggingface.co/datasets/HuggingFaceFW/fineweb?ref=mbi-deepdives.com), that improvement is better described as an algorithmic improvement of the sort that you can study with some [GPUs](https://en.wikipedia.org/wiki/Graphics_processing_unit?ref=mbi-deepdives.com), and you don’t need human expert data to do that. Now, there’s a different effect which we could talk about, which is that maybe the internet in 2026 is more of a fertile ground for training data than the internet in 2018. There’s also been an effect where there are just more humans posting on the internet, so there’s more data to harvest. My sense is that that effect is going to be quite a bit smaller than the effect of humans knowing better how to curate the data, having better scrapes, knowing how to process those scrapes better — this sort of thing.”

Greenblatt’s arguments certainly gave me a pause because my prior was a bit different and likely much closer to Dwarkesh who also appears to think human expert data played a critical role in the model’s recent trajectory.

Bi probably agrees with Greenblatt since he decomposed where human knowledge comes from: a loop of proposing tasks, learning existing knowledge, thinking, getting feedback from the environment, and distilling the findings back into knowledge and wondered aloud in his talk which steps AI can accelerate. His answer is basically nearly all of them, including proposing the tasks in the first place. Greenblatt essentially makes the same claim retrospectively: RL environments improved over the last two years mostly because labs learned **what** to build and used enormous amounts of AI labor to build it.

![](https://substackcdn.com/image/fetch/$s_!_m1V!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F89d96280-1baf-4f8a-aaa0-0677e6f87431_1321x723.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

![](https://substackcdn.com/image/fetch/$s_!QaH4!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d030acf-0cac-4b2f-8271-2fad844723a9_1267x724.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

Another interesting observation by Greenblatt was that machine learning (ML) is a “shallow” domain compared to math and given that even in math we are transitioning “[**from an era of proof scarcity to an era of proof abundance**](https://www.mbi-deepdives.com/proof/)**”,** automating much of ML may prove to be lot more amenable. From Greenblatt:

> I think ML is a very shallow domain relative to math. In math, there was much more of a thing where you find some true deep abstraction, and if you really understand that thing, which is hard to understand, then you get somewhere. Whereas I feel like the things that are the equivalent of that in ML are really dumb bullshit. Like with scaling laws, come on guys, we can explain scaling laws really quickly. I think the deepest and most important concepts in math, for example, don’t have the property that you can really understand the underlying thing and why it matters in a very short period of time.  
>   
> My sense is that some domains are structurally different in terms of how they operate and how much they depend on deep abstractions. Physics and math are much more on the side of being very far on the deep, hard-to-come-up-with-ideas side, whereas I think ML and most other domains are much more amenable to [hill climbing](https://en.wikipedia.org/wiki/Hill_climbing?ref=mbi-deepdives.com). That’s my sense of how this will go in the future.  
>   
> Even in cases where there has been some breakthrough in AI, oftentimes in retrospect it looks like a big bottleneck to making that breakthrough happen was getting all of the micro details and mungy intuition right. An example of this is training AIs to be good at reasoning and [chain of thought](https://research.google/blog/language-models-perform-reasoning-via-chain-of-thought/?ref=mbi-deepdives.com), doing RL on chain of thought. It looks like you probably could have done RL and chain of thought on GPT-3 and gotten kind of interesting results on math if you had really scaled it up and done a good job.

Bi also made the point that learning from environment interaction is efficient wherever a perfect simulator exists (coding, math etc.) and fundamentally blocked where simulation is impossible or the sim-to-real gap is simply too large ( for example biology, and experimental physics). Given that context, automating AI research doesn’t seem nearly as outlandish.

![](https://substackcdn.com/image/fetch/$s_!Ki68!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15eb3521-a444-4160-b147-580d1b1e940b_1312x697.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

Gavin Baker in a recent [reply](https://x.com/GavinSBaker/status/2088684251441254666?ref=mbi-deepdives.com) to an Anthropic researcher mentioned, “I do think the computational efficiency of humans (I’m impressed that your brain runs on only 15-20 watts tbh) means that humans will be economically useful for the foreseeable future \*even\* in a fast takeoff, AGI maximalist scenario.”

Indeed, the efficiency of humans was also highlighted by Bi during his presentation (see a bunch of related slides below).

![](https://substackcdn.com/image/fetch/$s_!Pn5E!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3722acae-cf38-4a01-94a8-b7eb04a55e6a_1303x688.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

![](https://substackcdn.com/image/fetch/$s_!cFFD!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fea3d0a21-b31b-4d91-9497-0edcbb1b1f5b_1308x658.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

![](https://substackcdn.com/image/fetch/$s_!ogr2!,w_2400,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a536f56-9b48-4523-b3e4-37c4a2cc056c_1306x678.png)

Source: Shuchao Bi’s [talk](https://www.youtube.com/watch?v=E22AOHAEtu4&ref=mbi-deepdives.com)

However, the amazing efficiency of homo sapiens is also a stark reminder that nature has already shipped a general intelligence that runs on less power than a dim lightbulb. Today’s models need a building full of GPUs and most of the written internet to often do less. Does that indicate something “special” about us or is it a measure of how inefficient our current approach still is? Bi’s bet is that the biggest waste sits in **how** models learn. If someone fixes that, the cost of a given level of intelligence can fall by orders of magnitude. Of course, I am not in a position to know or predict whether this is at all fixable or even if it is, when that may happen.

A peer recently praised me to help him improve his understanding of the AI landscape through my work at MBI Deep Dives. I jokingly mentioned to him I’m glad that you feel that way, but ironically the more I study AI landscape, the more certain I become that I need to hold every opinion related to AI very loosely. Such a frame of mind doesn’t inspire a lot of confidence in my own mind that I can see too far ahead. Investors are trying to price AI landscape based on near-term trajectory of respective companies, but given how fast things can alter in the AI landscape, it is hard not to feel that betting **for or against** this trade carries a monumental risk either way.

* * *

_Subscribers get the daily journal and five+ years of Deep Dives, i.e. full-length analyses with financial models on_ [**_65+_**](https://mbideepdives.substack.com/p/deep-dives) _companies. The daily is just how I think out loud between the Deep Dives!_

[Subscribe](#/portal/signup)

* * *

**Current Portfolio:**

Please note that these are **NOT** my recommendation to buy/sell these securities, but just disclosure from my end so that you can assess potential biases that I may have because of my own personal portfolio holdings. Always consider my write-up my personal investing journal and never forget my objectives, risk tolerance, and constraints may have no resemblance to yours.

My current portfolio is disclosed below:

#### This post is for paying subscribers only

Subscribe now Already have an account? Sign in.

[Previous issue

#### Why DoorDash’s Autonomous Strategy Beats Uber’s Hodgepodge

](/dash-vs-uber/)

[Next issue

#### Airbnb Model Update (2026)

](/abnb-2026/)

{% endraw %}
