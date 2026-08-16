---
layout: "story"
title: "Changing Devtools Is Cheap. Owning Them Isn't"
date: "2026-08-16"
permalink: "/2026/08/16/stories/changing-devtools-is-cheap-owning-them-isn-t-50a1ab/"
slug: "changing-devtools-is-cheap-owning-them-isn-t-50a1ab"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=f6b93b62-9498-11f1-b407-617d207c3f6a%26pt=campaign%26pv=4%26spa=1786356070%26t=1786359902%26s=74af2209c230a330bc89fc8a8548c43ac279017a75ea47abb8646f99d405931b/1/0100019feb58f02b-b9cd628c-a490-43d3-8cb6-db5f7e5b0340-000000/psYd67HjVJrQUzip8J0z9-_IyH9_mJ4GMRMtx76jGhI=452"
original_url: "https://lalitm.com/post/changing-devtools-is-cheap-owning-them-isnt/"
category: "Programming"
excerpt_separator: ""
---

{% raw %}
The future of software will be powered by high-quality, well-documented building blocks that users can build specialized artifacts on top of. Agents are good at composing high-quality components. Maintainers can provide these components alongside a focus application, and users can choose how to modify their experiences themselves. This allows software to be personalized while still being developed by maintainers that care.

---

# Changing Devtools Is Cheap. Owning Them Isn’t.

Aug 9, 2026 at 14:53· [#ai](/tags/ai)[#devtools](/tags/devtools)[#open-source](/tags/open-source)

In [Devtools must be open source](https://blog.exe.dev/devtools-must-be-open-source)[1](#fn:1) ([via](https://news.ycombinator.com/item?id=49156111)), David Crawshaw makes the case that, because of coding agents, we’re now in an era where devtools will be personalized by individual users. Specifically, agents’ ability to jump into new codebases and build whatever we want means we’ll be hacking on the source of the devtools we use day to day (even those without extension APIs) adding features and automatically rebasing our patches across releases.

The argument is seductive, especially to a reader who thinks of themselves as a maker or tinkerer: after all, the idea that you can hyper-tune everything you use sounds like a utopia; it means things can work _exactly_ how you want them to.

But I’d argue that Crawshaw underappreciates the ongoing cost when he writes

> “Both the upfront fixed costs and the ongoing costs of personalizing software have disappeared.”

While AI has made the upfront cost of _changing_ software a lot lower, properly personalizing software still requires your attention. And attention in the AI age is scarcer than ever.

Having maintained an open-source devtool designed to be modified and forked for nine years now[2](#fn:2), I can say that most users don’t _want_ to customize their devtools. They want someone else to make the tool reliable and coherent, so they can focus on the problems they opened it to solve. They reach for source modification only as a last resort, when a change is critical to their workflow and no other route works.[3](#fn:3)

This is not to say that this sort of personalization won’t become more common: I absolutely think it will. I just think it will take the form of strong core systems with well-defined boundaries and extension points.

### Personalization still needs a person[#](#personalization-still-needs-a-person)

As a thought experiment, imagine an open-source diff viewer with no extension API. You find most diffs noisy, so you ask an agent to add a “focus mode” that collapses imports, generated files, and other changes you consider mechanical. It works well and becomes part of your normal workflow.[4](#fn:4)

At first, life is good: everything works, and you’ve solved your problem. Then upstream releases a new version that refactors the code you changed. As Crawshaw suggests, you’re clever, so you’ve set up a bot to automatically rebase your changes onto each update. It resolves any merge conflicts and moves your code to the right place.

But now suppose a few months pass and upstream makes a more substantial change: it adds syntax-aware move detection. If a function moves between files, the viewer now shows it as a move instead of one large deletion and addition. The agent muddles through, rebases your focus-mode patch, and gets everything compiling without any merge conflicts.

But now what should focus mode do if the function has mostly moved but also contains a few meaningful edits? Does it hide the whole block as a mechanical move? Does it show only the edited lines without any surrounding context? Or does it show the whole function?

There isn’t an obviously correct answer; it depends on what _you_ want to see in the diff. So what, are you going to interrupt your day to make this decision?

There’s a central paradox here: if you’re okay with “let the agent decide”, then you’ve delegated your authority to the agent. For small choices, that may be perfectly adequate. But if you want the tool to work exactly how you want, you need to inspect and direct those choices. Do you really want to have opinions about the design of a devtool you use forever?

The key is _attention_. Any one personalized tool might be unlikely to fail on a given day, but if you do this to every devtool you use, you multiply the number of tools that can unexpectedly demand your attention.[5](#fn:5) Worse, those failures are unpredictable: a tool might work for months and then break at the exact moment you urgently need it. Most engineers want to use devtools to accomplish a task; they don’t want their attention diverted to designing and repairing them.

### Shared tools need a shared reality[#](#shared-tools-need-a-shared-reality)

All of the above applies to small teams as well. You can share the attention cost, but at the end of the day, the team still has to ask, “How much time do we want to spend on tools versus doing the actual work we’re meant to be doing?”

I also want to look beyond Crawshaw’s post and consider how this would work in larger companies: what happens when many teams independently personalize the same shared devtool?

I’ve seen this firsthand: another big tech company makes extensive use of Perfetto, and has hit this exact problem. Different teams in that company decided to fork Perfetto and add ad hoc changes for their local needs. Now one of the engineers there is fighting to consolidate them because of how painful it is when every team means something different by “Perfetto”.

Imagine the same pattern with a company-wide bug tracker. Do you want every team to use a version with subtly different meanings for status, priority, assignment, and resolution? What happens when a bug moves between teams? Different layouts and personal filters are harmless; the problem begins when personalization changes the shared semantics or workflow.

When a devtool mediates work between people, it also forms part of their common language. Teaching, auditing, reproducing investigations, and verifying that people are talking about the same thing all depend on a shared baseline.

### Upstream gets more malleable too[#](#upstream-gets-more-malleable-too)

We should also not compare pre-AI upstream development with post-AI forks. Maintainers can use the same agents to investigate reports, brainstorm ideas, and prototype new features. I can certainly attest to how useful AI has been for both implementing small feature requests from users and prototyping larger ones to determine feasibility.

In my opinion, upstream maintainers can, and should, spend the time saved on implementation making their tools more adaptable: implementing broadly useful features, adding configuration knobs where they make sense, and creating extension points for recurring needs. AI lowers the cost of doing all of this, including deciding where customization makes sense, adding more elaborate tests on creative uses of your tools and verifying backwards compatibility as these interfaces evolve.

Upstream has a natural advantage here: any work done there benefits _everyone_, while a change to your personal fork benefits only you. By relying on upstream, the attention required to build good software shifts from people who _don’t_ want to spend it to maintainers who have chosen to care.

### The building-block economy[#](#the-building-block-economy)

In my opinion, there’s an alternative view that is much more likely to come true, one described well in Mitchell Hashimoto’s article on the [building-block economy](https://mitchellh.com/writing/building-block-economy).

Concretely, it accepts the same premise: agents can write lots of code and build niche applications, tools, integrations, forks, and so on. But instead of assuming that forks will become the norm, Hashimoto argues that high-quality, well-documented building blocks will power this world.

I tend to agree: agents are very good at composing high-quality components. If maintainers provide those components alongside a focused application, makers can build specialized artifacts on top while accepting the costs. This model also creates an easy feedback loop for ideas to flow upstream because the product was designed to be extended.

I see signs that the world is already heading in this direction. For example, [`bb`](https://www.sawyerhood.com/blog/an-agentic-ide-that-builds-itself) is a very interesting agentic IDE that I’ve been playing around with recently. It has a very nice experience that lets users add substantial new product surfaces through self-modification. But the key is that those features are plugins built around a maintained core and extension system, not changes made by forking the project directly.

`bb` is also only a few weeks old at the time of writing, so we cannot draw any firm conclusions from it, but it’s an interesting sign of the future, IMO.

### Wrapping up[#](#wrapping-up)

I care deeply about both the world of devtools and open source, so this is something I feel very passionate about. Having been immersed in this world for almost a decade now, I think the future of well-built tools with thoughtful design and well-designed extension points is bright.

Sure, there will always be folks who want to fork and make ad hoc changes. These are the same people who already maintain custom builds of their window manager or terminal emulator, carrying a stack of patches to get everything exactly how they want it.[6](#fn:6) For them, the tinkering is part of the enjoyment and craft.

But I think most users just want to get their work done with devtools, and we owe it to them to give them a strong, dependable experience instead of asking them to take on the burden of maintaining the product themselves.

Enjoyed this post? Enter your email to get new posts, follow along via [RSS](/articles/index.xml), or [share this post on Hacker News](https://news.ycombinator.com/submitlink?u=https%3a%2f%2flalitm.com%2fpost%2fchanging-devtools-is-cheap-owning-them-isnt%2f&t=Changing%20Devtools%20Is%20Cheap.%20Owning%20Them%20Isn%e2%80%99t.).

 Subscribe

Or keep reading on a related topic:

[Security analysis is finally reaching software's long tail](/post/perfetto-security-bugs-ai/) This post was formerly titled “17 bugs in 10 weeks from AI security scanning”. It was changed upon feedback from trusted readers who suggested, while accurate, it did not give a good sense of what I’m actually arguing in the post. Over the last several weeks, I’ve been receiving more security bug reports for Perfetto’s trace processor than I ever have before, all of them found by AI. And I’m very happy about it! …

* * *

* * *

1.  While the title reflects the conclusion, IMO it’s not very reflective of _most_ of the post, which is actually about personalization at the source level. If you’ve read my other posts (e.g., [On Perfetto, Open Source, and Company Priorities](https://lalitm.com/perfetto-oss-company-prio/)), you’ll know I’m a _staunch_ believer in open source so I’m of course in full agreement with the title and conclusion. [↩︎](#fnref:1)
    
2.  I’m a co-founding engineer on [Perfetto](https://github.com/google/perfetto). [↩︎](#fnref:2)
    
3.  For example, the upstream project might reject a feature request because the change conflicts with its product direction, or the tool might not expose an extension point capable of supporting it. In those cases, modifying the source may be the only practical option. [↩︎](#fnref:3)
    
4.  Observant readers may note that this is not so dissimilar to Crawshaw’s own example with [Meat](https://meat.dev) :). [↩︎](#fnref:4)
    
5.  This is a very informal application of [Lusser’s law](https://en.wikipedia.org/wiki/Lusser%27s_law), which says that the reliability of a system composed of independent components in series is the product of the reliability of those components. [↩︎](#fnref:5)
    
6.  The [suckless](https://suckless.org/) ecosystem is an existing example of this approach. [`dwm`](https://dwm.suckless.org/) and [`st`](https://st.suckless.org/) are commonly customized by arbitrary patches to their sources. [↩︎](#fnref:6)

{% endraw %}
