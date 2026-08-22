---
layout: "story"
title: "Introducing the Half-Day: 0-Day in the Age of AI"
date: "2026-08-21"
permalink: "/2026/08/21/stories/introducing-the-half-day-0-day-in-the-age-of-ai-7df71a/"
slug: "introducing-the-half-day-0-day-in-the-age-of-ai-7df71a"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=456ad0e2-9c7b-11f1-8eb2-8b5ee3e77ae7%26pt=campaign%26pv=4%26spa=1787220053%26t=1787223924%26s=4ed044ee379c0c4f258523850a4aec115155fc192e13aeaffd5248ae417efe5a/1/010001a01ed8dddd-e948c237-af7b-4e47-983f-242c4540b385-000000/sagu3sCseTD0kmWOggyz2pO5TtoqiwjnkGNkcDOVjZs=452"
original_url: "https://margin.re/2026/08/introducing-the-half-day-0-day-in-the-age-of-ai/?utm_source=tldrnewsletter"
category: "Security"
excerpt_separator: ""
---

{% raw %}
AI introduces a tremendous amount of volatility and uncertainty to a marketplace where all parties already assume significant risk. The number of exploits discovered by AI is growing fast. The introduction of models like Mythos has enabled the production of work at a rate that far outstrips that of any human researcher. However, this doesn't mean security researchers are out of a job. The role of a researcher can and should change with a changing landscape.

---

You are entering a world somewhere between 0 and 1. It is a world that feels unsettling, strange, and new. There are often hallucinations. Bugs are flying everywhere. Are you in the twilight zone? No. You are working in offensive cybersecurity in 2026.

The future of the offensive cybersecurity marketplace in the age of AI remains one of the most hotly debated topics today. Everywhere you look, there are prominent stories about a glut of AI-generated vulnerabilities, rogue models escaping their tethers to hack prominent targets, and the general expectation that our industry will quickly be overrun by frontier models. Conversely, many hackers are using this as an opportunity to churn out the best research of their lives at a pace that far outstrips what they could have done previously.

In our new world, despite this great research, 0-days become n-days much more quickly.

In fact — they should.

Many of the best offensive researchers in the industry now work for the likes of Anthropic and OpenAI and are training aggregate cyber models on their brains which previously functioned in silos. Naturally, the most popular software and hardware targets will be the best targets to train against. After all, these titans of hacking are expert in them and the targets underpin much of the Western world’s most critical work. Form follows function.

A question: What happens when a market that places a high value on exclusive access to hyper-specialized products and talent is now dealing with autonomous competition that learns continuously from some of the greatest minds in that industry?

To begin to answer this question, we must acknowledge a new kind of product in our midst. If an exploit is technically 0-day but it is currently located in a surface where AI-enabled vulnerability discovery is now the norm, then I argue it is not pure 0-day. **Welcome, to the world of the half-day.**

## Half-Day Defined

A half-day still has value in the offensive marketplace; after all, it is _technically_ an 0-day. The manufacturer does not know about it and cannot, as a result, patch it. But the half-day exploit is in a surface that is so heavily scrutinized by frontier models that its lifespan must be assumed to be shorter and contaminated by association with these models. Before an offensive researcher is even able to find a vulnerability or exploit it, it is already “halfway to n.”

Since the dawn of cyber warfare, a 0-day exploit has been considered valuable because the assumption is made that only the supplier and the customer know about its existence. The utility of the vulnerability relies on a customer’s need for access to whatever that exploit provides and their level of confidence that whoever or whatever is being exploited is unaware of their risk.

The traditional transition of 0-day to n-day provides us with some insight into how half-days introduce new risk to the marketplace. As soon as a CVE implicating the 0-day exploit is reported, the offensive customer naturally contemplates some hypothetical future scenarios. It is possible that the manufacturer never patches the vulnerability in the software or firmware version of interest. It is also possible that the manufacturer foregoes patching altogether. In those hypothetical futures, the customer could still use the now n-day to continue gaining access to the target. We could look upon this population of vulnerabilities as “historic half-days” since they are publicly disclosed but functionally do not differ from the 0-day from which they sprang. They still offer value. All that changes here is the risk profile for those running an offensive operation.

Thus, the “modern half-day” forces offensive customers to have risk tradeoff conversations much earlier in the lifecycle of an exploit (Figure 1). In order to begin making decisions faster and with greater confidence, those running cyber operations must have a firm understanding of exploits as not only a technical product, but also as a weapon with an indeterminate expiration date.

![](https://storage.ghost.io/c/03/11/03117d5a-f104-460a-8d3b-19cf9de84fa6/content/images/2026/08/image--2-.png)

Figure 1: Proposed model for lifecycle of vulnerability research from initial analysis to exploit patching. The timepoints in the model are denoted T\_X. Product names directly stem from certain portions of the lifecycle. (Source: Margin Research)

## Product Assumptions

The basic technical product assumptions of an exploit can be summarized with the classic “bring me a rock” business analogy. The rock here is an exploit.

The current lifecycle of research begins when a customer says, “bring me a rock.” Customers generally do not specify what rocks they want and cannot inspect the rocks without first purchasing them. The longer they wait to purchase, the less likely the rock will be of use to them. In turn, suppliers hunt for, find, and polish an awesome rock and then announce it is for sale. The longer the rock is on the market, the more likely this awesome rock could lose its value. Pricing depends on a multitude of variables that do not guarantee a sale, even if that rock is considered beautiful and rare.

In this analogy, the modern half-day adds more risk to the entire process. What if part of the customer base believes that they have a shortcut to magically produce all the rocks they could ever need? What if the methods used to find the rock render the rock useless? What if the rock is found using tools that belong to adversarial third-parties which would also render the rock useless? Also, even if everything goes to plan and the supplier sells a rock to a customer and both groups are happy, there is a much higher risk of the rock exploding, being added redundantly to a room full of identical rocks, or showing up in a rival customer’s rock pile.

## Half-Day Implications

Half-days add a tremendous amount of volatility and uncertainty to a marketplace where all parties assume significant risk already. However, it would be foolish to treat this product as valueless. Instead, we can consider the effects of the product on the market.

Depending on a diverse set of variables including the surface, exploit type, time of year, and current leading open models, the half-day market could become both over and undersupplied very quickly. The number of CVEs reported in almost every major operating system or popular application has skyrocketed in the last year (Figure 2). While this spike is not a perfect 1:1 correlation with operationally useful exploits, it is an appropriate marker to reflect that the half-day population is growing. The introduction of models like Mythos has led many intelligent people to predict not only human obsolescence in vulnerability research, but also the production of either AI magic or AI slop at a rate that far outstrips that of any human researcher.

![](https://storage.ghost.io/c/03/11/03117d5a-f104-460a-8d3b-19cf9de84fa6/content/images/2026/08/image--1-.png)

Figure 2: Massive spikes in the amount of CVEs disclosed over time (Source: [The First CVE Wave: Signs That AI-Assisted Vulnerability Discovery Is Reshaping Disclosure Volumes](https://www.vulncheck.com/blog/ai-assisted-vulnerability-discovery?ref=margin.re))

* * *

These doomsday predictions are far too extreme. The role of the researcher can and should change with a changing product landscape.

Computer network exploitation will change with AI. Naturally, the vulnerability research industry, as a subset of CNE, will change with it. The kind of VR talent that dominated the industry for the last ten years might not be the talent that carries the industry forward into the next ten years. The marketplace constructed by these old modes of business must also necessarily change.

The future of the marketplace, which is a subject worthy of extended thought and further research, can and should be considered through the new lens of the half-day.

Half-days are as valuable as the 0-day they would normally be for a brief window of time (Figure 3). Therefore, rapid production and deployment of half-days is critical; automation is no longer a “nice to have.” It is necessary. Offensive researchers will need to assume competitors, adversaries, and defensive teams at the manufacturer will all find and potentially patch the exploit very soon after discovery. The window to use the exploit is short, and will ever shorten. This causes turmoil in the marketplace because the days of exquisite, hand-crafted exploits are dead or numbered. This represents a massive change for not only vulnerability suppliers, but also their offensive customers.

![](https://storage.ghost.io/c/03/11/03117d5a-f104-460a-8d3b-19cf9de84fa6/content/images/2026/08/image.png)

Figure 3: Illustrating half-day utility for a brief period functionally remains comparable to the 0-day it would be (Source: Margin Research)

At the same time, defensive teams will approach the risks of the half-day through a more traditional technical lens. They now face a mountain of technical debt built up over decades without any (current) clear path towards automating patches that could reliably keep pace with automated vulnerability discovery. It is also unclear how many of the vulnerabilities produce impactful exploits, thus patching only the relevant CVEs all the more challenging. Highlighting this problem, [Apple recently announced a pause on their bug bounty program](https://www.ft.com/content/4532122d-90f2-4433-9df6-ca99d8a141d2?syn-25a6b1a6=1&ref=margin.re). This is likely only the beginning of massive change to the defensive industry as well.

* * *

## Conclusion

Unsurprisingly, the introduction of the half-day implies significant change to the way we approach research and offensive cyber operations. Timelines will shorten. Marketplace strategies will shift. While there are always exceptions, the industry ideal of the lone hacker single-handedly finding and perfecting a high-value exploit with a massive payday is likely no longer a viable business strategy. Hackers will need to find ways to form cohesive teams and long-term strategies rather than loose coalitions of individual researchers. Likewise, offensive customers will have to find new ways of managing risk on a compressed timeline. Assuming the magic solution to vulnerability discovery does not exist, they will need to find a way to partner more closely with broader industry instead of asking for rocks from a small, exclusive pool of suppliers.

The introduction of the half-day provides us as an industry with a framework and common language around which we continue to work. In fact, I see this as the natural evolution of our research. Likewise, I happen to believe that the skills of vulnerability researchers will become increasingly important as AI ingests the building blocks of our world. By accepting the risks of the half-day, those of us in industry can use our creativity to imagine different and new ways to protect the West while waging the most effective cyber campaigns possible against the adversary.

Indeed, I am excited to continue to ride the VR roller coaster, even with the addition of AI to our party. Long live the half-day…. For however long that may be.

* * *

Claudia d’Antoine is the CEO of Margin Research. Her research interests include the economics of the cybersecurity market, particularly supply chain risk and the subsequent national security implications of offensive cyber work. She is passionate about advocating for the larger cyber community. She has a BA from Duke and a MD from UW-Madison.

{% endraw %}
