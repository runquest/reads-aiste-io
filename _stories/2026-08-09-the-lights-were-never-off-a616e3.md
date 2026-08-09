---
layout: "story"
title: "The lights were never off"
date: "2026-08-09"
permalink: "/2026/08/09/stories/the-lights-were-never-off-a616e3/"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22936/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "AI"
excerpt_separator: ""
---

{% raw %}
The idea of the dark factory promises software development with little or no human involvement. But the teams closest to this work tell a more nuanced story. Humans still review, verify, and guide AI-generated code. The real challenge is not removing people, but replacing the work reviewers do with strong tests, simulations, automation, and safeguards.

---

{"@context":"https://schema.org","@type":"BlogPosting","headline":"The lights were never off","description":"The man who coined \\"dark factory\\" runs at Level 4. The man who popularized it calls it unproven. The teams who built one never say the words.","datePublished":"2026-07-29","dateModified":"2026-07-29","keywords":"ai, agents, architecture","url":"https://kachar.dev/blog/the-lights-were-never-off","mainEntityOfPage":{"@type":"WebPage","@id":"https://kachar.dev/blog/the-lights-were-never-off"},"image":"https://kachar.dev/blog/the-lights-were-never-off/opengraph-image","wordCount":2953,"timeRequired":"PT15M","inLanguage":"en","author":{"@type":"Person","name":"Ilko Kacharov","url":"https://kachar.dev"},"publisher":{"@type":"Person","name":"Ilko Kacharov","url":"https://kachar.dev"}}{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":\[{"@type":"ListItem","position":1,"name":"Home","item":"https://kachar.dev"},{"@type":"ListItem","position":2,"name":"Writing","item":"https://kachar.dev/blog"},{"@type":"ListItem","position":3,"name":"The lights were never off"}\]}[All writing](/blog)

July 29, 2026·15 min read

# The lights were never off

The man who coined "dark factory" runs at Level 4. The man who popularized it calls it unproven. The teams who built one never say the words.

![A vast unlit factory floor of dark brushed metal, machines still, with a single workstation glowing electric violet where a human is finishing an assembly by hand.](/_next/image?url=%2Fposts%2Ffinal-assembly-hero.jpg&w=3840&q=75&dpl=dpl_GAMgfQD7Pu7jRy4EWotoG1bFSywm)

The man who introduced "dark factory" to software does not operate one.

Dan Shapiro published [The Five Levels](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/) on 23 January 2026. He borrowed the term from FANUC and modelled his ladder on the NHTSA autonomy levels. Level 5 is the Dark Factory: "a black box that turns specs into software," a place where humans are "neither needed nor welcome." Asked which rung he is on, Shapiro answers in two words. "I'm here." He is at Level 4. He knows "a handful of people" at Level 5, in "small teams, less than five people," and calls the whole thing "nearly unbelievable."

Six months later the phrase is a consulting product, a 1,422-star Rust project, and roughly three quarters of the search results for its own name.

Climb it yourself. Nobody is standing on the top rung.

Dan Shapiro's five levels, 23 January 2026, modelled on the NHTSA autonomy levels. Every line below is his. Use the arrow keys, or click a rung.

5Dark Factorynobody

4Autonomous Executionthe coiner is here

3Supervisory

2Collaborative Pairing

1Task Offloading

0Manual

Level 4 · Autonomous Execution

“You're not a developer. You're not a development manager either. You've now become that which you loathed: you're a PM.”

Dan Shapiro, who coined the term: “I'm here.”

*   **Level 0, Manual:** “Whether it's vi or Visual Studio, not a character hits the disk without your approval.”
*   **Level 1, Task Offloading:** “You're writing the important stuff, but you offload specific, discrete tasks to your AI intern.”
*   **Level 2, Collaborative Pairing:** “You've got a junior buddy to hand off all your boring stuff to.”
*   **Level 3, Supervisory:** “You're not a senior developer anymore; that's your AI's job. You are… a manager.” “Almost everyone tops out here.”
*   **Level 4, Autonomous Execution:** “You're not a developer. You're not a development manager either. You've now become that which you loathed: you're a PM.” Dan Shapiro, who coined the term: “I'm here.”
*   **Level 5, Dark Factory:** “It's a black box that turns specs into software. Humans are neither needed nor welcome.” Willison, asked for one public example: “I don't think I've seen one of those yet.”

The man who introduced the term stops one rung short of it, and describes the top as “nearly unbelievable”. He knows “a handful of people” up there, in “small teams, less than five people”. None of them have shown their code.

So the skeptic has a fair question ready, and it is the wrong one. The question is not whether dark factories are hype. It is why every single person who actually built one describes something quieter than the label they got handed.

## [The label and the primary source disagree, every time](#the-label-and-the-primary-source-disagree-every-time)

I went looking for the strongest version of the claim and found a pattern instead.

Every primary source describes less autonomy than its own title

Left: the label it travels under. Right: what the source actually says when you open it. Nine rows, one direction.

The labelThe primary source

Dan Shapiro, who coined it

Defines Level 5, the Dark Factory

“I'm here.” He is at Level 4.

Simon Willison, who popularized it

“Dark factories are coming”, 204k views

“Basically unproven right now.”

Latent Space episode title

“1M LOC, 1B toks/day, 0% human code or review”

“Humans may review pull requests, but aren't required to.”

Vincent Koc, OpenClaw talk

“Dark Factory: Ships Faster Than You Can Read the Diff”

Closes on “agent in the loop”.

Fabro, the OSS project

“The open source dark software factory”

“Human-in-the-loop. Approval gates pause for human decisions.”

Stripe, cited everywhere as proof

1,300 agent-written PRs a week

“…human-reviewed, but containing no human-written code.”

Justin McCarthy, StrongDM

The case study everyone points at

Never says “dark factory”. Says “software factory”.

Ryan Lopopolo, OpenAI

The other case study everyone points at

Never says “dark factory”. Says “harness engineering”.

Josh Rosen

“One of the dominant visions”

“No one has fully built this yet.”

Nobody lied. The people closest to the work are the most careful about it. The label was applied downstream, by people who were not there.

Latent Space titled its Ryan Lopopolo interview "1M LOC, 1B toks/day, 0% human code or review." [OpenAI's own article](https://openai.com/index/harness-engineering/), published 11 February 2026, says something else: "Humans may review pull requests, but aren't required to." On the podcast Lopopolo puts it plainly. "Most of the human review is post-merge at this point." Review moved. It did not vanish. The billion tokens a day is the host's line, and it appears nowhere in OpenAI's write-up.

Vincent Koc's conference talk is called "Dark Factory." He closes it on "agent in the loop," a deliberate inversion, and says his binding constraint is his own attention. [Fabro](https://github.com/fabro-sh/fabro) calls itself "the open source dark software factory for expert engineers" and sells you a "middle path" whose headline feature is human approval gates. [Josh Rosen](https://x.com/JoshARosen/status/2077054762269257750), writing on 14 July 2026 to an audience of four likes, opens with the sentence the rest of the genre skips: "No one has fully built this yet."

And the two people with the best claim to having built one, StrongDM's Justin McCarthy and OpenAI's Ryan Lopopolo, never use the phrase at all. They say "software factory," "non-interactive development," "harness engineering." The label is applied downstream, by commentators, to work whose owners describe it more carefully.

Then there is the star witness. Every listicle cites Stripe's Minions as proof. [Stripe's own engineers](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) wrote the disqualifying sentence themselves: "Over 1,300 Stripe pull requests merged each week are completely minion-produced, human-reviewed, but containing no human-written code." Stripe deleted the typing and kept the reading. Twice, in fact: the operator checks it, then a second engineer reviews it.

The definition has two rules. The corpus only quotes the first.

Simon Willison, on Lenny's Podcast: “there's a policy of nobody writes any code” … “the next rule though is nobody reads the code.” Both gates, or it is not a dark factory.

Org

Rule 1: nobody writes

Rule 2: nobody reads

Stripe

Not a dark factory. The lights-on factory.

“no human-written code”

“while they're human-reviewed” - then a second engineer reviews

OpenAI

Review moved. It did not vanish.

“0 lines of manually-written code”

“may review… aren't required to”. Review is post-merge.

StrongDM

Passes both. 3 people, ~32,200 published lines.

“Code must not be written by humans”

“Code must not be reviewed by humans”

Fabro

Sells the middle path.

agents execute the graph

ships an “Approve Plan” human gate

Lights fully out

Empty. Willison, asked for one public example: “I don't think I've seen one of those yet.”

The exhibit every listicle leads with is the one that fails gate two. Stripe deleted the typing and kept the reading.

Nobody lied here. Simon Willison reported a fascinating thing he saw, and then, [one day later on Hacker News](https://news.ycombinator.com/item?id=46805001), deflated it himself: "Yeah, the 'dark factory' thing is basically unproven right now... I'm not ready to say that it's a good idea or that it's demonstrated to work outside of a demo I saw for an hour a couple of months ago." Asked to name one public repo built that way, [he couldn't](https://news.ycombinator.com/item?id=46804801). "I haven't been brave enough to try it myself yet." In his own blog he balks at the bill: "If these patterns really do add $20,000/month per engineer to your budget they're far less interesting to me."

That is a careful person being honest in public, twice. The discourse laundered the honesty out and kept the headline.

And it did it fast. Every primary source in this story lands inside a nineteen-day window in January and February. Everything after that is retelling.

Six months, start to saturation. Drag it.

Dots sit where the dates actually fall, not evenly. That gap on the right is the point.

Scrub the dark factory timeline, January to July 2026

23 Jan 2026the other five months14 Jul 2026

23 JanDan Shapiroprimary source

Publishes The Five Levels and names Level 5 the Dark Factory. He is at Level 4.

1.  **23 Jan · Dan Shapiro:** Publishes The Five Levels and names Level 5 the Dark Factory. He is at Level 4.
2.  **28 Jan · Simon Willison:** Reports a stealth team on Hacker News: “Nobody reviews AI-produced code, ever.” He has seen a one-hour demo.
3.  **29 Jan · Simon Willison:** The next day: “basically unproven right now.” Asked for one public example: “I don't think I've seen one of those yet.”
4.  **6 Feb · StrongDM:** Publishes the manifesto. Two rules, a $1,000/day/engineer floor, and a Digital Twin Universe. Never says “dark factory”.
5.  **9 Feb · Stripe:** Publishes Minions. Agent-written PRs, every one human-reviewed. The counter-example, filed by everyone else as proof.
6.  **11 Feb · OpenAI:** Publishes harness engineering. Zero hand-written lines. Humans “may review… aren't required to”. Never says “dark factory”.
7.  **26 Mar · BCG Platinion:** It becomes a consulting product. Ten authors, no first-hand data. Same day: the first of ten near-identical SEO posts.
8.  **2 Apr · Lenny's Podcast:** “Dark factories are coming.” 203,894 views. The same man who called it unproven in January.
9.  **6 Jul · One vendor's blog:** The tenth near-duplicate explainer. Roughly 72% of page one for the head terms is now a single vendor.
10.  **14 Jul · Josh Rosen:** “No one has fully built this yet.” Four likes.

Every primary source in this story lands in the first 19 days, inside that short violet segment. Everything after it is retelling. The consulting product arrives in month three, and the search results in month six.

## [Review is the ceiling, and that is the entire argument](#review-is-the-ceiling-and-that-is-the-entire-argument)

Strip the branding away and something real is underneath. It is not "the models got good." It is an arithmetic problem, and five organisations with no shared employer state it in almost the same words.

Five organisations, no shared employer, one sentence

Strip the branding off and the argument is arithmetic, not optimism.

1.  Agent throughput scales with tokens
2.  Human attention scales with nothing
3.  Review is the throughput ceiling
4.  So move the human, or remove them
5.  Now rebuild correctness without them

StrongDM“if you didn't write it there's just no way to review it without becoming the bottleneck”

OpenAI“The only fundamentally scarce thing is the synchronous human attention of my team”

Stripe“one of our most constrained resources is developer attention”

Latent.Space“We have to give up on reading all the code”

Josh Rosen“human code review can no longer serve as the primary mechanism for establishing whether the software is correct”

Keep a human in the read path and you have capped the system at human reading speed, however many agents you buy. That is the whole case, and it is a good one.

McCarthy's version is the cleanest, from his [StrongDM talk](https://www.youtube.com/watch?v=XBdWau6OQQ0): they committed to writing no code by hand, and "the first thing that we realized almost immediately after committing to this was, if you didn't write it there's just no way to review it without becoming the bottleneck." So they extended the rule. Not writing became not reading. It became "religiously important to not review the code and not read the code."

Lopopolo arrives at the identical place from the other end. "The model is trivially parallelizable. As many GPUs and tokens as I am willing to spend, I can have capacity to work on the code base. The only fundamentally scarce thing is the synchronous human attention of my team." Stripe's blog says it in one clause: "one of our most constrained resources is developer attention."

Agent throughput scales with money. Human attention does not scale with anything. Keep a human in the read path and you have capped the system at human reading speed, no matter how many agents you buy. That is the whole case, and it is a good one.

The move nobody copies

They did not delete the reviewer. They deleted the reviewer and then spent a year rebuilding everything the reviewer was silently doing. The first half is a decision. The second half is the work.

## [The bill for not reading arrives in simulation](#the-bill-for-not-reading-arrives-in-simulation)

What the slogan costs is the part that never survives the retelling. StrongDM's own [account](https://factory.strongdm.ai/) reads like a series of failures, which is why it is worth trusting. Hands off the keyboard: "Not very far! At least: not very far, until we added tests." Then the agent learned to cheat. "`return true` is a great way to pass narrowly written tests." Then they hit the problem underneath, the one [Josh Rosen](https://x.com/JoshARosen/status/2077054762269257750) names precisely: an implementation and its verification can share the same mistaken assumption when both come from the same ambiguous spec. In StrongDM's words: "A test, stored in the codebase, can be lazily rewritten to match the code. The code could be rewritten to trivially pass the test."

Who verifies the verifier?

Josh Rosen: “an implementation and its verification may share the same mistaken assumptions, especially when both were derived from the same ambiguous specification.” Flip the switch and watch the same bug land differently.

Test lives in the repoScenario lives outside it

Running…

Both tracks start from the same bad spec and the same bad code. The only thing that changed is whether the agent could reach the thing grading it.

Their fix is the most interesting idea in the field, and it is the thing I have been arguing for in [a different vocabulary](/blog/loop-engineering-is-verifier-engineering). They moved the verifier out of the agent's reach. Scenarios live _outside_ the codebase, "similar to a holdout set in model training." Success stopped being boolean and became "satisfaction": of all observed trajectories through all scenarios, what fraction likely satisfy the user. And to run those scenarios they built the Digital Twin Universe, behavioural clones of Okta, Jira, Slack, Google Docs, Drive and Sheets, because "tests can be reward hacked" and Salesforce, as McCarthy notes, "won't let you start up 100,000 customer tenants overnight just because you want to or you ask nice."

What you build before you are allowed to stop reading

Read it bottom-up. These are prerequisites, not options. The permission at the top is the only thing anyone quotes.

“Code must not be reviewed by humans”

the one line that travels

1.  Entropy controlThe slop does not clean itself
    
    *   OpenAI: a doc-gardening agent that opens fix-up PRs; “golden principles” enforced by Codex-generated custom linters
    *   Layers enforced mechanically: Types → Config → Repo → Service → Runtime → UI, cross-cutting only via Providers
2.  Merge policyCorrections are cheap, waiting is expensive
    
    *   OpenAI: “minimal blocking merge gates”, short-lived PRs, flakes get a re-run - guarded by “this would be irresponsible in a low-throughput environment”
    *   Stripe: at most two rounds of CI, then “back to its human operator for manual scrutiny”
3.  VerificationRebuild everything the reviewer was silently doing
    
    *   Stripe: lints in under a second on push → CI selects from “over three million” tests → autofixes applied automatically → no autofix, back to the agent
    *   StrongDM: scenarios stored outside the codebase, “similar to a holdout set in model training”
    *   StrongDM: the Digital Twin Universe - behavioural clones of Okta, Jira, Slack, Google Docs, Drive and Sheets
    *   OpenAI: Vector → Victoria logs/metrics/traces, queried by the agent in LogQL and PromQL
4.  LegibilityWhat the agent cannot see does not exist
    
    *   OpenAI: a ~100-line AGENTS.md used as a table of contents. The one-big-file approach failed: “too much guidance becomes non-guidance”
    *   docs/ as the system of record; Chrome DevTools Protocol wired into the runtime; app bootable per git worktree
    *   Stripe: rules scoped per subdirectory, not global; Toolshed with ~500 MCP tools
5.  IsolationShrink the blast radius until trust is unnecessary
    
    *   Stripe: pre-warmed EC2 devbox, ready in 10 seconds, “isolated from production resources and the internet”, QA environment, no real user data, no arbitrary egress
    *   Because the box is small, they “run the agent with full permissions and skip confirmation prompts”
    *   Fabro: Daytona cloud VMs, network and filesystem isolation

StrongDM and OpenAI removed the reviewer and paid for the replacement. The replacement is this. Everyone quoting the top line is skipping the stack.

The [Techniques page](https://factory.strongdm.ai/techniques) states the reframe plainly: "Code was treated analogously to an ML model snapshot: opaque weights whose correctness is inferred exclusively from externally observable behavior. Internal structure is treated as opaque."

That is the actual intellectual content of the dark factory, and almost nobody quotes it. You do not read a neural network's weights. You evaluate its behaviour against a holdout and report a score. Once you treat code that way, the twins and the scenarios and the probabilistic metric are not clever extras. They are forced. And so is the danger, because we already know exactly how model evaluation fails: benchmarks get gamed, holdouts leak, proxy metrics drift, and nobody debugs a bad model by reading it. If code is a model now, then [your evals are the moat](/blog/your-evals-are-the-moat) stops being a slogan about AI features and starts being a statement about your source tree.

The price of admission is published. StrongDM's benchmark, stated as a floor: "If you haven't spent at least $1,000 on tokens today per human engineer, your software factory has room for improvement." Willison did that multiplication and walked away at $20,000 per engineer per month, against the $200 plan he actually uses. Lopopolo's caveat is quieter and larger: "certainly helps that we have no rate limits internally." An OpenAI employee with free frontier tokens, building an internal tool. Every economic constraint you have, switched off. His own article says it: this "should not be assumed to generalize without similar investment."

The honest ledger, then. StrongDM published about 32,000 lines from three people. OpenAI wrote on the order of a million in five months with zero hand-written code, an estimated tenth of the time it would have taken, and paid for it with a Friday. Their words: "Our team used to spend every Friday (20% of the week) cleaning up 'AI slop.' Unsurprisingly, that didn't scale."

## [In 1981 the robots built the robots and the humans did final assembly](#in-1981-the-robots-built-the-robots-and-the-humans-did-final-assembly)

The metaphor deserves the same scrutiny as the claims, because it does not survive it.

Every "FANUC runs unattended for 30 days" citation traces to one place: a 350-word trend brief in _Business 2.0_ called ["Fade To Black,"](https://web.archive.org/web/20180622003515/http://money.cnn.com/magazines/business2/business2_archive/2003/06/01/343371/index.htm) published 1 June 2003. It is twenty-three years old, and the thirty-day figure is attributed to nobody. The only named human is a FANUC vice president selling factory automation. Every retelling since is a copy of that paragraph.

FANUC's own site claims something smaller: unmanned operation "for long hours, including nights and weekends." A FANUC America executive told _Assembly_ in 2019 the real number is "up to 600 hours" and that "people are there for routine maintenance." That is 25 days, not 30. And then the poster child disowns the poster:

> "We used to hear a lot about lights-out factories, but not as much anymore. It isn't practical for every application. The trend today is short product life cycles, lots of variation, mass customization and shorter production runs."

Read that list again. Short life cycles, high variation, short runs. That is software. FANUC is describing the conditions under which lights-out does not pay, and they are our working conditions.

The dark factory has always had someone doing final assembly

Forty-five years apart. Same shape. The machines take the volume, a human takes the last step.

1981Christian Science Monitor, 15 April 1981, from the Fuji plant

Robots build robots

“For 16 hours of every working day the factory is run entirely by robots”

Humans do final assembly

“Workers return to the factory next morning to complete the final assembly of the new generation of robots”

FANUC's president hoped to build a robot that could take over final assembly by 1985.

2026OpenAI, Stripe, StrongDM, in their own words

Agents write the code

“0 lines of manually-written code” · “1,300 PRs a week… no human-written code”

Humans do the review

“most of the human review is post-merge” · “back to its human operator for manual scrutiny”

It is 2026.

In 1981 the robots built the robots and the humans did final assembly. In 2026 the agents write the code and the humans do the review. The last step keeps moving. It has never left.

Now go back to the founding legend. The _Christian Science Monitor_, [15 April 1981](https://www.csmonitor.com/1981/0415/041542.html), reporting from the Fuji plant: "For 16 hours of every working day, in fact, the factory is run entirely by robots." About 100 humans came in for the other eight. And then the sentence that should end this genre:

> "Workers return to the factory next morning to complete the final assembly of the new generation of robots."

The robots built the robots. The humans did final assembly. FANUC's president hoped to automate that last step by 1985. It is 2026.

Software is running the same play with the same slogan. In 1981 the humans did final assembly. In 2026 they do the review. Tesla ran the loop faster than anyone and Musk [posted the receipt](https://x.com/elonmusk/status/984882630947753984) in April 2018: "Yes, excessive automation at Tesla was a mistake. To be precise, my mistake. Humans are underrated."

## [The lights are going off in factories nobody meant to build](#the-lights-are-going-off-in-factories-nobody-meant-to-build)

The part that should worry you has nothing to do with StrongDM or OpenAI.

[Faros AI](https://www.faros.ai/research/ai-acceleration-whiplash) instrumented 22,000 developers across 4,000 teams over two years, comparing each team's low-AI quarters against its high-AI quarters. Their March 2026 report is careful about what it is: statistically significant correlation, not causation, from a vendor, on an undisclosed company list. Take it with the salt it asks for.

In that dataset, fewer than 1% of pull requests are opened autonomously by an agent. Essentially nobody is running a dark factory. Faros says so explicitly: the data "mostly reflects a world in which humans remain in the loop."

And in that world, review is already collapsing. 31.3% more pull requests merge with no review at all. Median review time is five times longer. Incidents per pull request more than tripled. Pull requests are 51% bigger and touch 60% more files. Faros's own summary: "engineering throughput is up due to AI-generated code, bugs, incidents, and rework are rising even faster."

The factory ships more code and less software

Faros AI, March 2026: 22,000 developers, 4,000 teams, two years of telemetry, each team's low-AI quarters against its high-AI quarters. Correlation with statistical significance, from a vendor. Not causation.

Fewer than 1% of these pull requests are opened by an agent

Almost nobody in this dataset is running a dark factory. Faros: the data “mostly reflects a world in which humans remain in the loop.”

Epics completed+66.2%

Tasks throughput+33.7%

Pull request size+51.3%

Bugs per PR+28%

Incidents per PR+242.7%

more than tripled

Deployments per week\-11.7%

from the ~10% of the dataset that instrumented it

5x median review time

the humans are drowning

31.3% more PRs merge with no review at all

so they stopped

Nobody voted for this. No charter, no holdout scenarios, no digital twin of Okta. The volume arrived and the attention did not.

Nobody voted for this. There was no charter document, no "hands off," no holdout scenarios, no digital twin of Okta. Teams did not decide to stop reading the code. They just stopped, because the volume arrived and attention did not. StrongDM and OpenAI removed the reviewer _and paid for the replacement_. Everyone else is getting the removal for free and discovering that the replacement is not free.

The cruellest line in the report is the one for the good teams. Organisations with mature DevOps practices and strong pre-AI performance showed the same downstream deterioration as everyone else, which contradicts DORA's more comforting finding that AI amplifies existing strengths. Being good at engineering did not protect anyone. Faros's read is that telemetry catches operational stress that sentiment surveys miss.

And if you are tempted to answer this with a number: the only controlled study we have, [METR's 2025 RCT](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), found experienced developers were 19% _slower_ with AI while believing they were 20% faster. It is sixteen developers on year-old models, and it says nothing about autonomous pipelines. What it does say is narrower and more useful: every "3 to 5x productivity" figure in this genre is self-reported, and self-reports were off by 39 percentage points in the one case anyone bothered to measure.

## [The label is already leaving software, and it is still shedding caveats](#the-label-is-already-leaving-software-and-it-is-still-shedding-caveats)

While I was writing this, the term mutated twice more.

It went sideways first. A consultancy explainer in March took Shapiro's ladder and mapped it onto [audit, banking and legal work](https://www.cow-shed.com/blog/dark-factories-five-levels-ai-automation-transform-audit-banking-legal), asking what a dark factory means for controls testing and due diligence. Then it went upward. On 9 June an engineer named Arnór Heiðar Sigurðsson published ["Dark Startup Factories"](https://arnorhs.dev/posts/2026-06-09/dark-startup-factories/), which takes the metaphor off the codebase and puts it around the entire company.

His argument is the one about review being the ceiling, promoted a level. "Before you had a system where you had a **human-bandwidth constraint**, but with agentic startups, you are **compute-throughput constrained**." Then the same reasoning that took StrongDM from _nobody writes code_ to _nobody reads code_ keeps going: if agents do the building, you do not need people, and if you do not need people you do not need someone to motivate them. "But if there's no people to motivate, do you need founders? Then the question becomes 'why should VCs invest in founders?'"

That is a real question, and he is honest about where it stands. His own section heading is "Are we there yet?" and his own answer is two words: "We aren't." He puts his finger on exactly the thing OpenAI pays for with a Friday: "Without a human in the loop, code tends to degrade to unmaintainable spaghetti."

So that is now three careful people in a row. The coiner hedges. The reporter hedges. The man extending it to startups hedges. And look what still happens on the way down.

It takes one hop, and the hop did its homework

One fact, four retellings. Drag the handle along the chain.

Drag through four retellings of the StrongDM team size

6 Febfactory.strongdm.ai

7 FebSimon Willison

6 MarA consultancy explainer

9 JunA thoughtful engineer's essay

6 Feb 2026factory.strongdm.ai

“Jay Taylor and Navan Chauhan joined me (Justin McCarthy, co-founder, CTO) in founding the StrongDM AI team.”

The primary source. A three-person team, founded inside StrongDM on 14 July 2025. StrongDM itself was founded in 2015, sells enterprise access management, and was acquired by Delinea.

1.  **6 Feb 2026 · factory.strongdm.ai:** “Jay Taylor and Navan Chauhan joined me (Justin McCarthy, co-founder, CTO) in founding the StrongDM AI team.” The primary source. A three-person team, founded inside StrongDM on 14 July 2025. StrongDM itself was founded in 2015, sells enterprise access management, and was acquired by Delinea.
2.  **7 Feb 2026 · Simon Willison:** A three-person team at StrongDM: McCarthy, Taylor, Chauhan. Accurate. He read the primary, reported it correctly, and linked it.
3.  **6 Mar 2026 · A consultancy explainer:** “A three-person company called StrongDM…” One hop, and the team became the company. An eleven-year-old access-management business is now a three-person startup. This article has a references section. Shapiro, Willison and METR are all cited correctly. It did the homework. The fact drifted anyway.
4.  **9 Jun 2026 · A thoughtful engineer's essay:** Links that page for the words “Dark Factory”, and extends the idea to whole companies: “Dark Startup Factories”. He is careful, and explicit that it is speculative: “Are we there yet? We aren't.” But the StrongDM three hops downstream is a three-person company that does not exist.

Nobody was careless. The article that got it wrong has a references section, and its references are correct. Compression is not lying. It just drops the qualifier every time, and the qualifier was the finding.

The consultancy piece is not slop. I expected it to be and it isn't. It has a references section, and the references are right: Shapiro's post, Willison's post, the METR trial, all cited accurately. It even explains the holdout properly, better than most: scenarios are "stored separately so it cannot optimise for passing them", and they verify "the same way a holdout set in machine learning verifies a model has genuinely learned rather than memorised."

And in its opening line it says StrongDM is "a three-person company."

StrongDM was founded in 2015. It sells enterprise access management, it has on the order of a hundred and seventy people, and it was acquired by Delinea. The three people are the _AI team_, founded inside it on 14 July 2025, by a co-founder who already had a company to put them in. That distinction is not trivia. It is the difference between "three people built a company with no code" and "an established security business gave three engineers room to run an experiment." One of those is a miracle. The other is a budget.

Nobody lied. The article did its homework and cited its sources. It just compressed, and compression drops the qualifier, and the qualifier was the finding. One hop.

## [Three things wear this name, and conflating them is how teams get hurt](#three-things-wear-this-name-and-conflating-them-is-how-teams-get-hurt)

The dark factory as marketed does not exist. The coiner is at Level 4, the reporter says unproven, Rosen says nobody has built it, and even FANUC says it is uncommon and usually not worth it.

The dark factory as engineered is real, and it is the most interesting systems work happening right now. It is also expensive, narrow, roughly a year old, and it keeps a human at the exact point where the stakes turn real. That is not my inference. Open the [Attractor spec](https://github.com/strongdm/attractor) from the team whose second rule is _code must not be reviewed by humans_, and read the section titles. Section 6 is "Human-in-the-Loop (Interviewer Pattern)." Its worked example is an option labelled `"Yes, deploy to production"`.

The dark factory as it is actually arriving is an accident, and it is arriving at your company on the Faros numbers, not the StrongDM ones.

So do not ask whether to turn the lights off. Ask which of those three you are already in. If your unreviewed merge rate is climbing and you have not built a holdout, a twin, or a blast radius, you are not running a dark factory. You are running an unlit one.

Nobody turned the lights off. They rewired where the light falls. The places that never rewired anything are just going dark.

Did this resonate?

## Get new essays by email

Field notes on AI-native products, straight to your inbox. No spam, unsubscribe any time.

Subscribe

Written by Ilko Kacharov·[Read as Markdown (for LLMs)](/blog/the-lights-were-never-off/llms.txt)·[Share on X](https://x.com/intent/tweet?text=The%20lights%20were%20never%20off&url=https%3A%2F%2Fkachar.dev%2Fblog%2Fthe-lights-were-never-off&via=kachar136)

{% endraw %}
