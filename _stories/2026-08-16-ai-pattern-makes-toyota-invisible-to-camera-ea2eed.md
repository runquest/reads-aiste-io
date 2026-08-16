---
layout: "story"
title: "AI Pattern Makes Toyota Invisible to Camera"
date: "2026-08-16"
permalink: "/2026/08/16/stories/ai-pattern-makes-toyota-invisible-to-camera-ea2eed/"
slug: "ai-pattern-makes-toyota-invisible-to-camera-ea2eed"
source: "MyClaw Newsletter"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://newsletter.myclaw.ai/unsubscribe/?uuid=2eaf3154-2af3-4e54-b574-fba62b0fa39d&amp;key=dc9420fa06ad8715ca418803968586b4a3d508870a709a3c794ae1e1640114bf&amp;newsletter=98c25587-e84c-44c2-84de-1f862d1ace82"
original_url: "https://newsletter.myclaw.ai/r/672fd284?m=2eaf3154-2af3-4e54-b574-fba62b0fa39d"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Cybersecurity researcher Bill Swearingen wrapped a Toyota Yaris in an AI-generated adversarial pattern and drove it past a Flock surveillance camera at Def Con. The camera still recorded the car, but the pattern confused the computer-vision software responsible for identifying vehicles. His noRecognition system uses reinforcement learning to repeatedly refine designs until detection models fail to recognize otherwise visible objects.

---

*   [AI](https://www.techspot.com/category/ai/)
*   [Tech Culture](https://www.techspot.com/category/culture/)
*   [flock](/tag/flock/)
*   [privacy](/tag/privacy/)

# A cybersecurity researcher covered a Toyota in an AI-generated pattern to confuse Flock cameras

## The demonstration tested whether adversarial design can defeat computer-vision algorithms

_By [Skye Jacobs](https://www.techspot.com/community/staff/skye-jacobs.149167/) August 10, 2026, 11:11 [43 comments](#commentsOffset) [Add TechSpot](https://www.google.com/preferences/source?q=https://www.techspot.com "Add TechSpot as a preferred source to see more of our stories on Google")_

 [![A cybersecurity researcher covered a Toyota in an AI-generated pattern to confuse Flock cameras](https://www.techspot.com/images2/news/bigimage/2026/08/2026-08-10-image-18.jpg)](https://www.techspot.com/images2/news/bigimage/2026/08/2026-08-10-image-18.jpg)

Serving tech enthusiasts for over 25 years.  
TechSpot means tech analysis and advice [you can trust](https://www.techspot.com/ethics.html).

**What just happened?** Bill Swearingen's noRecognition project is testing whether computer-generated patterns can interfere with software used to identify people, vehicles, and other objects on surveillance cameras. The project received its first public test Friday at the Def Con cybersecurity conference in Las Vegas. Swearingen worked with Donut Media to cover a 2009 Toyota Yaris with one of his patterns and drive it past a Flock camera. "We proved it was effective," Swearingen, a cybersecurity professional and founder of SIXCYBER, told TechCrunch.

Donut Media plans to release video of the test in the coming weeks.

The [pattern](https://techcrunch.com/2026/08/09/this-adversarial-pattern-can-prevent-surveillance-cameras-from-detecting-you/) does not stop a camera from recording. Instead, it is designed to prevent the software connected to the camera from recognizing what it sees. A person or car wearing the pattern would still appear in the footage, but the detection system may not flag it as a person or vehicle.

That is the central idea behind [noRecognition](https://sandbox.norecognition.org/). Swearingen wants to make it harder for automated camera systems to track people in public spaces. He said the project is intended to give people a way to "opt out of being tracked."

"Privacy is a fundamental right," Swearingen said.

Swearingen has spent the past year building and testing the system from his home in Kansas City. He said he has run about 31 million tests so far. The work began as a small test lab aimed at defeating individual open-source object-detection algorithms. It later evolved into a reinforcement learning model that can generate and improve patterns on its own.

#### // Related Stories

*   [License plate readers can now track your phone too, thanks to new surveillance tech](https://www.techspot.com/news/113442-license-plate-readers-can-now-track-phone-thanks.html)
*   [Flock's biggest investor also backs a company that can rewrite camera footage](https://www.techspot.com/news/113395-flock-biggest-investor-also-backs-company-can-rewrite.html)

He described the process as teaching the model "how to paint."

The model tests a pattern against camera-detection software. If the software can still identify the object covered by the pattern, the system adjusts it and tries again. Over time, it learns which visual elements are more likely to confuse the algorithms.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%209'%3E%3C/svg%3E)](https://www.techspot.com/images2/news/bigimage/2026/08/2026-08-10-image-19.jpg)

Swearingen said the model has produced patterns that can defeat all 11 open-source detection algorithms he tested. Those include software used in systems associated with Flock license plate readers, Axon body cameras, and Clearview AI. He said the model now produces new patterns every minute, adding that each unsuccessful test gives it more data and allows it to generate more effective patterns over time.

The technology falls into a category often called adversarial machine learning. It relies on the fact that computer-vision systems do not interpret images the same way people do. A pattern that looks like an unusual design to a person may cause a detection model to misclassify an object or fail to identify it altogether.

The approach differs from efforts to physically block cameras. noRecognition is not designed to hide someone from view or interfere with the camera itself. Instead, it targets the software layer that processes video, reads license plates, and identifies faces or objects.

That software has become a standard feature of many camera networks. Law enforcement agencies use it to search footage and identify vehicles or people of interest. Private companies and local governments also use automated detection tools across parking lots, streets, and other public places.

These systems can process far more video than a person could review manually. But they have also drawn scrutiny over errors and the consequences of inaccurate matches. Swearingen said his concerns about the spread of surveillance cameras helped motivate the project.

He said he noticed the density of cameras in his hometown of Kansas City and began thinking about how difficult it would be to avoid automated tracking. He also said he felt uneasy about attending a protest last year because of the possibility that cameras could track participants.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%209'%3E%3C/svg%3E)](https://www.techspot.com/images2/news/bigimage/2026/08/2026-08-10-image-20.jpg)

Artists and clothing makers have previously tried to develop designs that confuse facial-recognition systems. Swearingen said that work helped demonstrate that such methods were possible. His project focuses on using a model to create and refine patterns at a much larger scale.

noRecognition is also running a [crowdfunding campaign](https://www.kickstarter.com/projects/norecognition/norecognition-ai-adversarial-clothing) for clothing printed with the patterns, including T-shirts and hoodies. Swearingen said vehicle skins could follow. He said the goal is to make the patterns large and clear enough to work at a distance without making the clothing impractical to wear or the skins impractical to use.

He is keeping his strongest patterns private for now, saying he does not want camera companies to quickly develop defenses against them.

Image credit: Donut Media

[43 comments 19K likes and shares](#commentsOffset)

Share this article:

[

](<https://www.reddit.com/submit?url=https://www.techspot.com/news/113418-cybersecurity-researcher-covered-toyota-ai-generated-pattern-confuse.html&title=A cybersecurity researcher covered a Toyota in an AI-generated pattern to confuse Flock cameras>)[

](#Share)

**See more TechSpot in Google** Add us as a preferred source and our reporting shows up first when you search.

[Add TechSpot](https://www.google.com/preferences/source?q=https://www.techspot.com "See more TechSpot stories on Google Search")

### Featured on TechSpot

*   [
    
    The biggest AI risk in schools isn't cheating – it's losing the desire to learn
    
    ](https://www.techspot.com/news/113455-godmother-ai-biggest-ai-risk-schools-isnt-cheating.html)
*   [
    
    Workers at OpenAI, Anthropic, and Meta say AI is making their jobs harder, not easier
    
    ](https://www.techspot.com/news/113434-workers-openai-anthropic-meta-ai-making-their-jobs.html)

 

[Most Popular](/trending/)

*   [30 comments](https://www.techspot.com/news/113420-farmer-trusted-ai-after-gave-good-advice-helped.html#commentsOffset)
    
    [
    
    Farmer trusted AI after it gave good advice, then it helped wipe out 25 acres of his crops
    
    ](https://www.techspot.com/news/113420-farmer-trusted-ai-after-gave-good-advice-helped.html)
*   [17 comments](https://www.techspot.com/news/113472-anthropic-claude-tried-solve-riemann-hypothesis-found-something.html#commentsOffset)
    
    [
    
    Anthropic's Claude tried to solve the Riemann hypothesis and found something new instead
    
    ](https://www.techspot.com/news/113472-anthropic-claude-tried-solve-riemann-hypothesis-found-something.html)

{% endraw %}
