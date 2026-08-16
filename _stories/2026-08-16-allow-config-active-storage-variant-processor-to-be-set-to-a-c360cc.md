---
layout: "story"
title: "Allow config.active_storage.variant_processor to be set to a class"
date: "2026-08-16"
permalink: "/2026/08/16/stories/allow-config-active-storage-variant-processor-to-be-set-to-a-c360cc/"
slug: "allow-config-active-storage-variant-processor-to-be-set-to-a-c360cc"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58384"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
The class must implement the interface defined by ActiveStorage::Transformers::Transformer. Active Storage then uses it for variant processing

---

Allow \`config.active\_storage.variant\_processor\` to be set to a class by flavorjones · Pull Request #58384 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58384)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58384)

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

# Allow `config.active_storage.variant_processor` to be set to a class - #58384

#58384

Merged

[flavorjones](/flavorjones) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[flavorjones:variant-transformer-seam](/flavorjones/rails/tree/variant-transformer-seam)flavorjones/rails:variant-transformer-seamCopy head branch name to clipboard

Aug 7, 2026

[Conversation](/rails/rails/pull/58384)[Commits1 (1)](/rails/rails/pull/58384/commits)[Checks](/rails/rails/pull/58384/checks)[Files changed](/rails/rails/pull/58384/files)

Merged

## 

[Allow `config.active_storage.variant_processor` to be set to a class](#top)#58384

[flavorjones](/flavorjones) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[flavorjones:variant-transformer-seam](/flavorjones/rails/tree/variant-transformer-seam)flavorjones/rails:variant-transformer-seamCopy head branch name to clipboard

## Conversation

 [![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=80&v=4)](/flavorjones)

### 

 ![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=48&v=4)**[flavorjones](/flavorjones)** commented [Aug 5, 2026](#issue-5075112480)

Copy link

Copy Markdown

Member

### Motivation / Background

Active Storage passes attachment bytes to a media library in three operations: analysis, preview generation, and variant processing. An application can replace the code for two of them: `config.active_storage.analyzers` and `config.active_storage.previewers` each accept an array of classes.

Variant processing has no equivalent. `config.active_storage.variant_processor` accepts only `:vips`, `:mini_magick`, and `:disabled` (though, note that `ActiveStorage::Engine` maps those symbols to a class):

ActiveStorage.variant\_transformer \=
  case ActiveStorage.variant\_processor
  when :disabled
    ActiveStorage::Transformers::NullTransformer
  when :vips
    ActiveStorage::Transformers::Vips
  when :mini\_magick
    ActiveStorage::Transformers::ImageMagick
  end

`ActiveStorage.variant_transformer` is an undocumented `mattr_accessor`, so an application cannot use it directly.

This gap makes it challenging to experiment with variant processors, for example to play around with sandboxing image transformations.

### Detail

`config.active_storage.variant_processor` now accepts a class, in addition to `:vips`, `:mini_magick`, and `:disabled`. The class must implement the interface defined by `ActiveStorage::Transformers::Transformer` in order to behave properly, though that is not explicitly checked. Active Storage then uses it for variant processing.

config.active\_storage.variant\_processor \= CustomTransformer

Note that the built-in image analyzers accept a blob only when `variant_processor` is `:vips` or `:mini_magick`, so setting this configuration to a custom class requires adding a custom analyzer to `config.active_storage.analyzers` as well (for now).

One notable change: an unrecognized value now raises `ArgumentError` while booting, instead of failing later with `NoMethodError` when a variant is generated. I think this is a good thing.

### Additional information

This change only adds the abstraction layer. It does not add any custom or additional transformers.

Active Storage does not check the type of the configured class. The class does not have to subclass `ActiveStorage::Transformers::Transformer`. It only has to implement the same interface.

The allowlist for transformation names and arguments is in `ActiveStorage::Transformers::ImageMagick`, and `ActiveStorage::Transformers::Vips` does not apply it. I think that it's worth moving that validation to the analyzer/transformer/previewer classes, but should be done in a separate PR.

### Checklist

Before submitting the PR make sure the following are checked:

*    This Pull Request is related to one change. Unrelated changes should be opened in separate PRs.
*    Commit message has a detailed description of what changed and why. If this PR fixes a related issue include it in the commit message. Ex: `[Fix #issue-number]`
*    Tests are added or updated if you fix a bug or add a feature.
*    CHANGELOG files are updated for the changed libraries if there is a behavior change or additional feature. Minor bug fixes and documentation changes should not be included.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties) [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs) [activestorage](/rails/rails/issues?q=state%3Aopen%20label%3Aactivestorage) labels [Aug 5, 2026](#event-29033458198)

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) requested a lite review from [Copilot](/apps/copilot-pull-request-reviewer) [August 6, 2026 02:34](#event-29044137303)

**Copilot** [started reviewing](https://github.com/rails/rails/sessions/c35887bb-2b8c-435b-9135-8d04253b2b65 "View session") on behalf of [flavorjones](/flavorjones) [August 6, 2026 02:35](#event-29044154741) [View session](https://github.com/rails/rails/sessions/c35887bb-2b8c-435b-9135-8d04253b2b65)

[](/apps/copilot-pull-request-reviewer)

**[Copilot](/apps/copilot-pull-request-reviewer) AI** reviewed [Aug 6, 2026](#pullrequestreview-4870502253)

[View reviewed changes](/rails/rails/pull/58384/files)

### 

**[Copilot](/apps/copilot-pull-request-reviewer) AI** left a comment

Copy link

Copy Markdown



There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

## Pull request overview

This PR extends Active Storage’s configuration to allow `config.active_storage.variant_processor` to be set to a transformer class (in addition to the existing `:vips`, `:mini_magick`, and `:disabled` symbols), enabling applications to plug in custom variant processing implementations.

**Changes:**

*   Update Active Storage engine initialization to accept a class-based `variant_processor` and raise `ArgumentError` for unknown values during boot.
*   Add integration tests covering both the class-based configuration path and the new boot-time error behavior.
*   Document the new configuration option in the Guides, API docs, and the Active Storage changelog.

### Reviewed changes

Copilot reviewed 7 out of 7 changed files in this pull request and generated 1 comment.

Show a summary per file

File

Description

`activestorage/lib/active_storage/engine.rb`

Accept transformer classes for `variant_processor` and raise early for unknown values.

`railties/test/application/active_storage/engine_integration_test.rb`

Adds coverage for class-based configuration and unknown-value error behavior.

`railties/test/application/active_storage/custom_processors_integration_test.rb`

New integration test demonstrating a custom analyzer + custom transformer end-to-end.

`guides/source/configuring.md`

Documents class-based `variant_processor` and notes analyzer implications.

`activestorage/lib/active_storage/transformers/transformer.rb`

Clarifies the custom transformer interface contract in documentation.

`activestorage/app/models/active_storage/variant.rb`

Updates public docs to reflect that only built-in transformers require `image_processing`.

`activestorage/CHANGELOG.md`

Adds changelog entry describing the new configuration behavior.

* * *

💡 [Add Copilot custom instructions](/rails/rails/new/main?filename=.github/instructions/*.instructions.md) for smarter, more guided reviews. [Learn how to get started](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

  

Comment thread [railties/test/application/active\_storage/custom\_processors\_integration\_test.rb](/rails/rails/pull/58384/files#diff-72331680ef96331c4b432654ff9631a8d4f3ab7b9158fe32a70cddbc2193e413) Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) [force-pushed](/rails/rails/compare/bb9fca0d75d2f0438abc3ea8ddc848331e911d66..05cb69642693fb732136059a9750be3f62aa61aa) the variant-transformer-seam branch from [`bb9fca0`](/rails/rails/commit/bb9fca0d75d2f0438abc3ea8ddc848331e911d66) to [`05cb696`](/rails/rails/commit/05cb69642693fb732136059a9750be3f62aa61aa) [Compare](/rails/rails/compare/bb9fca0d75d2f0438abc3ea8ddc848331e911d66..05cb69642693fb732136059a9750be3f62aa61aa) [August 6, 2026 02:44](#event-29044433282)

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&v=4)](/flavorjones)

``[Allow `config.active_storage.variant_processor` to be set to a class](/rails/rails/pull/58384/commits/54cbc21ce0ec848f77b3d3513e8e53de5eff864f "Allow `config.active_storage.variant_processor` to be set to a class Active Storage passes attachment bytes to a media library in three operations: analysis, preview generation, and variant processing. An application could replace the code for two of them, through `config.active_storage.analyzers` and `config.active_storage.previewers`. Variant processing had no equivalent. `config.active_storage.variant_processor` accepted only `:vips`, `:mini_magick`, and `:disabled`, and the engine assigned `ActiveStorage.variant_transformer` in `config.after_initialize`, so an application that set it in an initializer lost the value. That made it challenging to opt into experimental variant processing, for example to play around with sandboxing image transformations. `config.active_storage.variant_processor` will also accept a class, in addition to `:vips`, `:mini_magick`, and `:disabled`. The class must implement the interface defined by `ActiveStorage::Transformers::Transformer`. Active Storage will then use it for variant processing. Note that the built-in image analyzers accept a blob only when `variant_processor` is `:vips` or `:mini_magick`, so setting this configuration to a custom class will require adding a custom analyzer to `config.active_storage.analyzers` as well. An unrecognized value will raise `ArgumentError` while booting, instead of failing later with `NoMethodError` when a variant is generated.")`` …

  

  

`[54cbc21](/rails/rails/pull/58384/commits/54cbc21ce0ec848f77b3d3513e8e53de5eff864f)`

Active Storage passes attachment bytes to a media library in three operations:
analysis, preview generation, and variant processing. An application could
replace the code for two of them, through \`config.active\_storage.analyzers\` and
\`config.active\_storage.previewers\`. Variant processing had no equivalent.
\`config.active\_storage.variant\_processor\` accepted only \`:vips\`,
\`:mini\_magick\`, and \`:disabled\`, and the engine assigned
\`ActiveStorage.variant\_transformer\` in \`config.after\_initialize\`, so an
application that set it in an initializer lost the value. That made it
challenging to opt into experimental variant processing, for example to play
around with sandboxing image transformations.

\`config.active\_storage.variant\_processor\` will also accept a class, in addition
to \`:vips\`, \`:mini\_magick\`, and \`:disabled\`. The class must implement the
interface defined by \`ActiveStorage::Transformers::Transformer\`. Active
Storage will then use it for variant processing. Note that the built-in
image analyzers accept a blob only when \`variant\_processor\` is \`:vips\` or
\`:mini\_magick\`, so setting this configuration to a custom class will require
adding a custom analyzer to \`config.active\_storage.analyzers\` as well. An
unrecognized value will raise \`ArgumentError\` while booting, instead of failing
later with \`NoMethodError\` when a variant is generated.

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) [force-pushed](/rails/rails/compare/05cb69642693fb732136059a9750be3f62aa61aa..54cbc21ce0ec848f77b3d3513e8e53de5eff864f) the variant-transformer-seam branch from [`05cb696`](/rails/rails/commit/05cb69642693fb732136059a9750be3f62aa61aa) to [`54cbc21`](/rails/rails/commit/54cbc21ce0ec848f77b3d3513e8e53de5eff864f) [Compare](/rails/rails/compare/05cb69642693fb732136059a9750be3f62aa61aa..54cbc21ce0ec848f77b3d3513e8e53de5eff864f) [August 6, 2026 02:44](#event-29044436244)

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) requested a review from [jeremy](/jeremy) [August 7, 2026 19:17](#event-29136644747)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy) [jeremy](/jeremy) added this to the [8.2.0](/rails/rails/milestone/97) milestone [Aug 7, 2026](#event-29138933783)

[![jeremy](https://avatars.githubusercontent.com/u/199?s=60&v=4)](/jeremy)

**[jeremy](/jeremy)** approved these changes [Aug 7, 2026](#pullrequestreview-4886278490)

[View reviewed changes](/rails/rails/pull/58384/files/54cbc21ce0ec848f77b3d3513e8e53de5eff864f)

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=80&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

### 

**[flavorjones](/flavorjones)** commented [Aug 7, 2026](#issuecomment-5221663446)

Copy link

Copy Markdown

Member Author

Note for posterity: I had a side chat with [@jeremy](https://github.com/jeremy) about using straight class references here (and in the other existing config params [config.active\_storage.analyzers](https://guides.rubyonrails.org/configuring.html#config-active-storage-analyzers) and [config.active\_storage.previewers](https://guides.rubyonrails.org/configuring.html#config-active-storage-previewers)) where he pointed out the "lumpy" conventions currently in use.

Specifically:

*   [config.active\_storage.variant\_processor](https://guides.rubyonrails.org/configuring.html#config-active-storage-variant-processor) currently takes a snake case symbol, which might reasonably be expected to extend like [config.session\_store](https://guides.rubyonrails.org/configuring.html#config-session-store) where the symbol is classified and resolved under a fixed namespace
*   but the analyzers and previewers are configured with a straight array of `Class` references
*   and that the use of `Class` references can defeat much of the boot-time ordering in Rails, resulting in early loads or failures to reload in development

So if this is merged I'll plan to follow up with another PR that would add support for the following configuration conventions:

*   snake case symbol (classified and resolved under a documented namespace)
*   class name (resolved when needed, and at reload)
*   literal class references

across all three active storage processor config params.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

Hide details View details

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) merged commit [`5ea765e`](/rails/rails/commit/5ea765e5b00085a22f5cbe863c0d2ac765428242) into rails:main [Aug 7, 2026](https://github.com/rails/rails/pull/58384#event-29139516260)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@julianrubisch](https://avatars.githubusercontent.com/u/4352208?s=40&v=4)](/julianrubisch) [julianrubisch](/julianrubisch) mentioned this pull request [Aug 8, 2026](#ref-pullrequest-5083849414)

[Activestorage transformers for custom media types #58398](/rails/rails/pull/58398)

Open

4 tasks

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones) [flavorjones](/flavorjones) mentioned this pull request [Aug 14, 2026](#ref-pullrequest-5154560383)

[(saas-only) Process Active Storage attachments in a HotCell cell basecamp/fizzy#3034](/basecamp/fizzy/pull/3034)

Open 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58384)

 ### Reviewers

[Copilot code review](/apps/copilot-pull-request-reviewer) [Copilot](/apps/copilot-pull-request-reviewer)

Copilot review effort Lite

*   Lite Efficient review, low cost
*   Balanced Deep analysis, moderate cost
*   Max Most thorough, high cost Coming soon

**Applies to this pull request for everyone.**[Learn more about Copilot code review.](https://gh.io/copilot-code-review-docs)

[](/rails/rails/pull/58384/files/bb9fca0d75d2f0438abc3ea8ddc848331e911d66)Copilot left review comments

 [![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)[jeremy](/jeremy) [](/rails/rails/pull/58384/files/54cbc21ce0ec848f77b3d3513e8e53de5eff864f)jeremy approved these changes

### Assignees

No one assigned

### Labels

[activestorage](/rails/rails/issues?q=state%3Aopen%20label%3Aactivestorage) [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs) [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties)

### Projects

None yet

### Milestone

[**8.2.0**](/rails/rails/milestone/97 "8.2.0")

### Development

Successfully merging this pull request may close these issues.

### Uh oh!

There was an error while loading. Please reload this page.

### 3 participants

 [![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=52&v=4)](/flavorjones)[![@jeremy](https://avatars.githubusercontent.com/u/199?s=52&v=4)](/jeremy)[](/apps/copilot-pull-request-reviewer) 

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
