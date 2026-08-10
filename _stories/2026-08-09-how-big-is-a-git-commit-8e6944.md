---
layout: "story"
title: "How Big Is A Git Commit?"
date: "2026-08-09"
permalink: "/2026/08/09/stories/how-big-is-a-git-commit-8e6944/"
slug: "how-big-is-a-git-commit-8e6944"
source: "Pointer"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://link.mail.beehiiv.com/ss/c/u001.PFjHD-ii0vvUj1FcNnOS5qqF3eJEkrxympSzSDDZUB29F4951mhY03iCawzSQ6poZedL3n7H-lMzRTsKnY9bvtDfJYA8pICpvyyNYWT98Xtr9WdPcSpxxaa7Q5dr87aixq5vJ-Qw1L7gIyWMpCypEOlfXAJm8SQXIm1s7koyy1uCxC7zXuh07rmNPoUGkVv1gKpPEmpnlpiJFRjhqtOsj5IPIisKSGm6bfnPNBb7Os_uB2VVcdMG9bYc6piswwPej6jIwWj01iywjRr50IXFQSKaxPm4ZrdXmrxqvKM393XlcMsOq6gCMoS0C0j4HA1PvXrlhpQEld-gUUeLw4g22XSEMWMM0rWvQNEIuLnCbhCCm0uCKYqat4jKd3YN4nVHAcMCNQ2Ei2GPykfDHxJYVdco3KJX9l_5_H6GMKBlXDS2VJ9uvj1KdE5hvtRDA9JpsnR5JJq8QDHsBioqn8iUu2PSvhMbiubNTphxednjfeRB90DtJQjS-8NSA6TRu0zRbBERlc9vv94VDRiUhF99FmH7qo2VK1oeV_Jt6u7tbyorAOmxErkh7wKn0Smc_5XQRHXd3rPRWgE2WGFygE5_g37YwMdVHLcl3K8bnt4r-3bJbbgfnzVAsUn1p-3X7DwAKEjwRTq5GEQm0T0BNnZwBHPZ4zVWO8iZmjM0-MrtHIBiUCB-w-1LHsLC-onSDSWLza-QTye7jV6s_6dBH0jyCZEwQJz1v6pog6Ys9INTeYxqRrIb-UZfOKTnt4Emg3iN7_Duxbo-6kxT3fCdcClBFkAOisx45q-pqFhHRn1hyXoEReY0GafKB-yw2hqgKANAVRThb3TLuFB4oTYA4sFOmAH6gey7V58qCPOxWbHvy4HvHJ4MlMksMvE7L0nfn14qm57Kwj8zbo_4PLphSDSiPA/4sl/h7_ivzkxSm-YefoUD5CPxQ/h30/h001.fEtOnaRhwDCITS_nqM_VTSWLrYI5DtFh6HjTL9DQUa0"
original_url: "https://link.mail.beehiiv.com/ss/c/u001.71LCQkoHczeoiEaexlZjtikp-LYAe0nYTPl4jnMxfDmVDG4FIxDj0DOZHluVl2Ndr0LC0tx2h4aYBXY7gViXb1-mTl9AiZOoHIN8ympScFh1ghDMEjmc3pAWuXpy6hTgVGP875sawlHMWwpyzKTujxBk5kJ1imhH0fT18l32x8c/4sl/h7_ivzkxSm-YefoUD5CPxQ/h16/h001.d5Ow4ZgE9EgKosFPvnSQlkeOdbK-MC8B5OOKad9NMUU"
category: "Git"
excerpt_separator: ""
---

{% raw %}
It depends. Git stores "objects" as zlib compressed data. So the exact size of a commit will depend on the compressibility of your files (which is basically a function of the amount of repetition in them).

*Couldn't fetch the full article — [read it on the original site ↗](https://link.mail.beehiiv.com/ss/c/u001.71LCQkoHczeoiEaexlZjtikp-LYAe0nYTPl4jnMxfDmVDG4FIxDj0DOZHluVl2Ndr0LC0tx2h4aYBXY7gViXb1-mTl9AiZOoHIN8ympScFh1ghDMEjmc3pAWuXpy6hTgVGP875sawlHMWwpyzKTujxBk5kJ1imhH0fT18l32x8c/4sl/h7_ivzkxSm-YefoUD5CPxQ/h16/h001.d5Ow4ZgE9EgKosFPvnSQlkeOdbK-MC8B5OOKad9NMUU).*

{% endraw %}
