---
layout: "story"
title: "Code yellow, code red"
date: "2026-08-09"
permalink: "/2026/08/09/stories/code-yellow-code-red-f66f4b/"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22781/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "Operations"
excerpt_separator: ""
---

{% raw %}
James shares his experience of how repeated outages were eroding customer trust, leading to a formal company-wide Code Yellow, targeting eight consecutive weeks of zero downtime. The effort involved auditing the entire stack, fixing rate limiting, adding circuit breakers, resolving memory leaks, and overhauling incident processes. The target was hit. Code Yellows work best with a clear problem statement, measurable exit criteria, full organisational transparency, and genuine authority to reprioritise work across teams.

---

# Code Yellow, Code Red

[July 14, 2026](https://www.theengineeringmanager.com/growth/code-yellow-code-red/)

by [James Stanier](https://www.theengineeringmanager.com/author/jstanier/ "All posts by James Stanier")

[Leave a comment](https://www.theengineeringmanager.com/growth/code-yellow-code-red/#respond)

[Growth](https://www.theengineeringmanager.com/category/growth/)

Towards the end of 2025, it seemed that we couldn’t get through a week at [Provet](https://www.provet.com/) without some kind of infrastructure degradation. Outages were piling up, they were hard to diagnose, and customers were losing patience.

When a [major AWS outage](https://www.cnn.com/2025/10/25/tech/aws-outage-cause) hit in October, our customers didn’t distinguish between _Amazon’s problem_ and _ours_: months of flakiness had already eroded their trust.

So we declared a Code Yellow, the first time we’d done it: a company-wide written announcement explaining the concept, the structure, the exit criteria, and the reasoning. The target was simple: tighten our SLAs and achieve zero downtime for eight consecutive weeks.

The good news was that we hit it, with only one brief degradation incident in the entire period, and the contrast with where we’d been just _weeks_ earlier was extraordinary.

This article is about that experience, and about the broader practice of Code Yellows and Code Reds: what they are, how to run one well, when to call one, and when to end one.

Here’s what we’re going to cover:

*   What Code Yellow and Code Red actually mean, and where the terms come from.
*   How we ran ours at Provet: the structure, the work, and what we learned.
*   A generalised template you can adapt for your own organisation.
*   When to call one, when to escalate, and the failure modes to watch for.

If you find this topic interesting, here are some complementary articles from the archive:

*   [One bottleneck at a time](https://www.theengineeringmanager.com/growth/one-bottleneck-at-a-time/) explores why fixing one binding constraint compounds faster than optimising everything at once, which is what a Code Yellow forces you to do.
*   [The beauty of constraints](https://www.theengineeringmanager.com/growth/the-beauty-of-constraints/) covers how deliberate limitation unlocks unconventional thinking.
*   [Going direct](https://www.theengineeringmanager.com/managing-managers/going-direct/) is about communicating without intermediaries, which becomes essential during an escalation.
*   [Invert, always invert](https://www.theengineeringmanager.com/growth/invert-always-invert/) explores defining failure first, which connects directly to setting exit criteria before you begin.

Let’s get going.

## What Code Yellow and Code Red actually mean

Before I share our experience, it’s worth defining the vocabulary.

The terms Code Yellow and Code Red originated at Google. As Steven Levy describes in [_In The Plex_](https://www.goodreads.com/book/show/7841446-in-the-plex), the name came from a yellow tank top owned by engineering director Wayne Rosing: whoever wore the shirt became the designated leader and could tap anyone at Google on the shoulder, pulling them off their current project to help.

The practice has since spread across the industry: LinkedIn, Meta, Shopify, Instacart, and OpenAI all use variations of it. And us of course, and maybe even you too.

The core idea is simple. A Code Yellow is a formal declaration that something is _seriously wrong_ and needs concentrated, cross-functional attention _now_, before it becomes catastrophic, while a Code Red is the next level up: an existential threat that demands _everything stops_ until it is fixed.

Here’s the distinction:

Dimension

Code Yellow

Code Red

Severity

Serious but not existential

Existential threat or critical failure

Urgency

Preventative intervention

Emergency response

Duration

Weeks to months

Days to weeks

Work hours

Primary focus during business hours

All hands, around the clock

Normal work

Deprioritised but not fully stopped

Fully paused

The real power lies in having a _shared language_ at the company, not in the table’s definitions. When everyone in your organisation understands what “Code Yellow” means, you don’t need to explain the severity, negotiate priority, or convince people to shift their focus, because the concept itself does the work for you.

Compare that to “we’re really concerned about uptime” or “this needs to be a top priority,” both of which are vague enough to be ignored, or for other functions like product to argue that their own priorities are more important.

As LinkedIn’s SRE team [described it](https://www.usenix.org/conference/srecon19americas/presentation/kehoe), the goal is to get a team “out of a reactive mode where they are running from crisis to crisis and into a proactive state.” That’s precisely what it felt like for us, and what the next section is about.

## How we ran ours

Let me dig into the Provet Code Yellow in more detail.

The trigger was a pattern, not a single incident. As described in the opening of this article, throughout the back end of 2025, we’d had multiple outages that were frustratingly difficult to diagnose, and that difficulty itself was a signal: it pointed to deeper infrastructure problems rather than isolated bugs.

When the October AWS outage hit, our customers perceived it as _our_ problem because months of instability had already conditioned them to expect that this again was all our fault.

As an exec team, we agreed that something bolder was needed, and the CEO signed off. I announced the initiative to the entire company in writing, and since it was our first Code Yellow, the announcement explained the concept itself alongside the specifics: what we were targeting, how long it would take, what the exit criteria were, and why we were doing it now.

The framing was deliberate. Uptime metrics are getting worse, we are losing trust with customers, and we need to act now before this becomes a Code Red.

The first week was intense and, honestly, _chaotic_: daily stand-ups, daily war rooms, and a full audit of monitoring, speed measurements, logs, and alerting.

The scope of what needed fixing was larger than anyone had anticipated, and prioritising within the Code Yellow itself generated real debate, though we found a surprising amount of low-hanging fruit (e.g. implementing additional timeouts and circuit breakers) and those quick wins built early momentum.

As the immediate fixes gave way to longer-term infrastructure work (migrating services to better technologies, rearchitecting for resilience), the cadence naturally slowed from daily to bi-weekly, then weekly.

Our approach was to walk the software stack from the bottom up: starting at the databases and what was connected to them, analysing access patterns and API calls, then moving further up the stack to look at rate limiting. Who was calling our API? What slow queries existed? What should the timeouts be across the stack as a result?

We also walked the stack from the outside in, looking at monitoring and alerting and identifying gaps that needed fixing.

Throughout, we maintained async updates in a public Slack channel called #code-yellow-uptime, deliberately over-sharing so anyone in the company could see exactly what was happening. Written shares followed a similar cadence to the above.

That transparency, the proximity and visibility it created to the actual work, was one of the most valuable parts of the whole exercise.

One powerful structural decision of Code Yellows is what is called “tap on the shoulder” authority. If an endpoint was particularly slow for our biggest customers, anyone working on the Code Yellow could tap the domain team that owned it and tell them to reprioritise to speed it up immediately. That kind of authority only works when the entire company understands and supports the escalation, which is why the concept and upfront communication mattered so much.

Getting people to deprioritise their roadmap work was surprisingly easy in our case, though I recognise that’s partly a function of context. At a company of our size, the instability was felt by _everyone_, and after the AWS outage, everyone saw fixing it as the number one priority. After all, a direct correlation exists between the stability of our product and the happiness of our customers.

I suspect deprioritisation is harder at larger organisations where the pain isn’t evenly distributed. If that’s your world, the communication piece becomes even more critical: the problem statement needs to make the impact concrete and company-wide, and getting exec buy-in and sign off is critical.

If you’re a manager without the authority to deprioritise on your own, bring the data to your leadership and let them make the call publicly. The worst outcome is a quiet, unofficial Code Yellow where your team bears the cost _without_ organisational support.

To give you a sense of the breadth, we improved and tightened rate limiting, fixed database timeouts, added circuit breakers, migrated away from Redis in areas where it was a bottleneck, and found and fixed memory leaks in background tasks. We added measurement of all of our API calls, partitioned by team, and set minimum speed thresholds that teams had to meet, lowering that threshold as the weeks went on.

We migrated our incident management tooling to [incident.io](https://incident.io/) and retrained everybody on a tighter incident process. And that’s just the tip of the iceberg.

When we hit our target, eight weeks with effectively 100% uptime as measured by our monitoring, it felt _awesome_. The communications rolled out in stages: engineering first, then company-wide, then a customer-facing announcement that was deliberately non-technical.

If I were to do it again, I’d push even _harder_ in the first two to three weeks, because that initial burst was where the bulk of the work happened and increasing the intensity early, when momentum is high, would have compounded the gains faster.

## The template: how to run your own

So how do you take something like our experience and generalise it? Whether you’re dealing with reliability problems, scaling challenges, or technical debt that’s reached crisis levels, the underlying framework is the same.

You need four components before you start your own Code Yellow:

*   **Problem statement.** This needs to be simple enough that everyone in the organisation can repeat it. “Our infrastructure is unreliable and customers are losing trust” is clear. “We need to improve our SLA posture across the P0 service tier” is not.
*   **Exit criteria.** These need to be specific, measurable, and time-bound, and you should define them _before_ you enter the Code Yellow (ours was eight weeks of zero downtime). Without clear exit criteria, you’ll never know when you’re done, and the Code Yellow will either drag on forever or fizzle out.
*   **Timeframe.** Set a clear start date and expected end date, and don’t plan for longer than a quarter: if your Code Yellow needs more than three months, you’ve either scoped it too broadly or you’re dealing with a Code Red.
*   **Authority structure.** You need to define who can pull people in, who reports progress and to whom, and who decides if the scope needs to change. In smaller organisations, this might mean direct “tap on the shoulder” authority, while in larger ones, it might mean escalation through a VP chain or a designated incident commander with cross-team authority. The mechanism matters less than having one that’s explicit and understood.

Communication is the next piece, and it’s worth working hard on getting right: announce the Code Yellow to the _full organisation_ with the problem statement, exit criteria, and timeline, so that surrounding teams know what’s happening, can expect delays on other work, and are ready to help if asked.

Transparency is what gives the Code Yellow its power. There’s nothing optional about it. This is a #announcements channel level communication. A Code Yellow that’s invisible to the rest of the company is just a stressed team working harder, which is exactly the opposite of what a Code Yellow should do; it should rally everyone around the team instead.

There are also cultural prerequisites that matter more than any process. Don’t think of declaring a Code Yellow as an admission of failure. It’s a sign that the organisation is mature enough to recognise a problem early and respond decisively. If early escalation gets punished rather than celebrated, people will avoid it, and by the time someone finally raises the alarm, you’ll be in Code Red territory.

## When to call one, when to end one

So you have the vocabulary and the template, but the hardest part isn’t running a Code Yellow: it’s knowing when to start one and, harder still, when to stop.

Common triggers include alert fatigue overwhelming your teams, technical debt reaching crisis levels, key metrics degrading consistently, and incidents piling up faster than you can resolve them. The pattern to look for is a _slow boil_: as LinkedIn’s SRE team noted, Code Yellows typically result from “increasing technical debt, many small issues or breakdowns in a process” rather than a single dramatic failure.

If you’re waiting for the dramatic failure, you’ve already waited too long.

Escalation to Code Red should happen when something threatens the core business: severe and widening customer impact, existential competitive threats, or fundamental system failures. Google famously [declared a Code Red](https://9to5google.com/2022/12/21/google-code-red-chatgpt/) when ChatGPT launched in December 2022, reassigning teams across the company to develop their AI capabilities, which became [Gemini](https://gemini.google.com/). That’s the severity level we’re talking about: _existential_, not merely inconvenient.

Ending a Code Yellow requires discipline, because exit criteria _must_ be met for it to finish: “we’re exhausted” is not a reason to de-escalate, and neither is “things seem better.” You defined measurable criteria at the start for exactly this reason.

Once you’ve hit them, conduct a blameless retrospective, communicate the conclusion to the full organisation, restart paused work deliberately, and check in on team wellbeing, because the push took a toll and acknowledging that matters.

Crucially, the retrospective of the Code Yellow should produce systemic changes, not just a summary of what happened. If you ran a Code Yellow but nothing changes about how work is prioritised, how monitoring is maintained, or how early warnings are escalated, you’ve treated the symptom without addressing what caused it.

The goal is to make the next Code Yellow less likely, not just to survive this one. For example, earlier in the article we outlined how we pretty much overhauled resiliency across our entire stack.

Finally, watch for these failure modes:

*   **Overuse.** If you call Code Yellows too often, the signal loses its value: every escalation becomes background noise, and people stop taking them seriously.
*   **Performative escalation.** This is when war rooms become theatre, with lots of visible activity and impressive dashboards but no real change in priority or approach: if the work during the Code Yellow is the same as before, you haven’t escalated anything.
*   **Failure to de-escalate.** A Code Yellow that never ends becomes permanent urgency, which is indistinguishable from normal operations, and if you can’t exit, your criteria were wrong.
*   **Shortcut temptation.** Adding technical debt to exit a Code Yellow defeats the purpose entirely, because you’ll be back in another one within months, this time with even more debt to dig out of.

## Your turn

Here are three things you can do with this:

*   **Draft your own escalation protocol.** Even if you don’t need a Code Yellow right now, having the framework ready means you won’t be designing it during a crisis. Define what triggers a yellow vs. a red in your organisation, who has authority to declare one, and what the communication plan looks like.
*   **Reflect on your last crisis.** Think about the most recent time your team dropped everything to fix a problem, and ask yourself whether it had a clear problem statement, exit criteria, and a defined timeline. What would have been different if it had been formalised as a Code Yellow?
*   **Have the vocabulary conversation.** Introduce the concept to your team or your leadership group, because the value of Code Yellow and Code Red as terms is that they compress a lot of meaning into two words. Even if you never formally use them, having a shared understanding of escalation levels makes the next crisis easier to navigate.

## Wrapping up

Code Yellows work when they’re structured, have clear exit criteria, and give teams both the autonomy and the permission to focus. They’re a blunt instrument. As one engineering leader at Instacart [put it](https://nilam.ca/2024/11/02/time-for-a-code-yellow-a-blunt-instrument-that-works/), “Code yellows suck, drain team morale, and they leave a lingering distaste amongst all those involved. Yet they were the most effective and consistent weapon in ensuring we made meaningful progress on our hairiest problems.”

That matches my experience. Running our Code Yellow at Provet was exhausting, but the outcome (real confidence in our infrastructure after _months_ of anxiety) was worth every minute of it. The key is treating them as the exception that proves the rule: a structured, temporary departure from normal operations, not a permanent state of crisis.

Until next time.

{% endraw %}
