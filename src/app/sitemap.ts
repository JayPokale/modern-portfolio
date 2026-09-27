import type { MetadataRoute } from "next";
import { SITE_URL, flagship, links } from "../data";
import { getPosts } from "../lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().filter((p) => !p.draft);
  const lastEdit = (p: (typeof posts)[number]) => new Date(p.updated ?? p.date);

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/Jay.png`],
    },
    ...(posts.length
      ? [{ url: `${SITE_URL}/writing`, lastModified: lastEdit(posts[0]), priority: 0.8 }]
      : []),
    ...posts.map((p) => ({
      url: `${SITE_URL}/writing/${p.slug}`,
      lastModified: lastEdit(p),
      priority: 0.7,
    })),
    // sister sites; a sitemap may list other hosts only because the Search Console
    // domain property (sc-domain:jaypokale.me) verifies every *.jaypokale.me host
    { url: flagship.site, changeFrequency: "weekly", priority: 0.9 },
    { url: links.dare2solve, changeFrequency: "weekly", priority: 0.9 },
  ];
}
