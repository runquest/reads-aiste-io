---
layout: "story"
title: "Everything I Learned Shipping Device Bound Session Credentials"
date: "2026-08-16"
permalink: "/2026/08/16/stories/everything-i-learned-shipping-device-bound-session-credentia-9b05b5/"
slug: "everything-i-learned-shipping-device-bound-session-credentia-9b05b5"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=19a357d8-9567-11f1-8920-5509caa85f4b%26pt=campaign%26pv=4%26spa=1786442421%26t=1786446300%26s=fc247acc8bb43bac5f03a6bb2beab7cfcd8e4075f86c22f936cd2becadffed74/1/0100019ff07f45ea-2a2ade7c-c4d8-499e-ac2b-8e5de6023415-000000/rWP3qNiD0yXK-XrlRacLGrx494EiqNaC8XEZotRbtE0=452"
original_url: "https://scotthelme.co.uk/everything-i-learned-shipping-device-bound-session-credentials/"
category: "Security"
excerpt_separator: ""
---

{% raw %}
Device Bound Session Credentials bind sessions to a private key a browser generates in hardware and cannot export.

---

[DBSC](/tag/dbsc/)

# Everything I Learned Shipping Device Bound Session Credentials

*   ![Scott Helme](https://storage.ghost.io/c/ee/88/ee889f88-37ef-43e5-9180-f9b88ee6261d/content/images/size/w100/2023/07/profile-pic.jpg)
    
    ## Scott Helme
    
    Security researcher, entrepreneur and international speaker who specialises in web technologies.
    
    [More posts](/author/scott/) by Scott Helme.
    
    [![Scott Helme](https://storage.ghost.io/c/ee/88/ee889f88-37ef-43e5-9180-f9b88ee6261d/content/images/size/w100/2023/07/profile-pic.jpg)](/author/scott/)

#### [Scott Helme](/author/scott/)

10 Aug 2026 • 14 min read

We shipped Device Bound Session Credentials at Report URI, open-sourced the server-side implementation, and then discovered a long list of things the specification doesn't prepare you for.

Some caused random logouts. One could deadlock a browser tab indefinitely. Two silently turned a device-bound session back into an ordinary bearer-token session while everything appeared to be working.

This post is the collection of those production lessons: the bugs, browser behaviours, race conditions and implementation traps I wish we'd known before we started.

[![](https://storage.ghost.io/c/ee/88/ee889f88-37ef-43e5-9180-f9b88ee6261d/content/images/2026/08/report-uri-logo.png)](https://report-uri.com/?utm_source=scotthelme.co.uk)

## What DBSC actually does

Briefly, because I have a full [explainer blog post on DBSC](https://scotthelme.co.uk/device-bound-session-credentials-making-stolen-cookies-useless/?utm_source=scotthelme.co.uk) that you should read:

Session cookies have one enormous weakness: they're bearer tokens. If malware on a user's machine reads the cookie out of the browser's storage and sends it to an attacker, the attacker is now that user. Every MFA prompt, every device check, every clever thing you did at login has already happened, and the cookie doesn't care. Infostealer malware has industrialised exactly this problem.

DBSC fixes it by binding the session to a private key the browser generates in hardware — a TPM, a secure enclave — and cannot export. Alongside your normal session cookie there's a second, short-lived cookie. When that cookie expires, the browser _defers_ whatever request needed it, calls a refresh endpoint on your server, proves possession of the device key by signing a challenge, and gets a fresh cookie back. Then, the deferred request resumes.

## The spec reads backwards

Reading the specification, the shape I came away with was: registration is a two-step negotiation, and refresh is a single request. Both our tracking issue and my implementation plan were based on that. Turns out, it's the other way round.

**Registration is single-phase.** You attach a `Secure-Session-Registration` header to an authenticated response. Chrome generates a key, signs a JWT, and POSTs it to your registration endpoint. You verify it, create the binding, and reply `200` with the bound cookie. Done. One round trip.

**Refresh is two-phase.** The browser POSTs to your refresh endpoint with no challenge, because it doesn't have one yet. You answer `403` with a `Secure-Session-Challenge` header. The browser signs _that_ and POSTs again. Now you answer `200` with a fresh cookie. Two round trips, and the `403` is the normal, healthy, everyday path, not an error.

I know I'm not alone here, because months later the author of a Node DBSC implementation opened an issue on our repo and said, unprompted:

> the 403-then-200 refresh took me an embarrassing amount of time to figure out

If you take one thing from this post, take the fact that a `403` on your refresh endpoint is what progress looks like on the way to success.

## Don't put the state in your session store

This one is worse, because it fails silently and it fails _closed-looking_.

When we first shipped, DBSC state lived where all our other session state lives: in the session, keyed off the session ID. Obvious choice, right? Every request already loads it, it expires when the session expires, the plumbing is free. Easy.

PHP sessions, and plenty of other session implementations, serialise the entire session as one blob and write the whole thing back. Last writer wins.

Now look at what the browser does immediately after login:

```
POST /login          → 200, response carries Secure-Session-Registration
  ├── GET  /account/       (the navigation the user is actually doing)
  └── POST /dbsc/register  (Chrome, off the back of that header)
```

Those two run concurrently on the same session. `/account/` loads the session _before_ registration completes, does its normal work, and writes its pre-registration snapshot back last. The binding we just carefully created got nuked in the process.

This isn't just a bug, either, it's a security bug. The enforcement gate, finding no binding, concludes there is no DBSC session here and falls back to plain cookie authentication. Which is exactly correct behaviour for a browser that doesn't support DBSC, but exactly wrong here. The user's session is now a bearer token again. No error was logged. Nothing looked broken. Our audit trail showed registrations succeeding, because they had.

The fix is to give DBSC its own storage, keyed by the session ID but written independently, so a concurrent session write can't clobber it. It's in the library's README as a warning now, phrased about as bluntly as I could manage:

> Report URI shipped DBSC with state in the PHP session blob; the post-login navigation races the `/dbsc/register` POST, both rewrite the whole blob last-writer-wins, the binding is clobbered, and enforcement silently no-ops — leaving exactly the stolen-cookie hole DBSC exists to close.

If you're implementing this: your DBSC binding needs its own key. Not a field in an existing blob you rewrite wholesale.

## Everything rotates, or the browser terminates you

Three related rules, all learned the same way, all now baked into the library.

**Rotate the cookie value on every refresh.** If you verify the refresh JWT and reply `200` with the same cookie value the browser already has, because nothing has changed, so why not, Chrome reads that as "no refresh happened" and terminates the session. It wants to see rotation as proof the server actually did something I guess.

**Rotate the challenge on every refresh too.** Same reasoning. A refresh that doesn't advance the challenge hasn't advanced anything.

**Do not put a challenge on the registration response.** This one is properly counter-intuitive: it looks like an easy optimisation to hand the browser its first challenge on the same response that creates the session, saving that first `403`. Chrome reports a Challenge Error and the session never gets going.

The reason is buried in two separate sections of the spec, and I only really understood it a month later when I was arguing about test vectors with that Node implementer. A `Secure-Session-Challenge` carries an `id` parameter naming which session it belongs to, and a challenge whose session can't be identified is silently dropped. But the registration response is the response that _creates_ the session. At the moment it's parsed, there's nothing for the `id` to name. So the challenge resolves to nothing and Chrome, I guess quite reasonably, complains.

I tried it, it didn't work, I reverted it, and there is now a test in the library whose name is literally `register response has NO Secure-Session-Challenge (Chrome rejects it there)`, because I did not want anyone (including future Scott with terrible memory) to "optimise" it back in.

There's a fourth rule in the same family that's less about Chrome and more about arithmetic: **your challenge TTL must be longer than your cookie lifetime.** The browser caches a challenge. If it caches one just before the cookie expires, and the challenge TTL is shorter, the challenge is dead by the time there's a reason to use it. Our library's config constructor now refuses to build with the values the wrong way round.

## The bug you cannot see on localhost

This is my favourite one, and it's the most transferable lesson here even if you never touch DBSC.

The bound cookie rotates on every refresh. Fine. But rotation is not instantaneous _from the browser's point of view_. The refresh is a round trip, and during that round trip the browser is still doing other things.

```
t+0ms     browser starts POST /dbsc/refresh
t+205ms   browser dispatches GET /ajax/some-widget  ← carries the OLD cookie. Correctly.
t+1235ms  refresh response lands, browser stores the NEW cookie
```

That widget request left the browser 205ms into a 1,235ms refresh. It carried the pre-rotation cookie value because that was, at that instant, the only value the browser had. It is a completely legitimate request from a completely legitimate session.

Our enforcement gate compared the presented cookie against the stored one, found a mismatch, and concluded: stolen cookie. Terminate the session, revoke the binding, log the user out.

We shipped that and then beta users started getting randomly logged out.

The signature in our audit trail was a successful refresh followed about a second later by an enforcement termination, with _no_ refresh failure between them, which is what told us the fault was in the gate, not the refresh path. We caught it properly with a request trace showing exactly the sequence above.

Here's the part that makes it dangerous: **the failure rate is proportional to latency.** The window is exactly the refresh round-trip time. On a developer's loopback interface that's a couple of milliseconds and you will basically never see it. We left it running on dev for two hours before it fired even once. Behind a CDN, over a real network, it's a second or more, and it fires on almost every refresh that races an ordinary request. Which is most of them, on a busy page.

It passed every test we have, but it broke in production because production has physics.

The fix is a single-depth history: accept the immediately-previous cookie value, but only until the instant that value would itself have expired in the browser anyway. I want to draw attention to that second clause, because it's a small design point I'm quite pleased with. There is no grace constant. No "give it five seconds and see". The acceptance window is exactly the lifetime the browser itself would still send that value for. It's a real quantity, derived from the system and it expires on its own without anyone having to tune it.

And the security exposure is genuinely bounded too. One generation deep, expiring naturally, and a genuinely stolen cookie still can't complete a refresh without the device key, so it still hard-fails within minutes.

## Never redirect a DBSC endpoint

Now, the big one. Our DBSC endpoints inherited the standard authentication gate that sits in front of every authenticated route on our application. Sensible reuse. That gate does what every such gate does: if you're not authenticated, you get a redirect to the login page.

Consider what happens when a session finally expires while a tab sits idle:

1.  The tab wakes up and requests a page.
2.  The bound cookie has expired, so Chrome **defers** that navigation and calls `/dbsc/refresh` first.
3.  Our auth gate sees an expired session and answers the refresh with `302 → /login`.
4.  Chrome... stops.

Not "gives up". Not "terminates the session and continues". It deadlocks. The deferred navigation is never released, never times out, and never fails. Blank tab, preliminary headers, forever.

We proved it with a two-state matrix, forcing each state deliberately rather than waiting for a weekend to elapse:

App session

DBSC binding

`/dbsc/refresh` answers

Chrome

expired

present

**302 → /login**

**deadlocks** — deferred navigation never resumes

alive

deleted

**401**

**recovers** — terminates the DBSC session, navigation continues to /login

Same broken-session situation, same user experience intent, completely different outcome based purely on the status code. A `401` tells Chrome the session is over, it tears the DBSC session down, and the deferred navigation is released to do what it was always going to do and land on the login page. A `302` tells Chrome nothing it can act on, and it waits.

I feel like this is a bug so we raised it in Chromium as [534027936](https://issues.chromium.org/issues/534027936?utm_source=scotthelme.co.uk).

Our fix is the bit I'd encourage you to copy. The obvious patch is to add a guard: _if this is a DBSC endpoint and the auth gate is about to redirect, send a 401 instead._

The DBSC endpoints now override the redirect mechanism itself to answer `401`. Not "this gate doesn't redirect DBSC requests" but "**this endpoint cannot emit a redirect at all**". Every existing gate is covered, and, more importantly, so is every gate anyone adds in the next five years without knowing any of this.

## A challenge mismatch is not an attack

The most important fix in the library didn't come from us. It came from a contributor in the Netherlands with production logs from his own Chrome 150 install, showing real users being logged out.

His trace, near enough:

```
20:29:33  refresh succeeded, new challenge issued
          ── 16 minutes idle ──
20:45:40  refresh: challenge expired      → session revoked path
20:45:41  refresh: challenge mismatch     → session revoked path
20:45:41  enforcement terminated, user logged out mid-flow
```

His challenge TTL was 900 seconds. The challenge presented at 20:45:40 had been issued 967 seconds earlier. So the first refresh legitimately failed as expired, which is a benign, retriable outcome, and we handled it correctly by minting a fresh challenge and answering `403`.

One second later the browser came back. And it presented a challenge the server had _already rotated past_. That's a mismatch, and we treated a mismatch the way you'd expect: as a failed cryptographic proof. Stolen cookie. Revoke everything. Nuke it from orbit. Turns out though, that's wrong.

The signature is verified before the challenge is compared. The refresh handler verifies the JWT against the device-bound public key first. Only if that passes does it look at which challenge was signed. So _anything that reaches the mismatch branch has already proved possession of the device's private key._ It cannot be forgery as a forgery dies earlier, at the signature check, and still terminates the session exactly as it should.

This means a mismatch can only ever be one of a small set of benign situations:

1.  **Concurrent refreshes.** Two requests fire on return from idle, a service worker fetch racing a main navigation perhaps, and both holding the same cached challenge. The first succeeds and rotates. The second is correctly signed and now stale.
2.  **A lost response and a retry.** The browser signed a challenge, the response never arrived, so it tries again. There is no client-side fix for this, it's just a reality of the network being unreliable.
3.  **A challenge-delivery race of your own making**, if like us you have more than one path that can hand the browser a challenge.

So mismatch, along with missing and expired, is now a benign, retriable outcome. Mint a fresh challenge, answer `403`, let the browser try again. Bad signatures remain terminal and unchanged.

Another thing I liked was how this converges under concurrency, which the previous single-generation overlap window could not do. Three concurrent refreshes, all holding challenge `C`:

```
A(C)   → 200, cookie rotates, challenge now C2
B(C)   → benign 403, mint C3           browser now signs C3
D(C)   → benign 403, mint C4           browser now signs C4
B′(C3) → matches the previous value → 200, cookie rotates again
D′(C4) → C4 is now two generations back, overlap consumed → benign 403, mint C6
D″(C6) → 200. Converged.
```

Everybody gets there and nobody gets logged out. The cost is one extra round trip per concurrency event (which is a bargain compared to the cost of a support ticket). And note that this handles _unbounded_ concurrency, whereas the overlap window alone only ever covered two-deep. Three simultaneous requests were enough to trip a spurious logout under the old behaviour.

The general point that I keep coming back to is: A single-use nonce sent over a lossy, concurrent transport will sometimes be presented stale. That is intrinsic to the design and not a defect in it. The bug was never that mismatches happened. The bug was terminating on an outcome that is inherent, benign, and tells you nothing about attackers.

## Your SSO logins probably aren't binding at all

Chrome issues the registration POST in the \`SameSite\` context of the navigation that carried the registration header. That's fine for a normal login on your site, the user POSTed a form to you, the response is same-site, the POST carries your session cookie. All good.

A SAML login doesn't work like that. The user lands on your callback via a chain the IdP initiated, so the registration POST that Chrome makes off that response counts as cross-site, and a `Lax` session cookie is withheld from it. The request arrives unauthenticated and gets a `401`.

```
22:47:20  GET  /account/        200   ← Lax rides a top-level navigation
22:47:20  POST /dbsc/register   401   ← Lax does not ride this POST
```

And it's not merely a failure, it's a _spent_ failure. Chrome marks the session as having a persistent HTTP error and won't retry. Offering the header on the SSO response doesn't just fail to bind that login; it burns the only attempt you get.

The fix is to record the intent rather than act on it: mark that this login should be bound, then make the actual offer on the first document request that isn't cross-site, which is typically the very next page the user loads. We detect that with `Sec-Fetch-Site`, and treat a missing header as "don't bother", on the grounds that a client not sending `Sec-Fetch-Site` isn't going to register anyway.

## Fail open at the edges, fail closed at the gate

DBSC has a lovely property, which is that adopting it cannot lock anyone out. A browser that doesn't support it ignores the registration header, never registers, and your gate, finding no binding, degrades to ordinary cookie authentication. Locking a current Firefox user out is _structurally impossible_. You don't need a compatibility check or a user-agent sniff; the protocol does it for you.

That's the correct behaviour, and the library goes out of its way not to break it. But it has an ugly failure mode when it meets bad data.

We had a routine that parsed a stored binding and returned `null` if it couldn't. Perfectly ordinary defensive code. Except the gate reads `null` as "there's no binding here", which, per the paragraph above, means "degrade gracefully to cookie auth".

So a _corrupt_ binding didn't fail closed. It quietly downgraded a hardware-bound session to a bearer token, which is the entire thing we implemented DBSC to prevent!

It's not client-triggerable, to be clear, the realistic causes are internal: a serialiser mismatch, a truncated value, a schema skew across a deploy. But "only happens during a deploy" is not much comfort when the failure mode is silently disabling your session protection, and deploys are exactly when things are weird.

Now it throws, `null` means "no record", and only that. Present-but-unparseable is a distinct, loud, fail-closed condition. The distinction is documented in the storage interface, so anyone implementing their own backend knows which is which.

There's exactly one place we deliberately do the opposite, and I think the reasoning holds. Our "manage your sessions" screen shows a badge for whether each session is device-bound. If one row's binding can't be read, failing the whole page closed would mean a 500 for a page that is a _viewer_, not an enforcement point. So that badge is tri-state — bound, not bound, and unknown — and a bad read degrades to "unknown", surfaced as a visible alert rather than a silent "no".

## Some decisions I'd defend

A few smaller calls that I think generalise.

**Two overlap windows, deliberately asymmetric.** We keep a one-generation history for the cookie _across_ a successful refresh, but we explicitly discard the previous challenge on a successful refresh. That looks inconsistent, and it isn't: the refresh `200` delivers the new challenge synchronously with the new cookie, so there's no propagation window to bridge on that path — and _not_ keeping it stops a spent challenge from being replayable. There's a comment in the source that says, more or less, "this asymmetry is intentional, do not consistency-refactor these into one," because I could see exactly how that tidy-up would go.

**No Web Crypto fallback.** We were asked about supporting non-Chromium browsers with a software key, and I chose not to. The entire value of DBSC for me is the hardware-binding guarantee, and a software-bound key trades that away. A browser without DBSC degrading cleanly to plain cookie auth is expected. A browser holding a software key that your code treats as hardware-bound is not.

**Don't validate optional JWT claims speculatively.** We verify the signature and the challenge. We deliberately do not check `iat`, `exp`, `typ`, `iss` or `aud`. The draft lists them as optional, browser emission isn't stable across versions, and our challenge TTL is already stricter than any `exp` a browser would plausibly emit. Adding checks the spec doesn't require buys you nothing, and we can tighten later if a revision mandates it.

**Set a content type even on empty responses.** Small one. Our `403` challenge response has no body, but it declares `application/json` anyway — because in development a framework debug bar will cheerfully inject HTML into a response the browser is parsing strictly, and you will spend an hour on that. Ask me how I know.

## Where it stands

DBSC is now in open-beta at Report URI, it is being applied to a random downsample of our users that is increasing over time. The library is [report-uri/dbsc-php](https://github.com/report-uri/dbsc-php?utm_source=scotthelme.co.uk) if you want it, or just want to read the comments, and most of what's above is in there, next to the code it explains.

DBSC is genuinely good. It closes a real hole that MFA doesn't touch, and it does it without any risk of locking users out. I'd encourage anyone running sessions at scale to look at it.

Just don't redirect the refresh endpoint 😅

  
Have you enjoyed this post or found it helpful?  
☕️ Consider [buying me a coffee](https://donate.stripe.com/4gMeVd3xm0sOcRzexF93y00) to say thanks!  
🔔 Subscribe for [free notifications](https://scotthelme.ghost.io/#/portal/signup) when I publish!  
🤩 Become a [member](https://scotthelme.ghost.io/#/portal/signup) and support my content!  
  
Tags: [DBSC](/tag/dbsc/), [chrome](/tag/chrome/), [cookies](/tag/cookies/), [PHP](/tag/php/)

  

Please enable JavaScript to view the [comments powered by Disqus.](https://disqus.com/?ref_noscript)

{% endraw %}
