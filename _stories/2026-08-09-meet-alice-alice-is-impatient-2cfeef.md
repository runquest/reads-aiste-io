---
layout: "story"
title: "Meet alice. Alice is impatient."
date: "2026-08-09"
permalink: "/2026/08/09/stories/meet-alice-alice-is-impatient-2cfeef/"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22859/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
Users and operators often measure service performance very differently. Operators count each outage or slow request once, while users experience long outages repeatedly, making them feel much worse. This is called the inspection paradox: users see a time-weighted version of your metrics, so a one-minute average recovery time can feel like an hour to them. Long tail events matter far more to users than standard averages suggest.

---

Meet Alice. Alice is impatient. - Marc's Blog    

# [Marc's Blog](/blog/)

# About Me

My name is Marc Brooker. I like to build things that work, and do cool stuff. I like building big things. I also dabble in machining, welding, cooking, and skiing.  
  
I am an engineer at Amazon Web Services (AWS) in Seattle, where I work on agentic AI, especially safety and policy for agentic AI. Before that, I worked on EC2, EBS, databases, serverless, and serverless databases.  
All opinions are my own.

# Links

[My Publications and Videos](https://brooker.co.za/blog/publications.html)  
[@marcbrooker on Mastodon](https://fediscience.org/@marcbrooker) [@MarcJBrooker on Twitter](https://twitter.com/MarcJBrooker)  
  
  
[Is this blog written by AI?](https://brooker.co.za/blog/2026/06/18/my-blog-and-ai.html)

# Meet Alice. Alice is impatient.

What do you mean?

 MathJax = { tex: {inlineMath: \[\['\\\\(', '\\\\)'\], \['$', '$'\]\]} };

Meet Alice. Alice uses your web service. Alice, like most humans, measures her time in seconds and minutes. Alice says your service is slow. You tell Alice that the mean request to your service completes in 100ms, but Alice says that her mean wait time is 1s.

You’re both right.

Meet Alex. Alex uses your web service. Alex, like most humans, measures his time in seconds and minutes. Alex says that when you have outages, they last a long time and he gets really annoyed. You tell Alex that your MTTR is less than 1 minute. Alex says that he sees the mean outage lasting 1 hour.

Again, you’re both right.

What’s going on? What’s going on is that you’re measuring time in requests, or in outages, and Alex and Alice are measuring time in seconds and minutes. When you have a long pause or a long outage, Alex and Alice _sample_ that outage multiple times (maybe because they have multiple customers angry at them). The number of times they experience the outage is proportional to the length of the outage. But you only count that as one.

More technically, what’s going on here is the _inspection paradox_. Alex and Alice don’t experience your latency distribution $f(t)$, they experience a t-weighted version of it. If you have a MTTR or mean request time of $\\mathbb{E}\[X\]$, Alex and Alice experience a mean recovery time $\\mathbb{E}\_a\[X\]$ where $\\mathbb{E}\_a\[X\] = \\frac{\\mathbb{E}\[X^2\]}{2 \\mathbb{E}\[X\]} = \\frac{1}{2} \\left( \\mathbb{E}\[X\] + \\frac{\\mathrm{Var}(X)}{\\mathbb{E}\[X\]} \\right)$.

Let’s play with this with a little simulation. Plug in your median latency (or recovery time), and 99th percentile latency (or recovery time), we’ll fit a log-normal distribution to it, and then plot both what your service metrics see and what your customers see.

Median:  ms    p99:  ms

What your service sees (mean): **– ms**. What your customers experience (mean): **– ms**.

(function () { const canvas = document.getElementById('waitGraph'); const ctx = canvas.getContext('2d'); const medianInput = document.getElementById('medianInput'); const p99Input = document.getElementById('p99Input'); const meanServiceSpan = document.getElementById('meanService'); const meanCustomerSpan = document.getElementById('meanCustomer'); // Teal for what the service measures, warm orange for what customers feel. const COLOR\_SERVICE = '#0d7a6e'; const COLOR\_CUSTOMER = '#e8623d'; const FILL\_SERVICE = 'rgba(13, 122, 110, 0.12)'; const FILL\_CUSTOMER = 'rgba(232, 98, 61, 0.12)'; const INK = '#444'; const GRID = '#ececec'; const FONT = "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"; const FONT\_SMALL = "12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"; // 99th-percentile z-score of the standard normal. const Z99 = 2.3263478740408408; // We model latency as log-normal: ln(X) ~ Normal(mu, sigma). Unlike a Gamma // with shape < 1, its density is always 0 at t=0 and rises to a mode, so both // curves have the nice "hump" shape, and it fits any p99/median ratio. // median = exp(mu), p99 = exp(mu + sigma\*Z99) => closed-form fit. function fitLogNormal(median, p99) { const mu = Math.log(median); const sigma = Math.log(p99 / median) / Z99; return { mu, sigma }; } function logNormalPDF(t, mu, sigma) { if (t <= 0) return 0; const z = (Math.log(t) - mu) / sigma; return Math.exp(-0.5 \* z \* z) / (t \* sigma \* Math.sqrt(2 \* Math.PI)); } // Quantile of the log-normal: exp(mu + sigma \* Phi^-1(p)). Beasley-Springer / // Moro approximation of the inverse standard-normal CDF. function invNorm(p) { const a = \[-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00\]; const b = \[-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01\]; const c = \[-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00\]; const d = \[7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00\]; const pl = 0.02425, ph = 1 - pl; let q, r; if (p < pl) { q = Math.sqrt(-2 \* Math.log(p)); return (((((c\[0\]\*q+c\[1\])\*q+c\[2\])\*q+c\[3\])\*q+c\[4\])\*q+c\[5\]) / ((((d\[0\]\*q+d\[1\])\*q+d\[2\])\*q+d\[3\])\*q+1); } else if (p <= ph) { q = p - 0.5; r = q \* q; return (((((a\[0\]\*r+a\[1\])\*r+a\[2\])\*r+a\[3\])\*r+a\[4\])\*r+a\[5\])\*q / (((((b\[0\]\*r+b\[1\])\*r+b\[2\])\*r+b\[3\])\*r+b\[4\])\*r+1); } else { q = Math.sqrt(-2 \* Math.log(1 - p)); return -(((((c\[0\]\*q+c\[1\])\*q+c\[2\])\*q+c\[3\])\*q+c\[4\])\*q+c\[5\]) / ((((d\[0\]\*q+d\[1\])\*q+d\[2\])\*q+d\[3\])\*q+1); } } const logNormalQuantile = (p, mu, sigma) => Math.exp(mu + sigma \* invNorm(p)); // "Nice" axis step (1, 2, 5 x 10^n) so x-tick labels stay round. function niceStep(range, target) { const raw = range / target; const mag = Math.pow(10, Math.floor(Math.log10(raw))); const norm = raw / mag; const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10; return step \* mag; } function draw() { const median = parseFloat(medianInput.value); const p99 = parseFloat(p99Input.value); if (!(median > 0) || !(p99 > median)) { return; // Wait for sensible input. } const { mu, sigma } = fitLogNormal(median, p99); // Service distribution: log-normal(mu, sigma). Its length-biased ("what // customers feel") version is again log-normal, shifted by sigma^2. const muC = mu + sigma \* sigma; const meanService = Math.exp(mu + sigma \* sigma / 2); const meanCustomer = meanService \* Math.exp(sigma \* sigma); meanServiceSpan.textContent = meanService.toFixed(0); meanCustomerSpan.textContent = meanCustomer.toFixed(0); // x-range: out to the customer distribution's deep tail. const tMax = logNormalQuantile(0.99, muC, sigma); const padLeft = 64, padRight = 24, padTop = 56, padBottom = 52; const W = canvas.width, H = canvas.height; const plotW = W - padLeft - padRight; const plotH = H - padTop - padBottom; const N = 500; const servicePts = \[\], customerPts = \[\]; let peak = 0; for (let i = 0; i <= N; i++) { const t = (i / N) \* tMax; const ys = logNormalPDF(t, mu, sigma); const yc = logNormalPDF(t, muC, sigma); servicePts.push(ys); customerPts.push(yc); if (ys > peak) peak = ys; if (yc > peak) peak = yc; } // Plot relative density (tallest curve peaks at 1) so the y-axis reads in // round numbers regardless of the absolute density scale. for (let i = 0; i <= N; i++) { servicePts\[i\] /= peak; customerPts\[i\] /= peak; } const yMax = 1.08; const xOf = t => padLeft + (t / tMax) \* plotW; const yOf = y => padTop + plotH - (y / yMax) \* plotH; // Background. ctx.clearRect(0, 0, W, H); // Horizontal gridlines (subtle), no surrounding box. ctx.strokeStyle = GRID; ctx.lineWidth = 1; ctx.fillStyle = '#999'; ctx.font = FONT\_SMALL; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; const yStep = niceStep(1, 5); for (let v = 0; v <= 1 + 1e-9; v += yStep) { const y = yOf(v); ctx.beginPath(); ctx.moveTo(padLeft, y); ctx.lineTo(padLeft + plotW, y); ctx.stroke(); ctx.fillText(v.toFixed(1), padLeft - 10, y); } // Vertical gridlines + x-axis labels. ctx.textAlign = 'center'; ctx.textBaseline = 'top'; const xStep = niceStep(tMax, 6); for (let v = 0; v <= tMax + 1e-9; v += xStep) { const x = xOf(v); ctx.strokeStyle = GRID; ctx.beginPath(); ctx.moveTo(x, padTop); ctx.lineTo(x, padTop + plotH); ctx.stroke(); ctx.fillStyle = '#999'; ctx.fillText(v.toFixed(0), x, padTop + plotH + 8); } // Filled area under a curve, then the curve itself on top. function area(pts, fill) { ctx.fillStyle = fill; ctx.beginPath(); ctx.moveTo(xOf(0), yOf(0)); for (let i = 0; i <= N; i++) ctx.lineTo(xOf((i / N) \* tMax), yOf(pts\[i\])); ctx.lineTo(xOf(tMax), yOf(0)); ctx.closePath(); ctx.fill(); } function curve(pts, color, dashed) { ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.setLineDash(dashed ? \[8, 6\] : \[\]); ctx.beginPath(); for (let i = 0; i <= N; i++) { const x = xOf((i / N) \* tMax), y = yOf(pts\[i\]); if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.stroke(); ctx.setLineDash(\[\]); } area(servicePts, FILL\_SERVICE); area(customerPts, FILL\_CUSTOMER); curve(servicePts, COLOR\_SERVICE, false); curve(customerPts, COLOR\_CUSTOMER, true); // Mean markers: dashed verticals with a label across the top. function marker(t, color, label, align) { if (t > tMax) return; const x = xOf(t); ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.setLineDash(\[6, 5\]); ctx.beginPath(); ctx.moveTo(x, padTop - 4); ctx.lineTo(x, padTop + plotH); ctx.stroke(); ctx.setLineDash(\[\]); ctx.fillStyle = color; ctx.font = FONT\_SMALL; ctx.textAlign = align; ctx.textBaseline = 'alphabetic'; const dx = align === 'right' ? -6 : 6; ctx.fillText(label + ' ' + t.toFixed(0) + ' ms', x + dx, padTop - 8); } marker(meanService, COLOR\_SERVICE, 'service mean', 'right'); marker(meanCustomer, COLOR\_CUSTOMER, 'experienced mean', 'left'); // Axis titles. ctx.fillStyle = INK; ctx.font = FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.fillText('latency / recovery time (ms)', padLeft + plotW / 2, H - 10); ctx.save(); ctx.translate(16, padTop + plotH / 2); ctx.rotate(-Math.PI / 2); ctx.textBaseline = 'middle'; ctx.fillText('probability density', 0, 0); ctx.restore(); // Legend across the top. ctx.font = FONT; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; const ly = 22; let lx = padLeft; function legend(color, dashed, text) { ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.setLineDash(dashed ? \[8, 6\] : \[\]); ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx + 30, ly); ctx.stroke(); ctx.setLineDash(\[\]); ctx.fillStyle = INK; ctx.fillText(text, lx + 38, ly); lx += 38 + ctx.measureText(text).width + 30; } legend(COLOR\_SERVICE, false, 'what your service sees'); legend(COLOR\_CUSTOMER, true, "what customers feel"); } medianInput.addEventListener('input', draw); p99Input.addEventListener('input', draw); draw(); })();

For example, put in 30 as the median (let’s ignore the milliseconds and pretend these are minutes for now) for a 30 minute Median TTR (i.e. in half of your postmortems you see a recovery time of $\\leq 30$ minutes), and 600 in as the p99 (one in every 100 events, recovery takes 10 hours). Your MTTR is just over an hour. Your customers experience a mean time to recovery of around 6 hours!

_Reasoning About Code, Instead_

The above argument may be a bit abstract for you, so let’s use another small simulator, presented as code this time, to communicate the core of the idea. Here, we have a server that experiences some periodic down-time (we haven’t simulated the times when it’s up, because they don’t interest us for now), and a Poisson process of arriving clients. We directly measure what the operator would measure as system downtime (e.g. `mttr`), and what the clients see.

As you read this code, notice how each outage is sampled multiple times by the client, and how their samples are weighted by the remaining outage time (this is the _t-weighting_ I talk about above).

```python
import random
failure_mu = 1.0
failure_sigma = 3.0
client_arrival_rate = 100.0
samples = 1000

client_saw_times = []
server_saw_times = []

for i in range(samples):
    this_outage = random.lognormvariate(failure_mu, failure_sigma)
    server_saw_times.append(this_outage)
    t = 0.0
    while True:
        next_arrival = random.expovariate(client_arrival_rate)
        if t + next_arrival > this_outage:
            break
        client_saw_times.append(this_outage - t)
        t += next_arrival

...

print(f"""Client saw:
    mean {mean(client_saw_times)} 
    median {pctile(client_saw_times, 0.5)}
    p99 {pctile(client_saw_times, 0.99)}""")
print(f"""Model predicted: 
    mean {mean(square(server_saw_times))/(2.0*mean(server_saw_times))}""")
print(f"""Server saw:
    mttr {mean(server_saw_times)}
    median {pctile(server_saw_times, 0.5)}
    p99 {pctile(server_saw_times, 0.99)}""")
```

_Caring about tail latency (and long recovery times)_

There are many arguments for why tail latency (and long recovery times) are so important to understand (e.g. [multiple samples](https://brooker.co.za/blog/2021/04/19/latency.html)), but this is the one that I think is the least widely understood. For service times, timeout-and-retry can hide this latency some of the time (as long as the running request doesn’t hold locks or other exclusive resources). But, for recovery time, no such hiding is possible. The heaviness if the tail matters a great deal. This is also one of the reasons I don’t like trimmed measurements (like trimmed means) as a way of thinking about service latency or recovery time. They throw out some really critical context about the shape of the right tail that dominates the customer experience (the other reason is related to Little’s Law and capacity usage, [which I’ve written about before](https://brooker.co.za/blog/2017/12/28/mean.html)).

In slightly more mathematical terms, the difference between MTTR ($\\mathbb{E}\[X\]$) and what clients experience ($\\mathbb{E}\_a\[X\]$) is proportional to $\\frac{Var(X)}{\\mathbb{E}\[X\]}$. It’s not unusual, in real systems, for $Var(X)$ to be very large compared to $\\mathbb{E}\[X\]$. These distributions tend to be very heavy-tailed, partially because the solutions to simple cases (like single host or even datacenter failures) are well-known and robust, while solutions to longer outages remain elusive industry-wide.

_A note on log-normal:_ I chose log-normal here for numerical convenience. It has the nice property that $\\mathrm{lognormal}(\\mu, \\sigma^2)$ becomes $\\mathrm{lognormal}(\\mu + \\sigma^2, \\sigma^2)$. Also it’s well-behaved around 0. I don’t believe that log-normal is a particularly good choice of distribution for latency or recovery time metrics, and generally would approach these problems entirely non-parametrically.

« [Back to the blog index](/blog)  
  

#### Similar Posts

*   06 Aug 2020 » [Surprising Economics of Load-Balanced Systems](/blog/2020/08/06/erlang.html)
*   19 Apr 2021 » [Tail Latency Might Matter More Than You Think](/blog/2021/04/19/latency.html)
*   05 Aug 2021 » [Latency Sneaks Up On You](/blog/2021/08/05/utilization.html)

#### Something Completely Different

*   11 Aug 2021 » [My Proposal for Arecibo: Drones](/blog/2021/08/11/arecibo.html)

Marc Brooker  
The opinions on this site are my own. They do not necessarily represent those of my employer.  
marcbrooker@gmail.com

 [![](/blog/images/feed-icon-14x14.png) RSS](https://brooker.co.za/blog/rss.xml) [![](/blog/images/feed-icon-14x14.png) Atom](https://brooker.co.za/blog/atom.xml)

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

{% endraw %}
