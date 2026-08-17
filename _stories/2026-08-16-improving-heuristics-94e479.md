---
layout: "story"
title: "Improving heuristics"
date: "2026-08-16"
permalink: "/2026/08/16/stories/improving-heuristics-94e479/"
slug: "improving-heuristics-94e479"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22987/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Placing "landmark" nodes on a map can make A* run faster without changing the algorithm itself. Before each search, Amit suggests running Dijkstra's from each landmark and storing the costs. Then use the triangle inequality to get a tighter lower bound on path length, replacing the standard distance heuristic. Placing more landmarks near map edges or common paths means fewer nodes are explored, though the best placement depends on your specific game and map layout.

---

Improving heuristics for A\* search        

# Improving heuristics for A\* search

 from [Red Blob Games](https://www.redblobgames.com/)

*   [Home](https://www.redblobgames.com/)
*   [Blog](https://www.redblobgames.com/blog/)
*   [Links](https://pinboard.in/u:amitp/t:gamedev/)
*   [Bluesky](https://bsky.app/profile/redblobgames.com)
*   [About](http://www-cs-students.stanford.edu/~amitp/)

* 

## Table of Contents

*   [1\. A\*’s use of the heuristic](#a-s-use-of-the-heuristic)
*   [2\. Perfect heuristic](#perfect-heuristic)
*   [3\. Reusing a perfect heuristic](#reusing-a-perfect-heuristic)
*   [4\. Multiple landmarks](#multiple-landmarks)
*   [5\. Placement of landmarks](#placement)
*   [6\. Automated placement](#automated-placement)
*   [7\. Implementation](#implementation)
*   [8\. Demos](#demos)
    *   [8.1. Dragon Age, The Circle Tower](#dragon-age-the-circle-tower)
    *   [8.2. Cogmind, Factory 5](#cogmind-factory-5)
    *   [8.3. Maze](#maze)
    *   [8.4. Dragon Age, Lothering](#dragon-age-lothering)
    *   [8.5. Cogmind, Research 2](#cogmind-research-2)
    *   [8.6. Cogmind, Factory 4](#cogmind-factory-4)
*   [9\. More reading](#more-reading)

2026 Jul, but attempted many times since 2015

On my [Introduction to A\* page](../a-star/introduction.html) I cover the basics of the A\* graph search algorithm for finding shortest paths. Here’s an example from the town of _Denerim_ in Dragon Age Origins. **Try moving the start B and goal to see A\*** in action:

On this page I’ll show a way to speed up A\* by adding “landmark nodes”. **Try moving the landmark L** to be closer to the goal .

At the [end of the page](#demos) are demos of how this technique helps with maps from real games. I use grids for the visualizations on this page, but landmarks work for any type of graph, not only grids. The best part is that it’s not much code, sometimes only 20 lines. It can be combined with most other optimizations.

##  1  [A\*’s use of the heuristic](#a-s-use-of-the-heuristic)[#](#a-s-use-of-the-heuristic)

A\* uses a _heuristic_ to guide it towards the goal. We can think of it like wind pushing us in the right direction. Here, the heuristic pushes us east, and the shortest path goes east:

But sometimes it pushes us in the _wrong_ direction. Here, the shortest path leads west of the B but the heuristic pushes us east:

A\* runs faster when the heuristic guides us in the right direction. It wastes time when the heuristic guides us in the wrong direction. But _why_ is it in the wrong direction? It’s because the commonly used distance-based heuristic doesn’t know about the structure of the map.

##  2  [Perfect heuristic](#perfect-heuristic)[#](#perfect-heuristic)

Ideally, we’d find a heuristic that knows about the map structure and never points in the wrong direction:

Can we calculate this “perfect” heuristic? **Yes!**

But the perfect heuristic is different for every goal. Move the goal and you’ll see the heuristic changes. Move the start B and you’ll see it doesn’t.

If we’re calculating many paths with the same the goal, we can use [flow field pathfinding](../tower-defense/). But usually the next path has a different goal, so we would have to construct a brand new perfect heuristic for each goal. That is impractically slow to calculate every time we run A\*, and it’s also too large to store if we want to compute it ahead of time.

It’d be nice if we could calculate the heuristic _once_ and then _reuse_ it for multiple A\* runs with different goals.

##  3  [Reusing a perfect heuristic](#reusing-a-perfect-heuristic)[#](#reusing-a-perfect-heuristic)

Let’s calculate a perfect heuristic to the green L, which we call a “landmark”. Can we reuse it for another goal ? **Yes**, sometimes! **Move the start point B and the landmark L around** to see which purple goals are helped:

The idea is that if we already have the path from B→L, we _also_ get the shortest path to any along the way:

B L path from B to L includes X path from B to X path from X to L

Think of the landmark as something far in the distance. Your friend tells you “from your house B, walk towards the Eiffel Tower L until you get to Daniel’s house ”. The goal is not to reach the landmark. The landmark tells us a _direction_ to go in. The goal, Daniel’s house, is on the way.

Most goals aren’t on the path B→L but sometimes they are _close_ to that path:

path from B to L path from B to X path from X to L

But what does it mean to be “close”? We can use the path length, `cost(B, L)`. When the paths are almost the same, `cost(B, L)` is close to `cost(B, X) + cost(X, L)`.

In A\*, we use the _heuristic function_ as a lower bound for the path length `cost(B, X)`. The [triangle inequality](https://en.wikipedia.org/wiki/Triangle_inequality)\[1\] says that the sum of two sides of a triangle is at least as long as the third side. Adapted for directed graphs, we can say `cost(B, X) + cost(X, L) ≥ cost(B, L)`. To calculate a lower bound, we rewrite this inequality as `cost(B, X) ≥ cost(B, L) - cost(X, L)`.

**That’s the key idea here**. It’s impractical to precalculate all costs to all locations, but if we’ve precalculated the costs to a specific location L, we can use that to estimate the cost to a different location .

Some of the academic research papers refer to this as a heuristic based on the triangle inequality. Other papers call this the “differential heuristic” because it takes the difference between already computed distances.

##  4  [Multiple landmarks](#multiple-landmarks)[#](#multiple-landmarks)

How often is this triangle inequality useful?

cost(B, X) cost(X, L) cost(B, L) ≤ cost(B, X) + cost(X, L)

It depends on where L is relative to the path B→:

  

 

Relative positions

Landmark useful?

before

L B

only in undirected graphs

middle

B L

no

after

B L

yes

**Move the start B and goal around** to see where a landmark would help:

Try moving the landmark L outside the green shaded region, and see that the heuristic and path don’t always match.

Since a landmark needs to be “after” the goal , a single landmark won’t be useful for all paths. We need _multiple_ landmarks L₁, L₂, L₃, etc. Each one gives us some lower bound for the heuristic:

```
cost(B, X) ≥ cost(B, L₁) - cost(X, L₁)
cost(B, X) ≥ cost(B, L₂) - cost(X, L₂)
cost(B, X) ≥ cost(B, L₃) - cost(X, L₃)
…
cost(B, X) ≥ cost(B, Lₙ) - cost(X, Lₙ)
```

We can take the _max()_ of these to pick the highest bound. In this diagram, try **moving the goal to one of the purple shaded areas** to see how those areas are improved by the landmarks. Then try moving it to one of the unshaded areas to see how A\* isn’t any faster there. Try moving the start point B to see how the shaded area also depends on where the start is.

##  5  [Placement of landmarks](#placement)[#](#placement)

The best landmark position depends on the start point B _and_ goal . We want the landmark to be “after” the goal , but what’s “after” depends on where the start point B and goal are.

We want to use landmarks to improve as many (start, goal) pairs as possible.

Let’s start with a single landmark. Try moving the start B, goal , and landmark L on this map:

The purple shaded areas show the goal positions that the landmark helps. It looks like the landmark can cover the main corridors but not the side rooms. We need many more landmarks:

Much more of the map is covered in purple now. Picking the number and placement of landmarks is _project-specific_. Consider:

*   Are all paths equally likely? For example in a colony builder game like Dwarf Fortress, we may care a lot more about paths to/from the main base, and not paths between a forest and a mine.
*   Are all paths equally valuable to optimize? For example if pathfinding is limiting the frame rate, we might want to focus on long paths that are slower to compute and not on short paths.
*   Is the map static or does it change over time? If static, we might want to spend a lot of time in the map designer tool to precalculate optimal landmarks. But if dynamic, we might want to use the last few goal locations to decide new landmark positions.
    *   If the change reduces an edge cost, the heuristic will overestimate sometimes, and A\* will return a non-shortest path until we update the cost table. Pathfinding is optimized but nonoptimal. Example: the player broke a wall but the unit won’t look for the shorter path right away.
    *   If the change increases an edge cost, the heuristic will be lower than desired, and A\* will take a little longer to run until we update the cost table. Pathfinding is optimal but not optimized. Example: the player added a wall so the unit might think that area’s safe to walk through but will have to find a path around it.
*   If many units find paths to common areas (such as the Dwarf Fortress dining room), consider dropping the least used landmark and adding one near the common area.
*   Are the maps open-world or constrained? A real-time strategy game may have different needs than a room+corridor dungeon crawler.
*   Thomas Nobes [has a video explanation](https://www.youtube.com/watch?v=lQI9-GiWjJQ)\[2\] including more tips on where to place the landmark points.

Fortunately, even if a landmark isn’t optimal, it might still help somewhat, and it’s still no worse than if we use the regular A\* heuristic.

##  6  [Automated placement](#automated-placement)[#](#automated-placement)

Although the best landmark positions will be project specific, one algorithm to place landmarks in a project-agnostic way is to keep track of which locations are good for many randomly chosen paths. **Try it here** to find a landmark position:

(start animation)

It usually but not always picks a spot in the upper left. It matches our intuition that landmarks should go on the outer edges of the map.

The second landmark should be away from the first landmark. The third landmark should be away from the first and second landmark. Each subsequent landmark should be evaluated based on what it adds. This is what it looks like with two existing landmarks:

(start animation)

It picks a third away from the first two, but not always in the same place.

##  7  [Implementation](#implementation)[#](#implementation)

The change described on this page is to the heuristic function given to A\*. We don’t need to change A\* itself.

We need to **pick landmarks**. If the maps are known ahead of time, landmarks can be placed in a map designer tool. If the maps are procedurally generated, try the randomized map analysis earlier on this page. Some of the papers linked at the end have more sophisticated placement algorithms.

Then we need to **analyze the map**. Allocate a 2D array of numbers, cost\[nodeId\]\[landmarkId\].

For each landmark, we run [Dijkstra’s Algorithm](/pathfinding/a-star/introduction.html). It’s a “single source shortest path” algorithm but we want a single goal instead of a single source. In a directed graph, we need to reverse all the edges. In an undirected graph, we can use the edges as is. We set cost\[nodeId\]\[landmarkId\] to the cost of the shortest path from node nodeId to node landmarkId. If the weights are all 1, we can use Breadth First Search instead of Dijkstra’s Algorithm.

This is approximately what I’m running for the demos on this page (undirected graphs):

```
const L = [ /* array of landmark locations */ ];
let L_cost = [ /* array[nodeId] of arrays[landmarkId] */ ];
for (let landmarkId = 0; landmarkId < L.length; landmarkId++) {
    let output = dijkstraSearch(L[landmarkId]);
    for (let nodeId = 0; nodeId < graph.num_nodes; nodeId++) {
      L_cost[nodeId][landmarkId] = output.cost_so_far[nodeId];
    }
}
```

Note that _it’s not much code_. It’s running our existing algorithm (Dijkstra’s, A\*, or BFS) and storing the results in an array. It could run in a background thread.

Then we need to **modify the heuristic function**. Previously the heuristic was distance(B, X). For example:

```
function heuristicManhattan(a, z) {
    return Math.abs(a.x - z.x) + Math.abs(a.y - z.y);
}
```

Each landmark Li gives us a lower bound `cost(Lᵢ, X) - cost(Lᵢ, B)`. We want to take the _highest_ of these:

```
function heuristicLandmark(B, X) {
    let h = heuristicManhattan(B, X); // or any base heuristic
    for (let i = 0; i < L.length; i++) {
        let lowerBound = L_cost[B][i] - L_cost[X][i];
        lowerBound = Math.abs(lowerBound); // if undirected
        if (lowerBound > h) { h = lowerBound; }
    }
    return h;
}
```

Note that _it’s not much code_. It’s running the existing heuristic (typically Manhattan, Chebyshev, or Euclidean distance) and sometimes increasing it if the landmarks form a good triangle.

What changes with the A\* code? **Nothing**.

There are lots of techniques for making A\* run faster. I like this one because it’s very little code.

##  8  [Demos](#demos)[#](#demos)

I tried the differential heuristic on some maps from Dragon Age ([provided by movingai.com](https://www.movingai.com/benchmarks/grids.html)\[3\]), a maze (also provided by movingai.com), and [Cogmind](https://www.gridsagegames.com/cogmind/)\[4\] (maps provided by Josh Ge). All of these maps are undirected graphs (edges are bidirectional) so I’ve used that version of the differential heuristic.

*   The blue area is what **we no longer have to search** by using the differential heuristic. The orange area is what we search even with the improved heuristic.
*   Try moving the start B and goal to see the performance on different paths.

###  8.1 Dragon Age, The Circle Tower[#](#dragon-age-the-circle-tower)

The landmark is badly placed for the initial B→ path. Try moving it.

###  8.2 Cogmind, Factory 5[#](#cogmind-factory-5)

In the next demo the landmarks L are in places that don’t help. Move them around to improve search.

The blue area are the nodes we no longer have to search. More blue is better.

The landmark L points help more when closer to the start point B than the goal . They help more when they’re “past” the goal point. Move the start B and goal around and see that there’s a big improvement no matter which path you want to find:

However, it took a lot of landmarks to get that improvement. We can do better by using the random path map analysis to pick fewer landmarks but in smarter locations:

###  8.3 Maze[#](#maze)

A\* with a distance heuristic behaves particularly badly with mazes, but in this one, just four landmarks make a big difference! Then **try clicking Random path** repeatedly. The blue areas are the areas we _didn’t have to search_ by using the landmarks. Also toggle the bidirectional flag to see how much of a difference that makes.

###  8.4 Dragon Age, Lothering[#](#dragon-age-lothering)

This map has large open areas, and it seems to work well with the landmarks.

###  8.5 Cogmind, Research 2[#](#cogmind-research-2)

This is a room-and-corridor map from Cogmind.

###  8.6 Cogmind, Factory 4[#](#cogmind-factory-4)

Another room-and-corridor map, common in traditional Roguelike dungeons.

##  9  [More reading](#more-reading)[#](#more-reading)

This page is about using Cartesian coordinates in a game map to construct a graph-based heuristic based on “landmark” nodes (sometimes called “pivots” or “beacons”). **I’ve collected some references but haven’t read all of them** so I may have some of this wrong.

*   2004 [Computing the Shortest Path: A\* Search Meets Graph Theory](https://www.microsoft.com/en-us/research/publication/computing-the-shortest-path-a-search-meets-graph-theory/%20)\[5\] (Goldberg, Harrison) \[[mirrors](https://scholar.google.com/scholar?cluster=1603393061586443589&hl=en&as_sdt=0,48)\[6\]\]. I learned about the technique in this paper. It’s a combination of _bidirectional_ A\* search and the landmark-based heuristic, used for road networks. It uses the terminology “landmarks” and “triangle inequality”.
*   1994 _Routing information organization to support scalable interdomain routing with heterogeneous path requirements_ (Hotz). \[[citations](https://scholar.google.com/scholar?cites=8767730387060832841&as_sdt=5,48&sciodt=0,48&hl=en)\[7\]\] I can’t find a copy of this online, but it appears to be work that introduced using the triangle inequality with landmarks, for Internet routing.
*   2005 _Approximate Distance Oracles_ (Thorup, Zwick) \[[mirrors](https://scholar.google.com/scholar?cluster=10826648391015165886&hl=en&as_sdt=0,48)\[8\]\]. This theory paper covers the more general topic of calculating the approximate distance between any pair of nodes in a graph, using a “[distance oracle](https://en.wikipedia.org/wiki/Distance_oracle)\[9\]”. An approximate distance is what we need as the heuristic in A\*.

It’s also possible to go in reverse. Many graphs do not have natural Cartesian coordinates, and even the ones that do may not have good results from a distance-based heuristic.

*   2002 [Predicting Internet Network Distance with Coordinates-Based Approaches](https://www.cs.rice.edu/~eugeneng/papers/INFOCOM02.pdf)\[10\] (Ng, Zhang) \[[mirrors](https://scholar.google.com/scholar?cluster=16253098808227849232&hl=en&as_sdt=0,48)\[11\]\] This paper uses the landmark-based heuristics to assign Cartesian coordinates for nodes in an Internet routing network. Then it uses Euclidean distance for the heuristic. This is the inverse of what we’re doing on this page, where we already have Cartesian coordinates, but want to use the landmark-based heuristic instead.
*   2011 [Euclidean Heuristic Optimization](https://webdocs.cs.ualberta.ca/~bowling/papers/11aaai-heuristicopt.pdf)\[12\] (Rayner, Bowling, Sturvetant) transforms the Cartesian coordinates on a game map where distance heuristics don’t work well into new Cartesian coordinates where distance does work well.

Storing the landmark data requires one number per node. In a typical game map, those numbers may be very similar from one grid space to the next. Just as image compression takes advantage of nearby pixels having similar values, we might want to compress the landmark data because nearby graph nodes have similar values:

*   2011 [The Compressed Differential Heuristic](https://webdocs.cs.ualberta.ca/~nathanst/papers/tdh_comp.pdf)\[13\] (Goldenberg, Sturvetant, Felner, Schaeffer) - by storing more landmarks in the same amount of space, the heuristic can be better. In this paper, “landmarks” are called “pivots”, and the “landmark based heuristic” is called the “differential heuristic”.

The landmarks L used on this page are placed _after_ the end of the path, so the layout is B→→L. There are also algorithms that place landmarks _along_ the path, B→L→L→L→. I am not covering that topic here, but if you’re interested, see:

*   2008 [Approximating Shortest Paths using Landmarks](https://www.semanticscholar.org/paper/LPI-%3A-Approximating-Shortest-Paths-using-Landmarks-Grant-Mould/f9185ed02848c1cd3e0ccdda16fa7a32f7428a8a?p2df)\[14\] (Grant, Mould). Calls them “landmarks”.
*   2014 [Hub Labels: Theory and Practice](https://www.researchgate.net/profile/Ruslan-Savchenko/publication/300450292_Hub_Labels_Theory_and_Practice/links/5815cb8c08aeb720f6852f68/Hub-Labels-Theory-and-Practice.pdf)\[15\] (Delling, Goldberg, Savchensko, Werneck). Calls them “hubs”, and uses only a single intermediary on the path B→L→X.
*   2009 [Abstraction-Based Heuristics with True Distance Computations](https://webdocs.cs.ualberta.ca/~nathanst/papers/CPDBsara.pdf)\[16\] (Felner, Barer, Sturvetant, Schaeffer). I believe this paper tries to unify both “landmark” approaches. B→X→L is called “differential heuristic” and B→L→L→L→X is called “canonical heuristic”, and both of these are under the umbrella “true distance heuristics”.

I learned about this technique in 2007, then tried writing it up in 2015. I realized that I didn’t understand it enough to be able to explain it. I studied it off and on in 2016, 2018, 2019, 2022, 2024, and 2026. I abandoned and restarted this page many times. And by 2026 I think I understand it well enough to write this page. However I haven’t used it in a real project yet.

Email me [redblobgames@gmail.com](mailto:redblobgames@gmail.com), or comment here:

### Links

1.  \[1\]: https://en.wikipedia.org/wiki/Triangle\_inequality
2.  \[2\]: https://www.youtube.com/watch?v=lQI9-GiWjJQ
3.  \[3\]: https://www.movingai.com/benchmarks/grids.html
4.  \[4\]: https://www.gridsagegames.com/cogmind/
5.  \[5\]: https://www.microsoft.com/en-us/research/publication/computing-the-shortest-path-a-search-meets-graph-theory/%20
6.  \[6\]: https://scholar.google.com/scholar?cluster=1603393061586443589&hl=en&as\_sdt=0,48
7.  \[7\]: https://scholar.google.com/scholar?cites=8767730387060832841&as\_sdt=5,48&sciodt=0,48&hl=en
8.  \[8\]: https://scholar.google.com/scholar?cluster=10826648391015165886&hl=en&as\_sdt=0,48
9.  \[9\]: https://en.wikipedia.org/wiki/Distance\_oracle
10.  \[10\]: https://www.cs.rice.edu/~eugeneng/papers/INFOCOM02.pdf
11.  \[11\]: https://scholar.google.com/scholar?cluster=16253098808227849232&hl=en&as\_sdt=0,48
12.  \[12\]: https://webdocs.cs.ualberta.ca/~bowling/papers/11aaai-heuristicopt.pdf
13.  \[13\]: https://webdocs.cs.ualberta.ca/~nathanst/papers/tdh\_comp.pdf
14.  \[14\]: https://www.semanticscholar.org/paper/LPI-%3A-Approximating-Shortest-Paths-using-Landmarks-Grant-Mould/f9185ed02848c1cd3e0ccdda16fa7a32f7428a8a?p2df
15.  \[15\]: https://www.researchgate.net/profile/Ruslan-Savchenko/publication/300450292\_Hub\_Labels\_Theory\_and\_Practice/links/5815cb8c08aeb720f6852f68/Hub-Labels-Theory-and-Practice.pdf
16.  \[16\]: https://webdocs.cs.ualberta.ca/~nathanst/papers/CPDBsara.pdf

Load **comments** from Disqus

[View the discussion thread.](https://redblobgames.disqus.com/?url=https://www.redblobgames.com/pathfinding/heuristics/differential.html)

Copyright © 2026 [Red Blob Games](https://www.redblobgames.com/)  
 [RSS Feed](https://www.redblobgames.com/blog/posts.xml)

Created 19 May 2015; Last modified: 14 Aug 2026

{% endraw %}
