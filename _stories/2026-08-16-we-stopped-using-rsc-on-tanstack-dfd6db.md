---
layout: "story"
title: "We stopped using RSC on TanStack"
date: "2026-08-16"
permalink: "/2026/08/16/stories/we-stopped-using-rsc-on-tanstack-dfd6db/"
slug: "we-stopped-using-rsc-on-tanstack-dfd6db"
source: "React Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://reactdigest.net/subscribers/15ba1f04-697f-45f3-a1e0-b46f193a8e06/unsubscribe"
original_url: "https://reactdigest.net/links/23018/15ba1f04-697f-45f3-a1e0-b46f193a8e06/email"
category: "React"
excerpt_separator: ""
---

{% raw %}
TanStack stopped using React Server Components after making its markdown and code-rendering tools much smaller. React Server Components had improved performance by keeping large dependencies off the client, but it also added architectural complexity. With smaller packages, regular server-side rendering became simpler while keeping the site fast. The experience suggests React Server Components is useful for heavy server-side work, but it should not be used when simpler solutions are enough.

---

We Stopped Using RSC on TanStack.com | TanStack Blog

[![TanStack](/images/brand/tanstack-landscape-black.svg)![](/images/brand/tanstack-landscape-white.svg)](/)

Libraries

Framework

[Start](/start/latest)[Router](/router/latest)

Data & State

[Query](/query/latest)[DB](/db/latest)[Store](/store/latest)[AI](/ai/latest)

UI & UX

[Table](/table/latest)[Charts](/charts/latest)[Form](/form/latest)[Hotkeys](/hotkeys/latest)[Markdown](/markdown/latest)[Highlight](/highlight/latest)

Performance

[Virtual](/virtual/latest)[Pacer](/pacer/latest)

Tooling

[Devtools](/devtools/latest)[Config](/config/latest)[CLI](/cli/latest)[Intent](/intent/latest)

Browse all libraries

[Blog](/blog)

Blog & Release Notes

About

[YouTubeThe official TanStack channel.](https://youtube.com/@tan_stack)[WorkshopsLive sessions from the maintainers.](/workshops)[Release NotesThe latest releases and changelog.](/blog)

Community

Channels

[DiscordReal-time community support.](https://tlinz.com/discord)[GitHubSource, issues, discussions, and releases.](https://github.com/TanStack)

People & Work

[MaintainersMeet the people maintaining the stack.](/maintainers)[ShowcaseTeams building with TanStack.](/showcase)

Tools

Tools

[BuilderAlphaGenerate TanStack app starters.](/builder)[NotebooksAlphaCreate and share browser sandboxes.](/notebook)[StatsNPM and ecosystem usage data.](/stats/npm)

[Merch](/shop)

[View all](/shop)

Support

Support

[Support OverviewFind the right support path.](/support)[PartnersCompanies supporting TanStack.](/partners)[OSS SponsorsSponsors keeping TanStack open source.](/#sponsors)[Enterprise SupportPrivate consulting and expert support.](/paid-support)[ContactGet in touch with the TanStack team.](mailto:support@tanstack.com)

About

[EthosHow we approach open source.](/ethos)[TenetsThe values that shape TanStack libraries.](/tenets)[Design SystemLogos, tokens, and UI components.](/ds)

Partners

Sponsorships, placements, and partner pages.

Work with

![TanStack](/images/brand/tanstack-landscape-black.svg)![](/images/brand/tanstack-landscape-white.svg)

[Partnership Inquiry](mailto:partners@tanstack.com?subject=TanStack%20Partnership%20Inquiry)

Search

Ask AI

[Log In](/login)

LibrariesBlogCommunityToolsMerchSupport

SearchAsk AI[Sign In](/login)

Back

[Blog](/blog)On this page

# We Stopped Using RSC on TanStack.com

Copy page

_by Tanner Linsley on Jul 24, 2026._

Earlier this year, tanstack.com became one of my favorite examples for React Server Components. Our content-heavy pages were shipping a giant markdown and syntax highlighting stack to the browser, we moved that work to the server, a meaningful amount of JavaScript disappeared, and the site got faster. We wrote about it, measured it, and felt pretty good about the result because it was exactly the kind of problem RSC is supposed to solve.

The performance win was real, but after living with the architecture for a while, I kept noticing how long it took to explain what should have been a pretty boring content pipeline.

Markdown became JSX in server-only files, JSX became a Flight payload, route code received contentRsc, and every change had to understand which side of the runtime boundary it was allowed to touch. The RSC APIs themselves did what we asked them to do, but the code around them kept collecting context, bundler configuration, dependency resolution, manual chunking, serialization boundaries, special files, and values that stopped looking like content by the time they reached the route.

That was still a reasonable trade when the alternative was shipping Shiki and our old markdown stack to every docs reader, but it also left me wondering whether RSC was solving a hard application problem or mostly keeping a needlessly large dependency out of the browser.

## RSC solved the problem we actually had[#](#rsc-solved-the-problem-we-actually-had)

The first performance pass came after we removed third-party ads from tanstack.com. Once the ad stack was gone, the remaining first-party cost was much easier to see, and docs were the obvious problem.

At the time, one docs page was transferring about **1.1 MiB** of script, with about **358 KiB** clearly tied to syntax highlighting alone, mostly Shiki, its runtime pieces, themes, and language chunks. Markdown was still in the client path too, so the browser was basically downloading a small publishing system just to read the docs.

RSC fixed that in the most direct way possible, render markdown and highlighted code on the server, send the result to the client as Flight data, and stop shipping the big renderer to every reader.

The client bundle changes from that first move were substantial:

Page type

Client JS graph change

Blog post pages

\-153 KB gzipped

Docs pages

\-153 KB gzipped

Docs example pages

\-40 KB gzipped

The production pages moved too. /blog/react-server-components went from **52 to 74** in Lighthouse, Total Blocking Time dropped from **1,200ms to 260ms**, and transfer size dropped from **1,101 KiB to 785 KiB**. /router/latest/docs/overview went from **78 to 81**, TBT dropped from **280ms to 200ms**, and transfer size dropped from **917 KiB to 777 KiB**.

I don't want to rewrite that history to make the rest of this post cleaner. RSC worked, heavy client code stopped shipping to the client, and the browser had less to do, but once we saw how much of the win came from markdown and syntax highlighting, a more obvious question started bothering me.

Why did rendering markdown and highlighting code need **358 KiB** in the first place?

RSC gave us a good way to keep that cost out of the browser, but it didn't make the underlying renderer any smaller. We still had a huge general-purpose content stack, and now we also had an architecture built around keeping it on the server. If we could make that stack small enough to ship, would we still choose RSC?

Would anyone?

I knew tanstack.com couldn't answer that for every app, and I'm still happy to be proven wrong, but it felt pretty existential at the time. Once you strip away the routing, data loading, and colocation story that tends to get bundled into RSC, the concrete technical benefit I kept coming back to was much simpler, server components can use logic and dependencies that never ship to the browser. That matters a ton when the dependency is a giant markdown and syntax highlighting stack. I was having a harder time finding places where it mattered enough to justify the same machinery without one.

So we decided to find out whether the huge dependency was the use case.

## We made the expensive part small[#](#we-made-the-expensive-part-small)

We replaced the old stack with @tanstack/markdown and @tanstack/highlight, small packages built around the exact markdown and code rendering contract tanstack.com needs. [Introducing TanStack Markdown and TanStack Highlight](/blog/introducing-tanstack-markdown-and-highlight) covers why they're separate libraries, what each one does, and the deliberately narrow contracts that keep them small.

The result wasn't zero JavaScript, but it was small enough that shipping it stopped feeling irresponsible. On the production routes we measured, the explicit markdown and code renderer is about **27 KiB transferred**, roughly **18 to 19 KiB** more than the RSC version.

That's the part that changed the whole decision for me. RSC had been solving a dependency problem by turning it into an architecture decision, and once the dependency problem mostly disappeared, all of the architecture was still there waiting to be paid for.

Regular SSR could return raw markdown and source data through server functions, render it with packages we own, and keep the browser payload sane. We didn't need content to become a special serialized React value before a route could display it anymore, it could just be content again.

## We kept the performance win[#](#we-kept-the-performance-win)

We compared current production at tanstack.com against old.tanstack.com, which was still running the RSC version during the measurement window. These are direct Lighthouse CLI mobile runs against production URLs, with two-run averages from July 4, 2026.

The current site includes normal production work that landed after the old site was cut, so this isn't a perfect RSC-only lab test and I wouldn't assign every byte below to removing RSC. The question I care about is narrower, after markdown and highlighting got small and we moved content back to regular SSR, did we give up the performance win RSC had bought us?

On these routes, no.

Page

Old RSC score

Current SSR score

Old TBT

Current TBT

Old bytes

Current bytes

/blog/react-server-components

76

67

139 ms

66 ms

1,086 KiB

889 KiB

/router/latest/docs/overview

71

71

209 ms

115 ms

1,017 KiB

836 KiB

The blog Lighthouse score is lower in this run and docs are tied, so I'm not going to pretend one noisy score is a product truth. The byte and main-thread story is much clearer, the current non-RSC site is smaller and has lower Total Blocking Time on the two routes that mattered most to our original RSC story.

The payload breakdown is where the trade becomes easier to see:

Bucket

Old RSC blog

Current blog

Blog delta

Old RSC docs

Current docs

Docs delta

Document

99 KiB

37 KiB

\-62 KiB

86 KiB

34 KiB

\-52 KiB

App JS/assets

526 KiB

349 KiB

\-177 KiB

543 KiB

366 KiB

\-177 KiB

Markdown/code renderer

9 KiB

27 KiB

+18 KiB

8 KiB

27 KiB

+19 KiB

CSS

46 KiB

52 KiB

+6 KiB

46 KiB

52 KiB

+6 KiB

So what are we shipping more of? About **18 to 19 KiB** of explicit markdown and code-rendering chunks, plus a few KiB of CSS. Some of the **177 KiB** app JS reduction is probably unrelated cleanup, which is why I wouldn't call that an RSC delta, but the trade we can see is already enough, moving off RSC added a small renderer bucket and current production is still smaller overall on both routes.

## Six pages changes the math[#](#six-pages-changes-the-math)

The first-load comparison is actually the least favorable way to look at the current architecture, because that's the only time the browser pays for the renderer. Every page after that tilts the trade further toward regular SSR.

In the RSC version, every new piece of server-backed content came with the rendered Flight payload for that content. We kept the renderer itself out of the browser, but each navigation, refetch, or new server data value could make us pay for its serialized component tree again.

The regular SSR version pays for a tiny renderer once, then server functions only send the content data that changed. A docs request sends markdown, an example request sends source data, and the client already knows how to render both. We aren't retransferring the rendered component tree every time someone moves around the site.

Local production payload checks showed that direction pretty clearly:

Payload

RSC gzip

SSR gzip

Delta

Query landing code example

4.6 KB

0.0 KB

\-4.6 KB

Router docs overview content

5.2 KB

3.7 KB

\-1.5 KB

Router example initial file

5.6 KB

1.5 KB

\-4.1 KB

Heavy blog post content

15.0 KB

9.4 KB

\-5.6 KB

Our average visitor hits about six pages per session, so the first-load renderer cost is usually paid once while the payload savings keep showing up. The examples above save between **1.5 and 5.6 KB** every time that content is requested, and a page can request more than one server data value. By the sixth page, the renderer cost is old news while the RSC version would've kept sending rendered Flight payloads along the way.

That is a much bigger part of this trade than we gave it credit for the first time around. RSC turned a reusable client dependency into recurring serialized output, which made sense when the reusable dependency was enormous, but once we got it down to a few dozen KiB, paying once and sending only the data changes fit our traffic much better.

## The code kept telling us the same thing[#](#the-code-kept-telling-us-the-same-thing)

There was one question I kept using to test the architecture, where does markdown become something React can render?

The RSC answer started in fetchDocs or fetchBlogPost, moved through renderMarkdownToRsc, rendered markdown into JSX in processor.rsc.tsx, wrapped that JSX in a fragment in renderRsc.tsx, called renderServerComponent, serialized the result, and eventually arrived at the route as contentRsc.

The important part looked like this:

tsx

```
import { renderServerComponent } from '@tanstack/react-start/rsc'
import * as React from 'react'
import { renderMarkdownToJsx } from './processor.rsc'

export async function renderMarkdownToRsc(content: string) {
  const { content: contentJsx, headings } = await renderMarkdownToJsx(content)
  const contentRsc = await renderServerComponent(
    React.createElement(React.Fragment, null, contentJsx),
  )

  return {
    contentRsc,
    headings,
  }
}
```

There's nothing offensive about that function, and none of this is an indictment of the TanStack Start RSC setup or helper APIs. They did what we asked them to do. The problem was the shape that accumulated around the boundary, route components received contentRsc: React.ReactNode, the place displaying markdown no longer explained how markdown became markup, and every human or coding agent working in that path had to know which files were normal React, which were server-only React, which values were raw content, which were Flight payloads, and which component tree only existed after serialization.

That context isn't impossible to learn, but it made ordinary work feel oddly expensive. A content change could turn into a dependency graph question, a component change could turn into a server-boundary question, and bundler behavior was never very far away. None of those things were outrageous on their own, there were just too many of them for a markdown pipeline that no longer needed to hide a huge dependency.

The migration commit, 92b1c481, removed or renamed the whole content-specific RSC path:

*   src/utils/markdown/processor.rsc.tsx
*   src/utils/markdown/renderRsc.tsx
*   src/components/markdown/CodeBlock.server.tsx
*   src/components/markdown/renderCodeBlock.server.tsx
*   src/utils/landing-code-example.functions.ts
*   src/components/landing/LandingCodeExampleCard.server.tsx
*   src/components/landing/codeExamples.server.tsx
*   src/components/markdown/MarkdownHeadingContext.tsx

The deletions split between the RSC-specific content path and the old rendering plugins:

Removed code

Files

Lines removed

RSC-specific content plumbing

9

555

Old markdown/rendering plugins

8

994

The content path became boring again. Server functions return content data, MarkdownContent receives a markdown document and renders a normal Markdown component, landing examples are component data, and below-fold media-heavy sections still use targeted Hydrate timing so the browser doesn't eagerly schedule too much work on the first load.

The browser is doing a little more rendering work now, and that's a trade I'm happy to make because the amount is small, predictable, and reused. In return, the data moving through the app looks like the source material again, the route explains what it renders, and opening one file doesn't require a mental model of the whole bundler.

## RSC stopped earning its keep[#](#rsc-stopped-earning-its-keep)

I don't think our first RSC move was fake or misguided, it solved the problem we had at the time and gave us a very real performance win. I'm also not trying to prove that regular SSR beats RSC everywhere, because two production routes on one site couldn't prove that even if I wanted them to.

I also came away more skeptical of the broader RSC pitch. React core and Next.js tend to wrap server components in a much bigger story about routing, data loading, and colocation, but none of those things were what made RSC valuable here. The technical benefit we could actually point to was keeping expensive component logic and dependencies on the server and out of the client bundle, and that matters a ton for giant renderers, parsers, highlighters, formatters, and content pipelines.

Maybe there are many more use cases where that benefit justifies the machinery and we haven't run into them yet. I'm happy to be proven wrong, but our strongest RSC use case disappeared as soon as the dependency got small, and I don't think that's nothing.

For us, RSC bought relief from a huge markdown and highlighting stack, then that stack stopped being huge and we were left paying for runtime boundaries, bundler context, serialization, special files, and a content path that was harder for humans and coding agents to follow. The standard APIs weren't bad, the architecture just stopped earning its keep.

## Supporting RSC is different from requiring it[#](#supporting-rsc-is-different-from-requiring-it)

[Manuel's recent talk, TanStack Start and How It Supports React Server Components](https://gitnation.com/contents/tanstack-start-and-how-it-supports-react-server-components), is almost a perfect snapshot of where we were right before this change. TanStack.com was still our main RSC playground, markdown and syntax highlighting were exactly the kind of heavy server-rendered UI the design was built for, and Manuel was clear that RSC should be a primitive rather than the architecture, something you use when it makes sense instead of the default for every new project.

I don't want this post to flatten the amount of work behind TanStack Start's RSC support either. Manuel did a significant amount of difficult framework and bundler work to make Flight streams usable without forcing the rest of your application to orbit them, and we're going to keep supporting that work.

The fact that RSC is opt-in is what makes this decision so uneventful. Tanstack.com can stop using it without TanStack Start removing the capability, changing direction, or asking every other Start user to agree with us.

RSC support has also become something of an ecosystem checkbox. Next.js made RSC foundational to its current architecture, so people ask whether a framework supports RSC long before they can describe the problem they expect RSC to solve. I suspect most applications don't need them today, but developers still want to know the door is open, and that's fair.

I also have no idea whether RSC will remain the primitive that fills this role forever. Better framework primitives may eventually cover enough of the same ground. Flight or something like it might become framework-agnostic, move closer to the platform, or matter a lot less in a future where React isn't the center of the frontend universe. Gasp.

We don't need to predict that future to make a good decision now. Start can support RSC as an optional capability without treating it as the required center of every application. Honestly, the best evidence of Manuel's work may be that TanStack Start can keep supporting RSC while tanstack.com removes it, and neither choice has to compromise the other.

Regular SSR is the boring answer again, and it fits tanstack.com better. The renderer is tiny, the first load is still smaller overall on the routes we measured, the next five pages send changed content data instead of fresh rendered Flight payloads, and the code explains itself when you open the route.

I can imagine using RSC again when the server boundary is doing enough work to deserve being part of the application model, but I don't want to reach for an architecture to hide a dependency problem anymore. I'd rather make the dependency small and let content be content.

[Edit on GitHub](https://github.com/tanstack/tanstack.com/edit/main/src/blog/we-stopped-using-rsc-on-tanstack-com.md)

### On this page

*   [RSC solved the problem we actually had](/blog/we-stopped-using-rsc-on-tanstack-com#rsc-solved-the-problem-we-actually-had "rsc-solved-the-problem-we-actually-had")
*   [We made the expensive part small](/blog/we-stopped-using-rsc-on-tanstack-com#we-made-the-expensive-part-small "we-made-the-expensive-part-small")
*   [We kept the performance win](/blog/we-stopped-using-rsc-on-tanstack-com#we-kept-the-performance-win "we-kept-the-performance-win")
*   [Six pages changes the math](/blog/we-stopped-using-rsc-on-tanstack-com#six-pages-changes-the-math "six-pages-changes-the-math")
*   [The code kept telling us the same thing](/blog/we-stopped-using-rsc-on-tanstack-com#the-code-kept-telling-us-the-same-thing "the-code-kept-telling-us-the-same-thing")
*   [RSC stopped earning its keep](/blog/we-stopped-using-rsc-on-tanstack-com#rsc-stopped-earning-its-keep "rsc-stopped-earning-its-keep")
*   [Supporting RSC is different from requiring it](/blog/we-stopped-using-rsc-on-tanstack-com#supporting-rsc-is-different-from-requiring-it "supporting-rsc-is-different-from-requiring-it")

[Partners](/partners)[Become a Partner](mailto:partners@tanstack.com?subject=TanStack%20Partnership%20Inquiry)

Gold

[

![Cloudflare](/assets/cloudflare-black-6Ojsn8yh.svg)![Cloudflare](/assets/cloudflare-white-Co-Tyjbl.svg)



](https://www.cloudflare.com?utm_source=tanstack)[

![Railway](/assets/railway-black-DeBDfNao.svg)![Railway](/assets/railway-white-CFKFsfw2.svg)



](https://railway.com/?utm_medium=sponsor&utm_source=oss&utm_campaign=tanstack)[

![Lovable](/assets/lovable-black-1mVxR6Bj.svg)![Lovable](/assets/lovable-white-DLB1BxKZ.svg)



](https://lovable.dev?utm_source=tanstack)[

![CodeRabbit](/assets/coderabbit-light-CIzGLYU_.svg)![CodeRabbit](/assets/coderabbit-dark-D643Zkrv.svg)



](https://coderabbit.link/tanstack?utm_source=tanstack&via=tanstack)[

![Netlify](data:image/svg+xml,%3csvg%20width='512'%20height='209'%20viewBox='0%200%20512%20209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url\(%23clip0_235_8\)'%3e%3cpath%20d='M117.436%20207.036V154.604L118.529%20153.51H129.452L130.545%20154.604V207.036L129.452%20208.13H118.529L117.436%20207.036Z'%20fill='%2305BDBA'/%3e%3cpath%20d='M117.436%2053.5225V1.09339L118.529%200H129.452L130.545%201.09339V53.5225L129.452%2054.6159H118.529L117.436%2053.5225Z'%20fill='%2305BDBA'/%3e%3cpath%20d='M69.9539%20169.238H68.4094L60.6869%20161.512V159.967L78.7201%20141.938L86.8976%20141.942L87.9948%20143.031V151.209L69.9539%20169.238Z'%20fill='%2305BDBA'/%3e%3cpath%20d='M69.9462%2038.8917H68.4017L60.6792%2046.6181V48.1626L78.7124%2066.192L86.8899%2066.1882L87.9871%2065.0986V56.9212L69.9462%2038.8917Z'%20fill='%2305BDBA'/%3e%3cpath%20d='M1.09339%2097.5104H75.3711L76.4645%2098.6038V109.526L75.3711%20110.62H1.09339L0%20109.526V98.6038L1.09339%2097.5104Z'%20fill='%2305BDBA'/%3e%3cpath%20d='M440.999%2097.5104H510.91L512.004%2098.6038V109.526L510.91%20110.62H436.633L435.539%20109.526L439.905%2098.6038L440.999%2097.5104Z'%20fill='%2305BDBA'/%3e%3cpath%20d='M212.056%20108.727L210.963%20109.821H177.079L175.986%20110.914C175.986%20113.101%20178.173%20119.657%20186.916%20119.657C190.196%20119.657%20193.472%20118.564%20194.566%20116.377L195.659%20115.284H208.776L209.869%20116.377C208.776%20122.934%20203.313%20132.774%20186.916%20132.774C168.336%20132.774%20159.589%20119.657%20159.589%20104.357C159.589%2089.0576%20168.332%2075.9408%20185.822%2075.9408C203.313%2075.9408%20212.056%2089.0576%20212.056%20104.357V108.731V108.727ZM195.659%2097.7971C195.659%2096.7037%20194.566%2089.0538%20185.822%2089.0538C177.079%2089.0538%20175.986%2096.7037%20175.986%2097.7971L177.079%2098.8905H194.566L195.659%2097.7971Z'%20fill='%23014847'/%3e%3cpath%20d='M242.66%20115.284C242.66%20117.47%20243.753%20118.564%20245.94%20118.564H255.776L256.87%20119.657V130.587L255.776%20131.681H245.94C236.103%20131.681%20227.36%20127.307%20227.36%20115.284V91.2368L226.266%2090.1434H218.617L217.523%2089.05V78.1199L218.617%2077.0265H226.266L227.36%2075.9332V66.0965L228.453%2065.0031H241.57L242.663%2066.0965V75.9332L243.757%2077.0265H255.78L256.874%2078.1199V89.05L255.78%2090.1434H243.757L242.663%2091.2368V115.284H242.66Z'%20fill='%23014847'/%3e%3cpath%20d='M283.1%20131.681H269.983L268.889%20130.587V56.2636L269.983%2055.1702H283.1L284.193%2056.2636V130.587L283.1%20131.681Z'%20fill='%23014847'/%3e%3cpath%20d='M312.61%2068.2871H299.493L298.399%2067.1937V56.2636L299.493%2055.1702H312.61L313.703%2056.2636V67.1937L312.61%2068.2871ZM312.61%20131.681H299.493L298.399%20130.587V78.1237L299.493%2077.0304H312.61L313.703%2078.1237V130.587L312.61%20131.681Z'%20fill='%23014847'/%3e%3cpath%20d='M363.98%2056.2636V67.1937L362.886%2068.2871H353.05C350.863%2068.2871%20349.769%2069.3805%20349.769%2071.5672V75.9408L350.863%2077.0342H361.793L362.886%2078.1276V89.0576L361.793%2090.151H350.863L349.769%2091.2444V130.591L348.676%20131.684H335.559L334.466%20130.591V91.2444L333.372%2090.151H325.723L324.629%2089.0576V78.1276L325.723%2077.0342H333.372L334.466%2075.9408V71.5672C334.466%2059.5438%20343.209%2055.1702%20353.046%2055.1702H362.882L363.976%2056.2636H363.98Z'%20fill='%23014847'/%3e%3cpath%20d='M404.42%20132.774C400.046%20143.704%20395.677%20150.261%20380.373%20150.261H374.906L373.813%20149.167V138.237L374.906%20137.144H380.373C385.836%20137.144%20386.929%20136.05%20388.023%20132.77V131.677L370.536%2089.05V78.1199L371.63%2077.0265H381.466L382.56%2078.1199L395.677%20115.284H396.77L409.887%2078.1199L410.98%2077.0265H420.817L421.91%2078.1199V89.05L404.424%20132.77L404.42%20132.774Z'%20fill='%23014847'/%3e%3cpath%20d='M135.454%20131.681L134.361%20130.587L134.368%2098.9172C134.368%2093.4541%20132.22%2089.2182%20125.625%2089.0806C122.234%2088.9926%20118.354%2089.0729%20114.209%2089.2488L113.59%2089.8834L113.598%20130.587L112.504%20131.681H99.3913L98.2979%20130.587V77.5388L99.3913%2076.4454L128.901%2076.1778C143.685%2076.1778%20149.668%2086.3356%20149.668%2097.8009V130.587L148.575%20131.681H135.454Z'%20fill='%23014847'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_235_8'%3e%3crect%20width='512'%20height='208.126'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e)![Netlify](data:image/svg+xml,%3csvg%20width='512'%20height='209'%20viewBox='0%200%20512%20209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url\(%23clip0_235_26\)'%3e%3cpath%20d='M117.436%20207.036V154.604L118.529%20153.51H129.452L130.545%20154.604V207.036L129.452%20208.13H118.529L117.436%20207.036Z'%20fill='%2332E6E2'/%3e%3cpath%20d='M117.436%2053.5225V1.09339L118.529%200H129.452L130.545%201.09339V53.5225L129.452%2054.6159H118.529L117.436%2053.5225Z'%20fill='%2332E6E2'/%3e%3cpath%20d='M69.9539%20169.238H68.4094L60.6869%20161.512V159.967L78.7201%20141.938L86.8976%20141.942L87.9948%20143.031V151.209L69.9539%20169.238Z'%20fill='%2332E6E2'/%3e%3cpath%20d='M69.9462%2038.8917H68.4017L60.6792%2046.6181V48.1626L78.7124%2066.192L86.8899%2066.1882L87.9871%2065.0986V56.9212L69.9462%2038.8917Z'%20fill='%2332E6E2'/%3e%3cpath%20d='M1.09339%2097.5104H75.3711L76.4645%2098.6038V109.526L75.3711%20110.62H1.09339L0%20109.526V98.6038L1.09339%2097.5104Z'%20fill='%2332E6E2'/%3e%3cpath%20d='M440.999%2097.5104H510.91L512.004%2098.6038V109.526L510.91%20110.62H436.633L435.539%20109.526L439.905%2098.6038L440.999%2097.5104Z'%20fill='%2332E6E2'/%3e%3cpath%20d='M212.056%20108.727L210.963%20109.821H177.079L175.986%20110.914C175.986%20113.101%20178.173%20119.657%20186.916%20119.657C190.196%20119.657%20193.472%20118.564%20194.566%20116.377L195.659%20115.284H208.776L209.869%20116.377C208.776%20122.934%20203.313%20132.774%20186.916%20132.774C168.336%20132.774%20159.589%20119.657%20159.589%20104.357C159.589%2089.0576%20168.332%2075.9408%20185.822%2075.9408C203.313%2075.9408%20212.056%2089.0576%20212.056%20104.357V108.731V108.727ZM195.659%2097.7971C195.659%2096.7037%20194.566%2089.0538%20185.822%2089.0538C177.079%2089.0538%20175.986%2096.7037%20175.986%2097.7971L177.079%2098.8905H194.566L195.659%2097.7971Z'%20fill='white'/%3e%3cpath%20d='M242.66%20115.284C242.66%20117.47%20243.753%20118.564%20245.94%20118.564H255.776L256.87%20119.657V130.587L255.776%20131.681H245.94C236.103%20131.681%20227.36%20127.307%20227.36%20115.284V91.2368L226.266%2090.1434H218.617L217.523%2089.05V78.1199L218.617%2077.0265H226.266L227.36%2075.9332V66.0965L228.453%2065.0031H241.57L242.663%2066.0965V75.9332L243.757%2077.0265H255.78L256.874%2078.1199V89.05L255.78%2090.1434H243.757L242.663%2091.2368V115.284H242.66Z'%20fill='white'/%3e%3cpath%20d='M283.1%20131.681H269.983L268.889%20130.587V56.2636L269.983%2055.1702H283.1L284.193%2056.2636V130.587L283.1%20131.681Z'%20fill='white'/%3e%3cpath%20d='M312.61%2068.2871H299.493L298.399%2067.1937V56.2636L299.493%2055.1702H312.61L313.703%2056.2636V67.1937L312.61%2068.2871ZM312.61%20131.681H299.493L298.399%20130.587V78.1237L299.493%2077.0304H312.61L313.703%2078.1237V130.587L312.61%20131.681Z'%20fill='white'/%3e%3cpath%20d='M363.98%2056.2636V67.1937L362.886%2068.2871H353.05C350.863%2068.2871%20349.769%2069.3805%20349.769%2071.5672V75.9408L350.863%2077.0342H361.793L362.886%2078.1276V89.0576L361.793%2090.151H350.863L349.769%2091.2444V130.591L348.676%20131.684H335.559L334.466%20130.591V91.2444L333.372%2090.151H325.723L324.629%2089.0576V78.1276L325.723%2077.0342H333.372L334.466%2075.9408V71.5672C334.466%2059.5438%20343.209%2055.1702%20353.046%2055.1702H362.882L363.976%2056.2636H363.98Z'%20fill='white'/%3e%3cpath%20d='M404.42%20132.774C400.046%20143.704%20395.677%20150.261%20380.373%20150.261H374.906L373.813%20149.167V138.237L374.906%20137.144H380.373C385.836%20137.144%20386.929%20136.05%20388.023%20132.77V131.677L370.536%2089.05V78.1199L371.63%2077.0265H381.466L382.56%2078.1199L395.677%20115.284H396.77L409.887%2078.1199L410.98%2077.0265H420.817L421.91%2078.1199V89.05L404.424%20132.77L404.42%20132.774Z'%20fill='white'/%3e%3cpath%20d='M135.454%20131.681L134.361%20130.587L134.368%2098.9172C134.368%2093.4541%20132.22%2089.2182%20125.625%2089.0806C122.234%2088.9926%20118.354%2089.0729%20114.209%2089.2488L113.59%2089.8834L113.598%20130.587L112.504%20131.681H99.3913L98.2979%20130.587V77.5388L99.3913%2076.4454L128.901%2076.1778C143.685%2076.1778%20149.668%2086.3356%20149.668%2097.8009V130.587L148.575%20131.681H135.454Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_235_26'%3e%3crect%20width='512'%20height='208.126'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e)



](https://netlify.com?utm_source=tanstack)

Silver

[

![OpenRouter](/assets/openrouter-black-CJtk3mjZ.svg)![OpenRouter](/assets/openrouter-white-BLyN_5Ca.svg)



](https://openrouter.ai?utm_source=tanstack)[

![Clerk](/assets/clerk-logo-light-BYN-U_0H.svg)![Clerk](/assets/clerk-logo-dark-CRE22T_2.svg)



](https://go.clerk.com/wOwHtuJ)[

![AG Grid](data:image/svg+xml,%3csvg%20clip-rule='evenodd'%20fill-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%20viewBox='0%200%20235%2040'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='matrix\(.635723%200%200%20.635723%20-492.921%20-323.608\)'%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20d='m1099.4%20549.4v-12.5h-21.3l-12.5%2012.5z'%20fill='%23ff8b00'/%3e%3cpath%20d='m1123.4%20518.4h-26.7l-12.6%2012.5h39.3z'%20fill='%2355b2c6'/%3e%3cpath%20d='m1053.2%20561.9%206.4-6.4h21.6v12.5h-28z'%20fill='%23f00'/%3e%3cpath%20d='m1057.9%20543.3h13.8l12.6-12.5h-26.4z'%20fill='%23b4bbbf'/%3e%3cpath%20d='m1042.8%20561.9h10.4l12.4-12.5h-22.8z'%20fill='%23b4bbbf'/%3e%3cpath%20d='m1096.7%20518.4-6.4%206.4h-40.8v-12.5h47.2z'%20fill='%23b4bbbf'/%3e%3cpath%20d='m828.6%20559.7h-19.6l-3.4%208.4h-8.6l18.1-42.4h7.5l18.1%2042.4h-8.7zm-2.7-6.7-7.1-17.3-7.1%2017.3z'%20fill='%23031c4c'/%3e%3cpath%20d='m960.1%20541.3c2.5-3.7%208.8-4.1%2011.4-4.1v7.2c-3.2%200-6.4.1-8.3%201.5s-2.9%203.3-2.9%205.6v16.6h-7.8v-30.9h7.5z'%20fill='%23031c4c'/%3e%3c/g%3e%3cpath%20d='m975.8%20537.2h7.8v30.9h-7.8z'%20fill='%23031c4c'/%3e%3cpath%20d='m975.8%20523.4h7.8v9.2h-7.8z'%20fill='%23031c4c'/%3e%3cpath%20d='m1022.3%20523.4v44.7h-7.5l-.2-4.7c-1.1%201.6-2.5%202.9-4.2%203.9-1.7.9-3.8%201.4-6.2%201.4-2.1%200-4.1-.4-5.8-1.1-1.8-.8-3.4-1.8-4.7-3.2s-2.4-3.1-3.1-5c-.8-1.9-1.1-4.1-1.1-6.5s.4-4.6%201.1-6.6c.8-2%201.8-3.7%203.1-5.1s2.9-2.5%204.7-3.3%203.7-1.2%205.8-1.2c2.4%200%204.4.4%206.1%201.3s3.1%202.1%204.2%203.8v-18.3h7.8zm-16.4%2038.6c2.6%200%204.6-.9%206.2-2.6s2.4-4%202.4-6.8-.8-5-2.4-6.8c-1.6-1.7-3.6-2.6-6.2-2.6-2.5%200-4.6.9-6.1%202.6-1.6%201.7-2.4%204-2.4%206.8s.8%205%202.4%206.7c1.6%201.8%203.6%202.7%206.1%202.7'%20fill='%23031c4c'%20fill-rule='nonzero'/%3e%3cpath%20d='m885.8%20544.2h-19.3v6.7h11c-.3%203.4-1.6%206-3.8%208.1-2.2%202-5%203-8.6%203-2%200-3.9-.4-5.5-1.1-1.7-.7-3.1-1.7-4.3-3.1-1.2-1.3-2.1-2.9-2.8-4.8s-1-3.9-1-6.2.3-4.3%201-6.2c.6-1.9%201.6-3.4%202.8-4.8%201.2-1.3%202.6-2.3%204.3-3.1%201.7-.7%203.5-1.1%205.6-1.1%204.2%200%207.4%201%209.6%203l5.2-5.2c-3.9-3-8.9-4.6-14.8-4.6-3.3%200-6.3.5-9%201.6s-5%202.5-6.9%204.4-3.4%204.2-4.4%206.9-1.5%205.7-1.5%208.9.5%206.2%201.6%208.9%202.5%205%204.4%206.9%204.2%203.4%206.9%204.4c2.7%201.1%205.7%201.6%208.9%201.6s6.1-.5%208.7-1.6%204.8-2.5%206.6-4.4%203.2-4.2%204.2-6.9%201.5-5.7%201.5-8.9v-1.3c-.3-.2-.4-.7-.4-1.1'%20fill='%23031c4c'%20fill-rule='nonzero'/%3e%3cpath%20d='m946.8%20544.2h-19.3v6.7h11c-.3%203.4-1.6%206-3.8%208.1-2.2%202-5%203-8.6%203-2%200-3.9-.4-5.5-1.1-1.7-.7-3.1-1.7-4.3-3.1-1.2-1.3-2.1-2.9-2.8-4.8s-1-3.9-1-6.2.3-4.3%201-6.2c.6-1.9%201.6-3.4%202.8-4.8%201.2-1.3%202.6-2.3%204.3-3.1%201.7-.7%203.5-1.1%205.6-1.1%204.2%200%207.4%201%209.6%203l5.2-5.2c-3.9-3-8.9-4.6-14.8-4.6-3.3%200-6.3.5-9%201.6s-5%202.5-6.9%204.4-3.4%204.2-4.4%206.9-1.5%205.7-1.5%208.9.5%206.2%201.6%208.9%202.5%205%204.4%206.9%204.2%203.4%206.9%204.4c2.7%201.1%205.7%201.6%208.9%201.6s6.1-.5%208.7-1.6%204.8-2.5%206.6-4.4%203.2-4.2%204.2-6.9%201.5-5.7%201.5-8.9v-1.3c-.3-.2-.4-.7-.4-1.1'%20fill='%23031c4c'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e)![AG Grid](data:image/svg+xml,%3csvg%20clip-rule='evenodd'%20fill-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%20viewBox='0%200%20235%2040'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='matrix\(.635723%200%200%20.635723%20-492.921%20-323.608\)'%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20d='m1099.4%20549.4v-12.5h-21.3l-12.5%2012.5z'%20fill='%23ff8b00'/%3e%3cpath%20d='m1123.4%20518.4h-26.7l-12.6%2012.5h39.3z'%20fill='%2355b2c6'/%3e%3cpath%20d='m1053.2%20561.9%206.4-6.4h21.6v12.5h-28z'%20fill='%23f00'/%3e%3cpath%20d='m1057.9%20543.3h13.8l12.6-12.5h-26.4z'%20fill='%23b4bbbf'/%3e%3cpath%20d='m1042.8%20561.9h10.4l12.4-12.5h-22.8z'%20fill='%23b4bbbf'/%3e%3cpath%20d='m1096.7%20518.4-6.4%206.4h-40.8v-12.5h47.2z'%20fill='%23b4bbbf'/%3e%3cpath%20d='m828.6%20559.7h-19.6l-3.4%208.4h-8.6l18.1-42.4h7.5l18.1%2042.4h-8.7zm-2.7-6.7-7.1-17.3-7.1%2017.3z'%20fill='%23fff'/%3e%3cpath%20d='m960.1%20541.3c2.5-3.7%208.8-4.1%2011.4-4.1v7.2c-3.2%200-6.4.1-8.3%201.5s-2.9%203.3-2.9%205.6v16.6h-7.8v-30.9h7.5z'%20fill='%23fff'/%3e%3c/g%3e%3cpath%20d='m975.8%20537.2h7.8v30.9h-7.8z'%20fill='%23fff'/%3e%3cpath%20d='m975.8%20523.4h7.8v9.2h-7.8z'%20fill='%23fff'/%3e%3cpath%20d='m1022.3%20523.4v44.7h-7.5l-.2-4.7c-1.1%201.6-2.5%202.9-4.2%203.9-1.7.9-3.8%201.4-6.2%201.4-2.1%200-4.1-.4-5.8-1.1-1.8-.8-3.4-1.8-4.7-3.2s-2.4-3.1-3.1-5c-.8-1.9-1.1-4.1-1.1-6.5s.4-4.6%201.1-6.6c.8-2%201.8-3.7%203.1-5.1s2.9-2.5%204.7-3.3%203.7-1.2%205.8-1.2c2.4%200%204.4.4%206.1%201.3s3.1%202.1%204.2%203.8v-18.3h7.8zm-16.4%2038.6c2.6%200%204.6-.9%206.2-2.6s2.4-4%202.4-6.8-.8-5-2.4-6.8c-1.6-1.7-3.6-2.6-6.2-2.6-2.5%200-4.6.9-6.1%202.6-1.6%201.7-2.4%204-2.4%206.8s.8%205%202.4%206.7c1.6%201.8%203.6%202.7%206.1%202.7'%20fill='%23fff'%20fill-rule='nonzero'/%3e%3cpath%20d='m885.8%20544.2h-19.3v6.7h11c-.3%203.4-1.6%206-3.8%208.1-2.2%202-5%203-8.6%203-2%200-3.9-.4-5.5-1.1-1.7-.7-3.1-1.7-4.3-3.1-1.2-1.3-2.1-2.9-2.8-4.8s-1-3.9-1-6.2.3-4.3%201-6.2c.6-1.9%201.6-3.4%202.8-4.8%201.2-1.3%202.6-2.3%204.3-3.1%201.7-.7%203.5-1.1%205.6-1.1%204.2%200%207.4%201%209.6%203l5.2-5.2c-3.9-3-8.9-4.6-14.8-4.6-3.3%200-6.3.5-9%201.6s-5%202.5-6.9%204.4-3.4%204.2-4.4%206.9-1.5%205.7-1.5%208.9.5%206.2%201.6%208.9%202.5%205%204.4%206.9%204.2%203.4%206.9%204.4c2.7%201.1%205.7%201.6%208.9%201.6s6.1-.5%208.7-1.6%204.8-2.5%206.6-4.4%203.2-4.2%204.2-6.9%201.5-5.7%201.5-8.9v-1.3c-.3-.2-.4-.7-.4-1.1'%20fill='%23fff'%20fill-rule='nonzero'/%3e%3cpath%20d='m946.8%20544.2h-19.3v6.7h11c-.3%203.4-1.6%206-3.8%208.1-2.2%202-5%203-8.6%203-2%200-3.9-.4-5.5-1.1-1.7-.7-3.1-1.7-4.3-3.1-1.2-1.3-2.1-2.9-2.8-4.8s-1-3.9-1-6.2.3-4.3%201-6.2c.6-1.9%201.6-3.4%202.8-4.8%201.2-1.3%202.6-2.3%204.3-3.1%201.7-.7%203.5-1.1%205.6-1.1%204.2%200%207.4%201%209.6%203l5.2-5.2c-3.9-3-8.9-4.6-14.8-4.6-3.3%200-6.3.5-9%201.6s-5%202.5-6.9%204.4-3.4%204.2-4.4%206.9-1.5%205.7-1.5%208.9.5%206.2%201.6%208.9%202.5%205%204.4%206.9%204.2%203.4%206.9%204.4c2.7%201.1%205.7%201.6%208.9%201.6s6.1-.5%208.7-1.6%204.8-2.5%206.6-4.4%203.2-4.2%204.2-6.9%201.5-5.7%201.5-8.9v-1.3c-.3-.2-.4-.7-.4-1.1'%20fill='%23fff'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e)



](https://ag-grid.com/react-data-grid/?utm_source=reacttable&utm_campaign=githubreacttable)[

![WorkOS](/assets/workos-black-DnPI5Ve5.svg)![WorkOS](data:image/svg+xml,%3csvg%20width='880'%20height='168'%20viewBox='0%200%20880%20168'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url\(%23clip0_1647_45\)'%3e%3cpath%20d='M255.264%2025.3765H279.579L297.086%2097.519C300.332%20111.135%20300.976%20119.244%20300.976%20119.244H301.304C301.304%20119.244%20302.435%20111.306%20305.681%2097.519L322.373%2025.3765H349.934L367.599%2097.519C371.003%20111.622%20371.818%20119.244%20371.818%20119.244H372.304C372.304%20119.244%20372.632%20111.622%20375.866%2097.519L392.729%2025.3765H417.043L386.249%20143.717H359.174L340.536%2072.0612C336.646%2056.4997%20336.318%2049.5334%20336.318%2049.5334H335.99C335.99%2049.5334%20335.661%2056.4997%20332.099%2072.0612L314.592%20143.717H286.715L255.264%2025.3765Z'%20fill='white'/%3e%3cpath%20d='M412.984%20100.726C412.984%2073.6509%20430.491%2056.1442%20456.921%2056.1442C483.181%2056.1442%20500.688%2073.6509%20500.688%20100.726C500.688%20127.958%20483.181%20145.635%20456.921%20145.635C430.503%20145.623%20412.984%20127.958%20412.984%20100.726ZM477.99%20100.726C477.99%2083.2189%20469.565%2073.3227%20456.921%2073.3227C443.305%2073.3227%20435.682%2084.3495%20435.682%20100.726C435.682%20118.561%20444.107%20128.445%20456.921%20128.445C470.537%20128.445%20477.99%20117.418%20477.99%20100.726Z'%20fill='white'/%3e%3cpath%20d='M511.545%2057.4711H533.101V73.3609H533.587C537.319%2065.0938%20546.231%2056.8267%20561.464%2056.8267C564.054%2056.8267%20565.683%2057.155%20566.813%2057.4711V79.0263H566.169C566.169%2079.0263%20564.224%2078.3819%20558.875%2078.3819C542.182%2078.3819%20533.101%2088.266%20533.101%20106.745V143.704H511.545V57.4711Z'%20fill='white'/%3e%3cpath%20d='M576.868%2025.3765H598.423V63.3079C598.423%2085.6776%20598.095%2089.7261%20598.095%2089.7261H598.423L630.519%2057.4723H657.424L619.833%2094.7592L663.442%20143.717H637.984L606.532%20108.047L598.423%20115.986V143.705H576.868V25.3765Z'%20fill='white'/%3e%3cpath%20d='M663.757%2084.9796C663.757%2048.5072%20686.455%2024.1923%20720.496%2024.1923C754.537%2024.1923%20777.235%2048.5072%20777.235%2084.9796C777.235%20121.452%20754.537%20145.767%20720.496%20145.767C686.455%20145.767%20663.757%20121.452%20663.757%2084.9796ZM753.722%2084.9796C753.722%2060.1784%20740.434%2043.474%20720.483%2043.474C700.533%2043.474%20687.257%2060.1784%20687.257%2084.9796C687.257%20109.781%20700.545%20126.485%20720.483%20126.485C740.422%20126.485%20753.722%20109.781%20753.722%2084.9796Z'%20fill='white'/%3e%3cpath%20d='M785.488%20104.326H810.131C810.131%20118.271%20819.699%20126.052%20834.288%20126.052C846.603%20126.052%20855.041%20119.888%20855.041%20111.135C855.041%20101.25%20848.561%2098.6488%20827.966%2094.6003C809.158%2090.868%20789.22%2084.5461%20789.22%2059.9029C789.22%2039.3203%20806.727%2023.7587%20833.473%2023.7587C861.35%2023.7587%20878.541%2038.3477%20878.541%2060.3892H853.898C853.898%2049.6906%20845.631%2043.0405%20833.473%2043.0405C821.158%2043.0405%20813.535%2049.0341%20813.535%2057.7875C813.535%2067.0272%20818.884%2070.5893%20835.419%2073.9934C859.892%2079.1847%20880%2081.9323%20880%20109.165C880%20130.745%20861.192%20145.333%20833.473%20145.333C805.268%20145.333%20785.488%20128.957%20785.488%20104.326Z'%20fill='white'/%3e%3cpath%20d='M0%2084.0003C0%2087.6782%200.967855%2091.356%202.83904%2094.5177L36.7785%20153.299C40.2628%20159.299%2045.5537%20164.203%2052.1351%20166.397C65.1044%20170.72%2078.5253%20165.171%2084.9131%20154.073L93.1076%20139.878L60.7813%2084.0003L94.9143%2024.8321L103.109%2010.6369C105.561%206.37836%20108.851%202.89408%20112.723%200.119568H109.174H60.0715C50.8446%200.119568%2042.3275%205.02337%2037.7463%2013.0243L2.83904%2073.483C0.967855%2076.6446%200%2080.3225%200%2084.0003Z'%20fill='white'/%3e%3cpath%20d='M193.571%2083.9997C193.571%2080.3219%20192.603%2076.644%20190.732%2073.4824L156.341%2013.9271C149.953%202.89352%20136.532%20-2.65551%20123.563%201.60305C116.982%203.79685%20111.691%208.70065%20108.206%2014.7013L100.464%2028.0577L132.79%2083.9997L98.6569%20143.168L90.4624%20157.363C88.0105%20161.557%2084.7198%20165.106%2080.8484%20167.88H84.3972H133.5C142.727%20167.88%20151.244%20162.977%20155.825%20154.976L190.732%2094.5171C192.603%2091.3554%20193.571%2087.6776%20193.571%2083.9997Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1647_45'%3e%3crect%20width='880'%20height='168'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e)



](https://workos.com?utm_source=tanstack)[

![SerpApi](/assets/serpapi-black-DnXRiQQ3.svg)![SerpApi](/assets/serpapi-white-CPxTEZSp.svg)



](https://serpapi.com?utm_source=tanstack)

Bronze

[

![Electric](/assets/electric-light-C-5MDda4.svg)![Electric](/assets/electric-dark-Bfu2Vl2j.svg)



](https://electric.ax/?utm_source=tanstack)[

![Unkey](data:image/svg+xml,%3csvg%20width='83'%20height='28'%20viewBox='0%200%2083%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M76.1881%2028H66.859V24.8889H79.2979L76.1881%2028Z'%20fill='%23040406'/%3e%3cpath%20d='M82.4076%2021.7778L79.2979%2024.8889V6.22222H82.4076V21.7778Z'%20fill='%23040406'/%3e%3cpath%20d='M3.10972%206.22222V18.6667H12.4389L9.32916%2021.7778H3.10972C1.3916%2021.7778%200%2020.3856%200%2018.6667V6.22222H3.10972Z'%20fill='%23040406'/%3e%3cpath%20d='M20.2132%209.33333V21.7778H17.1035V12.4444L20.2132%209.33333Z'%20fill='%23040406'/%3e%3cpath%20d='M29.5423%206.22222C31.2605%206.22222%2032.6521%207.61444%2032.6521%209.33333V21.7778H29.5423V9.33333H20.2132L23.3229%206.22222H29.5423Z'%20fill='%23040406'/%3e%3cpath%20d='M37.3166%2014.2645L45.3553%206.22222H49.754L41.9797%2014L49.7555%2021.7778H45.3568L39.781%2016.1995L37.3166%2018.6636V21.7778H34.2069V3.11111L37.3166%200V14.2645Z'%20fill='%23040406'/%3e%3cpath%20d='M62.1944%206.22222C63.911%206.22222%2065.3041%207.61444%2065.3041%209.33333V12.4444C65.3041%2014.1633%2063.911%2015.5556%2062.1944%2015.5556H52.8652V18.6667H65.3041V21.7778H52.8652C52.007%2021.7778%2051.2296%2021.4293%2050.6667%2020.8662C50.1039%2020.3031%2049.7555%2019.5253%2049.7555%2018.6667V12.4444L52.8652%209.33333V12.4444H62.1944V9.33333H52.8652L55.975%206.22222H62.1944Z'%20fill='%23040406'/%3e%3cpath%20d='M69.9687%206.22222V18.6667H79.2979L76.1881%2021.7778H69.9687C68.2506%2021.7778%2066.859%2020.3856%2066.859%2018.6667V6.22222H69.9687Z'%20fill='%23040406'/%3e%3cpath%20d='M15.5486%2015.5556L12.4389%2018.6667V6.22222H15.5486V15.5556Z'%20fill='%23040406'/%3e%3c/svg%3e)![Unkey](data:image/svg+xml,%3csvg%20width='83'%20height='28'%20viewBox='0%200%2083%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M76.1881%2028H66.859V24.8889H79.2979L76.1881%2028Z'%20fill='white'/%3e%3cpath%20d='M82.4076%2021.7778L79.2979%2024.8889V6.22222H82.4076V21.7778Z'%20fill='white'/%3e%3cpath%20d='M3.10972%206.22222V18.6667H12.4389L9.32916%2021.7778H3.10972C1.3916%2021.7778%200%2020.3856%200%2018.6667V6.22222H3.10972Z'%20fill='white'/%3e%3cpath%20d='M20.2132%209.33333V21.7778H17.1035V12.4444L20.2132%209.33333Z'%20fill='white'/%3e%3cpath%20d='M29.5423%206.22222C31.2605%206.22222%2032.6521%207.61444%2032.6521%209.33333V21.7778H29.5423V9.33333H20.2132L23.3229%206.22222H29.5423Z'%20fill='white'/%3e%3cpath%20d='M37.3166%2014.2645L45.3553%206.22222H49.754L41.9797%2014L49.7555%2021.7778H45.3568L39.781%2016.1995L37.3166%2018.6636V21.7778H34.2069V3.11111L37.3166%200V14.2645Z'%20fill='white'/%3e%3cpath%20d='M62.1944%206.22222C63.911%206.22222%2065.3041%207.61444%2065.3041%209.33333V12.4444C65.3041%2014.1633%2063.911%2015.5556%2062.1944%2015.5556H52.8652V18.6667H65.3041V21.7778H52.8652C52.007%2021.7778%2051.2296%2021.4293%2050.6667%2020.8662C50.1039%2020.3031%2049.7555%2019.5253%2049.7555%2018.6667V12.4444L52.8652%209.33333V12.4444H62.1944V9.33333H52.8652L55.975%206.22222H62.1944Z'%20fill='white'/%3e%3cpath%20d='M69.9687%206.22222V18.6667H79.2979L76.1881%2021.7778H69.9687C68.2506%2021.7778%2066.859%2020.3856%2066.859%2018.6667V6.22222H69.9687Z'%20fill='white'/%3e%3cpath%20d='M15.5486%2015.5556L12.4389%2018.6667V6.22222H15.5486V15.5556Z'%20fill='white'/%3e%3c/svg%3e)



](https://www.unkey.com/?utm_source=tanstack)[

![Prisma](/assets/prisma-light-Cloa3Onm.svg)![Prisma](/assets/prisma-dark-DwgDxLwn.svg)



](https://www.prisma.io/?utm_source=tanstack&via=tanstack)[

![Sentry](data:image/svg+xml,%3csvg%20height='119'%20viewBox='0%200%20222%2066'%20width='400'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m29%202.26a4.67%204.67%200%200%200%20-8%200l-6.58%2011.27a32.21%2032.21%200%200%201%2017.75%2026.66h-4.62a27.68%2027.68%200%200%200%20-15.46-22.72l-6.09%2010.53a15.92%2015.92%200%200%201%209.23%2012.17h-10.61a.76.76%200%200%201%20-.62-1.11l2.94-5a10.74%2010.74%200%200%200%20-3.36-1.9l-2.91%205a4.54%204.54%200%200%200%201.69%206.24%204.66%204.66%200%200%200%202.26.6h14.53a19.4%2019.4%200%200%200%20-8-17.31l2.31-4a23.87%2023.87%200%200%201%2010.3%2021.31h12.31a35.88%2035.88%200%200%200%20-16.41-31.8l4.67-8a.77.77%200%200%201%201.05-.27c.53.29%2020.29%2034.77%2020.66%2035.17a.76.76%200%200%201%20-.68%201.13h-4.76q.09%201.91%200%203.81h4.78a4.59%204.59%200%200%200%204.62-4.61%204.49%204.49%200%200%200%20-.62-2.28zm95.32%2026.02-14.76-19.06h-3.68v25.55h3.73v-19.58l15.18%2019.58h3.26v-25.55h-3.73zm-37.17-4.74h13.23v-3.32h-13.24v-7.69h14.93v-3.32h-18.73v25.56h18.92v-3.32h-15.12zm-15.56-3.24c-5.15-1.24-6.59-2.22-6.59-4.6%200-2.14%201.89-3.59%204.71-3.59a12.06%2012.06%200%200%201%207.07%202.55l2-2.83a14.1%2014.1%200%200%200%20-9-3c-5.06%200-8.59%203-8.59%207.27%200%204.6%203%206.19%208.46%207.52%204.86%201.12%206.35%202.16%206.35%204.49s-2%203.77-5.09%203.77a12.34%2012.34%200%200%201%20-8.3-3.26l-2.25%202.69a15.94%2015.94%200%200%200%2010.42%203.85c5.48%200%209-2.95%209-7.51-.03-3.86-2.31-5.93-8.19-7.35zm124.11-11.08-7.69%2012-7.64-12h-4.46l10.09%2015.45v10.11h3.84v-10.23l10.16-15.33zm-64.63%203.46h8.37v22.1h3.84v-22.1h8.37v-3.46h-20.57zm38.34%2012.12c3.86-1.07%206-3.77%206-7.63%200-4.91-3.59-8-9.38-8h-11.36v25.59h3.8v-9.18h6.45l6.48%209.2h4.44l-7-9.82zm-10.95-2.5v-9.7h7.17c3.74%200%205.88%201.77%205.88%204.84s-2.29%204.86-5.84%204.86z'%20fill='%23362d59'%20transform='translate\(11%2011\)'/%3e%3c/svg%3e)![Sentry](data:image/svg+xml,%3csvg%20height='119'%20viewBox='0%200%20222%2066'%20width='400'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m29%202.26a4.67%204.67%200%200%200%20-8%200l-6.58%2011.27a32.21%2032.21%200%200%201%2017.75%2026.66h-4.62a27.68%2027.68%200%200%200%20-15.46-22.72l-6.09%2010.53a15.92%2015.92%200%200%201%209.23%2012.17h-10.61a.76.76%200%200%201%20-.62-1.11l2.94-5a10.74%2010.74%200%200%200%20-3.36-1.9l-2.91%205a4.54%204.54%200%200%200%201.69%206.24%204.66%204.66%200%200%200%202.26.6h14.53a19.4%2019.4%200%200%200%20-8-17.31l2.31-4a23.87%2023.87%200%200%201%2010.3%2021.31h12.31a35.88%2035.88%200%200%200%20-16.41-31.8l4.67-8a.77.77%200%200%201%201.05-.27c.53.29%2020.29%2034.77%2020.66%2035.17a.76.76%200%200%201%20-.68%201.13h-4.76q.09%201.91%200%203.81h4.78a4.59%204.59%200%200%200%204.62-4.61%204.49%204.49%200%200%200%20-.62-2.28zm95.32%2026.02-14.76-19.06h-3.68v25.55h3.73v-19.58l15.18%2019.58h3.26v-25.55h-3.73zm-37.17-4.74h13.23v-3.32h-13.24v-7.69h14.93v-3.32h-18.73v25.56h18.92v-3.32h-15.12zm-15.56-3.24c-5.15-1.24-6.59-2.22-6.59-4.6%200-2.14%201.89-3.59%204.71-3.59a12.06%2012.06%200%200%201%207.07%202.55l2-2.83a14.1%2014.1%200%200%200%20-9-3c-5.06%200-8.59%203-8.59%207.27%200%204.6%203%206.19%208.46%207.52%204.86%201.12%206.35%202.16%206.35%204.49s-2%203.77-5.09%203.77a12.34%2012.34%200%200%201%20-8.3-3.26l-2.25%202.69a15.94%2015.94%200%200%200%2010.42%203.85c5.48%200%209-2.95%209-7.51-.03-3.86-2.31-5.93-8.19-7.35zm124.11-11.08-7.69%2012-7.64-12h-4.46l10.09%2015.45v10.11h3.84v-10.23l10.16-15.33zm-64.63%203.46h8.37v22.1h3.84v-22.1h8.37v-3.46h-20.57zm38.34%2012.12c3.86-1.07%206-3.77%206-7.63%200-4.91-3.59-8-9.38-8h-11.36v25.59h3.8v-9.18h6.45l6.48%209.2h4.44l-7-9.82zm-10.95-2.5v-9.7h7.17c3.74%200%205.88%201.77%205.88%204.84s-2.29%204.86-5.84%204.86z'%20fill='%23fff'%20transform='translate\(11%2011\)'/%3e%3c/svg%3e)



](https://sentry.io?utm_source=tanstack)

[Latest Posts](/blog)

[Libraries](/#libraries)

[Start](/start/latest)[Router](/router/latest)[Query](/query/latest)[Table](/table/latest)[Charts](/charts/latest)[Form](/form/latest)[DB](/db/latest)[AI](/ai/latest)

[](/)

The open source application stack for the web.

## Libraries

*   [Browse all](/libraries)
*   [Query](/query/latest)
*   [Router](/router/latest)
*   [Start](/start/latest)
*   [Table](/table/latest)
*   [Form](/form/latest)

## Blog

*   [Latest posts](/blog)
*   [Release notes](/blog)
*   [YouTube](https://youtube.com/@tan_stack)
*   [Workshops](/workshops)

## Community

*   [Discord](https://tlinz.com/discord)
*   [GitHub](https://github.com/TanStack)
*   [Maintainers](/maintainers)
*   [Showcase](/showcase)

## Tools

*   [Builder](/builder)
*   [Stats](/stats/npm)

## Merch

*   [Shop](/shop)
*   [Cart](/shop/cart)

## Support

*   [Support overview](/support)
*   [Partners](/partners)
*   [OSS sponsors](/#sponsors)
*   [Enterprise support](/paid-support)
*   [Contact](mailto:support@tanstack.com)
*   [Ethos](/ethos)
*   [Tenets](/tenets)
*   [Design system](/ds)

© 2026 TanStack LLC

*   [Privacy](/privacy)
*   [Terms](/terms)

*   [](https://x.com/tan_stack)
*   [](https://bsky.app/profile/tanstack.com)
*   [](https://github.com/tanstack)
*   [](https://youtube.com/@tan_stack)
*   [](https://www.linkedin.com/company/tanstack)

{% endraw %}
