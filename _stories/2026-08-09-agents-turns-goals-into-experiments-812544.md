---
layout: "story"
title: "Agents Turns Goals Into Experiments"
date: "2026-08-09"
permalink: "/2026/08/09/stories/agents-turns-goals-into-experiments-812544/"
slug: "agents-turns-goals-into-experiments-812544"
source: "MyClaw Newsletter"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://newsletter.myclaw.ai/unsubscribe/?uuid=2eaf3154-2af3-4e54-b574-fba62b0fa39d&amp;key=dc9420fa06ad8715ca418803968586b4a3d508870a709a3c794ae1e1640114bf&amp;newsletter=deed1d04-92d6-4e2e-bf4e-5a395b641657"
original_url: "https://newsletter.myclaw.ai/r/de394e75?m=2eaf3154-2af3-4e54-b574-fba62b0fa39d"
category: "AI"
excerpt_separator: ""
---

{% raw %}
PNNL researchers built an AI agent system that lets scientists describe experiment goals and turns them into robot-ready instructions for Big Kahuna. By coordinating specialized sub-agents, it replaces weeks of scientist-engineer translation with automated workflow design, helping labs run five to 10 times more chemistry experiments while humans guide strategy and robots handle execution.

---

[](https://techxplore.com/archive/25-06-2026/)

June 25, 2026

# Agentic AI bot helps scientists speak to robots, speeding up experiments

by JoAnna Wendel, [Pacific Northwest National Laboratory](https://www.pnnl.gov/)

edited by [Lisa Lock](https://sciencex.com/help/editorial-team/), reviewed by [Robert Egan](https://sciencex.com/help/editorial-team/)

[Editors' notes](javascript:void\(0\))

This article has been reviewed according to Science X's [editorial process](https://sciencex.com/help/editorial-process/) and [policies](https://sciencex.com/help/editorial-standards/). [Editors](https://sciencex.com/help/editorial-team/) have highlighted the following attributes while ensuring the content's credibility:

fact-checked

peer-reviewed publication

trusted source

proofread

[The GIST](javascript:void\(0\))

[

Add as preferred source](https://google.com/preferences/source?q=https%3A%2F%2Ftechxplore.com%2F)

* * *

![Agentic AI bot helps scientists speak to robots, speed up experiments](https://scx1.b-cdn.net/csz/news/800a/2026/agentic-ai-bot-helps-s.jpg "AutoLabs multi-agent system. Credit: Scientific Reports (2026). DOI: 10.1038/s41598-026-45593-z")

AutoLabs multi-agent system. Credit: _Scientific Reports_ (2026). DOI: 10.1038/s41598-026-45593-z

Researchers at the Department of Energy's Pacific Northwest National Laboratory use a slew of autonomous robots to design and implement experiments. However, setting up an experiment on an autonomous lab robot is surprisingly slow. The effort requires a lengthy back-and-forth between a scientist and an engineer to design the experimental steps—a process that can take weeks.

googletag.cmd.push(function() { googletag.display('div-gpt-ad-1453799284784-2'); });

To help researchers work more efficiently, a PNNL team developed a generative agentic AI that can quickly translate experimental goals into instructions for a laboratory robot. The translation agent, called AutoLabs, is currently designed to operate with Big Kahuna, an automated robot built by Unchained Labs that researchers use to study new and existing battery materials. The system can carry out multistep experimental workflows, including mixing, heating, stirring and filtering samples with minimal human intervention. By automating these processes, researchers can perform five to 10 times more experiments than would be practical by hand.

The team published a [paper](https://www.nature.com/articles/s41598-026-45593-z) in _Scientific Reports_ about AutoLabs, and the software is also available for other researchers to [download on GitHub](https://github.com/pnnl/AutoLabs).

"AutoLabs helps pave the way for a new generation of AI-driven automatic assistants for chemistry research," said Gihan Panapitiya, a data scientist at PNNL and lead author on the paper. "Agents like AutoLabs can act as automated assistants, as well as reliable, self-correcting partners in the complex and creative process of scientific discovery."

![Agentic AI bot helps scientists speak to robots, speeding up experiments](https://scx1.b-cdn.net/csz/news/800a/2026/agentic-ai-bot-helps-s-1.jpg "Systems engineer Heather Job works with autonomous laboratory robot Big Kahuna. Job helped develop a new AI program that can help researchers seamlessly design experiments for the robot to conduct.  Credit: Andrea Starr | Pacific Northwest National Laboratory")

Systems engineer Heather Job works with autonomous laboratory robot Big Kahuna. Job helped develop a new AI program that can help researchers seamlessly design experiments for the robot to conduct.  Credit: Andrea Starr | Pacific Northwest National Laboratory

## From design to experimentation

Autonomous science is not new, but it can get complicated. To design an experiment for an instrument like Big Kahuna, the scientist and instrument engineer must have an equal understanding of the experimental goals. The engineer has specialized knowledge about the instrument, while the scientist has specialized knowledge about the experiment—but this knowledge doesn't necessarily overlap.

googletag.cmd.push(function() { googletag.display('div-gpt-ad-1764918314952-2'); });

The collaborative effort to design an experiment that Big Kahuna can conduct can take weeks while the scientist and engineer work together to refine the steps.

This is where paper co-author Heather Job comes in. As a systems engineer at PNNL, Job's role is to operate and program Big Kahuna and train others how to use it. She would work with a scientist to design an experiment for Big Kahuna.

"We're lucky in the fact that we have software that goes along with our robots. But unless you have a lot of training and you know what the robot is capable of, it can take a really long time to translate what you'd like to do into the robot's specific operations," Job said.

So Panapitiya and colleagues Emily Saldanha and Olivia Hess set out to explore whether they could create AI agents using readily available large language models to make Big Kahuna more accessible to more scientists.

The result, AutoLabs, is an agentic AI system built on an OpenAI model. [Agentic AI systems](https://phys.org/news/2026-04-qa-agentic-ai-human-scientists.html?utm_source=embeddings&utm_medium=related&utm_campaign=internal) operate with several specialized "sub-agents" that are programmed with unique sets of expertise. Once given a task, they all act under one "supervisor" agent.

Think of a computer program that could book an entire vacation for you: It might have sub-agents that check plane ticket prices, hotel deals and even the weather over the dates of travel. For AutoLabs, the sub-agents work together to analyze a user's experimental request and translate that request into specific instructions for Big Kahuna.

## Putting AutoLabs to the test

Once Panapitiya and the team built AutoLabs, it was time to test whether it could successfully translate a desired experiment into instructions compatible with Big Kahuna.

The team developed five different experiments for Big Kahuna, with each experiment increasing in complexity. They then told AutoLabs what tasks they'd like Big Kahuna to complete. All the tasks involved mixing, heating or stirring different chemicals together, but the more complex experiments involved more chemicals, more constraints and more math.

For instance, the simplest experimental task involved creating and mixing combinations of naphthalene and methanol in a single set of vials, with each sample containing a different amount of each chemical. A more complicated task involved multiple sets of vials and performing a chemical reaction using more than two chemicals, with other steps like heating and cooling at specific temperatures, stirring at specific rotations per minute, and transferring chemicals from one vial to another.

In every instance, AutoLabs successfully translated the descriptions of the experiments into steps for Big Kahuna, Panapitiya said. That means it's performing nearly as well as a scientist who is well trained to use the laboratory robot.

"With AutoLabs, human experts can learn to use Big Kahuna quickly and guide the overall experimental strategy while the AI agent manages the granular implementation and validation," Job said. "The collaboration creates a partnership that's more robust than either a human or robot could achieve alone."

She added that AutoLabs is not meant to replace a scientist, but to enhance the scientist's process with speed and efficiency.

The team is now building out AutoLabs to conduct literature reviews and to learn over time, which means adding memory, Panapitiya said. AutoLabs is also flexible in its design and can be adapted to any kind of autonomous laboratory system.

"This iteration of AutoLabs was developed to generate hardware files for Big Kahuna, but its experiment design capabilities extend beyond this one robot," Panapitiya said.

###### Publication details

Gihan Panapitiya et al, AutoLabs: cognitive multi-agent systems with self-correction for autonomous chemical experimentation, _Scientific Reports_ (2026). [DOI: 10.1038/s41598-026-45593-z](https://dx.doi.org/10.1038/s41598-026-45593-z)

Github: [github.com/pnnl/AutoLabs](https://github.com/pnnl/AutoLabs)

**Journal information:** [Scientific Reports](https://techxplore.com/journals/scientific-reports/)[](http://www.nature.com/srep/index.html)

###### Key concepts

[**Autonomous robotic locomotion**](https://techxplore.com/concepts/autonomous-robotic-locomotion/)

Provided by [Pacific Northwest National Laboratory](https://techxplore.com/partners/pacific-northwest-national-laboratory/)[](https://www.pnnl.gov/)

Who's behind this story?

[![Lisa Lock](https://scx1.b-cdn.net/gfx/profiles/f6b420961b46f94b.jpg)](https://sciencex.com/help/editorial-team/lisa-lock/)

##### [Lisa Lock](https://sciencex.com/help/editorial-team/lisa-lock/)

BA art history, MA material culture. Former museum editor, paramedic, and transplant coordinator. Editing for Science X since 2021. [Full profile →](https://sciencex.com/help/editorial-team/lisa-lock/)

[![Robert Egan](https://scx1.b-cdn.net/gfx/profiles/782dcfc6701d278c.jpg)](https://sciencex.com/help/editorial-team/robert-egan/)

##### [Robert Egan](https://sciencex.com/help/editorial-team/robert-egan/)

Bachelor's in mathematical biology, Master's in creative writing. Well-traveled with unique perspectives on science and language. [Full profile →](https://sciencex.com/help/editorial-team/robert-egan/)

**Citation**: Agentic AI bot helps scientists speak to robots, speeding up experiments (2026, June 25) retrieved 9 August 2026 from https://techxplore.com/news/2026-06-agentic-ai-bot-scientists-robots.html

This document is subject to copyright. Apart from any fair dealing for the purpose of private study or research, no part may be reproduced without the written permission. The content is provided for information purposes only.

{% endraw %}
