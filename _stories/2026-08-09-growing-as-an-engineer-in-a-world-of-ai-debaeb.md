---
layout: "story"
title: "Growing as an engineer in a world of AI"
date: "2026-08-09"
permalink: "/2026/08/09/stories/growing-as-an-engineer-in-a-world-of-ai-debaeb/"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22963/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Career"
excerpt_separator: ""
---

{% raw %}
Norberto argues that leaning on AI to generate code without understanding it stunts your growth as an engineer. The learning that used to happen through struggle, repetition, and debugging is exactly what AI removes. To grow, he suggests treating AI as a thinking partner rather than an answer machine: ask why, type code out instead of pasting it, read the foundational books, and stay close to the hard conversations AI cannot join.

---

# Growing as an engineer in a world of AI

Published Jun 13, 2026 • 24 min read

Table of Contents

*   [Context](#_context)
    *   [My first years](#_my_first_years)
    *   [What about now?](#_what_about_now)
    *   [Learning of bygone eras](#_learning_of_bygone_eras)
*   [AI comes into the picture](#_ai_comes_into_the_picture)
*   [Ok, and so what?](#_ok_and_so_what)
*   [Ok, I’m a graduate, how do I actually grow in this environment?](#_ok_im_a_graduate_how_do_i_actually_grow_in_this_environment)
    *   [Use AI as a learning accelerator, not as a cheat](#_use_ai_as_a_learning_accelerator_not_as_a_cheat)
    *   [Keep your hands on the keyboard](#_keep_your_hands_on_the_keyboard)
    *   [Read the books that built the discipline](#_read_the_books_that_built_the_discipline)
    *   [Learn Unix properly](#_learn_unix_properly)
    *   [Write documentation as a learning tool](#_write_documentation_as_a_learning_tool)
    *   [Call out explicitly what you wrote vs what AI wrote](#_call_out_explicitly_what_you_wrote_vs_what_ai_wrote)
    *   [Have conversations that matter](#_have_conversations_that_matter)
    *   [Lean into what AI can’t do](#_lean_into_what_ai_cant_do)
*   [This isn’t just on graduates](#_this_isnt_just_on_graduates)
*   [How does this play out in future?](#_how_does_this_play_out_in_future)
*   [Appendix A: What this means for hiring and teams](#_what_this_means_for_hiring_and_teams)

## Context

There’s a lot of buzz that AI means companies only want seniors now. That there’s no room left for early career engineers. I don’t think that’s true. The thing actually worth worrying about isn’t whether you’ll get hired, it’s whether you keep learning in a world of AI, now that it removes the friction where that learning used to happen. And that, thankfully, is a choice you get to make.

Early career engineers will have to adapt but that has always been the case. It’s normal. Is this a bigger jump? Perhaps. Should they, and their more seasoned colleagues, be paying close attention? Yes.

A [couple of posts ago](https://nlopes.dev/writing/ai-isnt-optional-anymore), I said I wanted to write about how graduate engineers grow when AI writes most of the code. I’m writing this post as someone who has hired and developed graduate engineers, as someone who learned to code, maintain servers, networks, and storage systems, the hard/old way, and currently as a heavy AI user.

I don’t have all the answers here but I want to at least try to offer my perspective.

### My first years

My first few years were rough. Stack Overflow wasn’t even a thing. There were no mentors in the weeds with me, no daily standup, no weekly 1:1, no pile of books beyond the ones I bought with my own money (I love books, so that part was a treat). Learning meant `apropos`, `man`, and reading whatever codebases I could find online. I still remember (fondly, I think?) the beauty and the horror of qmail’s. It was slow going. People might say it gave me grit and perseverance. Nah, I had plenty of that already. Mostly I just feel like I lost a lot of time for not much in return.

### What about now?

I’ve spent the past 10 years hiring, onboarding, mentoring, coaching, annoying, sometimes pissing off, energising, and celebrating a bunch of engineers. The ones who did really well early and grew like crazy didn’t get there because they had Stack Overflow handy, or could spin up a cloud server faster than I could set up Visual Studio with Emacs keybindings. They had a few traits in common: exceptional communication, perseverance in spades, lots of curiosity, and extreme ownership. And, last but not least, they could learn **fast**. Really **fast**.

### Learning of bygone eras

The model of becoming an engineer that I was brought up with, was built on friction. You’d read documentation that didn’t quite make sense, try something, watch it break, read the error message, try again. You’d spend an afternoon understanding why your database query was slow before someone on your team would laugh and tell you why. And later on, I saw many who got it by reading someone on Stack Overflow that explained the missing index. It was annoying you had to put up with so much failure and reading, but it was also what made you learn.

I don’t think all that friction was really necessary, but the discovery, and also the thrill of the hunt for the answer, was what made it all worth it (once something clicked). I read printed `man` pages, printed manuals of HP-UX, printed code for hundreds of \*nix tools. I read some of those multiple times.

I’m no expert in learning but I think curiosity, mixed with repetition, is where a surprising amount of skill formation actually happens.

It seems that all of that kinda has a name: [_desirable difficulties_](https://en.wikipedia.org/wiki/Desirable_difficulty). I’m sure I’m murdering the research but in effect these are conditions that make learning feel slower and harder in the moment but stick far better over time. Spacing things out. Mixing problems up. And if you add the [_generation effect_](https://en.wikipedia.org/wiki/Generation_effect) (you remember something dramatically better when you produce the answer yourself than when you read a perfectly good one handed to you) you end up with a nice recipe for learning.

If you read up on the above concepts, I think you’ll end up with the same realisation I had: a lot of the time, the struggle _is_ the actual learning. And the struggle, funnily enough, is exactly the part AI is so very good at taking away from you.

## AI comes into the picture

AI eliminates most of the friction or struggle I mentioned above. Ask Claude to fix a slow query and you get the answer in seconds, with an explanation if you want one.

This is where early career engineers might go wrong. They ask for the solution and they think the solution was the outcome they needed.

If you are a graduate and you stop there…​ oof, I have bad news for you. You’ll end up in the worst possible failure mode: you’ll have code that works (I’m assuming best case here) but that you can’t explain. If you get asked why your AI-generated code chose one approach over another and all you have to offer is silence, you’ll be in trouble.

Take the following with a pinch of salt because it’s a small study.\[[1](#_footnotedef_1 "View footnote.")\] But…​ A 2025 MIT Media Lab [study](https://arxiv.org/abs/2506.08872) wired people up to EEGs while they wrote essays. Some with an LLM, some with a search engine, some with nothing but their own grey matter. The LLM group showed the weakest brain connectivity of the three, and folks often couldn’t quote back anything from the essays they had supposedly just written.

Now swap "essay" for "pull request" and tell me it doesn’t describe a future code review (or maybe one you’ve been in already) you’ll go through: code that works, but the "author" of the PR can’t quite explain the code. That’s a fairly big problem, maybe even cognitive debt (to use terms the paper above used) and like all debt it comes due at the worst possible time. Usually at 3am, in production.\[[2](#_footnotedef_2 "View footnote.")\]

Stack Overflow had its problems, but reading those "expert" discussions taught you some _reasoning_, not just present you with a solution (ok, yes, there were times when a Stack Overflow answer also put you in the wrong path, but let’s ignore that bit for a moment for me to make my point).

## Ok, and so what?

For people getting into the industry, don’t think about AI as a blunt instrument to produce the result you want. Think about AI as a multiplier effect. If you don’t use it well, and to foster your learning and growth, AI will stunt your future career ****as a practitioner of the craft of software development****.

If you just ask for a solution and once you get it you move on to throwing the next problem to AI, you won’t realise it then, but your growth becomes a flat line.

Imagine this: you want to build a program in a new programming language. Regardless if that’s for a side project or for your new job. It used to be that you’d read the language docs, take some examples, experiment with them, maybe do a couple tutorials. Doesn’t seem like much but it gave you time to figure out some of the language quirks and idioms. Just by wrestling with the examples a bit.

You would build a decent mental model just by handling those things. And, assuming you were curious too, it gave you a chance to try a few different approaches just because you felt like it.

Don’t get me wrong, a lot of it was also wasteful, just busywork. Writing your 50th [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete#RESTful_APIs:~:text=RESTful%20APIs%5B,%5B5%5D) endpoint by hand isn’t some sacred rite. The question for me ends up being: which parts of the friction of learning matter for growth?

With that, here’s what I think might be getting lost with the use of AI for early career engineers:

*   Repetition
    
    _There’s something about writing the same kind of code over and over that builds intuition. Not the typing itself, but the thinking happening before and while you type the code. You start to see when something feels wrong before you even know how to explain it._
    
*   Debugging intuition
    
    _This one is particularly concerning because debugging is one of the hardest skills to teach and one of the most valuable in production systems. I believe that if people don’t pay close attention and leverage AI to learn how to debug effectively we’ll have a decline of overall reliability. At least in the short term._
    
*   Systems design
    
    _Knowing when a pattern is wrong for the context, not just that it exists. AI will happily implement a microservices architecture for your two-person team if you ask it to._
    
*   Data model thinking
    
    _Understanding why a schema looks the way it does, not just being able to generate one. The trade-offs between normalisation and query performance. The decision to denormalise for a specific use case. That reasoning comes from having made the wrong choice and having felt the consequences. This isn’t just about schemas though or normalisation, it’s about how to lay out a design for an application._
    

On the flip side, it also provides/keeps some opportunities:

*   Code review might become the "critical thinking" bit
    
    _If you take review seriously, you learn by reading and critiquing AI output. This can be quite effective I think._
    
*   System design conversations go deeper
    
    _Nothing like a good whiteboarding session with your peers to feel like your brain had a run for its money._
    
*   You are the conductor for driving outcomes
    
    _AI doesn’t attend all the meetings, go out for drinks, socialise (not yet at least). AI doesn’t know your team is about to halve in size because of a new project, or that the VP of Product just changed the roadmap. Those all become constraints, which then require thinking about trade-offs._
    

In any case, part of being an engineer is working with others.

## Ok, I’m a graduate, how do I actually grow in this environment?

This is the part I care about most. I’m hopeful a lot of the below is useful for early career engineers.\[[3](#_footnotedef_3 "View footnote.")\]

### Use AI as a learning accelerator, not as a cheat

Ask AI _why_ after every answer. "Why did you choose this pattern? What are the alternatives? What breaks if I change X?" If you’re just taking the output and moving on, you’re not learning, you’re copy-pasting.

One thing AI is quite good at: being a tireless colleague you can ask "dumb questions" without any judgement. Feel self-conscious asking your senior why a particular abstraction exists? Ask Claude first. Then go have the conversation with your senior now that you’ve explored a bit and probably have better questions.

### Keep your hands on the keyboard

"Build things without AI" is the advice everyone gives, but I don’t think abstinence is realistic. There’s a better version.

My friend and colleague Johanna makes a lovely case for [treating LLMs like the programming books we used to learn from](https://jola.dev/posts/treating-llms-as-programming-books). You don’t avoid the LLM, you plan the approach with it, then ask it for the code a snippet at a time and _type each piece out yourself_ instead of pasting it. It sounds almost silly until you remember that’s exactly what a generation of us did with printed manuals: typed the examples out by hand because there was no other way, and learned the language in the act of transcribing it.

That’s the generation effect, smuggled back into "ways of working with AI". The typing isn’t the point; the thinking you can’t avoid while you type is. You hit the bit you don’t understand and you can’t paste past it. You have to stop. That stop/friction is the whole thing.

So: read the code before you ask Claude to explain it. Type the solution rather than paste it. Form your own broken mental model first, _then_ let the model correct it. The freed-up time AI gives you is only a gift if you spend it on harder thinking, not on not doing the thinking.

### Read the books that built the discipline

AI can answer your questions, but it can’t give you the mental models that come from working through a well-structured textbook. The best CS programmes have always been built around a handful of canonical books. And, perhaps a spicy take on my side, I think they’re more relevant now than ever, precisely because they teach the _thinking_ that AI can’t shortcut for you.

A few I’m dropping here as a subset of books you should explore (if you ask Claude, and give these as input and ask for more of the same quality, appropriate for a CS degree, I’m fairly sure it will give you even more books to read):

*   **[Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/9780262510875/structure-and-interpretation-of-computer-programs/)**: still the best introduction to how to think about computation. It doesn’t matter that it uses Scheme. The skills transfer.
    
*   **[Building an Optimizing Compiler](https://www.amazon.com/Building-Optimizing-Compiler-Bob-Morgan/dp/155558179X)**: a great way to learn about building compilers, especially if you think the [dragon book](https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools) is a bit much.
    
*   **[Designing Data-Intensive Applications](https://dataintensive.net/)**: if you work on anything with a database, or a queue, read this. It gives you the vocabulary and mental models to make architectural decisions that AI will happily get wrong (me guessing!).
    
*   **[TCP/IP Illustrated, Volume 1](https://en.wikipedia.org/wiki/TCP/IP_Illustrated)**: networking is one of those areas where AI-generated answers sound plausible but are subtly wrong in ways that bite you. This teaches you how packets actually move, what happens during a TCP handshake, why your connection is resetting. This book has been invaluable for my career.
    
*   **[The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)**: less academic, more about the craft and habits of building software well. Good for "how to think about your work". Your mileage may vary with this one but I still recommend it.
    

You don’t need to read all of these cover to cover (though SICP and DDIA are good ones to do so). But working through even a few chapters of each will give you amazing foundations.

### Learn Unix properly

This one is underrated and I think increasingly neglected. The Unix philosophy, building complex systems by composing small, focused tools, is one of the most important design principles in software engineering. And you don’t learn it by asking AI to write your shell commands.

Spend time in a terminal. Learn what pipes actually do and why they’re powerful. Chain `grep` into `sort` into `uniq` into `awk` and watch a messy log file turn into an answer.

I went back and forth on this one but I’m going to leave it here still: get comfortable with `man` pages. Use `apropos` when you don’t know the right command. Discover `info` for the longer-form documentation that some tools provide. These are the original "ask for help" interfaces, and they teach you to be self-sufficient in a way that ChatGPT/Claude/Gemini doesn’t. When you open `info` or a `man` page, you end up discovering more knowledge beyond what you were looking for.

AI can generate a bash script for you for sure. But giving you the knowledge of how a system works due to the use of its collection of simple tools? Probably not.

### Write documentation as a learning tool

Writing documentation forces you to understand what you’re building in a way that reading code doesn’t. It also happens to make AI tools work better. Well-documented codebases get better AI output. Double benefit: you learn, and you make the AI more useful for everyone.

### Call out explicitly what you wrote vs what AI wrote

With your manager, with your reviewers, with yourself. This builds trust and enables better coaching. Also, ask for code review on your _thinking_, not just the output.

### Have conversations that matter

Architecture discussions, design reviews, incident post-mortems. There is a lot of learning with these, and AI can’t participate in them (meaningfully, anyway). Pair with seniors on the hard problems where AI fails. The "why is this slow sometimes but not always", the "this works locally but fails in staging". I think today this still applies even though I’m increasingly seeing AI also being able to "explain" some of these issues.

### Lean into what AI can’t do

Cross-system debugging. Understanding organisational context. Stakeholder communication. Knowing when requirements are wrong. These are all skills that compound over a career and that AI won’t replace anytime soon. If you build these early, you’ll be far more valuable than someone who can only prompt well.

## This isn’t just on graduates

Everyone has a responsibility here.

Engineering managers need to create space for learning, not just optimise for output. If your performance framework only measures velocity, you’re incentivising graduates to lean on AI as hard as possible and never develop the underlying skills. That’s a failure of leadership, not of the individual. Yes, AI might be the great equaliser on raw output speed but over time it’s the quality, the taste, the intuition that pays off.

We need to keep investing in the pipeline even when AI makes it tempting not to. More on why in the [appendix](#_what_this_means_for_hiring_and_teams).

The AI tools themselves need to be better at teaching. I’ve thought a few times if it would be useful to have instructions in our AGENTS.md at incident.io to detect who the user is and if it is a graduate to always offer a kind of flashcard "did you know …​" every time they are exploring or building.

We also need to redefine what seniority means when everyone’s output looks similar. Because raw volume isn’t a good indicator, the differentiator has to be something other than lines of code. It should be judgement, debugging skill, system understanding, and the ability to make good decisions under uncertainty. The things that have always mattered, honestly.

## How does this play out in future?

If you’re early in your career, you’re in a strange position. More powerful tools than any generation of engineers before you. By default, you can ship faster, you can also learn quicker (if you approach it right), and you have access to the collective knowledge of the industry through a chat interface. And those are superpowers. Don’t let having those superpowers make you skip the foundations that make those superpowers useful.

The engineers who thrive will be the ones who use AI to amplify their learning and get to deeper knowledge faster.

As for hiring managers, bet on your early career engineers. They’ll be your company success in less time than you think.

## Appendix A: What this means for hiring and teams

The numbers are pretty rough if you go by a few studies stats (these vary wildly so take this with a healthy dose of scepticism): [employment for software developers aged 22-25 has declined roughly 20% from its late 2022 peak](https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf).

For folks that have done any hiring, you know this is either a pipeline problem of today or of tomorrow. Each senior engineer is N times\[[4](#_footnotedef_4 "View footnote.")\] more productive with AI, so the temptation is to hire fewer graduates. But stop hiring graduates and you eventually run out of seniors. It’s that simple. And if you think about it, what a presumptuous take: you’re hiring people for what they can do with code out of college, rather than hiring them for their brains and their future potential.

Engineering managers on the other hand face a new challenge: how do you evaluate growth when output is partly AI-generated and when everyone is currently talking about outputs? I think continuing to focus on outcomes and ensuring that outputs matter less is the way. Knowing what to build and building the right thing is way more important than building lots of things.

I then also wonder about team dynamics: in product development startups, the (let’s call it traditional) ratio of 5-7 engineers, 1 designer, 1 PM is going down the drain it seems. If AI handles more of the implementation, teams might get smaller and more senior. I already see it playing out with my own teams. So, where does that leave someone just starting out?

There’s no clean answer yet (not in my mind at least) but I have a few takes here related with teams/people:

1.  companies that stop hiring graduates entirely are making a mistake that will cost them in 3-5 years.
    
2.  smaller teams where AI does more of the implementation creates an opportunity for smaller ratios of seniors/graduates. Whereas before you probably had a team of 2 seniors, 2 mid levels, 1 graduate, you now can sustain a team of 3 seniors and 1 very bright graduate with no loss in outcomes.
    
3.  mid level engineers are the ones that need to speed up their careers to become quite knowledgeable; I’m not sure there’s a world anymore where mid level engineers can stay like that for 2-3 years which means it gets harder for them. They’re in that weird middle ground of knowing a lot but still having lots of gaps, and so are in the danger zone: companies don’t hire them because it’s less clear what they’re getting when hiring.
    

* * *

[1](#_footnoteref_1). To my knowledge there aren’t yet any kind of longitudinal studies on this stuff.

[2](#_footnoteref_2). Working for an incident response company means I’m always thinking about the 3am page.

[3](#_footnoteref_3). Worth reading [What I’ve learned about using AI](http://nlopes.dev/writing/ai-isnt-optional-anymore#_what_ive_learned_about_using_it_well) beforehand.

[4](#_footnoteref_4). I’m not even going to pretend I have a good number as a multiplier here but I believe senior folks will have a >1 multiplier using AI.

~ fin ~

[← Writing](/writing)

{% endraw %}
