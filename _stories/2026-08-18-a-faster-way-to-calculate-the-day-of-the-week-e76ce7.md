---
layout: "story"
title: "A Faster Way To Calculate The Day Of The Week"
date: "2026-08-18"
permalink: "/2026/08/18/stories/a-faster-way-to-calculate-the-day-of-the-week-e76ce7/"
slug: "a-faster-way-to-calculate-the-day-of-the-week-e76ce7"
source: "Pointer"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://link.mail.beehiiv.com/ss/c/u001.PFjHD-ii0vvUj1FcNnOS5qqF3eJEkrxympSzSDDZUB29F4951mhY03iCawzSQ6poZedL3n7H-lMzRTsKnY9bvtDfJYA8pICpvyyNYWT98Xtr9WdPcSpxxaa7Q5dr87aiZahWeR40q0BPD_2O0XYb6Lfv-NexSL9rnTRpnyDM7RGb8Eh0CSodiTvP9jOh8FgE_UJp23_36sK977CKyW95Q4OaGWPWFlK3fEKjqt5M-Xvfdkd1LClEg7VFEOusIrVOQ8bSqwsBzk0xStkyo0Pjl6ljF7tgERjL2irGx11HH_HpHWkaHl8PKEBpi0RW2oLvrD6-BavRmv_XbO0DDT-4Rxkq7wZ0pJVdZi1XquCYI17HyJTnsfhaP-sPjv8ZAaBe-UGft-9Ky2J00A1AywnvAD7zpm15I-gtUS6TpRa28IXjElxHCdJtlCb2ElYmY8oFP_AXHfDK1zsaRTo5FyatsmuSEG8SaIExMH3MxCvphMMSGlL1ErhCR3TuulYL6E1Qf1-Dje1zpsfCnIbhT3XakJ14wYI_Yf8AqsAZg-79HsjeCH73pwR8UN5x1FwfcP0fyr4kDIjvM3ctQOdAvA0ajZ7Cj8QSHZ64wch4L51BpKZi80tliBWWXBKxHSoiIXmm5JW-iLcTP72L7nl_14axiRY10nhIsahL3nY2PncHwwZJLnAjuaBStnCOeu8slsfB6-rUub3PONLZ14-AwIPgmay7oX05WG8yts7kwbVTazKXKcJUlQf_fKAGFUjobAyamvEWSDVMcv1V9ZkwJgWTIhDWgrj9Iy7XzMQc0YrfTYCiOoP7GyscsdR3xzlORfQQmijmPHKvoO_b6dV7ysxQ_KhEGlTDYFkhNe3oLznWcxDNHkvKdziZBucJXeJxkyBG1TyBar2QENasUU8uBamb8A/4ta/OyopF7NsSv26P7unt-J9LA/h27/h001.GiheHj3PbfbO729eXFRx58i9m1S0_Yw0mwWklY6SNiw"
original_url: "https://link.mail.beehiiv.com/ss/c/u001.3a5P_SwQzY5x8USD2q4p0l8gUKvbYrgEKp_rKPl8sOcfA7X2E-DFJLHydvjVZGxrhA1PrJ56CQeXZQeCTtvXtmATAqyZeGuTSFDz-yShPuFcJz8tY-KDpC87CWy3HbWsEYujksx9YQsHHi2xcOM_nV3eW0XylBb1VBBeQUB0m28/4ta/OyopF7NsSv26P7unt-J9LA/h14/h001.cNVsZE5sXXbOHts2-JTM8lzj5nHUAyttTVi7nf_3-mM"
category: "Performance"
excerpt_separator: ""
---

{% raw %}
Throughout this article I will present a range of really fast functions to solve this problem, tuned for different use cases (throughput vs latency, different platforms etc.). Each outperforms existing solutions, and many have a latency of just a single multiplication plus two cycles.

*Couldn't fetch the full article — [read it on the original site ↗](https://link.mail.beehiiv.com/ss/c/u001.3a5P_SwQzY5x8USD2q4p0l8gUKvbYrgEKp_rKPl8sOcfA7X2E-DFJLHydvjVZGxrhA1PrJ56CQeXZQeCTtvXtmATAqyZeGuTSFDz-yShPuFcJz8tY-KDpC87CWy3HbWsEYujksx9YQsHHi2xcOM_nV3eW0XylBb1VBBeQUB0m28/4ta/OyopF7NsSv26P7unt-J9LA/h14/h001.cNVsZE5sXXbOHts2-JTM8lzj5nHUAyttTVi7nf_3-mM).*

{% endraw %}
