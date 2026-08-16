---
layout: "story"
title: "A researcher bought noreply.net. Companies started sending him secrets"
date: "2026-08-16"
permalink: "/2026/08/16/stories/a-researcher-bought-noreply-net-companies-started-sending-hi-11616f/"
slug: "a-researcher-bought-noreply-net-companies-started-sending-hi-11616f"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=19a357d8-9567-11f1-8920-5509caa85f4b%26pt=campaign%26pv=4%26spa=1786442421%26t=1786446300%26s=fc247acc8bb43bac5f03a6bb2beab7cfcd8e4075f86c22f936cd2becadffed74/1/0100019ff07f45ea-2a2ade7c-c4d8-499e-ac2b-8e5de6023415-000000/rWP3qNiD0yXK-XrlRacLGrx494EiqNaC8XEZotRbtE0=452"
original_url: "https://arstechnica.com/security/2026/08/a-researcher-bought-noreply-net-companies-started-sending-him-secrets/"
category: "Security"
excerpt_separator: ""
---

{% raw %}
Cory Solovewicz created an accidental honeypot when he purchased noreply[.]us and noreply[.]net in 2020 and 2024, respectively.

---

No reply at all

# A researcher bought noreply.net. Companies started sending him secrets.

Companies treat some email domains as digital trash cans, despite the risks.

[Matt Burgess, wired.com](https://arstechnica.com/author/wired-com/) – Aug 10, 2026 10:25 am | [87](https://arstechnica.com/security/2026/08/a-researcher-bought-noreply-net-companies-started-sending-him-secrets/#comments "87 comments")

 [![A ball of crumpled paper flying towards a full waste paper basket](https://cdn.arstechnica.net/wp-content/uploads/2026/08/rubbish-640x427.jpg) ![A ball of crumpled paper flying towards a full waste paper basket](https://cdn.arstechnica.net/wp-content/uploads/2026/08/rubbish-1152x648.jpg)](https://cdn.arstechnica.net/wp-content/uploads/2026/08/rubbish.jpg)

Credit: [Richard Drury via Getty](https://www.gettyimages.com/detail/photo/ball-of-crumpled-paper-flying-towards-a-full-waste-royalty-free-image/1542412782)

Credit: [Richard Drury via Getty](https://www.gettyimages.com/detail/photo/ball-of-crumpled-paper-flying-towards-a-full-waste-royalty-free-image/1542412782)

Text settings

Story text

Size Small Standard Large Width \* Standard Wide Links Standard Orange

\* Subscribers only  
  [Learn more](/store/product/subscriptions/)

Minimize to nav

Cory Solovewicz receives more unwanted emails than you. Seriously—it’s a lot more. Since December 2024, one of the domains at which the security researcher receives email has registered 401,796 messages—by his calculations that’s an average of 699.99 pings per day.

This deluge isn’t the regular flood of spam, newsletters, and unwanted deals that fill many people’s inboxes. Instead, companies and other organizations are inadvertently sending Solovewicz other people’s private information and company secrets. Over the last few years, he’s received injury reports from a city government, confirmation of people’s pizza orders, and account setup emails from a school platform. “I get service orders for people that need repairs. I get lots of test platform credentials,” says [Solovewicz](https://cory.so/about), a security researcher and consultant.

Solovewicz is receiving the avalanche of messages as he’s the owner of the domains [noreply.us](http://noreply.us/) and [noreply.net](http://noreply.net/), which he purchased in 2020 and 2024, respectively. After originally planning to use the noreply.us domain as a catch-all email—which receives mail sent to any @ address on that domain—to filter messages and enhance his privacy, the researcher quickly noticed that other systems were sending mail to @[noreply.us](http://noreply.us/) addresses. “I created an accidental honeypot,” Solovewicz tells WIRED. “I had no idea it was going to turn into this.”

Companies may send emails to \[companyname\]@noreply.net or similar variations believing they aren’t going anywhere, or could not be monitored in any way. Broadly it’s also possible that they may transform a person’s individual email address to send to one of these placeholder style domains if someone leaves a company or deletes their account.

What started out as a personal email project has become a large-scale effort to warn businesses and other groups that they have misconfigured their internal systems and are accidentally sharing sensitive information. Solovewicz, who presented his work at the Defcon security conference yesterday, says ultimately he is relieved that he ended up with the domains rather than criminal hackers or nation states who could use the data maliciously.

“I did not realize that this was going to be as big of a problem as it is,” says Solovewicz, who is not publicly naming impacted entities. The researcher has been alerting affected companies of their problems, encouraging them to fix the errors and misconfigurations. “I just want companies and organizations to do the right thing and to be auditing their systems and fixing their stuff.”

Solovewicz says that the [noreply.net](http://noreply.net/) domain is the largest he owns and has received 400,000 messages over the year and a half that he’s owned it, with 28,365 of those containing attachments. The [noreply.us](http://noreply.us/) domain has been sent 37,255 messages over 2,345 days since he purchased it in 2020. Over the month before his conference talk, combined, they’ve received more than 11,000 messages. Overall, emails have been sent from more than 14,000 “from” addresses, from 6,200 root domains. The messages are automated by company systems, not written by humans, the researcher says.

While the issue is not a new one—almost 20 years ago, independent security journalist Brian Krebs, then working at the Washington Post, wrote how companies were sending [millions of messages to @donotreply.com emails](http://donotreply.com/)—it is inherently avoidable. For instance, companies could use internal domains or the [.invalid](https://datatracker.ietf.org/doc/html/rfc6761) domain that is guaranteed not to exist.

Solovewicz is not alone in this voluntary endeavor, which is helping protect the data of companies—often large ones. Earlier this year, Mike Sheward, the head of security at EV charging company Xeal, spent around $15 to buy the domain [deleteduser.com](http://deleteduser.com/). “Within the first hour, there were three different organizations that had emailed stuff to @[deleteduser.com](http://deleteduser.com/),” Sheward tells WIRED, pointing out that companies appear to be simply changing email addresses rather than entirely deleting accounts from their systems.

Like Solovewicz, Sheward has seen thousands of unintended emails coming his way—from at least 100 different organizations—across multiple domains he now owns. He’s had emails detailing people’s Viagra orders, messages asking him to approve people’s work vacations or leaves of absence, hotel bookings including people’s full names, and invitations to Zoom meetings from a UK government agency. “There’s a lot of cybersecurity companies and a few Microsoft partner companies as well,” Sheward says. A couple of weeks ago he got an invitation to one San Francisco company’s summer BBQ, addressed to “Dear Deleted User.”

One of the most frequent sources of email, Sheward says without naming the firm, is an AI company that uses object recognition technology to detect workers at industrial sites in the Middle East who may not be following safety protocols. The researcher has received [thousands of CCTV stills](https://infosec.exchange/@SecureOwl/116633004972665833) from the firm, he says. “I am being a good guardian of the Internet dumpster—but if I had been a bad one, it’s not hard to see how this information that is willingly thrown at my face could be misused,” he wrote in a Medium [post](https://mike-sheward.medium.com/deleteduser-com-a-15-pii-magnet-c4396eb21061) in April.

As both Solovewicz and Sheward realized the potential scale of the misplaced emails—and what a goldmine the data would be for hackers and extortionists—they, working independently, have purchased more than 30 domains to try and limit the potential for malicious actors to copy the approach.

As part of his Defcon talk, Solovewicz explained he has been building a probe to test if other possible placeholder domains may be configured to receive email. “I’ve scanned 7,136 domains, and 328 of them were identified as having catch-all inboxes configured,” Solovewicz says. “I’m not sure I can say how large of a problem this is, but my concern is that what I ‘accidentally’ found when I registered my domain is just the tip of the iceberg.”

Both researchers say that, where possible, they have been notifying companies that have systems misconfigured and are sending them emails. The results have been mixed, they say. While some organizations appear to have quietly fixed the issues, many others have not replied, and the sheer scale of the problem makes notifying every one impacted a challenge.

“It is too much,” Solovewicz says, emphasizing that people shouldn’t assume a domain is unmonitored. “I’m at the point where this would now be a full-time job to handle every single one of these—that’s part of my motivation to talk about this, it is my responsible disclosure. You guys need to fix your systems and not do this and not leak your customer data and your employee data and your own internal data.”

_This story originally appeared on [wired.com](https://www.wired.com/story/sensitive-info-goes-into-no-reply-emails-constantly-this-guy-sees-it-all/),_

[![Photo of WIRED](https://cdn.arstechnica.net/wp-content/uploads/2023/09/wired-headshot.jpg)](https://arstechnica.com/author/wired-com/)

[WIRED](https://arstechnica.com/author/wired-com/)

[WIRED](https://arstechnica.com/author/wired-com/)

Wired.com is your essential daily guide to what's next, delivering the most original and complete take you'll find anywhere on innovation's impact on technology, science, business and culture.

[87 Comments](https://arstechnica.com/security/2026/08/a-researcher-bought-noreply-net-companies-started-sending-him-secrets/#comments "87 comments")

{% endraw %}
