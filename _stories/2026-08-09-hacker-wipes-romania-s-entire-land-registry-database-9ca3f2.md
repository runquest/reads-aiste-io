---
layout: "story"
title: "Hacker wipes Romania's entire land registry database"
date: "2026-08-09"
permalink: "/2026/08/09/stories/hacker-wipes-romania-s-entire-land-registry-database-9ca3f2/"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22833/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "Security"
excerpt_separator: ""
---

{% raw %}
---

[Risky Bulletin](https://news.risky.biz/tag/risky-bulletin/)

# Risky Bulletin: Hacker wipes Romania's entire land registry database

In other news: Graykey maker sues former employee for leaking exploit; Hugging Face was hacked using AI; unauth RCE finally found in WordPress.

[![Catalin Cimpanu](https://storage.ghost.io/c/16/e9/16e9a748-ca66-4b3c-8590-85537131f696/content/images/size/w160/2024/01/BXRruXC9_400x400.png)](/author/catalin/)

#### [Catalin Cimpanu](/author/catalin/)

20 Jul 2026 — 15 min read

[Share](#/share)

![Risky Bulletin: Hacker wipes Romania's entire land registry database](https://storage.ghost.io/c/16/e9/16e9a748-ca66-4b3c-8590-85537131f696/content/images/size/w1200/2026/07/000-RBN-logo-4.png)

**_This newsletter is brought to you by_** [**_Thinkst_**](https://thinkst.com/)**_, the makers of the much-loved_** [**_Thinkst Canary_**](https://canary.tools/)**_. You can subscribe to an audio version of this newsletter as a podcast by searching for "Risky Business" in your podcatcher or subscribing via_** [**_this RSS feed_**](https://risky.biz/feeds/risky-business-news/)**_. You can also add the Risky Business newsletter as a Preferred Source to your Google search results by going_** [**_here_**](https://www.google.com/preferences/source?q=risky.biz)**_._**

A hacker has breached Romania's cadastre agency and wiped the country's entire land registry database following a failed extortion attempt.

The hack has brought Romania's entire real-estate market to a [standstill](https://jurnaluldearges.ro/notarita-ana-stan-sunt-in-co-fortat-hackerii-au-spart-cadastrul-458711/) as official apps and websites have been offline for a week. Notaries can't record new transactions while citizens can't obtain proof of ownership or detailed land records.

Email servers at the National Agency for Cadastre and Real Estate Advertising (_Agenția Națională de Cadastru și Publicitate Imobiliară_, or ANCPI) were also down as part of the incident.

Sources told _Risky Business_ that the hacker entered using valid credentials, mapped internal systems, and wiped systems and backups after failing to extort the agency.

The incident became public on July 14 as the hacker started deleting data. A day later, some of ANCPI's stolen data was [put up for sale](https://publicrecord.ro/2026/07/17/atac-cibernetic-ancpi/) on a known hacking forum. The posted data included employee credentials, internal documents, and details on the agency's IT network.

Since the hack, officials restored their website and posted a message [announcing](https://web.archive.org/web/20260719172925/https://www.ancpi.ro/) they are rebuilding the agency's entire network from scratch. Even if the hacker claims they deleted backups, the agency appears to have had an offline copy, otherwise things would have gotten really messy over the coming months in Romania.

The stolen data was posted online by an account with the name **ByteToBreach**, a known hacker who also breached [Sweden's e-government portal](https://darkwebinformer.com/full-source-code-of-swedens-e-government-platform-leaked-from-compromised-cgi-sverige-infrastructure/) this year, and many other government agencies and high-profile companies over the past year.

Security firm KELA published a profile on ByteToBreach last December and hinted they might be located in Algeria, but since the ANCPI hack has [updated the post](https://www.kelacyber.com/blog/bytetobreach-a-deep-dive-into-a-persistent-data-leak-operator/) and outright doxxed the hacker as _Zakaria Mahdjoub_, an individual from Oran, Algeria.

Well, that will make the job of Romanian law enforcement a hell lot easier! gj!

Romania joins [Poland](https://therecord.media/poland-pesel-system-state-registry-cyber-incident), [Slovakia](https://www.finsider.sk/ekonomika/kataster-nehnutelnosti-celi-kybernetickemu-utoku-nezapinajte-pocitace-vyzvali-zamestnancov/), [Greece](https://www.ktimatologio.gr/grafeio-tipou/deltia-tipou/1465), [Morocco](https://www.moroccoworldnews.com/2025/06/206486/algerian-jabaroot-group-behind-cnss-breach-attacks-moroccan-property-registry/), [Russia](https://meduza.io/en/news/2025/01/08/hackers-claim-breach-of-russia-s-real-estate-registry-leak-alleged-database-fragment), and [Ukraine](https://komersant.ua/en/khakerska-ataka-na-derzhreiestry-chy-varto-pereviriaty-maynovi-prava/) as countries that had their land registry agencies hacked over the past three years.

### **_Risky Business Podcasts_**

_In this edition of **Seriously Risky Business**, Tom Uren and James Wilson talk about different ways ransomware groups are taking advantage of AI. The relatively new FulcrumSec group uses simple techniques to breach companies and then uses AI to get more leverage over victims in its extortion negotiations._ 

* * *

### **Breaches, hacks, and security incidents**

**Hugging Face hacked using AI:** A threat actor used an autonomous AI agent to breach AI platform Hugging Face last week. The attacker used exploits in the platform's data-processing pipeline to pivot to some parts of the company's internal systems. Hugging Face says no customer data was exposed but the attacker stole internal datasets and some cloud credentials. Hugging Face says it tried to use a frontier AI model to analyze the hack but was blocked by its guardrails, which couldn't differentiate between an IR event and offensive operations. \[[_Hugging Face_](https://huggingface.co/blog/security-incident-july-2026)\]

> HuggingFace got hacked by an AI. What stuck out to me was the guardrail asymmetry. The attacker had no constraints, but HF's response ran afoul of the abuse guardrails, forcing them into an unplanned switch to local models. Another aspect for your IR plans. huggingface.co/blog/securit...  
>   
> [\[image or embed\]](https://bsky.app/profile/did:plc:yfrzbyzye2ekirvpkzyemkxr/post/3mqujyw2ly52g?ref_src=embed)
> 
> — David J. Bianco ([@davidjbianco.bsky.social](https://bsky.app/profile/did:plc:yfrzbyzye2ekirvpkzyemkxr?ref_src=embed)) [July 17, 2026 at 10:59 PM](https://bsky.app/profile/did:plc:yfrzbyzye2ekirvpkzyemkxr/post/3mqujyw2ly52g?ref_src=embed)

**Coca-Cola hit by ransomware:** Coca-Cola has suspended production at its Fairlife dairy subsidiary after a ransomware attack. In an SEC filing, Coca-Cola said hackers accessed Fairlife production-related systems this week. Production has been halted at Fairlife US factories. The company's Canadian production lines were unaffected. No ransomware group has taken credit for the incident, yet. \[[_SEC_](https://www.sec.gov/Archives/edgar/data/21344/000162828026048466/ko-20260716.htm) // [_TechCrunch_](https://techcrunch.com/2026/07/16/coca-cola-suspended-production-at-its-fairlife-dairy-after-a-ransomware-attack/)\]

**Qantas breach has a cause:** The hack of Australian airline company Qantas last year was traced back to a social engineering attack. Hackers called an overseas contractor posing as the Qantas IT team to access their systems, connect to the Qantas CRM platform, and exfiltrate the data of 5.7 million customers. Australia's Information Commissioner says Qantas took all the steps to protect customer data on its side and will not be opening further probes into the hack. \[[_OAIC_](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-decisions/Investigation-inquiry-reports/report-into-preliminary-inquiries-of-qantas)\]

**Suno hack:** A threat actor hacked AI music generator platform Suno and dumped internal files and documents online. The files allegedly show that Suno scraped millions of songs and lyrics from YouTube Music, Deezer, Genius, and other music platforms. The leaked files include source code and detailed scraping instructions targeting the platforms. Several music industry groups have sued Suno over the past year for training its AI song generator tool on copyrighted material. Suno was allegedly hacked following a compromise with the Shai-Hulud npm worm. \[[_404 Media_](https://www.404media.co/hack-reveals-suno-ai-music-generator-scraped-youtube-deezer-and-genius/) // [_The Verge_](https://www.theverge.com/ai-artificial-intelligence/966072/suno-ai-music-training-scraping-youtube-hack)\]

**WINDTRE fined for breaches:** Italy's privacy watchdog has fined telecommunications provider WINDTRE €1.7 million for "serious security deficiencies" that led to two security breaches last year. \[[_GPDP_](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10272004)\]

**KNPP leak:** Threat intel analyst Rakesh Krishnan looks at a leak of sensitive files from India's KNPP nuclear power plant after one of its contractors got hit by the World Leaks extortion group. \[[_The Raven File_](https://theravenfile.com/2026/07/17/kudankulam-nuclear-power-plant-leak-an-accidental-disclosure/)\]

**Ostium crypto-heist:** The Ostium DeFi platform was hacked for $18 million last week after hackers exploited its own price-reporting infrastructure. \[[_CoinDesk_](https://www.coindesk.com/business/2026/07/15/ostium-suffers-usd18-million-exploit-as-oracle-attack-wave-continues-to-hit-defi)\]

**Estée Lauder discloses Oracle EBS breach:** Cosmetics giant Estée Lauder has confirmed that hackers stole customer data from its Oracle E-Business Suite platform last year. The company disclosed the breach to US state officials almost a year after it took place. This is Estée's second breach after another one in 2023. The Clop hacking group is behind the hacking spree that targeted Oracle EBS servers. \[[_California OAG_](https://oag.ca.gov/ecrime/databreach/reports/sb24-626688)\]

**Ernst & Young also discloses breach:** Accounting and risk management giant Ernst & Young also disclosed a breach, but the disclosure has been so sanitized of any info that I can't tell what's this about. \[[_California OAG_](https://oag.ca.gov/ecrime/databreach/reports/sb24-626542)\]

**DigiCert breach linked to CylindricalCanine:** Security firm Expel has linked the hack of certificate authority DigiCert to CylindricalCanine, a sub-group of GoldenEyeDog, a financially motivated group operating out of China. \[[_Expel_](https://expel.com/blog/introducing-cylindricalcanine/)\]

### **General tech and privacy**

**Ofcom opens TikTok inquiry:** The UK's communications watchdog has opened a formal investigation into TikTok for failing to protect children from harmful content on the platform, as per the UK's Online Safety Act. \[[_Ofcom_](https://www.ofcom.org.uk/online-safety/protecting-children/investigation-into-tiktoks-compliance-with-duties-to-protect-children-from-encountering-harmful-content-under-section-12)\]

**Moonshot releases Kimi K3:** Chinese AI startup Moonshot has unveiled a new AI model named Kimi K3, which the company claims can rival the ones from top American firms like Anthropic and OpenAI. \[[_Kimi_](https://www.kimi.com/blog/kimi-k3) // [_Business Insider_](https://www.businessinsider.com/kimi-k3-ai-model-moonshot-china-open-weights-benchmarks-pricing-2026-7)\]

**Rust in Chromium:** Microsoft is working on adding a Rust-based PNG image decoder in the Chromium browser project, a more secure component for processing PNG images for Chrome, Edge, Opera, and other similar browsers. \[[_Microsoft_](https://microsoftedge.github.io/edgevr/posts/Rustifying-Image-Codecs-in-Chromium/)\]

**EU password manager has ties to Russia:** An investigation has revealed that Spain-based password manager Passwork shares its codebase and a "near-identical user manual" with a similarly-named password manager advertised in Russia. The Spanish version has allegedly been receiving software updates from an UAE firm managed by one of Passwork's Russian co-founders. The Spanish Passwork's customer list includes European government agencies and universities, which raises concerns of espionage. \[[_OCCRP_](https://www.occrp.org/en/investigation/european-password-manager-shares-origins-and-updates-with-state-certified-russian-firm)\]

**India fines HP over cartel practices:** The Indian government fined HP $14.4 million over cartel practices after the company colluded with resellers to fix prices for ink cartridges, toner, and other printing supplies in government contract bids. \[[_ArsTechnica_](https://arstechnica.com/gadgets/2026/07/hp-fined-1-4-billion-rupees-for-cartelization-of-ink-cartridges-toner-pcs/)\]

**SanFran CAO cracks down on nudify apps:** The San Francisco City Attorney's Office has sent cease-and-desist letters to Apple and Google and ordered the tech giants to remove AI nudify apps from their stores and stop indirectly profiting from CSAM. \[[_WIRED_](https://www.wired.com/story/san-francisco-demands-apple-and-google-delete-ai-nudify-apps-from-app-stores/)\]

![](https://storage.ghost.io/c/16/e9/16e9a748-ca66-4b3c-8590-85537131f696/content/images/2026/07/Rowenna.png)

[Source](https://bsky.app/profile/missiggeek.bsky.social/post/3mqtt472x4s2g)

### **Government, politics, and policy**

**Morocco confirmed as NSO customer:** A whistleblower and former member of Morocco’s domestic intelligence service has confirmed their government's access to the NSO Pegasus spyware, contrary to the government's past public denials. The tool was heavily used to spy on dissidents, journalists, and even politicians abroad. \[[_OCCRP_](https://www.occrp.org/en/project/the-pegasus-project/moroccan-government-used-powerful-israeli-pegasus-spyware-to-hack-phone-of-journalist-former-intelligence-officer-says) // [_Forbidden Stories_](https://forbiddenstories.org/codename-morgan-a-look-back-at-moroccos-acquisition-of-pegasus-involving-israel-and-the-united-arab-emirates/)\]

**UK scraps digital ID scheme:** The UK government will scrap a proposed digital ID scheme once its new prime minister Andy Burnham takes office on Monday. The scheme was announced last September and was supposed to enter into effect next year. It involved issuing a digital ID for UK citizens and legal residents in the form of a mobile app. The ID was meant to serve as proof for the Right to Work in the UK. \[[_Reuters_](https://www.reuters.com/world/uk/next-uk-prime-minister-andy-burnham-drops-digital-id-scheme-2026-07-18/)\]

**US govt fails to rotate cyber personnel:** The US government failed to follow through with one of its own programs to rotate cybersecurity employees between federal agencies. Only eight employees participated in the program since 2022. The program was meant to teach employees new skills before returning to their native agencies. \[[_GAO_](https://www.gao.gov/products/gao-26-108736) // [_Cyberscoop_](https://cyberscoop.com/opm-federal-rotational-cyber-workforce-program-gao/)\]

**White House announces Gold Eagle program:** The Trump administration has launched a new program to help coordinate the disclosure and patching of vulnerabilities in open-source projects and critical infrastructure. The new Gold Eagle program was designed to receive bug reports at scale, usually found using AI tools and frontier AI models. CISA, the Treasury Department, and the Pentagon are involved in the program. \[[_White House_](https://www.whitehouse.gov/releases/2026/07/white-house-launches-gold-eagle-initiative-for-unprecedented-cybersecurity-vulnerability-coordination/)\]

**France bans Polymarket:** The French government has ordered internet service providers to block access to prediction market betting platform Polymarket. The French regulatory authority formally banned the platform in 2024 and threatened fines of up to €200,000 for French citizens placing bets on the platform. The agency moved into active enforcement after data showed Polymarket's userbase grew in France despite the ban. Spain also banned Polymarket in May. \[[_Engadget_](https://www.engadget.com/2218130/france-doubles-down-on-restricting-access-to-polymarket/)\]

### **_Sponsor section_**

_In this **Risky Business sponsor interview**, Casey Ellis chats with Haroon Meer from Thinkst about building companies customers don’t hate. Haroon explains why Thinkst still offers Canary tokens for free and why it has avoided annual price hikes on its paid products. They talk about Eric Ries’s “Incorruptible”, Rob Lee’s 100-year-company approach at Dragos, and why keeping customers happy is a better business strategy than chasing easy sugar highs._

### **Arrests, cybercrime, and threat intel**

**Graykey maker sues employee for leaking exploit:** Graykey-maker Magnet Forensics has sued a former employee for allegedly leaking details about a proprietary iPhone exploit. Magnet claims Mario Del Gaudio shared details of the exploit with his new employer and rival company Paradigm Shift. The exploit was tracked internally at Magnet as MSG but was disclosed publicly by Paradigm Shift in a blog post as usbliter8. The exploit allows attackers to run malicious code inside the SecureROM of Apple devices using A12 and A13 chips. It is a hardware bug and unpatchable. \[[_Bloomberg_](https://www.bloomberg.com/news/articles/2026-07-17/iphone-hacking-firm-sues-ex-worker-over-alleged-theft-of-secrets) // [_CourtListener_](https://www.courtlistener.com/docket/73584326/magnet-forensics-llc-v-del-gaudio/) // [_usbliter8 blog post_](https://ps.tc/pages/blog-usbliter8.html)\]

**TfL hackers get five years:** A UK judge has sentenced two members of the Scattered Spider hacking group to 5.5 years in prison each. Thalha Jubair and Owen Flowers pleaded guilty last month to hacking the London public transport authority in August of 2024. The hack caused months of disruptions at Transport for London and caused damages of £39 million. Jubair is also charged in the US with hacking and extorting 47 US companies and allegedly seeking ransoms of at least $115 million. \[[_NCA_](https://www.nationalcrimeagency.gov.uk/news/two-sentenced-for-hacking-transport-for-london-in-uk-s-biggest-ever-cyber-crime-case)\]

**REvil hacker arrested in Armenia:** Armenian authorities have arrested a suspected member of the REvil ransomware group. Alexander Ermakov was arrested at the Yerevan airport at the end of June on an Interpol arrest warrant. A man named Alexander Ermakov is the main suspect behind the ransomware attack on Australia's Medibank insurer in 2022. Russian media claims that Armenian authorities arrested a man with the same name and that the real Ermakov is in Russia, where he is serving a restriction of freedom sentence that prevents him from traveling abroad. \[[_RIA Novosti_](https://ria.ru/20260716/armenija-2105285622.html) // [_Risky Business_](https://risky.biz/au-uk-us-sanction-russian-behind-medibank-hack/)\]

**Scam center dismantled in Timor-Leste:** Police in Timor-Leste have raided three cyber scam compounds in the capital city of Dili. Police arrested 253 suspects, with most being Chinese and Indonesian nationals. Authorities also raided another compound last month. \[[_ABC_](https://www.abc.net.au/news/2026-07-15/timor-scam-compound-chinese-indonesians-cambodians-arrested/106913210)\]

**DHS seizes 30,000 mobile SIM cards:** The DHS Homeland Security Investigations seized more than 30,000 mobile SIM cards in June and July as part of a crackdown against telephone fraud. \[[_Bloomberg_](https://www.bloomberg.com/news/articles/2026-07-16/dhs-seizes-30-000-mobile-sim-cards-in-effort-to-stop-phone-fraud)\]

**GTA hacker released from hospital, sent to prison:** A member of the Lapsus$ hacking group has been released from a secure hospital and transferred to a normal prison in the UK. Arion Kurtaj is set to face trial again for hacking Rockstar Games in 2022 and releasing GTA5 source code and GTA6 gameplay. Kurtaj was diagnosed with severe autism and sentenced to an indefinite hospital order in December 2023. \[[_GameRant_](https://gamerant.com/gta-6-hacker-trial-november/) // [_Polygon_](https://www.polygon.com/gta-6-leak-hacker-what-happened-trial-burner-phone-selfies-hospital/)\]

**UAT-11795 profile:** Cisco is tracking a new e-crime group targeting companies in the US and Europe with the Starland RAT and a command-and-control (C2) memory implant named the WLDR Agent. \[[_Cisco Talos_](https://blog.talosintelligence.com/uat-11795-deploys-novel-starland-rat-and-bespoke-wldr-c2-implant-in-financially-motivated-campaign/)\]

**TAG-150 evolution:** eSentire has published details on the changes to the tradecraft of TAG-150, an e-crime group behind the CastleLoader, CastleBot, and CastleRAT malware strains—also tracked as DinDoor, a Deno-based loader, NightshadeC2, and DenoRAT, a Deno-based Remote Access Trojan (RAT). The biggest change is their adoption of ClickFix, everyone's favorite infection vector. \[[_eSentire_](https://www.esentire.com/blog/dindoor-denorat-and-nightshadec2-analyzing-tag-150s-evolving-tradecraft)\]

**More ViPNeT exploitation in Russia:** A hacking group is planting backdoors inside Russian companies using the ViPNet enterprise VPN software. The attackers first compromise one VPN node and then exploit the software's update mechanism to install the backdoor on the whole network. ViPNet owner Infotecs has confirmed the attacks and released security updates. A similar wave of attacks also took place in April last year. \[[_Infotecs_](https://infotecs.ru/press-center/publications/razyasneniya-kompanii-infotecs-po-intsidentu-svyazannomu-s-rasprostraneniem-vredonosnogo-po/) // [_PositiveTechnologies_](https://habr.com/ru/companies/pt/articles/1060016/) // [_Kaspersky_](https://securelist.com/tr/hellonet-vipnet/120700/) // [_Last year's attacks_](https://securelist.ru/new-backdoor-mimics-security-software-update/112326/)\]

**Scarcity scams are here to stay:** Scarcity scams are a new category of online scams where threat actors run fake sites for online services with limited availability or spots. This type of scam has exploded across the past few years and typically target the reservation sites of various government websites across the world. \[[_DomainTools_](https://dti.domaintools.com/securitysnacks/scarcity-scams)\]

**Sextortion campaigns:** A recent spike in sextortion email scams has been linked to the good ol' Trik/Phorpiex botnet, which is still alive after all these years. \[[_PointWild_](https://www.pointwild.com/threat-intelligence/phorpiex-inside-the-botnet-powering-global-sextortion-spam-operations/)\]

**Text salting in the wild:** Threat actors are using a technique named "text salting" to hide text inside their emails and bypass email spam filters for both traditional and AI-powered email security systems. Barracuda has seen the technique used in over a million retail-themed phishing scams. \[[_Barracuda_](https://blog.barracuda.com/2026/07/16/text-salting-ai-email-security)\]

**RubyGems malware:** At least two dormant RubyGems accounts have been compromised to push malware to old projects. \[[_Aikido Security_](https://www.aikido.dev/blog/sleepergem-rubygems-supply-chain-attack) // [_Step Security_](https://www.stepsecurity.io/blog/sleepergem-compromised-rubygems-drop-persistent-backdoor)\]

**OAuth Client ID Spoofing:** Threat actors are using OAuth client ID spoofing to abuse Microsoft Entra ID for account enumeration, check password validity, and account state. The technique is seeing increased usage, per Proofpoint. \[[_Proofpoint_](https://www.proofpoint.com/us/blog/threat-insight/oauth-client-id-spoofing-why-fake-client-ids-are-gaining-traction-stealthy)\]

> Proofpoint observed two independent campaigns adopting this tradecraft: • UNK\_PyReq2323: >1M targeted users, 700K+ spoofed client IDs • UNK\_OutFlareAZ: >2M targeted users, 3.7M spoofed client IDs Different tooling and infrastructure suggest growing adoption.
> 
> — ThreatInsight ([@threatinsight.proofpoint.com](https://bsky.app/profile/did:plc:5gwujgymmotfb4pszrxoblwb?ref_src=embed)) [July 14, 2026 at 6:56 PM](https://bsky.app/profile/did:plc:5gwujgymmotfb4pszrxoblwb/post/3mqmkzsfikc2s?ref_src=embed)

### **Malware technical reports**

**XZ Utils backdoor:** Adrian Mastronardi has published a book with the in-depth story of the XZ Utils backdoor incident from 2024. \[[_Half a Second_](https://www.half-second.com/)\]

**Pegasus spyware:** The security team at Amnesty International has published the most comprehensive analysis of the Pegasus spyware to date, leveraging the insights from past reports and the recent WhatsApp lawsuit. \[[_Amnesty International_](https://securitylab.amnesty.org/latest/2026/07/inside-pegasus-the-evolution-of-the-worlds-most-notorious-spyware/)\]

**ClickLock Stealer:** A new infostealer targeting macOS users has been spotted in the wild. This one has been named ClickLock because it blends ClickFix and locker tactics for its distribution and installation process. \[[_Group-IB_](https://www.group-ib.com/blog/clicklock-stealer-macos-malware/)\]

**CrashStealer:** There's also another macOS infostealer in the wild, named CrashStealer because it tries to impersonate Apple's crash-reporting framework to harvest browser credentials, cryptocurrency wallets, and keychain data. \[[_Jamf_](https://www.jamf.com/blog/crashstealer-macos-infostealer-analysis/)\]

**ACR Stealer:** Microsoft has reported an increase in attacks deploying the ACR Stealer across customer environments since April. \[[_Microsoft_](https://www.microsoft.com/en-us/security/blog/2026/07/16/acr-stealer-two-observed-intrusion-chains-amid-increased-threat-activity/)\]

**BoryptGrab:** Almost 300 GitHub repositories impersonating legitimate software were actually spreading a version of the BoryptGrab infostealer. \[[_Arctic Wolf_](https://arcticwolf.com/resources/blog/fake-github-repositories-deliver-boryptgrab-lineage-infostealer/)\]

**TELEPUZ:** Elastic has spotted a new malware framework being deployed in the wild that appears to be related to an upcoming MaaS. \[[_Elastic_](https://www.elastic.co/security-labs/telepuz-maas-malware-clickfix)\]

**Spirals ransomware:** Broadcom's Symantec team has spotted a new ransomware strain named Spirals being deployed in Asia. Not much information about it so far. \[[_Broadcom_](https://www.security.com/threat-intelligence/ransomware-spirals-extortion)\]

**NadMesh botnet:** A newly discovered botnet is specifically targeting AI infrastructure and the MCP ecosystem. The NadMesh botnet has targeted Ollama, ComfyUI, and other AI-related servers since early July. The botnet plants SSH backdoors for control and future access. According to Chinese security firm QiAnXin, the botnet appears to be an "industrial-grade" operation with a "clear commercial intent." \[[_QiAnXin_](https://blog.xlab.qianxin.com/nadmesh-botnet-analysis-a-product-grade-threat-for-the-ai-service-era-en/)\]

**OkoBot framework:** Researchers have found a new modular malware framework named OkoBot that resembles an infostealer but puts more focus on stealing sensitive data from cryptocurrency owners and related services. \[[_Kaspersky_](https://securelist.com/okobot-framework-targets-cryptocurrency-wallets/120660/)\]

> _"The OkoBot campaign has been ongoing for over a year, and it remains active at the time of publication. Moreover, it is adapting, which indicates that this framework is being maintained and distribution campaigns continue."_

**WackoGinx phishing kit:** Researchers have found a new phishing kit named WackoGinx (also WachoGinx) that can run campaigns targeting M365, Facebook, Gmail, LinkedIn, and PayPal. \[[_Threatactix_](https://threatactix.com/2026/07/02/a-rare-look-inside-the-command-and-control-panel-behind-modern-phishing-operations/)\]

![](https://storage.ghost.io/c/16/e9/16e9a748-ca66-4b3c-8590-85537131f696/content/images/2026/07/wacko.png)

### **_Sponsor section_**

_In this **Soap Box edition** of the podcast, Patrick Gray chats with **Thinkst Canary founder Haroon Meer** about his "decade of deception."_ 

### **APTs, cyber-espionage, and info-ops**

**UTA0533 is behind new SonicWall zero-day wave:** A hacking group tracked as UTA0533 is behind two zero-days exploited in SonicWall SMA appliances. The zero-days include an SSRF and a code injection vulnerability that grant the group root-level access to the device. The attacks began in late June and are deploying malware designed specifically for SonicWall SMA VPN appliances. SonicWall released patches for both zero-days last week. \[[_Volexity_](https://www.volexity.com/blog/2026/07/17/proxying-to-compromise-sonicwall-secure-mobile-access-0-day-exploitation/) // [_SonicWall patches_](https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2026-0008)\]

**GoSerpent campaign:** Kaspersky is tracking a new APT group deploying the GoSerpent backdoor, Stowaway, and TmcLoader in campaigns targeting government and diplomatic entities in Southeast Asia. No attribution yet. \[[_Kaspersky_](https://securelist.com/goserpent-backdoor-in-southeast-asia/120687/)\]

**Laundry Bear member worked at Kaspersky:** Denis Obrezko, the Russian national who was arrested in Thailand last year, extradited to the US, and charged with hacks part of the Laundry Bear APT group, also worked for Russian security firm Kaspersky. A team of threat intel analysts going by Ctrl-Alt-Intel has also published a profile on Obrezko and the opsec mistakes that led to his arrest, which is well worth your read. \[[_Reuters_](https://www.reuters.com/world/alleged-russian-cyber-spy-boston-case-previously-worked-kaspersky-source-says-2026-07-15/) // [_Ctrl-Alt-Intel_](https://ctrlaltintel.com/research/VoidBlizzard/)\]

> Love that a leaked McDonald’s order helped corroborate the attribution 😂 Great pivots! [https://t.co/XZUeBAWZYZ](https://t.co/XZUeBAWZYZ)
> 
> — Chi-en (Ashley) Shen (@ashl3y-shen.bsky.social) (@ashl3y\_shen) [July 14, 2026](https://x.com/ashl3y_shen/status/2077035588507590747?ref_src=twsrc%5Etfw)

**Sandworm adopts ClickFix:** Even if they're one of Russia's most advanced cyber-espionage groups, Sandworm is now using ClickFix for malware delivery. \[[_CERT-UA_](https://cert.gov.ua/article/6318437)\]

**More DPRK on npm:** OSM's Jenn Gile has linked two clusters of npm malware back to North Korean hackers and their PolinRider campaign. \[[_OpenSourceMalware_](https://opensourcemalware.com/blog/chainveil-and-vitevenom-dprk-polinrider-campaign)\]

**Operation Capsule Vault:** And speaking of DPRK hacking campaigns, there's one spreading the RokRAT malware using edu- and academic-related phishing lures. \[[_Genians_](https://www.genians.co.kr/en/blog/threat_intelligence/rokrat_capsule_vault)\]

**Contagious Interview campaign:** There's nothing more dangerous right now than trying to find a job in the IT sector, thanks to North Korean hackers! Putting the irony aside, there's a new report on the Contagious Interview campaign that Elastic tracks as REF9403 activity. The report covers the use of SVG files to hide malicious commands via steganography, which is kind of original in its own specific way because SVG files haven't been broadly abused for steganography until now. \[[_Elastic_](https://www.elastic.co/security-labs/contagious-interview-malware-svg-steganography)\]

![](https://storage.ghost.io/c/16/e9/16e9a748-ca66-4b3c-8590-85537131f696/content/images/2026/07/SVG.png)

### **Vulnerabilities, security research, and bug bounty**

**wp2shell vulnerability:** The WordPress team has released a security update to patch one of the most critical bugs ever found in the project's code. The vulnerability is an SQL injection in the WordPress REST API that can be exploited by remote unauthenticated attackers to run malicious code on any WordPress site. The issue can be exploited without any preconditions and impacts all WordPress versions released since last December. WordPress sites power more than 41% of all internet sites. The bug was discovered by Searchlight Cyber and is tracked as CVE-2026-63030, or wp2shell. \[[_Searchlight Cyber_](https://slcyber.io/research-center/wp2shell-pre-authentication-rce-in-wordpress-core) // [_wp2shell_](https://wp2shell.com/) // [_WordPress patch_](https://wordpress.org/news/2026/07/wordpress-7-0-2-release/)\]

![](https://storage.ghost.io/c/16/e9/16e9a748-ca66-4b3c-8590-85537131f696/content/images/2026/07/Shah.png)

[Source](https://www.linkedin.com/posts/shubhamshah_wp2shell-pre-authentication-rce-in-wordpress-share-7484064001346154507-gnOV/)

**HollowByte attack:** A new vulnerability can crash OpenSSL servers using only an 11 bytes payload. The attack can be exploited by remote unauthenticated attackers and force servers to allocate huge amounts of memory before any secure TLS handshake even begins. The OpenSSL project released patches for both current and old library versions last month. The vulnerability was discovered by Okta and is named HollowByte. \[[_Okta_](https://sec.okta.com/articles/2026/06/openssl-hollowbtye-a-dos-hiding-in-11-bytes/)\]

**Android lockscreen bypass:** Just like Siri has been exploited for years to bypass the lockscreen, it's now Gemini's turn to be abused to bypass the Android lockscreen. \[[_Android Headlines_](https://www.androidheadlines.com/2026/07/android-lock-screen-bug-lets-gemini-send-sms-without-a-pin-but-a-fix-is-coming.html)\]

**Vulnerability disclosure guide:** CISA and international partners have released joint guidance on establishing proper coordinated disclosure programs. \[[_CISA_](https://www.cisa.gov/resources-tools/resources/establishing-coordinated-vulnerability-disclosure-program-work-security-researchers)\]

**Nightmare Eclipse drops LegacyHive:** Security researcher Nightmare Eclipse has released a new Windows exploit last week. Named LegacyHive, the zero-day is a local privilege escalation in the Windows User Profile Service. \[[_Project Nightcrawler_](https://blog.projectnightcrawler.dev/posts/2026-07-14-legacyhive-public-disclosure/) // [_GitHub_](https://github.com/MSNightmare/LegacyHive) // [_SecurityWeek_](https://www.securityweek.com/nightmare-eclipse-drops-legacyhive-windows-zero-day/)\]

**AoE RCE:** The last thing you ever expected is probably a remote code execution exploit in the good ol' Age of Empires game.

> Here’s the Age of Empires RCE from yesterday’s Patch Tuesday: CVE-2026-50663.  
>   
> Join an attacker’s lobby, (auto-)accept UCG, and you get remote code execution. [pic.twitter.com/QmMkY07C8S](https://t.co/QmMkY07C8S)
> 
> — Rick de Jager (@rdjgr) [July 15, 2026](https://x.com/rdjgr/status/2077331427549421918?ref_src=twsrc%5Etfw)

### **Infosec industry**

**Threat/trend reports:** [Acronis](https://www.acronis.com/en/tru/posts/acronis-cyberthreats-update-july-2026/), [CompariTech](https://www.comparitech.com/news/government-ransomware-roundup-h1-2026-stats-on-attacks-ransoms-and-data-breaches/), [Moonlock](https://moonlock.com/mid-2026-macos-threat-report), [ReliaQuest](https://reliaquest.com/blog/threat-spotlight-ransomware-and-cyber-extortion-in-q2-2026/), [Sonatype](https://www.sonatype.com/press-releases/sonatype-research-labs-marks-15-years-of-intelligence), [Sophos](https://www.sophos.com/en-us/blog/sophos-state-of-ransomware-2026), [Thales](https://cpl.thalesgroup.com/quantum-ai-data-threat-report), and [WatchGuard](https://www.watchguard.com/wgrd-news/press-releases/employees-drive-rising-cybersecurity-risk-shadow-ai-and-unsafe-work-habits) have recently published reports and summaries covering various threats and infosec industry trends.

**BSides Budapest 2026 videos:** Talks from the BSides Budapest 2026 security conference, which took place in April, are [available on YouTube](https://www.youtube.com/playlist?list=PLq9wT6ZZJ_TlqQfcxAFlPjNDkCvGtEnFP). 

### **_Risky Business podcasts_**

_In this edition of **Between Two Nerds**, Tom Uren and The Grugq discuss just how important exploits are for cyber operations using data published in a new paper authored by two members of Ukraine’s cyber security agency._

_In this episode of **Risky Business Features**, James Wilson chats with SOCRadar CISO Ensar Seker and James Wilson chat about the company’s deep dive into the Fortibleed campaign. A small investigation into a curiously open directory on an unknown server expanded into the discovery of an attack that targeted 400,000 Fortinet devices._

{% endraw %}
