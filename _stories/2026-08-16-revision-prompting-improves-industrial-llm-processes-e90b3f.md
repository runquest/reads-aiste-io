---
layout: "story"
title: "Revision Prompting improves industrial LLM processes"
date: "2026-08-16"
permalink: "/2026/08/16/stories/revision-prompting-improves-industrial-llm-processes-e90b3f/"
slug: "revision-prompting-improves-industrial-llm-processes-e90b3f"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=f6b93b62-9498-11f1-b407-617d207c3f6a%26pt=campaign%26pv=4%26spa=1786356070%26t=1786359902%26s=74af2209c230a330bc89fc8a8548c43ac279017a75ea47abb8646f99d405931b/1/0100019feb58f02b-b9cd628c-a490-43d3-8cb6-db5f7e5b0340-000000/psYd67HjVJrQUzip8J0z9-_IyH9_mJ4GMRMtx76jGhI=452"
original_url: "https://revisionprompting.info/"
category: "AI"
excerpt_separator: ""
---

{% raw %}
Revision Prompting supplies LLMs with the original input, the original output, and the changes to the input, and instructs it to produce a patch that updates the original output accordingly.

---

Revision Prompting    

# Revision Prompting improves industrial LLM processes

_Disclaimer: A human wrote this page._

## TL;DR

_Industrial prompting_ refers to automated processes that prompt LLMs repeatedly with the same instruction on different inputs.

Often, an industrial prompt needs to re-process an input after it has been updated.

_Revision Prompting_ is a technique that makes industrial prompting of updated inputs **faster, cheaper, and more consistent**. To this end, Revision Prompting supplies the LLM with the original input, the original output, and the changes to the input, and instructs it to produce a patch that updates the original output accordingly.

## The Problem that Revision Prompting solves

We prompt LLMs in two ways:

Ad-hoc prompting

Prompts LLMs manually, with a custom instruction per call. Examples

*   Asking a coding agent to implement a new feature.
*   Asking a chatbot to draft an email.

Industrial prompting

Prompts LLMs as part of an automated process, with the same instruction across calls. Examples

*   Extracting structured information from invoices as part of an accounting pipeline.
*   Translating documentation pages into other languages as part of a release process.

Industrial prompting typically processes some Input data with an Instruction to produce some Output. Whenever the Input gets updated, industrial prompting naively re-runs the Instruction on the UpdatedInput to produce the UpdatedOutput. This approach has two downsides:

Lack of consistency

LLMs are non-deterministic, so the UpdatedOutput differs from the original Output beyond what the UpdatedInput necessitates.

Full processing time and token costs

Although only parts of the input have changed, we produce the UpdatedOutput in full. This is as expensive as the production of the original Output.

_Revision prompting_ resolves both downsides of naive re-runs by operating on the input and output **revisions** instead of the full input and output.

## How Revision Prompting works

Assume you have processed some Input with an Instruction to produce some Output by prompting an LLM with

Instruction: Input

Now, Input has been updated, and you also want to process the UpdatedInput. Revision Prompting processes the UpdatedInput by constructing the RevisionPrompt as

Instruction: Input produced Output.

The input got updated as follows: `diff(Input, UpdatedInput)`.

Please produce a patch to update the output.

The LLM responds to the RevisionPrompt with the OutputPatch that we apply to the Output to obtain the UpdatedOutput.

Example

You translate the product page of an e-bike to German with the prompt

InstructionTranslate to German: Input`The Vela 3 e-bike has a range of 80 km.   Its battery recharges in three hours.   The frame is made from recycled aluminium.   Every Vela 3 includes a two-year warranty.`

and the LLM produces

Output`Das E-Bike Vela 3 hat eine Reichweite von 80 km.   Sein Akku lädt in drei Stunden auf.   Der Rahmen besteht aus recyceltem Aluminium.   Jedes Vela 3 hat zwei Jahre Garantie.`

Later, a battery upgrade increases the range from 80 km to 100 km. Instead of re-translating the whole page, you prompt

InstructionTranslate to German: Input`The Vela 3 e-bike has a range of 80 km.   Its battery recharges in three hours.   The frame is made from recycled aluminium.   Every Vela 3 includes a two-year warranty.` produced Output`Das E-Bike Vela 3 hat eine Reichweite von 80 km.   Sein Akku lädt in drei Stunden auf.   Der Rahmen besteht aus recyceltem Aluminium.   Jedes Vela 3 hat zwei Jahre Garantie.` The input got updated as follows: diff(Input, UpdatedInput)\- The Vela 3 e-bike has a range of 80 km.\+ The Vela 3 e-bike has a range of 100 km. Please produce a patch to update the output.

The LLM responds with

OutputPatch\- Das E-Bike Vela 3 hat eine Reichweite von 80 km.\+ Das E-Bike Vela 3 hat eine Reichweite von 100 km.

Applying the OutputPatch to the original Output produces the updated translation.

The OutputPatch contains only two lines of text instead of a full re-translation. Unchanged content stays consistent with the original translation.

## Why Revision Prompting works

Consistency

By supplying the LLM with the input revision `diff(Input, UpdatedInput)`, we ensure that the OutputPatch is limited to what the input changes necessitate. Everything not touched by the OutputPatch remains identical to the original Output. Therefore, the UpdatedOutput is **consistent** with the original Output.

Time & cost savings

Revision Prompting feeds the original Output back in as part of the prompt, so the LLM only generates the short OutputPatch. Most tokens thereby move from the output to the input. Since processing time scales roughly with the length of the output, this eliminates most of the processing time. It also converts most of the output token cost into much cheaper input token cost. If the re-run happens within a couple of minutes of the original run, prompt caching reduces part of the input token cost as well.

## Revision Prompting in practice

Revision Formats

The ideal formats for encoding `diff(Input, UpdatedInput)` and the OutputPatch depend on the Instruction. The [POSIX `diff` utility](https://pubs.opengroup.org/onlinepubs/9799919799/utilities/diff.html) is a useful generic format. For JSON outputs, the [JSON Patch](https://jsonpatch.com/) format works well.

Expected Savings

The time & cost reduction scales with the size of the input changes and the sensitivity of the output to changes in the input. In our own industrial prompts, Revision Prompting reduces time by ~80%, and costs by ~65%.

We invented Revision Prompting because our industrial prompts were too slow, inconsistent, and expensive. We use Revision Prompting in production. If you would like to know more, [reach out to us](mailto:robert.hoenig@pqt.ch)!

{% endraw %}
