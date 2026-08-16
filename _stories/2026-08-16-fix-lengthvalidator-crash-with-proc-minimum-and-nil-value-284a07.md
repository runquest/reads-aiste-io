---
layout: "story"
title: "Fix LengthValidator crash with proc minimum and nil value"
date: "2026-08-16"
permalink: "/2026/08/16/stories/fix-lengthvalidator-crash-with-proc-minimum-and-nil-value-284a07/"
slug: "fix-lengthvalidator-crash-with-proc-minimum-and-nil-value-284a07"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58428"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
The proc was resolved only when the value was present, so for a nil value it leaked unresolved into the error message and was invoked with the message options hash instead of the record. It is now resolved before the error is built, producing the expected "is too short" message.

---

Fix LengthValidator crash with proc minimum and nil value by ousamabenyounes · Pull Request #58428 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58428)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58428)

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

# Fix LengthValidator crash with proc minimum and nil value - #58428

#58428

Merged

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[ousamabenyounes:fix/issue-40642](/ousamabenyounes/rails/tree/fix/issue-40642)ousamabenyounes/rails:fix/issue-40642Copy head branch name to clipboard

Aug 10, 2026

[Conversation](/rails/rails/pull/58428)[Commits1 (1)](/rails/rails/pull/58428/commits)[Checks](/rails/rails/pull/58428/checks)[Files changed](/rails/rails/pull/58428/files)

Merged

## 

[Fix LengthValidator crash with proc minimum and nil value](#top)#58428

[kamipo](/kamipo) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[ousamabenyounes:fix/issue-40642](/ousamabenyounes/rails/tree/fix/issue-40642)ousamabenyounes/rails:fix/issue-40642Copy head branch name to clipboard

## Conversation

 [![@ousamabenyounes](https://avatars.githubusercontent.com/u/2910651?s=80&v=4)](/ousamabenyounes)

### 

 ![@ousamabenyounes](https://avatars.githubusercontent.com/u/2910651?s=48&v=4)**[ousamabenyounes](/ousamabenyounes)** commented [Aug 10, 2026](#issue-5105630142)

Copy link

Copy Markdown

Contributor

### Motivation / Background

Fixes [#40642](https://github.com/rails/rails/issues/40642).

`LengthValidator` raises `NoMethodError` when a `:minimum` (or `:is`) length  
constraint is given as a proc and the validated value is `nil`:

class Foo
  include ActiveModel::Validations
  validates :bar, length: { minimum: \->(record) { record.one + 2 } }
  def one \= 1
  def bar \= nil
end

Foo.new.errors.messages
\# => NoMethodError: undefined method 'one' for an instance of Hash

The proc was resolved (`resolve_value`) only inside the branch guarded by the  
value being present:

if !value.nil? || skip\_nil\_check?(key)
  check\_value \= resolve\_value(record, check\_value)
  ...
end
errors\_options\[:count\] \= check\_value

`skip_nil_check?` is only true for `:maximum`, so for a `nil` value with a  
`:minimum`/`:is` proc the branch is skipped and the **raw proc** is stored in  
`errors_options[:count]`. It then leaks into I18n interpolation and is invoked  
with the message options hash instead of the record, raising `NoMethodError`.

### Detail

Resolve the check value once, before the error is built, so `:count` is always  
a concrete value. Currently-working paths are unchanged: `resolve_value` is  
idempotent for concrete integers, and the proc is still invoked exactly once  
per check. (Symbols were already resolved correctly downstream and are not  
affected.)

         CHECKS.each do |key, validity\_check|
           next unless check\_value = options\[key\]

+          check\_value = resolve\_value(record, check\_value)
+
           if !value.nil? || skip\_nil\_check?(key)
\-            check\_value = resolve\_value(record, check\_value)
             next if value\_length.public\_send(validity\_check, check\_value)
           end

### Additional information

#### Test verification (RED → GREEN)

Two regression tests were added (proc as `:minimum` and as `:is`, both with a  
`nil` value).

**RED** — `activemodel/lib/active_model/validations/length.rb` at its unmodified  
`main` state, with only the new tests applied:

```
Error:
LengthValidationTest#test_validates_length_of_using_proc_as_minimum_with_nil_value:
NoMethodError: undefined method 'min_title_length' for an instance of Hash
Error:
LengthValidationTest#test_validates_length_of_using_proc_as_is_with_nil_value:
NoMethodError: undefined method 'exact_title_length' for an instance of Hash
43 runs, 295 assertions, 0 failures, 2 errors, 0 skips
```

**GREEN** — with the fix applied (full Active Model suite):

```
1197 runs, 5378 assertions, 0 failures, 0 errors, 0 skips
```

### Checklist

*    This Pull Request is related to one change.
*    Commit message has a detailed description of what changed and why.
*    Tests are added or updated if you fix a bug or add a feature.
*    CHANGELOG files are updated for the changed libraries if there is a behavior change or additional feature.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions[![@ousamabenyounes](https://avatars.githubusercontent.com/u/2910651?s=40&v=4)](/ousamabenyounes)

`[Fix LengthValidator crash with proc minimum and nil value](/rails/rails/pull/58428/commits/9096675dffaa225b2a321658d17f12b494c191b3 "Fix LengthValidator crash with proc minimum and nil value [Fix #40642] When a length constraint (:minimum or :is) was given as a proc, resolve_value was only called inside the branch guarded by the value being present. For a nil value with a :minimum (or :is) constraint the raw proc leaked unresolved into errors_options[:count] and was later invoked with the message options hash during I18n interpolation, raising NoMethodError instead of producing the expected \"is too short\" message. Resolve the check value once, before building the error, so the error message always receives a concrete count. Currently-working paths are unchanged since resolve_value is idempotent for concrete integers and the proc is still invoked exactly once per check.")` …

  

  

`[9096675](/rails/rails/pull/58428/commits/9096675dffaa225b2a321658d17f12b494c191b3)`

\[Fix [rails#40642](https://github.com/rails/rails/issues/40642)\]

When a length constraint (:minimum or :is) was given as a proc, resolve\_value
was only called inside the branch guarded by the value being present. For a nil
value with a :minimum (or :is) constraint the raw proc leaked unresolved into
errors\_options\[:count\] and was later invoked with the message options hash
during I18n interpolation, raising NoMethodError instead of producing the
expected "is too short" message.

Resolve the check value once, before building the error, so the error message
always receives a concrete count. Currently-working paths are unchanged since
resolve\_value is idempotent for concrete integers and the proc is still
invoked exactly once per check.

[![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added the [activemodel](/rails/rails/issues?q=state%3Aopen%20label%3Aactivemodel) label [Aug 10, 2026](#event-29197004103)

Hide details View details

[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=40&u=76645b9234fbbeb252f789a670b62927cf998541&v=4)](/kamipo)

[kamipo](/kamipo) merged commit [`e137505`](/rails/rails/commit/e1375057e1a0765178e6ac9cf2820503c25d2f27) into rails:main [Aug 10, 2026](https://github.com/rails/rails/pull/58428#event-29211583502)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page. 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58428)

 ### Reviewers

No reviews

### Assignees

No one assigned

### Labels

[activemodel](/rails/rails/issues?q=state%3Aopen%20label%3Aactivemodel)

### Projects

None yet

### Milestone

No milestone

### Development

Successfully merging this pull request may close these issues.

[LenthValidator breaks if nil value has a minimum length with a proc.](https://github.com/rails/rails/issues/40642)

### Uh oh!

There was an error while loading. Please reload this page.

### 2 participants

 [![@ousamabenyounes](https://avatars.githubusercontent.com/u/2910651?s=52&v=4)](/ousamabenyounes)[![@kamipo](https://avatars.githubusercontent.com/u/12642?s=52&v=4)](/kamipo) 

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
