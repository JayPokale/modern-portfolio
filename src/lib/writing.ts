import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";
import { SITE_URL } from "../data";

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, yyyy-mm-dd */
  date: string;
  updated?: string;
  draft: boolean;
  html: string;
  /** html with diagrams as PNG images, for RSS readers and syndication */
  feedHtml: string;
  readingMinutes: number;
};

const PUBLISHED = path.join(process.cwd(), "content/writing");
// drafts are git-ignored and never reach a production build; `npm run dev` shows them
const DRAFTS = path.join(process.cwd(), "content/drafts");

const DIAGRAMS = path.join(process.cwd(), "content/diagrams");
const DRAFT_DIAGRAMS = path.join(DRAFTS, "diagrams");

/** Must match diagramId() in scripts/render-diagrams.mjs. */
const diagramId = (source: string) =>
  "d" + createHash("sha1").update(source.trim()).digest("hex").slice(0, 12);

// ```mermaid blocks are pre-rendered by `npm run diagrams`; until then they show as code
function diagram(source: string, draft: boolean) {
  const id = diagramId(source);
  for (const dir of draft ? [DRAFT_DIAGRAMS, DIAGRAMS] : [DIAGRAMS]) {
    const file = path.join(dir, `${id}.svg`);
    if (fs.existsSync(file)) {
      const svg = fs.readFileSync(file, "utf8");
      // natural width, so CSS can stop shrinking before the labels get unreadable
      const width = svg.match(/max-width:\s*([\d.]+)px/)?.[1];
      return `<figure class="diagram"${width ? ` style="--w:${width}px"` : ""}>${svg}</figure>`;
    }
  }
  return false;
}

const pageMarkdown = (draft: boolean) =>
  new Marked({
    renderer: {
      code: ({ text, lang }: Tokens.Code) => (lang === "mermaid" ? diagram(text, draft) : false),
    },
  });
const markdown = { published: pageMarkdown(false), draft: pageMarkdown(true) };

// RSS readers and dev.to drop inline SVG, so feeds get the PNG copy
const feedMarkdown = new Marked({
  renderer: {
    code: ({ text, lang }: Tokens.Code) => {
      if (lang !== "mermaid") return false;
      const id = diagramId(text);
      return fs.existsSync(path.join(process.cwd(), "public/diagrams", `${id}.png`))
        ? `<p><img src="${SITE_URL}/diagrams/${id}.png" alt="Diagram" /></p>`
        : false;
    },
  },
});

// YAML turns an unquoted 2026-09-27 into a Date; keep everything as yyyy-mm-dd
const isoDate = (v: unknown) =>
  v instanceof Date ? v.toISOString().slice(0, 10) : String(v);

function read(dir: string, draft: boolean): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      const words = content.split(/\s+/).filter(Boolean).length;
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title),
        description: String(data.description),
        date: isoDate(data.date),
        updated: data.updated ? isoDate(data.updated) : undefined,
        draft,
        html: markdown[draft ? "draft" : "published"].parse(content, { async: false }),
        feedHtml: feedMarkdown.parse(content, { async: false }),
        readingMinutes: Math.max(1, Math.round(words / 220)),
      };
    });
}

/** Newest first, then by slug. Drafts are included only outside production. */
export function getPosts(): Post[] {
  const drafts = process.env.NODE_ENV === "production" ? [] : read(DRAFTS, true);
  return [...read(PUBLISHED, false), ...drafts].sort(
    // same-day posts fall back to slug order; readdir order differs between machines
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
  );
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
