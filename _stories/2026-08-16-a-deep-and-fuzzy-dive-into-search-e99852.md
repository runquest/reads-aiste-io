---
layout: "story"
title: "A deep (and fuzzy) dive into search"
date: "2026-08-16"
permalink: "/2026/08/16/stories/a-deep-and-fuzzy-dive-into-search-e99852/"
slug: "a-deep-and-fuzzy-dive-into-search-e99852"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22988/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Fuzzy search helps search engines find results even when words contain typos or extra characters. Andrey explains two approaches used by SereneDB: Levenshtein automata and n-gram similarity. Levenshtein is useful for precise typo matching, while n-grams work better with longer text and partial matches. SereneDB combines these techniques to make fuzzy search practical and flexible.

---

![Andrey Abramov](/img/abramov.jpeg)

Andrey Abramov

Aug 5, 2026 · 22 minutes read

## A Deep (and Fuzzy) Dive Into Search

How Levenshtein automata and n-gram similarity power fuzzy matching in SereneDB

Six years ago, when we first shipped fuzzy search (yes, without agents!), we wrote up the two algorithms that sit underneath it. The search engine has the same name but a new home since then. [IResearch](https://github.com/serenedb/serenedb/tree/main/libs/iresearch) is now the search core of SereneDB and you reach it through SQL instead of a bespoke query language but the theory behind the implementation has not aged a day. This is that article, rewritten for where the code actually lives today.

"Fuzzy search" is an umbrella term for a family of approximate-matching algorithms. Each one defines some similarity measure between a query term and the terms in a dictionary, so the engine can decide which results are close enough to show and in what order. In this post I'll walk through the two that matter most, because they are genuinely different tools for different jobs:

*   Approximate matching based on **Levenshtein distance**
*   Approximate matching based on **n-gram similarity**

I'll go deep on each, flag the problems you hit when implementing them at scale and show how both are exposed in SereneDB today.

## Why fuzzy search at all?[​](#why-fuzzy-search-at-all "Direct link to Why fuzzy search at all?")

We deal with unstructured, imperfect text everywhere. Web search taught a whole generation that being inexact is normal: you fat-finger a query on a phone and expect the typo to be fixed for you. But it goes well beyond autocorrect:

*   **Linguistics.** Identifying cognates across dictionaries is central to historical linguistics and cognates are, by definition, not identical.
*   **Bioinformatics.** A DNA sequence is an absurdly long string over a four-letter alphabet (`ACGT`); quantifying variation between sequences _is_ approximate string matching.
*   **Records and search.** Deduplicating people, products or addresses means matching "Jon Smith" to "John Smith" and "priorty\_queue" to "priority\_queue".

All of these need a way to say _how close_ two strings are. Let's start with the most famous answer.

## Approximate matching based on Levenshtein distance[​](#approximate-matching-based-on-levenshtein-distance "Direct link to Approximate matching based on Levenshtein distance")

The **Levenshtein distance** between two words is the minimum number of insertions, deletions or substitutions needed to turn one into the other.

For example, the distance between `foo` and `bar` is 3, because every letter has to be substituted:

```
foo -> boo -> bao -> bar
```

Formally, the distance between strings aaa and bbb (of lengths ∣a∣|a|∣a∣ and ∣b∣|b|∣b∣) is lev⁡a,b(∣a∣,∣b∣)\\operatorname{lev}\_{a,b}(|a|, |b|)leva,b​(∣a∣,∣b∣), where:

lev⁡a,b(i,j)\={max⁡(i,j)if min⁡(i,j)\=0,min⁡{lev⁡a,b(i−1,j)+1lev⁡a,b(i,j−1)+1lev⁡a,b(i−1,j−1)+1(ai≠bj)otherwise.\\operatorname{lev}\_{a,b}(i, j) = \\begin{cases} \\max(i, j) & \\text{if } \\min(i,j) = 0, \\\\\[4pt\] \\min \\begin{cases} \\operatorname{lev}\_{a,b}(i-1, j) + 1 \\\\ \\operatorname{lev}\_{a,b}(i, j-1) + 1 \\\\ \\operatorname{lev}\_{a,b}(i-1, j-1) + \\mathbf{1}\_{(a\_i \\ne b\_j)} \\end{cases} & \\text{otherwise.} \\end{cases}leva,b​(i,j)\=⎩⎨⎧​max(i,j)min⎩⎨⎧​leva,b​(i−1,j)+1leva,b​(i,j−1)+1leva,b​(i−1,j−1)+1(ai​\=bj​)​​​if min(i,j)\=0,otherwise.​

Treat Levenshtein distance as our relevance measure and the goal becomes: for a given input, find the closest terms in the dictionary.

The classic [Wagner–Fischer](https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm) algorithm computes this with dynamic programming in O(∣a∣⋅∣b∣)O(|a| \\cdot |b|)O(∣a∣⋅∣b∣) time, with memory linear in the shorter string if you keep one row at a time. That's fine for comparing two words and hopeless at ["web scale"](https://www.youtube.com/watch?v=b2F-DItXtZs), where a real dictionary holds hundreds of thousands of terms and you'd have to run it against every single one.

### The automaton trick[​](#the-automaton-trick "Direct link to The automaton trick")

In 2002, Klaus U. Schulz and Stoyan Mihov published a [beautiful result](https://doi.org/10.1007/s10032-002-0082-8): for any fixed distance nnn and input word WWW of length NNN, you can build a deterministic automaton A(W)A(W)A(W) that accepts _every_ string within Levenshtein distance nnn of WWW and you can build it in time and space linear in NNN.

Once you have A(W)A(W)A(W), you intersect it with the term dictionary. If the dictionary is a trie (or an FST), the automaton walks the tree and prunes entire subtrees the moment they can no longer lead to an accepting state. Say the dictionary holds `avocado`, `avalon`, `avalanche` and `cargo`:

Searching for terms within distance 1 of `kargo`, the automaton never descends into the `av-` subtree: aligning the query's `k` with the dictionary's `a` already costs one edit and the next character (`a` against `v`) forces a second, which exceeds the limit of 1. The whole left branch is pruned and only `cargo` survives. We touch a handful of nodes instead of scoring the entire dictionary.

So the real task is:

> Given an input word WWW of length NNN and a maximum edit distance nnn, build a deterministic finite automaton (DFA) that accepts a word VVV **iff** lev⁡(W,V)≤n\\operatorname{lev}(W, V) \\le nlev(W,V)≤n.

### Building it up from an NFA[​](#building-it-up-from-an-nfa "Direct link to Building it up from an NFA")

It's easier to first draw a _non-deterministic_ finite automaton (NFA) and worry about determinizing later. Here is the NFA for `foobar` at distance 1:

![The Levenshtein NFA for the word &quot;foobar&quot; at maximum edit distance 1. Each state is written as an index (0–6, its position in the word) on one of two lanes (e = number of edits spent so far). Horizontal edges consume a correct character; the other three families each spend one edit. Double-ringed states are accepting.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgMzcwIiBmb250LWZhbWlseT0idWktbW9ub3NwYWNlLCAnSmV0QnJhaW5zIE1vbm8nLCBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZSIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJMZXZlbnNodGVpbiBhdXRvbWF0b24gZm9yIGZvb2JhciwgbWF4IGVkaXQgZGlzdGFuY2UgMSI+CjxtYXJrZXIgaWQ9ImFoLW1hdGNoIiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjkiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI3IiBtYXJrZXJIZWlnaHQ9IjciIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTTAgMEwxMCA1TDAgMTB6IiBmaWxsPSIjODk1YWY4Ii8+PC9tYXJrZXI+CjxtYXJrZXIgaWQ9ImFoLWlucyIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI5IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNyIgbWFya2VySGVpZ2h0PSI3IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0wIDBMMTAgNUwwIDEweiIgZmlsbD0iIzI1NjNlYiIvPjwvbWFya2VyPgo8bWFya2VyIGlkPSJhaC1zdWIiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjciIG1hcmtlckhlaWdodD0iNyIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNMCAwTDEwIDVMMCAxMHoiIGZpbGw9IiNkYjI3NzciLz48L21hcmtlcj4KPG1hcmtlciBpZD0iYWgtZGVsIiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjkiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI3IiBtYXJrZXJIZWlnaHQ9IjciIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTTAgMEwxMCA1TDAgMTB6IiBmaWxsPSIjMDU5NjY5Ii8+PC9tYXJrZXI+CjxsaW5lIHgxPSI4MC4wIiB5MT0iMjUzLjAiIHgyPSI4MC4wIiB5Mj0iMTM3LjAiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNCIgb3BhY2l0eT0iMC41NSIgbWFya2VyLWVuZD0idXJsKCNhaC1pbnMpIi8+CjxsaW5lIHgxPSIxODUuMCIgeTE9IjI1My4wIiB4Mj0iMTg1LjAiIHkyPSIxMzcuMCIgc3Ryb2tlPSIjMjU2M2ViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLWlucykiLz4KPGxpbmUgeDE9IjI5MC4wIiB5MT0iMjUzLjAiIHgyPSIyOTAuMCIgeTI9IjEzNy4wIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI1IDQiIG9wYWNpdHk9IjAuNTUiIG1hcmtlci1lbmQ9InVybCgjYWgtaW5zKSIvPgo8bGluZSB4MT0iMzk1LjAiIHkxPSIyNTMuMCIgeDI9IjM5NS4wIiB5Mj0iMTM3LjAiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNCIgb3BhY2l0eT0iMC41NSIgbWFya2VyLWVuZD0idXJsKCNhaC1pbnMpIi8+CjxsaW5lIHgxPSI1MDAuMCIgeTE9IjI1My4wIiB4Mj0iNTAwLjAiIHkyPSIxMzcuMCIgc3Ryb2tlPSIjMjU2M2ViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLWlucykiLz4KPGxpbmUgeDE9IjYwNS4wIiB5MT0iMjUzLjAiIHgyPSI2MDUuMCIgeTI9IjEzNy4wIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI1IDQiIG9wYWNpdHk9IjAuNTUiIG1hcmtlci1lbmQ9InVybCgjYWgtaW5zKSIvPgo8bGluZSB4MT0iNzEwLjAiIHkxPSIyNTMuMCIgeDI9IjcxMC4wIiB5Mj0iMTM3LjAiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNCIgb3BhY2l0eT0iMC41NSIgbWFya2VyLWVuZD0idXJsKCNhaC1pbnMpIi8+CjxsaW5lIHgxPSI5Mi4xIiB5MT0iMjU2LjYiIHgyPSIxNzIuOSIgeTI9IjEzMy40IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS42IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLXN1YikiLz4KPGxpbmUgeDE9IjE5Ny4xIiB5MT0iMjU2LjYiIHgyPSIyNzcuOSIgeTI9IjEzMy40IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS42IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLXN1YikiLz4KPGxpbmUgeDE9IjMwMi4xIiB5MT0iMjU2LjYiIHgyPSIzODIuOSIgeTI9IjEzMy40IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS42IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLXN1YikiLz4KPGxpbmUgeDE9IjQwNy4xIiB5MT0iMjU2LjYiIHgyPSI0ODcuOSIgeTI9IjEzMy40IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS42IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLXN1YikiLz4KPGxpbmUgeDE9IjUxMi4xIiB5MT0iMjU2LjYiIHgyPSI1OTIuOSIgeTI9IjEzMy40IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS42IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLXN1YikiLz4KPGxpbmUgeDE9IjYxNy4xIiB5MT0iMjU2LjYiIHgyPSI2OTcuOSIgeTI9IjEzMy40IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS42IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLXN1YikiLz4KPGxpbmUgeDE9Ijk3LjUiIHkxPSIyNjEuNyIgeDI9IjI3Mi41IiB5Mj0iMTI4LjMiIHN0cm9rZT0iIzA1OTY2OSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIgb3BhY2l0eT0iMC41NSIgbWFya2VyLWVuZD0idXJsKCNhaC1kZWwpIi8+CjxsaW5lIHgxPSIyMDIuNSIgeTE9IjI2MS43IiB4Mj0iMzc3LjUiIHkyPSIxMjguMyIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iMiA0IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLWRlbCkiLz4KPGxpbmUgeDE9IjMwNy41IiB5MT0iMjYxLjciIHgyPSI0ODIuNSIgeTI9IjEyOC4zIiBzdHJva2U9IiMwNTk2NjkiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSIyIDQiIG9wYWNpdHk9IjAuNTUiIG1hcmtlci1lbmQ9InVybCgjYWgtZGVsKSIvPgo8bGluZSB4MT0iNDEyLjUiIHkxPSIyNjEuNyIgeDI9IjU4Ny41IiB5Mj0iMTI4LjMiIHN0cm9rZT0iIzA1OTY2OSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIgb3BhY2l0eT0iMC41NSIgbWFya2VyLWVuZD0idXJsKCNhaC1kZWwpIi8+CjxsaW5lIHgxPSI1MTcuNSIgeTE9IjI2MS43IiB4Mj0iNjkyLjUiIHkyPSIxMjguMyIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iMiA0IiBvcGFjaXR5PSIwLjU1IiBtYXJrZXItZW5kPSJ1cmwoI2FoLWRlbCkiLz4KPGxpbmUgeDE9IjEwMi4wIiB5MT0iMTE1LjAiIHgyPSIxNjMuMCIgeTI9IjExNS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjEzMi41IiB5PSIxMDYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+RjwvdGV4dD4KPGxpbmUgeDE9IjIwNy4wIiB5MT0iMTE1LjAiIHgyPSIyNjguMCIgeTI9IjExNS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjIzNy41IiB5PSIxMDYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+TzwvdGV4dD4KPGxpbmUgeDE9IjMxMi4wIiB5MT0iMTE1LjAiIHgyPSIzNzMuMCIgeTI9IjExNS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjM0Mi41IiB5PSIxMDYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+TzwvdGV4dD4KPGxpbmUgeDE9IjQxNy4wIiB5MT0iMTE1LjAiIHgyPSI0NzguMCIgeTI9IjExNS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjQ0Ny41IiB5PSIxMDYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD4KPGxpbmUgeDE9IjUyMi4wIiB5MT0iMTE1LjAiIHgyPSI1ODMuMCIgeTI9IjExNS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjU1Mi41IiB5PSIxMDYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD4KPGxpbmUgeDE9IjYyNy4wIiB5MT0iMTE1LjAiIHgyPSI2ODguMCIgeTI9IjExNS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjY1Ny41IiB5PSIxMDYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+UjwvdGV4dD4KPGxpbmUgeDE9IjEwMi4wIiB5MT0iMjc1LjAiIHgyPSIxNjMuMCIgeTI9IjI3NS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjEzMi41IiB5PSIyNjYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+RjwvdGV4dD4KPGxpbmUgeDE9IjIwNy4wIiB5MT0iMjc1LjAiIHgyPSIyNjguMCIgeTI9IjI3NS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjIzNy41IiB5PSIyNjYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+TzwvdGV4dD4KPGxpbmUgeDE9IjMxMi4wIiB5MT0iMjc1LjAiIHgyPSIzNzMuMCIgeTI9IjI3NS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjM0Mi41IiB5PSIyNjYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+TzwvdGV4dD4KPGxpbmUgeDE9IjQxNy4wIiB5MT0iMjc1LjAiIHgyPSI0NzguMCIgeTI9IjI3NS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjQ0Ny41IiB5PSIyNjYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD4KPGxpbmUgeDE9IjUyMi4wIiB5MT0iMjc1LjAiIHgyPSI1ODMuMCIgeTI9IjI3NS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjU1Mi41IiB5PSIyNjYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD4KPGxpbmUgeDE9IjYyNy4wIiB5MT0iMjc1LjAiIHgyPSI2ODguMCIgeTI9IjI3NS4wIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMi40IiBvcGFjaXR5PSIxLjAiIG1hcmtlci1lbmQ9InVybCgjYWgtbWF0Y2gpIi8+Cjx0ZXh0IHg9IjY1Ny41IiB5PSIyNjYuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg5NWFmOCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCI+UjwvdGV4dD4KPGNpcmNsZSBjeD0iODAiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI4MCIgeT0iMTIwLjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM0YzFkOTUiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+CjxjaXJjbGUgY3g9IjgwIiBjeT0iMjc1IiByPSIyMiIgZmlsbD0iI2VkZTlmZSIgc3Ryb2tlPSIjODk1YWY4IiBzdHJva2Utd2lkdGg9IjIiLz4KPHRleHQgeD0iODAiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0Pgo8Y2lyY2xlIGN4PSIxODUiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxODUiIHk9IjEyMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0Pgo8Y2lyY2xlIGN4PSIxODUiIGN5PSIyNzUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxODUiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0Pgo8Y2lyY2xlIGN4PSIyOTAiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyOTAiIHk9IjEyMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4yPC90ZXh0Pgo8Y2lyY2xlIGN4PSIyOTAiIGN5PSIyNzUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyOTAiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4yPC90ZXh0Pgo8Y2lyY2xlIGN4PSIzOTUiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIzOTUiIHk9IjEyMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0Pgo8Y2lyY2xlIGN4PSIzOTUiIGN5PSIyNzUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIzOTUiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0Pgo8Y2lyY2xlIGN4PSI1MDAiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI1MDAiIHk9IjEyMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj40PC90ZXh0Pgo8Y2lyY2xlIGN4PSI1MDAiIGN5PSIyNzUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI1MDAiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj40PC90ZXh0Pgo8Y2lyY2xlIGN4PSI2MDUiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZWRlOWZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI2MDUiIHk9IjEyMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj41PC90ZXh0Pgo8Y2lyY2xlIGN4PSI2MDUiIGN5PSIyNzUiIHI9IjI3IiBmaWxsPSJub25lIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSI2MDUiIGN5PSIyNzUiIHI9IjIyIiBmaWxsPSIjZGRkNmZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI2MDUiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj41PC90ZXh0Pgo8Y2lyY2xlIGN4PSI3MTAiIGN5PSIxMTUiIHI9IjI3IiBmaWxsPSJub25lIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSI3MTAiIGN5PSIxMTUiIHI9IjIyIiBmaWxsPSIjZGRkNmZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MTAiIHk9IjEyMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj42PC90ZXh0Pgo8Y2lyY2xlIGN4PSI3MTAiIGN5PSIyNzUiIHI9IjI3IiBmaWxsPSJub25lIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSI3MTAiIGN5PSIyNzUiIHI9IjIyIiBmaWxsPSIjZGRkNmZlIiBzdHJva2U9IiM4OTVhZjgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MTAiIHk9IjI4MC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGMxZDk1IiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNzAwIj42PC90ZXh0Pgo8dGV4dCB4PSIyNiIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWFhMGE2IiBmb250LXNpemU9IjEyIj5lPTE8L3RleHQ+Cjx0ZXh0IHg9IjI2IiB5PSIyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5YWEwYTYiIGZvbnQtc2l6ZT0iMTIiPmU9MDwvdGV4dD4KPGxpbmUgeDE9IjcwIiB5MT0iMzQ1IiB4Mj0iOTYiIHkyPSIzNDUiIHN0cm9rZT0iIzg5NWFmOCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz4KPHRleHQgeD0iMTAyIiB5PSIzNDkiIGZpbGw9IiM5YWEwYTYiIGZvbnQtc2l6ZT0iMTIiPm1hdGNoIChXW2ldKTwvdGV4dD4KPGxpbmUgeDE9IjIxMC40IiB5MT0iMzQ1IiB4Mj0iMjM2LjQiIHkyPSIzNDUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNCIvPgo8dGV4dCB4PSIyNDIuNCIgeT0iMzQ5IiBmaWxsPSIjOWFhMGE2IiBmb250LXNpemU9IjEyIj5pbnNlcnRpb248L3RleHQ+CjxsaW5lIHgxPSIzMjkuMiIgeTE9IjM0NSIgeDI9IjM1NS4yIiB5Mj0iMzQ1IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMi40Ii8+Cjx0ZXh0IHg9IjM2MS4yIiB5PSIzNDkiIGZpbGw9IiM5YWEwYTYiIGZvbnQtc2l6ZT0iMTIiPnN1YnN0aXR1dGlvbjwvdGV4dD4KPGxpbmUgeDE9IjQ2OS42IiB5MT0iMzQ1IiB4Mj0iNDk1LjYiIHkyPSIzNDUiIHN0cm9rZT0iIzA1OTY2OSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIvPgo8dGV4dCB4PSI1MDEuNiIgeT0iMzQ5IiBmaWxsPSIjOWFhMGE2IiBmb250LXNpemU9IjEyIj5kZWxldGlvbjwvdGV4dD4KPC9zdmc+)

Read it as a grid. The bottom lane (`e=0`) is "no edits spent yet"; the top lane (`e=1`) is "one edit spent". Each state is an _(index, edits)_ pair. Four families of transitions leave a state IJI^{J}IJ (index III, JJJ edits):

*   **Match**: IJ→(I+1)JI^{J} \\to (I{+}1)^{J}IJ→(I+1)J, consuming the correct next character of WWW. These are the horizontal edges.
*   **Insertion**: IJ→IJ+1I^{J} \\to I^{J+1}IJ→IJ+1. An extra character in the candidate, so spend one edit and stay at the same position.
*   **Substitution**: IJ→(I+1)J+1I^{J} \\to (I{+}1)^{J+1}IJ→(I+1)J+1. Wrong character, so spend one edit and advance.
*   **Deletion**: IJ→(I+2)J+1I^{J} \\to (I{+}2)^{J+1}IJ→(I+2)J+1. A character of WWW is missing from the candidate, so skip it. (Deleting KKK consecutive characters reaches (I+K+1)J+K(I{+}K{+}1)^{J+K}(I+K+1)J+K.)

The moment you spend an edit you move up a lane and at distance 1 the top lane only has match edges left, because you're out of budget. That's why we say the flow "transfers to the upper lane" as soon as an edit happens.

Raising the budget to 2 just adds a third lane and the deletion edges that skip two characters at once (an IJ→(I+3)J+2I^{J} \\to (I{+}3)^{J+2}IJ→(I+3)J+2 family). Each state gains O(n)O(n)O(n) outgoing edges. This is the pattern we now need to bound.

### Making it linear[​](#making-it-linear "Direct link to Making it linear")

The naive powerset construction for the DFA gives O(2(n+1)N)O(2^{(n+1)N})O(2(n+1)N) states. It's clearly far too loose given how regular the NFA is. Schulz and Mihov tightened it in three steps:

1.  **Locality.** From position iii you can never reach past i+ni+ni+n by inserting, nor before i−ni-ni−n by deleting. So at most 2n+12n+12n+1 NFA states are ever "live" at a given position and the powerset over them has 22n+12^{2n+1}22n+1 members. That alone drops us to O(22n+1N)O(2^{2n+1} N)O(22n+1N) states.
2.  **Subsumption.** State IJI^{J}IJ subsumes any (I±K)J+K(I{\\pm}K)^{J+K}(I±K)J+K with K≤n−JK \\le n - JK≤n−J: the other state sits up to KKK positions away and paid KKK extra edits to get there, so everything it can still accept the cheaper state accepts too. Keeping it around is pointless. This removes the exponential factor entirely: O(n2N)O(n^2 N)O(n2N) states.
3.  **Parametrization.** The transitions depend only on the _distribution_ of the current character relative to position III, not on III itself. That kills the dependency on NNN, the last thing standing between us and linear time.

The key object in step 3 is the **characteristic vector**. For a character ccc, χ(c,W,I)\\chi(c, W, I)χ(c,W,I) is a bit set of length min⁡(2n+1, ∣W∣−I)\\min(2n+1,\\ |W|-I)min(2n+1, ∣W∣−I) whose bit kkk, counting from 0, is 1 iff WI+k\=cW\_{I+k} = cWI+k​\=c. Index III means III characters consumed, so WIW\_{I}WI​ is the character up next and bit 0 tells you whether the match transition is available at all. It answers "where, in the next few characters of WWW, does ccc appear?" For `foo`:

χ(f,foo,0)\=⟨1,0,0⟩χ(o,foo,0)\=⟨0,1,1⟩χ(o,foo,2)\=⟨1⟩\\chi(\\text{f}, \\text{foo}, 0) = \\langle 1,0,0\\rangle \\qquad \\chi(\\text{o}, \\text{foo}, 0) = \\langle 0,1,1\\rangle \\qquad \\chi(\\text{o}, \\text{foo}, 2) = \\langle 1\\rangleχ(f,foo,0)\=⟨1,0,0⟩χ(o,foo,0)\=⟨0,1,1⟩χ(o,foo,2)\=⟨1⟩

The last one is a single bit because only one character of `foo` is left to look at.

Because only 2n+12n+12n+1 states matter at any position, we can enumerate all 22n+12^{2n+1}22n+1 possible character distributions and, for each, list which states become reachable. Doing that for distance 1 turns up just **five** distinct reachable state sets, the _parametric states_:

∅\={}AI\={I0},0≤I≤∣W∣BI\={I1},0≤I≤∣W∣CI\={I1,(I+1)1},0≤I≤∣W∣−1DI\={I1,(I+2)1},0≤I≤∣W∣−2EI\={I1,(I+1)1,(I+2)1},0≤I≤∣W∣−2\\begin{aligned} \\varnothing &= \\{\\} \\\\ A\_I &= \\{I^{0}\\}, & 0 \\le I \\le |W| \\\\ B\_I &= \\{I^{1}\\}, & 0 \\le I \\le |W| \\\\ C\_I &= \\{I^{1}, (I{+}1)^{1}\\}, & 0 \\le I \\le |W|-1 \\\\ D\_I &= \\{I^{1}, (I{+}2)^{1}\\}, & 0 \\le I \\le |W|-2 \\\\ E\_I &= \\{I^{1}, (I{+}1)^{1}, (I{+}2)^{1}\\}, & 0 \\le I \\le |W|-2 \\end{aligned}∅AI​BI​CI​DI​EI​​\={}\={I0},\={I1},\={I1,(I+1)1},\={I1,(I+2)1},\={I1,(I+1)1,(I+2)1},​0≤I≤∣W∣0≤I≤∣W∣0≤I≤∣W∣−10≤I≤∣W∣−20≤I≤∣W∣−2​

Now the DFA transition function Δ\\DeltaΔ is a small lookup keyed by (parametric state, characteristic vector). For distance 1 it fits in one table:

χ(c,W,I)AIBICIDIEI⟨0,0,0⟩CI∅∅∅∅⟨0,0,1⟩CI∅∅BI+3BI+3⟨0,1,0⟩EI∅BI+2∅BI+2⟨0,1,1⟩EI∅BI+2BI+3CI+2⟨1,0,0⟩AI+1BI+1BI+1BI+1BI+1⟨1,0,1⟩AI+1BI+1BI+1DI+1DI+1⟨1,1,0⟩AI+1BI+1CI+1BI+1CI+1⟨1,1,1⟩AI+1BI+1CI+1DI+1EI+1\\begin{array}{c|ccccc} \\chi(c,W,I) & A\_I & B\_I & C\_I & D\_I & E\_I \\\\ \\hline \\langle 0,0,0\\rangle & C\_I & \\varnothing & \\varnothing & \\varnothing & \\varnothing \\\\ \\langle 0,0,1\\rangle & C\_I & \\varnothing & \\varnothing & B\_{I+3} & B\_{I+3} \\\\ \\langle 0,1,0\\rangle & E\_I & \\varnothing & B\_{I+2} & \\varnothing & B\_{I+2} \\\\ \\langle 0,1,1\\rangle & E\_I & \\varnothing & B\_{I+2} & B\_{I+3} & C\_{I+2} \\\\ \\langle 1,0,0\\rangle & A\_{I+1} & B\_{I+1} & B\_{I+1} & B\_{I+1} & B\_{I+1} \\\\ \\langle 1,0,1\\rangle & A\_{I+1} & B\_{I+1} & B\_{I+1} & D\_{I+1} & D\_{I+1} \\\\ \\langle 1,1,0\\rangle & A\_{I+1} & B\_{I+1} & C\_{I+1} & B\_{I+1} & C\_{I+1} \\\\ \\langle 1,1,1\\rangle & A\_{I+1} & B\_{I+1} & C\_{I+1} & D\_{I+1} & E\_{I+1} \\end{array}χ(c,W,I)⟨0,0,0⟩⟨0,0,1⟩⟨0,1,0⟩⟨0,1,1⟩⟨1,0,0⟩⟨1,0,1⟩⟨1,1,0⟩⟨1,1,1⟩​AI​CI​CI​EI​EI​AI+1​AI+1​AI+1​AI+1​​BI​∅∅∅∅BI+1​BI+1​BI+1​BI+1​​CI​∅∅BI+2​BI+2​BI+1​BI+1​CI+1​CI+1​​DI​∅BI+3​∅BI+3​BI+1​DI+1​BI+1​DI+1​​EI​∅BI+3​BI+2​CI+2​BI+1​DI+1​CI+1​EI+1​​​

Schulz and Mihov generalized Δ\\DeltaΔ for arbitrary nnn. Build it **once** and you can then instantiate the DFA A(W)A(W)A(W) for any word WWW in a single linear pass over its characters. We went from O(n2N)O(n^2 N)O(n2N) down to O(N)O(N)O(N) and that is what makes Levenshtein search practical. In IResearch Δ\\DeltaΔ is [`ParametricDescription`](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/utils/levenshtein_utils.hpp) and [`DefaultPDP`](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/utils/levenshtein_default_pdp.cpp) hands out one lazily built instance per (distance, transpositions) pair, nine slots in total. The per-term DFA comes out of `MakeLevenshteinAutomaton`, wrapped by the [`ByEditDistance`](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/levenshtein_filter.hpp) filter.

They also showed that a tiny addition to Δ\\DeltaΔ buys you [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance), which treats a transposition of adjacent characters as a single edit. `foobar` → `foobra` is distance 2 under plain Levenshtein but distance 1 under Damerau–Levenshtein, much closer to how humans actually mistype.

### How a fuzzy query runs[​](#how-a-fuzzy-query-runs "Direct link to How a fuzzy query runs")

Putting it together, a `ts_levenshtein` query in SereneDB flows like this:

The dictionary walk hands back more than a list of terms. Each accepted term carries the distance it was accepted at and the filter turns that into a per-term boost of 1−d/min⁡(∣V∣,∣W∣)1 - d / \\min(|V|, |W|)1−d/min(∣V∣,∣W∣). An exact hit therefore scores above a term accepted at the maximum distance, so the accepted terms rank against each other instead of all arriving with the same score.

### Caveats[​](#caveats "Direct link to Caveats")

Δ\\DeltaΔ stores one transition per (parametric state, characteristic vector) pair, so its size is the number of parametric states times 22n+12^{2n+1}22n+1. The state count is what explodes with nnn:

*   n\=1n=1n\=1: 5⋅23\=405 \\cdot 2^{3} = 405⋅23\=40 transitions
*   n\=2n=2n\=2: 30⋅25\=96030 \\cdot 2^{5} = 96030⋅25\=960
*   n\=3n=3n\=3: 196⋅27\=25,088196 \\cdot 2^{7} = 25{,}088196⋅27\=25,088
*   n\=4n=4n\=4: 1,353⋅29\=692,7361{,}353 \\cdot 2^{9} = 692{,}7361,353⋅29\=692,736

That growth makes very large distances impractical, so SereneDB caps the edit distance at **4** for Levenshtein and **3** for Damerau–Levenshtein. Beyond that "fuzzy" stops meaning anything useful anyway.

There's also a lovely trick for squeezing one more unit of distance out of a smaller automaton. The edit distance is invariant under reversal: lev⁡(W,V)\=lev⁡(W′,V′)\\operatorname{lev}(W, V) = \\operatorname{lev}(W', V')lev(W,V)\=lev(W′,V′) for the reversed strings. So by keeping **two** term dictionaries, one forward and one reversed (a so-called FB-trie), you can answer distance-(n+1)(n{+}1)(n+1) queries using two distance-nnn automata. Given how fast the DFA grows with nnn, that's a very good trade.

### Trying it in SereneDB[​](#trying-it-in-serenedb "Direct link to Trying it in SereneDB")

All of the above is behind a single SQL function, [`ts_levenshtein`](/docs/sql/functions/search/full-text#ts_levenshtein). First, a [`text` dictionary](/docs/sql/statements/create_text_search_dictionary/text) and an [inverted index](/docs/sql/indexes/inverted/full-text-search) over some product names:

```
CREATE TEXT SEARCH DICTIONARY fuzzy_dict (    template = 'text',    locale = 'en_US.UTF-8',    case = 'lower',    stemming = false,    accent = false);CREATE TABLE products (id INTEGER PRIMARY KEY, name VARCHAR);CREATE INDEX idx_products ON products    USING inverted (id, name fuzzy_dict);INSERT INTO products VALUES    (1, 'cat'), (2, 'bat'), (3, 'car'),    (4, 'dog'), (5, 'cats'), (6, 'act');VACUUM (REFRESH_TABLE) products;
```

Fuzzy matching is just the `@@` operator against a `ts_levenshtein` acceptor:

```
-- Distance 1: everything one edit from 'cat'SELECT id, name FROM idx_productsWHERE name @@ ts_levenshtein('cat', 1)ORDER BY id;--  1 cat | 2 bat | 3 car | 5 cats | 6 act
```

If you drop the distance argument you get **auto mode** then. It picks the distance from the query length: 0 for two characters or fewer, 1 for three to five, 2 from six up.

```
-- No distance: 'cat' is 3 characters, so distance 1SELECT id, name FROM idx_productsWHERE name @@ ts_levenshtein('cat')ORDER BY id;--  1 cat | 2 bat | 3 car | 5 cats | 6 act
```

This is the form you want behind a search box, where the query grows one keystroke at a time. A fixed distance of 2 is fine for `catalogue` and useless for `ct`, since at two characters almost every short token in the dictionary is within two edits. Auto mode gives `ct` distance 0 and `catalogue` distance 2 without you branching on `length()` in SQL.

`act` matches because a transposition counts as one edit. Transpositions are on by default (Damerau–Levenshtein). Turn them off and `act` drops out:

```
-- Strict Levenshtein: 'act' is now distance 2 from 'cat'SELECT id, name FROM idx_productsWHERE name @@ ts_levenshtein('cat', 1, false)ORDER BY id;--  1 cat | 2 bat | 3 car | 5 cats
```

You can also anchor a literal prefix and only fuzz the tail. That's cheap, because the prefix walks the trie directly and the automaton only kicks in afterward:

```
-- Must start with 'ca', fuzzy-match the rest within distance 1SELECT id, name FROM idx_productsWHERE name @@ ts_levenshtein('t', 1, true, 'ca')ORDER BY id;--  1 cat | 3 car | 5 cats
```

Because it's an ordinary acceptor, it composes with the rest of SQL.

```
SELECT id, name FROM idx_productsWHERE name @@ ts_levenshtein('cat', 1) AND id < 4ORDER BY id;--  1 cat | 2 bat | 3 car
```

### Spell correction[​](#spell-correction "Direct link to Spell correction")

Being ordinary SQL also allows you to get the matched terms themselves. Point `ts_levenshtein` at a query log and read the accepted dictionary entries back with the `ts_dict` aggregates:

```
SELECT unnest(ts_dict_agg(term))   AS suggestion,       unnest(ts_dict_score(term)) AS similarity,       unnest(ts_dict_count(term)) AS searchesFROM query_log_idxWHERE term @@ ts_levenshtein('jaket', 2)ORDER BY similarity DESC, searches DESC;--  jacket | 0.8 | 5--  basket | 0.6 | 1--  racket | 0.6 | 1
```

`ts_dict_agg` returns the terms the automaton accepted, `ts_dict_score` is the 1−d/min⁡(∣V∣,∣W∣)1 - d / \\min(|V|, |W|)1−d/min(∣V∣,∣W∣) similarity from the dictionary walk and `ts_dict_count` is the indexed frequency. Sorting by similarity first and frequency second is what turns three candidates at distance 2 into one correction: `jacket` was searched 5 times, the other two once each. Add `LIMIT 1` and you have a "did you mean".

## Why another kind of fuzziness?[​](#why-another-kind-of-fuzziness "Direct link to Why another kind of fuzziness?")

Raw edit distance isn't always the right lens. Two problems show up quickly.

First, **length bias.** A distance of 2 means something very different for a 4-letter word than for a 20-letter one. The obvious fix is to divide the distance by the length and flip it into a similarity:

levsim⁡(W,V)\=1−lev⁡(W,V)max⁡(∣W∣,∣V∣)\\operatorname{levsim}(W, V) = 1 - \\frac{\\operatorname{lev}(W, V)}{\\max(|W|, |V|)}levsim(W,V)\=1−max(∣W∣,∣V∣)lev(W,V)​

max⁡\\maxmax is what keeps the result inside \[0,1\]\[0,1\]\[0,1\]. Divide by min⁡\\minmin and the ratio can exceed 1 (`a` against `xyz` gives 3/13/13/1), which is useless as a score. Even with max⁡\\maxmax you don't get much: the maximum edit distance we can afford is small, so every long string that clears the cap lands a couple of percent below similarity 1 and the score has nothing left to discriminate with.

Second, **phrases.** Allowing one edit per word lets `quck brwn fx` match `quick brown fox`. But it will never match `quick-witted brown fox`, because per-word edit distance has no notion of extra or missing words. For that we want a measure that tolerates extra and missing material in the indexed value.

## Approximate matching based on n-gram similarity[​](#approximate-matching-based-on-n-gram-similarity "Direct link to Approximate matching based on n-gram similarity")

A different way to compare two strings is by their **longest common subsequence** (LCS) of characters: the longer the LCS, the more similar. On its own, character LCS is too context-free: `connection` and `fonetica` share a 5-character subsequence (`oneti`) despite meaning nothing alike.

[Grzegorz Kondrak's fix](https://webdocs.cs.ualberta.ca/~kondrak/papers/spire05.pdf) is to run the LCS over **n-grams** instead of single characters, so each unit carries a little local context. Compare the same pair as 3-grams:

```
connection -> con onn nne nec ect cti tio ionfonetica   -> fon one net eti tic ica
```

Now they share _zero_ trigrams and the spurious similarity is gone.

Formally, let X\=⟨x1…xk⟩X = \\langle x\_1 \\dots x\_k\\rangleX\=⟨x1​…xk​⟩ and Y\=⟨y1…yl⟩Y = \\langle y\_1 \\dots y\_l\\rangleY\=⟨y1​…yl​⟩ be sequences over a finite alphabet. Write Γi,j\\Gamma\_{i,j}Γi,j​ for a pair of prefixes, Γi,j∗\\Gamma^{\*}\_{i,j}Γi,j∗​ for a pair of suffixes and Γi,jn\\Gamma^{n}\_{i,j}Γi,jn​ for a pair of n-grams starting just after positions iii and jjj. The base case, comparing two single n-grams, is binary:

sn(Γ0,0n)\={1if xu\=yu  ∀ 1≤u≤n,0otherwise.s\_n(\\Gamma^{n}\_{0,0}) = \\begin{cases} 1 & \\text{if } x\_u = y\_u \\ \\ \\forall\\, 1 \\le u \\le n, \\\\ 0 & \\text{otherwise.} \\end{cases}sn​(Γ0,0n​)\={10​if xu​\=yu​  ∀1≤u≤n,otherwise.​

The similarity of the full sequences is then an LCS-style recurrence over n-grams:

s(X,Y)\=sn(Γk,l)\=max⁡i,j( sn(Γi+n−1, j+n−1n)+sn(Γi,j∗) )s(X, Y) = s\_n(\\Gamma\_{k,l}) = \\max\_{i,j}\\Big(\\, s\_n(\\Gamma^{n}\_{i+n-1,\\, j+n-1}) + s\_n(\\Gamma^{\*}\_{i,j}) \\,\\Big)s(X,Y)\=sn​(Γk,l​)\=i,jmax​(sn​(Γi+n−1,j+n−1n​)+sn​(Γi,j∗​))

Normalize by the longer string to land in \[0,1\]\[0, 1\]\[0,1\] and shed the length bias:

sN(X,Y)\=s(X,Y)max⁡(∣X∣,∣Y∣)s\_N(X, Y) = \\frac{s(X, Y)}{\\max(|X|, |Y|)}sN​(X,Y)\=max(∣X∣,∣Y∣)s(X,Y)​

The practical beauty of this approach is that it needs **no per-query automaton**. You split each indexed term into n-grams, store those n-grams as terms in the dictionary and record their positions within each document. At query time you split the input the same way, look up the posting list for each n-gram and for every matched document use the recorded positions to compute the n-gram LCS and finally sN(X,Y)s\_N(X, Y)sN​(X,Y).

That two-step shape, a cheap posting-list lookup to gather candidates followed by an exact positional check, is exactly the [two-phase execution model](/iresearch-two-phase-queries) IResearch uses across phrase, geo and nested queries. Phase 1 requires at least _k_ of the query's n-grams to be present, which is a [`MinMatchDisjunction`](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/disjunction.hpp) wrapped as `NGramApprox` in [`ngram_similarity_query.cpp`](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/ngram_similarity_query.cpp). Phase 2 decodes positions to confirm they actually line up and it only runs for documents phase 1 already accepted.

That _k_ is where the implementation differs from Kondrak's sNs\_NsN​. [`MinMatchCount`](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/ngram_similarity_filter.cpp) derives it as k\=⌈∣X∣⋅t⌉k = \\lceil |X| \\cdot t \\rceilk\=⌈∣X∣⋅t⌉ for threshold ttt and query n-gram count ∣X∣|X|∣X∣, so the score is normalized by the query alone and ∣Y∣|Y|∣Y∣ never enters the picture. Extra material in the indexed value is free. `ts_ngram('hello', 0.7)` matches a title `helloworld` because all four query bigrams line up in order, while sNs\_NsN​ scores that pair 4/94/94/9 and rejects it. That asymmetry is what lets a short query find a long field. It also gets you the phrase case from earlier: over a character-bigram dictionary `ts_ngram('brwn fox')` matches `quick-witted brown fox` at the default threshold, the leading extra word costing nothing. What you still pay for is typos, since each one takes out the bigrams that straddle it. `quck brwn fx` keeps 7 of its 11 bigrams against that title, so it needs the threshold down at `0.6`.

### A sharper score[​](#a-sharper-score "Direct link to A sharper score")

Kondrak also proposed a refinement: instead of the strictly-binary base case, count how many _individual characters_ line up inside a matched n-gram window:

sn(Γi,jn)\=1n∑u\=1ns1(xi+u, yj+u)s\_n(\\Gamma^{n}\_{i,j}) = \\frac{1}{n} \\sum\_{u=1}^{n} s\_1(x\_{i+u},\\, y\_{j+u})sn​(Γi,jn​)\=n1​u\=1∑n​s1​(xi+u​,yj+u​)

Depending on the corpus this bought Kondrak 10–20% better accuracy. The catch is that it's harder to evaluate. Here the two algorithms in this post meet: split the query into n-gram tokens, build a Levenshtein automaton for each, **union them into one big automaton** and use that to pull all the near-miss n-grams out of the dictionary in one sweep. For each matched n-gram you then measure the per-character similarity. Fuzzy matching all the way down.

### Trying it in SereneDB[​](#trying-it-in-serenedb-1 "Direct link to Trying it in SereneDB")

N-gram similarity needs an [`ngram` dictionary](/docs/sql/statements/create_text_search_dictionary/ngram) that records both frequency and positions:

```
CREATE TEXT SEARCH DICTIONARY bigram_dict (    template = 'ngram',    mingram = 2,    maxgram = 2,    frequency = true,    position = true);CREATE TABLE articles (id INTEGER PRIMARY KEY, title VARCHAR);CREATE INDEX idx_articles ON articles    USING inverted (id, title bigram_dict);INSERT INTO articles VALUES    (1, 'hello'), (2, 'help'), (3, 'world'), (4, 'held'), (5, 'hero');VACUUM (REFRESH_TABLE) articles;
```

Then [`ts_ngram`](/docs/sql/functions/search/full-text#ts_ngram) takes a similarity threshold in \[0,1\]\[0, 1\]\[0,1\] (default `0.7`), measured against the number of n-grams in the query:

```
-- Strict: only near-identical titlesSELECT id, title FROM idx_articlesWHERE title @@ ts_ngram('hello')ORDER BY id;--  1 hello-- Loosen the threshold and neighbours appearSELECT id, title FROM idx_articlesWHERE title @@ ts_ngram('hello', 0.3)ORDER BY id;--  1 hello | 2 help | 4 held
```

## Summary[​](#summary "Direct link to Summary")

Neither algorithm wins outright. **Levenshtein automata** give you a precise, bounded notion of "within _k_ typos", built in linear time and pruned against the term dictionary, which is perfect for autocorrect-style matching and short terms. **N-gram similarity** gives you a normalized score that survives extra and missing characters and rides the ordinary inverted index with no per-query construction, which is better for longer strings and partial overlap. Most real systems reach for both and sometimes combine them.

#### References[​](#references "Direct link to References")

*   [Wagner–Fischer algorithm](https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm)
*   Schulz & Mihov, [_Fast string correction with Levenshtein automata_](https://doi.org/10.1007/s10032-002-0082-8), IJDAR 5(1):67–85, 2002
*   [Trie](https://en.wikipedia.org/wiki/Trie) | [NFA](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton) | [DFA](https://en.wikipedia.org/wiki/Deterministic_finite_automaton)
*   [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance)
*   [N-gram](https://en.wikipedia.org/wiki/N-gram) | [Longest common subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
*   Kondrak, [_N-gram similarity and distance_](https://webdocs.cs.ualberta.ca/~kondrak/papers/spire05.pdf), SPIRE 2005, LNCS 3772:115–126 ([doi](https://doi.org/10.1007/11575832_13))
*   IResearch source: [levenshtein\_utils](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/utils/levenshtein_utils.hpp) | [levenshtein\_default\_pdp](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/utils/levenshtein_default_pdp.cpp) | [levenshtein\_filter](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/levenshtein_filter.hpp) | [ngram\_similarity\_filter](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/ngram_similarity_filter.cpp) | [ngram\_similarity\_query](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/ngram_similarity_query.cpp) | [disjunction](https://github.com/serenedb/serenedb/blob/main/libs/iresearch/include/iresearch/search/disjunction.hpp)

* * *

IResearch is open source (Apache 2.0) and available as part of [SereneDB](https://github.com/serenedb/serenedb). If you find this work interesting, starring us on [GitHub](https://github.com/serenedb/serenedb) goes a long way for an early-stage project.

{% endraw %}
