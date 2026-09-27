// Renders every ```mermaid block in the articles ahead of time, because Mermaid needs a
// real browser to lay out text and the production build doesn't have one.
//
//   published articles -> content/diagrams/<id>.svg  (inlined into the page at build time)
//                         public/diagrams/<id>.png   (dark bitmap for RSS readers and dev.to)
//   drafts             -> content/drafts/diagrams/<id>.svg  (git-ignored, like the drafts)
//
// <id> hashes the diagram source, so editing a diagram produces a new file; stale files
// are removed. SVG colours and fonts are CSS variables, so diagrams follow the page theme.
// Needs a Chromium-based browser: set BROWSER_PATH if it isn't at /usr/bin/brave.
//
// Usage: npm run diagrams
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { chromium } from "playwright-core";

const ROOT = process.cwd();
const MERMAID_URL = "https://cdn.jsdelivr.net/npm/mermaid@12.0.0/dist/mermaid.min.js";
const BROWSER = process.env.BROWSER_PATH ?? "/usr/bin/brave";

// Mermaid is themed with sentinel colours that are swapped for the site's CSS variables.
// In a flowchart, `class X accent` (or X:::accent) fills a node with the accent ink.
const SENTINELS = {
  "#000001": "transparent",
  "#010101": "var(--t-ink-2)", // node fill
  "#020202": "var(--t-faint)", // node border
  "#030303": "var(--t-bone)", // text
  "#040404": "var(--t-dim)", // lines and arrows
  "#050505": "var(--t-ink-2)",
  "#060606": "var(--t-ink)", // subgraph fill
  "#070707": "var(--t-rule)", // subgraph border
  "#080808": "var(--t-ink)", // edge-label background
  "#0a0a0a": "var(--accent)", // accent fill
  "#0b0b0b": "var(--accent)", // accent border
  "#0c0c0c": "var(--t-ink)", // text on accent
  "#0d0d0d": "var(--accent)", // chart bars
};
const ACCENT_CLASS = "classDef accent fill:#0a0a0a,stroke:#0b0b0b,color:#0c0c0c";
const THEME = {
  background: "#000001",
  primaryColor: "#010101",
  mainBkg: "#010101",
  primaryBorderColor: "#020202",
  nodeBorder: "#020202",
  primaryTextColor: "#030303",
  textColor: "#030303",
  titleColor: "#030303",
  nodeTextColor: "#030303",
  lineColor: "#040404",
  secondaryColor: "#050505",
  tertiaryColor: "#060606",
  clusterBkg: "#060606",
  clusterBorder: "#070707",
  edgeLabelBackground: "#080808",
  fontFamily: "PLEXMONO",
  fontSize: "15px",
  xyChart: {
    backgroundColor: "#000001",
    plotColorPalette: "#0d0d0d, #040404", // accent, then dim for a second series
    titleColor: "#030303",
    xAxisLabelColor: "#030303",
    yAxisLabelColor: "#030303",
    xAxisTitleColor: "#030303",
    yAxisTitleColor: "#030303",
    xAxisLineColor: "#040404",
    yAxisLineColor: "#040404",
    xAxisTickColor: "#040404",
    yAxisTickColor: "#040404",
  },
};
// the dark "paper" from globals.css, for the PNG copies
const DARK = `--t-ink:#0b0a08;--t-ink-2:#14120e;--t-bone:#e8e2d4;--t-dim:#8f887a;--t-faint:#55503f;--t-rule:rgba(232,226,212,.14);--accent:#ff4d00;--font-mono:PLEXMONO`;

// must match diagramId() in src/lib/writing.ts
const diagramId = (source) =>
  "d" + createHash("sha1").update(source.trim()).digest("hex").slice(0, 12);

function blocks(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .flatMap((f) => {
      const found = [];
      marked.walkTokens(marked.lexer(fs.readFileSync(path.join(dir, f), "utf8")), (t) => {
        if (t.type === "code" && t.lang === "mermaid") found.push({ file: f, source: t.text });
      });
      return found;
    });
}

// Google Fonts answers an old Safari with plain WOFF; embedded, it gives Mermaid the real
// Plex Mono metrics to measure labels with
async function plexMono() {
  const css = await fetch("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400", {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.54.16 (KHTML, like Gecko) Version/5.1.4 Safari/534.54.16" },
  }).then((r) => r.text());
  const url = css.match(/url\((https:[^)]+)\)/)[1];
  const font = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
  return `@font-face{font-family:PLEXMONO;src:url(data:font/woff;base64,${font.toString("base64")}) format("woff")}`;
}

const targets = [
  { dir: "content/writing", svgDir: "content/diagrams", pngDir: "public/diagrams" },
  { dir: "content/drafts", svgDir: "content/drafts/diagrams", pngDir: null },
];

const fontFace = await plexMono();
const failures = [];
const browser = await chromium.launch({ executablePath: BROWSER });
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.setContent(`<html><head><style>${fontFace} body{margin:0;background:#0b0a08}</style></head><body></body></html>`);
await page.addScriptTag({ url: MERMAID_URL });
await page.evaluate(async (theme) => {
  await document.fonts.load("15px PLEXMONO");
  window.mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: theme,
    securityLevel: "strict",
    // Mermaid 12 defaults to "neo" (drop shadows); the site is flat
    look: "classic",
    // labels break only at an explicit <br/>, never mid-phrase
    flowchart: { wrappingWidth: 480 },
  });
}, THEME);

for (const { dir, svgDir, pngDir } of targets) {
  const wanted = new Set();
  for (const { file, source } of blocks(path.join(ROOT, dir))) {
    const id = diagramId(source);
    wanted.add(id);
    const isFlow = /^\s*(flowchart|graph)\b/m.test(source);
    let svg;
    try {
      svg = await page.evaluate(
      async ({ id, source, sentinels }) => {
        const { svg } = await window.mermaid.render(id, source);
        const host = document.createElement("div");
        host.innerHTML = svg;
        const el = host.firstElementChild;
        // presentation attributes can't hold var(); move sentinel colours into style
        const rgbToHex = (v) => {
          const m = v.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
          return m ? "#" + m.slice(1).map((n) => (+n).toString(16).padStart(2, "0")).join("") : v;
        };
        for (const node of el.querySelectorAll("*")) {
          for (const attr of ["fill", "stroke", "color", "stop-color", "flood-color"]) {
            const v = node.getAttribute(attr);
            const key = v && rgbToHex(v.trim().toLowerCase());
            if (key && sentinels[key]) {
              node.removeAttribute(attr);
              node.style.setProperty(attr, sentinels[key]);
            }
          }
        }
        el.removeAttribute("height");
        return el.outerHTML;
      },
      { id, source: isFlow ? `${source}\n${ACCENT_CLASS}` : source, sentinels: SENTINELS },
      );
    } catch (error) {
      // report and keep going; the article falls back to showing the source as code
      failures.push(`${dir}/${file}: ${error.message.split("\n").slice(0, 4).join("\n  ")}`);
      continue;
    }

    let out = svg.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, (m, r, g, b) => {
      const hex = "#" + [r, g, b].map((n) => (+n).toString(16).padStart(2, "0")).join("");
      return SENTINELS[hex] ?? m;
    });
    for (const [hex, css] of Object.entries(SENTINELS)) out = out.replaceAll(hex, css);
    out = out.replace(/rgba\(8, 8, 8, 0\.5\)/g, "var(--t-ink)").replaceAll("PLEXMONO", "var(--font-mono)");

    fs.mkdirSync(path.join(ROOT, svgDir), { recursive: true });
    fs.writeFileSync(path.join(ROOT, svgDir, `${id}.svg`), out);

    if (pngDir) {
      fs.mkdirSync(path.join(ROOT, pngDir), { recursive: true });
      await page.evaluate(
        ({ out, dark }) => {
          document.body.innerHTML = `<div id="shot" style="${dark};display:inline-block;padding:24px;background:#0b0a08">${out.replaceAll("var(--font-mono)", "PLEXMONO")}</div>`;
        },
        { out, dark: DARK },
      );
      await page.locator("#shot").screenshot({ path: path.join(ROOT, pngDir, `${id}.png`) });
    }
    console.log(`${dir}/${file}: ${id}`);
  }

  // remove renders of diagrams that no longer exist
  for (const d of [svgDir, pngDir].filter(Boolean)) {
    const full = path.join(ROOT, d);
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full)) {
      if (!wanted.has(f.replace(/\.(svg|png)$/, ""))) fs.rmSync(path.join(full, f));
    }
  }
}

await browser.close();

if (failures.length) {
  console.error(`\n${failures.length} diagram(s) failed to render:\n${failures.join("\n")}`);
  process.exitCode = 1;
}
