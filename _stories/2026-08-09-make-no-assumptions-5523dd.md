---
layout: "story"
title: "Make no assumptions"
date: "2026-08-09"
permalink: "/2026/08/09/stories/make-no-assumptions-5523dd/"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22824/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Codebases often build up distinct layers over time as new developers add code without fully understanding what came before. AI tools are making this worse, and the same problem is now spreading to how teams reason and make decisions. AI-generated analysis can look polished while being built on flawed data, leading teams to solve problems that don't exist. The fix is to inspect every layer of reasoning rather than accepting it at face value.

---

# Make no assumptions.

Published on July 11, 2026. [management (219),](/tags/management) [software (44)](/tags/software)

I’ve recently been thinking a lot about the concept of “soil horizons”, which is the idea that there are many distinct layers of soil, from topsoil all the way down to bedrock, which all combine into a soil horizon. Translating this idea into software, the ideal codebase would have a single uniform “code layer”, but a surprisingly large percentage of production software has numerous, distinct code layers as the leading architect shifted over time. I’ve found this particularly true for software in problem-spaces with [high essential complexity and low scale complexity](/quality/), where the purifying challenges of scaling never create enough pressure to compact disjoint layers into a unified layer.

Codebases with the most code layers tend to be created by small teams working on complex domains over a long period of time. In many companies this might be an identity, permissions or payments team: stuff that’s permanently valuable, but usually not the central concern at any given time. On such teams, there is often only one architect who understands the nuances of the domain well enough to make tradeoffs. When that architect leaves, they are replaced by someone who aspires to operate in the same code layer, but simply cannot because they lack enough context to do so. As a result, that new replacement creates a new code layer, despite not intending to. If the team runs through a handful of folks as the new team leads struggle, it’s easy to end up with a complex code horizon very quickly.

![Software history framed as soil horizons.](/static/blog/2026/code_horizons.png)

The problem of messy code horizons is not a new one, and the general approach to addressing them is the same one I wrote about seven years ago in [Reclaim unreasonable software](/reclaim-unreasonable-software/), but with the proliferation of coding and non-coding harnesses, lately I’m running into the problem of messy code horizons more frequently. Even more concerning, I’m seeing this problem expand from impacting code horizons into impacting how organizations make decisions outside of software, e.g. the company’s general reasoning horizons. When individuals or teams rely on LLMs to reason to conclusions, rather than using LLMs to explore or draft options, it’s possible for even the most important decisions to be built on top of flawed reasoning layers underneath.

In the next section, I’ll develop the problem statement a bit about what I’m running into, and then in the final section I’ll lay out the approaches that I am finding (moderately) effective to navigate that problem.

## Messy reasoning horizons

If you give three enthusiastic engineers a problem, a new codebase, a coding harness, and self-approval rights, it’s very easy to end up with three new soil horizons as their harnesses gleefully commit code. However, in engineering we have a number of techniques to derisk this problem. First, we have manual and automated code review, and second we increasingly have the ability for the harnesses to operate off sufficiently clear instructions that they write new code consistently with the existing code, even if the operator is unaware of what good looks like. This is also true for code review, where coding harnesses can drive consistency across pull requests even if the person (or harness) creating the pull requests is not operating off the same shared context as the wider team.

Many codebases are not well-configured for this new reality, and those codebases are getting worse at an accelerating rate as more harness and agent contributions get added. Legacy codebases that reach a certain size before introducing these better practices are [easier to fix than before](/revised-rules-of-engineering-leadership/), but still require a lot of work to fix.

That said, I’m confident that coding harnesses are going to substantially improve the quality of code horizons over the next year or two as the way we configure harnesses improves. That’s not the problem I’m worried about. What I’m worried about is the application of harnesses to problems outside of writing software, where there’s no static typing, linting, or unit tests to validate the output.

Let me provide a very recent example from my own work that highlights this problem: I wanted to understand how our incidents were trending over time. So I pulled data via an MCP, and the analysis was unintuitive to me, in particular I thought we were having more Data related incidents than the results reflected. I had to look at the incidents in Slack, then the results in our incident tool, and understand why the two conflicted. After a bit, I recognized the results in our incident tool were only showing incidents that properly tagged a team when the alert was triggered, so it was omitting about half the relevant incidents. After having the agent manually tag the incidents without team assignments, the data made a lot more sense. After recognizing the issue, it was trivial to fix. However, if I had simply accepted the initial analysis, I would have made the perfectly wrong conclusion about what was happening. On top of that wrong conclusion, I could have easily pushed the team to take on a project to solve an illusionary problem.

What’s so pernicious about messy reasoning horizons, is once any reasoning layer is poisoned, it’s impossible to reason effectively on top of it. If you take the incident analysis example, it’s easy to imagine prioritizing the perfectly wrong set of remediations, which have the artifacts of solid strategic reasoning, but are nonetheless just wrong. It’s easy to imagine a team wasting a quarter of time building a solution to this sort of problem that never existed.

It’s true that poor reasoning has always existed, long before harnesses, but my experience is that poor reasoning wearing well-formatted clothing is proliferating more widely than I’ve previously seen, and it is increasingly difficult to combat because certain social norms are – at least temporarily – collapsing around folks actually thinking. That collapse is largely driven by unprincipled adoption of AI techniques without paying attention to whether they work. Widespread adoption is, in my opinion, the fundamental risk for most companies at the moment, and something companies need to be doing, but many approaches inadvertently mix play (experimenting with something new in ways that are likely to fail!) with production (creating load-bearing work product!) in ways that erode social norms for quality.

The norms are not uniformly collapsing by any means, they are _generally_ intact, but even a small increase in the proliferation of low quality reasoning layers has a devastating effect on your ability to reason successfully. Especially true the further up the poor reasoning occurs (sloppy reasoning from senior leaders) or when senior leaders rely on layers of reasoning without inspection (leaders who aren’t sufficiently “in the details” to spot likely reasoning errors in reasoning layers).

As a result, we now live in a world where accepting any part of the reasoning context before [inspecting](/inspection/) it might lead to making a catastrophic mistake. This is an exhausting way to live.

## Make no assumptions

Accepting that this is the world we live in, I wanted to lay out the techniques that I am finding useful to deal with it. Some of these are novel, but many of them are the same techniques I was using before the LLM-advent:

1.  **Make no assumptions**. When new hires join my team or my company, the first thing I tell them is that it’s essential that they “make no assumptions.” This is difficult to do, and it goes against every instinct because it forces you to inspect each aspect of how the company works and thinks, but I do think it’s the necessary approach. It’s a bit like learning “internet-skepticism” at some point in your life, where you realize that everything on the internet is self-motivated in some way, and you have to maintain a strict filter on what ideas you accept.
    
    This is a hard change to make, but I genuinely believe this is the correct mindset for accepting new information in the current era. The combination of fewer management layers and more flawed reasoning layers means that the core job of leadership is inspecting the details.
    
2.  **The author must be the first human in the loop for their output.** The biggest cultural failure with harnesses is when you can tell that you–the recipient of a piece of work–are the first human in the loop reviewing it. You must set a cultural norm that the creator of a piece of content is always the first human in the loop before asking another human to review it. If you fail to set that cultural expectation, then you will quickly crush the remaining team with a high standard for quality reasoning, which will lead to a full destruction of your reasoning horizon.
    
3.  **Prioritize reasonable software.** Run the [Reclaim unreasonable software](/reclaim-unreasonable-software/) playbook, recognizing that [migrations are cheap in 2026](/revised-rules-of-engineering-leadership/), so it’s much faster to remediate gaps. The core idea here is that relying on convention doesn’t work, and instead you have to rely on deterministic decisioning for each approach. For humans this can feel overly prescriptive, but harnesses don’t care.
    
4.  **Learn faster by separating play and production.** Many folks trying to learn how to use harnesses and LLMs leap directly into using them in their most critical work. This is a slow way to learn, and can lead to substantial errors in your most critical work. It’s much faster to work by buffering small pockets of time to learn.
    
    For example, our head of data has spent time building an iOS app fully “hands off the keyboard” to get a better feel for the tools. This sort of experiment goes much faster and gives you more repetitions in less time. The very practical version of this is setting aside a day or two periodically for folks to experiment.
    
5.  **Structure how you think with LLMs.** In _[Crafting Engineering Strategy](https://craftingengstrategy.com/)_, I lay out a structured approach to reasoning through creating a strategy document, which aims to prevent the reasoning errors that folks make in their thinking. This applies equally in how we use LLMs, and I think you can substantially reduce the chance of introducing flawed reasoning layers by focusing LLM work on [exploration](https://craftingengstrategy.com/strategy-steps/) (gathering information on internet and via various MCPs), [refinement](https://craftingengstrategy.com/refinement-intro/) (presenting gathered information effectively), and a final formatting pass. That takes much of the work out of strategy creation while constraining the areas you have to avoid making any assumptions about its output.
    

I’m certain there are more things! What are you trying?

Hi folks. I'm [Will Larson](/about).

If you're looking to reach out to me, here are [ways I help](/ways-i-help/).

Books

I wrote [An Elegant Puzzle](https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186), [Staff Engineer](https://staffeng.com/book), [The Engineering Executive's Primer](https://www.amazon.com/Engineering-Executives-Primer-Impactful-Leadership/dp/1098149483/), and [Crafting Engineering Strategy](https://craftingengstrategy.com/).

[![](/static/blog/2019/aep-small-lq.jpg)](https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186)

[![](/static/blog/staffeng/StaffEngBookMed.jpg)](https://staffeng.com/book)

[![](/static/blog/2023/primer-cover-small.jpg)](https://www.amazon.com/Engineering-Executives-Primer-Impactful-Leadership/dp/1098149483/)

[![](/static/ces_cover_small.png)](https://craftingengstrategy.com/)

Newsletter

If you'd like to get get updates, [subscribe](/newsletter/) for weekly emails, or follow my [RSS feed](/feeds.xml).

   

Popular

*   [Building internal agents](/agents-series/)
*   ["Good engineering management" is a fad](/good-eng-mgmt-is-a-fad/)
*   [Moving from an orchestration-heavy to leadership-heavy management role.](/orchestration-heavy-leadership-heavy/)
*   [Eng org seniority-mix model.](/engineering-cost-model/)
*   [How to create software quality.](/quality/)

Recent

*   [Middle management roles are also a trap.](/middle-management-roles-were-also-a-trap/)
*   [Generated and suppressed demand.](/generated-demand/)
*   [Make no assumptions.](/make-no-assumptions/)
*   [Revised rules of engineering leadership.](/revised-rules-of-engineering-leadership/)
*   [Early and late-stage hypergrowth.](/early-late-stage-hypergrowth/)

Related

*   [Coding at work (after a decade away).](/coding-at-work/)
*   [Revised rules of engineering leadership.](/revised-rules-of-engineering-leadership/)
*   [Early and late-stage hypergrowth.](/early-late-stage-hypergrowth/)
*   [Judgment and creativity are all you need.](/judgment-is-all-you-need/)
*   [Should you include engineers in your leadership meetings?](/should-include-eng-in-eng-leadership/)

{% endraw %}
