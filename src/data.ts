export const links = {
  github: "https://github.com/JayPokale",
  linkedin: "https://www.linkedin.com/in/JayPokale",
  twitter: "https://x.com/JayPokale35",
  leetcode: "https://leetcode.com/u/jaypokale",
  codeforces: "https://codeforces.com/profile/rdx_panther",
  email: "mailto:jay.pokale.35@gmail.com",
};

export const observations = [
  {
    id: "01",
    figure: 2285,
    prefix: "",
    suffix: "",
    label: "LeetCode peak",
    note: "Guardian · top 0.94%. The Easy ones were for morale.",
    href: links.leetcode,
  },
  {
    id: "02",
    figure: 1799,
    prefix: "",
    suffix: "",
    label: "Codeforces",
    note: "Expert. One short of 1800 — proof it's not fake.",
    href: links.codeforces,
  },
  {
    id: "03",
    figure: 20,
    prefix: "",
    suffix: "k+",
    label: "Dare2Solve members",
    note: "Told math was scary. Showed up anyway.",
    href: "https://dare2solve.vercel.app",
  },
  {
    id: "04",
    figure: 3,
    prefix: "",
    suffix: "",
    label: "Theses in progress",
    note: "Most people write one. Sleep has filed a complaint.",
    href: "#research",
  },
];

/** The one with the stars. Count is fetched live; this is the fallback. */
export const flagship = {
  repo: "JayPokale/Chisle",
  title: "Chisle",
  stars: 564,
  href: "https://github.com/JayPokale/Chisle",
  site: "https://chisle.jaypokale.me",
  pitch:
    "Makes AI coding agents talk less, build less, and say more — like a senior dev who bills by the syllable. 44% of the output tokens, eleven agents, zero dependencies.",
  roast:
    "The only tool in its class that publishes the benchmarks it loses. Honesty: still not a growth strategy, somehow working anyway.",
};

export type Item = {
  title: string;
  note: string;
  href?: string;
  tag?: string;
};

export const ownRepos: Item[] = [
  {
    title: "typed-numarray",
    tag: "npm",
    note: "Typed arrays with normal-array manners. Published 2023, still working — rarer than it should be.",
    href: "https://www.npmjs.com/package/typed-numarray",
  },
  {
    title: "competitive",
    tag: "JS",
    note: "The STL JavaScript never shipped. Competitive programming in JS was a choice; my rating stands by it.",
    href: "https://github.com/JayPokale/competitive",
  },
];

export const upstream: Item[] = [
  {
    title: "Ballerina",
    tag: "4 merged",
    note: "Layout shifts killed, a 404'ing Windows certificate revived. My React, their standards, everyone survived.",
    href: "https://github.com/pulls?q=is%3Apr+author%3AJayPokale+repo%3Aballerina-platform%2Fballerina-dev-website+is%3Amerged",
  },
  {
    title: "token-harness leaderboard",
    tag: "open",
    note: "Entered Chisle into someone else's benchmark. Confidence is a dependency, and we have zero.",
    href: "https://github.com/pi-infected/token-harness-optimizer-leaderboard/pull/1",
  },
  {
    title: "Hacktoberfest ’22",
    tag: "6 merged",
    note: "Burger menus, overflow bugs, a digital clock. The motive was the T-shirt. The fixes were real.",
  },
];

/** stdlib-js, p5.js, open-sauced, appwrite, ballerina-lang — closed, unmerged, character-building. */
export const graveyard = ["stdlib-js", "p5.js", "open-sauced", "appwrite", "ballerina-lang"];

export const projects: Item[] = [
  {
    title: "GST Legal RAG",
    tag: "in production",
    note: "Retrieval over Indian tax law that abstains instead of inventing citations. Several professionals bill hourly for the opposite.",
    href: "https://jaypokale.me",
  },
  {
    title: "Case-law Knowledge Graph",
    tag: "private",
    note: "Scraped every tax judgment it could find and made them cite each other. Feeds the RAG above.",
  },
  {
    title: "Forge",
    tag: "private",
    note: "Durable task orchestration on Next.js and Cloudflare Workers. Tasks survive crashes; I mostly do too.",
  },
  {
    title: "Office Management",
    tag: "4 platforms",
    note: "Web, backend, Android, iOS. One developer, zero mercy.",
    href: "https://github.com/JayPokale/Office-management",
  },
  {
    title: "AuthorsLog",
    tag: "archive",
    note: "Multi-user blogging platform, from the era when I said yes to everything.",
    href: "https://authorslog.vercel.app",
  },
];

export const research = {
  institution: "IIT Hyderabad",
  area: "Certifiably Robust GraphRAG for Multi-Hop Fraud Reasoning",
  summary:
    "My thesis work sits where retrieval systems meet adversaries — two theses, one grudge. The first: certified robustness for graph-based RAG — what can you still guarantee about a multi-hop answer when some of what it retrieved was poisoned? The second, ‘The Locality–Integrity Law’: how much damage keyed cache pollution can do before anyone notices, and exactly what it costs the attacker. Underneath both, the theory of ranking from pairwise comparisons.",
  readings: [
    {
      title: "Certifiably Robust RAG against Retrieval Corruption",
      authors: "Xiang, Wu, Zhong, Wagner, Chen, Mittal — ICML 2024",
    },
    {
      title: "Simple, Robust and Optimal Ranking from Pairwise Comparisons",
      authors: "Shah & Wainwright — JMLR 2018",
    },
    {
      title: "Active Ranking using Pairwise Comparisons",
      authors: "Jamieson & Nowak — NIPS 2011",
    },
  ],
};

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
