---
layout: "story"
title: "Allow ActiveSupport::ProxyLogger to ignore messages by pattern"
date: "2026-08-16"
permalink: "/2026/08/16/stories/allow-activesupport-proxylogger-to-ignore-messages-by-patter-004c20/"
slug: "allow-activesupport-proxylogger-to-ignore-messages-by-patter-004c20"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58328"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Useful to silence noisy logs from gems that your application may not care about, without needing to change the log level and losing other useful logs.

---

Allow ActiveSupport::ProxyLogger to ignore messages by pattern by federico-carrocera · Pull Request #58328 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58328)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58328)

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

# Allow ActiveSupport::ProxyLogger to ignore messages by pattern - #58328

#58328

Merged

[byroot](/byroot) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[federico-carrocera:fede/proxy-logger-ignore-patterns](/federico-carrocera/rails/tree/fede/proxy-logger-ignore-patterns)federico-carrocera/rails:fede/proxy-logger-ignore-patternsCopy head branch name to clipboard

Aug 10, 2026

[Conversation](/rails/rails/pull/58328)[Commits1 (1)](/rails/rails/pull/58328/commits)[Checks](/rails/rails/pull/58328/checks)[Files changed](/rails/rails/pull/58328/files)

Merged

## 

[Allow ActiveSupport::ProxyLogger to ignore messages by pattern](#top)#58328

[byroot](/byroot) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[federico-carrocera:fede/proxy-logger-ignore-patterns](/federico-carrocera/rails/tree/fede/proxy-logger-ignore-patterns)federico-carrocera/rails:fede/proxy-logger-ignore-patternsCopy head branch name to clipboard

## Conversation

 [![@federico-carrocera](https://avatars.githubusercontent.com/u/197922281?s=80&v=4)](/federico-carrocera)

### 

 ![@federico-carrocera](https://avatars.githubusercontent.com/u/197922281?s=48&v=4)**[federico-carrocera](/federico-carrocera)** commented [Jul 31, 2026](#issue-5029717475)

Copy link

Copy Markdown

Contributor

ProxyLogger can only filter by severity, so silencing one noisy message from a gem means raising the level and losing every message below it.

```
SomeLibrary.logger = ActiveSupport::ProxyLogger.new(Rails.logger).ignore(/Noisy/)
```

Regexps are matched against the message, strings are matched literally. Patterns are compiled into a single Regexp.union at registration time, and matching only happens after the severity check, so proxies without patterns are unaffected.

add now takes Logger#add's explicit signature rather than forwarding `...`, because the message has to be resolved before it can be matched.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added the [activesupport](/rails/rails/issues?q=state%3Aopen%20label%3Aactivesupport) label [Jul 31, 2026](#event-28776913269)

 [![@federico-carrocera](https://avatars.githubusercontent.com/u/197922281?s=40&v=4)](/federico-carrocera)[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

``[Allow ActiveSupport::ProxyLogger to ignore messages by pattern](/rails/rails/pull/58328/commits/299defb0c79aff183da78196aa65e3d05c92d331 "Allow ActiveSupport::ProxyLogger to ignore messages by pattern ProxyLogger can only filter by severity, so silencing one noisy message from a gem means raising the level and losing every message below it. SomeLibrary.logger = ActiveSupport::ProxyLogger.new(Rails.logger) .ignore(/Noisy/) Regexps are matched against the message, strings are matched literally. Patterns are compiled into a single Regexp.union at registration time, and matching only happens after the severity check, so proxies without patterns are unaffected. add now takes Logger#add's explicit signature rather than forwarding `...`, because the message has to be resolved before it can be matched.")`` …

  

  

`[299defb](/rails/rails/pull/58328/commits/299defb0c79aff183da78196aa65e3d05c92d331)`

ProxyLogger can only filter by severity, so silencing one noisy message
from a gem means raising the level and losing every message below it.

    SomeLibrary.logger = ActiveSupport::ProxyLogger.new(Rails.logger)
      .ignore(/Noisy/)

Regexps are matched against the message, strings are matched literally.
Patterns are compiled into a single Regexp.union at registration time,
and matching only happens after the severity check, so proxies without
patterns are unaffected.

add now takes Logger#add's explicit signature rather than forwarding
\`...\`, because the message has to be resolved before it can be matched.

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

[byroot](/byroot) [force-pushed](/rails/rails/compare/f0b28f644b4d51f35fb0bb4de12385fa38b82519..299defb0c79aff183da78196aa65e3d05c92d331) the fede/proxy-logger-ignore-patterns branch from [`f0b28f6`](/rails/rails/commit/f0b28f644b4d51f35fb0bb4de12385fa38b82519) to [`299defb`](/rails/rails/commit/299defb0c79aff183da78196aa65e3d05c92d331) [Compare](/rails/rails/compare/f0b28f644b4d51f35fb0bb4de12385fa38b82519..299defb0c79aff183da78196aa65e3d05c92d331) [August 10, 2026 06:41](#event-29206312357)

Hide details View details

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

[byroot](/byroot) merged commit [`46347d1`](/rails/rails/commit/46347d148cda6b8a4bcf6793a66bc71f3614ecfa) into rails:main [Aug 10, 2026](https://github.com/rails/rails/pull/58328#event-29206351985)

3 of 5 checks passed

### Uh oh!

There was an error while loading. Please reload this page. 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58328)

 ### Reviewers

No reviews

### Assignees

No one assigned

### Labels

[activesupport](/rails/rails/issues?q=state%3Aopen%20label%3Aactivesupport)

### Projects

None yet

### Milestone

No milestone

### Development

Successfully merging this pull request may close these issues.

### Uh oh!

There was an error while loading. Please reload this page.

### 2 participants

 [![@federico-carrocera](https://avatars.githubusercontent.com/u/197922281?s=52&v=4)](/federico-carrocera)[![@byroot](https://avatars.githubusercontent.com/u/44640?s=52&v=4)](/byroot) 

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
