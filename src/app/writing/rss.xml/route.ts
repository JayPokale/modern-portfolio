import { SITE_URL } from "../../../data";
import { getPosts } from "../../../lib/writing";

export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// RSS 2.0; dev.to and Hashnode can import from this feed and keep the canonical here
export function GET() {
  const items = getPosts()
    .filter((p) => !p.draft)
    .map(
      (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE_URL}/writing/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/writing/${p.slug}</guid>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(p.description)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Jay Pokale — Writing</title>
    <link>${SITE_URL}/writing</link>
    <description>Articles by Jay Pokale.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/writing/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
