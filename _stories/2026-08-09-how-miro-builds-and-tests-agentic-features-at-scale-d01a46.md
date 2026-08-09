---
layout: "story"
title: "How Miro Builds And Tests Agentic Features At Scale"
date: "2026-08-09"
permalink: "/2026/08/09/stories/how-miro-builds-and-tests-agentic-features-at-scale-d01a46/"
source: "Pointer"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://link.mail.beehiiv.com/ss/c/u001.PFjHD-ii0vvUj1FcNnOS5qqF3eJEkrxympSzSDDZUB29F4951mhY03iCawzSQ6poZedL3n7H-lMzRTsKnY9bvtDfJYA8pICpvyyNYWT98Xtr9WdPcSpxxaa7Q5dr87ai6uFLAnJHPUYNZ_J7BqCFg8SfGCSZ2RvxxQ_YXyeI5APHOvfIwzedOgRs16yUt2Mdrzk65sKhvT5_Vex3H6Myts4hOcs230f8vNEvyALU2s2Ucm-k0Fp3QX-LomohRJxkfIljgcgIFvwagNG6l0IpCyL7p-Ych1YvXBrqhEPGcPIYJrn3pqSHK-xH6bbWgu0qoaOjwjMuF4HnskyBDXRyk6ZszOgGsc4xFF3x7zAU2qZW1_gmKq6gW6JM3BkFDC2YpY1Gkciuxv6tdRpJLuWdgkqsrUCA90T9WeZOlJJyZjyfsdhUnu6k_V9Reiw-afbfU80PQU8vNMwY6E7iUfqgbW9FMP8OQPrPr6CA_piENKg9rr62ub9ohhq1GhSOut4pseBRvORT1QbQ6Zkyy_HWRdIufhwRo5EaSdMES20mLAIKA0d_jVS03L9xx1JkOuZZ4oF4LXXkBbIg_NQ5g1rrMGpvL_5xhbzWjuVRriyG7hXR1HYeAxx34jQD1VrmjmftuqF5uIDp6rk_DUJuthMuHf_uwoUjAoatjhMsscf83wTk7gowxckwSawjFYr6RWINTrZEkNl7FlJhVBguKKwD8exFF6tz3LGmmILdGT7HNsvTaxX1ogD4QI9pXflVT1mDJzAY82HkPgIRK3mYBq1Tmtx5yhaIMxiDrcJTtJf54Vp8cPnWJ2tsoaXnnkSryF6tFrWlSgc6bCJwG1zb3n4R0EwW0cjJrCnw9gCcMZ96IVQZd1tuvy9lKiw76em4NpiHu42ssaqkjFgapFbL7pt-xQ/4sw/eBYeDbHiRy6heWHd_5s8-A/h27/h001.-_QYU8Js0GSLkyAzNSHIzqVN-IFIAjkAN8eQIWNrC5A"
original_url: "https://link.mail.beehiiv.com/ss/c/u001.3a5P_SwQzY5x8USD2q4p0m895QuVtqvkW11dSkgIg8I7yY6GUJWSXHFbDSHBQ6GNO97jmxS8vjQnwyyz4O2h9BR-DYNcxQc37-aKgDZlUstD0r3LTm4e0KFs3UMbZO0oT_ZRwffOYUv7GO1JJAoaJKP74yn-GMBaipXL1l8B_mP-trBWG_d-oD-jEMyyxo0sMmLOlJnZY45RskdLcKnO7WgTwO-MBlaHtWuWUfnpCVT-M-7JcY4akkqPGlK6et_YWNWZz0Jm_KQnMgaLX4OSCN1GyaCXBNsUPtZC-o0P1z-5wOtTKAJnj_RZ3DIAiVEg/4sw/eBYeDbHiRy6heWHd_5s8-A/h12/h001.b0CEs04LFaMF-iw8E9tza6cSOu3AQCS-JMplxXBqfEk"
category: "Testing"
excerpt_separator: ""
---

{% raw %}
Miro's AI team was building a new AI architecture across nearly 250 microservices, and one shared environment meant tests constantly collided. With Signadot, they moved to verifying changes in parallel with lightweight environments in the cluster. Agents drive full end-to-end tests against live services and iterate before a PR opens. Engineers get verified working code without waiting for slots.

*Couldn't fetch the full article — [read it on the original site ↗](https://link.mail.beehiiv.com/ss/c/u001.3a5P_SwQzY5x8USD2q4p0m895QuVtqvkW11dSkgIg8I7yY6GUJWSXHFbDSHBQ6GNO97jmxS8vjQnwyyz4O2h9BR-DYNcxQc37-aKgDZlUstD0r3LTm4e0KFs3UMbZO0oT_ZRwffOYUv7GO1JJAoaJKP74yn-GMBaipXL1l8B_mP-trBWG_d-oD-jEMyyxo0sMmLOlJnZY45RskdLcKnO7WgTwO-MBlaHtWuWUfnpCVT-M-7JcY4akkqPGlK6et_YWNWZz0Jm_KQnMgaLX4OSCN1GyaCXBNsUPtZC-o0P1z-5wOtTKAJnj_RZ3DIAiVEg/4sw/eBYeDbHiRy6heWHd_5s8-A/h12/h001.b0CEs04LFaMF-iw8E9tza6cSOu3AQCS-JMplxXBqfEk).*

{% endraw %}
