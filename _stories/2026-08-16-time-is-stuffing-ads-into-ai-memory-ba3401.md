---
layout: "story"
title: "Time Is Stuffing Ads Into AI Memory"
date: "2026-08-16"
permalink: "/2026/08/16/stories/time-is-stuffing-ads-into-ai-memory-ba3401/"
slug: "time-is-stuffing-ads-into-ai-memory-ba3401"
source: "AI Secret"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://aisecret.us/unsubscribe/?uuid=51dd95b7-a6ea-4b91-a3f3-61c022f08768&amp;key=96e91569283006ee4283ef36edbbb758d75e5c70220aff1513737395c8039947&amp;newsletter=3ce353fa-0781-406f-968b-f712405ba520"
original_url: "https://aisecret.us/r/4ac96332?m=51dd95b7-a6ea-4b91-a3f3-61c022f08768"
category: "Ads"
excerpt_separator: ""
---

{% raw %}
- Time magazine is serving hidden ads to AI crawlers in FAQ-shaped article versions visible only to machines like ClaudeBot
- These ads are designed to shape AI model outputs and long-term memory rather than reach human readers
- Publishers are pivoting to advertise to machines because human web traffic has declined and bot traffic now dominates their audience

---

ai and ml

# Time Magazine has a separate version of its website with ads only AI can see

Brands are already paying to influence what chatbots say about them

Brandon Vigliarolo [Brandon Vigliarolo](https://www.theregister.com/author/brandon-vigliarolo) GOVERNMENT AND IT NEWS REPORTER

Published wed 5 Aug 2026 // 22:02 UTC

[](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://bsky.app/intent/compose?text=Time%20Magazine%20has%20a%20separate%20version%20of%20its%20website%20with%20ads%20only%20AI%20can%20see%0Ahttps%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640&title=Time%20Magazine%20has%20a%20separate%20version%20of%20its%20website%20with%20ads%20only%20AI%20can%20see)[](https://api.whatsapp.com/send?text=Time%20Magazine%20has%20a%20separate%20version%20of%20its%20website%20with%20ads%20only%20AI%20can%20see%0Ahttps%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)

AI webpage crawlers are now being served their very own ads that ordinary visitors never see, with one firm's boss openly describing a strategy to influence what chatbots say about brands. The next time you ask Claude about where to bank, its answer may have been influenced by this bot-targeted content.

We only have one documented example so far, and that's Time serving AI-only ads to selected AI crawlers, as spotted by Germany-based freelance software developer Vincent Schmalbach. In a Wednesday [blog post](https://www.vincentschmalbach.com/time-serves-ai-bots-a-different-website/), Schmalbach detailed how he found sponsored content embedded in markdown versions of some Time pages that are served to AI crawlers but not ordinary browsers.

Those pages also contained advertising tags from adtech vendor Mobian ahead of extensive FAQs for online-only bank Ally. The FAQs include brand "facts," such as the number of fee-free ATMs associated with the branchless bank, alongside claims that Ally is "the only bank built for life today," putting it in "a category of one."

REG AD

Key “brand fact” statements that make for great regurgitable facts are also included in the AI-only advertisement, as are answers to questions like “is Ally good for everyday banking,” “can you deposit cash at Ally Bank,” and the like. The FAQ is flagged as sponsored content on the markdown page, but it doesn’t change the fact that the entire thing is written like it was designed to be spit back out by a chatbot in response to specific questions. 

REG AD

Not all web crawlers are getting these markdown ads either. Per Schmalbach, Google’s standard search indexing bot doesn't see the ads, as it just gets the same HTML that a human gets. 

“Only the \[chatbot\] assistant crawlers get the forked version,” he wrote. That means user-agents including ClaudeBot, OAI-SearchBot, and PerplexityBot receive the sponsored markdown, while Google's standard search crawler gets the same HTML served to ordinary browsers. GPTBot and ChatGPT-User, which OpenAI uses for model training and user-initiated retrieval respectively, return HTTP 406 errors in Schmalbach's tests, while OAI-SearchBot receives the markdown version used to support ChatGPT Search.

These AI ad-infused markdown versions of stories should be viewable by humans who change the User-Agent header sent as part of HTTP requests, which is how Schmalbach said he spotted them. The Register tested several articles from Time to see for ourselves, and we were able to replicate the results using the crawler simulator provided by search engine optimization firm Encited. 

When viewed as ClaudeBot, Time’s Best Inventions of 2025 list [includes](https://encited.com/free-tools/crawler-simulator?url=https%3A%2F%2Ftime.com%2Fcollections%2Fbest-inventions-2025%2F&ua=claudebot) the Ally Bank ad, as do stories about Time’s [top content creators](https://encited.com/free-tools/crawler-simulator?url=https%3A%2F%2Ftime.com%2Fcollection%2Ftime100-creators%2F2026%2F&ua=claudebot) of 2026, as does a [gallery of photos](https://encited.com/free-tools/crawler-simulator?url=https%3A%2F%2Ftime.com%2Farticle%2F2026%2F07%2F31%2Ftime100-creators-2026-party-photos%2F&ua=claudebot) from a creators' party held in New York recently to honor the list. The markdown ads don’t appear on newsier stories that we checked, suggesting the ads may be part of more evergreen content rather than articles with a shorter shelf life. 

As Schmalbach points out in his writeup, this could be “the first clear look at what the web starts to become when the main audience is AI models,” which is a [threshold we’ve already crossed](https://www.theregister.com/columnists/2026/07/12/its-an-ai-web-and-were-just-rats-in-the-walls/5269760).

### Why advertise to humans when you can make AI do it for you?

It’s not clear whether Time’s strategy of advertising to AI crawlers has been adopted by other publishers, but it’d be a shock if others weren’t at least considering it. 

As noted above, AI crawler traffic has already begun to surpass human visits to webpages, making it potentially more lucrative for advertisers to target those crawlers than the humans who made them. With [half](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search) of the US consumers surveyed saying they use AI to search the web, the potential to reach consumers by influencing AI responses is incredibly powerful, and that is what Time and its advertising partner Mobian appear to be banking on. 

REG AD

When we asked the publication to verify Schmalbach’s report and the results we found, they didn’t answer questions, instead pointing us to a [story](https://digiday.com/media/time-has-started-serving-ads-to-ai-agents/) in media and marketing outlet Digiday from last week that verified not only what we saw but our fears about the scheme, too.

## MORE CONTEXT

*   [
    
    ### Chatbots are great at manipulating people to buy stuff, Princeton boffins find
    
    ](/software/2026/04/10/chatbots-excel-at-manipulating-people-into-buying-things/5223135)
*   [
    
    ### AI search could kill the web without new quality signals and revenue models
    
    ](/ai-and-ml/2026/07/01/ai-search-could-kill-the-web-without-new-quality-signals-and-revenue-models/5265269)
*   [
    
    ### AI agents don't care about your pretty website or tempting ads
    
    ](/software/2025/05/27/ai-agents-confused-by-some-aspects-of-websites-ads/394547)
*   [
    
    ### Cloudflare to block cynical search-and-scrape bots from ad-supported web pages
    
    ](/ai-and-ml/2026/07/01/cloudflare-to-block-cynical-search-and-scrape-bots-from-ad-supported-web-pages/5264727)

Per Digiday, Time started converting its web pages to markdown in order to make them more appealing to AI crawlers in June, and a partnership with Mobian was included in that rework. Time COO Mark Howard told Digiday that the publication’s sales team is pitching agent ads to brands that have also converted their websites to markdown, as it suggests those brands are thinking about reaching AI bots. 

It’s a quote from Mobian CEO and co-founder Jonah Goodhart that makes the objective clear, however: The company's aim is to shape what AI assistants say about the brands paying for the service.

“When you influence ChatGPT, you’re influencing potentially all of ChatGPT. If ChatGPT changes what it says about \[a brand\], it’s massive and it’s more than any one campaign could ever do,” Goodhart told Digiday. “With a human you influence one person.”

So far, the pair confirmed to Digiday that Ally Bank and the Project Management Institute were the first brands trying to influence AI search results, matching the ads Schmalbach and _The Register_ found in AI crawler versions of Time's pages.

Time and Mobian told Digiday that the partnership marks the first time a publisher has served ads directly targeting AI crawlers, but that “more are already being lined up.” 

In other words, you soon may not be able to tell which results in an AI powered search are legitimately being surfaced because of being good products, and which are just gaming the system. It’s the early days of the SEO race all over again, only this time fooling the indexers is as easy as handing any old idiot the same pamphlet over and over again until its content becomes truth. ®

[artificial intelligence](/tag/artificial%20intelligence) [ai and ml](/tag/ai%20and%20ml) [advertising](/tag/advertising) [web crawlers](/tag/web%20crawlers) [internet](/tag/internet)

[](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://bsky.app/intent/compose?text=Time%20Magazine%20has%20a%20separate%20version%20of%20its%20website%20with%20ads%20only%20AI%20can%20see%0Ahttps%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)[](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640&title=Time%20Magazine%20has%20a%20separate%20version%20of%20its%20website%20with%20ads%20only%20AI%20can%20see)[](https://api.whatsapp.com/send?text=Time%20Magazine%20has%20a%20separate%20version%20of%20its%20website%20with%20ads%20only%20AI%20can%20see%0Ahttps%3A%2F%2Fwww.theregister.com%2Fai-and-ml%2F2026%2F08%2F05%2Ftime-magazine-has-a-separate-version-of-its-website-with-ads-only-ai-can-see%2F5283640)

{% endraw %}
