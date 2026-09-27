---
title: "I publish the benchmarks my AI coding tool loses"
description: "Chisle cut an AI coding agent's output bill nearly in half across 20 live tasks. Here are the numbers, including the runs where it lost, and why those are the ones worth reading."
date: 2026-09-27
---

Every token-saving tool for AI coding agents has the same launch post. One prompt, one
screenshot, "70% fewer tokens!" in a font size usually reserved for clearance sales. The
prompt is always the one it wins.

[Chisle](https://github.com/JayPokale/Chisle) has that number too. It also has a section in
its README titled *"Pi arm: where the output axis lost."* This post is about why that section
exists, and why it's the one you should read first.

## What Chisle is

Chisle makes AI coding agents talk less, build less and say more, like a senior dev who
bills by the syllable. It works on three axes: terse prose, YAGNI-first code (skip the
abstraction nobody asked for), and compressing the tool output your agent reads back. One
command wires it into Claude Code, Cursor, Codex, Gemini, Copilot, Pi and five more. Zero
dependencies, MIT licensed.

## The headline, with its asterisks attached

Twenty live tasks. Same model, same prompts; the only difference between arms is the
injected ruleset. Every figure is billed output tokens as a share of a bare model with no
tool installed:

| | total bill | average task | worst case | backfires |
|---|--:|--:|--:|--:|
| caveman | 80% | 98% | 424% | 6 / 20 |
| ponytail | 68% | 91% | 227% | 8 / 20 |
| **Chisle** | **52%** | **69%** | **173%** | **1 / 20** |

Chisle cut the 20-task bill nearly in half. In the July re-run every answer from every arm
was graded correct, so nobody bought those savings with wrong answers.

Now the asterisks, because a table without them is a sales page:

- The suite measures single-turn prompts with no tools. That isolates how the model
  *writes*. It is not whole-session cost: a real agentic session is dominated by tool output
  and cached input.
- Twenty tasks is twenty tasks. The per-task correlation between answer size and savings is
  weak (Spearman ρ = −0.15). Treat the shape as a strong signal, not a law of physics.

## The average hides the good part

Split the same 20 tasks at their median length and the tools separate:

- **Short answers:** Chisle and caveman are level at 84%. There isn't much to cut from a
  three-line reply, and the ruleset's own overhead is at its worst.
- **Long answers:** Chisle drops to 45%. caveman manages 79%.

On explanation-only prompts both specialist tools landed *above* 100%: a tool whose entire
job is writing less made the model write more than using nothing at all. Chisle stayed
under, at 87%, which is a smaller win than on code and worth saying plainly.

## Where it lost

**Short coding questions.** caveman beats Chisle 62% to 70%. On a small code question
there's little to skip, and the ruleset costs more than it saves. The tool earns its keep
on the long ones.

**The Pi run.** Six tasks with Pi on `gpt-5.5`: ponytail finished at 59% of the baseline,
Chisle at 61%, 63 tokens behind in total. The coding gap is almost all one task: `auth-bug`
accounts for 283 of the 337 tokens Chisle lost on code. On that task Chisle wrote the
shortest answer of any arm and was the only one to find the real defect, a seconds-versus-
milliseconds mismatch; ponytail flipped a `>` to a `>=`. The grader failed every arm anyway,
which says more about the task than about the tools.

**The claim I retired.** The June write-up said Chisle "never backfires (0/14)". The July
re-run didn't reproduce it. One comparison prompt, REST versus GraphQL, came back as a wall
of pro/con bullets, the exact structure Chisle's own rules ban, and cost 145% of a fair
baseline. The claim is retired, the rule is fixed, and the fixed version measured 93% over
three trials. All of it sits in the repo, next to the numbers that look better.

## Why publish the losses

Because the worst case is the number you actually pay for. An average is what a tool does on
a good week; the worst case is what it does to your bill on the day you're not watching.
caveman's worst day cost 4.2× a bare model. ponytail, a tool built to write less, hit 2.3×.
Chisle's worst day was 1.7×, it happened once, and the fix is merged.

And because a benchmark that never loses isn't measuring anything. If your tool wins every
row, you either built the benchmark around your tool or you stopped running it.

## The other half of the bill

Output is only half of it. Across 171 real sessions, tool output was 67.5% of what sat in
context, and every byte of it is re-sent on every later request (the median session made
171 of them). Chisle's hook shrinks that output before the model reads it: it strips
terminal noise, keeps the head and tail of huge outputs while salvaging error lines from the
middle, and collapses exact repeats. No model calls, no network.

Replayed over those sessions it saved about 61k tokens one-shot, around 46% off every
eligible output, and that is a floor, since each saved byte also stops being re-sent. The
deduplication tier scored zero hits on that corpus, so it stays labelled speculative until
it earns a number.

## Try it, then check my work

```bash
npx chisle
```

`--uninstall` puts everything back. Every number above is recomputed from raw data committed
to [the repo](https://github.com/JayPokale/Chisle), including the runs where Chisle lost. If
you find a prompt where it backfires, open an issue. It'll go in the table.
