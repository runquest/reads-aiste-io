---
layout: "story"
title: "The schema readers answer for many tables at once"
date: "2026-08-16"
permalink: "/2026/08/16/stories/the-schema-readers-answer-for-many-tables-at-once-781747/"
slug: "the-schema-readers-answer-for-many-tables-at-once-781747"
source: "uloza+hey@proton.me"
unsubscribe_url: "https://world.hey.com/this.week.in.rails/subscribers/o3V6Bj2AHCabrBDnK1ofFwvi/unsubscribe"
original_url: "https://github.com/rails/rails/pull/58421"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
indexes / primary_keys / foreign_keys / check_constraints / exclusion_constraints / unique_constraints now accept a list of tables and answer for all of them at once

---

Let the schema readers answer for many tables at once by ngan · Pull Request #58421 · rails/rails · GitHub                                             

[Skip to content](#start-of-content)             

## Navigation Menu

[](/)

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58421)

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

[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58421)

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

# Let the schema readers answer for many tables at once - #58421

#58421

Merged

[byroot](/byroot) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[ngan:np-faster-schema-dump](/ngan/rails/tree/np-faster-schema-dump)ngan/rails:np-faster-schema-dumpCopy head branch name to clipboard

Aug 14, 2026

[Conversation](/rails/rails/pull/58421)[Commits1 (1)](/rails/rails/pull/58421/commits)[Checks](/rails/rails/pull/58421/checks)[Files changed](/rails/rails/pull/58421/files)

Merged

## 

[Let the schema readers answer for many tables at once](#top)#58421

[byroot](/byroot) merged 1 commit into

[rails:main](/rails/rails/tree/main)rails/rails:mainfrom

[ngan:np-faster-schema-dump](/ngan/rails/tree/np-faster-schema-dump)ngan/rails:np-faster-schema-dumpCopy head branch name to clipboard

## Conversation

 [![@ngan](https://avatars.githubusercontent.com/u/16579?s=80&v=4)](/ngan)

### 

 ![@ngan](https://avatars.githubusercontent.com/u/16579?s=48&v=4)**[ngan](/ngan)** commented [Aug 9, 2026](#issue-5100119876) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Contributor

### Summary

Schema dumping asks the database about each table separately, so the number of round trips grows with the size of the schema. Per table, the dumper issues a separate statement for the primary key, the indexes, the foreign keys and the check constraints — plus, on MySQL, an extra `SHOW TABLE STATUS` purely to read the table's collation. PostgreSQL also queries exclusion and unique constraints _twice_ per table, once to filter index names and again to dump them.

Most databases can answer any of those for many tables at once from their catalog, so this lets the readers do that.

### Motivation

At Gusto our primary development database has around 2,300 tables, and `bin/rails db:migrate` spends more time dumping the schema than running the migrations. We're also a multi-database app, so one `db:migrate` writes about a dozen schema files and pays the per-table cost on each.

### The change

`indexes`, `primary_keys`, `foreign_keys`, `check_constraints`, `exclusion_constraints` and `unique_constraints` now accept a list of tables as well as a single one:

connection.indexes(:users)            \# => \[IndexDefinition, ...\]
connection.indexes(\[:users, :posts\])  \# => { "users" => \[...\], "posts" => \[...\] }

The caller says which tables it wants; there is no "everything" form.

Each reader is a thin wrapper over one array-based implementation, so a single table is read through the same path and unwrapped:

def check\_constraints(table\_name)
  result \= fetch\_check\_constraints(Array(table\_name).map(&:to\_s))
  table\_name.is\_a?(Array) ? result : result\[table\_name.to\_s\]
end

That leaves one implementation per reader rather than two.

One read filters by one schema, so tables naming different schemas are read a schema at a time — a list of unqualified names is a single query, and `["a.posts", "b.posts"]` is two. SQLite has no catalog to read many tables from, so it loops internally. Every adapter implements the whole interface, so the dumper needs no capability check or hook.

MySQL reads indexes from `information_schema.statistics`, asking only for the columns the server actually has:

optional\_columns << ", expression AS 'Expression'" if supports\_expression\_index?
if supports\_disabling\_indexes?
  optional\_columns << (mariadb? ? ", IF(ignored = 'NO', 'YES', 'NO') AS 'Enabled'" : ", is\_visible AS 'Enabled'")
end

So MariaDB — which has `IGNORED` but neither `EXPRESSION` nor `IS_VISIBLE` — and MySQL before 8.0.13 read in bulk too, instead of falling back to `SHOW KEYS` per table. Verified against MariaDB 11.8: the dump is byte-identical and index reads drop from one statement per table to one, including an `ALTER INDEX ... IGNORED` index correctly reported as disabled. This also drops a `rescue StatementInvalid` that only existed because `SHOW KEYS FROM` raises for a missing table, where `information_schema` returns no rows.

Credit for the conditional-column approach goes to [@hmcguire-shopify](https://github.com/hmcguire-shopify), who is working on batching column reads along similar lines.

Every table is a key even when it has none of that metadata, so the value is always a collection and callers don't have to handle a missing entry. An empty list reads nothing and issues no query to find that out — which matters, because it is a real case: dumping a database with no tables.

Schema-qualified names work in the list form too, keyed by the name you passed:

connection.indexes(\["s1.posts", "s2.posts"\])
\# => { "s1.posts" => \[...\], "s2.posts" => \[...\] }

The dumper asks for the tables it is about to dump, so ignored tables — `schema_migrations`, `ar_internal_metadata`, anything in `SchemaDumper.ignore_tables` — are never read.

Passing every table in one `IN (...)` is cheap: on a ~2,300-table schema the list adds 69 KB to the query and 11 ms (58 ms → 69 ms) against a 64 MB `max_allowed_packet`; on PostgreSQL, 23 KB and 6 ms. It stays flat well past any real schema — 200,000 names in a 5.9 MB query still runs in 0.22 s.

### Numbers

Statement counts are deterministic. Wall times are best-of-5 on a busy dev laptop, so treat them as indicative of the ratio rather than the absolute.

statements

wall

**MySQL**, ~2,300 tables

16,203 → **4,695** (−71%)

16.1s → **5.0s**

**PostgreSQL**, ~1,500 tables

18,272 → **6,122** (−66%)

3.7s → **1.4s**

The MySQL row is one of Gusto's real development databases; the PostgreSQL row is a generated schema exercising expression, partial and GIN indexes, composite primary keys, and check/unique/exclusion constraints. Both were measured against this branch's merge base on the same databases.

### What is left

After this, the six readers account for 8 statements of a ~2,300-table MySQL dump. The remainder is `SHOW FULL FIELDS` and `SHOW CREATE TABLE`, one of each per table — column definitions and table options, both out of scope here.

### The output does not change

Verified by dumping before and after and comparing bytes — identical on both adapters.

### Also fixes a latent MySQL bug

Collations were read with `SHOW TABLE STATUS LIKE <name>`, taking the first row. `_` and `%` are wildcards in a `LIKE` pattern, so a table whose name contains one could match a _different_ table and inherit its collation. With tables `ab_c` (`utf8mb4_0900_ai_ci`) and `ab c` (`utf8mb4_general_ci`), the old lookup for `ab_c` returns `utf8mb4_general_ci`. Reading from `information_schema.tables` removes the pattern match entirely.

### Two behaviour changes worth calling out

A blank table name no longer raises `ArgumentError`. On `main` only MySQL validated, and only in `foreign_keys` and `primary_keys` — `indexes(nil)` already returned nil there, and PostgreSQL and SQLite returned nil from all of them. Every reader on every adapter now answers alike. Removed per [@byroot](https://github.com/byroot)'s note that the validation was overly defensive: keeping it alongside a permitted empty list required `unless table_name.is_a?(Array) || table_name.present?`, and tightening that to plain `present?` (per [@skipkayhil](https://github.com/skipkayhil)) would reject `[]`, which breaks dumping a database with no tables.

On PostgreSQL, `primary_keys` for a table that doesn't exist now returns `[]` where it previously raised `ActiveRecord::StatementInvalid`. The single-table read used to resolve the name with `::regclass`, which raises for a missing relation; the shared implementation filters on `pg_class` instead. `indexes` and `foreign_keys` already returned `[]` for a missing table, so `primary_keys` is now consistent with them. No test depended on the raise, and `[]` seems the friendlier contract, but it is a change.

### Tests

`ActiveRecord::ConnectionAdapters::SchemaStatementsTest` covers the contract on every adapter:

*   a list reads exactly the tables it is given and no others
*   what it returns for a table equals what asking for that table alone returns
*   reading a list doesn't scale with the number of tables (skipped where an adapter reads table by table anyway)
*   an empty list reads nothing and queries nothing
*   a qualified name in a list is keyed by the name it was given

I mutation-tested them. Forcing every table into one schema group, keeping the qualifier in the row lookup, omitting missing tables instead of answering empty, dropping all but one schema group, letting an empty list reach the database, dropping MySQL's index prefix lengths, and dropping composite-primary-key ordering on either adapter each produce a failure.

Two of those escaped at first and the tests are stronger for it. The primary-key ordering one escaped because the comparison sorted column arrays, so order is now compared as ordered. The qualifier one escaped because the test picked the alphabetically first table, which has a primary key and nothing else — it now picks, per reader, a table that actually has that metadata, and asserts the result is non-empty.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions [![@github-actions](https://avatars.githubusercontent.com/in/15368?s=40&v=4)](/apps/github-actions) [github-actions](/apps/github-actions) Bot added the [activerecord](/rails/rails/issues?q=state%3Aopen%20label%3Aactiverecord) label [Aug 9, 2026](#event-29170777664)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/1b5cf22bc175e27e0ab4cccad57e47ce20495af4..d65f9ae0f6dc5611dce1970e0207187d2cd058cb) the np-faster-schema-dump branch 4 times, most recently from [`1b5cf22`](/rails/rails/commit/1b5cf22bc175e27e0ab4cccad57e47ce20495af4) to [`d65f9ae`](/rails/rails/commit/d65f9ae0f6dc5611dce1970e0207187d2cd058cb) [Compare](/rails/rails/compare/1b5cf22bc175e27e0ab4cccad57e47ce20495af4..d65f9ae0f6dc5611dce1970e0207187d2cd058cb) [August 9, 2026 03:26](#event-29173529410)

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=80&v=4)](/byroot)

### 

**[byroot](/byroot)** commented [Aug 9, 2026](#issuecomment-5232327783)

Copy link

Copy Markdown

Member

That's something we've wanted for a while (can't exactly remember who I talked with about this, but at least two other committers).

So generally 👍. I don't quite have the energy to do a deep review right now, but from a high level:

I'm not a big fan of the `*_per_table` interface, even though it's private. I think I'd prefer if `indexes` etc could be called with a list of tables instead. I think a list is better than returning everything, because you may want to filter some tables anyway.

Also, when it's not possible to compute the info for all tables in one shot (e.g. the older MariaDB case), I think you might as well list the tables and directly do the N+1 queries.

Then, one the SchemaDumper side, I get what you went for, as it keep the amount of change to a minimum, but it result in a bit of a contrived code. Not saying it has to change now, but I think if `SchemaDumper` has to be written from scratch given the ability to get all indexes etc in one query, it wouldn't look the same.  
As in it's kinda weird to "prefetch" a cache, just query what you need then generate the output. But perhaps best kept for a followup.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/d65f9ae0f6dc5611dce1970e0207187d2cd058cb..bd4fc99cd2bc5e66e05153215f9a2f885dd7b9e7) the np-faster-schema-dump branch from [`d65f9ae`](/rails/rails/commit/d65f9ae0f6dc5611dce1970e0207187d2cd058cb) to [`bd4fc99`](/rails/rails/commit/bd4fc99cd2bc5e66e05153215f9a2f885dd7b9e7) [Compare](/rails/rails/compare/d65f9ae0f6dc5611dce1970e0207187d2cd058cb..bd4fc99cd2bc5e66e05153215f9a2f885dd7b9e7) [August 9, 2026 16:24](#event-29187097763)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan) [ngan](/ngan) changed the title Load schema dump metadata for the whole schema up front Let the schema readers answer for every table at once [Aug 9, 2026](#event-29187107442)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=80&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

### 

**[ngan](/ngan)** commented [Aug 9, 2026](#issuecomment-5232547306) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Contributor Author

[@byroot](https://github.com/byroot) we had the same idea. I _just_ pushed up the change to move the bulk work to the connection. The difference between what I implemented and what you suggested is we'd just not pass in any argument to get _all_ the tables instead of changing the API to allow multiple tables. Although I can add that API as well so that we'd have 3:

1.  Single table via 1 string argument
2.  Multiple table via array or variadic arguments.
3.  All tables via no arguments.

Wdyt?

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/bd4fc99cd2bc5e66e05153215f9a2f885dd7b9e7..9fc67c33951ea6191c36894ebaef69b2e25e192a) the np-faster-schema-dump branch from [`bd4fc99`](/rails/rails/commit/bd4fc99cd2bc5e66e05153215f9a2f885dd7b9e7) to [`9fc67c3`](/rails/rails/commit/9fc67c33951ea6191c36894ebaef69b2e25e192a) [Compare](/rails/rails/compare/bd4fc99cd2bc5e66e05153215f9a2f885dd7b9e7..9fc67c33951ea6191c36894ebaef69b2e25e192a) [August 9, 2026 16:36](#event-29187343411)

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=80&v=4)](/byroot)

### 

**[byroot](/byroot)** commented [Aug 9, 2026](#issuecomment-5232585310)

Copy link

Copy Markdown

Member

> Wdyt?

Sounds good.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=80&v=4)](/byroot)

### 

**[byroot](/byroot)** commented [Aug 9, 2026](#issuecomment-5232589676)

Copy link

Copy Markdown

Member

I think array argument is important because:

*   In some case we may have to fallback to N+1.
*   We want to filter some tables, might as well not fetch them in the first place (especially because 1)

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/9fc67c33951ea6191c36894ebaef69b2e25e192a..08354f904de0f14b3d8bd328d1edc0654bdfeb24) the np-faster-schema-dump branch from [`9fc67c3`](/rails/rails/commit/9fc67c33951ea6191c36894ebaef69b2e25e192a) to [`08354f9`](/rails/rails/commit/08354f904de0f14b3d8bd328d1edc0654bdfeb24) [Compare](/rails/rails/compare/9fc67c33951ea6191c36894ebaef69b2e25e192a..08354f904de0f14b3d8bd328d1edc0654bdfeb24) [August 9, 2026 17:09](#event-29187991428)

[![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=80&u=3972bfb97451f7f90e051df2e49fb7b8ee83e28d&v=4)](/skipkayhil)

### 

**[skipkayhil](/skipkayhil)** commented [Aug 9, 2026](#issuecomment-5232814641)

Copy link

Copy Markdown

Member

I was looking into something similar recently (but for schema cache dumping)

My branch is here: [Shopify#60](https://github.com/Shopify/rails/pull/60)

I've only skimmed this PR so far but it looks like we intersect a good bit but not completely 👍

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/08354f904de0f14b3d8bd328d1edc0654bdfeb24..6da04d7eecf030af6956cd75852218aeb0677c29) the np-faster-schema-dump branch from [`08354f9`](/rails/rails/commit/08354f904de0f14b3d8bd328d1edc0654bdfeb24) to [`6da04d7`](/rails/rails/commit/6da04d7eecf030af6956cd75852218aeb0677c29) [Compare](/rails/rails/compare/08354f904de0f14b3d8bd328d1edc0654bdfeb24..6da04d7eecf030af6956cd75852218aeb0677c29) [August 9, 2026 18:15](#event-29189244147)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan) [ngan](/ngan) changed the title Let the schema readers answer for every table at once Let the schema readers answer for many tables at once [Aug 9, 2026](#event-29189251066)

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=80&v=4)](/byroot)

### 

**[byroot](/byroot)** commented [Aug 9, 2026](#issuecomment-5233113582)

Copy link

Copy Markdown

Member

> I was looking into something similar recently

Ah yes you were one of the people I talked about that with.

> (but for schema cache dumping)

It's the same thing no? The dumper reads the schema.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/097db4c80addffa1a63e3da1539da3b7150d8f5b..633e83056a50e455e3b787264ce7f3dad9ea6d51) the np-faster-schema-dump branch 5 times, most recently from [`097db4c`](/rails/rails/commit/097db4c80addffa1a63e3da1539da3b7150d8f5b) to [`633e830`](/rails/rails/commit/633e83056a50e455e3b787264ce7f3dad9ea6d51) [Compare](/rails/rails/compare/097db4c80addffa1a63e3da1539da3b7150d8f5b..633e83056a50e455e3b787264ce7f3dad9ea6d51) [August 9, 2026 20:46](#event-29192182711)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) marked this pull request as draft [August 9, 2026 21:05](#event-29192547789)

[![byroot](https://avatars.githubusercontent.com/u/44640?s=60&v=4)](/byroot)

**[byroot](/byroot)** reviewed [Aug 10, 2026](#pullrequestreview-4898751427)

[View reviewed changes](/rails/rails/pull/58421/files)

Comment thread [activerecord/lib/active\_record/connection\_adapters/abstract/schema\_statements.rb](/rails/rails/pull/58421/files#diff-5a1c923abf3a794dbc133959167f794b2479ea8bcd0b1deda7766c22f05e8dfe) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

Comment thread [activerecord/lib/active\_record/connection\_adapters/abstract/schema\_statements.rb](/rails/rails/pull/58421/files#diff-5a1c923abf3a794dbc133959167f794b2479ea8bcd0b1deda7766c22f05e8dfe) Outdated Show resolved Hide resolved

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/f5dd504f8a3ab935c2ad5a4150d0cfce6b8c185d..0cfab38ee963cb50bbee7b59fe0f1392373f81b8) the np-faster-schema-dump branch 3 times, most recently from [`f5dd504`](/rails/rails/commit/f5dd504f8a3ab935c2ad5a4150d0cfce6b8c185d) to [`0cfab38`](/rails/rails/commit/0cfab38ee963cb50bbee7b59fe0f1392373f81b8) [Compare](/rails/rails/compare/f5dd504f8a3ab935c2ad5a4150d0cfce6b8c185d..0cfab38ee963cb50bbee7b59fe0f1392373f81b8) [August 12, 2026 15:02](#event-29347645913)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) requested a review from [byroot](/byroot) [August 12, 2026 15:18](#event-29348497234)

[![ngan](https://avatars.githubusercontent.com/u/16579?s=60&v=4)](/ngan)

**[ngan](/ngan)** commented [Aug 12, 2026](#pullrequestreview-4918160779)

[View reviewed changes](/rails/rails/pull/58421/files)

Comment thread [activerecord/lib/active\_record/connection\_adapters/abstract\_mysql\_adapter.rb](/rails/rails/pull/58421/files#diff-868f1dccfcbed26a288bf9f3fd8a39c863a4413ab0075e12b6805d9798f556d1) Outdated

AND rc.constraint\_schema = #{scope\[:schema\]}

AND rc.table\_name = #{scope\[:name\]}

SQL

raise ArgumentError unless table\_name.is\_a?(Array) || table\_name.present?

### 

 ![@ngan](https://avatars.githubusercontent.com/u/16579?s=48&v=4)**[ngan](/ngan)** [Aug 12, 2026](#discussion_r3767754188)

Copy link

Copy Markdown

Contributor Author

There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

[@byroot](https://github.com/byroot) I realized that this raise from the existing `raise ArgumentError unless table_name.present?` - do you still want it removed?

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

### 

 ![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=48&v=4)**[skipkayhil](/skipkayhil)** [Aug 14, 2026](#discussion_r3780722992)

Copy link

Copy Markdown

Member

There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

Maybe just keep `present?` so that non-empty Array is enforced too? I don't have a strong opinion though

(I see you mentioned this in the CHANGELOG too)

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

👍 1 ngan reacted with thumbs up emoji

All reactions

*   👍 1 reaction

[![ngan](https://avatars.githubusercontent.com/u/16579?s=60&v=4)](/ngan)

**[ngan](/ngan)** commented [Aug 12, 2026](#pullrequestreview-4918184592)

[View reviewed changes](/rails/rails/pull/58421/files)

Comment thread [activerecord/lib/active\_record/schema\_dumper.rb](/rails/rails/pull/58421/files#diff-22750093c2231cef8c58e7e94a0a9266267d33bd990c607475e55fe285fccb8a)

@check\_constraints = @connection.check\_constraints(tables) if @connection.supports\_check\_constraints?

@exclusion\_constraints = @connection.exclusion\_constraints(tables) if @connection.supports\_exclusion\_constraints?

@unique\_constraints = @connection.unique\_constraints(tables) if @connection.supports\_unique\_constraints?

end

### 

 ![@ngan](https://avatars.githubusercontent.com/u/16579?s=48&v=4)**[ngan](/ngan)** [Aug 12, 2026](#discussion_r3767774323) •

edited

Loading

### Uh oh!

There was an error while loading. Please reload this page.

Copy link

Copy Markdown

Contributor Author

There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

I don't particularly like this method, but it gives MySQL an override point to add collations ([https://github.com/rails/rails/pull/58421/changes#diff-73029a243fef2e80dc84505eb3612587fd35795aa011e6d53eedd17104b9746cR8](https://github.com/rails/rails/pull/58421/changes#diff-73029a243fef2e80dc84505eb3612587fd35795aa011e6d53eedd17104b9746cR8)). [@byroot](https://github.com/byroot) if you can think of a better way of doing this, let me know. I feel like this SchemaDumper class should be rewritten from the ground up to things more...OOP. There's also parallelization we can do, like dump databases in parallel.

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/0cfab38ee963cb50bbee7b59fe0f1392373f81b8..88ed2458a7e719fd788be98193091561560774db) the np-faster-schema-dump branch from [`0cfab38`](/rails/rails/commit/0cfab38ee963cb50bbee7b59fe0f1392373f81b8) to [`88ed245`](/rails/rails/commit/88ed2458a7e719fd788be98193091561560774db) [Compare](/rails/rails/compare/0cfab38ee963cb50bbee7b59fe0f1392373f81b8..88ed2458a7e719fd788be98193091561560774db) [August 12, 2026 16:30](#event-29352256583)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=80&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

### 

**[ngan](/ngan)** commented [Aug 12, 2026](#issuecomment-5269654636)

Copy link

Copy Markdown

Contributor Author

> I was looking into something similar recently (but for schema cache dumping)
> 
> My branch is here: [Shopify#60](https://github.com/Shopify/rails/pull/60)
> 
> I've only skimmed this PR so far but it looks like we intersect a good bit but not completely 👍

Thanks [@skipkayhil](https://github.com/skipkayhil), I was able to incorporate some of your implementation in my PR.

  

❤️ 1 skipkayhil reacted with heart emoji

All reactions

*   ❤️ 1 reaction

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) marked this pull request as ready for review [August 13, 2026 00:31](#event-29372850184)

[![byroot](https://avatars.githubusercontent.com/u/44640?s=60&v=4)](/byroot)

**[byroot](/byroot)** approved these changes [Aug 13, 2026](#pullrequestreview-4924260453)

[View reviewed changes](/rails/rails/pull/58421/files)

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

[byroot](/byroot) requested a review from [skipkayhil](/skipkayhil) [August 13, 2026 06:57](#event-29384426539)

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=80&v=4)](/byroot)

### 

**[byroot](/byroot)** commented [Aug 13, 2026](#issuecomment-5277098914)

Copy link

Copy Markdown

Member

LGTM at this point, as we both mentioned `SchemaDumper` could use a full rewrite / heavy refactor, but let's keep that PR properly scoped.

[@skipkayhil](https://github.com/skipkayhil) since you worked on this too, I'd appreciate your review if you have time.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=60&v=4)](/skipkayhil)

**[skipkayhil](/skipkayhil)** approved these changes [Aug 14, 2026](#pullrequestreview-4933458136)

[View reviewed changes](/rails/rails/pull/58421/files)

### 

 ![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=48&v=4)**[skipkayhil](/skipkayhil)** left a comment

Copy link

Copy Markdown

Member



There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

Looks good to me, I like the shape of the methods you ended up with. I'll follow up (hopefully soon) to start wiring schema cache stuff too

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

All reactions

Comment thread [activerecord/lib/active\_record/connection\_adapters/abstract\_mysql\_adapter.rb](/rails/rails/pull/58421/files#diff-868f1dccfcbed26a288bf9f3fd8a39c863a4413ab0075e12b6805d9798f556d1) Outdated

AND rc.constraint\_schema = #{scope\[:schema\]}

AND rc.table\_name = #{scope\[:name\]}

SQL

raise ArgumentError unless table\_name.is\_a?(Array) || table\_name.present?

### 

 ![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=48&v=4)**[skipkayhil](/skipkayhil)** [Aug 14, 2026](#discussion_r3780722992)

Copy link

Copy Markdown

Member

There was a problem hiding this comment.

### Choose a reason for hiding this comment

The reason will be displayed to describe this comment to others. [Learn more](https://docs.github.com/articles/managing-disruptive-comments/#hiding-a-comment).

 Choose a reason Spam Abuse Off Topic Outdated Duplicate Resolved Low Quality Hide comment

Maybe just keep `present?` so that non-empty Array is enforced too? I don't have a strong opinion though

(I see you mentioned this in the CHANGELOG too)

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 

👍 1 ngan reacted with thumbs up emoji

All reactions

*   👍 1 reaction

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

[ngan](/ngan) [force-pushed](/rails/rails/compare/84597c5a1c00889cb5828cd5df21d538e050c98b..515195cf9f44b1d015103d4b6d5ee4c0cdaf030e) the np-faster-schema-dump branch 3 times, most recently from [`84597c5`](/rails/rails/commit/84597c5a1c00889cb5828cd5df21d538e050c98b) to [`515195c`](/rails/rails/commit/515195cf9f44b1d015103d4b6d5ee4c0cdaf030e) [Compare](/rails/rails/compare/84597c5a1c00889cb5828cd5df21d538e050c98b..515195cf9f44b1d015103d4b6d5ee4c0cdaf030e) [August 14, 2026 03:39](#event-29437213717)

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=80&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)

### 

**[ngan](/ngan)** commented [Aug 14, 2026](#issuecomment-5289258724)

Copy link

Copy Markdown

Contributor Author

Alright, all set. Pretty happy where this landed. If I have time, I might put up a PR to refactor SchemaDumper if you guys are cool with that.

  

All reactions

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

 [![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&v=4)](/ngan)[![@claude](https://avatars.githubusercontent.com/u/81847?s=40&v=4) ](/claude)[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

``[Let the schema readers answer for many tables at once](/rails/rails/pull/58421/commits/431ba5cf46bdb9833c1f0f1dd7929a8103ffe49d "Let the schema readers answer for many tables at once Schema dumping asked the database about each table separately, so round trips grew with the size of the schema: primary keys, indexes, foreign keys and constraints each cost one statement per table, and MySQL spent another `SHOW TABLE STATUS` per table just to read a collation. On a few thousand tables that is tens of thousands of statements, most of which the database can answer for many tables at once from its catalog. The readers now accept a list of tables as well as a single one: connection.indexes(:users)           # => [IndexDefinition, ...] connection.indexes([:users, :posts]) # => { \"users\" => [...], \"posts\" => [...] } A single table is read through the same path and unwrapped, so each reader has one implementation rather than two. One read filters by one schema, so tables naming different schemas are read a schema at a time; SQLite, which has no catalog to read many tables from, loops internally, so every adapter implements the whole interface. MySQL reads indexes from information_schema.statistics, asking only for the columns the server has: EXPRESSION where functional indexes are supported, and either is_visible or MariaDB's IGNORED where indexes can be disabled. MariaDB and MySQL before 8.0.13 therefore read in bulk too, rather than falling back to `SHOW KEYS` per table. An empty list reads nothing, without querying. A blank table name no longer raises on MySQL, which was the only adapter that did so, for only two of its readers; every reader on every adapter now answers the same way. The dumper asks for the tables it is about to dump, so ignored tables are never read. This removes about 70% of the statements a dump issues on a large schema and leaves the output byte for byte identical. Reading collations from information_schema also fixes MySQL looking them up with a LIKE pattern, where a table name containing `_` or `%` could match a different table. Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>")`` …

  

  

`[431ba5c](/rails/rails/pull/58421/commits/431ba5cf46bdb9833c1f0f1dd7929a8103ffe49d)`

Schema dumping asked the database about each table separately, so round trips
grew with the size of the schema: primary keys, indexes, foreign keys and
constraints each cost one statement per table, and MySQL spent another
\`SHOW TABLE STATUS\` per table just to read a collation. On a few thousand
tables that is tens of thousands of statements, most of which the database can
answer for many tables at once from its catalog.

The readers now accept a list of tables as well as a single one:

    connection.indexes(:users)           # => \[IndexDefinition, ...\]
    connection.indexes(\[:users, :posts\]) # => { "users" => \[...\], "posts" => \[...\] }

A single table is read through the same path and unwrapped, so each reader has
one implementation rather than two. One read filters by one schema, so tables
naming different schemas are read a schema at a time; SQLite, which has no
catalog to read many tables from, loops internally, so every adapter implements
the whole interface.

MySQL reads indexes from information\_schema.statistics, asking only for the
columns the server has: EXPRESSION where functional indexes are supported, and
either is\_visible or MariaDB's IGNORED where indexes can be disabled. MariaDB
and MySQL before 8.0.13 therefore read in bulk too, rather than falling back to
\`SHOW KEYS\` per table.

An empty list reads nothing, without querying. A blank table name no longer
raises on MySQL, which was the only adapter that did so, for only two of its
readers; every reader on every adapter now answers the same way.

The dumper asks for the tables it is about to dump, so ignored tables are never
read. This removes about 70% of the statements a dump issues on a large schema
and leaves the output byte for byte identical.

Reading collations from information\_schema also fixes MySQL looking them up with
a LIKE pattern, where a table name containing \`\_\` or \`%\` could match a different
table.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

[byroot](/byroot) [force-pushed](/rails/rails/compare/515195cf9f44b1d015103d4b6d5ee4c0cdaf030e..431ba5cf46bdb9833c1f0f1dd7929a8103ffe49d) the np-faster-schema-dump branch from [`515195c`](/rails/rails/commit/515195cf9f44b1d015103d4b6d5ee4c0cdaf030e) to [`431ba5c`](/rails/rails/commit/431ba5cf46bdb9833c1f0f1dd7929a8103ffe49d) [Compare](/rails/rails/compare/515195cf9f44b1d015103d4b6d5ee4c0cdaf030e..431ba5cf46bdb9833c1f0f1dd7929a8103ffe49d) [August 14, 2026 07:39](#event-29445426598)

Hide details View details

[![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)

[byroot](/byroot) merged commit [`42274c8`](/rails/rails/commit/42274c880590c8f05ee553709701ef97dfaa0860) into rails:main [Aug 14, 2026](https://github.com/rails/rails/pull/58421#event-29445433896)

3 of 5 checks passed

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan) [ngan](/ngan) mentioned this pull request [Aug 15, 2026](#ref-pullrequest-5157648940)

[Read the schema cache's primary keys and indexes for many tables at once #58488](/rails/rails/pull/58488)

Merged

[ngan](/ngan) added a commit to ngan/rails that referenced this pull request [Aug 15, 2026](#ref-commit-706a564)

 [![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)[![@claude](https://avatars.githubusercontent.com/u/81847?s=40&u=577eaff0520b33aadc0f9fb6d11f5cdb2dd9486e&v=4)](/claude)

``[Read the schema cache's primary keys and indexes for many tables at once](/ngan/rails/commit/706a5645ffae5fe28795cf23d9304cc4c62f1096 "Read the schema cache's primary keys and indexes for many tables at once Dumping the schema cache asked the database about each table separately, so it cost one primary key read and one index read per table on top of reading that table's columns. The readers accept a list of tables since #58421, so `add_all` now asks once for every table it is about to cache and walks them only for their columns, which `#add` still reads a table at a time. On a MySQL schema with 204 tables that takes a cache dump from 615 statements to 209. The cache it writes is unchanged: a single table is read through the same query as a list of one, so the values and the order they arrive in do not depend on how many tables were asked for. Adapters with no catalog to read many tables from, such as SQLite, loop internally and issue the same number of statements as before. Columns are deliberately left alone. They dominate what is left, and batching them is being worked on separately. `add_all` reports a single primary key column as a string and a composite key as an array, matching what `SchemaStatements#primary_key` returns to `#add` today, rather than the array the list reader answers with. Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>")`` …

  

  

`[706a564](/ngan/rails/commit/706a5645ffae5fe28795cf23d9304cc4c62f1096)`

Dumping the schema cache asked the database about each table separately, so
it cost one primary key read and one index read per table on top of reading
that table's columns. The readers accept a list of tables since [rails#58421](https://github.com/rails/rails/pull/58421), so
\`add\_all\` now asks once for every table it is about to cache and walks them
only for their columns, which \`#add\` still reads a table at a time.

On a MySQL schema with 204 tables that takes a cache dump from 615
statements to 209. The cache it writes is unchanged: a single table is read
through the same query as a list of one, so the values and the order they
arrive in do not depend on how many tables were asked for.

Adapters with no catalog to read many tables from, such as SQLite, loop
internally and issue the same number of statements as before.

Columns are deliberately left alone. They dominate what is left, and
batching them is being worked on separately.

\`add\_all\` reports a single primary key column as a string and a composite
key as an array, matching what \`SchemaStatements#primary\_key\` returns to
\`#add\` today, rather than the array the list reader answers with.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>

[![@fxn](https://avatars.githubusercontent.com/u/3387?s=80&u=845b2260d17cc6b34bcaadab3398805c13922823&v=4)](/fxn)

### 

**[fxn](/fxn)** commented [Aug 15, 2026](#issuecomment-5301855079)

Copy link

Copy Markdown

Member

[@ngan](https://github.com/ngan) 🤘 from Cannes!

  

😄 1 ngan reacted with laugh emoji

All reactions

*   😄 1 reaction

Sorry, something went wrong.

### Uh oh!

There was an error while loading. Please reload this page.

[![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan) [ngan](/ngan) mentioned this pull request [Aug 16, 2026](#ref-pullrequest-5163234834)

[Read the columns of many tables in one query #58494](/rails/rails/pull/58494)

Open

[ngan](/ngan) added a commit to ngan/rails that referenced this pull request [Aug 16, 2026](#ref-commit-a0c20d1)

 [![@ngan](https://avatars.githubusercontent.com/u/16579?s=40&u=f3ddcc6fb182f554fbe59b89efbee5d19824d7bf&v=4)](/ngan)[![@claude](https://avatars.githubusercontent.com/u/81847?s=40&u=577eaff0520b33aadc0f9fb6d11f5cdb2dd9486e&v=4)](/claude)

``[Read the columns of many tables in one query](/ngan/rails/commit/a0c20d1fd8826aa6eb22a7102dffa02fe9a096a1 "Read the columns of many tables in one query `columns` was the last schema reader that still read one table at a time, so a schema dump paid a statement per table for it. It now takes a list of tables as well as a single one, like the readers changed in #58421: connection.columns(:users)            # => [Column, ...] connection.columns([:users, :posts])  # => { \"users\" => [...], \"posts\" => [...] } MySQL and MariaDB read from information_schema.columns, which reports the same fields `SHOW FULL FIELDS` does under the same names. PostgreSQL filters the pg_attribute query it already used by a list of tables instead of one. SQLite reads table by table, so every adapter answers for a list. Dumping the schema cache for 250 tables goes from 255 statements to 6. MariaDB reports a default as the SQL literal that produced it, so `'a\nb'` comes back with a backslash and an n where `SHOW FULL FIELDS` returns a newline. Those literals are unquoted so the rows match either way. A column declared DEFAULT NULL reads back as the word NULL there, and a quoted default is a value rather than an expression, which is what `update_fields_for_mariadb` reads `SHOW CREATE TABLE` to work out. If the catalog reports nothing for a table it does not exist, or the connection cannot see it, so it is read by name and reports that as before. Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>")`` …

  

  

`[a0c20d1](/ngan/rails/commit/a0c20d1fd8826aa6eb22a7102dffa02fe9a096a1)`

\`columns\` was the last schema reader that still read one table at a time, so a
schema dump paid a statement per table for it. It now takes a list of tables as
well as a single one, like the readers changed in [rails#58421](https://github.com/rails/rails/pull/58421):

    connection.columns(:users)            # => \[Column, ...\]
    connection.columns(\[:users, :posts\])  # => { "users" => \[...\], "posts" => \[...\] }

MySQL and MariaDB read from information\_schema.columns, which reports the same
fields \`SHOW FULL FIELDS\` does under the same names. PostgreSQL filters the
pg\_attribute query it already used by a list of tables instead of one. SQLite
reads table by table, so every adapter answers for a list.

Dumping the schema cache for 250 tables goes from 255 statements to 6.

MariaDB reports a default as the SQL literal that produced it, so \`'a\\nb'\` comes
back with a backslash and an n where \`SHOW FULL FIELDS\` returns a newline. Those
literals are unquoted so the rows match either way. A column declared
DEFAULT NULL reads back as the word NULL there, and a quoted default is a value
rather than an expression, which is what \`update\_fields\_for\_mariadb\` reads
\`SHOW CREATE TABLE\` to work out.

If the catalog reports nothing for a table it does not exist, or the connection
cannot see it, so it is read by name and reports that as before.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com> 

[Sign up for free](/join?source=comment-repo) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](/login?return_to=https%3A%2F%2Fgithub.com%2Frails%2Frails%2Fpull%2F58421)

 ### Reviewers

 [![@byroot](https://avatars.githubusercontent.com/u/44640?s=40&v=4)](/byroot)[byroot](/byroot) [](/rails/rails/pull/58421/files/88ed2458a7e719fd788be98193091561560774db)byroot approved these changes

 [![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=40&v=4)](/skipkayhil)[skipkayhil](/skipkayhil) [](/rails/rails/pull/58421/files/88ed2458a7e719fd788be98193091561560774db)skipkayhil approved these changes

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

### 4 participants

 [![@ngan](https://avatars.githubusercontent.com/u/16579?s=52&v=4)](/ngan)[![@byroot](https://avatars.githubusercontent.com/u/44640?s=52&v=4) ](/byroot)[![@skipkayhil](https://avatars.githubusercontent.com/u/6014046?s=52&v=4) ](/skipkayhil)[![@fxn](https://avatars.githubusercontent.com/u/3387?s=52&v=4)](/fxn)   

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
