<div align="center">

# Jay Pokale — Problem J.

**The portfolio of Jay Pokale, written as a competitive-programming problem and its editorial.**

[![Live site](https://img.shields.io/badge/live-jaypokale.me-ff4d00?style=flat-square)](https://jaypokale.me)
[![CI](https://github.com/JayPokale/modern-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/JayPokale/modern-portfolio/actions/workflows/ci.yml)
![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs)
![React 19](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)

<a href="https://jaypokale.me"><img src="docs/preview.jpg" alt="The jaypokale.me hero: the name Jay Pokale beside a particle portrait" width="100%"></a>

</div>

## The concept

A competitive-programming problem comes with a statement, a few observations and an
editorial that walks to the solution. This site borrows that structure: the hero is the
problem statement, the stats are the observations, the work is the solution in parts, and
the footer is the judge's verdict. Every entry pairs a plain fact with a punchline, and the
punchline is set louder.

```mermaid
flowchart TD
    P["<b>Problem J.</b><br/>the statement"] -- "the judges demanded proof" --> O["<b>§1 Observations</b><br/>ratings, members, theses"]
    O -- "so he started shipping his own" --> S["<b>§2 Open source</b><br/>Chisle with live stars, repos, upstream PRs"]
    S -- "some things never call home" --> R["<b>§3 Personal projects</b><br/>private and production work"]
    R -- "IIT Hyderabad funds the grudge" --> L["<b>§4 The lab</b><br/>three theses"]
    L -- "every villain has an origin story" --> G["<b>§5 Origin</b><br/>Dare2Solve and the toolbox"]
    G -- "spoiler: it's green" --> V(["<b>Verdict: Accepted</b>"])
    classDef accepted fill:#12833d,stroke:#3ecf6a,color:#ffffff
    class V accepted
```

## How it works

The page is prerendered to static HTML at build time. Only the interactive pieces hydrate
in the browser.

```mermaid
flowchart LR
    subgraph build ["next build"]
        direction TB
        data["src/data.ts<br/>copy, links, stats"] --> sections["Section components"]
        github[("GitHub API")] -- "Chisle stars<br/>revalidated hourly" --> sections
        sections --> html["Static HTML<br/>sitemap.xml, robots.txt, llms.txt"]
    end
    html -- "Vercel, jaypokale.me" --> islands
    subgraph browser ["Browser"]
        direction TB
        islands["Client components"] --> motion["Motion<br/>reveals, counters, stamp"]
        islands --> portrait["three.js<br/>particle portrait"]
        islands --> theme["Theme picker<br/>paper and ink"]
        theme -- "jp-theme event" --> portrait
    end
```

## Features

- **Static and fast.** One prerendered page. Chisle's GitHub star count is fetched at build
  time and refreshed hourly (ISR), falling back to the last known count if the API is down.
- **Search- and LLM-friendly.** Metadata API (Open Graph, Twitter, canonical URL), JSON-LD
  `Person` schema, `sitemap.xml`, `robots.txt` and an [`llms.txt`](public/llms.txt) summary
  for language-model crawlers.
- **Particle portrait.** `Jay.png` is sampled into roughly 12,000 squares drawn by a custom
  shader; the cursor scatters them, and a grayscale source is tinted automatically.
- **Themes.** Dark or light "paper" with any accent "ink" — six presets or a colour picker.
  The choice persists in `localStorage` and is applied before first paint, so nothing flashes.
- **Responsive and calm.** Works down to 320px wide; the film grain and the portrait hold
  still under `prefers-reduced-motion`.
- **No trackers, no cookies, no contact form.** Email works. The form never did.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, static prerendering), React 19 |
| Language | TypeScript, strict mode |
| Styling | Tailwind CSS 4 on CSS design tokens |
| Animation | [Motion](https://motion.dev) |
| Graphics | [three.js](https://threejs.org) with custom GLSL shaders |
| Hosting | Vercel |
| CI | GitHub Actions — type-check and build on every push and pull request |

## Project structure

```text
src/
├── app/
│   ├── layout.tsx          metadata, JSON-LD, fonts, theme bootstrap
│   ├── page.tsx            section order and the lines between sections
│   ├── globals.css         design tokens, type styles, grain overlay
│   ├── robots.ts
│   └── sitemap.ts
├── components/             one file per section, plus shared pieces
│   ├── Problem.tsx         hero: statement, profile links, portrait
│   ├── ParticlePortrait.tsx
│   ├── OpenSource.tsx      fetches Chisle's live star count
│   └── …
└── data.ts                 every word of copy, every link and stat
public/                     portrait, favicons, llms.txt
```

## Getting started

Requires Node.js 20 or newer; [`.nvmrc`](.nvmrc) pins the version CI uses.

```sh
npm ci
npm run dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-checks and builds the production site |
| `npm start` | Serves the production build |
| `npm run typecheck` | Generates Next's route types, then runs `tsc` |

## Editing content

All copy lives in [`src/data.ts`](src/data.ts); components only decide layout. Entries pair a
`fact`, set small, with a `quip`, set loudest. To add a project, append it to `projects`; to
add an open-source repo, append it to `ownRepos` or `upstream`.

## Deployment

Every push to `main` deploys to Vercel. The site is served at
[jaypokale.me](https://jaypokale.me); `jaypokale.vercel.app` redirects there.

## License

© Jay Pokale. All rights reserved.
