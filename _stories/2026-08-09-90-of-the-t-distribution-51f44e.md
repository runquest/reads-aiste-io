---
layout: "story"
title: "90% of the t distribution"
date: "2026-08-09"
permalink: "/2026/08/09/stories/90-of-the-t-distribution-51f44e/"
slug: "90-of-the-t-distribution-51f44e"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22964/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Statistics"
excerpt_separator: ""
---

{% raw %}
Gosset found that using a normal distribution to calculate confidence intervals gives results that are too narrow, because it treats an estimated standard deviation as exact. He developed correction factors based on sample size to fix this. With just two data points, you can estimate a standard deviation by multiplying the difference between them by 1.3, which helps judge whether a result is truly unusual.

---

# 90 % of the t distribution

by

kqr

, scheduled 2026-05-26

Tags:

*   [forecasting](tags.html#forecasting)
*   [statistics](tags.html#statistics)

![ninety-percent-of-the-t-distribution.jpg](../image/banner/ninety-percent-of-the-t-distribution.jpg)

William Sealy Gosset was great. He improved beer at Guinness by using the statistics that existed at the time. Not happy with that, he invented new statistics to brew even better beer. The things he invented are used all over the place now, but Guinness wanted to keep him a secret weapon, so they made him publish his results under the fake name _Student_.

One thing Gosset realised is that it is wrong to compute 90 % confidence intervals for the mean by taking the standard deviation of the sample, and _assume a normal distribution_, like-a-so:

\\\[\\hat{\\mu} \\pm 1.645 \\hat{\\sigma}\\\]

When we do this we get too narrow a range, because while we recognise \\(\\hat{\\mu}\\) is just an approximation, we are assuming we know \\(\\sigma = \\hat{\\sigma}\\) with certainty!

Gosset came up with correction tables based on the number of samples used in the estimation of the confidence interval, to account for our uncertainty in the estimation of \\(\\hat{\\sigma}\\). Here are some useful values, rounded to be easier to memorise:

 

Number of samples

Correction factor for 90 % interval

2

4×

3

2×

4

1.5×

5

1.3×

6–8

1.2×

9–20

1.1×

To use this table, count how many samples the estimation of the standard deviation is based on, multiply the estimation of the standard deviation \\(\\hat{\\sigma}\\) with the correction factor, and then multiply again with 1.645 to get a 90 % interval. If the number of samples is greater than 20, the naïve estimation of the standard deviation is good enough for a 90 % interval.

Thus, if we have 7 samples and these have lead us to estimate a mean of 32 minutes with a standard deviation of 8 minutes, we should not think of the 90 % confidence interval as

\\\[ 32 \\pm 8×1.645\\\]

but rather as

\\\[32 \\pm 8×1.2×1.645\\\]

Already with 7 samples, the actual 90 % confidence interval is fairly close to the naïve one, being only a factor of 1.2 too narrow. With fewer samples, the uncertainty in the standard deviation is larger, so we should estimate a similarly wider confidence interval.11 A stronger confidence interval, like the 95 % or even 99 % interval will be correspondingly much wider after the Student t correction.

This is the table for 90 % intervals because that’s what I need most often. Gosset didn’t actually come up with any specific approximation table; he came up with the entire _Student’s t_ distribution which lets us create any table of correction factors we need.

# [Variation from just two values](#variation-from-just-two-values)

Although the above table is what you need for getting a 90 % confidence interval, we can also use a similar technique to get a sloppy estimation of the standard deviation based on just two samples. The sample standard deviation of two values is given by

\\\[\\frac{\\left(\\mathrm{high} - \\mathrm{low}\\right)}{\\sqrt{2}}\\\]

This massively underestimates the actual standard deviation, because it is based on just two values. But one standard deviation corresponds to a t score of 1.846, so we can multiply the above by that, and we get a better approximation of the standard deviation.

If we round the constant factors for convenience, we’ll find that the appropriate estimation of the standard deviation (corrected through the t distribution) is 1.3 times the distance between the two numbers we have. That’s incredibly useful in practice!

## [Example of how to use it](#example-of-how-to-use-it)

I’m sure you’ve been in a situation where someone has asked something like “Is 49 litres a good result?”

You don’t know, of course, so you ask “Compared to what?”

Maybe they respond “Compared to 43 litres!”

That sounds impressive, but you don’t want me to chastise you, so you say, “That still tells me nothing because I don’t know the variation inherent in the process. Give me another typical result!”

They might then say “Uhh, 47 litres.”

Now you let your guard down and think, “Oh, 49 is above both the typical results. Very good!”

And then i chastise you!

So you turn on your brain instead.

You have received two typical numbers: 43 and 47. These don’t tell you much about how the inherent variation, but they do tell you a little. The distance between them is four. If we multiply that by 1.3, we get our estimation of the standard deviation, which is something like 5 litres. That means 49 litres is less than one standard deviation away from the midpoint of 45 litres. That’s a normal result, not unusually good or bad.

# Sidenotes

[1](#fnr.1)

A stronger confidence interval, like the 95 % or even 99 % interval will be correspondingly much wider after the Student t correction.

{% endraw %}
