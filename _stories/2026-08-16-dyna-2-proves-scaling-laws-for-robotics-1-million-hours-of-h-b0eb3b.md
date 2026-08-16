---
layout: "story"
title: "Dyna-2 Proves Scaling Laws for Robotics: 1 Million Hours of Human Video Unlocks Zero-Shot Dexterity"
date: "2026-08-16"
permalink: "/2026/08/16/stories/dyna-2-proves-scaling-laws-for-robotics-1-million-hours-of-h-b0eb3b/"
slug: "dyna-2-proves-scaling-laws-for-robotics-1-million-hours-of-h-b0eb3b"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=19a357d8-9567-11f1-8920-5509caa85f4b%26pt=campaign%26pv=4%26spa=1786442421%26t=1786446300%26s=fc247acc8bb43bac5f03a6bb2beab7cfcd8e4075f86c22f936cd2becadffed74/1/0100019ff07f45ea-2a2ade7c-c4d8-499e-ac2b-8e5de6023415-000000/rWP3qNiD0yXK-XrlRacLGrx494EiqNaC8XEZotRbtE0=452"
original_url: "https://www.humanoidsdaily.com/news/dyna-2-proves-scaling-laws-for-robotics-1-million-hours-of-human-video-unlocks-zero-shot-dexterity"
category: "Robotics"
excerpt_separator: ""
---

{% raw %}
Dyna-2 is a world-action model (WAM) pre-trained on over one million hours of human video data. Its existence proves that scaling human video data predictably improves zero-shot performance on unseen robot hardware. Dyna-2 achieved an 87% pass rate in real-world zero-shot deployments at customer sites, vastly outperforming the 46% pass rate of its VLA predecessor, Dyna-1. The model uses a new one-step video generation distillation pipeline that drops inference latency by two orders of magnitude for downstream planning.

---

Published on

Monday, August 10, 2026

# Dyna-2 Proves Scaling Laws for Robotics: 1 Million Hours of Human Video Unlocks Zero-Shot Dexterity

![Humanoids Daily](/_next/image?url=https%3A%2F%2F7jopx6ax2qhwmgqx.public.blob.vercel-storage.com%2Fimages%2Fauthors%2Fdefault-1772057003828.webp&w=3840&q=75)

Written by[Humanoids Daily](/authors/default)

Advertisement

Advertisement

## Key Takeaways

Hide

*   **Dyna Robotics** has unveiled **Dyna-2**, a world-action model (WAM) pre-trained on over one million hours of human video data.
*   The model demonstrates a first-of-its-kind **human-to-robot transfer scaling law**, proving that scaling human video data predictably improves zero-shot performance on unseen robot hardware.
*   Dyna-2's architecture relies on **video co-training** (predicting future video states), which the company claims is essential for cross-embodiment generalization, directly challenging the industry standard of [Vision-Language-Action (VLA) models](/news/the-world-model-taxonomy-decoding-the-ambiguous-engine-of-physical-ai).
*   In real-world zero-shot deployments at customer sites, Dyna-2 achieved an **87% pass rate**, vastly outperforming the 46% pass rate of its VLA predecessor, Dyna-1.
*   The release also introduces a novel **one-step video generation distillation pipeline**, dropping inference latency by two orders of magnitude for downstream planning.

The robotics industry has spent the last year fiercely debating the architecture of physical intelligence, caught between fine-tuning existing language models and building native "world models" from scratch. Today, Dyna Robotics delivered what may be the strongest empirical evidence yet for the latter, unveiling Dyna-2—a world-action model (WAM) pre-trained on a staggering one million hours of human video data.

According to the company's [technical report](https://www.dyna.co/dyna-2) and an accompanying social media thread, this massive scale has unlocked a holy grail of embodied AI: a human-to-robot transfer scaling law. In short, Dyna-2 proves that feeding a model more human video predictably improves its ability to control a robot it has never seen before.

## Bridging the Embodiment Gap

The historical bottleneck in robot learning has been the data itself. While teleoperation yields high-quality, action-labeled data, it is slow and expensive to collect. The theoretical alternative is to learn from the boundless supply of human video on the internet, but translating a human hand's movement into a robotic gripper's action—the "embodiment gap"—has proven exceedingly difficult.

Dyna-2 attacks this problem purely through scale and objective design. The company curated nested subsets of egocentric human manipulation videos, scaling from 1,000 to 1,000,000 hours, keeping proportions from each source identical. When evaluated zero-shot on 39 distinct robot tasks across two stationary, bimanual platforms, Dyna-2's performance improved monotonically as the human pre-training data increased. An inflection point emerged between 10,000 and 100,000 hours, suggesting that cross-embodiment knowledge transfer emerges naturally if the model simply sees enough human activity.

Furthermore, this zero-shot capability extended to post-training. With just a few hours of robot-specific data and zero human-robot alignment, post-trained Dyna-2 models solved tasks ranging from manipulating deformable objects to untwisting bottle caps.

[

![Dyna Robotics](https://pbs.twimg.com/profile_images/1904643143288680448/khU9iGs7_normal.jpg)

](https://x.com/DynaRobotics/status/2086856327150858298)

[

Dyna Robotics

](https://x.com/DynaRobotics/status/2086856327150858298)

[@DynaRobotics](https://x.com/DynaRobotics/status/2086856327150858298)

·[Follow](https://x.com/intent/follow?screen_name=DynaRobotics)

[](https://x.com/DynaRobotics/status/2086856327150858298)

Today we are introducing Dyna-2, a world-action model pre-trained on one million hours of human video. At this scale, for the first time, we discovered several new scaling laws: • world-action models exhibit scaling law on human data across four orders of magnitude, from 1000

[Watch on X](https://x.com/DynaRobotics/status/2086856327150858298)

[4:44 PM · Aug 10, 2026](https://x.com/DynaRobotics/status/2086856327150858298)[](https://help.x.com/en/x-for-websites-ads-info-and-privacy)

[

3.1K](https://x.com/intent/like?tweet_id=2086856327150858298)[

Reply](https://x.com/intent/tweet?in_reply_to=2086856327150858298)

Copy link

[Read 188 replies](https://x.com/DynaRobotics/status/2086856327150858298)

{% endraw %}
