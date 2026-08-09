---
layout: "story"
title: "How's Linear So Fast? A Technical Breakdown"
date: "2026-08-09"
permalink: "/2026/08/09/stories/how-s-linear-so-fast-a-technical-breakdown-e7d409/"
source: "Pointer"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://link.mail.beehiiv.com/ss/c/u001.PFjHD-ii0vvUj1FcNnOS5qqF3eJEkrxympSzSDDZUB29F4951mhY03iCawzSQ6poZedL3n7H-lMzRTsKnY9bvtDfJYA8pICpvyyNYWT98Xtr9WdPcSpxxaa7Q5dr87aiW7bH99aCL_Aga5sP1yM7s6XNsR0dpIXX-qcKInonA0sg3eMpFhwqdDFjNAhws05iVQ8F4KLX2lelAs6zNlNEq2JbYPQBDsWLeT4mKYI2vic4dn2BpnqRQKwjIdFm2jjdMYi4bZxpNC_yJgwMPmgEbXu8YmoEOE1L0caaBsL3bIuRMz2lPhjPprXO0bcSfeGmQvSMQw7ktrIDrrJ95UvO7veFhloJfj9aDKRl8k_ZzD6sUbC_J5gXQCJMdIsh6UPzMDeEo_tnDS2dDqWcXi2h91yQGqVhp7wzRzjrWKIvg4MAt44j00bLbg8MdJKZdHFhpEJv6EZS5SvJXU89qaAUWUgXLcU-LKWroXRDM6tl_ix8nKtB1MiiIRugmKe04bMYKzGJDou6PE7lVklMrUIXDm6YsQSoNgCfNVIjqpyhV9e_7nB9t7-zx0Cvue0K2iYiG8aoqIYvPNiyW4IU7E1f0iQnW3AY817YYLHqefClx-p22tLiy57rl-gfjnoYzpAbjI2QamyTwC_ZINrzCQtP9OZyf64jb7wpKpzIgghH2TfLWIUyQhU5cn3xn-0d8wJfuTQOh4O02_1fT9NR0IV8SlePm9KI-uWHeGLEnCb7DWDUCB8CwBIs8lDYfmhp0Dht25k3mByiFp7FS4OZQrSzUVOETOKQIFqyAtsKQqjICotHWhxMiljF6vHUh8fxCjXrEwjIk62Ipaz9_5BZgskfA-YTa-DMobMMiB0Gs7XPHQDvdri9yxNh43EdX77p8CHGMGO4yVX2wiiyIQEeCVxaIw/4ss/FlauVPTqTeGKDEKpox9WIg/h30/h001.G7SSlFo4BDZvptAqW21lKym9vBIYwiKtU334dtw5Csc"
original_url: "https://link.mail.beehiiv.com/ss/c/u001.PFjHD-ii0vvUj1FcNnOS5r8FWr9qP27WB7EkR0vdkxj495K0yi5xjiR9pdEZx1LA30waIHHGF89JhpLXxzqfaI8_rfnXufLwoLmPWBeXymhgXi49JAkuRak2GkB_W5XFjpGS4-FJD5C95tnm0oeshzIEzxEuz5HCBsM8rUdB7DSi98REg9bLvSk_NbhamH5pfVOTqXVUFHFkov3nJKz5nA/4ss/FlauVPTqTeGKDEKpox9WIg/h16/h001.NJJODsSmuXawdSMaZQhV4airSq3bTCuKHwJw8eGPrhA"
category: "Tech"
excerpt_separator: ""
---

{% raw %}
A few milliseconds is all it takes to update an issue in Linear. A traditional CRUD app doing the same thing takes about 300ms. How do they do it? There's no secret silver bullet to performance. The reality is that it's built from the ground up on the right foundation, then improved by countless decisions. My goal is to walk through some of the techniques that make Linear feel the way it does and help you implement the same.

*Couldn't fetch the full article — [read it on the original site ↗](https://link.mail.beehiiv.com/ss/c/u001.PFjHD-ii0vvUj1FcNnOS5r8FWr9qP27WB7EkR0vdkxj495K0yi5xjiR9pdEZx1LA30waIHHGF89JhpLXxzqfaI8_rfnXufLwoLmPWBeXymhgXi49JAkuRak2GkB_W5XFjpGS4-FJD5C95tnm0oeshzIEzxEuz5HCBsM8rUdB7DSi98REg9bLvSk_NbhamH5pfVOTqXVUFHFkov3nJKz5nA/4ss/FlauVPTqTeGKDEKpox9WIg/h16/h001.NJJODsSmuXawdSMaZQhV4airSq3bTCuKHwJw8eGPrhA).*

{% endraw %}
