import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, yyyy-mm-dd */
  date: string;
  updated?: string;
  draft: boolean;
  html: string;
  readingMinutes: number;
};

const PUBLISHED = path.join(process.cwd(), "content/writing");
// drafts are git-ignored and never reach a production build; `npm run dev` shows them
const DRAFTS = path.join(process.cwd(), "content/drafts");

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
        html: marked.parse(content, { async: false }),
        readingMinutes: Math.max(1, Math.round(words / 220)),
      };
    });
}

/** Newest first. Drafts are included only outside production. */
export function getPosts(): Post[] {
  const drafts = process.env.NODE_ENV === "production" ? [] : read(DRAFTS, true);
  return [...read(PUBLISHED, false), ...drafts].sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
