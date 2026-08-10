---
layout: "story"
title: "Two-way doors sometimes lock behind you"
date: "2026-08-09"
permalink: "/2026/08/09/stories/two-way-doors-sometimes-lock-behind-you-c60ea6/"
slug: "two-way-doors-sometimes-lock-behind-you-c60ea6"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22905/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
- Reversible technical decisions become costly to undo as systems accumulate dependencies
- Optionality requires active maintenance and intentional design
- Suggests documenting assumptions, estimating migration costs, and testing exit plans

---

# Two-way doors sometimes lock behind you

### Reversible decisions are sometimes not static!

[

![Jeff's avatar](https://substackcdn.com/image/fetch/$s_!yooQ!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0d36cde2-1f67-4ed9-9f57-b7927391b873_1024x1024.png)



](https://substack.com/@fffej)

[Jeff](https://substack.com/@fffej)

Jul 27, 2026

8

Share

You need to make a technical decision between choice A and choice B. Let’s make it for something ubiquitous like feature flags. Someone pipes up with the Bezos style “it’s a [reversible decision](https://fs.blog/reversible-irreversible-decisions/)”. You convince yourself it’s true and that undoing the decision is low-risk and maybe just a couple of days work. Somewhere there’s an ADR with:

> Consequences: Low risk. This is a two-way door decision. Feature flags are just booleans behind a function call. If this provider disappoints then swapping back is _just_ a couple of days work.

That might have been true the day it was written, but it’s probably not true now.

[

![](https://substackcdn.com/image/fetch/$s_!acje!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8e37eb8-5eab-4955-8347-c90e36b0d080_1024x559.jpeg)



](https://substackcdn.com/image/fetch/$s_!acje!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8e37eb8-5eab-4955-8347-c90e36b0d080_1024x559.jpeg)

Gemini: Make a cartoon illustrating this blog post

## Choices often go beyond code.

At first things go well, developers are getting in the habit of using the new feature flag system. But as the system continues to evolve, those flags stop just being feature flags. The product folks have decided to use feature flags as a feature gate. The data science folks are using them for A/B testing. The homebrew release system has hooked into it. The analytics dashboard reads state from the feature flag system’s API.

Replacing it in the code continues to be simple. Replacing it in the system as a whole now turns out to be much more involved.

## Reversibility is an option; options have a price

A reversible decision is an option you are holding: the right (not the obligation) to switch later when you know more. This is a real asset! However, the mistake is assuming that the asset is durable.

In finance terms, an option is where you pay some money today for the right to do something later, but with no obligation to do so. A call option lets you buy a share at a fixed price at some point in the future. You might execute this option if the price soars, but if the shares tank you don’t have to.

In finance, the strike price is fixed in the contract. The technology argument about options borrows this, but it doesn’t translate. The exercise price of a technical exit is not fixed. It’s set by how you have used the thing since you adopted it, and it can only move in one direction.

Each time a dashboard hooks into the feature flag system, or an engineer learns the query language, then that raises the strike price. You aren’t holding an option with a fixed exercise price. You are holding an option whose strike only ever goes up.

Technical debt compounds through interest you don't notice until the invoice arrives. Reversibility debt compounds the same way: the strike price moves every time someone builds on top of the thing, and you don't find out how far until you try to exercise.

Thanks for reading JoT! Subscribe for free to receive new posts and support my work.

Subscribe

## Optionality is maintained, not owned

Maintaining optionality has a cost. If you want to maintain a third-party, then perhaps the cost is the independence layer you write in. Perhaps it means you have to deliberately limit which parts of the platform you adopt to maintain optionality?

Either way, you must account for it. If Claude were writing this, it’d be about to tell you that a two-way door decision is _load-bearing._ I won’t do that, I’ll tell you that optionality isn’t a point in time decision, it’s something that must be maintained.

## This applies everywhere

Once you see this shape of a decision, you’ll start to see it in all the infrastructure services you use.

Cloud services - They are all the same right? We’ll spin up Docker and just use the standard bits. An easy decision to reverse. Until you start binding to the managed queue services, or the identity aware proxy or the proprietary serverless runtime. Genuine portability survives only if you refuse to touch the opinionated bits, which is the same as refusing the reason you chose to use the platform!

CI/CD servers - Again, how hard can it be to be portable? It’s just running `./build-and-test.sh` right? That’s until you start fanning out runs across multiple machines, configuring permissions and then using the fancy-pants “run only the tests that should be run” features and your teams become dependent on them.

Observability - It’s fine; you’re using OTEL. Just change later! Until you’ve got a huge stack of dashboards and alerts written in a language with no portability. Changing your o11y stack now goes well beyond the code.

## What to do instead?

*   **Name the assumptions in your ADR** - When you’re making a choice, state what makes it reversible. Going back to our feature flag example, maybe we say that no service may read flag state directly. Sure, that makes it a pain in the ass, but it preserves the optionality.
    
*   **Price the option and revisit** - You don’t need something exact here, just a number and a direction of travel. Once you’ve got that you can revisit every so often and adjust.
    
*   **Test the exit -** You might think changing provider is just a case of a data export and reimport, but is it? Prove it!
    
*   **Let low-value options expire -** Preserving optionality has a cost, and it’s not always worth maintaining. If the choice is a hard to maintain two-way door decision, or a one-way door with known consequences then sometimes it’s worth shutting the door after you (”we are going all in on XYZ, it’ll become integral to our platform. Leaving XYZ will be a huge effort, but we accept the risk in favour of speed”).
    

## Conclusion

“We can always migrate later” is not a static property of the system. Two-way doors don’t magically stay open; they require constant effort.

Don’t pretend they don’t.

8

Share

{% endraw %}
