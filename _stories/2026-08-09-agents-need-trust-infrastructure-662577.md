---
layout: "story"
title: "Agents Need Trust Infrastructure"
date: "2026-08-09"
permalink: "/2026/08/09/stories/agents-need-trust-infrastructure-662577/"
slug: "agents-need-trust-infrastructure-662577"
source: "MyClaw Newsletter"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://newsletter.myclaw.ai/unsubscribe/?uuid=2eaf3154-2af3-4e54-b574-fba62b0fa39d&amp;key=dc9420fa06ad8715ca418803968586b4a3d508870a709a3c794ae1e1640114bf&amp;newsletter=deed1d04-92d6-4e2e-bf4e-5a395b641657"
original_url: "https://newsletter.myclaw.ai/r/a8be88e6?m=2eaf3154-2af3-4e54-b574-fba62b0fa39d"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Linux Foundation is launching ANS, a DNS-style identity layer for AI agents, so enterprises can verify who an agent represents, what permissions it has, and whether its code and history remain authentic. The move tackles a real control-plane gap as agents cross tools and companies, though DNS security limits and competing standards still leave adoption unsettled.

---

## Agent Name Service would create a standardized way to verify identity and capabilities across enterprise AI systems.

![AI Agents Business Analyze Businesses Together with Al Assistants to Perform Tasks That Suit Their Goals, Such as Work, Education, Data Analysis, Sales, Content Creation, Payroll Processing, etc. AI Agent](https://www.infoworld.com/wp-content/uploads/2026/06/4189361-0-00545100-1782386488-shutterstock_2577839733-1.jpg?quality=50&strip=all&w=1024)

Credit: Wanan Wanan / Shutterstock

As enterprises deploy increasing numbers of AI agents across applications and organizations, the Linux Foundation on Wednesday announced plans to launch a new Agent Name Service framework designed to establish identity, ownership, and trust for these systems.

The [ANS framework](https://github.com/agentnameservice), which is expected to allow systems and users to verify who an agent represents, what permissions it has, and whether its code and operational history remain authentic and unchanged, will be based on the existing [Domain Name System (DNS)](https://www.networkworld.com/article/965540/what-is-dns-and-how-does-it-work.html), the Foundation said in a statement.

Just like DNS translates human-readable website names into internet addresses, ANS aims to create a standardized naming and discovery layer for AI agents, with the ability for enterprises to publish agent identities through domains they already control, enabling other agents and systems to verify who an agent represents and discover information about its capabilities and ownership before interacting with it, it added.

This, the Foundation further added, creates a federated mechanism for agent discovery and verification without any reliance on any proprietary registry or centralized control.

## Growing demand for an agent identity framework

ANS solves an emerging problem for enterprises, especially in scaling AI deployments, said [Charlie Dai](https://www.forrester.com/analyst-bio/charlie-dai/BIO5344), principal analyst at Forrester, too. “The agent identity problem is already emerging in early production deployments, particularly where multiple agents interact across tools, APIs, and organizational boundaries without consistent authentication and accountability models,” he said.

“We have seen growing concerns around provenance, authorization scoping, and auditability in agent-to-agent interactions, especially in regulated industries and multi-vendor environments,” Dai said.

Agent identity has become a more critical concern for enterprises, pointed out [Jaishiv Prakash](https://www.gartner.com/en/experts/jaishiv-prakash), director analyst at Gartner: “Agent identity has moved from an architectural consideration to an operational control-plane gap.”

“The evidence we see from enterprise clients is consistent: they need to know which agent acted, who it represented, what authority it had, and whether its runtime behavior matched its intended design,” Prakash said.

Beyond the problem ANS seeks to solve, analysts also said the framework’s architecture could prove equally important for enterprise adoption.

“For enterprises, one of ANS’s biggest advantages may be its reliance on DNS, especially since they already use it to manage domains and trust. It avoids creating a new registry and lets companies publish and verify agent identities using existing internet infrastructure, making adoption easier and cheaper,” said [Pareekh Jain](https://pareekh.com/about/), principal analyst at Pareekh Consulting.

More so because enterprises don’t have to build anything new, according to [Amit Jena](https://www.linkedin.com/in/znamit?originalSubdomain=in), AI development manager at IT consulting firm Kanerika.

However, there are downsides to being built on DNS, especially on the security front, Dai cautioned.

“DNS was not originally designed for high-assurance identity. This will make it susceptible to spoofing, hijacking, and latency or propagation inconsistencies that can undermine trust guarantees,” Dai said.

To bypass these security concerns, enterprises should complement ANS with [IAM](https://www.csoonline.com/article/518296/what-is-iam-identity-and-access-management-explained.html), workload identity, AI gateways, and API security controls, according to Prakash.

The Foundation, though, argues that DNS alone is not intended to serve as the sole trust mechanism inside ANS and the framework supports Decentralized Identifiers (DIDs) and Legal Entity Identifiers (LEIs), allowing enterprises to tie agents to existing digital and organizational identity systems as part of the broader identity verification model.

## Battle of the standards

Even so, ANS is entering an increasingly crowded ecosystem of standards and frameworks that enable and govern enterprise AI agents.

While protocols such as [MCP](https://www.infoworld.com/article/4029634/what-is-model-context-protocol-how-mcp-bridges-ai-and-external-services.html) and [A2A](https://www.infoworld.com/article/4088217/what-is-a2a-how-the-agent-to-agent-protocol-enables-autonomous-collaboration.html) focus on connecting agents to tools and facilitating communication between each other, the Foundation itself hosts two standards that touch on agent identity, discovery, and trust.

One of them is [DNS-AI Discovery (DNS-AID)](https://www.infoworld.com/article/4178820/dns-aid-will-make-ai-agents-easier-to-discover-says-linux-foundation.html), a proposed framework that uses DNS records to help agents advertise their capabilities and make themselves discoverable across networks. Another is [AGNTCY](https://www.networkworld.com/article/4029803/cisco-donates-ai-agent-tech-to-linux-foundation.html), a Cisco-led project that aims to provide a broader infrastructure stack for multi-agent systems, including capabilities for agent discovery, identity, messaging, and observability.

That raises the possibility of fragmentation if competing approaches evolve in parallel.

However, Prakash pointed out that the presence of multiple similar frameworks that touch on agent trust, identity, and discovery shows that the agent infrastructure market has entered its standards discovery phase, not its standards consolidation phase.

“Overlap in discovery, identity, messaging, and observability is expected at this stage,” Prakash said.

Enterprises, thus, the analyst added, should wait for “clarity and clearer interoperability guidance” before they treat any one initiative as strategic infrastructure.

[Artificial Intelligence](https://www.infoworld.com/artificial-intelligence/)[Data Governance](https://www.infoworld.com/data-governance/)[Data Management](https://www.infoworld.com/data-management/)

## Related content

[

opinion

### Agents are coming for data (just slowly)

By Jordan Tigani

Aug 6, 2026 7 mins

Artificial Intelligence Data Management Generative AI

](https://www.infoworld.com/article/4203157/agents-are-coming-for-data-just-slowly.html)

{% endraw %}
