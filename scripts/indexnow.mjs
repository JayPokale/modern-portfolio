// Tells IndexNow search engines (Bing, and through it DuckDuckGo, Yahoo, Copilot and
// ChatGPT search; also Yandex, Seznam, Naver) about every URL in the live sitemap.
// Run after a deploy that adds or changes pages: npm run indexnow
const HOST = "jaypokale.me";
const KEY = "c0ead650217df4358d184a45cb0999c0"; // must match public/<KEY>.txt

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (!res.ok) process.exit(1);
