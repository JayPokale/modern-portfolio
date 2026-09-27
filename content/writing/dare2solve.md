---
title: "Dare2Solve: 209 math puzzles, 20,000 people, and a website that came full circle"
description: "In 2021 a mechanical engineering student started posting math puzzles with their solutions. For six months it was one almost every day. Here's what the archive says, and what it taught me."
date: 2026-09-27
---

In 2021 I was a mechanical engineering student at GCOEY, the pandemic had moved life
indoors, and I started posting math puzzles online, each with its solution. The plan, as I
wrote on the site's About page back then, was "to provide daily new maths puzzles and their
solutions to create interest about maths in young students."

"Daily" is a big word to put on an About page. So I checked the archive.

## What the archive says

The original blog holds 209 puzzle posts. The first two went up in April 2021; Dare2Solve
officially started in May, which means the puzzles predate the project, the most on-brand
thing about it. Then, from August 2021 through January 2022, the blog published 181 puzzles
in six months:

```mermaid
xychart-beta
  title "Puzzles published per month"
  x-axis [Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, Jan, Feb]
  y-axis "posts" 0 --> 35
  bar [2, 18, 6, 0, 25, 31, 32, 31, 32, 30, 2]
```

Thirty-two puzzles in a thirty-one-day month is not "about daily". It's more than daily,
twice. July has a zero in it, and I'm choosing to believe July was a well-earned break.

The puzzles were the kind that look innocent in a thumbnail: a semicircle inside a
rectangle and the two areas its diagonal cuts off, the fraction of a square that's shaded
blue, an infinite series with a finite answer, and *x<sup>y</sup> + y<sup>x</sup> = a, find the
integers x and y*. Each one came with a worked solution, because a puzzle without a
solution is just a way to make a teenager feel bad.

## 20,000 people who were told math is scary

The community around it grew past 20,000 people. None of them were paid, plenty of them,
I'd bet, had been told at some point that math wasn't for them, and they showed up anyway
for a square with some of it shaded blue. That's still the best evidence I have that difficulty is
mostly a rumor.

## A website that came full circle

The site has moved more often than the puzzles did:

```mermaid
flowchart LR
  accTitle: Where Dare2Solve has lived
  blogger["Blogger<br/>2021"] --> wp["WordPress"]
  wp --> next["Next.js + GraphQL<br/>on Vercel, 2022"]
  next --> back["Blogger again<br/>dare2solve.jaypokale.me"]:::accent
```

Blogger, then WordPress, then a Next.js site on Vercel pulling its content over GraphQL,
and today it's back on Blogger at its own subdomain. The loop closed on the platform that was already hosting all 209 posts, which is
either poetic or the sunk-cost fallacy. I've decided it's poetic.

## What it taught me

Writing a solution for a stranger is different from finding one. You have to know which
step they'll trip on, and explain that step before they reach it. I wrote 209 of those,
and every "editorial" on this site, including the one the whole site is framed as, owes
something to that habit.

The mechanical engineering student eventually became a top 1% competitive programmer and a
researcher at IIT Hyderabad. The math page didn't plan that. It just kept showing up every
day, and so did I.

The puzzles are still up at [dare2solve.jaypokale.me](https://dare2solve.jaypokale.me).
Pick one. The solution is right there, but try first.
