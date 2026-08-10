---
layout: "story"
title: "How big is a Git commit?"
date: "2026-08-09"
permalink: "/2026/08/09/stories/how-big-is-a-git-commit-d2d2e9/"
slug: "how-big-is-a-git-commit-d2d2e9"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22855/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Git stores data as compressed objects, so commit sizes vary based on how compressible your files are. Small commits add a few kilobytes of overhead, while larger text files can compress down to around 10% of their original size. Git also packs objects together over time to save even more space, making it very storage efficient overall.

---

This is a card in [Dave's Virtual Box of Cards](/cards/).

# How big is a Git commit?

Page created: 2026-01-10

Updated: 2026-07-24

back to [Git](git).

Short answer: It depends. Git stores "objects" as zlib compressed data. So the exact size of a commit will depend on the compressibility of your files (which is basically a function of the amount of repetition in them).

[https://git-scm.com/docs/gitformat-loose](https://git-scm.com/docs/gitformat-loose)

The other factor is that Git eventually turns object files into even more efficient packfiles, saving additional space by getting rid of redundancy across objects.

[https://git-scm.com/book/en/v2/Git-Internals-Packfiles](https://git-scm.com/book/en/v2/Git-Internals-Packfiles)

For fun, I did some little experiments (all "loose objects" with no packfiles created). Here’s the results:

*   **64,828** bytes - git init
    
*   **47,640** bytes - committing 250 tiny files
    
*   **17,145** bytes - committing 3 bytes of change to a file in a directory of 50 files
    
*   **8,709** bytes - committing 3 bytes of change to a single-file repo
    
*   **297,873** bytes - committing a 583,840 byte binary file
    
*   **1,622,188** bytes - committing a huge 16,415,223 byte source file
    

So we see kilobytes of overhead for very tiny commits - exactly how much will depend on the size of the file/directory tree involved with the changes.

For larger commits with small numbers of files, the stored data in `.git` will be anywhere from 50% to 10% of the uncompressed committed files.

In other words, it’s extremely efficient.

Below is the running log of the experiments resulting in the numbers above.

## Init, 5 directories, 250 files

First, how big is a brand new empty Git directory (`.git`)?

$ git init
Initialized empty Git repository in /home/dave/tmp/foo/.git/

$ du -sb .git
64828	.git

About **64 Kb**.

(The `du` options are: `s` to summarize and `b` to display bytes.)

Now I’m going to make a bunch of tiny files in directories with a pair of nested shell loops:

$ for d in {1..5};do
    mkdir $d;
    for f in {1..50};do
        echo foo > $d/$f;
    done;
done

Now I have 250 files in 5 directories containing the string "foo":

$ ls
1  2  3  4  5
$ cat 2/45
foo

I’ll commit them:

$ git add .
$ git commit -m 'initial commit'

Let’s see how big `.git` is now:

$du -sb .git
112468	.git

The commit has added about **47 Kb** to the initial blank repo.

**Aside:** I calculated this in the geekiest way I could think of, using the standard Unix command `dc`, the arbitrary precicision reverse-polish notation desk calculator (note that 'p' is the print command so we can see the result!):

$ dc -e '112468 64828 - p'
47640

Now I’ll make one tiny change to one file and commit it:

$ echo bar > 1/1
$ git commit -am 'changed 1/1'

$ du -sb .git
129613
$ dc -e '129613 112468 - p'
17145

So that’s **17 Kb** to store about 3 bytes of changes to my repo.

Where is that weight coming from?

I’m gonna do another little commit. Here’s what it looks like before:

$ du -b .git
4096	.git/objects/info
4096	.git/objects/pack
4115	.git/objects/25
4155	.git/objects/7b
4225	.git/objects/af
4115	.git/objects/57
4271	.git/objects/07
4177	.git/objects/61
4255	.git/objects/bb
4299	.git/objects/a8
45900	.git/objects
4336	.git/info
4096	.git/refs/tags
4137	.git/refs/heads
12329	.git/refs
4096	.git/branches
4411	.git/logs/refs/heads
8507	.git/logs/refs
12918	.git/logs
27538	.git/hooks
129613	.git

Then I modify file 1/1 again to contain the string 'baz' and commit that.

After:

4096	.git/objects/info
4096	.git/objects/pack
4115	.git/objects/25
4253	.git/objects/81 <-- new 4 Kb
4155	.git/objects/7b
4225	.git/objects/af
4115	.git/objects/57
4271	.git/objects/07
4177	.git/objects/61
4302	.git/objects/fc <-- new 4 Kb
4255	.git/objects/bb
4115	.git/objects/76 <-- new 4 Kb
4299	.git/objects/a8
4177	.git/objects/92 <-- new 4 Kb
62747	.git/objects
4336	.git/info
4096	.git/refs/tags
4137	.git/refs/heads
12329	.git/refs
4096	.git/branches
4561	.git/logs/refs/heads <-- added 0.1 Kb
8657	.git/logs/refs
13218	.git/logs
27538	.git/hooks
146759	.git

That’s 4 new objects for a single-file commit.

Thanks to Julia "b0rk" Evans’s awesome work on the [new Git data model documentation](https://jvns.ca/blog/2026/01/08/a-data-model-for-git/) (jvns.ca) , I can figure out what these new objects are.

Although these files are all zlib compressed data, I figured out that `git show` will show the value of **any** object by hash identifier, not just commits!

So to view these objects, I did:

$ ls .git/objects/81
b1a9d27494b40679d612b96bb6acaac83afa9c
$ git show 81b1a9d27494b40679d612b96bb6acaac83afa9c

And the results are:

*   81…​ is my actual commit
    
*   fc…​ is the tree file for the changed directory `1`., listing all of the files in that directory (1 through 50).
    
*   76…​ is the actual contents of file 1/1 (which is now the string 'baz')
    
*   92…​ is another tree for the root directory of the repo
    

That makes sense. There’s a commit, two trees, and one file.

## Tiny repo

How about a repo with just a single little file. How much space does a commit require then?

$ git init
$ echo foo > foo
$ git add foo
$ git commit -m 'initial'
$ du -sb .git
94208
$ echo bar > foo
$ git -am 'change1'
$ du -sb .git
102917
$ dc -e '102917 94208 - p'
8709

So that’s **8 Kb** per commit, about _half_ the size of the repo with a larger tree of files. I suspect a lot of the size of both of these is overhead and larger commits will see substantial savings.

## "Big" files?

Let’s add a "big" (580 Kb) binary file:

$ cp /usr/bin/librewolf .
$ du -b librewolf
583840
$ git add .
$ git commit -m 'added librewolf'
$ du -sb .git
400790
$ dc -e '400790 102917 -  p'
297873

The binary compresses quite a bit, so the commit is smaller than the added file (**300 Kb** for a 580 Kb file).

Even better, a **huge** (16.2 Mb) text source file:

$ cp /usr/src/linux...mask.h .
$ du -b nbio\_7\_2\_0\_sh\_mask.h
16415223
$ git add .
$ git commit -m 'huge source'
$ du -sb .git
2022978
$ dc -e '2022978 400790 - p'
1622188

So that’s **1.6 Mb** to commit a 16.4 Mb source file! I expected the text to compress nicely, but that’s _really_ impressive.

This page was last generated 2026-07-24 16:12:58 -0400  
Using anything on this website to train large language models (LLMs) is strictly forbidden.  
All content © Copyright Dave Gauer

{% endraw %}
