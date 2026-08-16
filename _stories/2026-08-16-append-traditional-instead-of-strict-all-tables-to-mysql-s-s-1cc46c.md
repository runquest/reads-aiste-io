---
layout: "story"
title: "Append TRADITIONAL instead of STRICT_ALL_TABLES to MySQL's sql_mode by default"
date: "2026-08-16"
permalink: "/2026/08/16/stories/append-traditional-instead-of-strict-all-tables-to-mysql-s-s-1cc46c/"
slug: "append-traditional-instead-of-strict-all-tables-to-mysql-s-s-1cc46c"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58350"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
On environments whose global sql_mode is empty — most notably Amazon RDS and Aurora MySQL default parameter groups — appending only STRICT_ALL_TABLES leaves out NO_ZERO_IN_DATE, NO_ZERO_DATE, and ERROR_FOR_DIVISION_BY_ZERO, which MySQL 5.7+ has otherwise made part of its own default. Appending TRADITIONAL closes the gap.

---

Append \`TRADITIONAL\` instead of \`STRICT\_ALL\_TABLES\` to MySQL's \`sql\_mode\` by default by kamipo · Pull Request #58350 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58350)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58350)

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

# Append `TRADITIONAL` instead of `STRICT_ALL_TABLES` to MySQL's `sql_mode` by default - #58350

#58350

Merged

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[kamipo:mysql\_default\_sql\_mode\_traditional](/kamipo/rails/tree/mysql_default_sql_mode_traditional)kamipo/rails:mysql\_default\_sql\_mode\_traditionalCopy head branch name to clipboard

Aug 9, 2026

[Conversation](/rails/rails/pull/58350)[Commits1 (1)](/rails/rails/pull/58350/commits)[Checks](/rails/rails/pull/58350/checks)[Files changed](/rails/rails/pull/58350/files)

Merged

## 

[Append `TRADITIONAL` instead of `STRICT_ALL_TABLES` to MySQL's `sql_mode` by default](#top)#58350

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[kamipo:mysql\_default\_sql\_mode\_traditional](/kamipo/rails/tree/mysql_default_sql_mode_traditional)kamipo/rails:mysql\_default\_sql\_mode\_traditionalCopy head branch name to clipboard

## Conversation

 [![@kamipo](https://avatars.githubusercontent.com/u/12642?s=80&v=4)](/kamipo)

### 

 ![@kamipo](https://avatars.githubusercontent.com/u/12642?s=48&v=4)**[kamipo](/kamipo)** commented [Aug 3, 2026](#issue-5047243975)

Copy link

Copy Markdown

Member

On environments whose global `sql_mode` is empty — most notably Amazon RDS and Aurora MySQL default parameter groups — appending only `STRICT_ALL_TABLES` leaves out `NO_ZERO_IN_DATE`, `NO_ZERO_DATE`, and `ERROR_FOR_DIVISION_BY_ZERO`, which MySQL 5.7+ has otherwise made part of its own default. Empty-`sql_mode` environments were expected to fade with MySQL 5.7+ adoption, but they haven't.

As [#57077](https://github.com/rails/rails/pull/57077) noted when deprecating the `strict: false` option, silently accepting invalid values is not a recommended default for modern applications. Appending `TRADITIONAL` closes the gap so the recommended behavior holds regardless of what `sql_mode` the server happens to default to.

Reproducing the previous behavior is possible via `variables: { sql_mode: "STRICT_ALL_TABLES" }` in `database.yml`.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added the [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord) label [Aug 3, 2026](#event-28872715728)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&v=4)](/kamipo)

``[Append `TRADITIONAL` instead of `STRICT_ALL_TABLES` to MySQL's `sql_m…](/rails/rails/pull/58350/commits/64fb6b14419b2d4a2254889571554297fcba4c6f "Append `TRADITIONAL` instead of `STRICT_ALL_TABLES` to MySQL's `sql_mode` by default On environments whose global `sql_mode` is empty — most notably Amazon RDS and Aurora MySQL default parameter groups — appending only `STRICT_ALL_TABLES` leaves out `NO_ZERO_IN_DATE`, `NO_ZERO_DATE`, and `ERROR_FOR_DIVISION_BY_ZERO`, which MySQL 5.7+ has otherwise made part of its own default. Empty-`sql_mode` environments were expected to fade with MySQL 5.7+ adoption, but they haven't. As #57077 noted when deprecating the `strict: false` option, silently accepting invalid values is not a recommended default for modern applications. Appending `TRADITIONAL` closes the gap so the recommended behavior holds regardless of what `sql_mode` the server happens to default to. Reproducing the previous behavior is possible via `variables: { sql_mode: \"STRICT_ALL_TABLES\" }` in `database.yml`.")`` …

  

  

`[64fb6b1](/rails/rails/pull/58350/commits/64fb6b14419b2d4a2254889571554297fcba4c6f)`

…ode\` by default

On environments whose global \`sql\_mode\` is empty — most notably Amazon
RDS and Aurora MySQL default parameter groups — appending only
\`STRICT\_ALL\_TABLES\` leaves out \`NO\_ZERO\_IN\_DATE\`, \`NO\_ZERO\_DATE\`, and
\`ERROR\_FOR\_DIVISION\_BY\_ZERO\`, which MySQL 5.7+ has otherwise made part
of its own default. Empty-\`sql\_mode\` environments were expected to fade
with MySQL 5.7+ adoption, but they haven't.

As [rails#57077](https://github.com/rails/rails/pull/57077) noted when deprecating the \`strict: false\` option, silently
accepting invalid values is not a recommended default for modern
applications. Appending \`TRADITIONAL\` closes the gap so the recommended
behavior holds regardless of what \`sql\_mode\` the server happens to
default to.

Reproducing the previous behavior is possible via
\`variables: { sql\_mode: "STRICT\_ALL\_TABLES" }\` in \`database.yml\`.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) [force-pushed](/rails/rails/compare/d1ad8435eccc43a851c3d025bdd326915239d88a..64fb6b14419b2d4a2254889571554297fcba4c6f) the mysql\_default\_sql\_mode\_traditional branch from [`d1ad843`](/rails/rails/commit/d1ad8435eccc43a851c3d025bdd326915239d88a) to [`64fb6b1`](/rails/rails/commit/64fb6b14419b2d4a2254889571554297fcba4c6f) [Compare](/rails/rails/compare/d1ad8435eccc43a851c3d025bdd326915239d88a..64fb6b14419b2d4a2254889571554297fcba4c6f) [August 9, 2026 10:37](#event-29180238093)

Hide details View details

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) merged commit [`a24a698`](/rails/rails/commit/a24a698c7cb036cfcc578c2435f8ff2939c92e40) into rails:main [Aug 9, 2026](https://github.com/rails/rails/pull/58350#event-29181289758)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) deleted the mysql\_default\_sql\_mode\_traditional branch [August 9, 2026 11:35](#event-29181292285) 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58350)

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
