// next/og (Satori) can't read the site's self-hosted woff2 variable fonts, so the
// preview cards fetch static instances from Google Fonts at build time. An old
// Safari user agent makes Google answer with plain WOFF, which Satori reads.
const LEGACY_UA =
  "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.54.16 (KHTML, like Gecko) Version/5.1.4 Safari/534.54.16";

async function googleFont(query: string) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${query}`, {
    headers: { "User-Agent": LEGACY_UA },
  }).then((r) => r.text());
  const url = css.match(/url\((https:[^)]+)\)/)?.[1];
  if (!url) throw new Error(`Google Fonts returned no file for ${query}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

/** The card's fonts, or undefined (next/og's bundled font) if Google is unreachable. */
export async function ogFonts() {
  try {
    const [display, italic, mono] = await Promise.all([
      googleFont("Fraunces:opsz,wght,SOFT,WONK@144,600,0,1"),
      googleFont("Fraunces:ital,opsz,wght,SOFT,WONK@1,36,400,50,1"),
      googleFont("IBM+Plex+Mono:wght@400"),
    ]);
    return [
      { name: "Fraunces", data: display, weight: 600 as const, style: "normal" as const },
      { name: "Fraunces", data: italic, weight: 400 as const, style: "italic" as const },
      { name: "Plex Mono", data: mono, weight: 400 as const, style: "normal" as const },
    ];
  } catch {
    return undefined;
  }
}
