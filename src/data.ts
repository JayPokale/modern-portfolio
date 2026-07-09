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
    label: "LeetCode peak contest rating",
    note: "Guardian · top 0.94% of 874,830 · 1,637 solved, 341 of them Hard. The Easy ones were for morale.",
    href: links.leetcode,
  },
  {
    id: "02",
    figure: 1770,
    prefix: "",
    suffix: "",
    label: "Codeforces rating",
    note: "Expert as rdx_panther — in the account's first month. The account is new; the grudge against hard problems is not.",
    href: links.codeforces,
  },
  {
    id: "03",
    figure: 20,
    prefix: "",
    suffix: "k+",
    label: "Mathematicians reached",
    note: "Dare2Solve — 20,000 people who were told math is scary showed up anyway",
    href: "https://dare2solve.vercel.app",
  },
  {
    id: "04",
    figure: 2,
    prefix: "",
    suffix: "",
    label: "Theses in progress",
    note: "Certified GraphRAG + the Locality–Integrity Law, at IIT Hyderabad — ask about either, lose an afternoon each",
    href: "#research",
  },
];

export type Work = {
  index: string;
  title: string;
  year: string;
  description: string;
  tech: string[];
  href?: string;
  badge?: string;
};

export const works: Work[] = [
  {
    index: "W1",
    title: "RDXmin",
    year: "2026",
    description:
      "A token-efficiency toolkit that makes AI coding agents talk less, build less, and say more — like a senior dev who bills by the syllable. Halved the output bill across 20 measured tasks, receipts committed to the repo. One command wires it into eight different agents; also ships as a Claude Code plugin. Turns out attention was not all you need — fewer tokens are. Yes, it edited its own portfolio entry to be shorter.",
    tech: ["JavaScript", "Node", "Claude Code", "agent hooks"],
    href: "https://github.com/JayPokale/RDXmin",
    badge: "open source",
  },
  {
    index: "W2",
    title: "GST Legal RAG",
    year: "2026",
    description:
      "A production-grade retrieval system over Indian GST law. Hybrid questions route the arithmetic to an exact calculator and the legal half to retrieval; an LLM-judged eval harness refuses to write a baseline when the judge tier is unhealthy; ingestion survives a crash at document 80,000 and resumes at 80,001. Low-confidence answers abstain rather than fabricate citations — a discipline some professionals bill hourly for.",
    tech: ["Python", "RAG", "eval harness", "CI"],
    href: "https://jaypokale.me",
    badge: "in production",
  },
  {
    index: "W3",
    title: "typed-numarray",
    year: "2023",
    description:
      "An npm package for dynamic typed arrays in JavaScript — int8 through float64 with normal array ergonomics, faster sorts, and explicit memory control. Published, documented, and still quietly doing its job, which is more than can be said for most things published in 2023.",
    tech: ["JavaScript", "npm"],
    href: "https://www.npmjs.com/package/typed-numarray",
    badge: "npm",
  },
  {
    index: "W4",
    title: "competitive",
    year: "2023",
    description:
      "The standard template library JavaScript never shipped. Data structures and algorithms for competitive programming, each documented with JSDoc — built while climbing the ratings, maintained for everyone climbing behind. Doing competitive programming in JavaScript was a choice. I stand by it. My rating stands by it too.",
    tech: ["JavaScript", "algorithms"],
    href: "https://github.com/JayPokale/competitive",
    badge: "open source",
  },
];

export const appendix = [
  {
    title: "ProofMatch",
    note: "N-way procurement match (PO ↔ GRN ↔ invoice ↔ spec) with rupee-level evidence — Kaya AI hackathon, IIT India 2026",
  },
  {
    title: "Case-law Knowledge Graph",
    note: "scraper + citation graph over Indian tax judgments — feeds the GST RAG its case law",
  },
  {
    title: "Forge",
    note: "durable task-orchestration monorepo — Next.js, Cloudflare Workers, opinions",
  },
  {
    title: "IITH Security Coursework",
    note: "web CTF challenges & network-attack labs — legally sanctioned crime",
  },
  {
    title: "AuthorsLog",
    note: "multi-user blogging platform — built back when I said yes to everything",
    href: "https://authorslog.vercel.app",
  },
  {
    title: "Ballerina",
    note: "OSS contribution — my React, their standards, everyone survived",
    href: "https://github.com/orgs/ballerina-platform/projects/362",
  },
  {
    title: "Office Management",
    note: "web, backend, Android & iOS — one developer, four platforms, zero mercy",
    href: "https://github.com/JayPokale/Office-management",
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
