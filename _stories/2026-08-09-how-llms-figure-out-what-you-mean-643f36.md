---
layout: "story"
title: "How LLMs figure out what you mean"
date: "2026-08-09"
permalink: "/2026/08/09/stories/how-llms-figure-out-what-you-mean-643f36/"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22858/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "AI"
excerpt_separator: ""
---

{% raw %}
An AI can't work with raw text, so it converts each word into a list of numbers called a vector. Think of each vector as an arrow, where words with similar meanings point in similar directions. The model then scores how closely any two arrows align and converts those scores into percentage weights, showing how much attention each word pays to every other word.

---

How LLMs Figure Out What You Mean - No Math Degree Required – Zarar's blog                      { "@context": "http://schema.org", "@type": "article", "name": "How LLMs Figure Out What You Mean - No Math Degree Required", "headline": "How LLMs Figure Out What You Mean - No Math Degree Required", "url": "https://zarar.dev/how-ai-figures-out-what-you-mean-no-math-required/", "description": "Words become numbers, numbers become arrows, and the model measures which ones relate.", "image": "https://bear-images.sfo2.cdn.digitaloceanspaces.com/zarar/image-1.webp" }   /\* ===== PaperMod-style theme for Bear Blog ===== \*/ :root { --width: 720px; --radius: 8px; --font-main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; --font-secondary: var(--font-main); --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; --font-scale: 18px; /\* PaperMod light palette \*/ --background-color: #fff; /\* page \*/ --entry: #fff; /\* cards \*/ --heading-color: rgb(30, 30, 32); /\* --primary \*/ --text-color: rgb(31, 31, 31); /\* --content \*/ --secondary: rgb(108, 108, 108); --border: rgb(238, 238, 238); --link-color: rgb(30, 30, 32); --accent: #2563b8; /\* body-link accent \*/ --visited-color: rgb(108, 108, 108); --code-background-color: rgb(245, 245, 245); --code-color: rgb(31, 31, 31); --blockquote-color: rgb(108, 108, 108); } @media (prefers-color-scheme: dark) { :root { --background-color: rgb(29, 30, 32); --entry: rgb(46, 46, 51); --heading-color: rgb(218, 218, 219); --text-color: rgb(196, 196, 197); --secondary: rgb(155, 156, 157); --border: rgb(51, 51, 51); --link-color: rgb(218, 218, 219); --accent: #6cb6ff; --visited-color: rgb(155, 156, 157); --code-background-color: rgb(55, 56, 62); --code-color: rgb(218, 218, 219); --blockquote-color: rgb(155, 156, 157); } } body { font-family: var(--font-main); font-size: var(--font-scale); line-height: 1.65; max-width: var(--width); margin: auto; padding: 20px; color: var(--text-color); background-color: var(--background-color); -webkit-font-smoothing: antialiased; } h1, h2, h3, h4, h5, h6 { font-family: var(--font-main); color: var(--heading-color); font-weight: 700; line-height: 1.3; } /\* ===== Header: logo left, nav right ===== \*/ header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 16px; padding: 14px 0 18px; margin-bottom: 24px; border-bottom: 1px solid var(--border); } header .title { text-decoration: none; } header .title h1 { font-size: 1.4rem; font-weight: 700; margin: 0; } header nav p { margin: 0; } header nav a { color: var(--secondary); font-size: 1rem; font-weight: 500; margin: 0 0 0 14px; text-decoration: none; } header nav a:hover { color: var(--heading-color); text-decoration: none; } /\* ===== Links ===== \*/ a { color: var(--link-color); text-decoration: none; text-underline-offset: 3px; } a:hover { text-decoration: underline; } main { line-height: 1.65; } /\* Body content links: accent + underline so they're distinct from text. Card titles (ul.blog-posts li a) keep their own heading style below. \*/ main p a, main li a, main td a, main blockquote a, main h2 a, main h3 a, main h4 a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; } main p a:visited, main li a:visited { color: var(--accent); } main p a:hover, main li a:hover { text-decoration-thickness: 2px; } /\* ===== Post list as PaperMod cards ===== \*/ ul.blog-posts { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; } ul.blog-posts li { display: flex; flex-direction: column; gap: 6px; padding: 22px 24px; background: var(--entry); border: 1px solid var(--border); border-radius: var(--radius); transition: transform 0.1s, box-shadow 0.1s; } ul.blog-posts li:hover { box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1); } /\* title first, date below (override Bear's date-first flex row) \*/ ul.blog-posts li a { order: 1; flex: none; font-size: 1.35rem; font-weight: 700; color: var(--heading-color); line-height: 1.35; text-decoration: none; } ul.blog-posts li a:visited { color: var(--heading-color); } ul.blog-posts li a:hover { text-decoration: underline; color: var(--heading-color); } ul.blog-posts li span { order: 2; flex: none; } ul.blog-posts li time { font-family: var(--font-main); font-style: normal; font-size: 0.85rem; color: var(--secondary); } ul.blog-posts li i { font-style: normal; } /\* ===== Single post ===== \*/ main > h1 { font-size: 2rem; line-height: 1.2; margin: 8px 0 4px; } main > p > i > time { font-family: var(--font-main); font-style: normal; font-size: 0.85rem; color: var(--secondary); } /\* ===== Code ===== \*/ code { font-family: var(--font-mono); font-size: 0.8em; padding: 2px 5px; background-color: var(--code-background-color); color: var(--code-color); border-radius: 5px; } .highlight, .code, pre { font-family: var(--font-mono); font-size: 0.8rem; /\* ~14px block code, was inheriting 18px \*/ padding: 14px 18px; background-color: var(--code-background-color); color: var(--code-color); border-radius: var(--radius); overflow-x: auto; line-height: 1.55; } pre code, .highlight code, .code code { padding: 0; background: none; font-size: inherit; /\* don't double-shrink inside blocks \*/ } /\* ===== Misc ===== \*/ blockquote { border-left: 3px solid var(--border); color: var(--blockquote-color); padding-left: 18px; margin-left: 0; font-style: italic; } img { max-width: 100%; border-radius: var(--radius); } hr { border: 0; border-top: 1px solid var(--border); margin: 28px 0; } footer { padding: 30px 0; margin-top: 40px; border-top: 1px solid var(--border); text-align: center; color: var(--secondary); font-size: 0.85rem; } footer a { color: var(--secondary); } .upvote-button { padding: 0; margin: 0; border: 0; background-color: inherit; color: inherit; display: flex; flex-direction: column; align-items: center; } .upvote-button.upvoted { color: salmon; } .upvote-count { margin-top: -3px; }

[

# Zarar's blog

](/)

[Home](/) [Me](/me/) [Internet Comments](/internet-comments/) [Subscribe](/subscribe/)

# How LLMs Figure Out What You Mean - No Math Degree Required

_03 Jul, 2026_

When you type a sentence into an AI, how does it figure out what you mean? In "Do lions roar?", how does it know that "roar" goes with "lions" and not with "Do"?

This post walks that whole path with no heavy math. We'll follow "Do lions roar?" from raw text all the way to the model deciding how each word relates to every other word in that three-letter sentence. Along the way we'll turn words into numbers, picture those numbers as arrows, measure how "close" two arrows are, and finally use that closeness to figure out how words relate to each other. By the end you'll have a clear mental picture of how an LLM reads a sentence and works out how the words relate.

## Part 1: Words become numbers

A model can't do anything with letters as underneath the hood, it's all math, so before it can reason about a sentence, every word has to become a number, and then something richer than a number. This happens in two steps.

*   Take a sentence: "Do lions roar?". Each word is a **token** (we are ignoring the question mark in this post, and more on that later).
*   The model swaps each word for a plain number, its **token id**: Do → 1, lions → 2, roar → 3.
*   Each token id then becomes a **vector**, which is just a list of numbers: 1 → \[.056, .089, .034\], and so on for the rest.

Why bother with a vector and not just leave the words as 1, 2, 3? Because a single number carries no meaning. Nothing about the number 2 ("lions") says it's any closer to 3 ("roar") than to 99. A vector fixes this by giving each word a whole list of numbers instead of one, and each slot in that list can later capture a little meaning. Words that mean similar things end up with similar lists, and that is what finally lets us compare them.

How long is that list? It can have as many slots (dimensions) as you like. More slots means more room to store meaning, which makes the model more precise. We're using three here to keep things readable (e.g., \[.056, .089, .034\]), but real models use hundreds or thousands.

![image](https://bear-images.sfo2.cdn.digitaloceanspaces.com/zarar/image-1.webp)

## Part 2: The goal is to model relationships

Numbers on their own don't tell us much. The interesting question isn't "what number is 'lions'?" but "how does 'lions' relate to the words around it?"

*   What we actually want is how the words connect: "Do" vs "lions", "Do" vs "roar", "lions" vs "roar".
*   So the real question becomes: how "close" is one word's vector to another's?

To answer that, we lean on one idea from linear algebra: the vector. And the easiest way to get an intuition for a vector is to stop thinking about lists of numbers and start thinking about arrows.

## Part 3: A vector is just an arrow

Think of a vector as an arrow pointing somewhere. Picture a map with a dot in the middle, and an arrow drawn from that dot out to a point. Every word gets its own arrow. Words that mean similar things have arrows that point in similar directions, words that don't point in different directions. Comparing two words becomes as simple as comparing where their arrows point.

*   **Same direction**: the words are related.
*   **Opposite direction** (pointing the reverse way): they mean opposite things.
*   **Right angle** (90°): they have nothing to do with each other and are unrelated.

![image](https://bear-images.sfo2.cdn.digitaloceanspaces.com/zarar/image-2.webp)

## Part 4: Measuring how close two arrows are

"Point the same way" gives us a good intuitive sennse, but LLMs needs an actual number it can work with. That number is the _dot product_.

The dot product is simply a score for how close two arrows are. The bigger the score, the more the arrows point the same way, and the more similar the words.

A good way to feel this is to imagine two people pushing the same shopping cart. If they push in the same direction, their forces add up into one strong push, which is a big score. If they push at an angle to each other, only part of the effort actually helps, so the score is smaller. And if they push against each other, the forces cancel out, giving a negative score.

That's really all you need to know: high score means similar, near zero means unrelated, and negative means opposite.

![image](https://bear-images.sfo2.cdn.digitaloceanspaces.com/zarar/image-3.webp)

For the math-curious, this is the same cosine from the ["cosine law"](https://en.wikipedia.org/wiki/Law_of_cosines) you may have seen in trigonometry, just reused to compare word arrows.

## Part 5: From scores to attention

We now have a closeness score for every pair of words (i.e., the dot product). The problem is that a raw score means nothing on its own. If "roar" and "lions" score an 8, is that a lot? You can't say without seeing how "roar" scores against every other word too. The number only makes sense relative to the rest.

What we really want is a relative measure, i.e., out of all the attention "roar" has to give, what fraction goes to "lions"? A raw dot product can't answer that, so we reshape the scores to answer the question: for each word in the sentence, which other words does it relate to the most, and by how much?

Take "roar". To make sense of it, the model asks _who_ roars? The answer is "lions", not "Do". So "roar" should let "lions" matter a lot and "Do" barely matter at all. Every word does this to every other word: "roar" weighs "lions" and "Do", "lions" weighs "Do" and "roar", and so on across the whole sentence.

To make that usable, we turn each word's raw scores (remember, the dot product) into percentages.

*   Give each word a full pizza.
*   That word gives other words a slice of their pizza. A word close in meaning gets a fat slice and a distant one gets a sliver.
*   Those slices are the _weights_: how much attention one word pays to another, written as a share of the whole.

Another way to picture it: imagine each word has exactly $1 of attention to spend. It hands more of that dollar to the words it's close to and less to the ones it isn't, but it always spends the full dollar, never more and never less. As a side note, this idea of handing out slices (or attention) to other words is known as [_softmax_](https://en.wikipedia.org/wiki/Softmax_function), but the name doesn't matter here.

![image](https://bear-images.sfo2.cdn.digitaloceanspaces.com/zarar/image-4.webp)

One last question: where do the original arrows come from (the one I made up when I wrote \[.056, .089, .034\]? That is beyond the scope of this post, but in general, we pick them first at random, and then the model improves them by reading mountains of text, nudging the numbers over and over until close arrows really do line up with similar meanings. That process is known as _back propagation_ and is a whole post on its own.

If you thought I forgot about the question mark, I didn't. The question mark is also a token, no different than a word and treated in the exact same manner. It also has meaning just like the word and an LLM treats it no different than a word. I just wanted to work with only three words in this post.

    

const $upvoteButton = document.querySelector('.upvote-button'); const $upvoteCount = document.querySelector('.upvote-count') let upvoteToken = ''; fetch('/upvote-info/KmPIizNHXQqudWhwCBDP/').then(response => response.json()).then(data => { $upvoteCount.innerText = data.upvote\_count; upvoteToken = data.token; if (data.upvoted) { $upvoteButton.disabled = true $upvoteButton.style.color = "salmon" $upvoteButton.ariaLabel = "Toasted" $upvoteButton.title = "Toasted" } $upvoteButton.ariaLabel += \` (${data.upvote\_count})\` }); let moved = false; let pageLoaded = Date.now(); document.addEventListener('touchmove', () => moved = true); document.addEventListener('mousemove', () => moved = true); document.querySelector('#upvote-form').addEventListener('submit', (e) => { e.preventDefault(); if (moved) { document.querySelector('input\[name="title"\]').value = ""; document.querySelector('input\[name="token"\]').value = upvoteToken; } if (Date.now() - pageLoaded < 2000 || !moved) { return; } fetch(e.target.action, { method: 'post', body: new FormData(e.target), }); $upvoteButton.disabled = true $upvoteButton.style.color = "salmon" $upvoteButton.ariaLabel = "Toasted" $upvoteButton.title = "Toasted" const newUpvoteCount = \`${(parseInt($upvoteCount.innerHTML.split(" ")\[0\]) + 1)}\` $upvoteCount.innerHTML = newUpvoteCount $upvoteButton.ariaLabel += \` (${newUpvoteCount})\` }); window.addEventListener("load", () => { if (navigator.webdriver !== true) { const sendHit = score => { const params = new URLSearchParams({ blog: "zarar", token: "KmPIizNHXQqudWhwCBDP", referrer: document.referrer.includes("zarar.dev") ? "" : document.referrer, title: "", score: score }); new Image().src = \`/hit/?${params.toString()}\`; }; document.addEventListener('touchmove', () => sendHit(100), { once: true }); document.addEventListener('mousemove', () => sendHit(100), { once: true }); } });

[←](https://xn--sr8hvo.ws/previous) An [IndieWeb Webring](https://xn--sr8hvo.ws) 🕸💍 [→](https://xn--sr8hvo.ws/next)

[Zarar Siddiqi](http://zarar.dev/) ([My Blue Sky](https://bsky.app/profile/zarar.dev)) Powered by [Bear ʕ•ᴥ•ʔ](https://bearblog.dev)

(() => { "use strict"; const times = document.querySelectorAll('time'); const format\_string = "" || "d M, Y" times.forEach(time => { time.innerText = formatDate(time.dateTime, format\_string) }); function formatDate(dateStr, formatStr) { const date = new Date(dateStr); const day = date.getDate(); const month = date.getMonth(); const year = date.getFullYear(); const weekday = date.getDay(); const hours = date.getHours(); const minutes = date.getMinutes(); const monthsFull = \['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'\]; const monthsShort = \['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'\]; const daysFull = \['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'\]; const daysShort = \['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'\]; function getOrdinal(n) { const s = \['th', 'st', 'nd', 'rd'\]; const v = n % 100; return s\[(v - 20) % 10\] || s\[v\] || s\[0\]; } const map = { 'd': () => day.toString().padStart(2, '0'), 'm': () => (month + 1).toString().padStart(2, '0'), 'Y': () => year.toString(), 'y': () => year.toString().slice(-2), 'F': () => monthsFull\[month\], 'j': () => day.toString(), 'D': () => daysShort\[weekday\], 'l': () => daysFull\[weekday\], 'S': () => getOrdinal(day), 'M': () => monthsShort\[month\], 'H': () => hours.toString().padStart(2, '0'), 'h': () => { let h = hours % 12; h = h === 0 ? 12 : h; return h.toString().padStart(2, '0'); }, 'g': () => { let h = hours % 12; return h === 0 ? '12' : h.toString(); }, 'i': () => minutes.toString().padStart(2, '0'), 'a': () => hours < 12 ? 'am' : 'pm', 'A': () => hours < 12 ? 'AM' : 'PM', }; let result = ''; for (let char of formatStr) { result += map\[char\] ? map\[char\]() : char; } return result; } })();

{% endraw %}
