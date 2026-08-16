---
layout: "story"
title: "Change the shape of ActiveRecord::Migration::CommandRecorder#commands"
date: "2026-08-16"
permalink: "/2026/08/16/stories/change-the-shape-of-activerecord-migration-commandrecorder-c-050359/"
slug: "change-the-shape-of-activerecord-migration-commandrecorder-c-050359"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58239"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Each recorded migration command is now stored as [cmd, args, kwargs, block] (4-element) instead of [cmd, args, block] (3-element) with kwargs bundled into a trailing hash inside args. Code that inspects recorder.commands directly needs to adapt to the new tuple shape.

---

Refactor \`CommandRecorder\` to store args and kwargs separately by kamipo · Pull Request #58239 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58239)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58239)

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

# Refactor `CommandRecorder` to store args and kwargs separately - #58239

#58239

Merged

[kamipo](/kamipo) merged 1 commit into

[main](/rails/rails/tree/main)rails/rails:mainfrom

[refactor-command-recorder-kwargs](/rails/rails/tree/refactor-command-recorder-kwargs)rails/rails:refactor-command-recorder-kwargsCopy head branch name to clipboard

Aug 9, 2026

[Conversation](/rails/rails/pull/58239)[Commits1 (1)](/rails/rails/pull/58239/commits)[Checks](/rails/rails/pull/58239/checks)[Files changed](/rails/rails/pull/58239/files)

Merged

## 

[Refactor `CommandRecorder` to store args and kwargs separately](#top)#58239

[kamipo](/kamipo) merged 1 commit into

[main](/rails/rails/tree/main)rails/rails:mainfrom

[refactor-command-recorder-kwargs](/rails/rails/tree/refactor-command-recorder-kwargs)rails/rails:refactor-command-recorder-kwargsCopy head branch name to clipboard

## Conversation

 [![@kamipo](https://avatars.githubusercontent.com/u/12642?s=80&v=4)](/kamipo)

### 

 ![@kamipo](https://avatars.githubusercontent.com/u/12642?s=48&v=4)**[kamipo](/kamipo)** commented [Jul 25, 2026](#issue-4975932996) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Member

`recorder.commands` now stores each recorded migration command as `[cmd, args, kwargs, block]` (4-element) instead of `[cmd, args, block]` (3-element) with kwargs bundled into a trailing hash inside `args`. Code that inspects `recorder.commands` directly needs to adapt to the new tuple shape.

The old encoding was inherited from the `ruby2_keywords` transition period, where kwargs and positional args had to travel through a single flat array with the trailing hash marked as kwargs. Since Rails now requires Ruby 3.3.1+ (where kwargs are properly separated), the shim is no longer needed. All `invert_*` helpers now receive args and kwargs separately — removing the `.extract_options!`, `.last.is_a?(Hash)`, and `args << options` patterns that the `ruby2_keywords` idiom required.

This direction is aligned with a Ruby proposal to deprecate `ruby2_keywords` in the future ([https://bugs.ruby-lang.org/issues/22205](https://bugs.ruby-lang.org/issues/22205)), since libraries that only support Ruby 3.0+ no longer need it.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

❤️ 1 skipkayhil reacted with heart emoji

All reactions

*   ❤️ 1 reaction [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added the [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord) label [Jul 25, 2026](#event-28475758523)

Base automatically changed from remove-ruby2-keywords to main [July 26, 2026 05:20](#event-28492049431)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) [force-pushed](/rails/rails/compare/f0b9d6a27e8dcc8802024756207c6f914228839f..a978233189247d5f4725bed68f6bb895b59e9d8e) the refactor-command-recorder-kwargs branch from [`f0b9d6a`](/rails/rails/commit/f0b9d6a27e8dcc8802024756207c6f914228839f) to [`a978233`](/rails/rails/commit/a978233189247d5f4725bed68f6bb895b59e9d8e) [Compare](/rails/rails/compare/f0b9d6a27e8dcc8802024756207c6f914228839f..a978233189247d5f4725bed68f6bb895b59e9d8e) [July 26, 2026 06:02](#event-28492579553)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo) [kamipo](/kamipo) mentioned this pull request [Jul 26, 2026](#ref-pullrequest-4981810772)

[Make `CommandRecorder#record` and `#inverse_of` private #58254](/rails/rails/pull/58254)

Merged

[kamipo](/kamipo) added a commit to kamipo/rails that referenced this pull request [Aug 2, 2026](#ref-commit-560645a)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

``[Make `CommandRecorder#record` and `#inverse_of` private](/kamipo/rails/commit/560645a8c270d583b516031506081834583ae339 "Make `CommandRecorder#record` and `#inverse_of` private #58238 removed `ruby2_keywords` method calls, but places that store method arguments for later invocation (`CommandRecorder`, ActiveJob, etc.) still rely on `Hash.ruby2_keywords_hash` to fold kwargs into args as a trailing flagged hash. `Hash.ruby2_keywords_hash` is also planned to be deprecated, so we need to migrate to a structure that stores positional args and keyword args separately instead of depending on a flagged trailing hash. That structural change breaks the signatures of `CommandRecorder#record` and `#inverse_of`. Normally, Rails goes through a deprecation cycle when changing public API. But `record` and `inverse_of` are internal machinery — `CommandRecorder` is meant to behave like a connection wrapper that records migration commands (`create_table`, `add_column`, etc.) instead of executing them, and `record`/`inverse_of` are not part of that surface. Based on how they are used, they should not be called directly. They are still exposed as public API in the docs (https://api.rubyonrails.org/classes/ActiveRecord/Migration/CommandRecorder.html), which I noticed while working on #58239. Rather than treating the upcoming signature change (#58239) as an incompatible public-API change in its CHANGELOG entry, make these methods private up front. Making public methods private without a deprecation cycle is normally undesirable, but `CommandRecorder` is an internal component rather than an end-user API, so this incompatibility should be acceptable.")`` …

  

  

`[560645a](/kamipo/rails/commit/560645a8c270d583b516031506081834583ae339)`

[rails#58238](https://github.com/rails/rails/pull/58238) removed \`ruby2\_keywords\` method calls, but places that store
method arguments for later invocation (\`CommandRecorder\`, ActiveJob,
etc.) still rely on \`Hash.ruby2\_keywords\_hash\` to fold kwargs into args
as a trailing flagged hash. \`Hash.ruby2\_keywords\_hash\` is also planned
to be deprecated, so we need to migrate to a structure that stores
positional args and keyword args separately instead of depending on a
flagged trailing hash. That structural change breaks the signatures of
\`CommandRecorder#record\` and \`#inverse\_of\`.

Normally, Rails goes through a deprecation cycle when changing public
API. But \`record\` and \`inverse\_of\` are internal machinery —
\`CommandRecorder\` is meant to behave like a connection wrapper that
records migration commands (\`create\_table\`, \`add\_column\`, etc.) instead
of executing them, and \`record\`/\`inverse\_of\` are not part of that
surface. Based on how they are used, they should not be called directly.
They are still exposed as public API in the docs
([https://api.rubyonrails.org/classes/ActiveRecord/Migration/CommandRecorder.html](https://api.rubyonrails.org/classes/ActiveRecord/Migration/CommandRecorder.html)),
which I noticed while working on [rails#58239](https://github.com/rails/rails/pull/58239).

Rather than treating the upcoming signature change ([rails#58239](https://github.com/rails/rails/pull/58239)) as an
incompatible public-API change in its CHANGELOG entry, make these
methods private up front. Making public methods private without a
deprecation cycle is normally undesirable, but \`CommandRecorder\` is an
internal component rather than an end-user API, so this incompatibility
should be acceptable.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) [force-pushed](/rails/rails/compare/e0625bf49fb792ce16fb3068d2138264ce52de98..3164b44cbe9a12bb34a8965f8c7c4870065e5a04) the refactor-command-recorder-kwargs branch 2 times, most recently from [`e0625bf`](/rails/rails/commit/e0625bf49fb792ce16fb3068d2138264ce52de98) to [`3164b44`](/rails/rails/commit/3164b44cbe9a12bb34a8965f8c7c4870065e5a04) [Compare](/rails/rails/compare/e0625bf49fb792ce16fb3068d2138264ce52de98..3164b44cbe9a12bb34a8965f8c7c4870065e5a04) [August 2, 2026 17:22](#event-28854110166)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&v=4)](/kamipo)

``[Refactor `CommandRecorder` to store args and kwargs separately](/rails/rails/pull/58239/commits/3efea4e0618e7316ac4da5c217c2fd92b64954be "Refactor `CommandRecorder` to store args and kwargs separately `recorder.commands` now stores each recorded migration command as `[cmd, args, kwargs, block]` (4-element) instead of `[cmd, args, block]` (3-element) with kwargs bundled into a trailing hash inside `args`. Code that inspects `recorder.commands` directly needs to adapt to the new tuple shape. The old encoding was inherited from the `ruby2_keywords` transition period, where kwargs and positional args had to travel through a single flat array with the trailing hash marked as kwargs. Since Rails now requires Ruby 3.3.1+ (where kwargs are properly separated), the shim is no longer needed. All `invert_*` helpers now receive args and kwargs separately — removing the `.extract_options!`, `.last.is_a?(Hash)`, and `args << options` patterns that the `ruby2_keywords` idiom required. This direction is aligned with a Ruby proposal to deprecate `ruby2_keywords` in the future (https://bugs.ruby-lang.org/issues/22205), since libraries that only support Ruby 3.0+ no longer need it.")`` …

  

  

`[3efea4e](/rails/rails/pull/58239/commits/3efea4e0618e7316ac4da5c217c2fd92b64954be)`

\`recorder.commands\` now stores each recorded migration command as
\`\[cmd, args, kwargs, block\]\` (4-element) instead of
\`\[cmd, args, block\]\` (3-element) with kwargs bundled into a trailing
hash inside \`args\`. Code that inspects \`recorder.commands\` directly
needs to adapt to the new tuple shape.

The old encoding was inherited from the \`ruby2\_keywords\` transition
period, where kwargs and positional args had to travel through a
single flat array with the trailing hash marked as kwargs. Since
Rails now requires Ruby 3.3.1+ (where kwargs are properly separated),
the shim is no longer needed. All \`invert\_\*\` helpers now receive args
and kwargs separately — removing the \`.extract\_options!\`,
\`.last.is\_a?(Hash)\`, and \`args << options\` patterns that the
\`ruby2\_keywords\` idiom required.

This direction is aligned with a Ruby proposal to deprecate
\`ruby2\_keywords\` in the future
([https://bugs.ruby-lang.org/issues/22205](https://bugs.ruby-lang.org/issues/22205)), since libraries that only
support Ruby 3.0+ no longer need it.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) [force-pushed](/rails/rails/compare/3164b44cbe9a12bb34a8965f8c7c4870065e5a04..3efea4e0618e7316ac4da5c217c2fd92b64954be) the refactor-command-recorder-kwargs branch from [`3164b44`](/rails/rails/commit/3164b44cbe9a12bb34a8965f8c7c4870065e5a04) to [`3efea4e`](/rails/rails/commit/3efea4e0618e7316ac4da5c217c2fd92b64954be) [Compare](/rails/rails/compare/3164b44cbe9a12bb34a8965f8c7c4870065e5a04..3efea4e0618e7316ac4da5c217c2fd92b64954be) [August 8, 2026 10:23](#event-29156376676)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo) [kamipo](/kamipo) mentioned this pull request [Aug 8, 2026](#ref-pullrequest-5098959691)

[Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash` #58420](/rails/rails/pull/58420)

Merged

Hide details View details

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) merged commit [`342dafc`](/rails/rails/commit/342dafc5351d9c9e303ee3c1e378c4dcf2277ffd) into main [Aug 9, 2026](https://github.com/rails/rails/pull/58239#event-29177681631)

7 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) deleted the refactor-command-recorder-kwargs branch [August 9, 2026 08:10](#event-29177682271)

[kamipo](/kamipo) added a commit that referenced this pull request [Aug 9, 2026](#ref-commit-26b8833)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

``[Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash`](/rails/rails/commit/26b88332672781769fec3279d9c504f5ee9fffde "Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash` Follow-up to #58239. `Hash.ruby2_keywords_hash` is scheduled for deprecation (https://bugs.ruby-lang.org/issues/22205); libraries that only support Ruby 3.0+ shouldn't depend on it. `Middleware` (and its `ActionController` subclass) now store positional args and keyword args separately (`@args` / `@kwargs`) instead of bundling `Hash.ruby2_keywords_hash(kwargs)` into `@args`, and `#build` dispatches with `klass.new(app, *args, **kwargs, &block)`. `Middleware` and `InstrumentationProxy` are also marked `:nodoc:`. Users interact with the stack through `use` / `insert` / etc. and, for instrumentation, subscribe to `process_middleware.action_dispatch` (documented in the Active Support Instrumentation guide). Neither class is intended to be constructed directly, so their internal structure doesn't belong in the API docs even though iterating `Rails.application.middleware` still exposes `Middleware#args` / `#kwargs` for debugging.")`` …

  

  

`[26b8833](/rails/rails/commit/26b88332672781769fec3279d9c504f5ee9fffde)`

Follow-up to [#58239](https://github.com/rails/rails/pull/58239). \`Hash.ruby2\_keywords\_hash\` is scheduled for
deprecation ([https://bugs.ruby-lang.org/issues/22205](https://bugs.ruby-lang.org/issues/22205)); libraries that
only support Ruby 3.0+ shouldn't depend on it.

\`Middleware\` (and its \`ActionController\` subclass) now store positional
args and keyword args separately (\`@args\` / \`@kwargs\`) instead of
bundling \`Hash.ruby2\_keywords\_hash(kwargs)\` into \`@args\`, and \`#build\`
dispatches with \`klass.new(app, \*args, \*\*kwargs, &block)\`.

\`Middleware\` and \`InstrumentationProxy\` are also marked \`:nodoc:\`.
Users interact with the stack through \`use\` / \`insert\` / etc. and,
for instrumentation, subscribe to \`process\_middleware.action\_dispatch\`
(documented in the Active Support Instrumentation guide). Neither
class is intended to be constructed directly, so their internal
structure doesn't belong in the API docs even though iterating
\`Rails.application.middleware\` still exposes \`Middleware#args\` /
\`#kwargs\` for debugging. 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58239)

 ### Reviewers

No reviews

### Assignees

No one assigned

### Labels

[activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord)

### Projects

None yet

### Milestone

No milestone

### Development

Successfully merging this pull request may close these issues.

### Uh oh!

There was an error while loading. Please reload this page.

### 1 participant

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=52&v=4)](/kamipo)

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
