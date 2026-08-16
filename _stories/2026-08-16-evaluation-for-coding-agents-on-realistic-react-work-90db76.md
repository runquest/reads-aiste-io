---
layout: "story"
title: "Evaluation for coding agents on realistic React work"
date: "2026-08-16"
permalink: "/2026/08/16/stories/evaluation-for-coding-agents-on-realistic-react-work-90db76/"
slug: "evaluation-for-coding-agents-on-realistic-react-work-90db76"
source: "React Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://reactdigest.net/subscribers/15ba1f04-697f-45f3-a1e0-b46f193a8e06/unsubscribe"
original_url: "https://reactdigest.net/links/22957/15ba1f04-697f-45f3-a1e0-b46f193a8e06/email"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Existing benchmarks let models pass every test while still writing React code that breaks in production. ReactBench was built to catch what tests miss, like performance, accessibility, and code quality issues. The benchmark targets React specifically because it powers around 70% of JavaScript-based websites, meaning small model mistakes can spread fast.

---

# ReactBench

ReactBench is an evaluation for coding agents on realistic React work. Models can pass every test in today’s benchmarks and still write React that fails in production. Tests verify behavior, but they miss React performance, accessibility, and quality issues.

[Read the Blog](/blog)[Run ReactBench](https://github.com/millionco/reactbench)

ReactBench v1.1ReactBench v1.0

OverallWriting ReactFixing React

BestAll effort levels

Pass@1

[

1GPT 5.6 Solmax

48% ±5%](/data/trials?model=gpt-5.6-sol)[

2Fable 5xhigh

43% ±3%](/data/trials?model=claude-fable-5)[

3Opus 5max

42% ±4%](/data/trials?model=claude-opus-5)[

4GPT 5.6 Terramax

41% ±3%](/data/trials?model=gpt-5.6-terra)[

5Grok 4.6xhigh

37% ±3%](/data/trials?model=cursor-grok-4.6)[

6Qwen3.8 Maxxhigh

36% ±2%](/data/trials?model=alibaba%2Fqwen3.8-max)[

7GPT 5.6 Lunamax

35% ±4%](/data/trials?model=gpt-5.6-luna)[

8Gemini 3.7 Flashhigh

34% ±4%](/data/trials?model=google%2Fgemini-3.7-flash)[

9Grok 4.5high

33% ±3%](/data/trials?model=cursor-grok-4.5)[

10Opus 4.8max

32% ±3%](/data/trials?model=claude-opus-4-8)[

11Deepseek V4 Pro 0813max

32% ±6%](/data/trials?model=deepseek%2Fdeepseek-v4-pro-0813)[

12\=Kimi K3

30% ±6%](/data/trials?model=moonshotai%2Fkimi-k3)[

12\=GLM 5.2high

30% ±3%](/data/trials?model=zai%2Fglm-5.2)[

14Sonnet 5max

29% ±2%](/data/trials?model=claude-sonnet-5)[

15Muse Spark 1.1max

26% ±5%](/data/trials?model=meta%2Fmuse-spark-1.1)[

16Muse Spark 1.2xhigh

23% ±4%](/data/trials?model=meta%2Fmuse-spark-1.2)[

17\=Gemini 3.1 Pro Previewhigh

22% ±3%](/data/trials?model=google%2Fgemini-3.1-pro-preview)[

17\=Gemini 3.5 Flashmedium

22% ±4%](/data/trials?model=google%2Fgemini-3.5-flash)[

19Kimi K2.7 Code

22% ±2%](/data/trials?model=moonshotai%2Fkimi-k2.7-code)[

20Deepseek V4 Flash 0731max

21% ±3%](/data/trials?model=deepseek%2Fdeepseek-v4-flash-0731)[

21Composer 2.5

14% ±2%](/data/trials?model=composer-2.5)[

22Inkling Small

7% ±2%](/data/trials?model=thinkingmachines%2Finkling-small)

050%100%

Figure 1. Pass@1 averaged across tasks; whiskers show 95% run-to-run intervals.

## ReactBench score vs. cost / output tokens

ReactBench v1.1ReactBench v1.0

CostOut. tokens

Providers(11/11)

Models(22/22)

AllOpenAIAnthropicxAIAlibabaGoogleDeepSeekKimiZ.aiMetaCursorThinking Machines

Ranked by score. Cost is the average per rollout.

Models ranked by ReactBench score with average rollout cost

Model

Score

Cost

GPT 5.6 Sol · MaxOpenAI

47.8%

$3.62

GPT 5.6 Sol · XHighOpenAI

44.3%

$2.32

Fable 5 · XHighAnthropic

43.1%

$10.45

Fable 5 · MaxAnthropic

42.4%

$14.07

Opus 5 · MaxAnthropic

42.0%

$6.47

Opus 5 · HighAnthropic

41.2%

$4.16

GPT 5.6 Terra · MaxOpenAI

41.2%

$1.36

GPT 5.6 Sol · HighOpenAI

40.8%

$1.87

Fable 5 · HighAnthropic

40%

$7.37

GPT 5.6 Terra · HighOpenAI

38.4%

$0.46

GPT 5.6 Terra · XHighOpenAI

38.4%

$0.73

Grok 4.6 · XHighxAI

36.9%

$2.37

Opus 5 · XHighAnthropic

36.5%

$5.34

GPT 5.6 Sol · MediumOpenAI

36.5%

$1.23

Qwen3.8 Max · XHighAlibaba

35.7%

$2.06

GPT 5.6 Luna · MaxOpenAI

34.9%

$0.99

Opus 5 · MediumAnthropic

34.5%

$2.45

Grok 4.6 · HighxAI

34.5%

$1.88

Gemini 3.7 Flash · HighGoogle

33.7%

$0.90

Fable 5 · LowAnthropic

33.3%

$3.71

Gemini 3.7 Flash · LowGoogle

33.3%

$0.91

Grok 4.5 · HighxAI

32.5%

$1.08

GPT 5.6 Luna · HighOpenAI

32.5%

$0.41

GPT 5.6 Sol · LowOpenAI

32.5%

$0.64

Opus 4.8 · MaxAnthropic

32.2%

$7.30

Deepseek V4 Pro 0813 · MaxDeepSeek

31.8%

$0.10

GPT 5.6 Luna · XHighOpenAI

31.0%

$0.65

Grok 4.5 · MediumxAI

30.6%

$1.08

Grok 4.6 · MediumxAI

30.6%

$1.24

Gemini 3.7 Flash · MediumGoogle

30.2%

$0.93

Kimi K3Kimi

30.2%

$2.32

GLM 5.2 · HighZ.ai

30.2%

$2.44

Opus 4.8 · XHighAnthropic

29.8%

$6.19

Grok 4.6 · LowxAI

29.8%

$0.77

Grok 4.5 · LowxAI

29.4%

$1.06

Sonnet 5 · MaxAnthropic

29.0%

$5.98

GPT 5.6 Terra · LowOpenAI

29.0%

$0.23

GPT 5.6 Terra · MediumOpenAI

29.0%

$0.28

Sonnet 5 · HighAnthropic

28.6%

$2.62

Opus 4.8 · HighAnthropic

27.8%

$4.75

GLM 5.2 · XHighZ.ai

27.8%

$2.90

Sonnet 5 · XHighAnthropic

27.1%

$3.52

GLM 5.2 · MaxZ.ai

26.7%

$2.65

Muse Spark 1.1 · MaxMeta

26.3%

$3.85

GLM 5.2 · MediumZ.ai

26.3%

$2.94

GLM 5.2 · LowZ.ai

25.5%

$2.51

Opus 4.8 · MediumAnthropic

25.1%

$3.92

Muse Spark 1.1 · MediumMeta

24.3%

$2.09

Opus 5 · LowAnthropic

23.9%

$1.43

Muse Spark 1.1 · HighMeta

23.1%

$3.75

Muse Spark 1.2 · XHighMeta

23.1%

$5.39

Muse Spark 1.1 · XHighMeta

22.7%

$4.02

Gemini 3.1 Pro Preview · HighGoogle

22.4%

$0.93

Gemini 3.5 Flash · MediumGoogle

22.4%

$1.67

Kimi K2.7 CodeKimi

22.0%

$1.43

Sonnet 5 · MediumAnthropic

21.6%

$1.47

Gemini 3.5 Flash · HighGoogle

21.6%

$1.68

Deepseek V4 Flash 0731 · MaxDeepSeek

20.8%

$0.30

Gemini 3.1 Pro Preview · MediumGoogle

20.4%

$0.97

Gemini 3.5 Flash · XHighGoogle

20%

$1.73

Gemini 3.1 Pro Preview · XHighGoogle

19.6%

$0.89

GPT 5.6 Luna · MediumOpenAI

18.8%

$0.15

Opus 4.8 · LowAnthropic

18.4%

$1.92

Gemini 3.1 Pro Preview · MaxGoogle

18.4%

$0.94

Muse Spark 1.1 · LowMeta

17.6%

$1.01

Gemini 3.5 Flash · LowGoogle

17.3%

$1.17

Sonnet 5 · LowAnthropic

16.9%

$0.68

Composer 2.5Cursor

13.7%

$0.16

Gemini 3.1 Pro Preview · LowGoogle

11.0%

$0.35

GPT 5.6 Luna · LowOpenAI

10.6%

$0.07

Inkling SmallThinking Machines

7.5%

$0.10

most efficientGPT 5.6 SolFable 5Opus 5GPT 5.6 TerraGrok 4.6Qwen3.8 MaxGPT 5.6 LunaGemini 3.7 FlashGrok 4.5Opus 4.8Deepseek V4 Pro 0813Kimi K3GLM 5.2Sonnet 5Muse Spark 1.1Muse Spark 1.2Gemini 3.1 Pro PreviewGemini 3.5 FlashK2.7 CodeDeepseek V4 Flash 0731Composer 2.5Inkling Small0%20%40%60%80%$0$1$2$3$4$5$6$7$8$9$10$11$12$13$14$1547.8%$3.62

average cost per rollout ($)

Figure 2. ReactBench score (%) against average rollout cost or output tokens.

Score: the share of scored trials that pass both blocking gates.

Cost: the mean cost of a model rollout in US dollars.

Score: the share of scored trials that pass both blocking gates.

Cost: the mean cost of a model rollout in US dollars.

## What people are saying

[](https://x.com/gdb/status/2077470575249994010)

![](/_next/image?url=%2Fblog%2Fgreg-brockman.png&w=96&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

[Greg Brockman](https://x.com/gdb)![OpenAI](/_next/image?url=%2Fblog%2Fopenai.jpg&w=32&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

President, OpenAI

6x price efficiency (!!) with Sol for react/frontend dev

[](https://x.com/aidenybai/status/2077430755979137208)

![](/_next/image?url=%2Fblog%2Faiden-bai.jpg&w=48&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

[Aiden Bai](https://x.com/aidenybai)Jul 15

our benchmark \[ReactBench\] shows that Sol ranks #1  is 6x more cost efficient than Fable across React/frontend work x.com/aidenybai/stat…

[](https://x.com/elonmusk/status/2079261743650312227)

Elon Musk reposted

![](/_next/image?url=%2Fblog%2Flee-robinson.png&w=96&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

[Lee Robinson](https://x.com/leerob)![Cursor](/_next/image?url=%2Fblog%2Fcursor.png&w=32&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

Cursor

Grok 4.5 is really good at React. It’s also very affordable and token efficient!

[](https://x.com/aidenybai/status/2079244241952444920)

![](/_next/image?url=%2Fblog%2Faiden-bai.jpg&w=48&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

[Aiden Bai](https://x.com/aidenybai)Jul 20

Grok 4.5 is #5 on ReactBench! It beats out Opus 4.8 by 10% while being significantly cheaper x.com/leerob/status/…

[](https://x.com/alexgshaw/status/2077439213939949716)

![](/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2003663206238089216%2FXaHJAvWp_200x200.jpg&w=96&q=75)

[Alex Shaw](https://x.com/alexgshaw)![Terminal-Bench](/_next/image?url=%2Fblog%2Fterminal-bench.png&w=32&q=75&dpl=dpl_GrXbqVwJFd7juJBvtA9Sk5odfFNX)

Co-creator, Terminal-Bench

ReactBench is a great example of this. … This more targeted benchmark shows how bad the models are at writing correct and performant React code.

## Why we built ReactBench

React is the dominant frontend framework and the most popular target for coding agents. Roughly 70% of websites built on a JavaScript framework choose React.

We have seen the risks firsthand. [React Doctor](https://react.doctor) is our open source tool for scanning React issues used by engineers at PayPal, Rippling, Polymarket, and the Centers for Disease Control and Prevention (CDC). Adoption is largely driven by the increase of model-generated code that makes it easier for subtle defects to reach production. As models write more React, small mistakes can propagate at enormous scale. In the worst cases, these defects lead to production failures:

*   Outages
    
    Incorrect `useEffect` usage takes down production. Cloudflare traced its [September 2025 dashboard and API outage](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/) to one effect with a faulty dependency. Despite human review and test, the bug still shipped to production.
    
*   Lost revenue
    
    Slow interfaces cost sales. Google and Deloitte found that a [0.1s mobile speedup increased retail conversions by 8.4%](https://web.dev/case-studies/milliseconds-make-millions). Rakuten 24 increased [revenue per visitor by 53.4%](https://web.dev/case-studies/rakuten) after improving Core Web Vitals.
    
*   Legal risk
    
    Interfaces that are not accessible exclude customers and expose companies to lawsuits. WebAIM found automated accessibility failures on [95.9% of the top one million home pages](https://webaim.org/projects/million/) and US federal [web accessibility lawsuits increased by 27% in 2025](https://accessibility.build/research/accessibility-lawsuits).
    

## Tasks

[

Correct React issues in the international phone input

0% ±0%](/data/tasks/fix-react-rdh-kaihotz-react-phonenr-input-phoneinput)[

Add gesture-driven zoom and bounded pan to the lightbox

2% ±1%](/data/tasks/write-react-pedropalau-react-bnb-gallery-185-verified)[

Correct React issues in React Big Calendar’s time gutter

20% ±1%](/data/tasks/fix-react-rdh-intljusticemission-react-big-calendar-timegutter)[

Memoize message bubbles to prevent streaming jank

26% ±3%](/data/tasks/write-react-xr843-fojin-775)[

Fix event-listener leaks in CoreUI carousel and sidebar

59% ±5%](/data/tasks/fix-react-coreui-coreui-react-470)[

Add controlled open state to Radix ContextMenu

93% ±2%](/data/tasks/write-react-radix-context-menu-controlled-open)[Browse all 51 tasks](/data/tasks)

[How we built it](/blog)

{% endraw %}
