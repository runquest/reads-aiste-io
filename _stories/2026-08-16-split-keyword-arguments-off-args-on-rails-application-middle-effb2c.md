---
layout: "story"
title: "Split keyword arguments off #args on Rails.application.middleware entries"
date: "2026-08-16"
permalink: "/2026/08/16/stories/split-keyword-arguments-off-args-on-rails-application-middle-effb2c/"
slug: "split-keyword-arguments-off-args-on-rails-application-middle-effb2c"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58420"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Middleware entries now expose keyword arguments through a new #kwargs accessor. #args previously bundled kwargs as a trailing hash inside the positional array (via Hash.ruby2_keywords_hash). It now returns positional arguments only.

---

Refactor \`MiddlewareStack::Middleware\` off \`Hash.ruby2\_keywords\_hash\` by kamipo · Pull Request #58420 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58420)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58420)

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

# Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash` - #58420

#58420

Merged

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[kamipo:refactor\_actionpack\_middleware\_kwargs](/kamipo/rails/tree/refactor_actionpack_middleware_kwargs)kamipo/rails:refactor\_actionpack\_middleware\_kwargsCopy head branch name to clipboard

Aug 9, 2026

[Conversation](/rails/rails/pull/58420)[Commits1 (1)](/rails/rails/pull/58420/commits)[Checks](/rails/rails/pull/58420/checks)[Files changed](/rails/rails/pull/58420/files)

Merged

## 

[Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash`](#top)#58420

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[kamipo:refactor\_actionpack\_middleware\_kwargs](/kamipo/rails/tree/refactor_actionpack_middleware_kwargs)kamipo/rails:refactor\_actionpack\_middleware\_kwargsCopy head branch name to clipboard

## Conversation

 [![@kamipo](https://avatars.githubusercontent.com/u/12642?s=80&v=4)](/kamipo)

### 

 ![@kamipo](https://avatars.githubusercontent.com/u/12642?s=48&v=4)**[kamipo](/kamipo)** commented [Aug 8, 2026](#issue-5098959691)

Copy link

Copy Markdown

Member

Follow-up to [#58239](https://github.com/rails/rails/pull/58239). `Hash.ruby2_keywords_hash` is scheduled for deprecation ([https://bugs.ruby-lang.org/issues/22205](https://bugs.ruby-lang.org/issues/22205)); libraries that only support Ruby 3.0+ shouldn't depend on it.

`Middleware` (and its `ActionController` subclass) now store positional args and keyword args separately (`@args` / `@kwargs`) instead of bundling `Hash.ruby2_keywords_hash(kwargs)` into `@args`, and `#build` dispatches with `klass.new(app, *args, **kwargs, &block)`.

`Middleware` and `InstrumentationProxy` are also marked `:nodoc:`. Users interact with the stack through `use` / `insert` / etc. and, for instrumentation, subscribe to `process_middleware.action_dispatch` (documented in the Active Support Instrumentation guide). Neither class is intended to be constructed directly, so their internal structure doesn't belong in the API docs even though iterating `Rails.application.middleware` still exposes `Middleware#args` / `#kwargs` for debugging.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&v=4)](/kamipo)

``[Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash`](/rails/rails/pull/58420/commits/26b88332672781769fec3279d9c504f5ee9fffde "Refactor `MiddlewareStack::Middleware` off `Hash.ruby2_keywords_hash` Follow-up to #58239. `Hash.ruby2_keywords_hash` is scheduled for deprecation (https://bugs.ruby-lang.org/issues/22205); libraries that only support Ruby 3.0+ shouldn't depend on it. `Middleware` (and its `ActionController` subclass) now store positional args and keyword args separately (`@args` / `@kwargs`) instead of bundling `Hash.ruby2_keywords_hash(kwargs)` into `@args`, and `#build` dispatches with `klass.new(app, *args, **kwargs, &block)`. `Middleware` and `InstrumentationProxy` are also marked `:nodoc:`. Users interact with the stack through `use` / `insert` / etc. and, for instrumentation, subscribe to `process_middleware.action_dispatch` (documented in the Active Support Instrumentation guide). Neither class is intended to be constructed directly, so their internal structure doesn't belong in the API docs even though iterating `Rails.application.middleware` still exposes `Middleware#args` / `#kwargs` for debugging.")`` …

  

  

`[26b8833](/rails/rails/pull/58420/commits/26b88332672781769fec3279d9c504f5ee9fffde)`

Follow-up to [rails#58239](https://github.com/rails/rails/pull/58239). \`Hash.ruby2\_keywords\_hash\` is scheduled for
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

[![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [actionpack](/rails/rails/issues?q=state%3Aopen%20label%3Aactionpack) [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties) labels [Aug 8, 2026](#event-29165274608)

Hide details View details

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) merged commit [`653804d`](/rails/rails/commit/653804d51322d3a0a9eb6a12812ccf413217e08d) into rails:main [Aug 9, 2026](https://github.com/rails/rails/pull/58420#event-29177699321)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) deleted the refactor\_actionpack\_middleware\_kwargs branch [August 9, 2026 08:11](#event-29177700468) 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58420)

 ### Reviewers

No reviews

### Assignees

No one assigned

### Labels

[actionpack](/rails/rails/issues?q=state%3Aopen%20label%3Aactionpack) [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties)

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
