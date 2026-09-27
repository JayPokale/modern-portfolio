export const SITE_URL = "https://jaypokale.me";

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
    fact: "Guardian · top 0.94% worldwide",
    quip: "The Easy ones were for morale.",
    href: links.leetcode,
  },
  {
    id: "02",
    figure: 1799,
    prefix: "",
    suffix: "",
    label: "Codeforces",
    fact: "Expert · rdx_panther",
    quip: "One point short of 1800. Too specific to be made up.",
    href: links.codeforces,
  },
  {
    id: "03",
    figure: 20,
    prefix: "",
    suffix: "k+",
    label: "Dare2Solve members",
    fact: "the math community I founded",
    quip: "Told math was scary. Showed up anyway.",
    href: "https://dare2solve.vercel.app",
  },
  {
    id: "04",
    figure: 3,
    prefix: "",
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
    roast:
      "Poison a knowledge graph; I tell you, with proof, how much of the answer is still true. Usually less than the answer thinks.",
  },
  {
    title: "Cache Me If You Can",
    field: "semantic-cache integrity",
    roast:
      "Your semantic cache will serve an attacker's answer to your question. Found the law behind it, then the loophole. Attack success: 63% → 0.",
  },
  {
    title: "Some Memories Take Time",
    field: "continual learning",
    roast:
      "Zipf's law already decided how many learning timescales a model needs — about nine. Every deployed system has two. Nobody asked Zipf.",
  },
];

export const toolbox: { group: string; items: string[] }[] = [
  {
    group: "languages",
    items: ["C++", "TypeScript", "Python", "Go", "LaTeX"],
  },
  {
    group: "AI / retrieval",
    items: ["RAG", "hybrid retrieval", "rerankers", "LLM evals", "agents & MCP", "PyTorch"],
  },
  {
    group: "web",
    items: ["React / Next", "Node / NestJS", "tRPC", "GraphQL", "three.js", "Motion"],
  },
  {
    group: "infra & trust issues",
    items: ["Docker", "GitHub Actions", "Cloudflare Workers", "web security / CTFs", "Arch (btw)"],
  },
];
