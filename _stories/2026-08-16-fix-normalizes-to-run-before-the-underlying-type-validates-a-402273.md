---
layout: "story"
title: "Fix normalizes to run before the underlying type validates an assigned value"
date: "2026-08-16"
permalink: "/2026/08/16/stories/fix-normalizes-to-run-before-the-underlying-type-validates-a-402273/"
slug: "fix-normalizes-to-run-before-the-underlying-type-validates-a-402273"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/57846"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
When normalizes was combined with another type that rejects invalid input (such as an Active Record enum), the underlying type's assert_valid_value ran against the raw, un-normalized value and raised before normalization had a chance to run. The normalization is now applied first, so a value like " Pending " is normalized to "pending" and accepted by the enum.

---

Fix normalizes on an enum attribute raises ArgumentError instead of normalizing before enum casting by joaoGabriel55 · Pull Request #57846 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F57846)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F57846)

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

# Fix normalizes on an enum attribute raises ArgumentError instead of normalizing before enum casting - #57846

#57846

Merged

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[joaoGabriel55:fix\_normalizes\_on\_an\_enum\_attribute](/joaoGabriel55/rails/tree/fix_normalizes_on_an_enum_attribute)joaoGabriel55/rails:fix\_normalizes\_on\_an\_enum\_attributeCopy head branch name to clipboard

Aug 12, 2026

[Conversation](/rails/rails/pull/57846)[Commits1 (1)](/rails/rails/pull/57846/commits)[Checks](/rails/rails/pull/57846/checks)[Files changed](/rails/rails/pull/57846/files)

Merged

## 

[Fix normalizes on an enum attribute raises ArgumentError instead of normalizing before enum casting](#top)#57846

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[joaoGabriel55:fix\_normalizes\_on\_an\_enum\_attribute](/joaoGabriel55/rails/tree/fix_normalizes_on_an_enum_attribute)joaoGabriel55/rails:fix\_normalizes\_on\_an\_enum\_attributeCopy head branch name to clipboard

## Conversation

 [![@joaoGabriel55](https://avatars.githubusercontent.com/u/23138717?s=80&v=4)](/joaoGabriel55)

### 

 ![@joaoGabriel55](https://avatars.githubusercontent.com/u/23138717?s=48&v=4)**[joaoGabriel55](/joaoGabriel55)** commented [Jun 24, 2026](#issue-4738342440)

Copy link

Copy Markdown

Contributor

### Motivation / Background

Fixes [#57828](https://github.com/rails/rails/issues/57828)

This Pull Request has been created because combining `normalizes` with an attribute type that rejects invalid input — most notably an Active Record `enum` — raised an `ArgumentError` on assignment, before normalization had a chance to run:

class Order < ApplicationRecord
  enum :status, { pending: "pending", confirmed: "confirmed" }
  normalizes :status, with: \->(v) { v.strip.downcase }
end

Order.new(status: "  Pending  ")
\# => ArgumentError: '  Pending  ' is not a valid status

Because the raw, un-normalized value was validated first, it was impossible to use `normalizes` to sanitize user input destined for an enum — the two features conflicted.

### Detail

This Pull Request changes `ActiveModel::Attributes::Normalization::NormalizedValueType` to apply normalization **before** the underlying type validates the value.

Both `enum` and `normalizes` decorate an attribute's type, producing a stack of `NormalizedValueType → EnumType`. On assignment, `ActiveModel::Attribute#with_value_from_user` calls `type.assert_valid_value(value)` on the **raw** value before casting. `NormalizedValueType` overrode `cast` (which normalizes) but not `assert_valid_value`, so the check was delegated straight to `EnumType` with the un-normalized value and raised.

`NormalizedValueType` now overrides `assert_valid_value` to validate the normalized/cast value, mirroring exactly what `cast` stores:

def assert\_valid\_value(value)
  cast\_type.assert\_valid\_value(cast(value))
end

As a result, `" Pending "` is normalized to `"pending"` and accepted by the enum, while a genuinely invalid value (e.g. `" bogus "`) still raises `ArgumentError` after normalization. The change is scoped only to normalized attributes, so other attribute types are unaffected.

### Additional information

Regression tests were added in `activerecord/test/cases/normalized_attribute_test.rb` covering both the normalized-then-valid case and the still-invalid-after-normalization case. Verified the Active Model normalization suite, the Active Record enum suite, and the Active Record normalized-attribute suite all pass.

### Checklist

Before submitting the PR make sure the following are checked:

*    This Pull Request is related to one change. Unrelated changes should be opened in separate PRs.
*    Commit message has a detailed description of what changed and why. If this PR fixes a related issue include it in the commit message. Ex: `[Fix #issue-number]`
*    Tests are added or updated if you fix a bug or add a feature.
*    CHANGELOG files are updated for the changed libraries if there is a behavior change or additional feature. Minor bug fixes and documentation changes should not be included.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [activemodel](/rails/rails/issues?q=state%3Aopen%20label%3Aactivemodel) [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord) labels [Jun 24, 2026](#event-27165173270)

 [![@joaoGabriel55](https://avatars.githubusercontent.com/u/23138717?s=40&v=4)](/joaoGabriel55)[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&v=4)](/kamipo)

``[Apply normalization before the underlying type validates a value](/rails/rails/pull/57846/commits/1793a181f4cc8b7f51fd3f3a009482139ba6a726 "Apply normalization before the underlying type validates a value When `normalizes` wraps a type that rejects invalid input (e.g. an Active Record `enum`), `assert_valid_value` ran against the raw, un-normalized value and raised before normalization could run. `NormalizedValueType` now normalizes the value before delegating `assert_valid_value` to the underlying cast type.")`` …

  

  

`[1793a18](/rails/rails/pull/57846/commits/1793a181f4cc8b7f51fd3f3a009482139ba6a726)`

When \`normalizes\` wraps a type that rejects invalid input (e.g. an
Active Record \`enum\`), \`assert\_valid\_value\` ran against the raw,
un-normalized value and raised before normalization could run.
\`NormalizedValueType\` now normalizes the value before delegating
\`assert\_valid\_value\` to the underlying cast type.

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) [force-pushed](/rails/rails/compare/e4d332b16721ce5e91183597fe42a2faaa9e67a4..1793a181f4cc8b7f51fd3f3a009482139ba6a726) the fix\_normalizes\_on\_an\_enum\_attribute branch from [`e4d332b`](/rails/rails/commit/e4d332b16721ce5e91183597fe42a2faaa9e67a4) to [`1793a18`](/rails/rails/commit/1793a181f4cc8b7f51fd3f3a009482139ba6a726) [Compare](/rails/rails/compare/e4d332b16721ce5e91183597fe42a2faaa9e67a4..1793a181f4cc8b7f51fd3f3a009482139ba6a726) [August 12, 2026 11:22](#event-29336141436)

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) enabled auto-merge [August 12, 2026 11:23](#event-29336162799)

Hide details View details

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) merged commit [`f8b7d1f`](/rails/rails/commit/f8b7d1ff2e57d3a995879b26a2f728bc216bd888) into rails:main [Aug 12, 2026](https://github.com/rails/rails/pull/57846#event-29336519065)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page. 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F57846)

 ### Reviewers

No reviews

### Assignees

No one assigned

### Labels

[activemodel](/rails/rails/issues?q=state%3Aopen%20label%3Aactivemodel) [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord)

### Projects

None yet

### Milestone

No milestone

### Development

Successfully merging this pull request may close these issues.

[normalizes on an enum attribute raises ArgumentError instead of normalizing before enum casting](https://github.com/rails/rails/issues/57828)

### Uh oh!

There was an error while loading. Please reload this page.

### 2 participants

 [![@joaoGabriel55](https://avatars.githubusercontent.com/u/23138717?s=52&v=4)](/joaoGabriel55)[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=52&v=4)](/kamipo) 

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
