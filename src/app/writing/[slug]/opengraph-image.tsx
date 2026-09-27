import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ogFonts } from "../../../lib/og-fonts";
import { formatDate, getPost, getPosts } from "../../../lib/writing";

export const alt = "An article by Jay Pokale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

// the site's tokens (globals.css), dark paper
const INK = "#0b0a08";
const BONE = "#e8e2d4";
const DIM = "#8f887a";
const ACCENT = "#ff4d00";
const RULE = "rgba(232, 226, 212, 0.14)";

/** One preview card per article: its title in the display face, byline underneath. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  const title = post?.title ?? "Writing";
  const avatar = await readFile(path.join(process.cwd(), "src/assets/og-avatar.jpg"));
  const titleSize = title.length > 60 ? 64 : title.length > 40 ? 76 : 88;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: INK,
          color: BONE,
          padding: "56px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 22,
            borderBottom: `1px solid ${RULE}`,
            fontFamily: "Plex Mono",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: DIM,
          }}
        >
          <span style={{ color: ACCENT }}>Problem J. · Writing</span>
          <span>jaypokale.me</span>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              borderLeft: `5px solid ${ACCENT}`,
              paddingLeft: 40,
              fontFamily: "Fraunces",
              fontWeight: 600,
              fontSize: titleSize,
              lineHeight: 1.04,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`data:image/jpeg;base64,${avatar.toString("base64")}`}
            width={72}
            height={72}
            style={{ borderRadius: 36 }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 22 }}>
            <span style={{ fontFamily: "Fraunces", fontWeight: 600, fontSize: 30 }}>Jay Pokale</span>
            <span
              style={{
                fontFamily: "Plex Mono",
                fontSize: 18,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: DIM,
                marginTop: 6,
              }}
            >
              {post ? `${formatDate(post.date)} · ${post.readingMinutes} min read` : "jaypokale.me"}
            </span>
          </div>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontSize: 28,
              color: BONE,
            }}
          >
            Receipts included.
          </span>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
