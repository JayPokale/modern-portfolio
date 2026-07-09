# Jay Pokale — Problem J.

Personal portfolio, framed as a competitive-programming problem and its editorial:
the hero is the problem statement, stats are *Observations*, projects and research
are the solution chapters, and the footer is the verdict — **Accepted**.

Live: https://jaypokale.vercel.app

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Motion (scroll reveals, counters, the verdict stamp)
- three.js — interactive particle portrait in the hero
  (square-mosaic style, after Codrops' "Interactive Particles with Three.js")

## Features

- Theme system: dark/light "paper" plus any accent "ink" — six presets
  or a free color picker; persists in localStorage, no FOUC
- Fully responsive; respects `prefers-reduced-motion`
- No trackers, no cookies, no contact form (email works — the form never did)

## Develop

```sh
npm install
npm run dev     # local dev server
npm run build   # type-check + production build
```
