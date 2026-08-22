---
layout: "story"
title: "Malleable software = solid bases + custom code"
date: "2026-08-21"
permalink: "/2026/08/21/stories/malleable-software-solid-bases-custom-code-730bc7/"
slug: "malleable-software-solid-bases-custom-code-730bc7"
source: "TLDR"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=979e8654-9bab-11f1-aa26-07656c2bb054%26pt=campaign%26pv=4%26spa=1787133654%26t=1787137519%26s=a63edfd53e804fb788c6ed7072f817ed2f35e7820e2f870fb333928b10886f0b/1/010001a019b270c4-78c7b3d9-5825-409e-898e-3a3d57c2c2df-000000/GD-gFyGjL6CtWphoA5YbGp6PtCeS82wzkev7oOK2E04=452"
original_url: "https://www.mdubakov.me/malleable-software-solid-bases-custom-code/?utm_source=tldrnewsletter"
category: "Programming"
excerpt_separator: ""
---

{% raw %}
- Malleability combines solid architectural bases with custom code flexibility
- Balance between reusable foundations and customization
- Enables sustainable long-term software maintainability

---

By [Michael Dubakov](/author/michael/) in [Posts](https://www.mdubakov.me/tag/posts/) — 18 Aug 2026

# Malleable software = solid bases + custom code

In 2019 I bet on the no-code revolution. That bet aged so-so. Here is the new one.

![Malleable software = 80% solid bases + 20% custom code](https://storage.ghost.io/c/c4/c6/c4c61cc9-7edd-4a33-857b-26f10fd22b0b/content/images/size/w1200/2026/08/malleable-software--1-.png)

I joined the productivity tools market in 2004 and have had the luxury of observing its dynamics for 22 years now. From time to time the market changes and I write a holistic "visionary" article. The last one was in 2019 when [I bet on the no-code revolution](https://fibery.com/blog/gems/no-code-revolution-why-now/?ref=mdubakov.me). Now it's time to write a new piece, because the market is experiencing tectonic shifts that will change its landscape enormously.

Everyone knows that AI lowered the barrier, so now anyone can build software. You can't vibe-code a full OS (yet), but you can easily vibe-code small apps to solve personal problems. Things get more complex when you add "collaboration" as a dimension. If you work alone it's relatively OK to break things and move forward until you're happy with the app, but if you work in a team it becomes harder to implement all the needed bells and whistles to cover collaborative use cases. You suddenly need data storage with relations, concurrent editing, notifications, changes history, permissions, etc.

It raises an interesting question: where is the _hot spot of malleable software_ in the AI age? Should we always start from scratch in Codex? Or should we have some **solid base** that can be tailored via **custom code**?

Imagine you have a small mushroom farm that employs 10 people (don't worry, we will grow champignons here (for now)) and are looking for software to run all operations. Most likely you are using Google Sheets, since the market is too small to have specialized software (ha! no market is [too](https://www.kinoko-app.com/?ref=mdubakov.me) [small](https://www.mycosense.ch/technology?ref=mdubakov.me)).

![](https://storage.ghost.io/c/c4/c6/c4c61cc9-7edd-4a33-857b-26f10fd22b0b/content/images/2026/08/image.png)

Kinoko. A new way to manage your mushroom farm. Very specialized tool.

You have several options. The irony is that… none of the options are ideal.

1.  **Build from scratch** ([Claude Code](https://claude.com/product/claude-code?ref=mdubakov.me), [Codex](https://openai.com/codex/?ref=mdubakov.me)) - _from 2024_.
    1.  Problem: When you prompt-code everything from scratch, you have to care about everything, including hosting, auth, basic permissions, database, etc. The first 80% may be easy, but the final 20% would be hard
    2.  Future hope: Here we can hope that eventually AI will be so cool and powerful that it will just do things right and fast
2.  **Vibe-code** ([Lovable](https://lovable.dev/?ref=mdubakov.me), [v0](https://v0.app/?ref=mdubakov.me)) - _from 2023_.
    1.  Problem: Somewhat better than #1, since you get a hosted app, a database, auth and deploy out of the box, and it _looks_ finished sooner. But when you outgrow what the generator does well, you will be stuck
    2.  Future hope: More powerful models make it better. Also these vendors will add more and more components, moving into "solid base + custom code" space
3.  **Low-code & app builders** ([Retool](https://retool.com/?ref=mdubakov.me), [Softr](https://softr.io/?ref=mdubakov.me)) - _from 2017_.
    1.  Problem: This category has been selling "solid base + custom code" last ten years: auth, permissions, hosting and audit logs out of the box. But it's an _app_ base, not a _work_ base. Your data is assumed to live somewhere else, and even when these vendors add their own database, it stores app data: no collaboration, no comments, no changes history
    2.  Future hope: Move deeper into "solid base + custom code". The open question is whether an app base can grow into a work base fast enough
4.  **Assemble it in a malleable tool** ([Notion](https://notion.com/?ref=mdubakov.me), [Fibery](https://fibery.com/?ref=mdubakov.me)) - _from 2013_.
    1.  Problem: This might look tempting, since you will get many things ready fast. The problem is how to tailor these tools to your process. They are quite flexible, but might not support your specific needs and _do not have enough extension points_
    2.  Future hope: Add more extension points and let users vibe-code the missing ~20% of use cases, so these tools will move into "solid base + custom code" territory too
5.  **Buy some specialized tool** - from 1999.
    1.  Problem: This is still a very good option sometimes, since a specialized tool was built with your domain in mind and it might look very relevant. Go for it if you don't need customization
    2.  Future hope: Moving into flexible tools territory will be almost impossible for these vendors (and it is not needed at all). The moment it gets generically flexible, it stops being specialized 🙂

## 80% solid bases + 20% custom code

What is happening in the productivity tools market? It seems the ideal solution is to have a solid base covering 80% (databases, permissions, history, collaboration, notifications, etc.) and let users mix these things and extend via custom code.

As a result, many vendors are heading in this direction, closing the gaps in missing areas. And while vibe-code and low-code tools are adding more solid bases, malleable tools should add more extension points.

![](https://storage.ghost.io/c/c4/c6/c4c61cc9-7edd-4a33-857b-26f10fd22b0b/content/images/2026/08/image-1.png)

80% solid bases + 20% custom code is an ideal solution for productivity tools

## Solid bases

In the past the only solid bases you had were a compiler and an OS — everything else was your problem. Beautiful time of true hackers!

Now we have the luxury of higher abstractions. The most interesting question is: where to stop? For example, a specialized tool without any customization is as solid as it gets, but the lack of customization is exactly what makes it unusable in many cases. With Codex your solid base is almost non-existent, but you have enormous expression power and can build almost whatever you want (expression power is how far you can bend the tool to do exactly what you need).

I think both extremes are suboptimal for the productivity tools market, and we should find a sweet spot somewhere in between.

The solid base should cover what's identical for every team, and custom code should cover what makes yours different.

Current solid bases differ in kind:

*   Vibe-coding platforms give you a **tech base** (servers, raw database, auth)
*   Low-code platforms give you an **app base** (UI components, connectors, access control)
*   Malleable tools give you a **work base** (the data itself lives there, together with everything a team needs around the data)

Here is a more detailed table of all the options. Note that ★ defines a category, this is the reason why it exists.

![](https://storage.ghost.io/c/c4/c6/c4c61cc9-7edd-4a33-857b-26f10fd22b0b/content/images/2026/08/image-2.png)

## Custom code

If the base covers what's identical for every team, custom code covers the rest: your unique interfaces (a harvest screen for the growing room tablet), your business logic (mushroom batch quality rules), your connections (the wholesale client's API, the humidity sensors). This 20% is small in volume, but it is _your_ _company_, so no vendor will ever model it exactly right.

Code made an unexpected (to me) comeback with LLMs at the end of 2025, so now all no- and low-code tools can rely on code more and more, ironically!

But custom code works well only when the following conditions are met:

*   **It inherits the base.** Permissions, history and data integrity apply to custom code automatically. If every generated app needs its own auth, storage and audit trail, you are doomed
*   **It is bounded.** Custom code can break itself, but it cannot corrupt the base (and in case of corruption, rollback should be easy). A bad app should be an inconvenience, not a data-loss incident

AI coding has already brought us two new categories of tools (Codex-like and Lovable-like), but it also empowers low- and no-code tools to solve customizability problems faster, easier, and deeper. In the past custom code extensions were hard (think about the Jira plugin ecosystem), but now they can be easy!

## Where is the productivity tools market heading?

Programmers always had full expression power, but even programmers do not create a lot of personal tools. Why? Well, because it's quite time-consuming. Now the tides are shifting and you can really vibe-code useful personal tools in hours.

In the productivity market you always have this tradeoff: spend time and build a tool for your company or purchase something ready to use. Specialized tools were the default choice for many, but now _AI shrinks configuration time_ (everybody can prompt). It means malleable software becomes approachable for not-very-technically-savvy users and can beat specialized tools more often.

Here is the chart that shows the current positions of all the niches and how they will move to the green area where it is possible to **unite high expression power and short build time**.

![](https://storage.ghost.io/c/c4/c6/c4c61cc9-7edd-4a33-857b-26f10fd22b0b/content/images/2026/08/image-3.png)

High expression power and short build time is possible now

Everyone wants the same territory, but each road is different:

*   Vibe-code tools must build a base. Now it takes a lot of time to rebuild these solid bases and make the solution viable
*   Malleable tools must add expression power. Now malleable tools are not flexible enough to give users the expression power they need
*   Low-code tools need both. Now they are in the middle and should move in both directions
*   ? And maybe AI from scratch will make the whole map obsolete (but not yet!).

Which vendor/segment reaches this territory first, and is there space for many vendors? I bet there is! Solid bases somewhat differ in kind: some are built for IT departments assembling internal tools, some for teams with heavy collaboration flows, some for tinkerers solving their own problems.

## If you are choosing a tool today…

A year ago you had 3 options, now you have 5!

Working alone? You may try to vibe-code it and have fun. A specialized tool covers 90% of your process? Buy it. But for a team with an evolving process, like our mushrooms farm, I would start in a malleable tool today. The base is already there, with batches, orders, history, permissions. And the missing 20% gets more vibe-codeable every month. For example, with [Fibery Custom Apps](https://fibery.com/blog/product-updates/why-custom-apps/?ref=mdubakov.me) you can have a tailored UI for many use cases very fast.

![](https://storage.ghost.io/c/c4/c6/c4c61cc9-7edd-4a33-857b-26f10fd22b0b/content/images/2026/08/image-4.png)

Mushroom farm management space was built in Fibery in about one hour, including some custom apps

One principle is quite important: **select your base, not the interfaces.** Data, history and permissions accumulate and are relatively hard to re-pick in two years. The UI is becoming the cheap and replaceable part.

## Wrap Up

In 2019 I bet on no-code tools, in 2025 code came back in a very surprising way. This comeback is inverting our market. For many years vendors sold interfaces, while the base (storage, permissions, history) was boring plumbing underneath. Now interfaces are generated in minutes, while a base construction still takes years.

So here are my new bets:

*   Solid bases + custom code wins the productivity market
*   Malleable tools have great chances to get there first, because extension points take quarters to add, while a solid base takes years

See ya in 2030. We'll check whether that mushroom farm finally got rid of its spreadsheets 🍄‍🟫.

P.S. This essay looks at malleable software from the productivity market side. For the research side, see Ink & Switch's [Malleable Software](https://www.inkandswitch.com/essay/malleable-software/?ref=mdubakov.me) manifesto and Geoffrey Litt's [Malleable software in the age of LLMs](https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming.html?ref=mdubakov.me).

[Previous issue

#### What is success?

](/what-is-success/)

{% endraw %}
