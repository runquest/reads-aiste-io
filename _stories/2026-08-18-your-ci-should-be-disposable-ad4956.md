---
layout: "story"
title: "Your CI should be disposable"
date: "2026-08-18"
permalink: "/2026/08/18/stories/your-ci-should-be-disposable-ad4956/"
slug: "your-ci-should-be-disposable-ad4956"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=628b18d2-9adf-11f1-bae4-71822976f536%26pt=campaign%26pv=4%26spa=1787047262%26t=1787051120%26s=3bed3882741844969eb7d2899755ffc6f32a5145685800390800084b1dae6321/1/010001a0148c188a-f2b05004-4bba-4cc8-9691-aa292b17c31f-000000/5VJMhEhrudjaeqqwCNFUkTQihWsJXrTa4IcEisNmxMY=452"
original_url: "https://oppi.li/posts/disposable_ci/?utm_source=tldrnewsletter"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
CIs have one job: scheduling.

---

Your CI should be disposable

[Home](/) / [Posts](/posts) / [Your CI should be disposable](#)18/08/2026

# Your CI should be disposable

Your CI should have one job: scheduling. It should decide _when_ to do the thing. Your builds itself, should be controlled by you. Use Docker, Nix, a Makefile or what have you. The ideal workflow file looks like this:

```
steps:
    name: Do the thing
     run: nix build .#
```

This way, you can always run your CI locally, its just one command after all.

Don't use CI as a way to install packages, compilers, shared libraries, toolchains. _Do_ use it to schedule builds.

The next time GitHub Actions goes down, you'll still be able to deliver your software. Consider [an alternative](https://tangled.org) though.

{% endraw %}
