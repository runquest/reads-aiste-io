---
layout: "story"
title: "A peek into reddit's anti-spam internals"
date: "2026-08-09"
permalink: "/2026/08/09/stories/a-peek-into-reddit-s-anti-spam-internals-25ae89/"
slug: "a-peek-into-reddit-s-anti-spam-internals-25ae89"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22860/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
A bug in Reddit's spam filter briefly exposed internal removal reasons to a moderator in 2021. The leaked messages revealed several tools Reddit uses behind the scenes, including Google's Perspective API for spam scoring, a rules engine called Spamurai, domain bans, and even URL inspection that scans linked pages for known spam patterns.

---

@scope { @media (width >= 720px) { @supports (anchor-name:--supports) { & { position: absolute; width: 300px; top: anchor(--mod top); right: anchor(--mod right); } } } & { padding: 8px; padding-top: 6px; border-radius: 3px; } &:not(:has(input:checked)) #sent { display: none; } h1 { display: inline; margin: 0; color: gray; font-family: inherit; font-size: 130%; font-weight: normal; } ul { margin: 0; padding: 5px; border: 1px solid gray; font-size: larger; list-style: none; } .message-button { padding: 5px 0 10px; text-align: center; label { display: inline-block; font-weight: bold; cursor: pointer; border: 1px solid transparent; padding: 4px 12px 3px; line-height: 20px; border-radius: 3px; -webkit-user-select: none; user-select: none; background-color: #4f86b5; border-bottom: 2px solid #4270a2; color: #FFF; text-decoration: none; &:hover, &:active { background-color: #4980ae; } &:active { border-bottom-width: 1px; margin-top: 1px; } } } a { cursor: pointer; } --b:-1; .more { --a: calc(var(--c, 0) + 1); --o: 0; a { color: gray } animation: x 1ms infinite, y 1ms infinite; animation-play-state: paused, paused; &:has(a:first-child:active) { animation-play-state: running, paused; } &:has(a:last-child:active) { animation-play-state: paused, running; } a:last-child { display: none; } @container style(--a > --b) { a:first-child { display: none; } a:last-child { display: block; } a::after { --o: 0; } } @container style(--a = --b) { a::after { --o: 1; } } margin-top: 5px; text-align: right; font-size: smaller; a::after { counter-reset: a calc(var(--a) \* 2 + var(--o) + 17); content: counter(a) " more »"; @container style(--a > 2) { white-space: pre-wrap; content: counter(a) " more ?"; } @container style(--a > 10) { white-space: pre-wrap; content: counter(a) " more ??"; } @container style(--a > 25) { white-space: pre-wrap; content: counter(a) " more ???"; } @container style(--a > 55) { white-space: pre-wrap; content: 'Exception in thread "main" java.lang.ArithmeticException: ' counter(a) ' is out of range\\a at lyra.horse.blog.posts.RedditPost.increaseCounter(RedditPost.java:385)\\a at lyra.horse.blog.Main.POST\_REQUEST(Blog.java:53)\\a at lyra.horse.blog.Main.serve(Blog.java:103)'; } @container style(--a > 65) { white-space: pre-wrap; content: 'Exception in thread "main" java.lang.ArithmeticException: ' counter(a) ' is out of range\\a at lyra.horse.blog.posts.RedditPost.increaseCounter(RedditPost.java:385)\\a at lyra.horse.blog.Main.POST\_REQUEST(Blog.java:53)\\a at lyra.horse.blog.Main.serve(Blog.java:103)\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a '; } @container style(--a > 80) { position: fixed; width: 100vw; height: 100lvh; top:0; left: 0; padding:64px; background: #000; z-index: 10; color: #F00; box-sizing: border-box; white-space: pre-wrap; content: 'Exception in thread "main" java.lang.ArithmeticException: ' counter(a) ' is out of range\\a at lyra.horse.blog.posts.RedditPost.increaseCounter(RedditPost.java:385)\\a at lyra.horse.blog.Main.POST\_REQUEST(Blog.java:53)\\a at lyra.horse.blog.Main.serve(Blog.java:103)\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\\a Segmentation fault (core dumped)\\a root@lyra.horse #'; } } } } @property --a { syntax: "<integer>"; initial-value: 0; inherits: true; } @keyframes x { 0%, 100% { --c: var(--b, 0); } } @keyframes y { 0%, 100% { --b: var(--a, 0); } }

# MODERATORS

*   MESSAGE THE MODS
*   message sent.
*   Orschmann
*   optimistic\_outcome
*   Chinch335
*   IllusionOf\_Integrity
*   spokesthebrony
*   TheeLinker
*   Lankygit
*   Raging\_Mouse
*   Searchbar\_Trixie
*   gbeaudette
*   ...and ...and

{% endraw %}
