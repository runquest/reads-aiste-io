---
layout: "story"
title: "OneCLI (GitHub Repo)"
date: "2026-08-21"
permalink: "/2026/08/21/stories/onecli-github-repo-2ee6e6/"
slug: "onecli-github-repo-2ee6e6"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=456ad0e2-9c7b-11f1-8eb2-8b5ee3e77ae7%26pt=campaign%26pv=4%26spa=1787220053%26t=1787223924%26s=4ed044ee379c0c4f258523850a4aec115155fc192e13aeaffd5248ae417efe5a/1/010001a01ed8dddd-e948c237-af7b-4e47-983f-242c4540b385-000000/sagu3sCseTD0kmWOggyz2pO5TtoqiwjnkGNkcDOVjZs=452"
original_url: "https://github.com/onecli/onecli?utm_source=tldrnewsletter"
category: "Product"
excerpt_separator: ""
---

{% raw %}
OneCLI is an agent harness built for teams. It provides every employee in a company with a secured, sandboxed personal agent. The agents are routed through a gateway that injects credentials and enforces policies. Agents run on the company's own infrastructure. The runner is outbound-only and holds no inbound ports.

---

![OneCLI](/onecli/onecli/raw/main/assets/onecli-logo-light.gif)

**The agent harness built for teams.**  
A pro assistant for companies. Give every employee a secured, sandboxed personal agent.

[Website](https://onecli.sh) · [Docs](https://onecli.sh/docs) · [Discord](https://discord.gg/PSztzsQB3g)

* * *

  ![Every teammate gets an agent. Sandboxed, guarded by one gateway, keys never leave.](/onecli/onecli/raw/main/assets/onecli-hero-light.gif)

## Quick Start



### Cloud-hosted: [onecli.sh](https://onecli.sh)



### Self-hosted



git clone https://github.com/onecli/onecli.git && cd onecli
pnpm install
pnpm run setup

Open [http://localhost:10254](http://localhost:10254)

## What is OneCLI v2?



OneCLI is an open-source platform for running AI agents as a team. You create an agent per person, give each agent the access it needs, and it works in a sandbox, routed through a gateway that injects the credentials and enforces your policy.

  ![How credential injection works](/onecli/onecli/raw/main/assets/onecli-flow-light.gif)

## Why we built OneCLI?



OneCLI started as a credential vault for AI agents, built in Rust. We found that most of the demand came from individuals and teams running autonomous agents like [Hermes](https://github.com/NousResearch/hermes-agent), [OpenClaw](https://openclaw.ai) and [NanoClaw](https://github.com/nanocoai/nanoclaw). People wanted agents that do real work for the person running them, but two parts were missing:

1.  managing secrets and permissions.
2.  and for teams - multiplayer management.

Every autonomous agent out there is built for one person. And for one person, they're great. The moment you need to replicate that across a team, it gets messy: spinning up each agent, deciding what each one can and cannot do, hosting them, keeping track of whose agent is whose.

So we shifted, and built OneCLI v2.

## Built for teams



*   **Your identity provider, integrated**: provision agents on behalf of each employee's identity, straight from the company IdP.
*   **An agent per person**: everyone in the workspace gets their own sandboxed agent, reachable from the dashboard or Slack.
*   **One policy, enforced everywhere**: manage the team policy in one place, that any agent in the workspaces would be enforced by.
*   **Deterministic human-in-the-loop approvals**: in the chat itself, for things you need 100% control over, like sending the email, deleting the Linear ticket, emptying an S3 bucket.
*   **Global connections**: shared at the team level, like LLM keys or service accounts, granted per agent without ever being handed to one.

## The agent



An agent is a durable thing, not a single prompt. It has:

*   **A computer**: its own isolated sandbox, with a filesystem and a shell. The only way out is the gateway, so it can reach what you granted and nothing else.
*   **A conversation**: its own page in the dashboard, or Slack. Images and files included. A message sent while the agent is working redirects it right away instead of queueing behind it.
*   **Memory**: what the agent learns is kept by the platform, so it is never lost. You can read and edit it any time.
*   **Skills**: instructions and helpers you write once, always available to the agent.
*   **A schedule**: the agent can plan future work, and the platform wakes it at the right time.
*   **Credentials it never sees**: each agent gets only the access you granted, and the gateway enforces it on every request. Or connect Bitwarden or 1Password for [on-demand injection](/onecli/onecli/blob/main/docs/vault-integration.md), with nothing stored on the server.
*   **Its own Slack app**: connect it once and it answers in channels and DMs under its own name and avatar, with files and images. Delete the agent and its Slack app goes with it.

Agents run on your own infrastructure. The runner is outbound-only and holds no inbound ports, so a laptop, a homelab, or a VPC behind NAT all work with no ingress and no tunnel.

## Architecture



  ![OneCLI Architecture](/onecli/onecli/raw/main/assets/onecli-architecture-dark.svg)

*   **[Web Dashboard](/onecli/onecli/blob/main/apps/web)**: Next.js app. Create agents, chat with them, edit their memory and skills, manage connections, secrets and grants.
*   **[API Server](/onecli/onecli/blob/main/apps/api-server)**: the control plane. Owns the database, the conversation plane, and the work queue the runner polls.
*   **[Rust Gateway](/onecli/onecli/blob/main/apps/gateway)**: intercepts outbound requests (HTTPS included, via MITM) and injects credentials. Agents authenticate with access tokens via `Proxy-Authorization` headers.
*   **[Runner](/onecli/onecli/blob/main/apps/runner)**: starts, parks and reaps agent sandboxes. Outbound-only, and never touches the database.
*   **[Sandbox Supervisor](/onecli/onecli/blob/main/apps/sandbox-supervisor)**: runs inside each sandbox, speaking a vendor-neutral harness interface so the agent runtime is swappable.
*   **[Channel Adapter](/onecli/onecli/blob/main/apps/channel-adapter)**: the Slack daemon, one app per agent.
*   **Secret Store**: AES-256-GCM at rest, decrypted only at request time, matched by host and path pattern, injected as headers or query parameters.

## Local Development



git clone https://github.com/onecli/onecli.git && cd onecli
mise install
pnpm install
pnpm dev

That's the whole setup: `pnpm dev` generates `.env` with every required secret, starts PostgreSQL, applies migrations, and runs the full stack. Prerequisites, the command reference, project structure, and configuration live in [docs/development.md](/onecli/onecli/blob/main/docs/development.md).

## Contributing



Contributions are welcome. Read the [Contributing Guide](/onecli/onecli/blob/main/CONTRIBUTING.md) and [Code of Conduct](/onecli/onecli/blob/main/CODE_OF_CONDUCT.md) before getting started. Contributions are accepted under the terms of the [Contributor License Agreement](/onecli/onecli/blob/main/CLA.md).

## Security



To report a vulnerability, please follow our [Security Policy](/onecli/onecli/blob/main/SECURITY.md). Do not open a public issue for security reports.

## License



[Apache-2.0](/onecli/onecli/blob/main/LICENSE), with one exception: the `ee/` directories hold enterprise features under the [OneCLI Enterprise License](/onecli/onecli/blob/main/LICENSE-ENTERPRISE), each carrying a notice that points at it. That license is free for development, testing and evaluation, and requires a subscription for production use. Everything else is Apache-2.0 and can be self-hosted in production with no commercial license. [LICENSE-ENTERPRISE](/onecli/onecli/blob/main/LICENSE-ENTERPRISE) carries the authoritative list of licensed paths.

{% endraw %}
