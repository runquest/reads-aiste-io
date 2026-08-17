---
layout: "story"
title: "A shell exclamation mark is not for yelling"
date: "2026-08-16"
permalink: "/2026/08/16/stories/a-shell-exclamation-mark-is-not-for-yelling-8ccef5/"
slug: "a-shell-exclamation-mark-is-not-for-yelling-8ccef5"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22990/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Filip introduces shell event designators, a powerful but often overlooked way to reuse and modify previous commands. He explains useful shortcuts such as !!, !$, and !ssh, along with word and path modifiers. Filip also covers the POSIX fc command, safer ways to use these features, and when alternatives like Ctrl-R may be better.

---

## A shell exclamation mark is not for yelling. Be lazy.

Event designators have been hiding in not-so-plain-sight since the late 1970s — so powerful that forgetting might be part of a massive conspiracy to wear out developer keyboards faster than otherwise.

Published

5 August 2026 at 20:12 UTC

Modified

8 August 2026 at 17:34 UTC

Author

Filip Roséen

Tags

*   [#shell](/articles/tagged/shell)
*   [#bash](/articles/tagged/bash)
*   [#zsh](/articles/tagged/zsh)
*   [#posix](/articles/tagged/posix)
*   [#unix](/articles/tagged/unix)

## Table of Contents

*   [Don't yell at your colleagues; yell in your shell](#dont-yell-at-your-colleagues;-yell-in-your-shell)
*   [Command-line repetition we socially accept](#command-line-repetition-we-socially-accept)
*   [Don't Repeat Yourself.](#dont-repeat-yourself.)
*   [What is  this magic  an event designator?](#what-is-&nbsp;this-magic&nbsp;-an-event-designator)
    *   [Event Designator](#event-designator)
    *   [Word Designator](#word-designator)
    *   [Modifier](#modifier)
*   [POSIX and the power of `fc`](#posix-and-the-power-of-fc)
*   [Yell responsibly](#yell-responsibly)
    *   [The rule of three](#the-rule-of-three)
    *   [The powerful four](#the-powerful-four)
    *   [I don't trust my exclamation-mark-fu just yet, any advice?](#i-dont-trust-my-exclamation-mark-fu-just-yet-any-advice)
*   [So, what now?](#so-what-now)
*   [Frequently Asked Questions](#frequently-asked-questions)
    *   [When I use `sudo !!`, will it be stored unchanged in the shell history?](#when-i-use-sudo-!!-will-it-be-stored-unchanged-in-the-shell-history)
    *   [`!` just gets in the way, how do I turn this off?](#!-just-gets-in-the-way-how-do-i-turn-this-off)
    *   [Can history-ignored commands still be referenced?](#can-history-ignored-commands-still-be-referenced)
    *   [Why not use `ctrl-r` instead of memorizing a bunch of things?](#why-not-use-ctrl-r-instead-of-memorizing-a-bunch-of-things)
    *   [Why not use `alt-.` instead of `!$`?](#why-not-use-alt-.-instead-of-!$)
    *   [Are you not disregarding other useful features?](#are-you-not-disregarding-other-useful-features)
*   [Further Reading](#further-reading)

# Don't yell at your colleagues; yell in your shell [#](#dont-yell-at-your-colleagues;-yell-in-your-shell)

You and I are probably very different; _my_ choice of editor is likely to make you cringe just thinking about it, and _your_ favorite programming language is _statistically_ — definitely — not mine.

There is however one thing (and maybe that's the only thing) we all have in common; we are a bunch of lazy bastards.

> **Note**: This article is primarily targeting `bash`, `csh`, `tcsh`, and `zsh`. If these shells are not your daily driver, see [POSIX and the power of `fc`](#posix-and-the-power-of-fc) — worth a read no matter which POSIX-compatible shell you use.

### Command-line repetition we socially accept [#](#command-line-repetition-we-socially-accept)

```shell
$ ssh some-user@10.240.33.109
$ echo "done with some-user@10.240.33.109" >> ~/work/superfun-client/worklog
$ cd ~/work/superfun-client && cat TODO
$ ssh some-user@10.240.33.109              # <- forgot something
```

I am sure we have all ended up in arrow-up-mashing hell when repeating commands in our shell history, but what if we instead could save ourselves the trouble and refer to previous commands and their arguments directly?

```shell
$ ssh some-user@10.240.33.109
$ echo "done with !:1" >> ~/work/superfun-client/worklog
$ cd !$:h && cat TODO
$ !ssh
```

No yelling — just exclamation marks.

> **Note**: The magic described in this article applies to interactive shells unless configured otherwise, it is _not_ meant to be used in your new `amazing.sh` shell script.

## Don't Repeat Yourself. [#](#dont-repeat-yourself.)

I bet you've heard it before, "do not repeat yourself", either from that annoying colleague with all the obscure magic (who might smell a little funny) — or perhaps you said it yourself during the last refactor session that somehow lasted longer than the federation delay on `matrix.org`.

```shell
$ apt install awesome-package # insufficient permissions
$ sudo !!                     # repeat with sudo
```

```shell
$ mkdir /var/mnt/cache # the usual create directory dance
$ cd !$                # cd to the directory, no finger strain needed
```

Most of us have heard DRY repeated since we were ki–, I mean junior. But is it not funny that we've religiously been taught to apply DRY everywhere… except on the command‑line?

```shell
$ touch ~/projects/work/awesome.sh
$ cd !$:h # cd to the directory of awesome.sh
```

```shell
$ ssh 10.240.33.109 -p2222 -i ~/.ssh/prod/ed25519
$ ssh 10.240.33.110 !:2* # same flags, another host
```

```shell
$ ffmpeg -i /recordings/a-sunny-day.mov !#:2:r.mkv
ffmpeg -i /recordings/a-sunny-day.mov /recordings/a-sunny-day.mkv

$ scp !$:r.* example.com:/media
scp /recordings/a-sunny-day.* example.com:/media
```

## What is  this magic  an event designator? [#](#what-is- this-magic -an-event-designator)

Even though they might look mighty daunting at first glance, [event designators](https://web.mit.edu/gnu/doc/html/features_6.html) always follow the same rather simple pattern:

```text
![event][:word][:modifier]
    |      |        |
    |      |        '--> modifier    [  :h  :t  :r  :e  ... ]
    |      '-----------> which part  [  :0  :$  :*  :2-3 ... ]
    '------------------> which line  [  !!  !-2  !ssh  !?needle? ... ]
```

> **Note**: Want to know the bare necessities? Check out [yell responsibly](#yell-responsibly) for the essential designators I consider most useful.

> **Note**: Already fluent? Skip to [posix and the power of `fc`](#posix) for one of the most useful albeit niche commands I have ever had the pleasure of running — who haven't wished they could edit their long commands in an editor rather than in the shell?

### Event Designator [#](#event-designator)

The first part immediately following the exclamation mark denotes which lines we are interested in — here are a few examples which will effectively rerun the referred to command:

```shell
$ !!           # the previous line
$ !-2          # two lines back
$ !1337        # the 1337th line, as displayed by `history`
$ !ssh         # the most recent line starting with "ssh"
$ !?dandelion? # the most recent line containing "dandelion"
$ !#           # the current line, written so far
$ ^ssh^scp^    # replace first ssh with scp in previous command
```

> **Note**: If the `!` is immediately followed by `:`, no explicit event is specified and the expression will refer to the immediately previous line.

### Word Designator [#](#word-designator)

After the _event designator_ (if any) you may specify which part of the line you are interested in. All examples below are written as if they follow the command in the first code block.

```shell
$ /path/to/script.sh "hello world" --enable 1337
```

```shell
$ !:0   #  1st word --> "/path/to/script.sh"
$ !:1   #  2nd word --> "hello world"
$ !:$   # last word --> "1337"
```

```shell
$ !:1-2 # 2nd to 3rd   --> "hello world" "--enable"
$ !:*   # all args     --> "hello world" "--enable" "1337"
$ !:1-  # all but last --> "hello world" "--enable"
$ !:2*  # 3rd to last  --> "--enable" "1337"
```

> **Note**: There are several short-form expressions that work without even specifying a colon, like `!$` being equivalent to `!:$`, `!*` being equivalent to `!:*`, and so forth.

### Modifier [#](#modifier)

Modifiers are perhaps where we enter _"oh-daaaaaaaym"_\-territory — they allow you to extract/modify only certain parts of what would otherwise be an entire argument.

```shell
$ !:$:h # strip filename (`dirname`)
$ !:1:t # strip leading path (`basename`)
$ !:1:r # strip only the extension
$ !:1:e # leave only the extension
```

```shell
$ !:s/hello/bye/ # replace first 'hello' with 'bye'
$ !:gs/foo/bar/  # replace all 'foo' with 'bar'
```

```shell
$ !ssh:p # print what would run, without running it
```

## POSIX and the power of `fc` [#](#posix-and-the-power-of-fc)

Whether or not your shell speaks `!`, `fc` belongs in your imaginary tool belt. It can be used to repeat the previous command, but the true power lies in the fact that you can edit your command-line not in your shell — but in your editor of choice.

Every shell adventurer should run `fc` at least once a year, if only to marvel at its usability:

```shell
$ fc      # edit the previous command
$ fc -2   # edit the command 2 steps back
$ fc grep # edit last command starting with grep
```

```shell
$ fc -3 -1  # the last three commands, all in one buffer
$ fc ssh -1 # from the last 'ssh' line through the most recent one
```

```shell
$ fc -s ssh             # repeat last command starting with 'ssh'
$ fc -s hello=world ssh # replace "hello" with "world" on the line starting with 'ssh'
```

`fc` will invoke whatever program is specified in `$FCEDIT` to do the editing, if no such specification exists POSIX falls back to `ed` — though many shells will default to `$EDITOR`.

You may also specify which editor to invoke using `-e`:

```shell
$ scp api.tar.gz prod-01:/tmp
$ ssh prod-01 systemctl restart api
$ curl -sf https://prod-01/health
```

```shell
$ fc -e 'sed -i s/prod-01/test-01/g' -3 -1
```

The above will rerun all three commands, replacing `prod-01` with `test-01` in each; a contrived example perhaps but man is it useful when you find yourself in such trouble.

> **Note**
> 
> *   `fc` lives in the [User Portability Utilities](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap02.html#tag_02_01_06_02) of POSIX.
> *   Truly minimal shells like `dash` and busybox `ash` ship without it entirely.

## Yell responsibly [#](#yell-responsibly)

Event designators, or `fc` in the case of [POSIX](#posix), are not going to change your life and turn you into an _über-10x-developer-always-wearing-a-hoodie_; they might however save you anywhere between four and forty-two keystrokes at a time, a few hundred times a week, over the many years spanning your career.

See below for what I consider the essentials, memorize a few of these and you are already miles ahead compared to your former self.

*   ### The rule of three [#](#the-rule-of-three)
    
    *   `!!` which expands to the previous command
    *   `!needle` which expands to the most recent command starting with _"needle"_
    *   `!?needle?` matches the most recent command containing _"needle"_
*   ### The powerful four [#](#the-powerful-four)
    
    *   `!$` the last argument of the previous command
    *   `!:0` when you need to rerun that annoyingly located script
    *   `!$:h` for an easy extraction of the directory part
    *   `!$:t` for when you want the filename and nothing else

### I don't trust my exclamation-mark-fu just yet, any advice? [#](#i-dont-trust-my-exclamation-mark-fu-just-yet-any-advice)

There is `shopt -s histverify` for _bash_, and `setopt HIST_VERIFY` in _zsh_.

Rather than YOLO-running the command directly, either configuration will expand commands in-place when you press enter — allowing you to edit (or discard) the result if it is not what you aimed for.

You may also use the `:p`\-modifier to print what would run without running it — the expansion lands in your history so a plain `!!` (or arrow-up + enter) runs it once you are ready.

## So, what now? [#](#so-what-now)

I guess there is nothing left to do but practice.

Please refrain from yelling at your colleagues, spend the saved keystrokes on watercooler chitchat, and forever remember that exclamation marks are not for shouting — at least not in your shell.

## Frequently Asked Questions [#](#frequently-asked-questions)

If you have a question or feedback of your own, please feel free to shoot me an email at [filip.roseen@atch.se](mailto:filip.roseen@atch.se).

*   ### When I use `sudo !!`, will it be stored unchanged in the shell history? [#](#when-i-use-sudo-!!-will-it-be-stored-unchanged-in-the-shell-history)
    
    Event-designators themselves do not end up in history, it will be the expanded contents:
    
    ```shell
    $ echo "hello world"
    hello world
    $ echo !$:s/world/idoubtit/
    echo "hello idoubtit"
    hello idoubtit
    $ history
    1  echo "hello world"
    2  echo "hello idoubtit"
    3  history
    ```
    
    > **Note**: The above is ironically enough quite annoying when writing a post about event‑designators, as you would often want to reach for previous pre-interpolation commands.
    
*   ### `!` just gets in the way, how do I turn this off? [#](#!-just-gets-in-the-way-how-do-i-turn-this-off)
    
    I bet many have been bitten by the "usability" of event designators without realizing what they are for, such as in the example below:
    
    ```shell
    $ echo "!dlrow olleh"
    bash: !dlrow: event not found
    ```
    
    If you would like to turn things off so that you can use `!` anywhere, you may use `set +H` in _bash_ and `setopt nobanghist` in _zsh_; for other shells I recommend consulting your manual.
    
    You may also go full smelly-colleague-with-magic (please wear deodorant in public), and instead use any character of your liking:
    
    ```shell
    $ histchars='%^#' # event-trigger, substitution, comment
    $ echo "hello world"
    hello world
    $ echo %$:s/world/the internet/
    hello the internet
    ```
    
    > **Note**: Remember to put your configuration in the relevant dot-rc file to make the configuration persistent across sessions.
    
*   ### Can history-ignored commands still be referenced? [#](#can-history-ignored-commands-still-be-referenced)
    
    Functionality such as leading space to ignore adding things to the history is not default behavior, but event designators will still be able to capture their contents.
    
    ```shell
    % setopt HIST_IGNORE_SPACE
    % echo "abc"
    abc
    %  echo "321"
    321
    % echo last-argument-was !$
    echo last-argument-was "321"
    last-argument-was 321
    % history
    1  setopt HIST_IGNORE_SPACE
    2  echo "abc"
    3  echo last-argument-was "321"
    ```
    
    > **Note**: Notice how `echo 321` is _not_ part of `history`, but our (expanded) usage of `!$` is.
    
*   ### Why not use `ctrl-r` instead of memorizing a bunch of things? [#](#why-not-use-ctrl-r-instead-of-memorizing-a-bunch-of-things)
    
    `ctrl-r`, a.k.a. command-line history search, is extremely powerful, but it will at best give you a template to modify; _event designators_ allow you to extract partial contents.
    
    Also, why search if you already know what you want to run? `!ssh` vs `ctrl-r`+`ssh` — the former is also kinda cooler™.
    
*   ### Why not use `alt-.` instead of `!$`? [#](#why-not-use-alt-.-instead-of-!$)
    
    `alt-.` is great for what it is designed to do, iterating over the previous "last arguments" of your shell history. It's great at doing that, but it is also limited to doing just that _one_ thing.
    
*   ### Are you not disregarding other useful features? [#](#are-you-not-disregarding-other-useful-features)
    
    I am not aiming for some sort of "either or" situation when I publish my articles — whatever gets the work done is what you should use.
    
    And for what it's worth… never do what a stranger tells you online; personal preference and workflows are worth more than any article (no matter the amount of obscure sometimes forgotten magic).
    

## Further Reading [#](#further-reading)

Other articles in this series:

*   [A shell colon does nothing. Use it anyway (refp.se)](/articles/your-shell-and-the-magic-colon)

Documentation relevant to event designators:

*   [Event Designators (gnu.org)](https://www.gnu.org/software/bash/manual/html_node/Event-Designators.html?pubDate=20260429)
*   [Word Designators (gnu.org)](https://www.gnu.org/software/bash/manual/html_node/Word-Designators.html)
*   [Designator Modifiers (gnu.org)](https://www.gnu.org/software/bash/manual/html_node/Modifiers.html)

{% endraw %}
