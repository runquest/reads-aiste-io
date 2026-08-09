---
layout: "story"
title: "Broker-visible vs client-local parallelism"
date: "2026-08-09"
permalink: "/2026/08/09/stories/broker-visible-vs-client-local-parallelism-169f80/"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22764/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Kafka"
excerpt_separator: ""
---

{% raw %}
Share groups in Kafka are designed to add queue-like behavior to a log, not primarily to parallelize work. To figure out how much parallelism you need, Jack suggests multiplying your message rate by average processing time. If each unit of parallelism maps to a broker-managed consumer, costs grow fast. Keeping parallelism on the client side through virtual threads or async tasks is cheaper and requires far fewer connections.

---

[Jack Vanlightly](/?author=56894e5669a91ac1e4c9ec1b)

[June 4, 2026](/blog/2026/6/3/broker-visible-vs-client-local-parallelism)

[Messaging Systems](/blog/category/Messaging+Systems), [Kafka](/blog/category/Kafka)

# [Broker-Visible vs Client-Local Parallelism](/blog/2026/6/3/broker-visible-vs-client-local-parallelism)

[Jack Vanlightly](/?author=56894e5669a91ac1e4c9ec1b)

[June 4, 2026](/blog/2026/6/3/broker-visible-vs-client-local-parallelism)

[Messaging Systems](/blog/category/Messaging+Systems), [Kafka](/blog/category/Kafka)

_This post is a little side-quest from my “Kafka Share Groups and Parallelizing Consumption” series._

My “Kafka Share Groups and Parallelizing Consumption” series ([part 1](/blog/2026/5/25/kafka-share-groups-and-parallelizing-consumption-part-1-tuning-maxpollrecords), [part 2](/blog/2026/5/27/kafka-share-groups-and-parallelizing-consumption-part-2-producer-batches-and-shareacquiremode)) has been laser focused on how different configurations and behaviors affect parallel consumption in share groups (Queues for Kafka). **So far I’ve shown that you most definitely can hold share groups wrong**. You could quite easily and inadvertently create a work queue and with the right combination of things going against you, see a small number of consumers dominate, leaving most consumers starved of messages. All the while lag builds and builds. You need to know the settings and what they do. Don’t just rely on the defaults.

But it’s worth asking the question: **is parallelizing consumption what share groups are for?**

The answer is no.

If your only concern is parallel consumption, then there are other options. Chuck Larrieu Casias wrote a [good post](https://www.linkedin.com/posts/charles-larrieu-casias_not-sure-why-this-narrative-is-being-pushed-share-7467249003710103552-JqUw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAphmqEBRzO76Lh0wv4Nq6eOgAqjTl076zY) on LinkedIn pointing out that people shouldn’t be thinking of share groups as THE solution to parallelizing work (without exploding the partition count).

Share groups exist to expose queue-like semantics over a log. Unlike a normal consumer group, a share group lets you accept one record and reject another for retry. A consumer group tracks one committed offset per partition. A share group has to track many individual records independently: which records are available, which have been delivered (to whom), which have been acknowledged, and which should become available again.

But just because share groups don’t exist primarily to parallelize work doesn’t mean it’s not a tool that can be used for that purpose. If your messages are independent or you are otherwise ok with loose ordering then share groups could be a simple choice for breaking away from partition count as the unit of parallelism.

The central theme I took from Chuck’s post is that parallelism has to be accounted for _somewhere_. The unit of parallelism can be broker-visible and broker-managed, or client-local and client-managed. Broker-visible/managed can only take you so far.

## Where should your unit of parallelism live?

When you need to process 1,000 messages in parallel to cope with the producer rate, what represents those 1,000 parallel units of work? Is it partitions, consumers, virtual threads/async tasks?

If the unit of parallelism is the consumer itself then we must scale out serial consumers to scale the parallel processing (with a matching partition count with consumers groups). Every parallel unit of work (consumer) becomes visible to the broker as protocol interactions and state plus one or more TCP connections.

If parallelism comes in part from the client itself, the unit of parallelism could be a virtual thread, an async task or even an OS thread. This is invisible to the broker. You need fewer consumers, fewer TCP connections, and less broker-visible protocol interaction/state. 

This split of where the unit of parallelism is accounted for, broker-side vs client-side, exists across all messaging systems. It’s not specific to Kafka.

## How many units of parallelism?

A simple calculation for aggregate parallelism is easy:

`aggregate parallelism = rate * avg processing time in seconds` code { font-size: 75% !important; }

*   60000 msg/s \* 1s = 60000
    
*   60000 msg/s \* 5s = 300000
    
*   100 msg/s \* 20s = 2000
    
*   10000 msg/s \* 0.5s = 5000
    
*   50 msg/s \* 5s = 250
    

Once you know how many messages must be processed in parallel, you can figure out your tactics. The formula tells you how much parallelism you need, then it’s up to you to figure out where that parallelism should live.

Let’s use our 60,000 messages per second workload from the share group series. If it takes 1 second to process each message, then we need to support 60,000 messages being processed at any given moment. If each unit of parallelism is a serial consumer, then that means 60,000 consumers! That’s a lot of connections, a lot of protocol state, and a really big consumer group.

What if it takes 10 seconds on average to process a message, you’d need 600,000 consumers, and well over 1 million TCP connections!

If most of the work is I/O, and the CPU spends a lot of time waiting around then can’t we make a single client do more work? What if one client can handle processing 1000 messages in parallel? Then we’d only need 60 consumers for the “60K msg/s + 1 second processing time” example. 

View fullsize

![](https://images.squarespace-cdn.com/content/v1/56894e581c1210fead06f878/15c82b4f-01b4-4827-be58-9b7c2e663f8d/parallel-serial-small.png)

_Fig 1. Left: Parallel work across N serial consumers. Right: Parallel work across N parallel-capable consumers._

## Takeaway

If the ultimate unit of parallelism is visible to the broker as something it must manage, it can get really expensive in resources for highly parallel workloads (no matter which messaging system you use). Managing virtual threads, or even OS threads, is much cheaper than managing one or more TCP connections + metadata per unit of parallelism. This is true of all messaging systems I have ever used. The cost is greater complexity on the client, but if you don’t want to roll your own logic, there are libraries to help here (see Chuck’s post for some). Unfortunately, the [ParallelConsumer](https://github.com/confluentinc/parallel-consumer) library is no longer being maintained (though a [fork](https://github.com/astubbs/parallel-consumer) might be in the future). This library not only added internal client-side parallel processing but queue semantics as well (on top of consumer groups). Now that we have share groups, perhaps we need a new library that adds client-side parallelism to share groups.

I’m going back to writing Part 3 of my parallelism in share groups series. We’ll be comparing broker-managed vs client-managed parallelism with share groups and consumer groups.

{% endraw %}
