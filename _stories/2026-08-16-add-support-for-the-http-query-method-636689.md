---
layout: "story"
title: "Add support for the HTTP QUERY method"
date: "2026-08-16"
permalink: "/2026/08/16/stories/add-support-for-the-http-query-method-636689/"
slug: "add-support-for-the-http-query-method-636689"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/57973"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
QUERY is a safe and idempotent HTTP method that conveys the query in the request content, making it suitable for queries too large or structured for a URL query string

---

Add support for the HTTP QUERY method by magnogouveia · Pull Request #57973 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F57973)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F57973)

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

# Add support for the HTTP QUERY method - #57973

#57973

Merged

[jeremy](/jeremy) merged 10 commits into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[magnogouveia:add-http-query-method](/magnogouveia/rails/tree/add-http-query-method)magnogouveia/rails:add-http-query-methodCopy head branch name to clipboard

Aug 14, 2026

[Conversation](/rails/rails/pull/57973)[Commits10 (10)](/rails/rails/pull/57973/commits)[Checks](/rails/rails/pull/57973/checks)[Files changed](/rails/rails/pull/57973/files)

Merged

## 

[Add support for the HTTP QUERY method](#top)#57973

[jeremy](/jeremy) merged 10 commits into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[magnogouveia:add-http-query-method](/magnogouveia/rails/tree/add-http-query-method)magnogouveia/rails:add-http-query-methodCopy head branch name to clipboard

## Conversation

 [![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=80&v=4)](/magnogouveia)

### 

 ![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=48&v=4)**[magnogouveia](/magnogouveia)** commented [Jul 3, 2026](#issue-4804185511)

Copy link

Copy Markdown

Contributor

### Summary

Registers the HTTP QUERY method ([RFC 10008](https://www.rfc-editor.org/rfc/rfc10008.html), June 2026, Proposed Standard) as a known HTTP method and wires it through Action Pack:

\# config/routes.rb
query "search", to: "search#index"
match "filter", to: "search#filter", via: :query

\# app code
request.query?                \# => true
request.request\_method\_symbol \# => :query

\# integration tests
query "/search", params: { filters: { status: "active" } }, as: :json

### Motivation

QUERY is registered in the [IANA HTTP Method Registry](https://www.iana.org/assignments/http-methods/http-methods.xhtml) as safe and idempotent. It behaves like GET but carries the query in the request content, for queries too large or structured for a URL query string: complex filters, search endpoints, GraphQL, JSON-RPC.

Rails currently rejects the method before it reaches application code: `request_method` raises `ActionController::UnknownHttpMethod` (rendered as a 405), `request.get?` raises instead of returning false, and `match ..., via: :query` draws a route that can never match.

Proposed beforehand on the rails-core forum by Muhammet Dilmaç in [Proposal: Support for the HTTP QUERY method (RFC 10008)](https://discuss.rubyonrails.org/t/proposal-support-for-the-http-query-method-rfc-10008/91255); this implements that proposal. Node.js core parses QUERY since 21.7.2, nginx supports it in recent mainline, and Spring has an open PR ([spring-projects/spring-framework#34993](https://github.com/spring-projects/spring-framework/pull/34993)).

### Detail

*   `ActionDispatch::Request`: `RFC10008` constant appended to `HTTP_METHODS`, plus a `query?` predicate (`Rack::Request::Helpers` does not define one).
*   Journey: `QUERY` added to `VerbMatchers::VERBS`.
*   Mapper: `query` verb helper alongside `get`/`post`/`patch`/`put`/`delete`.
*   Integration tests: `query` request helper. No `ActionController::TestCase` wrapper, mirroring `options`; `process(:index, method: "QUERY")` works there.
*   Forgery protection: QUERY requests are exempt, like GET and HEAD. HTML forms cannot issue QUERY requests, and cross-origin QUERY requests always require a CORS preflight (QUERY is not a CORS-safelisted method), so the forgery surface is smaller than GET's. The exemption is a self-contained hunk with its own tests and is easy to drop if a token-required default is preferred.

Body parameter parsing needs no changes: parsing is keyed on Content-Type rather than the request method, so JSON and form-encoded QUERY bodies already parse into `params`.

No behavior changes for existing applications: QUERY requests previously raised before reaching any application code, so no framework default is needed.

Out of scope here: the `Accept-Query` response header, content-based cache keys for QUERY responses (RFC 10008 §2.7), `resources` integration, method override, and a `Rack::Request#query?` upstream addition.

Note on servers: Puma only allows the eight standard methods by default and answers QUERY with a 501 unless its `supported_http_methods` option is extended. That is a deployment concern outside Rails; this change makes Rails ready for the method without changing any server behavior.

### Checklist

*    This Pull Request is related to one change. Unrelated changes should be opened in separate PRs.
*    Commit message has a detailed description of what changed and why. If this PR fixes a related issue include it in the commit message. Ex: `[Fix #issue-number]`
*    Tests are added or updated if you fix a bug or add a feature.
*    CHANGELOG files are updated for the changed libraries if there is a behavior change or additional feature. Minor bug fixes and documentation changes should not be included.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

👍 5 williantenfen, yaroslavrick, usutani, koic, and arg reacted with thumbs up emoji 🎉 3 grobie, n-rodriguez, and williantenfen reacted with hooray emoji 🚀 5 grobie, n-rodriguez, ashwin47, williantenfen, and eddyjaga reacted with rocket emoji

All reactions

*   👍 5 reactions
*   🎉 3 reactions
*   🚀 5 reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [actionpack](/rails/rails/issues?q=state%3Aopen%20label%3Aactionpack) [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs) labels [Jul 3, 2026](#event-27532863508)

[![@seanpdoyle](https://avatars.githubusercontent.com/u/2575027?s=80&u=e7a9fe052c03fa59da09e064fdfacf2b1f627c2f&v=4)](/seanpdoyle)

### 

**[seanpdoyle](/seanpdoyle)** commented [Jul 6, 2026](#issuecomment-4895047369) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Contributor

Both [rack/rack#2474](https://github.com/rack/rack/pull/2474) and [puma/puma#3973](https://github.com/puma/puma/pull/3973) are related to this proposal.

While those particular PRs might not be the ones to add support for `QUERY` to Rack and Puma, others eventually will.

Are there additional considerations to incorporate into the framework to support a fragmented and incremental roll-out of support for architectural dependencies (or other Rack web servers that are not `puma`)?

  

🎉 1 magnogouveia reacted with hooray emoji

All reactions

*   🎉 1 reaction

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=80&u=59e097447f18bf40731f359853736be68eed0545&v=4)](/magnogouveia)

### 

**[magnogouveia](/magnogouveia)** commented [Jul 6, 2026](#issuecomment-4896768859)

Copy link

Copy Markdown

Contributor Author

Thanks for opening those, [@seanpdoyle](https://github.com/seanpdoyle).

This PR doesn't depend on either of them. Rails reads `env["REQUEST_METHOD"]` directly, so any server that puts `QUERY` in the Rack env works with this patch today (I verified end-to-end with Puma's `supported_http_methods` opt-in). If [rack/rack#2474](https://github.com/rack/rack/pull/2474) ships `Rack::Request#query?`, the predicate added here becomes redundant with the same semantics, and we can delegate to Rack once the required Rack version has it.

On incremental roll-out, each layer already degrades on its own:

*   If the server doesn't support QUERY (Puma by default, CloudFront currently), the request is rejected before it reaches Rack (Puma responds 501). Apps that draw `query` routes still boot and run normally; those routes are just unreachable until the server allows the method.
*   During the transition, apps can draw `match "search" => "search#index", via: [:query, :post]` and have clients fall back to POST where some hop doesn't forward QUERY yet. This works with the patch as-is, since QUERY goes through the regular verb-matching machinery.

The CHANGELOG entry documents the Puma opt-in for this reason. I can expand the routing guide with a short note on server support (Puma config, nginx mainline, CloudFront gap) and link the Rack/Puma PRs, either in this PR or as a follow-up.

Two things I'd leave as deliberate follow-ups rather than v1 scope: the `Accept-Query` response header (RFC 10008 §3) for capability discovery, and content-aware cache keys (§2.7), which no mainstream HTTP cache implements yet.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![nvasilevski](https://avatars.githubusercontent.com/u/5512772?s=60&v=4)](/nvasilevski)

**[nvasilevski](/nvasilevski)** reviewed [Jul 16, 2026](#pullrequestreview-4716077246)

[View reviewed changes](/rails/rails/pull/57973/files)

Comment thread [actionpack/lib/action\_dispatch/routing/mapper.rb](/rails/rails/pull/57973/files#diff-c6b72cc328125ba09ef3602696cc6d6588da43be3d1a081973ccc73bc98af12e) Outdated

\# query 'bacon', to: 'food#bacon'

def query(\*path\_or\_actions, as: DEFAULT, to: nil, controller: nil, action: nil, on: nil, defaults: nil, constraints: nil, anchor: nil, format: nil, path: nil, internal: nil, \*\*mapping, &block)

if path\_or\_actions.grep(Hash).any? && (deprecated\_options = path\_or\_actions.extract\_options!)

as = assign\_deprecated\_option(deprecated\_options, :as, :query) if deprecated\_options.key?(:as)

### 

 ![@nvasilevski](https://avatars.githubusercontent.com/u/5512772?s=48&v=4)**[nvasilevski](/nvasilevski)** [Jul 16, 2026](#discussion_r3597505064)

Copy link

Copy Markdown

Contributor

There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

Do we have the luxury of not doing the deprecated options handling since this is a new method? Or does something enforce all methods to support this signature?

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

### 

 ![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=48&v=4)**[magnogouveia](/magnogouveia)** [Jul 17, 2026](#discussion_r3600033547)

Copy link

Copy Markdown

Contributor Author

There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

Good call, nothing enforces the signature; the shim is per-method copy-paste from [3b4255e](https://github.com/rails/rails/commit/3b4255e1800d0b53c96db5aeb88aaa66163f74d5), there purely for backward compatibility with pre-existing hash-based routes. Since `query` is new in 8.2 (the release where hash support is slated for removal), there are no legacy callers to protect. Dropped the shim and updated the branch. (`query "search" => "search#index"` still works via `**mapping`, and positional hashes fall through to `match`'s own deprecation until the 8.2 removal.)

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

[![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=40&u=59e097447f18bf40731f359853736be68eed0545&v=4)](/magnogouveia)

[magnogouveia](/magnogouveia) [force-pushed](/rails/rails/compare/9477c4467ea6e9f76868872c910bb29a00a9c9e8..dd98f8df7d5fb6d978d7c7bf069b9264db51d37f) the add-http-query-method branch from [`9477c44`](/rails/rails/commit/9477c4467ea6e9f76868872c910bb29a00a9c9e8) to [`dd98f8d`](/rails/rails/commit/dd98f8df7d5fb6d978d7c7bf069b9264db51d37f) [Compare](/rails/rails/compare/9477c4467ea6e9f76868872c910bb29a00a9c9e8..dd98f8df7d5fb6d978d7c7bf069b9264db51d37f) [July 17, 2026 02:36](#event-28100383448)

This was referenced Jul 20, 2026

[Replace GET/POST with new HTTP QUERY RFC10008 w3c/lws-protocol#179](/w3c/lws-protocol/pull/179)

Merged

[Define GET/POST fallback for Search / Type Index when QUERY is unavailable w3c/lws-protocol#205](/w3c/lws-protocol/issues/205)

Open

[![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=40&u=59e097447f18bf40731f359853736be68eed0545&v=4)](/magnogouveia)

[magnogouveia](/magnogouveia) [force-pushed](/rails/rails/compare/35123c7040c88b4f718ebad88acb3e6a231bb5ab..ab5690bc72c86770979d5287a73972961416ca7f) the add-http-query-method branch 3 times, most recently from [`35123c7`](/rails/rails/commit/35123c7040c88b4f718ebad88acb3e6a231bb5ab) to [`ab5690b`](/rails/rails/commit/ab5690bc72c86770979d5287a73972961416ca7f) [Compare](/rails/rails/compare/35123c7040c88b4f718ebad88acb3e6a231bb5ab..ab5690bc72c86770979d5287a73972961416ca7f) [July 23, 2026 15:43](#event-28391303913)

[![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=40&u=59e097447f18bf40731f359853736be68eed0545&v=4)](/magnogouveia)

[magnogouveia](/magnogouveia) [force-pushed](/rails/rails/compare/beb14e932267390a35e4ae610d7888e57466b28c..bd5a141f5402f7f2e8bbeab4fb218a143ff4a42e) the add-http-query-method branch 2 times, most recently from [`beb14e9`](/rails/rails/commit/beb14e932267390a35e4ae610d7888e57466b28c) to [`bd5a141`](/rails/rails/commit/bd5a141f5402f7f2e8bbeab4fb218a143ff4a42e) [Compare](/rails/rails/compare/beb14e932267390a35e4ae610d7888e57466b28c..bd5a141f5402f7f2e8bbeab4fb218a143ff4a42e) [August 5, 2026 16:45](#event-29022114338)

 [![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=40&v=4)](/magnogouveia)[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

``[Add support for the HTTP QUERY method](/rails/rails/pull/57973/commits/87d4dec543681470cf383dc350328d69980ee563 "Add support for the HTTP QUERY method RFC 10008 defines QUERY as a safe and idempotent HTTP method that conveys the query in the request content instead of the URL query string. It is registered in the IANA HTTP Method Registry (safe: yes, idempotent: yes) and is intended for queries too large or structured for a query string: complex filters, search APIs, GraphQL, and JSON-RPC style endpoints. This registers QUERY as a known HTTP method in ActionDispatch::Request and wires it through the framework: * Add the RFC10008 constant to ActionDispatch::Request::HTTP_METHODS, so QUERY requests no longer raise ActionController::UnknownHttpMethod. * Add ActionDispatch::Request#query?, mirroring the other verb predicates (Rack::Request::Helpers does not define one for QUERY). * Add a QUERY verb matcher to Journey (VerbMatchers::VERBS), so `via: :query` routes match without the Unknown fallback. * Add the `query` routing DSL method to ActionDispatch::Routing::Mapper::HttpHelpers: query \"search\", to: \"search#index\" match \"filter\", to: \"search#filter\", via: :query * Add the `query` request helper to integration tests: query \"/search\", params: { filters: { q: \"video\" } }, as: :json * Exempt QUERY requests from forgery protection, like GET and HEAD. HTML forms cannot issue QUERY requests, and cross-origin QUERY requests always require a CORS preflight (QUERY is not a CORS-safelisted method), so the forgery surface is strictly smaller than GET's. This exemption is kept in an isolated hunk so it is easy to change if the exemption is not wanted. Body parameter parsing needs no changes: parsing is keyed on Content-Type rather than on the request method, so JSON and form-encoded QUERY bodies already parse into params. There are no behavior changes for existing applications: QUERY requests previously raised ActionController::UnknownHttpMethod (405) before reaching any application code. Note that the application server must also accept the method. Puma currently allows only the eight standard methods by default; QUERY can be enabled with its `supported_http_methods` option. References: - RFC 10008: https://www.rfc-editor.org/rfc/rfc10008.html - IANA HTTP Method Registry: https://www.iana.org/assignments/http-methods/http-methods.xhtml - Rails core forum proposal: https://discuss.rubyonrails.org/t/proposal-support-for-the-http-query-method-rfc-10008/91255")`` …

  

  

`[87d4dec](/rails/rails/pull/57973/commits/87d4dec543681470cf383dc350328d69980ee563)`

RFC 10008 defines QUERY as a safe and idempotent HTTP method that
conveys the query in the request content instead of the URL query
string. It is registered in the IANA HTTP Method Registry (safe: yes,
idempotent: yes) and is intended for queries too large or structured
for a query string: complex filters, search APIs, GraphQL, and
JSON-RPC style endpoints.

This registers QUERY as a known HTTP method in ActionDispatch::Request
and wires it through the framework:

\* Add the RFC10008 constant to ActionDispatch::Request::HTTP\_METHODS,
  so QUERY requests no longer raise
  ActionController::UnknownHttpMethod.

\* Add ActionDispatch::Request#query?, mirroring the other verb
  predicates (Rack::Request::Helpers does not define one for QUERY).

\* Add a QUERY verb matcher to Journey (VerbMatchers::VERBS), so
  \`via: :query\` routes match without the Unknown fallback.

\* Add the \`query\` routing DSL method to
  ActionDispatch::Routing::Mapper::HttpHelpers:

      query "search", to: "search#index"
      match "filter", to: "search#filter", via: :query

\* Add the \`query\` request helper to integration tests:

      query "/search", params: { filters: { q: "video" } }, as: :json

\* Exempt QUERY requests from forgery protection, like GET and HEAD.
  HTML forms cannot issue QUERY requests, and cross-origin QUERY
  requests always require a CORS preflight (QUERY is not a
  CORS-safelisted method), so the forgery surface is strictly smaller
  than GET's. This exemption is kept in an isolated hunk so it is easy
  to change if the exemption is not wanted.

Body parameter parsing needs no changes: parsing is keyed on
Content-Type rather than on the request method, so JSON and
form-encoded QUERY bodies already parse into params.

There are no behavior changes for existing applications: QUERY
requests previously raised ActionController::UnknownHttpMethod (405)
before reaching any application code.

Note that the application server must also accept the method. Puma
currently allows only the eight standard methods by default; QUERY can
be enabled with its \`supported\_http\_methods\` option.

References:

- RFC 10008: [https://www.rfc-editor.org/rfc/rfc10008.html](https://www.rfc-editor.org/rfc/rfc10008.html)
- IANA HTTP Method Registry:
  [https://www.iana.org/assignments/http-methods/http-methods.xhtml](https://www.iana.org/assignments/http-methods/http-methods.xhtml)
- Rails core forum proposal:
  [https://discuss.rubyonrails.org/t/proposal-support-for-the-http-query-method-rfc-10008/91255](https://discuss.rubyonrails.org/t/proposal-support-for-the-http-query-method-rfc-10008/91255)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy)

[jeremy](/jeremy) [force-pushed](/rails/rails/compare/bd5a141f5402f7f2e8bbeab4fb218a143ff4a42e..87d4dec543681470cf383dc350328d69980ee563) the add-http-query-method branch from [`bd5a141`](/rails/rails/commit/bd5a141f5402f7f2e8bbeab4fb218a143ff4a42e) to [`87d4dec`](/rails/rails/commit/87d4dec543681470cf383dc350328d69980ee563) [Compare](/rails/rails/compare/bd5a141f5402f7f2e8bbeab4fb218a143ff4a42e..87d4dec543681470cf383dc350328d69980ee563) [August 13, 2026 18:03](#event-29416663584)

[jeremy](/jeremy) added 4 commits [August 13, 2026 11:04](#commits-pushed-0a607ef)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Count QUERY as a safe request method](/rails/rails/pull/57973/commits/0a607efbc8896408368b24eab137dd5a28e11283 "Count QUERY as a safe request method QUERY is safe and idempotent per RFC 10008 §2, so Request#safe_method? now includes it alongside RFC 9110 §9.2.1's GET, HEAD, OPTIONS, and TRACE.")` …

  

  

`[0a607ef](/rails/rails/pull/57973/commits/0a607efbc8896408368b24eab137dd5a28e11283)`

QUERY is safe and idempotent per RFC 10008 §2, so Request#safe\_method?
now includes it alongside RFC 9110 §9.2.1's GET, HEAD, OPTIONS, and
TRACE.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Complete QUERY support in the test harnesses](/rails/rails/pull/57973/commits/db15fb3bfd6b1172f99b289ac0a6f5ed4596b922 "Complete QUERY support in the test harnesses * Add \"query\" to the integration Runner delegation list so top-level query calls reset the HTML document and copy session variables, and so follow_redirect! can re-issue QUERY after a 307/308 (it dispatches via public_send on the request method). Cover 307-preserves / 303-switches-to-GET redirect behavior. * Add the query helper to ActionController::TestCase, mirroring the integration helper. TestRequest#assign_parameters already routes non-GET methods through the body-encoding branch, so params land in request_parameters with no query string. * Document that both helpers default the Content-Type to application/x-www-form-urlencoded, as RFC 10008 requires QUERY requests to declare one; pass as: :json for a JSON body. * Cover params-to-body encoding (urlencoded and as: :json) end to end.")` …

  

  

`[db15fb3](/rails/rails/pull/57973/commits/db15fb3bfd6b1172f99b289ac0a6f5ed4596b922)`

\* Add "query" to the integration Runner delegation list so top-level
  query calls reset the HTML document and copy session variables, and
  so follow\_redirect! can re-issue QUERY after a 307/308 (it dispatches
  via public\_send on the request method). Cover 307-preserves /
  303-switches-to-GET redirect behavior.
\* Add the query helper to ActionController::TestCase, mirroring the
  integration helper. TestRequest#assign\_parameters already routes
  non-GET methods through the body-encoding branch, so params land in
  request\_parameters with no query string.
\* Document that both helpers default the Content-Type to
  application/x-www-form-urlencoded, as RFC 10008 requires QUERY
  requests to declare one; pass as: :json for a JSON body.
\* Cover params-to-body encoding (urlencoded and as: :json) end to end.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Round out QUERY routing coverage](/rails/rails/pull/57973/commits/496e3d2733815f3b4e3f4f5a88037d5701cf7eab "Round out QUERY routing coverage * Mapper tests for the query helper (verb, defaults, format). * query works on resource collections/members through the existing scope machinery: query :search, on: :collection. * Pin that Journey's HEAD->GET fallback does not extend to QUERY: a via: :get route never matches a QUERY request. * Add RFC10008 to the TestHttpMethods matrix.")` …

  

  

`[496e3d2](/rails/rails/pull/57973/commits/496e3d2733815f3b4e3f4f5a88037d5701cf7eab)`

\* Mapper tests for the query helper (verb, defaults, format).
\* query works on resource collections/members through the existing
  scope machinery: query :search, on: :collection.
\* Pin that Journey's HEAD->GET fallback does not extend to QUERY: a
  via: :get route never matches a QUERY request.
\* Add RFC10008 to the TestHttpMethods matrix.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Apply GET-like safe-method semantics to QUERY](/rails/rails/pull/57973/commits/b37769ad0ececa342ed7735e08c0cc7e92805de2 "Apply GET-like safe-method semantics to QUERY * Cross-origin JavaScript response protection covers QUERY exactly as GET: mark_for_same_origin_verification! includes query?, so a non-XHR cross-origin QUERY returning JavaScript raises InvalidCrossOriginRequest. * SSL middleware: document that QUERY intentionally receives a 307 (not 301) when redirecting to HTTPS — 301 permits clients to rewrite the method to GET, which would drop the QUERY body (RFC 10008 redirect semantics). * Conditional requests: no code change needed — fresh_when/stale? are verb-agnostic. Pin that QUERY with a matching If-None-Match gets 304 Not Modified and a fresh QUERY gets 200 + ETag. Deliberate non-changes: ActionDispatch::Static keeps serving files for GET/HEAD only, and implicit-render behavior is untouched — QUERY is a programmatic method, not a browser navigation. Rack::ConditionalGet handles QUERY upstream on rack main (rack/rack#2474, unreleased); controller-level freshness covers it in the meantime.")` …

  

  

`[b37769a](/rails/rails/pull/57973/commits/b37769ad0ececa342ed7735e08c0cc7e92805de2)`

\* Cross-origin JavaScript response protection covers QUERY exactly as
  GET: mark\_for\_same\_origin\_verification! includes query?, so a non-XHR
  cross-origin QUERY returning JavaScript raises
  InvalidCrossOriginRequest.
\* SSL middleware: document that QUERY intentionally receives a 307 (not
  301) when redirecting to HTTPS — 301 permits clients to rewrite the
  method to GET, which would drop the QUERY body (RFC 10008 redirect
  semantics).
\* Conditional requests: no code change needed — fresh\_when/stale? are
  verb-agnostic. Pin that QUERY with a matching If-None-Match gets
  304 Not Modified and a fresh QUERY gets 200 + ETag.

Deliberate non-changes: ActionDispatch::Static keeps serving files for
GET/HEAD only, and implicit-render behavior is untouched — QUERY is a
programmatic method, not a browser navigation. Rack::ConditionalGet
handles QUERY upstream on rack main ([rack/rack#2474](https://github.com/rack/rack/pull/2474), unreleased);
controller-level freshness covers it in the meantime.

[![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord) [actionview](/rails/rails/issues?q=state%3Aopen%20label%3Aactionview) labels [Aug 14, 2026](#event-29440337099)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy) [jeremy](/jeremy) mentioned this pull request [Aug 14, 2026](#ref-pullrequest-5148549372)

[Exclude QUERY from `_method` form-parameter overrides rack/rack#2502](/rack/rack/pull/2502)

Open

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=80&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy)

### 

**[jeremy](/jeremy)** commented [Aug 14, 2026](#issuecomment-5290043765)

Copy link

Copy Markdown

Member

Nice work! I've rebased onto current main and pushed the remainder of QUERY support:

*   `safe_method?` coverage
*   query helpers for both test harnesses (with 307/308 follow\_redirect! support)
*   collection-route coverage
*   GET-parity for conditional requests and same-origin JS protection
*   noted that `via: :all` now includes QUERY
*   Routing guide shows query :search, on: :collection inside resources, the form apps will use
*   Security guide has QUERY placed alongside GET in the W3C GET-vs-POST checklist section

One behavior guard: the CSRF exemption applies only to requests that _natively_ arrived as QUERY, not via method override. Rack method-override removal: [rack/rack#2502](https://github.com/rack/rack/pull/2502)

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy) [jeremy](/jeremy) added this to the [8.2.0](/rails/rails/milestone/97) milestone [Aug 14, 2026](#event-29441809090)

[jeremy](/jeremy) added 5 commits [August 13, 2026 23:37](#commits-pushed-c0556c1)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Restrict QUERY's CSRF exemption to native QUERY requests](/rails/rails/pull/57973/commits/c0556c12ed6dba3d0fd30c59b8e6dd1b9c199a57 "Restrict QUERY's CSRF exemption to native QUERY requests Rack merged QUERY into Rack::MethodOverride's override whitelist (rack/rack#2474, unreleased). Once a rack release ships it, an ordinary cross-origin form POST carrying _method=query would be dispatched as QUERY by the default middleware stack — and, without this change, inherit QUERY's CSRF exemption. That would silently void the structural rationale for the exemption: HTML forms cannot emit QUERY, and cross-origin QUERY is always preflighted. Neither is true of a form POST. Key the exemption on the method the request actually arrived with: request.method reports the pre-override method, so native QUERY remains exempt while a tunneled POST is verified like any other POST. The cross-origin JavaScript response protection uses the same predicate. This defends the invariant ahead of rack's release rather than reacting after it ships.")` …

  

  

`[c0556c1](/rails/rails/pull/57973/commits/c0556c12ed6dba3d0fd30c59b8e6dd1b9c199a57)`

Rack merged QUERY into Rack::MethodOverride's override whitelist
([rack/rack#2474](https://github.com/rack/rack/pull/2474), unreleased). Once a rack release ships it, an ordinary
cross-origin form POST carrying \_method=query would be dispatched as
QUERY by the default middleware stack — and, without this change,
inherit QUERY's CSRF exemption. That would silently void the structural
rationale for the exemption: HTML forms cannot emit QUERY, and
cross-origin QUERY is always preflighted. Neither is true of a form
POST.

Key the exemption on the method the request actually arrived with:
request.method reports the pre-override method, so native QUERY remains
exempt while a tunneled POST is verified like any other POST. The
cross-origin JavaScript response protection uses the same predicate.

This defends the invariant ahead of rack's release rather than reacting
after it ships.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Pin QUERY's routing reach and pre-override method semantics](/rails/rails/pull/57973/commits/166af56c0ae4024d7d9a617d66dfaedbde127bb4 "Pin QUERY's routing reach and pre-override method semantics * Routes drawn via: :all (and custom constraints that don't check the request method) now receive QUERY requests, where previously such requests 405'd before routing ran. Note this in the CHANGELOG entry and pin it with a test — it's the one observable behavior change for existing applications. * Cover request.method/method_symbol reporting the pre-override method for a POST masquerading as QUERY, matching the existing masquerading tests and underpinning the native-QUERY CSRF exemption. * Guides: show query on resource collections in the routing guide, and place QUERY alongside GET in the security guide's GET-vs-POST checklist.")` …

  

  

`[166af56](/rails/rails/pull/57973/commits/166af56c0ae4024d7d9a617d66dfaedbde127bb4)`

\* Routes drawn via: :all (and custom constraints that don't check the
  request method) now receive QUERY requests, where previously such
  requests 405'd before routing ran. Note this in the CHANGELOG entry
  and pin it with a test — it's the one observable behavior change for
  existing applications.
\* Cover request.method/method\_symbol reporting the pre-override method
  for a POST masquerading as QUERY, matching the existing masquerading
  tests and underpinning the native-QUERY CSRF exemption.
\* Guides: show query on resource collections in the routing guide, and
  place QUERY alongside GET in the security guide's GET-vs-POST
  checklist.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[DatabaseSelector treats QUERY requests as reads](/rails/rails/pull/57973/commits/a40be5369b0b9ed768fc2b5c77096dcde732681c "DatabaseSelector treats QUERY requests as reads QUERY is safe and idempotent per RFC 10008, so the database selector middleware routes it to the replica like GET and HEAD. A QUERY arriving within the configured write window still reads from the primary, same as any other read.")` …

  

  

`[a40be53](/rails/rails/pull/57973/commits/a40be5369b0b9ed768fc2b5c77096dcde732681c)`

QUERY is safe and idempotent per RFC 10008, so the database selector
middleware routes it to the replica like GET and HEAD. A QUERY arriving
within the configured write window still reads from the primary, same
as any other read.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[current_page? matches QUERY requests with method: :query](/rails/rails/pull/57973/commits/9cb6c7cfe7370c3ff626e60ec3d0d362b6eb7e03 "current_page? matches QUERY requests with method: :query No code change needed — method: :query matches via request.method_symbol now that QUERY is a recognized method. The default method: :get deliberately does not match QUERY. Form helper QUERY generation (button_to/form_with method: :query via _method tunneling) is deliberately not included: a POST tunnel offers none of QUERY's intermediary-visible caching or retry semantics, and it would make QUERY endpoints reachable through an ordinary cross-origin form POST, undermining the structural CSRF protections that justify QUERY's forgery-protection exemption.")` …

  

  

`[9cb6c7c](/rails/rails/pull/57973/commits/9cb6c7cfe7370c3ff626e60ec3d0d362b6eb7e03)`

No code change needed — method: :query matches via
request.method\_symbol now that QUERY is a recognized method. The
default method: :get deliberately does not match QUERY.

Form helper QUERY generation (button\_to/form\_with method: :query via
\_method tunneling) is deliberately not included: a POST tunnel offers
none of QUERY's intermediary-visible caching or retry semantics, and it
would make QUERY endpoints reachable through an ordinary cross-origin
form POST, undermining the structural CSRF protections that justify
QUERY's forgery-protection exemption.

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)

`[Document HTTP QUERY across the guides](/rails/rails/pull/57973/commits/636ed8e2b3fe529b40a79d35dfdf06b851dcf90a "Document HTTP QUERY across the guides * testing: query request helper with a body-sending example, and query in the xhr: true helper list * action_controller_overview: body params framing, request predicate table (query?, safe_method?/unsafe_method?), and a 'Handling HTTP QUERY Requests' section covering routing, params, CSRF, and conditional-request behavior * caching_with_rails: conditional requests apply to QUERY via fresh_when/stale? (Rack::ConditionalGet remains GET/HEAD-only in released rack) * action_controller_advanced_topics: CSRF safe-method exemption * routing: query in the member/collection verb list")` …

  

  

`[636ed8e](/rails/rails/pull/57973/commits/636ed8e2b3fe529b40a79d35dfdf06b851dcf90a)`

\* testing: query request helper with a body-sending example, and query
  in the xhr: true helper list
\* action\_controller\_overview: body params framing, request predicate
  table (query?, safe\_method?/unsafe\_method?), and a 'Handling HTTP
  QUERY Requests' section covering routing, params, CSRF, and
  conditional-request behavior
\* caching\_with\_rails: conditional requests apply to QUERY via
  fresh\_when/stale? (Rack::ConditionalGet remains GET/HEAD-only in
  released rack)
\* action\_controller\_advanced\_topics: CSRF safe-method exemption
\* routing: query in the member/collection verb list

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy)

[jeremy](/jeremy) [force-pushed](/rails/rails/compare/4c035003260e1e94bed7cacb0483b7a718575e9d..636ed8e2b3fe529b40a79d35dfdf06b851dcf90a) the add-http-query-method branch from [`4c03500`](/rails/rails/commit/4c035003260e1e94bed7cacb0483b7a718575e9d) to [`636ed8e`](/rails/rails/commit/636ed8e2b3fe529b40a79d35dfdf06b851dcf90a) [Compare](/rails/rails/compare/4c035003260e1e94bed7cacb0483b7a718575e9d..636ed8e2b3fe529b40a79d35dfdf06b851dcf90a) [August 14, 2026 06:37](#event-29443004057)

[![jeremy](https://avatars.githubusercontent.com/u/199?s=60&v=4)](/jeremy)

**[jeremy](/jeremy)** approved these changes [Aug 14, 2026](#pullrequestreview-4934622114)

[View reviewed changes](/rails/rails/pull/57973/files/636ed8e2b3fe529b40a79d35dfdf06b851dcf90a)

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy)

[jeremy](/jeremy) enabled auto-merge (squash) [August 14, 2026 06:41](#event-29443138280)

Hide details View details

[![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&u=7131f4a48ae5754664b31b0894a7d9d3c9ffc07b&v=4)](/jeremy)

[jeremy](/jeremy) merged commit [`e5d90d2`](/rails/rails/commit/e5d90d252272e45104c93c9134626b080f633ae5) into rails:main [Aug 14, 2026](https://github.com/rails/rails/pull/57973#event-29443258369)

5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@koic](https://avatars.githubusercontent.com/u/13203?s=40&v=4)](/koic) [koic](/koic) mentioned this pull request [Aug 14, 2026](#ref-pullrequest-5153330397)

[Support the HTTP QUERY method in route and test cops rubocop/rubocop-rails#1653](/rubocop/rubocop-rails/pull/1653)

Open

9 tasks

This was referenced Aug 14, 2026

[feat(analyzer): detect HTTP QUERY routes in Rails owasp-noir/noir#2549](/owasp-noir/noir/issues/2549)

Closed

[Support QUERY Method in Endpoints (RFC-10008) owasp-noir/noir#2232](/owasp-noir/noir/issues/2232)

Closed

[feat(analyzer): detect HTTP QUERY routes in Rails owasp-noir/noir#2576](/owasp-noir/noir/pull/2576)

Merged 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F57973)

 ### Reviewers

 [![@jeremy](https://avatars.githubusercontent.com/u/199?s=40&v=4)](/jeremy)[jeremy](/jeremy) [](/rails/rails/pull/57973/files/636ed8e2b3fe529b40a79d35dfdf06b851dcf90a)jeremy approved these changes

+1 more reviewer

 [![@nvasilevski](https://avatars.githubusercontent.com/u/5512772?s=40&v=4)](/nvasilevski)[nvasilevski](/nvasilevski) [](/rails/rails/pull/57973/files/9477c4467ea6e9f76868872c910bb29a00a9c9e8)nvasilevski left review comments

Reviewers whose approvals may not affect merge requirements

### Assignees

No one assigned

### Labels

[actionpack](/rails/rails/issues?q=state%3Aopen%20label%3Aactionpack) [actionview](/rails/rails/issues?q=state%3Aopen%20label%3Aactionview) [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord) [docs](/rails/rails/issues?q=state%3Aopen%20label%3Adocs)

### Projects

None yet

### Milestone

[**8.2.0**](/rails/rails/milestone/97 "8.2.0")

### Development

Successfully merging this pull request may close these issues.

### Uh oh!

There was an error while loading. Please reload this page.

### 4 participants

 [![@magnogouveia](https://avatars.githubusercontent.com/u/320074?s=52&v=4)](/magnogouveia)[![@seanpdoyle](https://avatars.githubusercontent.com/u/2575027?s=52&v=4) ](/seanpdoyle)[![@jeremy](https://avatars.githubusercontent.com/u/199?s=52&v=4) ](/jeremy)[![@nvasilevski](https://avatars.githubusercontent.com/u/5512772?s=52&v=4)](/nvasilevski)   

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
