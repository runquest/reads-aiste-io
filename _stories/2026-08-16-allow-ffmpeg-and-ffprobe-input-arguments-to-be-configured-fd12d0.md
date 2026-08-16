---
layout: "story"
title: "Allow ffmpeg and ffprobe input arguments to be configured"
date: "2026-08-16"
permalink: "/2026/08/16/stories/allow-ffmpeg-and-ffprobe-input-arguments-to-be-configured-fd12d0/"
slug: "allow-ffmpeg-and-ffprobe-input-arguments-to-be-configured-fd12d0"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58461"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Two new configuration parameters are introduced. config.active_storage.video_preview_input_arguments is passed to ffmpeg before -i, and config.active_storage.ffprobe_arguments is passed to ffprobe before the file path. Both default to empty string.

---

Allow ffmpeg and ffprobe input arguments to be configured by flavorjones · Pull Request #58461 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58461)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58461)

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

# Allow ffmpeg and ffprobe input arguments to be configured - #58461

#58461

Merged

[flavorjones](/flavorjones) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[flavorjones:video-input-arguments](/flavorjones/rails/tree/video-input-arguments)flavorjones/rails:video-input-argumentsCopy head branch name to clipboard

Aug 12, 2026

[Conversation](/rails/rails/pull/58461)[Commits1 (1)](/rails/rails/pull/58461/commits)[Checks](/rails/rails/pull/58461/checks)[Files changed](/rails/rails/pull/58461/files)

Merged

## 

[Allow ffmpeg and ffprobe input arguments to be configured](#top)#58461

[flavorjones](/flavorjones) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[flavorjones:video-input-arguments](/flavorjones/rails/tree/video-input-arguments)flavorjones/rails:video-input-argumentsCopy head branch name to clipboard

## Conversation

 [![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=80&v=4)](/flavorjones)

### 

 ![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=48&v=4)**[flavorjones](/flavorjones)** commented [Aug 12, 2026](#issue-5133839765)

Copy link

Copy Markdown

Member

### Motivation / Background

Constraining which demuxers and decoders ffmpeg and ffprobe will use is a hardening measure for the media-processing attack surface, and Active Storage cannot express that constraint.

ffmpeg's flags are position dependent. `-codec_whitelist` and `-protocol_whitelist` must appear before `-i`, and `config.active_storage.video_preview_arguments` is inserted after it.

ffprobe has no argument configuration at all.

Applying an allowlist therefore means overriding a private method in `ActiveStorage::Previewer::VideoPreviewer` or in either analyzer. An override of `probe_from` restates the whole argument list, so it drifts whenever Rails changes the probe.

### Detail

This Pull Request introduces two new configuration parameters:

*   `config.active_storage.video_preview_input_arguments`, passed to ffmpeg before `-i`
*   `config.active_storage.ffprobe_arguments`, passed to ffprobe before the file path

Both default to `""`, so the command lines are unchanged for an application that does not set them.

`ffprobe_arguments` is named for the tool because `ActiveStorage::Analyzer::VideoAnalyzer` and `ActiveStorage::Analyzer::AudioAnalyzer` build the same ffprobe command line.

As an example, an application that accepts only H.264 video with AAC audio would configure:

config.active\_storage.video\_preview\_input\_arguments \= "-codec\_whitelist h264,aac"
config.active\_storage.ffprobe\_arguments \= "-codec\_whitelist h264,aac"

With that example configuration, the previewer command line changes from:

```
ffmpeg -i /tmp/blob.mp4 -vf 'select=...' -frames:v 1 -f image2 -
```

to:

```
ffmpeg -codec_whitelist h264,aac -i /tmp/blob.mp4 -vf 'select=...' -frames:v 1 -f image2 -
```

and both analyzer command lines change from:

```
ffprobe -print_format json -show_streams -show_format -v error /tmp/blob.mp4
```

to:

```
ffprobe -print_format json -show_streams -show_format -v error -codec_whitelist h264,aac /tmp/blob.mp4
```

The security guide gains a "Media Processing of File Uploads" section covering these parameters and the input flags listed above.

### Additional information

This is not itself a security fix. It gives an application the means to harden media processing where it needs to.

### Checklist

Before submitting the PR make sure the following are checked:

*    This Pull Request is related to one change. Unrelated changes should be opened in separate PRs.
*    Commit message has a detailed description of what changed and why. If this PR fixes a related issue include it in the commit message. Ex: `[Fix #issue-number]`
*    Tests are added or updated if you fix a bug or add a feature.
*    CHANGELOG files are updated for the changed libraries if there is a behavior change or additional feature. Minor bug fixes and documentation changes should not be included.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&v=4)](/flavorjones)

``[Allow ffmpeg and ffprobe input arguments to be configured](/rails/rails/pull/58461/commits/a79729b9cad2ae64ada2e8b478fd62c9d4577d65 "Allow ffmpeg and ffprobe input arguments to be configured Constraining which demuxers and decoders ffmpeg and ffprobe will use is a hardening measure for the media-processing attack surface, and Active Storage could not express that constraint. ffmpeg's flags are position dependent. `-codec_whitelist` and `-protocol_whitelist` must appear before `-i`, and `config.active_storage.video_preview_arguments` was inserted after it. ffprobe had no argument configuration at all. Applying an allowlist therefore meant overriding a private method in `ActiveStorage::Previewer::VideoPreviewer` or in either analyzer. An override of `probe_from` restated the whole argument list, so it drifted whenever Rails changed the probe. Two new configuration parameters will be introduced: * `config.active_storage.video_preview_input_arguments`, passed to ffmpeg before `-i` * `config.active_storage.ffprobe_arguments`, passed to ffprobe before the file path Both will default to `\"\"`, so the command lines will be unchanged for an application that does not set them. `ffprobe_arguments` will be named for the tool because `ActiveStorage::Analyzer::VideoAnalyzer` and `ActiveStorage::Analyzer::AudioAnalyzer` build the same ffprobe command line. As an example, an application that accepts only H.264 video with AAC audio would configure: config.active_storage.video_preview_input_arguments = \"-codec_whitelist h264,aac\" config.active_storage.ffprobe_arguments = \"-codec_whitelist h264,aac\" With that example configuration, the previewer command line will change from: ffmpeg -i /tmp/blob.mp4 -vf 'select=...' -frames:v 1 -f image2 - to: ffmpeg -codec_whitelist h264,aac -i /tmp/blob.mp4 -vf 'select=...' -frames:v 1 -f image2 - and both analyzer command lines will change from: ffprobe -print_format json -show_streams -show_format -v error /tmp/blob.mp4 to: ffprobe -print_format json -show_streams -show_format -v error -codec_whitelist h264,aac /tmp/blob.mp4 The security guide will gain a \"Media Processing of File Uploads\" section covering these parameters and the input flags listed above. This is not itself a security fix. It will give an application the means to harden media processing where it needs to.")`` …

  

  

`[a79729b](/rails/rails/pull/58461/commits/a79729b9cad2ae64ada2e8b478fd62c9d4577d65)`

Constraining which demuxers and decoders ffmpeg and ffprobe will use is a
hardening measure for the media-processing attack surface, and Active Storage
could not express that constraint.

ffmpeg's flags are position dependent. \`-codec\_whitelist\` and
\`-protocol\_whitelist\` must appear before \`-i\`, and
\`config.active\_storage.video\_preview\_arguments\` was inserted after it.

ffprobe had no argument configuration at all.

Applying an allowlist therefore meant overriding a private method in
\`ActiveStorage::Previewer::VideoPreviewer\` or in either analyzer. An override
of \`probe\_from\` restated the whole argument list, so it drifted whenever Rails
changed the probe.

Two new configuration parameters will be introduced:

\* \`config.active\_storage.video\_preview\_input\_arguments\`, passed to ffmpeg
  before \`-i\`
\* \`config.active\_storage.ffprobe\_arguments\`, passed to ffprobe before the file
  path

Both will default to \`""\`, so the command lines will be unchanged for an
application that does not set them.

\`ffprobe\_arguments\` will be named for the tool because
\`ActiveStorage::Analyzer::VideoAnalyzer\` and
\`ActiveStorage::Analyzer::AudioAnalyzer\` build the same ffprobe command line.

As an example, an application that accepts only H.264 video with AAC audio
would configure:

    config.active\_storage.video\_preview\_input\_arguments = "-codec\_whitelist h264,aac"
    config.active\_storage.ffprobe\_arguments = "-codec\_whitelist h264,aac"

With that example configuration, the previewer command line will change from:

    ffmpeg -i /tmp/blob.mp4 -vf 'select=...' -frames:v 1 -f image2 -

to:

    ffmpeg -codec\_whitelist h264,aac -i /tmp/blob.mp4 -vf 'select=...' -frames:v 1 -f image2 -

and both analyzer command lines will change from:

    ffprobe -print\_format json -show\_streams -show\_format -v error /tmp/blob.mp4

to:

    ffprobe -print\_format json -show\_streams -show\_format -v error -codec\_whitelist h264,aac /tmp/blob.mp4

The security guide will gain a "Media Processing of File Uploads" section
covering these parameters and the input flags listed above.

This is not itself a security fix. It will give an application the means to
harden media processing where it needs to.

[![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [railties](/rails/rails/issues?q=state%3Aopen%20label%3Arailties) [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs) [activestorage](/rails/rails/issues?q=state%3Aopen%20label%3Aactivestorage) labels [Aug 12, 2026](#event-29357025137)

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) requested a review from [jeremy](/jeremy) [August 12, 2026 18:03](#event-29357081544)

[![jeremy](https://avatars.githubusercontent.com/u/199?s=60&v=4)](/jeremy)

**[jeremy](/jeremy)** approved these changes [Aug 12, 2026](#pullrequestreview-4919894474)

[View reviewed changes](/rails/rails/pull/58461/files/a79729b9cad2ae64ada2e8b478fd62c9d4577d65)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy) [jeremy](/jeremy) added this to the [8.2.0](/rails/rails/milestone/97) milestone [Aug 12, 2026](#event-29358725876)

Hide details View details

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) merged commit [`7b911de`](/rails/rails/commit/7b911de2d16f4af982c67e07c4b964a9c25b6f7e) into rails:main [Aug 12, 2026](https://github.com/rails/rails/pull/58461#event-29360198189)

4 of 5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=40&u=b696c885624fac0e15405b8713a770e888f26a96&v=4)](/flavorjones)

[flavorjones](/flavorjones) deleted the video-input-arguments branch [August 12, 2026 19:01](#event-29360239669) 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58461)

 ### Reviewers

 [![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)[jeremy](/jeremy) [](/rails/rails/pull/58461/files/a79729b9cad2ae64ada2e8b478fd62c9d4577d65)jeremy approved these changes

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

### 2 participants

 [![@flavorjones](https://avatars.githubusercontent.com/u/8207?s=52&v=4)](/flavorjones)[![@jeremy](https://avatars.githubusercontent.com/u/199?s=52&v=4)](/jeremy) 

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
