---
layout: "story"
title: "Data Lessons From Inside Meta"
date: "2026-08-09"
permalink: "/2026/08/09/stories/data-lessons-from-inside-meta-579d00/"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://softwareleadweekly.us6.list-manage.com/unsubscribe?u=1a258e0fefbb23214c59c5a8d&amp;id=efe3d3cd5b&amp;t=b&amp;e=86169b0ba2&amp;c=b23acd1ae1"
original_url: "https://roundup.getdbt.com/p/data-lessons-from-inside-meta-shridhar"
category: "Data"
excerpt_separator: ""
---

{% raw %}
Interview with insights about working at Meta. Key takeaway on data quality: early schema enforcement and strong typing upstream made column-level lineage and privacy work possible. Teams are growing larger as middle layers are removed and managers become individual contributors—raising questions about scaling management without weekly 1:1s.

---

[🎧 🆕 The Analytics Engineering Podcast](https://roundup.getdbt.com/s/the-analytics-engineering-podcast/?utm_source=substack&utm_medium=menu)

# Data lessons from inside Meta (Shridhar Iyer)

### Shridhar Iyer spent 13 years inside Meta's data organization. He joins Tristan on what big tech takes for granted, why you never delete a column at scale, and what it takes to become AI-native.

[

![Dan Poppy's avatar](https://substackcdn.com/image/fetch/$s_!CXPV!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F859a156c-266c-48ef-864c-6f0f924f1768_1469x1318.jpeg)



](https://substack.com/@danpoppy210523)

[Dan Poppy](https://substack.com/@danpoppy210523)

Jul 30, 2026

28

1

1

Share

Shridhar Iyer (he goes by Sri) spent more than 13 years inside Meta’s data organization, most recently as Senior Tech Lead and Director for AI and the data stack. As of this recording he had just stepped back to take a career break, so Tristan figured the best use of that time off was to relive the past decade and pull out some hard-won lessons for the rest of us.

The conversation takes an unexpected turn early. Tristan spotted a line in Sri’s break announcement on LinkedIn: he plans to take Indic and analytic philosophy seriously, possibly studying it formally. So they start with the hard problem of consciousness, why a Hindu metaphysical tradition has been debating it for thousands of years, and why, in the age of AI, all of this has suddenly become very practical. We are building systems we do not fully understand, and the question of what it would even mean for one of them to be conscious is no longer purely academic.

From there it gets concrete. Sri tells the story of how truncating a single column called Extra saved Meta a few million dollars, and why, despite that, you almost never actually delete a column at Meta scale. He traces how Meta’s data stack evolved from Hadoop and Hive into something schematized, unified, and semantically labeled, why the data team went from centralized to embedded inside product, and what companies inside big tech take for granted today that will leak out to the broader ecosystem over the next decade. They close on AI: the two steps to becoming AI-native, the three archetypes Sri sees emerging, and how removing the middle management layer is changing the way people get managed.

_Please reach out at podcast@dbtlabs.com for questions, comments, and guest suggestions._

* * *

**The agenda for dbt Summit 2026 is live.** Dozens of sessions across analytics engineering, AI-ready data, agentic workflows, and enterprise scale, September 15-18 at The Cosmopolitan in Las Vegas. dbt Summit is the world's largest gathering of dbt users. Level up and start building your schedule: [Explore the sessions](https://www.getdbt.com/dbt-summit/sessions/?utm_medium=social&utm_source=substack&utm_campaign=q2-2027_dbt-summit-2026_aw&utm_content=dbt-summit____&utm_term=all_all__).

* * *

**Listen now:** [Spotify](https://open.spotify.com/show/4BKMMeVXk4jJnAQSqGSJvE) · [Apple Podcasts](https://podcasts.apple.com/us/podcast/the-analytics-engineering-podcast/id1574755368) · [YouTube](https://www.youtube.com/playlist?list=PL0QYlrC86xQm83Q9deiy4euEnbw8ceu3I) · [Amazon Music](https://music.amazon.com/podcasts/333fe811-1b14-499c-b609-9bfb8f06d1ae/the-analytics-engineering-podcast) · [RSS](https://analyticsengineeringroundup.libsyn.com/rss)

* * *

## Three ideas from the episode

1\. **At Meta scale, deleting a column is a company-wide event, so you almost never do it.** Sri once truncated a debug column called Extra across a year of a core event-logging table and saved a few million dollars, which earned him a “fix of the week” spot at Mark Zuckerberg’s weekly company Q&A. But he also owned the Facebook user table, which roughly 40 to 50 percent of Meta’s warehouse depended on, held to something like 45 nines of quality. At that blast radius you do not delete or truncate. You create a new version, migrate people over with tooling and program management, and simply stop populating the old column.

2\. **Meta’s real advantage was building abstractions in layers: schematize, unify, then add meaning.** Meta strongly typed its schemas both online and offline, enforcing structure all the way upstream to the log statement, which is what made column-level lineage and privacy work possible. On top of that it unified language and compilation across Spark and Presto, unified the catalog and taxonomy so that every table, dashboard, and sub-column is a strongly typed asset with a URI in a central registry, and layered policy management on top for compliance. Only then did the semantic and knowledge layers for AI become feasible. That layering is what Sri thinks other companies are behind on.

3\. **Becoming AI-native takes two steps, and most teams skip the first.** First, get AI-ready: your people, processes, and systems. In practice that means taking a single workflow with its context, learning to run it well, then extracting reusable primitives and figuring out how to use agents at the lowest cost with the right guardrails. Teams that skip straight to multi-agent orchestration burn tokens and get poor outcomes. Second, reorganize around archetypes. Sri sees three that will stick: the builder who automates workflows, the forward-deployment engineer who makes environments AI-ready, and the domain specialist embedded in a product.

## Key takeaways

_Lightly edited for clarity._

### You wrote that you plan to take analytic philosophy seriously. Where does that come from?

**Shridhar Iyer:** I always had a philosophical leaning, even growing up, so it has always been in the background. It is not surprising for Hindus in general to be fascinated by the hard problem of consciousness, which the philosopher David Chalmers coined in the 1990s. Is consciousness emergent, or is it fundamental to the ontology of the universe? The Hindu philosophical claim is that consciousness is fundamental. It is a very long tradition, going back thousands of years, and it is rigorous and reasoning-based. Hindus and Buddhists were debating who we are and what consciousness is long before modern Western philosophers, with the language and sophistication to dissect the problem.

### Are you drawn back into this because of your professional work, or is it separate?

**Shridhar Iyer:** Two reasons, and AI is definitely one. Scientists have been at the hard problem for four or five decades and cannot nail a single conscious experience, which has caused a rethinking of the materialist view that consciousness simply emerges. That has given a resurgence to alternatives like panpsychism, where consciousness is as fundamental as matter, and idealism, which is closer to the non-dualistic philosophy of Hinduism, where mind is at the bottom of the universe and everything we see emerges from it. The other reason is that most tech leaders working on AI are materialists, and for them AI is a backdoor: if you can show that enough complexity crosses a threshold where consciousness emerges, you can argue it is all just a particular arrangement of matter. But it is legitimately hard to know. We do not have a good hypothesis for how we would provably know whether a system is having conscious experiences.

### How did a J2EE developer end up as one of the first data engineers at Meta?

**Shridhar Iyer:** I came to the US early in the internet boom, and a lot of the work then was digitizing legacy systems, which is funny because that is what we are doing again now with AI enablement. I was a Java consultant, and I took a full-time job at JB Hunt partly for green card reasons and because I was about to get married. I did about a decade there and got an MBA the company paid for, which opened my eyes to business and product rather than just how to build things. Then I joined a small retail analytics startup that took point-of-sale data from Walmart and built reports for companies like Kraft Foods, PepsiCo, and Coca-Cola. That was the very beginning of data engineering. Then someone who was one of the early data engineers at Meta, and is now at OpenAI, pinged me out of nowhere and asked if I wanted to interview. I did not think I had a chance, but I gave it a shot and joined in 2013 as one of the first data engineers there.

### What did Meta’s data stack look like when you arrived?

**Shridhar Iyer:** It was all Hadoop and Hive, so HiveQL, which predates ANSI SQL becoming popular for big data through Presto around 2014 and 2015. Meta has always run its own data hardware, and even its open source is a very different branch, so Presto there is not the open source Presto. For orchestration there was a config-driven layer and then DataSwarm, the predecessor to Airflow. Max, who went on to build Airflow, was my teammate at Meta, and I am sure DataSwarm influenced it. Reporting ran on Oracle Exadata, and dashboards were MicroStrategy or a simple drag-and-drop browser tool. The problems were all about how you log, instrument telemetry, build pipelines, and report.

### If you split your 13 years into eras, what were the big changes?

**Shridhar Iyer:** One was going from centralized to decentralized. Data engineering became part of the product, one of the four pillars alongside software engineering, product management, and design, with analytics and data science. That happened around 2015 and 2016. It makes sense: when you are building a new function, you centralize early so you can share knowledge and build the craft, and once that craft is built into your people and processes you decentralize so you can influence the business where it happens. The other era was scale. I cannot even fathom it now. We used to have thousands of tables, and now it is tens of millions of tables, hundreds of millions of columns and sub-columns, with very complex types in the schema.

### What is a basic thing that gets much harder at that scale?

**Shridhar Iyer:** Let me tell a funny story first. In 2014 we had a core event-logging table that fed a lot of growth analytics, and it had a column called Extra full of non-essential debug information, just in case you had to replay something. The data infra team had a script to truncate a column to save on storage. I was vacationing in India when they were pushing to finish it to save money, so I truncated that column across a year’s worth of data and saved a few million dollars.

Mark does a weekly company Q&A that starts with a “fix of the week,” and they nominated me for it. So I got up in front of the company and explained that I truncated one column called Extra and saved millions. The executives in the front row fell off their chairs, because logging into a column called Extra that no one fully understands is exactly the kind of thing Meta would do.

### So how do you actually delete a column or table at Meta scale?

**Shridhar Iyer:** I owned one of the most core data sets, the Facebook user table. Pretty much 40 to 50 percent of Meta’s warehouse depended on it, with dependencies orders of magnitude deep in the graph. The bar for quality was very high, up to something like 45 nines, because you could not restate half the warehouse.

Even so, we reached a point where recovering the whole warehouse was infeasible, so for a table like that we would tell people the impact and let them decide whether to recover. If something is not that serious, you generally do not delete tables or columns at all. You create a new version and gracefully migrate people over with a lot of tooling, and once the project is done you deprecate the old column. Even then you do not truncate it, you just stop populating it. There is a lot of tooling around lineage, cutting migration tasks to teams, and program managing it.

### What do companies inside big tech know today that will leak out to the rest of us?

**Shridhar Iyer:** You might not even know, because it is the water you swim in. You take it for granted, and you learn to just focus on the swimming, so abstracting the principles out of it is genuinely hard on the fly. But I would point to a few things Meta did earlier than others, and at scale. One was to schematize, both online and offline, strongly typing schemas and enforcing them all the way upstream to the log statement. That was a big undertaking, and it is what made column-level lineage possible, which was fundamental to the privacy work.

On top of that we unified: one compiler and language across Spark and Presto so you can trace lineage and propagate labels, a unified catalog and taxonomy where every table, dashboard, and sub-column is a strongly typed asset with a URI in a central registry, and a unified policy system on top for compliance. Then on top of that we started building semantic and knowledge layers for AI. Meta built these abstractions out at scale and layered them on top of each other, and I think that is paying off now.

### How do you onboard someone into an environment like that?

**Shridhar Iyer:** The data infra is so good that within a week you can be productive and making commits. The complexity is not in building things, because building and visualization are easy. It is in the new principles a data engineer at Meta has to account for, like how to build privacy-aware data and how to deal with grain management at that scale. The hard problems are product and analytics problems for the domain, not engineering problems. So the engineer onboards quickly, and the real work is solving the analytics problems.

### Did that change the kind of person you hired?

**Shridhar Iyer:** Yes. Recruiting shifted from more technical to more product and business focused. In the early days we did software engineering and design interviews because we wanted builder types. Later we wanted more analytics engineer types, which I think you all pioneered in the industry, so we looked for data modeling, good SQL, and a bit of Python rather than heavy coding. For the most senior engineers, interviews became mostly deep design questions.

### What should a data team’s role be in helping a company become AI-native?

**Shridhar Iyer:** There are two necessary steps. First is becoming AI-ready, and that has to happen across people, processes, and systems. AI readiness really comes down to taking one workflow with its context, learning to do it well, and then extracting the primitives out of that workflow along with how to use agents at the least cost with the right guardrails. People tend to skip this, and when you skip it you burn tokens, you add cost, and you do not get good outcomes. Only once you nail that can you automate it through multi-agent orchestration.

The second step is organizing the company into archetypes. I see three: a builder who uses AI to automate workflows, a forward-deployment engineer who goes into different environments and makes them AI-ready, and a domain specialist who builds AI solutions inside a particular product or business area.

### What is your view on companies reorganizing around AI, with fewer management layers?

**Shridhar Iyer:** It is a given that you have to get more done with fewer people, or the ROI is not there, and that follows from making your systems AI-ready. Different orgs move at different speeds. Meta is founder-led, so it will make a quick, disruptive switch at very large scale. Some companies, like Airbnb, are more cautious and want to watch the industry first. I think this year and next are mostly experimentation, because a lot has to settle: AI enablement, people up-leveling their skills, and new roles emerging or merging. The three roles I keep coming back to are the builder, the AI enabler, and the domain specialist embedded in the product.

### How does managing people change in this world?

**Shridhar Iyer:** Teams are becoming larger because the middle layer is being removed, and a lot of managers have been asked to become individual contributors. That changes the dynamic, because you cannot have weekly one-on-ones with everyone on a large team. So the traditional manager-employee relationship is changing.

At Meta, central teams are being built within the product or across the function and then organized into large “super pods” of 20 or 30 people, with smaller sub-pods, all focused around specific problems. The team I helped build just before I left was building the knowledge and context layer for agents. The consolidation is data scientists, data engineers, and analytics engineers coming together to solve domain problems, with the goal of making systems AI-ready so that agents can do the work autonomously, with guardrails you trust.

## Chapters

_Timestamps are approximate._

00:00 — Cold open: the column called Extra  
01:23 — Welcome: 13 years at Meta, and a career break  
01:58 — The LinkedIn line that started it: taking philosophy seriously  
02:40 — The hard problem of consciousness, and Hindu metaphysics  
04:23 — Not the kid debating consciousness on the schoolyard  
05:01 — How metaphysics is woven into a Hindu way of life  
07:16 — From consciousness to data and AI  
08:02 — Two reasons AI pulled him back to philosophy  
10:44 — Could we even know if a model is conscious?  
12:32 — The pipes-and-water and kidney thought experiments  
13:23 — Maybe consciousness is simpler than we think: the Venus flytrap study  
14:18 — Early career: JB Hunt and a Java consulting life  
17:38 — A decade at JB Hunt, then an MBA  
18:18 — A retail analytics startup and the earliest days of data engineering  
20:34 — The ping that led to Meta  
20:54 — Joining Meta in 2013 as one of the first data engineers  
21:28 — What the data stack looked like: Hadoop, Hive, DataSwarm  
23:26 — Oracle Exadata, MicroStrategy, and the early problems  
24:33 — Splitting 13 years into eras: centralized to embedded in product  
25:46 — Why you centralize early, then decentralize  
27:14 — The scale: tens of millions of tables  
28:58 — What gets harder at five orders of magnitude  
29:17 — The column called Extra, and the “fix of the week”  
31:29 — On a 12-person team you post to Slack; at Meta scale?  
32:28 — Owning the Facebook user table and 45 nines of quality  
34:10 — Why you version and migrate instead of deleting  
35:25 — What big tech knows that will leak out to the rest of us  
37:13 — Schematize, online and offline  
39:47 — Unify: one compiler, one catalog, everything as an asset  
41:09 — Semantic and knowledge layers for AI  
42:17 — Onboarding at Meta in a week  
43:11 — Why the hard problems are analytics problems  
44:29 — How hiring shifted from builders to analytics engineers  
45:57 — The data team’s role in becoming AI-native  
46:34 — Two steps: AI readiness and archetypes  
49:03 — Three archetypes: builder, forward-deployment engineer, domain specialist  
50:03 — Org structures and fewer management layers  
51:51 — Meta’s quick switch vs. Airbnb’s caution  
52:46 — A year of experimentation  
54:13 — Managing 40 direct reports and the end of the middle layer  
56:09 — Super pods, and building a knowledge layer for agents  
57:02 — The goal: agents doing the work, with guardrails  
57:42 — Wrap-up

* * *

_This newsletter is sponsored by dbt Labs. Discover why more than 80,000 data teams use dbt to accelerate their data development._

[Demo on-demand](https://www.getdbt.com/resources/webinars/dbt-cloud-demos-with-experts?utm_medium=email&utm_source=hs-email&utm_campaign=__&utm_content=biweekly-demos____&utm_term=___)

Thanks for reading The Analytics Engineering Roundup. Subscribe for free to receive new posts.

Subscribe

28

1

1

Share

{% endraw %}
