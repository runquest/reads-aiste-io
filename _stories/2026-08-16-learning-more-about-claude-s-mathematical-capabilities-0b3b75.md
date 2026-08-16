---
layout: "story"
title: "Learning more about Claude's mathematical capabilities"
date: "2026-08-16"
permalink: "/2026/08/16/stories/learning-more-about-claude-s-mathematical-capabilities-0b3b75/"
slug: "learning-more-about-claude-s-mathematical-capabilities-0b3b75"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=19a357d8-9567-11f1-8920-5509caa85f4b%26pt=campaign%26pv=4%26spa=1786442421%26t=1786446300%26s=fc247acc8bb43bac5f03a6bb2beab7cfcd8e4075f86c22f936cd2becadffed74/1/0100019ff07f45ea-2a2ade7c-c4d8-499e-ac2b-8e5de6023415-000000/rWP3qNiD0yXK-XrlRacLGrx494EiqNaC8XEZotRbtE0=452"
original_url: "https://www.anthropic.com/research/riemann-zeta"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Claude was recently challenged with one of the most famous unsolved problems in mathematics: the Riemann hypothesis. While Claude didn't succeed, it unexpectedly made strides on a related problem. It improved on a longstanding lower bound for the fraction of zeros of the Riemann zeta function that satisfy the Riemann hypothesis. The result shows that AI models like Claude can extend the impact and reach of mathematicians' ideas in new and sometimes surprising ways.

---

Science

# Learning more about Claude's mathematical capabilities

Aug 10, 2026

![Illustration of a mathematical compass](/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F406d8496be38ea8a5459c66eaa7c5c7edab4a62f-4107x2310.png&w=3840&q=75)

Recently, a member of staff at Anthropic gave Claude an unreasonable challenge. It was about one of the most famous unsolved problems in mathematics: _Take a real stab at the Riemann hypothesis_.

Claude did take a real stab, but as you might have expected if you’re familiar with the difficulty of the task (the Riemann hypothesis dates back to 1859 and has a [million-dollar bounty](https://www.claymath.org/millennium-problems/)), it didn’t succeed. Nevertheless, during its attempt, it unexpectedly made strides on a related problem.

An unreleased research version of Claude has improved on a longstanding lower bound for the fraction of zeros of the Riemann zeta function that satisfy the Riemann hypothesis. Drawing on extensive prior research by mathematicians over the past decades, it has increased this bound from 41.6% to 67.2%.

Two mathematicians at Anthropic studied and validated Claude’s [paper](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf), and produced an [informal note](https://www-cdn.anthropic.com/23455459f8832d06bb175cc0f88d019aed962ef8.pdf) for experts stating Claude’s proof concisely. Claude also produced a [formally verifiable proof](https://github.com/anthropics/zeta-23-lean) of its result. We are grateful to Brian Conrey and Dan Goldston, two experts in this area, who generously examined the paper on short notice.

We don’t expect that the techniques Claude used will lead to proving the Riemann hypothesis. But its work serves as the latest example of the speed of progress in AI models’ mathematical capabilities. In this post, we discuss how Claude approached this problem and what it found.

## The Riemann zeta function

The Riemann zeta function describes the distribution of prime numbers: each place that the function takes the value of zero contributes successively finer detail to the sequence of primes. The Riemann hypothesis is that the zeros that determine the primes all exist along a certain vertical line. This has become one of the most consequential conjectures in mathematics: many results assume it in order to provide a form of randomness in the primes.

No one has yet been able to prove or disprove the Riemann hypothesis, but mathematicians have made progress in many related directions studying the Riemann zeta function and its zeros. One of these, as above, is quantifying a minimum proportion of zeros that are on the line: over time, they’ve gradually increased this known constant proportion to 41.6%.

Another direction concerns the _distribution_ of zeros on the line. In particular, in 1973, Montgomery [introduced](https://en.wikipedia.org/wiki/Montgomery's_pair_correlation_conjecture) a number of new techniques in this area, though these techniques assumed the hypothesis was true. More recently, [Aryan](https://arxiv.org/abs/1902.05473), and subsequently Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh have published a [series](https://arxiv.org/abs/2306.04799) of [works](https://arxiv.org/abs/2501.14545) that allow Montgomery’s techniques to work _without_ that assumption, meaning they can support work on increasing the lower-bound constant for the zeros on the line. Claude’s result draws heavily on this line of research, along with a 2000 [paper](https://eudml.org/doc/252338) by Bombieri.

## Claude's finding

Claude found that combining the results from Aryan and from Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh with the work of Bombieri provides a way to surpass the previous state-of-the-art lower-bound proportion of 41.6%, increasing it to 67.2%.

A short technical explanation of Claude’s finding is as follows: Claude forms a suitable space of functions with quadratic form induced by Weil, and positive- (respectively negative-)definite subspaces arising from zeros on (respectively off) the line. Then Claude simply writes down an inequality on the rank of a quadratic form in terms of first- and second-moment information. (The successful computation of the latter in terms of the dual picture over primes, or via control of a Hilbert transform, is no surprise in analytic number theory.) The courage to treat the entire space, with positive- and negative-definiteness taken into account together, and with the quadratic form allowed to be non-diagonal, is in some sense the step that allows Claude to achieve the conclusion based on the important prior work.

The full technical explanation is available in the [paper](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf). Claude’s explanation of how it arrived at its result is available in a separate Appendix [here](https://www-cdn.anthropic.com/d7f3ecf1d01392d887f8bc974ca187e2a121b1ed.pdf).

## Claude's methodology

An unreleased research version of Claude found the new lower bound over two sessions in Claude Code, using a total of 31 million output tokens.

Jarred Sumner, an Anthropic staff member (and non-mathematician), prompted Claude to “take a real stab” at the hypothesis itself, leaving the mathematical choices from there up to the model. Initially, Claude generated and tried 650 ideas, none of which worked. Jarred prompted Claude to try again, and it spent a day and a half coordinating about 60 Claude subagents, which this time went much deeper: between them, they ran 2,400 shell commands and wrote hundreds of Python scripts.1 The subagents ran thousands of numerical checks against known zeta zeros and refereed one another’s work. Throughout this process, Jarred's input was mostly limited to sending Claude messages of encouragement (mostly variants of “keep going” or “believe in yourself”).2 This seems to have helped Claude overcome some initial skepticism that it could make meaningful progress.

Having found this new result while attempting the task, Claude tested its work by having various subagents review the proofs, search for counterexamples, download 54 papers from the arXiv to check that its finding hadn’t already been made, and independently re-prove its finding from scratch. Claude volunteered to write its findings up as a paper, and recommended that a human number theorist validate its findings.

Levent Alpöge and Ralph Furman, two of Anthropic’s own mathematicians, examined Claude’s work to understand the new results and how they related to the prior work mentioned above. In parallel, Claude worked with another member of staff, Eric Easley, to produce a [Lean formalization](https://github.com/anthropics/zeta-23-lean) of the result, which passes the standard validation tool [comparator](https://github.com/leanprover/comparator).

## AI models' progress in mathematics

This result shows that AI models like Claude can extend the impact and reach of mathematicians’ ideas in new and sometimes surprising ways. Even though it couldn’t resolve the Riemann hypothesis itself, this result emerged as the unintended byproduct of that original request.

Even Claude was surprised by its own finding—it was skeptical at first, possibly because it has learned from its training about the difficulty of open problems in mathematics and about the limitations of AI models. But after some encouraging prompts, it arrived at the result we’ve described. Perhaps Claude, like many of us, underestimates the rate of AI progress.

## Further reading

Below is a list of documents that provide more information about Claude’s result:

*   [Claude](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf)[’](https://www-cdn.anthropic.com/d7f3ecf1d01392d887f8bc974ca187e2a121b1ed.pdf)[s paper](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf);
*   [Claude](https://github.com/anthropics/zeta-23-lean)[’](https://www-cdn.anthropic.com/d7f3ecf1d01392d887f8bc974ca187e2a121b1ed.pdf)[s formalization](https://github.com/anthropics/zeta-23-lean);
*   [Anthropic](https://www-cdn.anthropic.com/23455459f8832d06bb175cc0f88d019aed962ef8.pdf)[’](https://www-cdn.anthropic.com/d7f3ecf1d01392d887f8bc974ca187e2a121b1ed.pdf)[s informal note stating the proof more concisely](https://www-cdn.anthropic.com/23455459f8832d06bb175cc0f88d019aed962ef8.pdf);
*   [Claude’s explanation of how it arrived at its result](https://www-cdn.anthropic.com/d7f3ecf1d01392d887f8bc974ca187e2a121b1ed.pdf);
*   [Detailed transcripts of Claude's process](https://www-cdn.anthropic.com/8a0d1add3c637b858a9a181e98c40e9548c3f44f.pdf).

_  
**Changelog:** this post was updated on August 13, 2026, with an updated version of Claude's paper. This paper was revised by Claude to provide a clearer proof and additional historical context._

{% endraw %}
