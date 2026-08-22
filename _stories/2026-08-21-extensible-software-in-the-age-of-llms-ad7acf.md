---
layout: "story"
title: "Extensible Software in the age of LLMs"
date: "2026-08-21"
permalink: "/2026/08/21/stories/extensible-software-in-the-age-of-llms-ad7acf/"
slug: "extensible-software-in-the-age-of-llms-ad7acf"
source: "TLDR"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=979e8654-9bab-11f1-aa26-07656c2bb054%26pt=campaign%26pv=4%26spa=1787133654%26t=1787137519%26s=a63edfd53e804fb788c6ed7072f817ed2f35e7820e2f870fb333928b10886f0b/1/010001a019b270c4-78c7b3d9-5825-409e-898e-3a3d57c2c2df-000000/GD-gFyGjL6CtWphoA5YbGp6PtCeS82wzkev7oOK2E04=452"
original_url: "https://jeremymorrell.dev/blog/extensible-software-in-the-age-of-llms/?utm_source=tldrnewsletter"
category: "Programming"
excerpt_separator: ""
---

{% raw %}
Platforms are hard to design, run, and debug, and exposing APIs to customers means a lot of upfront thought and long-term support, but it's worth it both for users and the creator.

---

Most of the web software we interact with today is static. The developers have a limited amount of time and attention, and focus on building the features that serve the largest group of users. The top of the demand curve is well-served by existing software, but there is a long-tail of unmet needs that’s different for every user.

[![Chart: long-tail distribution of mapping user needs, from common navigation questions to niche historical queries](/_astro/google-maps-long-tail-diagram.CetMzOur_qQTPR.webp)](https://x.com/tophtucker/status/1280992756278714373)

User needs in mapping software

[Even if the developers were incredibly motivated to shove in every feature, user interfaces can only become so complex before they become unusable.](https://newsletter.getprimitive.ai/p/when-to-design-for-emergence) Every additional feature added complicates the product for every other user. If the market for that feature is small, it can actively make the product worse for every user who doesn’t need it.

With this context the rise of LLM-assisted coding has been genuinely empowering for anyone who needed something that fell into this long tail.

## Software has gotten all… squishy[#](#software-has-gotten-all-squishy)

It’s become readily apparent that LLMs are really quite excellent at building [Software for One](https://www.ajwaxman.com/writing/software-for-one). Personal apps that side-step all of the complexity and accountability of enterprise software and are custom fit for a single person’s workflow.

[Pete Koomen](https://koomen.dev/) at Y Combinator thinks there is an opportunity for what they are calling [Small Software](https://x.com/ycombinator/status/2079963726435021232). I think they are onto something.

[![](/_astro/ycombinator.BPg4c2n2_2l0Pvd.webp)](https://x.com/ycombinator)

[Y Combinator](https://x.com/ycombinator)[@ycombinator](https://x.com/ycombinator)

[](https://x.com/ycombinator/status/2079963726435021232 "View on X")

> Agents make it easy to build personal tools for yourself or your team. But deploying, securing, and sharing that software is still far more complicated than creating it. A cloud built for small software could remove that complexity and make bespoke tools as easy to share with a colleague as a Google Doc.

[July 22, 2026](https://x.com/ycombinator/status/2079963726435021232)

[Pi](https://pi.dev/) is a good example of what I’m starting to think of as **LLM-native software**: a battle-tested core, but almost endlessly extensible just by asking, where users are able to share their customizations with others. **In the past year your users have suddenly acquired the ability to speak code into existence.** Most existing software can’t leverage this. Pi leans into it.

![Meme. User says Add my custom feature. Computer. Adds feature. User says nice](/_astro/omg-meme.BWsZ7Ny8_Z23oxdQ.webp)

I suspect we’re going to start seeing more software following this self-extension pattern. However most of our existing examples of pluggable software are local software: AI agents, developer IDEs, mods for video games, Blender add-ons, CAD extensions. These tend to be professional tools with a high barrier to entry.

**The web is the most successful software distribution system in the world.** It shouldn’t be left behind.

My hypothesis is that **there is a new opportunity for Extensible Software on the web**. LLMs radically lower the cost of authoring extensions, and modern sandbox primitives lower the deployment cost and provide good security boundaries. We can build our app as a solid, accountable core, and allow users to safely extend it in many directions by having LLMs fill in the missing pieces. **We can give our users super powers.**

Disclosure: I currently work at Cloudflare, where high levels of exposure to [Kenton Varda](https://x.com/kentonvarda)’s writing have shaped much of my thinking here. Near the end, I’ll make the case that [Dynamic Workers](https://developers.cloudflare.com/dynamic-workers/) are a particularly good fit for this model, but I’ll cover several alternatives first.

## What would this look like?[#](#what-would-this-look-like)

A lot of web systems today rely on webhooks to allow the user to react to changes in the app. This ~kind of works, but it sets a really high bar for extension: building and operating a completely separate service plus dealing with whatever delivery issues arise.

I want to be able to hook into record updates and slide in my own logic. “When I attach this tag to a record, run my function”. “Do this action for me on a daily cron”.

Actually, I don’t want to have to think about that at all. I want to tell my read-it-later app:

*   Please send every article I fave longer than 4000 words to my `<ereader of choice>`
*   Look for new papers published on arxiv in `<my specialty>` each week, add your own summary of how it relates to my work at the top, and tag it with `<tag>`
*   The default algorithm completely garbles `<site I read frequently>`. Pull a few examples and make a custom parser for it.

And then a robot will extrude the silly bits of code, hook them into some extensions points, and make that happen. I should also be able to share what I’ve made with anyone else who might also want the same feature.[1](#user-content-fn-participation-inequality)

Here are some more areas where I’d love to see an LLM-native extension approach.

#### AI Agents[#](#ai-agents)

Okay, this is the obvious one. [pi](https://pi.dev), [deepseek](https://www.deepseek.com/harness/en/), and [opencode](https://x.com/thdxr/status/2087945880863191162), are all experimenting in this space.

Rather than adding every new idea to its core, Pi provides stable hooks for tools, commands, events, and UI, so it can turn a request into a small TypeScript extension and reload it in place. Those extensions can then be bundled into packages that can be shared, letting the ecosystem absorb the long tail of ideas without bloating the harness itself.

![Still from deepseek video. A cartoon whale and a snake game within an agent harness](/_astro/deepseek.BjIMxF1C_2i9nTS.webp)

Deepseek showed off the extensibility of its harness by demoing a user adding a whale friend and a snake game to the UI just by prompting

However the audience of these, at least as they exist now, is fairly small. You have to be comfortable running custom software on your local machine. In corporate environments **the organization** has to be comfortable with you running software that no one has ever, or will ever, look at. Unless you sandbox Pi yourself, Pi extensions run with the same permissions as Pi itself.

Software engineers will find a way, but accountants, doctors, lawyers, and thousands of other professions deserve better tools too. They need agents that can be safely and easily tailored to their domain and their own workflows.

If we’re going to get more people using agents, that doesn’t mean making them software developers. It means making the software fit their needs.

#### Internal Corporate Platform[#](#internal-corporate-platform)

All companies end up with tons of data. Employees need to view it, query it, investigate it, correlate it with this other data in this other system, find customers experiencing `<problem x>`, find customers about to churn, and a million more things.

A lot of companies are experimenting with allowing AI-enthusiast employees to vibe code their own tooling, maybe deploy it to a PaaS. This is directionally correct, but creates a bunch of downstream problems. Once you have hundreds or thousands of these apps, how do you maintain them? How do they get access to the data that they need? How do they get access to **only the data that they need**? How can we audit what this software is doing? If we’re relying on access tokens, what are their scopes? Who rotates them? How do we make sure that we’re not logging out customer information to a third-party? How do we make sure we’re not violating GDPR?

Or a million other compliance and security things that real businesses need to worry themselves about.

What if we gave them a place to deploy code where there are no auth tokens that can leak? Where data access is handled by an internal platform team that can ensure all of the compliance boxes are checked? Give them the space to build their own automations or custom views, but safely.[2](#user-content-fn-vibe-coding-platforms)

Spoiler: This is basically [Cloudflare OS](https://github.com/cloudflare/cloudflare-os).

#### Support Platform[#](#support-platform)

![Mockup of a support page with custom sections](/_astro/support.BJhVbx95_ZW0h5A.webp)

I’ve spent a lot of my career handling tricky support tickets. Inevitably I end up digging through dashboards, searching logs, pulling data from a million different places. Let me create extensions that surface data for the user that opened the ticket from my particular system into the support interface. Give me hooks so I can kick off agents to do the first round of investigation for me, before I even look at it. If there are common tasks that I need to do like “reset specific quota X” let me add a button to my view that can do that.

Then also let me share these with my team so we can all help each other.

#### Observability Platform[#](#observability-platform)

![Still from deepseek video. A cartoon whale and a snake game within an agent harness](/_astro/o11y.r3S9HiYp_Z1TuvAv.webp)

Every Observability Tool

A lot of Observability tooling has converged towards the same feature set: a way to search your logs with the little bar graph on top. A trace waterfall view for viewing individual traces. Customizable metrics dashboards. Maybe a service map. A few are experimenting [with new visualizations](https://embrace.io/), especially with [the rise of agents](https://www.honeycomb.io/blog/agent-timeline-flight-recorder-for-your-ai-agents).

The venerable trace waterfall diagram is very useful for systems that are shaped as request / response, where you mainly care about latency and success rate. A lot of us are finding ourselves with systems that are a bit more… stateful… or dynamic. Modern apps are running non-deterministic agents or durable workflow engines where a single action might take hours or days. Trace spans are a great source-of-truth to build upon, but let me experiment with my own visualizations (or install someone else’s).[3](#user-content-fn-frontend-sandboxing)

Beyond pretty things I can look at, let me inject my own logic:

*   arbitrary transforms for data on ingestion
*   have alarms kick off my own scripts: deterministic code or my own agent
*   give me options to run my own code at times of highest risk: deploys or feature flag rollouts
*   if I have a special `MyResourceID` in my logs, let me turn that into a link that goes straight to that resource on another platform

[![](/_astro/ben-vinegar.B0pkg1j0_ZyFHmO.webp)](https://x.com/bentlegen)

[Ben Vinegar](https://x.com/bentlegen)[@bentlegen](https://x.com/bentlegen)

[](https://x.com/bentlegen/status/2087948548155297894 "View on X")

> All software should probably look like this

[![](/_astro/dax.BdR049S3_Z1yx2QV.webp)](https://x.com/thdxr)

[dax](https://x.com/thdxr)[@thdxr](https://x.com/thdxr)

[](https://x.com/thdxr/status/2087945880863191162 "View quoted post on X")

> an architectural change we made in opencode2 is nearly everything is an internal plugin there's 68 of them that cover our built in agents, integrations, config loading, etc this means you can disable any behavior and we also properly dogfood our plugin apis

[![The opencode2 plugin directory, with folders for commands, providers, skills, system prompts, and web search](/_astro/opencode-internal-plugins.CZ6dmq6-_FrH6e.webp)](https://x.com/thdxr/status/2087945880863191162)

{% endraw %}
