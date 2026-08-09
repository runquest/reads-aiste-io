---
layout: "story"
title: "When 'if' slows you down, avoid it"
date: "2026-08-09"
permalink: "/2026/08/09/stories/when-if-slows-you-down-avoid-it-6a76bc/"
source: "Programming Digest"
subscription_email: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://programmingdigest.net/subscribers/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/unsubscribe"
original_url: "https://programmingdigest.net/links/22719/91ee7b33-c28b-4a8e-bab4-e5b8bc4f3f47/email"
category: "Performance"
excerpt_separator: ""
---

{% raw %}
Branch mispredictions slow CPUs down because they force the processor to discard queued work and start over. Writing branchless code removes unpredictable jumps and lets the CPU run at full speed. A simple filter loop rewritten to use a conditional increment instead of an if statement ran nearly 10 times faster on an Apple M1. Compilers cannot make this change automatically because they cannot safely assume unconditional memory writes are always allowed.

---

Branch‑Avoidant Programming :root{--font-mono:Menlo,"Cascadia Code","Liberation Mono",Consolas,monospace} body{background:#fff;max-width:960px;margin:40px 0;padding:0 16px; font-family:sans-serif;font-size:1.05em;line-height:1.6;color:#222} p{margin:.6em 0 1em} h2,h3{background:#fea;border-radius:6px;font-weight:600;padding:8px 14px;} h3{padding:6px 14px;} h2{margin:32px 0 12px;font-size:1.25em} h3{margin:24px 0 10px;font-size:1.15em} :not(pre)>code{background:#ffd;border:1px solid #ddb; border-radius:4px;padding:2px 5px;font-size:.9em} a:hover{background:#feb} table{width:100%;border-collapse:collapse;margin:24px 0;font-size:.95em} th,td{padding:10px 14px;border:1px solid #ddd;text-align:left} th{background:#f6f6f6;font-weight:600} pre,pre code,code{font-family:var(--font-mono)} @media(max-width:600px){ body{margin:2px;padding:0;font-size:0.9em} p{margin:.4em 2px} h2,h3{margin:8px 2px;border-radius:0} h2{padding:5px 8px} h3{padding:5px 8px} pre{margin:8px 2px;padding:8px;border-radius:0} table{margin:12px 0} th,td{padding:6px 6px} hr{margin:16px 0} } pre { background:#ffd; border:1px solid #ed8; border-radius:8px; padding:12px; margin:16px 0; margin-right:24px; max-height:70vh; overflow:auto; font-size:.80em; line-height:1.4; font-family:var(--font-mono); position:relative; }

## When ‘if’ slows you down, avoid it

With modern CPUs, **avoiding branch mispredictions** is a key method for speeding up programs. One of the most effective ways to reduce mispredictions is to simply avoid branches.

Let’s consider a simple task: Iterate through an array and copy all numbers less than 500 into a new array. A straightforward implementation in C looks like this:

```
smlen = 0;
for (int i = 0; i < 1000; i++) {
    if (numbers[i] < 500) {
        small_numbers[smlen] = numbers[i];
        smlen += 1;
    }
}
```

If the numbers are randomly distributed, the result of the ‘if’ condition becomes unpredictable for the CPU’s branch predictor. This results in a high misprediction rate, significantly impairing performance because the processor must repeatedly empty its pipeline and restart execution.

We can avoid this problem by using a branchless approach:

```
smlen = 0;
for (int i = 0; i < 1000; i++) {
    small_numbers[smlen] = numbers[i];
    smlen += (numbers[i] < 500);
}
```

While this version introduces an unconditional store (writing to memory even if the condition isn’t met), its cost is typically far lower than the heavy penalty of a branch misprediction.

**Performance Comparison**

To get meaningful results, we run both routines for 1000 iterations using 100,000 random numbers.

```
// SPDX-License-Identifier: MIT
#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>

#define SIZE 100000
int numbers[SIZE];
int small_numbers[SIZE];
int smlen;

double ts(void) {
    static double t0;
    struct timeval tv;
    gettimeofday(&tv, NULL);
    double h = t0;
    t0 = tv.tv_sec + tv.tv_usec / 1000000.0;
    return t0 - h;
}
void init(void) {
    srand(1);
    for (int i = 0; i < SIZE; i++) numbers[i] = rand() % 1000;
    ts();
}
void small_if(void) {
    smlen = 0;
    for (int i = 0; i < SIZE; i++) {
        if (numbers[i] < 500) {
            small_numbers[smlen] = numbers[i];
            smlen += 1;
        }
    }
}
void small_bl(void) {
    smlen = 0;
    for (int i = 0; i < SIZE; i++) {
        small_numbers[smlen] = numbers[i];
        smlen += (numbers[i] < 500);
    }
}
int main(void) {
    init();
    for (int i = 0; i < 1000; i++) small_if();
    printf("Time if: %.3f\n", ts());
    init();
    for (int i = 0; i < 1000; i++) small_bl();
    printf("Time bl: %.3f\n", ts());
}
```

Benchmark results were obtained on an Apple M1 with `-O1` optimization. On this benchmark, `-O3` did not yield additional speedup, only larger generated code.

```
Time if: 0.345
Time bl: 0.036
```

**Assembly Analysis**

Using `objdump -d --no-show-raw-insn`, we can see the difference in how the CPU processes these loops.

With the _if_ version, the compiler generates a conditional branch `b.gt`.

```
ldr     w13, [x10], #0x4           ; Load numbers[i]
cmp     w13, #0x1f3                ; Compare with 499 (0x1f3)
b.gt    0x100000678                ; Branch if greater (The bottleneck)
str     w13, [x12, w8, sxtw #2]    ; Store value in small_numbers[j]
add     w8, w8, #0x1               ; j += 1
```

With the Branchless version the compiler uses the `cinc` (Conditional Increment) instruction.

```
ldr     w13, [x10], #0x4           ; Load numbers[i]
str     w13, [x12, w8, uxtw #2]    ; Unconditional store to small_numbers[j]
cmp     w13, #0x1f4                ; Compare with 500
cinc    w8, w8, lt                 ; Conditional increment (No branch)
```

In this version, there is no jump based on the data. The control flow is perfectly linear, allowing the CPU to use its full pipeline width.

**Why doesn’t the compiler optimize the ‘if’ case automatically?**

The compiler doesn’t know the nature of your data. If only a tiny fraction of numbers were less than 500, the branch version might actually be faster because the predictor would almost always be right.

The branchless version performs a write operation (`str`) every single time. The compiler cannot safely assume that it is permitted to write to memory if a write operation in the original source code was intended to occur only under a specific condition - for example, to avoid writing past the end of an allocated buffer.

**On x86\_64**

Intel Xeon (E5-2680)

```
Time if: 0.576
Time bl: 0.110
```

With the _if_ version, the compiler generates a conditional branch `jg`.

```
mov    edx, DWORD PTR [rax]     ; Load numbers[i]
cmp    edx, 0x1f3               ; Compare value with 499 (0x1f3)
jg     1260                     ; Branch if greater
movsxd rdi, ecx                 ; 'if' body
mov    DWORD PTR [r9+rdi*4],edx ; Store value in small_numbers[j]
add    ecx, 0x1                 ; j += 1
```

With the Branchless version the compiler uses the `setle` instruction.

```
mov    ecx, DWORD PTR [rax]     ; Load numbers[i]
movsxd rsi, edx                 ; Prepare current index j
mov    DWORD PTR [rdi+rsi*4],ecx; Unconditional store in small_numbers[j]
cmp    ecx, 0x1f3               ; Compare value with 499
setle  cl                       ; cl = 1 if condition met, else 0 (No branch)
movzx  ecx, cl                  ; Zero-extend cl to ecx
add    edx, ecx                 ; j += (0 or 1)
```

**The Branch Predictor’s Memory**

Reducing the size to 10,000 elements or fewer narrows the performance gap because the branch predictor’s history tables are large enough to capture the pattern. By repeatedly processing the same array, the CPU learns the outcome of every ‘if’ condition, achieving near-perfect prediction accuracy. Increasing the size to 100,000 overwhelms this internal memory.

**Quicksort**

Quicksort is very well suited for branchless programming, since the algorithm’s main task is to partition the data by moving all elements smaller than a pivot to one side.

[A Fast Branchless Quicksort](https://github.com/chkas/blqsort)

* * *

christof.kaser@gmail.com

{% endraw %}
