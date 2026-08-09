---
layout: "story"
title: "Memory Prices"
date: "2026-08-09"
permalink: "/2026/08/09/stories/memory-prices-78f79b/"
source: "Leadership in Tech"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://leadershipintech.com/subscribers/027d9985-d4c5-48a7-af59-5152efd9c8a4/unsubscribe"
original_url: "https://leadershipintech.com/links/22700/027d9985-d4c5-48a7-af59-5152efd9c8a4/email"
category: "Industry"
excerpt_separator: ""
---

{% raw %}
---

Memory Prices | DAM            {"@context":"https://schema.org","@type":"WebPage","description":"Historical and current prices for DRAM, HBM, and NAND flash.","headline":"Memory Prices","url":"http://localhost:4000/memory-prices.html"}        

[Stanford University](https://stanford.edu)

*   [Home](/index.html)
*   [Whitepaper](/assets/Stanford_DAM_2_Pages_2025.pdf)
*   [Events](/events.html)
*   [Courses](/courses.html)
*   [People](/people.html)
*   [Publications](/publications.html)
*   [Memory Data](/memory-prices.html)
*   [MemoryDAX Affiliates Program](http://memorydax.stanford.edu)

# [![](/img/dam-logo-short.png)](/)

## Historical and current prices for DRAM, HBM, and NAND flash.

Memory Prices 

.mp-intro { margin: 0 0 1.2em; } .mp-card { border: 1px solid #e3e3e3; border-radius: 10px; padding: 1em 1.2em 0.4em; margin: 1.4em 0; box-shadow: 0 1px 4px rgba(0,0,0,.05); background:#fff; } .mp-card h2 { margin-top: .2em; } .mp-sub { color:#5a5a5a; font-size:.92em; margin:.2em 0 1em; } .mp-chart { width: 100%; height: 520px; } .mp-chart.short { height: 420px; } .mp-toolbar { display:flex; flex-wrap:wrap; gap:.6em; align-items:center; margin:.2em 0 1.2em; } .mp-btn { display:inline-block; background:#8c1515; color:#fff !important; text-decoration:none; padding:.5em .95em; border-radius:6px; font-size:.9em; font-weight:600; } .mp-btn.alt { background:#175e54; } .mp-updated { color:#5a5a5a; font-size:.88em; margin-left:auto; } .mp-note { background:#fbf6e9; border-left:4px solid #d4a017; padding:.7em 1em; border-radius:4px; font-size:.9em; margin:1em 0; } details.mp-method { margin:1.4em 0; } details.mp-method summary { cursor:pointer; font-weight:600; font-size:1.05em; } .mp-method table { width:100%; border-collapse:collapse; margin:.8em 0; font-size:.9em; } .mp-method th, .mp-method td { border:1px solid #e3e3e3; padding:.45em .6em; text-align:left; vertical-align:top; } .mp-method th { background:#f6f6f6; } .mp-err { color:#8c1515; font-weight:600; } .mp-wip { font-size:.5em; font-weight:700; letter-spacing:.03em; color:#9a6d00; background:#fbf6e9; border:1px solid #e6d8a8; border-radius:5px; padding:.2em .55em; margin-left:.55em; vertical-align:middle; text-transform:uppercase; } .mp-disclaimer { font-size:.9em; color:#5a5a5a; font-style:italic; margin:.2em 0 1em; } .mp-banner { border:1px solid #d9b38c; background:#fdf3e7; border-left:6px solid #8c1515; border-radius:6px; padding:.85em 1.15em; margin:0 0 1.2em; font-size:.96em; color:#4a3417; line-height:1.45; } .mp-banner strong { color:#8c1515; } .mp-footnote { font-size:.82em; color:#7a7a7a; margin:1.6em 0 .3em; } .mp-method h3 { margin:1.1em 0 .3em; font-size:1.02em; } .mp-method ul { margin:.3em 0 .8em 1.1em; } .mp-method li { margin:.25em 0; } .mp-toggle { display:inline-flex; margin:.1em 0 .9em; border:1px solid #c9c9c9; border-radius:6px; overflow:hidden; } .mp-toggle button { border:0; background:#f4f4f4; color:#333; padding:.38em .85em; font-size:.85em; cursor:pointer; } .mp-toggle button + button { border-left:1px solid #c9c9c9; } .mp-toggle button.active { background:#8c1515; color:#fff; }

Historic and current **memory and storage prices**, collected in the spirit of John C. McCallum's classic memory-price dataset — interactive, with the raw data downloadable. Hover for details, click the legend to toggle series, drag or use the slider to zoom, and use the camera icon to export an image.

[⬇ Download CSV](/assets/memory-prices/memory-prices.csv) Loading…

## Price per gigabyte over time

Historical lowest $/GB on a log scale — one line per memory type: **DRAM**, **NAND flash**, and **HBM**. Toggle nominal vs **inflation-adjusted** dollars (constant 2024 $, US CPI-U).

Nominal USDReal USD (2024$)

## DRAM price by generation

The DRAM line above, broken out by generation across the full history — Pre-DDR (SDRAM/core), DDR, DDR2, DDR3, DDR4, DDR5. (Generation is inferred from product descriptions, so older points are approximate.)

Nominal USDReal USD (2024$)

## Accelerator cost breakdown

Modeled estimates from **Epoch AI**: quarterly accelerator cost across the four largest AI-accelerator designers — **Nvidia, AMD, Google (TPU) and Amazon (Trainium)** — stacked by component (HBM, logic die, packaging/CoWoS, auxiliary), a **production-volume-weighted average**.

Absolute ($B/quarter)Share (%)

## HBM price by generation

By HBM generation (HBM2e → HBM3 → HBM3e → HBM4). HBM is sold only to accelerator makers on confidential contracts — there is **no public spot market** — so these are sparse **industry-analyst estimates** (TrendForce / SemiAnalysis), not transaction prices. HBM4 is _projected_ (launches Q3 2026). $/TBps is cost per unit of memory bandwidth (stack price ÷ per-stack bandwidth).

$/GB$/TBps

**Methodology note.** $/GB is the **cheapest listed retail price in nominal USD** — not contract, average, inflation-adjusted, or a confirmed sale price. DRAM history is the McCallum dataset (extended from mid-2024 by Keepa Amazon prices); NAND is Keepa's cheapest consumer-NVMe price from 2016 (approximate anchors before); HBM figures are modeled estimates. Sources are listed below and in the downloadable dataset; please check before citing.

Methodology, sources and caveats

### Sources and method

Category

What we track

Source and method

Reliability

DRAM $/GB

cheapest retail $/GB, overall and by generation (DDR3/DDR4/DDR5)

**Deep history (1957–2024):** the McCallum memory-price dataset ([jcmit.net, via the Internet Archive](https://web.archive.org/web/20250716092935/https://jcmit.net/memoryprice.htm)). **Mid-2024 onward:** the cheapest new consumer DIMM each month from [Keepa](https://keepa.com) (Amazon retail price history), refreshed monthly.

Reference + live

NAND $/GB

cheapest retail SSD $/GB, 2010–present

**2016 onward:** the cheapest **consumer NVMe** SSD each month from [Keepa](https://keepa.com) (Amazon retail price history), refreshed monthly; SATA and enterprise/datacenter drives are excluded, and per-drive posting glitches are filtered (see caveats). **2010–2016:** four _approximate_ pre-NVMe anchor points (no McCallum-equivalent flash dataset exists).

Live + approximate

HBM spend and cost breakdown

quarterly HBM spend ($B) and each component's share (%) of the accelerator bill of materials (HBM, logic, packaging, auxiliary)

[Epoch AI](https://epoch.ai/data-insights/ai-chip-component-cost-shares) (CC-BY): a modeled estimate, production-volume-weighted across the four largest accelerator designers (Nvidia, AMD, Google, Amazon); aggregate only, no per-company split.

External estimate

HBM $/GB by generation

HBM price per GB and per TB/s of bandwidth, by generation

Industry-analyst estimates — [TrendForce](https://www.trendforce.com) and [SemiAnalysis](https://www.semianalysis.com) (HBM has no public spot market); bandwidth from [JEDEC/Rambus](https://en.wikipedia.org/wiki/High_Bandwidth_Memory). HBM4 is projected.

Sparse estimate

### Caveats

*   $/GB defaults to the **cheapest retail price in nominal USD** (not contract or average; retail lags contract). Use the **Real USD** toggle for inflation-adjusted values — constant 2024 dollars via US CPI-U annual averages (BLS).
*   The cheapest listing often tracks an **end-of-life generation being cleared out**, not the leading edge — the per-generation chart shows this.
*   These are cheapest **listed** prices over time (via Keepa), **not confirmed sales**. For the SSD data, obvious posting errors are removed — any month a drive is listed **more than 60% below its own typical price** (e.g. a $130 SSD shown at $4) is dropped.
*   The DRAM line **splices two sources at mid-2024** (McCallum → Keepa); a small step there is expected, since Amazon's cheapest clearance can sit below McCallum's representative low.
*   HBM figures are **modeled estimates** (cost share and spend), not measured prices.

### Updates

DRAM and NAND $/GB refresh **monthly** from Keepa; HBM updates quarterly (Epoch AI). The McCallum backbone and HBM estimates are fixed. The downloadable [CSV](/assets/memory-prices/memory-prices.csv) lists every point with its source.

### About

Compiled and maintained by David Shim, Stanford DAM project. Questions or corrections: [hsshim@stanford.edu](mailto:hsshim@stanford.edu).

(function () { // Convert any $/MB or $/Mbit series to $/GB so everything shares one log axis. // 1 GB = 1000 MB (decimal); 1 GB = 8000 Mbit (8 bits/byte). var TO\_GB = { usd\_per\_gb: 1, usd\_per\_mb: 1000, usd\_per\_mbit: 8000 }; var STATUS = document.getElementById('mp-status'); // DRAM generation classification + a stable color per generation (shared by the // two breakdown charts so they read together). // DDR(1) = "DDR" not followed by 2-5 (DDR2-5 checked first). 'older' = pre-DDR (SDRAM/core). var GEN\_PATTERNS = \[\['DDR5', /DDR5/i\], \['DDR4', /DDR4/i\], \['DDR3', /DDR3/i\], \['DDR2', /DDR2/i\], \['DDR', /DDR(?!\[2-5\])/i\]\]; // Tableau 10 palette, picked so adjacent generations are clearly distinct. var GEN\_COLOR = { older: '#7f7f7f', DDR: '#17becf', DDR2: '#d62728', DDR3: '#1f77b4', DDR4: '#ff7f0e', DDR5: '#2ca02c' }; var GEN\_ORDER = \['older', 'DDR', 'DDR2', 'DDR3', 'DDR4', 'DDR5'\]; var GEN\_LABEL = { older: 'Pre-DDR (SDRAM/core)' }; function genOf(seriesName, text) { for (var i = 0; i < GEN\_PATTERNS.length; i++) if (GEN\_PATTERNS\[i\]\[1\].test(seriesName)) return GEN\_PATTERNS\[i\]\[0\]; for (var j = 0; j < GEN\_PATTERNS.length; j++) if (GEN\_PATTERNS\[j\]\[1\].test(text || '')) return GEN\_PATTERNS\[j\]\[0\]; return 'older'; } // Auto-rescale a (log) y-axis to the data visible in the current x-window, so // zooming into recent years isn't a flat line pinned to the bottom. Reusable // across charts; each keeps its own re-entrancy lock. var toMs = function (v) { return typeof v === 'number' ? v : new Date(v).getTime(); }; function attachYAutoscale(gd) { var lock = false; function rescale() { if (lock) return; var xr = gd.\_fullLayout.xaxis.range, x0 = toMs(xr\[0\]), x1 = toMs(xr\[1\]); var lo = Infinity, hi = -Infinity; gd.data.forEach(function (tr) { if (tr.visible === 'legendonly') return; for (var i = 0; i < tr.x.length; i++) { var t = toMs(tr.x\[i\]), y = tr.y\[i\]; if (t >= x0 && t <= x1 && y > 0) { if (y < lo) lo = y; if (y > hi) hi = y; } } }); if (!isFinite(lo) || !isFinite(hi)) return; var pad = ((Math.log10(hi) - Math.log10(lo)) \* 0.06) || 0.15; lock = true; Plotly.relayout(gd, { 'yaxis.range': \[Math.log10(lo) - pad, Math.log10(hi) + pad\] }) .then(function () { lock = false; }); } gd.on('plotly\_relayout', function (ev) { if (Object.keys(ev).some(function (k) { return k.indexOf('xaxis') === 0; })) rescale(); }); rescale(); } function showStatus(msg, isErr) { STATUS.style.display = 'block'; STATUS.innerHTML = (isErr ? '<span class="mp-err">' + msg + '</span>' : msg); } fetch('/assets/memory-prices/prices.json', { cache: 'no-store' }) .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }) .then(render) .catch(function (e) { showStatus('Could not load price data (' + e.message + '). The dataset may not have been ' + 'generated yet — run \_scripts/collect\_prices.py.', true); }); function hover(unit) { return '<b>%{fullData.name}</b><br>%{x|%Y-%m-%d}<br>' + '%{y:,.4g} ' + unit + '<br>%{text}<extra></extra>'; } function render(d) { document.getElementById('mp-updated').textContent = 'Last updated: ' + d.generated\_at; // ── Panel A: $/GB by memory TYPE — one line each for DRAM, NAND, HBM ── // Readable $ ticks: $0.01 … $100, then $1K / $1M / $1B / $1T at each power of ten. function usdTick(v) { if (v < 1e3) return '$' + (+v.toPrecision(3)); if (v < 1e6) return '$' + (v / 1e3) + 'K'; if (v < 1e9) return '$' + (v / 1e6) + 'M'; if (v < 1e12) return '$' + (v / 1e9) + 'B'; return '$' + (v / 1e12) + 'T'; } var GB\_TICKV = \[\], GB\_TICKT = \[\]; for (var \_e = -2; \_e <= 12; \_e++) { var \_v = Math.pow(10, \_e); GB\_TICKV.push(\_v); GB\_TICKT.push(usdTick(\_v)); } var logY = function (extra) { return Object.assign({ title: 'USD per GB', type: 'log', gridcolor: '#eee', tickvals: GB\_TICKV, ticktext: GB\_TICKT, automargin: true }, extra || {}); }; // US CPI-U annual averages (BLS, 1982-84=100) -> deflate $/GB into constant 2024 dollars. var CPI = {1957:28.1,1958:28.9,1959:29.1,1960:29.6,1961:29.9,1962:30.2,1963:30.6,1964:31.0, 1965:31.5,1966:32.4,1967:33.4,1968:34.8,1969:36.7,1970:38.8,1971:40.5,1972:41.8,1973:44.4, 1974:49.3,1975:53.8,1976:56.9,1977:60.6,1978:65.2,1979:72.6,1980:82.4,1981:90.9,1982:96.5, 1983:99.6,1984:103.9,1985:107.6,1986:109.6,1987:113.6,1988:118.3,1989:124.0,1990:130.7, 1991:136.2,1992:140.3,1993:144.5,1994:148.2,1995:152.4,1996:156.9,1997:160.5,1998:163.0, 1999:166.6,2000:172.2,2001:177.1,2002:179.9,2003:184.0,2004:188.9,2005:195.3,2006:201.6, 2007:207.342,2008:215.303,2009:214.537,2010:218.056,2011:224.939,2012:229.594,2013:232.957, 2014:236.736,2015:237.017,2016:240.007,2017:245.120,2018:251.107,2019:255.657,2020:258.811, 2021:270.970,2022:292.655,2023:304.702,2024:313.689,2025:322.0,2026:327.0}; var CPI\_REF = 313.689; // 2024 annual average -> constant 2024 dollars function cpiOf(x) { var y = +String(x).slice(0, 4); if (y < 1957) y = 1957; if (y > 2026) y = 2026; return CPI\[y\] || CPI\_REF; } function deflate(pp, real) { return real ? pp.map(function (p) { return { x: p.x, y: p.y \* (CPI\_REF / cpiOf(p.x)), text: p.text }; }) : pp; } function xZoom(g) { return (g.\_fullLayout && g.\_fullLayout.xaxis && g.\_fullLayout.xaxis.range) ? g.\_fullLayout.xaxis.range.slice() : null; } var realLab = function (real) { return real ? 'USD per GB (constant 2024$)' : 'USD per GB'; }; var realUnit = function (real) { return real ? 'USD/GB (2024$)' : 'USD/GB'; }; var byDate = function (a, b) { return toMs(a.x) - toMs(b.x); }; function typePts(cat) { var out = \[\]; d.series.filter(function (s) { return s.metric === 'usd\_per\_gb' && s.category === cat; }) .forEach(function (s) { for (var i = 0; i < s.x.length; i++) out.push({ x: s.x\[i\], y: s.y\[i\], text: s.text\[i\] || '', mcc: /McCallum/i.test(s.series) }); }); return out; } // DRAM = one clean line: the McCallum historical series, extended past its end by the // cheapest recent anchor per date (generations/sources are NOT split out here). var dramAll = typePts('DRAM'); var mcc = dramAll.filter(function (p) { return p.mcc; }).sort(byDate); var maxMcc = mcc.length ? toMs(mcc\[mcc.length - 1\].x) : 0; var ext = {}; dramAll.filter(function (p) { return !p.mcc && toMs(p.x) > maxMcc; }) .forEach(function (p) { if (!ext\[p.x\] || p.y < ext\[p.x\].y) ext\[p.x\] = p; }); var dramLine = mcc.concat(Object.keys(ext).map(function (k) { return ext\[k\]; })).sort(byDate); // Colorblind-safe (Okabe-Ito) colors + distinct dash/marker per series, so the // three lines are distinguishable even without relying on color. function typeTrace(name, pp, color, dash, symbol, unit) { return { name: name, type: 'scatter', mode: 'lines+markers', x: pp.map(function (p) { return p.x; }), y: pp.map(function (p) { return p.y; }), text: pp.map(function (p) { return p.text; }), hovertemplate: hover(unit || 'USD/GB'), marker: { color: color, size: 6, symbol: symbol || 'circle' }, line: { color: color, width: 2, dash: dash || 'solid' } }; } var gd = document.getElementById('chart-gb'); var GB\_TYPES = \[ \['DRAM', dramLine, '#0072B2', 'solid', 'circle'\], \['HBM', typePts('HBM').sort(byDate), '#E69F00', 'dash', 'square'\], \['NAND flash', typePts('NAND').sort(byDate), '#009E73', 'dot', 'diamond'\] \]; function renderGB(mode) { var real = mode === 'real', xr = xZoom(gd); var traces = GB\_TYPES.map(function (t) { return typeTrace(t\[0\], deflate(t\[1\], real), t\[2\], t\[3\], t\[4\], realUnit(real)); }); var layout = { margin: { t: 10, r: 16, b: 40, l: 64 }, yaxis: logY({ title: realLab(real) }), xaxis: { type: 'date', rangeslider: { thickness: 0.07 }, gridcolor: '#eee' }, hovermode: 'closest', legend: { orientation: 'h', y: -0.25 }, paper\_bgcolor: '#fff', plot\_bgcolor: '#fff' }; if (xr) layout.xaxis.range = xr; // keep the user's x-zoom when toggling nominal/real Plotly.newPlot(gd, traces, layout, { responsive: true, displaylogo: false, modeBarButtonsToRemove: \['lasso2d', 'select2d'\] }); attachYAutoscale(gd); } renderGB('nominal'); // ── Per-generation DRAM points (for the breakdown chart below) ───────── var pts = \[\]; d.series.filter(function (s) { return TO\_GB\[s.metric\] && s.category === 'DRAM' && s.series.indexOf('cheapest') < 0; }) .forEach(function (s) { var k = TO\_GB\[s.metric\]; for (var i = 0; i < s.x.length; i++) { pts.push({ x: s.x\[i\], y: s.y\[i\] \* k, text: s.text\[i\] || '', gen: genOf(s.series, s.text\[i\]), src: s.source }); } }); pts.sort(function (a, b) { return toMs(a.x) - toMs(b.x); }); var present = function (g) { return pts.some(function (p) { return p.gen === g; }); }; // ── Panel B: each DDR generation as its own overlapping line ─────────── var gd3 = document.getElementById('chart-gb-split'); var SPLIT\_GENS = GEN\_ORDER.filter(present); function renderGBSplit(mode) { var real = mode === 'real', xr = xZoom(gd3); var traces = SPLIT\_GENS.map(function (g) { var P = deflate(pts.filter(function (p) { return p.gen === g; }), real); return { name: GEN\_LABEL\[g\] || g, type: 'scatter', mode: 'lines+markers', x: P.map(function (p) { return p.x; }), y: P.map(function (p) { return p.y; }), text: P.map(function (p) { return p.text; }), hovertemplate: hover(realUnit(real)), marker: { color: GEN\_COLOR\[g\], size: 5 }, line: { color: GEN\_COLOR\[g\], width: 2 } }; }); var layout = { margin: { t: 10, r: 16, b: 40, l: 64 }, yaxis: logY({ title: realLab(real) }), xaxis: { type: 'date', rangeslider: { thickness: 0.07 }, gridcolor: '#eee' }, hovermode: 'closest', legend: { orientation: 'h', y: -0.22 }, paper\_bgcolor: '#fff', plot\_bgcolor: '#fff' }; if (xr) layout.xaxis.range = xr; Plotly.newPlot(gd3, traces, layout, { responsive: true, displaylogo: false, modeBarButtonsToRemove: \['lasso2d', 'select2d'\] }); attachYAutoscale(gd3); } renderGBSplit('nominal'); // ── Accelerator cost breakdown — relative (%) and absolute ($B) ────── // Stack order HBM (bottom, largest) -> Auxiliary (top); Tableau colors; legend HBM-first. var COMP = \[ { label: 'HBM', color: '#1f77b4', share: 'HBM cost share', spend: 'HBM spend' }, { label: 'Packaging', color: '#2ca02c', share: 'Packaging cost share', spend: 'Packaging spend' }, { label: 'Logic', color: '#ff7f0e', share: 'Logic cost share', spend: 'Logic spend' }, { label: 'Auxiliary', color: '#7f7f7f', share: 'Auxiliary cost share', spend: 'Auxiliary spend' } \]; function renderBreakdown(mode) { var key = mode === 'abs' ? 'spend' : 'share'; var hov = mode === 'abs' ? '$%{y:,.4g}B' : '%{y:.1f}% of BoM'; var traces = COMP.map(function (c) { var s = d.series.find(function (x) { return x.series === c\[key\]; }); return s ? { name: c.label, type: 'scatter', mode: 'lines', x: s.x, y: s.y, stackgroup: 'one', line: { width: 0.5, color: c.color }, fillcolor: c.color, hovertemplate: '<b>' + c.label + '</b><br>%{x|%Y-%m-%d}<br>' + hov + '<extra></extra>' } : null; }).filter(Boolean); if (!traces.length) { document.getElementById('chart-hbm-breakdown').innerHTML = '<p class="mp-sub">No data yet.</p>'; return; } var layout; if (mode === 'abs') { layout = { margin: { t: 10, r: 16, b: 40, l: 60 }, yaxis: { title: 'USD billion / quarter', gridcolor: '#eee', tickprefix: '$', rangemode: 'tozero' } }; } else { var xx = traces\[0\].x; // anchor the right axis (Plotly hides an overlaying axis with no trace) traces.push({ x: \[xx\[0\], xx\[xx.length - 1\]\], y: \[0, 100\], yaxis: 'y2', mode: 'lines', line: { width: 0 }, hoverinfo: 'skip', showlegend: false }); layout = { margin: { t: 10, r: 52, b: 40, l: 52 }, yaxis: { title: '% of accelerator BoM', gridcolor: '#eee', ticksuffix: '%', range: \[0, 100\] }, yaxis2: { overlaying: 'y', side: 'right', range: \[0, 100\], ticksuffix: '%', showgrid: false } }; } Plotly.newPlot('chart-hbm-breakdown', traces, Object.assign({ xaxis: { type: 'date', gridcolor: '#eee' }, hovermode: 'x unified', legend: { orientation: 'h', y: -0.2, traceorder: 'normal' }, paper\_bgcolor: '#fff', plot\_bgcolor: '#fff' }, layout), { responsive: true, displaylogo: false, modeBarButtonsToRemove: \['lasso2d', 'select2d'\] }); } renderBreakdown('abs'); // ── HBM price by generation — toggle $/GB or $/TBps, split by generation ── var HBM\_GEN = \[\['HBM4', /HBM4/i\], \['HBM3e', /HBM3e/i\], \['HBM3', /HBM3(?!e)/i\], \['HBM2e', /HBM2e/i\]\]; var HBM\_GEN\_COLOR = { HBM2e: '#7f7f7f', HBM3: '#1f77b4', HBM3e: '#ff7f0e', HBM4: '#2ca02c' }; function hbmGenOf(t) { for (var i = 0; i < HBM\_GEN.length; i++) if (HBM\_GEN\[i\]\[1\].test(t || '')) return HBM\_GEN\[i\]\[0\]; return 'HBM'; } function renderHbmGen(mode) { var isTbps = mode === 'tbps'; var s = d.series.find(function (x) { return x.series === (isTbps ? 'HBM $/TBps' : 'HBM $/GB'); }); if (!s) { document.getElementById('chart-hbm-gen').innerHTML = '<p class="mp-sub">No data yet.</p>'; return; } var byGen = {}; for (var i = 0; i < s.x.length; i++) { var g = hbmGenOf(s.text\[i\]); (byGen\[g\] = byGen\[g\] || \[\]).push({ x: s.x\[i\], y: s.y\[i\], t: s.text\[i\] }); } var hov = isTbps ? '$%{y:,.0f} / TBps<br>%{text}' : '$%{y:,.4g} / GB<br>%{text}'; var traces = \['HBM2e', 'HBM3', 'HBM3e', 'HBM4'\].filter(function (g) { return byGen\[g\]; }) .map(function (g) { var P = byGen\[g\]; return { name: g, type: 'scatter', mode: 'lines+markers', x: P.map(function (p) { return p.x; }), y: P.map(function (p) { return p.y; }), text: P.map(function (p) { return p.t; }), hovertemplate: '<b>%{fullData.name}</b><br>%{x|%Y-%m-%d}<br>' + hov + '<extra></extra>', marker: { color: HBM\_GEN\_COLOR\[g\], size: 8 }, line: { color: HBM\_GEN\_COLOR\[g\], width: 2.5 } }; }); var yaxis = isTbps ? { title: 'USD / TBps', tickprefix: '$', gridcolor: '#eee', rangemode: 'tozero', automargin: true } : { title: 'USD per GB', tickformat: '$,.2~f', gridcolor: '#eee', automargin: true }; Plotly.newPlot('chart-hbm-gen', traces, { margin: { t: 10, r: 16, b: 40, l: 64 }, yaxis: yaxis, xaxis: { type: 'date', gridcolor: '#eee' }, hovermode: 'closest', legend: { orientation: 'h', y: -0.2 }, paper\_bgcolor: '#fff', plot\_bgcolor: '#fff' }, { responsive: true, displaylogo: false, modeBarButtonsToRemove: \['lasso2d', 'select2d'\] }); } renderHbmGen('gb'); // Wire the toggle button groups (breakdown: abs/share; hbmgen: gb/tbps) var toggles = document.querySelectorAll('.mp-toggle'); for (var ti = 0; ti < toggles.length; ti++) { (function (tg) { tg.addEventListener('click', function (e) { var btn = e.target.closest && e.target.closest('button'); if (!btn || !tg.contains(btn)) return; var bs = tg.querySelectorAll('button'); for (var bi = 0; bi < bs.length; bi++) bs\[bi\].classList.remove('active'); btn.classList.add('active'); var chart = tg.getAttribute('data-chart'), mode = btn.getAttribute('data-mode'); if (chart === 'breakdown') renderBreakdown(mode); else if (chart === 'hbmgen') renderHbmGen(mode); else if (chart === 'units') renderGB(mode); else if (chart === 'units2') renderGBSplit(mode); }); })(toggles\[ti\]); } // Note if the live retail source hasn't produced data (it should, via Keepa). if (d.sources.indexOf('keepa') < 0) { showStatus('Note: live retail data has not been collected yet — the $/GB charts currently ' + 'show the historical backbone only.', false); } } })();

[Stanford  
University](https://www.stanford.edu)

*   [Stanford Home (link is external)](https://www.stanford.edu)
*   [Maps & Directions (link is external)](https://visit.stanford.edu/plan/)
*   [Search Stanford (link is external)](https://www.stanford.edu/search/)
*   [Emergency Info (link is external)](https://emergency.stanford.edu)

*   [Terms of Use (link is external)](https://www.stanford.edu/site/terms/ "Terms of use for sites")
*   [Privacy (link is external)](https://www.stanford.edu/site/privacy/ "Privacy and cookie policy")
*   [Copyright (link is external)](https://uit.stanford.edu/security/copyright-infringement "Report alleged copyright infringement")
*   [Trademarks (link is external)](https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4 "Ownership and use of Stanford trademarks and images")
*   [Non-Discrimination (link is external)](http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/ "Non-discrimination policy")
*   [Accessibility (link is external)](https://www.stanford.edu/site/accessibility "Report web accessibility issues")

© Stanford University.   Stanford, California 94305.

This site's design borrows heavily from the [Centaur](https://centaur.stanford.edu) project.

{% endraw %}
