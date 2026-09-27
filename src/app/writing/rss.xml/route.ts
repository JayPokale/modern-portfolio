import { SITE_URL } from "../../../data";
import { getPosts } from "../../../lib/writing";

export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// CDATA can't contain its own terminator, so split any "]]>" across two sections
const cdata = (html: string) => `<![CDATA[${html.replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;

// Full-text RSS 2.0: dev.to and Hashnode import the whole article from
// content:encoded and keep the canonical URL pointing here
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
      <dc:creator>Jay Pokale</dc:creator>
      <content:encoded>${cdata(p.html)}</content:encoded>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
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
