---
layout: "story"
title: "Allow to configure ERB options through ActionView::Base"
date: "2026-08-16"
permalink: "/2026/08/16/stories/allow-to-configure-erb-options-through-actionview-base-f5815c/"
slug: "allow-to-configure-erb-options-through-actionview-base-f5815c"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58359"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
The ActionView::Template::Handlers::ERB class is now private API. Applications that used to configure ERB options such as escape_ignore_list now need to do this on the ActionView::Base class or on the railtie config.action_view configuration.

---

Allow to configure ERB options through \`ActionView::Base\` by Edouard-chin · Pull Request #58359 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58359)

Appearance settings

*   Platform
    
    *   AI CODE CREATION
        
        *   [GitHub CopilotWrite better code with AI](https://github.com/features/copilot)
        *   [GitHub Copilot appDirect agents from issue to merge](https://github.com/features/ai/github-app)
        *   [MCP RegistryIntegrate external tools](https://github.com/mcp)
        
    *   DEVELOPER WORKFLOWS
        
        *   [ActionsAutomate any workflow](https://github.com/features/actions)
        *   [CodespacesInstant dev environments](https://github.com/features/codespaces)
        *   [IssuesPlan and track work](https://github.com/features/issues)
        *   [Code ReviewManage code changes](https://github.com/features/code-review)
        *   [Code QualityEnforce quality at merge](https://github.com/features/code-quality)
        
    *   APPLICATION SECURITY
        
        *   [GitHub Advanced SecurityFind and fix vulnerabilities](https://github.com/security/advanced-security)
        *   [Code securitySecure your code as you build](https://github.com/security/advanced-security/code-security)
        *   [Secret protectionStop leaks before they start](https://github.com/security/advanced-security/secret-protection)
        
    *   EXPLORE
        
        *   [Why GitHub](https://github.com/why-github)
        *   [Documentation](https://docs.github.com)
        *   [Blog](https://github.blog)
        *   [Changelog](https://github.blog/changelog)
        *   [Marketplace](https://github.com/marketplace)
        
    
    [View all features](https://github.com/features)
    
*   Solutions
    
    *   BY COMPANY SIZE
        
        *   [Enterprises](https://github.com/enterprise)
        *   [Small and medium teams](https://github.com/team)
        *   [Startups](https://github.com/enterprise/startups)
        *   [Nonprofits](https://github.com/solutions/industry/nonprofits)
        
    *   BY USE CASE
        
        *   [App Modernization](https://github.com/solutions/use-case/app-modernization)
        *   [DevSecOps](https://github.com/solutions/use-case/devsecops)
        *   [DevOps](https://github.com/solutions/use-case/devops)
        *   [CI/CD](https://github.com/solutions/use-case/ci-cd)
        *   [View all use cases](https://github.com/solutions/use-case)
        
    *   BY INDUSTRY
        
        *   [Healthcare](https://github.com/solutions/industry/healthcare)
        *   [Financial services](https://github.com/solutions/industry/financial-services)
        *   [Manufacturing](https://github.com/solutions/industry/manufacturing)
        *   [Government](https://github.com/solutions/industry/government)
        *   [View all industries](https://github.com/solutions/industry)
        
    
    [View all solutions](https://github.com/solutions)
    
*   Resources
    
    *   EXPLORE BY TOPIC
        
        *   [AI](https://github.com/resources/articles?topic=ai)
        *   [Software Development](https://github.com/resources/articles?topic=software-development)
        *   [DevOps](https://github.com/resources/articles?topic=devops)
        *   [Security](https://github.com/resources/articles?topic=security)
        *   [View all topics](https://github.com/resources/articles)
        
    *   EXPLORE BY TYPE
        
        *   [Customer stories](https://github.com/customer-stories)
        *   [Events & webinars](https://github.com/resources/events)
        *   [Ebooks & reports](https://github.com/resources/whitepapers)
        *   [Business insights](https://github.com/solutions/executive-insights)
        *   [GitHub Skills](https://skills.github.com)
        
    *   SUPPORT & SERVICES
        
        *   [Documentation](https://docs.github.com)
        *   [Customer support](https://support.github.com)
        *   [Community forum](https://github.com/orgs/community/discussions)
        *   [Trust center](https://github.com/trust-center)
        *   [Partners](https://github.com/partners)
        
    
    [View all resources](https://github.com/resources)
    
*   Open Source
    
    *   COMMUNITY
        
        *   [GitHub SponsorsFund open source developers](https://github.com/open-source/sponsors)
        
    *   PROGRAMS
        
        *   [Security Lab](https://securitylab.github.com)
        *   [Maintainer Community](https://maintainers.github.com)
        *   [Accelerator](https://github.com/open-source/accelerator)
        *   [GitHub Stars](https://stars.github.com)
        *   [Archive Program](https://archiveprogram.github.com)
        
    *   REPOSITORIES
        
        *   [Topics](https://github.com/topics)
        *   [Trending](https://github.com/trending)
        *   [Collections](https://github.com/collections)
        
    
*   Enterprise
    
    *   ENTERPRISE SOLUTIONS
        
        *   [Enterprise platformAI-powered developer platform](https://github.com/enterprise)
        
    *   AVAILABLE ADD-ONS
        
        *   [GitHub Advanced SecurityEnterprise-grade security features](https://github.com/security/advanced-security)
        *   [Copilot for BusinessEnterprise-grade AI features](https://github.com/features/copilot/copilot-business)
        *   [Premium SupportEnterprise-grade 24/7 support](https://github.com/enterprise/premium-support)
        
    
*   [Pricing](https://github.com/pricing)

Search/

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58359)

[Sign up](/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fvoltron%2Fpull_requests_fragments%2Fpull_request_layout&source=header-repo&source_repo=rails%2Frails)

Appearance settings

You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert

### Uh oh!

There was an error while loading. Please reload this page.

[rails](/rails) / **[rails](/rails/rails)** Public

*   [Notifications](/login?return_to=%2Frails%2Frails) You must be signed in to change notification settings
*   [Fork 22.4k](/login?return_to=%2Frails%2Frails)
*   [Star 58.7k](/login?return_to=%2Frails%2Frails)
    

*   [Code](/rails/rails)
*   [Issues 485](/rails/rails/issues)
*   [Pull requests 1.1k](/rails/rails/pulls)
*   [Discussions](/rails/rails/discussions)
*   [Actions](/rails/rails/actions)
*   [Security and quality 26](/rails/rails/security)
*   [Insights](/rails/rails/pulse)

Additional navigation options

*   [Code](/rails/rails)
*   [Issues](/rails/rails/issues)
*   [Pull requests](/rails/rails/pulls)
*   [Discussions](/rails/rails/discussions)
*   [Actions](/rails/rails/actions)
*   [Security and quality](/rails/rails/security)
*   [Insights](/rails/rails/pulse)

# Allow to configure ERB options through `ActionView::Base` - #58359

#58359

Merged

[gmcgibbon](/gmcgibbon) merged 2 commits into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[Shopify:ec-doc-for-erb](/Shopify/rails/tree/ec-doc-for-erb)Shopify/rails:ec-doc-for-erbCopy head branch name to clipboard

Aug 7, 2026

[Conversation](/rails/rails/pull/58359)[Commits2 (2)](/rails/rails/pull/58359/commits)[Checks](/rails/rails/pull/58359/checks)[Files changed](/rails/rails/pull/58359/files)

Merged

## 

[Allow to configure ERB options through `ActionView::Base`](#top)#58359

[gmcgibbon](/gmcgibbon) merged 2 commits into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[Shopify:ec-doc-for-erb](/Shopify/rails/tree/ec-doc-for-erb)Shopify/rails:ec-doc-for-erbCopy head branch name to clipboard

## Conversation

 [![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=80&v=4)](/Edouard-chin)

### 

 ![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=48&v=4)**[Edouard-chin](/Edouard-chin)** commented [Aug 3, 2026](#issue-5050679034) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Member

### Motivation / Background

This Pull Request has been created because in [970bf38](https://github.com/rails/rails/commit/970bf380fe8243b2c86ea4ed26abbc09c2d28e5c) we added a :nodoc: to officialy not document AV::Template::Handlers::ERB, but some applications were legitimatelly referecing that class to store documented configuration.

### Additional information

This patch allows to configure all options from the ERB handlers inside ActionView::Base (or `config.action_view.<setting>`). This was already possible for `erb_trim_mode`.

Also added new tests to ensure the behaviour since none existed.

### Checklist

Before submitting the PR make sure the following are checked:

*    This Pull Request is related to one change. Unrelated changes should be opened in separate PRs.
*    Commit message has a detailed description of what changed and why. If this PR fixes a related issue include it in the commit message. Ex: `[Fix #issue-number]`
*    Tests are added or updated if you fix a bug or add a feature.
*    CHANGELOG files are updated for the changed libraries if there is a behavior change or additional feature. Minor bug fixes and documentation changes should not be included.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs) [actionview](/rails/rails/issues?q=state%3Aopen%20label%3Aactionview) labels [Aug 3, 2026](#event-28892419473)

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/f24e83db7f91c0e7a30adec3fec00b3137fa6e40..99dee30568b62733050fd98d656d02947885228e) the ec-doc-for-erb branch from [`f24e83d`](/rails/rails/commit/f24e83db7f91c0e7a30adec3fec00b3137fa6e40) to [`99dee30`](/rails/rails/commit/99dee30568b62733050fd98d656d02947885228e) [Compare](/rails/rails/compare/f24e83db7f91c0e7a30adec3fec00b3137fa6e40..99dee30568b62733050fd98d656d02947885228e) [August 3, 2026 14:09](#event-28892605252)

[![etiennebarrie](https://avatars.githubusercontent.com/u/3535?s=60&v=4)](/etiennebarrie)

**[etiennebarrie](/etiennebarrie)** reviewed [Aug 3, 2026](#pullrequestreview-4845009459)

[View reviewed changes](/rails/rails/pull/58359/files)

### 

 ![@etiennebarrie](https://avatars.githubusercontent.com/u/3535?s=48&v=4)**[etiennebarrie](/etiennebarrie)** left a comment

Copy link

Copy Markdown

Contributor



There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

FWIW the documents weren't working: [https://api.rubyonrails.org/v8.1/classes/ActionView/Template/Handlers/ERB.html](https://api.rubyonrails.org/v8.1/classes/ActionView/Template/Handlers/ERB.html)

I don't know if we ever had a patch to support `class_attribute` but I can't even find an old version of the documentation that showed these.

But it's good to make them public I think 👍

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

👍 1 Edouard-chin reacted with thumbs up emoji

All reactions

*   👍 1 reaction

Comment thread [actionview/lib/action\_view/base.rb](/rails/rails/pull/58359/files#diff-2c5bc6d4049baee92f8bb3b4cfd67b744ca0309ffbfdf6910bee8d0024ec4dff) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/99dee30568b62733050fd98d656d02947885228e..ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4) the ec-doc-for-erb branch from [`99dee30`](/rails/rails/commit/99dee30568b62733050fd98d656d02947885228e) to [`ca374b9`](/rails/rails/commit/ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4) [Compare](/rails/rails/compare/99dee30568b62733050fd98d656d02947885228e..ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4) [August 3, 2026 14:20](#event-28893304789)

[![etiennebarrie](https://avatars.githubusercontent.com/u/3535?s=60&v=4)](/etiennebarrie)

**[etiennebarrie](/etiennebarrie)** reviewed [Aug 3, 2026](#pullrequestreview-4845284618)

[View reviewed changes](/rails/rails/pull/58359/files)

### 

 ![@etiennebarrie](https://avatars.githubusercontent.com/u/3535?s=48&v=4)**[etiennebarrie](/etiennebarrie)** left a comment

Copy link

Copy Markdown

Contributor



There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

oh I found this: [https://api.rubyonrails.org/v3.0/classes/ActionView/Template/Handlers/ERB.html#method-c-erb\_trim\_mode](https://api.rubyonrails.org/v3.0/classes/ActionView/Template/Handlers/ERB.html#method-c-erb_trim_mode)

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

Comment thread [actionview/lib/action\_view/base.rb](/rails/rails/pull/58359/files#diff-2c5bc6d4049baee92f8bb3b4cfd67b744ca0309ffbfdf6910bee8d0024ec4dff) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

Comment thread [actionview/lib/action\_view/base.rb](/rails/rails/pull/58359/files#diff-2c5bc6d4049baee92f8bb3b4cfd67b744ca0309ffbfdf6910bee8d0024ec4dff) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4..477a080ddf38522c5a4b55c30d64c99eb5b46b2b) the ec-doc-for-erb branch from [`ca374b9`](/rails/rails/commit/ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4) to [`477a080`](/rails/rails/commit/477a080ddf38522c5a4b55c30d64c99eb5b46b2b) [Compare](/rails/rails/compare/ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4..477a080ddf38522c5a4b55c30d64c99eb5b46b2b) [August 3, 2026 15:16](#event-28896494349)

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin) [Edouard-chin](/Edouard-chin) mentioned this pull request [Aug 3, 2026](#ref-pullrequest-5051484888)

[Freeze ActionView::Template::Handlers::ERB.escape\_ignore\_list #58362](/rails/rails/pull/58362)

Merged

4 tasks

[![@hmcguire-shopify](https://avatars.githubusercontent.com/u/103438607?s=80&u=1ef31a45bb15573c57fb880557a81ad2d1d6eace&v=4)](/hmcguire-shopify)

### 

**[hmcguire-shopify](/hmcguire-shopify)** commented [Aug 4, 2026](#issuecomment-5180509060) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Contributor

> but some applications were legitimatelly referecing that class to store documented configuration.

If we're acknowledging that the class was actually used, shouldn't we add deprecations for the existing accessors to suggest the using the new ones?

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=80&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

### 

**[Edouard-chin](/Edouard-chin)** commented [Aug 4, 2026](#issuecomment-5182543370) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Member Author

Yeah it's a bit of a unusual situation because we aren't deprecating any code per se (that's why I made sure the CHANGELOG didn't mention the word deprecation), just marking it no doc. Have to find a way to prevent triggering a deprecation when those get used internally.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[gmcgibbon](/gmcgibbon) pushed a commit that referenced this pull request [Aug 4, 2026](#ref-commit-6afe70b)

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

`[Freeze ActionView::Template::Handlers::ERB.escape_ignore_list:](/rails/rails/commit/6afe70b8116de7292d1b47e906670bd3644dd9d7 "Freeze ActionView::Template::Handlers::ERB.escape_ignore_list: - I'd like to access this array inside a Ractor. It's not possible now because the array isn't frozen. This configuration is Public API (even thouh the surrouding class was recently changed to be nodoc, but the doc is being retroduced in #58359) While it's possible that this array gets mutated at runtime, it's really unlikely, and it would be inconsistent. A quick GitHub codesearch confirms that the few libraries/app that modifies this config does that at boot time.")` …

  

  

`[6afe70b](/rails/rails/commit/6afe70b8116de7292d1b47e906670bd3644dd9d7)`

\- I'd like to access this array inside a Ractor. It's not possible now
  because the array isn't frozen.

  This configuration is Public API (even thouh the surrouding class
  was recently changed to be nodoc, but the doc is being retroduced
  in [#58359](https://github.com/rails/rails/pull/58359))

  While it's possible that this array gets mutated at runtime, it's
  really unlikely, and it would be inconsistent. A quick GitHub
  codesearch confirms that the few libraries/app that modifies
  this config does that at boot time.

[![gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=60&v=4)](/gmcgibbon)

**[gmcgibbon](/gmcgibbon)** reviewed [Aug 4, 2026](#pullrequestreview-4859333201)

[View reviewed changes](/rails/rails/pull/58359/files)

### 

 ![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=48&v=4)**[gmcgibbon](/gmcgibbon)** left a comment

Copy link

Copy Markdown

Member



There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

As per our discussion in [#58362](https://github.com/rails/rails/pull/58362), I think we need to use ActiveSupport::Ractors.make\_shareable on the value now that it can be set via config. Apps and dependencies may not have frozen\_string\_literal enabled, so it is unsafe to assume that they're shovel on frozen strings IMO.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

Comment thread [actionview/lib/action\_view/base.rb](/rails/rails/pull/58359/files#diff-2c5bc6d4049baee92f8bb3b4cfd67b744ca0309ffbfdf6910bee8d0024ec4dff) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

Comment thread [guides/source/configuring.md](/rails/rails/pull/58359/files#diff-210d0f245e618b7f8c6fcb53f518bd7fd343ce7e5d8c609ecfdb149418beca19) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

Comment thread [guides/source/configuring.md](/rails/rails/pull/58359/files#diff-210d0f245e618b7f8c6fcb53f518bd7fd343ce7e5d8c609ecfdb149418beca19) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=80&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

### 

**[Edouard-chin](/Edouard-chin)** commented [Aug 4, 2026](#issuecomment-5185357942)

Copy link

Copy Markdown

Member Author

> Apps and dependencies may not have frozen\_string\_literal enabled,

I don't think that this is a framework concern. I'm happy to do the change, but I find that we are starting to introduce inconsistency on our approach. E.g. we already merged a few similar patches without taking into account that apps/libraries may use unfrozen strings [0e2dc80b9e1](https://github.com/rails/rails/commit/0e2dc80b9e1)

[rails/actionpack/lib/action\_dispatch/railtie.rb](https://github.com/rails/rails/blob/817fc2a147c249180ee9b271c0e8d82d43457a3a/actionpack/lib/action_dispatch/railtie.rb#L94-L97)

Lines 94 to 97 in [817fc2a](/rails/rails/commit/817fc2a147c249180ee9b271c0e8d82d43457a3a)

ActionDispatch::ExceptionWrapper.rescue\_responses \= ActionDispatch::ExceptionWrapper.rescue\_responses.merge(config.action\_dispatch.rescue\_responses).freeze

ActionDispatch::ExceptionWrapper.rescue\_templates \= ActionDispatch::ExceptionWrapper.rescue\_templates.merge(config.action\_dispatch.rescue\_templates).freeze

ActionDispatch::ExceptionWrapper.wrapper\_exceptions \= (ActionDispatch::ExceptionWrapper.wrapper\_exceptions | config.action\_dispatch.wrapper\_exceptions).freeze

ActionDispatch::ExceptionWrapper.silent\_exceptions \= (ActionDispatch::ExceptionWrapper.silent\_exceptions | config.action\_dispatch.silent\_exceptions).freeze

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=80&u=e1b3c0f7c6dc600253bf15c99f618b9b2d39c500&v=4)](/gmcgibbon)

### 

**[gmcgibbon](/gmcgibbon)** commented [Aug 5, 2026](#issuecomment-5187537357) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Member

I think it is, and I don't think [#57483](https://github.com/rails/rails/pull/57483) was the right choice. That's why I started in on [#57852](https://github.com/rails/rails/pull/57852) but its much harder to write a patch that "freezes everything" when we're still trying to figure out exactly what we need to freeze / make shareable. Is the apprehension because of performance? It seemed like we used make\_shareable recently in [#58374](https://github.com/rails/rails/pull/58374) but reverted once we realized the objects were recursively frozen by default. Maybe we can get a second opinion?

  

👍 1 Edouard-chin reacted with thumbs up emoji

All reactions

*   👍 1 reaction

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/36f96980236e2e7a5b93683d7211f452cbd0c059..211f448ffdc5c58b2b9ce46cdc39b16142f523bc) the ec-doc-for-erb branch from [`36f9698`](/rails/rails/commit/36f96980236e2e7a5b93683d7211f452cbd0c059) to [`211f448`](/rails/rails/commit/211f448ffdc5c58b2b9ce46cdc39b16142f523bc) [Compare](/rails/rails/compare/36f96980236e2e7a5b93683d7211f452cbd0c059..211f448ffdc5c58b2b9ce46cdc39b16142f523bc) [August 5, 2026 23:21](#event-29038798327)

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&v=4)](/Edouard-chin)

``[Allow to configure ERB options through `ActionView::Base`:](/rails/rails/pull/58359/commits/444665776523a939c1c099821760ced3b728cfc8 "Allow to configure ERB options through `ActionView::Base`: - ### Problem In #970bf380fe8 we added a :nodoc: to official not document AV::Template::Handlers::ERB, but some applications were legitimatelly referecing that class to store documented configuration. ### Solution This patch allows to configure all options from the ERB handlers inside ActionView::Base (or `config.action_view.<setting>`). This was already possible for `erb_trim_mode`. Also added new tests to ensure the behaviour since none existed.")`` …

  

  

`[4446657](/rails/rails/pull/58359/commits/444665776523a939c1c099821760ced3b728cfc8)`

\- ### Problem

  In #970bf380fe8 we added a :nodoc: to official not document
  AV::Template::Handlers::ERB, but some applications were
  legitimatelly referecing that class to store documented
  configuration.

  ### Solution

  This patch allows to configure all options from the ERB handlers
  inside ActionView::Base (or \`config.action\_view.<setting>\`).
  This was already possible for \`erb\_trim\_mode\`.

  Also added new tests to ensure the behaviour since none
  existed.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/211f448ffdc5c58b2b9ce46cdc39b16142f523bc..72b58603408e4a6c7b3453e06f3188458f7f075a) the ec-doc-for-erb branch from [`211f448`](/rails/rails/commit/211f448ffdc5c58b2b9ce46cdc39b16142f523bc) to [`72b5860`](/rails/rails/commit/72b58603408e4a6c7b3453e06f3188458f7f075a) [Compare](/rails/rails/compare/211f448ffdc5c58b2b9ce46cdc39b16142f523bc..72b58603408e4a6c7b3453e06f3188458f7f075a) [August 7, 2026 17:51](#event-29133107229)

[![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=40&u=e1b3c0f7c6dc600253bf15c99f618b9b2d39c500&v=4)](/gmcgibbon)

[gmcgibbon](/gmcgibbon) enabled auto-merge [August 7, 2026 17:53](#event-29133190677)

[![gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=60&v=4)](/gmcgibbon)

**[gmcgibbon](/gmcgibbon)** approved these changes [Aug 7, 2026](#pullrequestreview-4885314135)

[View reviewed changes](/rails/rails/pull/58359/files)

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/72b58603408e4a6c7b3453e06f3188458f7f075a..f2c7e34de2bd78d7b05e49434f2456edacfc2636) the ec-doc-for-erb branch from [`72b5860`](/rails/rails/commit/72b58603408e4a6c7b3453e06f3188458f7f075a) to [`f2c7e34`](/rails/rails/commit/f2c7e34de2bd78d7b05e49434f2456edacfc2636) [Compare](/rails/rails/compare/72b58603408e4a6c7b3453e06f3188458f7f075a..f2c7e34de2bd78d7b05e49434f2456edacfc2636) [August 7, 2026 17:53](#event-29133202286)

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&v=4)](/Edouard-chin)

``[Use `Ractor#make_shareable` instead of freeze:](/rails/rails/pull/58359/commits/d0743addea8d13187ae5f043c1d2fa1d879508f3 "Use `Ractor#make_shareable` instead of freeze: - There is a concern that users may be adding unfrozen string to that configuration so we want to ancipate and freeze things for them.")`` …

  

  

`[d0743ad](/rails/rails/pull/58359/commits/d0743addea8d13187ae5f043c1d2fa1d879508f3)`

\- There is a concern that users may be adding unfrozen string to that
  configuration so we want to ancipate and freeze things for them.

[![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=40&u=2dbe607a66a7616297b78647eeb4e0dbff657c3a&v=4)](/Edouard-chin)

[Edouard-chin](/Edouard-chin) [force-pushed](/rails/rails/compare/f2c7e34de2bd78d7b05e49434f2456edacfc2636..d0743addea8d13187ae5f043c1d2fa1d879508f3) the ec-doc-for-erb branch from [`f2c7e34`](/rails/rails/commit/f2c7e34de2bd78d7b05e49434f2456edacfc2636) to [`d0743ad`](/rails/rails/commit/d0743addea8d13187ae5f043c1d2fa1d879508f3) [Compare](/rails/rails/compare/f2c7e34de2bd78d7b05e49434f2456edacfc2636..d0743addea8d13187ae5f043c1d2fa1d879508f3) [August 7, 2026 18:03](#event-29133643197)

[![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added the [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties) label [Aug 7, 2026](#event-29133652314)

Hide details View details

[![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=40&u=e1b3c0f7c6dc600253bf15c99f618b9b2d39c500&v=4)](/gmcgibbon)

[gmcgibbon](/gmcgibbon) merged commit [`0e8569c`](/rails/rails/commit/0e8569c84cb78238d00284101f2b01f9c5546c14) into rails:main [Aug 7, 2026](https://github.com/rails/rails/pull/58359#event-29133921253)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=40&u=e1b3c0f7c6dc600253bf15c99f618b9b2d39c500&v=4)](/gmcgibbon)

[gmcgibbon](/gmcgibbon) deleted the ec-doc-for-erb branch [August 7, 2026 18:10](#event-29133922012)

[![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=40&u=3972bfb97451f7f90e051df2e49fb7b8ee83e28d&v=4)](/skipkayhil) [skipkayhil](/skipkayhil) added the [Ractor Support](/rails/rails/issues?q=state%3Aopen%20label%3A%22Ractor%20Support%22) Issues and pull requests regarding Ractor support label [Aug 14, 2026](#event-29469302232) 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58359)

 ### Reviewers

 [![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=40&v=4)](/gmcgibbon)[gmcgibbon](/gmcgibbon) [](/rails/rails/pull/58359/files/f2c7e34de2bd78d7b05e49434f2456edacfc2636)gmcgibbon approved these changes

+1 more reviewer

 [![@etiennebarrie](https://avatars.githubusercontent.com/u/3535?s=40&v=4)](/etiennebarrie)[etiennebarrie](/etiennebarrie) [](/rails/rails/pull/58359/files/ca374b99a2b211e2ba4350fe80f3076f3ebdcdc4)etiennebarrie left review comments

Reviewers whose approvals may not affect merge requirements

### Assignees

No one assigned

### Labels

[actionview](/rails/rails/issues?q=state%3Aopen%20label%3Aactionview) [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs) [Ractor Support](/rails/rails/issues?q=state%3Aopen%20label%3A%22Ractor%20Support%22) Issues and pull requests regarding Ractor support [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties)

### Projects

None yet

### Milestone

No milestone

### Development

Successfully merging this pull request may close these issues.

### Uh oh!

There was an error while loading. Please reload this page.

### 5 participants

 [![@Edouard-chin](https://avatars.githubusercontent.com/u/8122246?s=52&v=4)](/Edouard-chin)[![@hmcguire-shopify](https://avatars.githubusercontent.com/u/103438607?s=52&v=4) ](/hmcguire-shopify)[![@gmcgibbon](https://avatars.githubusercontent.com/u/5162312?s=52&v=4) ](/gmcgibbon)[![@etiennebarrie](https://avatars.githubusercontent.com/u/3535?s=52&v=4) ](/etiennebarrie)[![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=52&v=4)](/skipkayhil)    

Add this suggestion to a batch that can be applied as a single commit.This suggestion is invalid because no changes were made to the code.Suggestions cannot be applied while the pull request is closed.Suggestions cannot be applied while viewing a subset of changes.Only one suggestion per line can be applied in a batch.Add this suggestion to a batch that can be applied as a single commit.Applying suggestions on deleted lines is not supported.You must change the existing code in this line in order to create a valid suggestion.Outdated suggestions cannot be applied.This suggestion has been applied or marked resolved.Suggestions cannot be applied from pending reviews.Suggestions cannot be applied on multi-line comments.Suggestions cannot be applied while the pull request is queued to merge.Suggestion cannot be applied right now. Please check back later.

## Footer

[](https://github.com)© 2026 GitHub, Inc.

### Footer navigation

*   [Terms](https://docs.github.com/site-policy/github-terms/github-terms-of-service)
*   [Privacy](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement)
*   [Security](https://github.com/security)
*   [Status](https://www.githubstatus.com/)
*   [Community](https://github.community/)
*   [Docs](https://docs.github.com/)
*   [Contact](https://support.github.com?tags=dotcom-footer)
*   Manage cookies
*   Do not share my personal information

You can’t perform that action at this time.

{% endraw %}
