---
layout: "story"
title: "Agents on Rails"
date: "2026-08-16"
permalink: "/2026/08/16/stories/agents-on-rails-5f5b9e/"
slug: "agents-on-rails-5f5b9e"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://rubyonrails.org/ai"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
- New Rails AI initiative for agents
- Includes announcement and first benchmark report
- Read the announcement and benchmark report for details

---

Rails and AI — Ruby on Rails                    

[](/)

*   [Source](https://github.com/rails/rails)
*   [Docs](/docs)
*   [AI](/ai)
*   [Community](/community)

*   [News](/blog)
*   [Events](/events)
*   [Jobs](https://jobs.rubyonrails.org)
*   [Foundation](/foundation)

# Rails is built for AI.

Rails gives coding agents the same thing it has always given developers: clear conventions, expressive code, and a complete framework for turning ideas into production software.

01

### Convention Over Configuration

**Rails gives agents a map.** Standard names, folders, commands, and patterns help generated changes land closer to idiomatic Rails with less prompting.

02

### Token Efficiency

**Less code means more context.** Ruby and Rails express product ideas with fewer tokens, helping agents make smaller edits and move faster from request to working feature.

03

### Quality Training Data

**The patterns are everywhere.** Decades of public Rails code give models strong signals for controllers, models, views, tests, jobs, migrations, and the glue between them.

04

### The One Person Framework

**One person can ship more.** Rails provides the full product stack. Add an AI coding agent, and a solo builder can take on broader work without stitching everything together from scratch.

## Agents on Rails

## Which model is best?

Compare accuracy, speed, token efficiency, cost, and API recall across the same set of Rails evaluations.

Swipe to compare all model metrics →

Model

AccuracySuccessful runs

SpeedMedian

TokensMean per run

CostMean per run

API RecallRuns

 ![Anthropic](/assets/images/ai-vendors/anthropic.svg) OPUS-5

92.1%

9m 42s

47000

$1.9

31.7%

 ![Moonshot AI](/assets/images/ai-vendors/moonshot-ai.svg) KIMI-K3

90.5%

12m 45s

51000

$1.09

23.8%

 ![Anthropic](/assets/images/ai-vendors/anthropic.svg) FABLE-5

90.5%

6m 47s

24667

$2.317

33.3%

 ![OpenAI](/assets/images/ai-vendors/openai.svg) GPT-5.6 Sol

84.1%

5m 4s

28000

$0.52

31.7%

 ![Meta](/assets/images/ai-vendors/meta.svg) MUSE-1.2

76.2%

15m 44s

68333

$1.687

22.2%

 ![OpenAI](/assets/images/ai-vendors/openai.svg) LUNA

73.0%

3m 19s

21000

$0.014

25.4%

 ![Z.ai](/assets/images/ai-vendors/z-ai.svg) GLM-5.2

66.7%

6m 0s

33000

$0.239

11.1%

 ![DeepSeek](/assets/images/ai-vendors/deepseek.svg) DEEPSEEK

65.1%

6m 48s

44333

$0.031

7.9%

### Accuracy vs. token efficiency

The strongest models rise toward the top-left.

Tokens Speed Cost

Swipe to explore every model →

Accuracy Higher is better

Mean tokens per run Lower is better

*   Higher is more accurate
*   Further left uses fewer tokens

[Read the most recent benchmark report](https://rubyonrails.org/category/agents)

### Methodology

Each model ran every evaluation three times in August 2026, using the provider's default settings — 63 runs per model. Accuracy is the share of runs that passed the evaluation's hidden tests; refusals count as failures, and differences of a few points between models are within run-to-run noise. Speed is the median run duration, and tokens and cost are means per run. API recall is the percentage of runs in which the model reached directly for the target Rails API. Model-level medians come from run-level data, so they can differ slightly from the per-evaluation timings. Select any model or result for the underlying evaluation details.

Explore the open-source [Rails AI evaluation suite](https://github.com/rails/ai-evals).

*   > Convention over configuration set the path for 20+ years of great training data for AI to use today. Not only does this mean agents do great with Rails, but also that squishy humans can quickly and confidently review the output without a jungle of distracting boilerplate.
    
     [![David Heinemeier Hansson](/assets/images/reference-apps/avatars/dhh.jpg) David Heinemeier Hansson @dhh](https://x.com/dhh/status/2018574874675929544)
*   > Rails' convention over configuration explains why I got very good LLM output quality in the early days of LLM-assisted coding while many developers still thought it was unusable. Most Rails codebases look the same and on average is high quality.
    
     [![Marc Köhlbrugge](/assets/images/reference-apps/avatars/marckohlbrugge.jpg) Marc Köhlbrugge @marckohlbrugge](https://x.com/marckohlbrugge/status/2018584856687501728)
*   > One of the killer features of using Rails in this AI era is "Convention over configuration". If you keep your project close to the Rails defaults, the AI knows so much already about your project… It makes things 100x faster.
    
     [![Ivan Morgillo](/assets/images/reference-apps/avatars/hamen.jpg) Ivan Morgillo @hamen](https://x.com/hamen/status/1920481695196688433)

×

Evaluation

Framework

Target

Score

Time

Tokens/run

Cost/run

API Recall

[](/)

*   [Merch](https://merch.rubyonrails.org)
*   [Conduct](/conduct)
*   [Maintenance](/maintenance)
*   [Security](/security)
*   [Trademarks](/trademarks)
*   [License](https://opensource.org/licenses/MIT)

{% endraw %}
