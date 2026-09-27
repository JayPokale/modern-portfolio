import type { CodeforcesStats, LeetCodeStats } from "./lib/stats";

export const SITE_URL = "https://jaypokale.me";

export const links = {
  github: "https://github.com/JayPokale",
  linkedin: "https://www.linkedin.com/in/JayPokale",
  twitter: "https://x.com/JayPokale35",
  leetcode: "https://leetcode.com/u/jaypokale",
  codeforces: "https://codeforces.com/profile/rdx_panther",
  instagram: "https://www.instagram.com/jaypokale.dev/",
  facebook: "https://www.facebook.com/jay.pokale.35",
  email: "mailto:jay.pokale.35@gmail.com",
  // Blogger hasn't issued a certificate for this domain yet; switch to https once it has
  dare2solve: "http://dare2solve.jaypokale.me",
};

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

/** The four stat cards. The numbers arrive live (see lib/stats); the jokes don't. */
export const observations = (lc: LeetCodeStats, cf: CodeforcesStats) => [
  {
    id: "01",
    figure: lc.peak,
    suffix: "",
    label: "LeetCode peak",
    fact: `${lc.badge} · top ${lc.topPercent}% worldwide`,
    quip: "The Easy ones were for morale.",
    href: links.leetcode,
  },
  {
    id: "02",
    figure: cf.rating,
    suffix: "",
    label: "Codeforces",
    fact: `${titleCase(cf.rank)} · rdx_panther`,
    quip:
      cf.rating === 1799
        ? "One point short of 1800. Too specific to be made up."
        : "The account is new. The grudge against hard problems is not.",
    href: links.codeforces,
  },
  {
    id: "03",
    figure: 20,
    suffix: "k+",
    label: "Dare2Solve members",
    fact: "the math community I founded",
    quip: "Told math was scary. Showed up anyway.",
    href: links.dare2solve,
  },
  {
    id: "04",
    figure: 3,
    suffix: "",
    label: "Theses in progress",
    fact: "IIT Hyderabad",
    quip: "Most people write one. Sleep has filed a complaint.",
    href: "#lab",
  },
];

/** The one with the stars. Count is fetched live; this is the fallback. */
export const flagship = {
  repo: "JayPokale/Chisle",
  title: "Chisle",
  stars: 564,
  href: "https://github.com/JayPokale/Chisle",
  site: "https://chisle.jaypokale.me",
  fact: "Makes AI coding agents talk less, build less and say more: 44% of the output tokens, eleven agents, zero dependencies.",
  quip: "Like a senior dev who bills by the syllable.",
  roast:
    "The only tool in its class that publishes the benchmarks it loses. Terrible growth strategy. Weirdly effective.",
};

/** `fact` is the plain claim, set small; `quip` is the punchline, set loudest. */
export type Item = {
  title: string;
  tag?: string;
  fact?: string;
  quip: string;
  href?: string;
};

export const ownRepos: Item[] = [
  {
    title: "typed-numarray",
    tag: "npm",
    fact: "dynamic typed arrays for JavaScript",
    quip: "Published in 2023, still working. In npm years, that's retirement age.",
    href: "https://www.npmjs.com/package/typed-numarray",
  },
  {
    title: "competitive",
    tag: "JS",
    fact: "the STL JavaScript never shipped",
    quip: "Competitive programming in JavaScript was a choice. My rating stands by it.",
    href: "https://github.com/JayPokale/competitive",
  },
];

export const upstream: Item[] = [
  {
    title: "Ballerina",
    tag: "4 merged",
    fact: "layout shifts fixed, a 404ing certificate link revived",
    quip: "My React, their standards. Everyone survived review.",
    href: "https://github.com/ballerina-platform/ballerina-dev-website/pulls?q=is%3Apr+author%3AJayPokale+is%3Amerged",
  },
  {
    title: "token-harness leaderboard",
    tag: "open",
    fact: "entered Chisle into someone else's benchmark",
    quip: "Zero dependencies. Infinite confidence.",
    href: "https://github.com/pi-infected/token-harness-optimizer-leaderboard/pull/1",
  },
  {
    title: "Hacktoberfest ’22",
    tag: "6 merged",
    fact: "burger menus, overflow bugs, a digital clock",
    quip: "The motive was the T-shirt. The fixes were real.",
  },
];

/** Upstream PRs that were closed without merging. */
export const graveyard = ["stdlib-js", "p5.js", "open-sauced", "appwrite", "ballerina-lang"];

export const projects: Item[] = [
  {
    title: "GST Legal RAG",
    tag: "in production",
    fact: "retrieval over Indian GST law",
    quip: "Abstains instead of inventing citations. Some professionals bill hourly for the opposite.",
  },
  {
    title: "Case-law Knowledge Graph",
    tag: "private",
    fact: "tax judgments, linked by who cites whom",
    quip: "LinkedIn for judgments, except the endorsements are binding.",
  },
  {
    title: "Forge",
    tag: "private",
    fact: "durable task orchestration on Next.js and Cloudflare Workers",
    quip: "Tasks survive crashes. I mostly do too.",
  },
  {
    title: "Office Management",
    tag: "4 platforms",
    fact: "web, backend, Android and iOS",
    quip: "One developer. Four platforms. Zero mercy.",
    href: "https://github.com/JayPokale/Office-management",
  },
  {
    title: "AuthorsLog",
    tag: "archive",
    fact: "multi-user blogging platform",
    quip: "From the era when I said yes to everything.",
  },
];

export const theses = [
  {
    title: "Corroboration Is All You Can Certify",
    field: "GraphRAG security",
    fact: "Poison a knowledge graph; I prove how much of the answer is still true.",
    quip: "Usually less than the answer thinks.",
  },
  {
    title: "Cache Me If You Can",
    field: "semantic-cache integrity",
    fact: "Semantic caches can serve an attacker's answer to your question. Found the law behind it, then the loophole: attack success 63% → 0.",
    quip: "Condolences to the attackers.",
  },
  {
    title: "Some Memories Take Time",
    field: "continual learning",
    fact: "Zipf's law already fixes how many learning timescales a model needs: about nine.",
    quip: "Every deployed system has two. Nobody asked Zipf.",
  },
];

export const toolbox: { group: string; items: string[] }[] = [
  {
    group: "languages — fluent in semicolons",
    items: ["C++", "TypeScript", "JavaScript", "Python", "Go", "LaTeX"],
  },
  {
    group: "algorithms — the DSA years",
    items: [
      "data structures",
      "graph theory",
      "dynamic programming",
      "number theory",
      "computational geometry",
    ],
  },
  {
    group: "AI / retrieval — the thesis arc",
    items: [
      "RAG pipelines",
      "hybrid retrieval (BM25 ⊕ dense)",
      "cross-encoder reranking",
      "LLM evals & judges",
      "multi-agent systems",
      "MCP",
      "PyTorch",
      "NLP",
    ],
  },
  {
    group: "web — the rent payers",
    items: [
      "React / Next",
      "SolidJS",
      "Node / NestJS",
      "tRPC",
      "GraphQL",
      "Tailwind",
      "three.js",
      "GSAP / Motion",
    ],
  },
  {
    group: "infra & security — trust issues, professionally applied",
    items: [
      "MongoDB",
      "MySQL",
      "Docker",
      "GitHub Actions",
      "Cloudflare Workers",
      "Vercel",
      "web security / CTFs",
      "network security",
      "Arch Linux (btw)",
    ],
  },
];
