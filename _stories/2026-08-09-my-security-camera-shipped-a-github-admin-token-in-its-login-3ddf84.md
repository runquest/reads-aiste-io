---
layout: "story"
title: "My security camera shipped a GitHub admin token in its login page"
date: "2026-08-09"
permalink: "/2026/08/09/stories/my-security-camera-shipped-a-github-admin-token-in-its-login-3ddf84/"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22894/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "Security"
excerpt_separator: ""
---

{% raw %}
---

# My security camera shipped a GitHub admin token in its login page

7 minute read Published: 2026-07-24

i have been thinking a bit more about security cameras again, because of [AXIS starting to push more for every one of their cameras to be able to easily run linux applications on them](https://www.axis.com/products/acap), they're far more serious targets in an enterprise environment and need to be managed as such for vulnerabilities and credential management etc. someone brought up to me a company that sounded new to me, Hanwha (Vision.) I took a look at the site, and found that they had accessible firmware blobs for each model of camera, which is always a treat.

### poking and prodding

i took the image and threw it at binwalk hoping it was just a rootfs or something, but inside there was a separate tarball with some AI stuff for the camera and a `fwimage.tgz` that binwalk was flagging as encrypted.

I was googling around and saw that [Matt Brown has a writeup on these cameras that got me through](https://brownfinesecurity.com/blog/hanwha-firmware-file-decryption). basically the passphrase is `HTW` + the model number so `HTWXNP-9300RW` worked.

seems like they do some more stuff now, because inside of _that_ tarball was _another_ `fwimage.tgz` that was encrypted but it wasn't the same scheme, so we can't just re-use the same setup from Matt Brown. I kinda figured I was gonna have to give up and that Hanwha was doing something more advanced, like burning a key into the hardware (which isnt foolproof obviously but you at least need to own the camera to start.) Anyways, there was a `fwupgrader` binary that was in that outer tarball, so I threw it into ghidra and started poking around.

well I would have been poking around if it was 2023 or something, but i pointed claude code at it and went to make a lovely dinner and spent time with my partner instead, and came back a bit later to a description and a nice rootfs.

Hanwha had built some obfuscation into the `fwupgrader` to hide how they decrypt the actual rootfs. the AES key is XOR'd against a small static key table in the binary and reassembled at runtime ( the IV is just plaintext in there) the `fwupgrader` just shells out to the `openssl` CLI, and even the command fragments are XOR-obfuscated the same way.

reconstructed the command looks like this:

```
openssl enc -md sha256 -aes-256-cbc -d \
  -K <KEY> -iv <IV> -in <INPUT> -out <OUTPUT>
```

Since the key and iv are just hardcoded (the same across the model line), I will publish them here:

```
KEY = dfa049bb922e63e2decc764af5628068e5b7a2662e479a615b14643e567579b0
IV  = 53f926801b81454a4f889c9a390db6e6
```

and with that we have a full rootfs to dig into normally.

### truffles

since we finally can just look at stuff I ran trufflehog immediately to see if there was anything obvious, and there was a github token duplicated in like 30 files... I checked what repos the token had access to, and it had admin privileges to hundreds of repositories in their github organization.

this isn't my first rodeo with an org shipping a Github token in their firmware though... but that's a story for a different blog post. Why would this org put this token in like 30 files though? it looks like they build the UI for these cameras with vite, and one of the variables is being set to the entirety of `process.env` at build time, which means the entirety of the CI job's environment is being written to these files.

```
var W = {
  DATAPORT: "9090",
  GIT_LFS_SKIP_SMUDGE: "1",
  npm_command: "run-script",
  KUBERNETES_SERVICE_PORT_HTTPS: "443",
  GITHUB_NPM_TOKEN: "<snip>:ghp_…REDACTED…",
  npm_config_userconfig: "/home/docker/.npmrc",
  // etc
```

I don't have any of these cameras to test, but _I think_ this would mean that anyone accessing the admin ui of these cameras likely has had this github token sent to them over the wire and (hopefully) nobody evil noticed. Maybe it didn't get actually served and just lived on disk, though.

there were some other... interesting bits of data in the environment though: there were some env vars with IP addresses in them, but they are assigned to the US Department of Defense:

*   **SWARM\_MASTER\_NFS\_ADDRESS**: 55.101.212.23
*   **OTEL\_ELASTIC\_URL**: http://55.101.212.21:5601/<snip>
*   **CIMIP**: 55.101.211.213

huh... is this just a coincidence and one of those weird instances where people have taken IP space for internal services when they know they will never interact with it (insane practice btw...) or is Hanwha more directly tied with the US DoD?

> **Correction, 2026-07-27:** it was the first one. Hanwha confirmed they did not know the IP space was assigned to the DoD, and that they inherited the addressing plan:
> 
> > Dear Austin
> > 
> > We were not aware that this IP range is allocated to the U.S. Department of Defense.
> > 
> > We have been using it for internal addressing since the days of our predecessor company, Samsung Techwin.
> > 
> > After reading your blog post, we became aware of the issue, and we are now planning to change our network structure, including the IP addressing.
> 
> the speculation is struckthrough now, and I appreciate Hanwha's quick resolution and willingness to respond. I personally find their willingness to actually communicate and resolve issues valuable. I find it the mark of a good long-term partner, as mistakes are inevitable.

let's look at the wikipedia page for [Hanwha Vision](https://en.wikipedia.org/wiki/Hanwha_Vision):

> **Hanwha Vision** ([Korean](https://en.wikipedia.org/wiki/Korean_language): 한화비전), founded as **Samsung Techwin**, is a video surveillance company. It is a subsidiary of [Hanwha Group](https://en.wikipedia.org/wiki/Hanwha_Group).

> **Former products**
> 
> [K9 Thunder](https://en.wikipedia.org/wiki/K9_Thunder) self-propelled artillery, [K10 ammunition resupply vehicles](https://en.wikipedia.org/wiki/K10_ammunition_resupply_vehicle), sub-systems for [K2 Black Panther](https://en.wikipedia.org/wiki/K2_Black_Panther), [sentry gun](https://en.wikipedia.org/wiki/Sentry_gun) robot [SGR-A1](https://en.wikipedia.org/wiki/Samsung_SGR-A1).

oh... okay.... I remember reading about the [SGR-A1 when I was in high school](https://www.nbcnews.com/tech/security/future-tech-autonomous-killer-robots-are-already-here-n105656), but I never thought I would be accidentally finding keys to the kingdom of the manufacturer on the ground later in my career... my life is kinda weird sometimes...

#### _SPECULATION WARNING_ (retracted — see the correction above)

even still, these aren't American devices, or anything like that. Why would Hanwha Vision need anything remotely related to the DoD? Is it possible that their CI is provided by some centralized team at their parent company Hanwha, where the needs of their sister company **Hanwha Aerospace** cause the shared platform to have these entries in the CI environment variables? Or maybe because of their other sister company, **[Hanwha Defense USA](https://hanwhadefenseusa.com)**, where they make other large scary steel machines

![K9 Moukari Self-Propelled Howitzer, made by Hanwha Defense USA](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Dynamic_Front_25_-_Finnish_Army_K9_Moukari_Self-Propelled_Howitzer_%288761382%29.jpg/1280px-Dynamic_Front_25_-_Finnish_Army_K9_Moukari_Self-Propelled_Howitzer_%288761382%29.jpg)

### a little extra digging

I wanted to make sure this wasn't some kind of fluke, and that there weren't hundreds of other different github tokens in their firmware, so I scraped the Hanwha website to download every firmware for every camera i could find, and ended up with around ~500 firmwares (there were like 600 smth cameras but not all of them had firmware listed) and I was able to extract 62% of them with the same approach as above, and only three of them had github tokens, and they were all the same token.

not really sure why the others didn't work, but it's close enough for me to feel satisfied.

### disclosure

I wrote up a very small email with enough information to identify where the token was and sent it over to Hanwha, who have a nice open email for reporting security issues, and they responded within 12 hours notifying me that the token had been revoked. Sure they shouldn't have ever had a gh token in there but I have never had such a prompt response and resolution.

we really gotta stop making these mistakes so often, how am I supposed to be sleeping at night?

thanks computer, until next time

* * *

{% endraw %}
