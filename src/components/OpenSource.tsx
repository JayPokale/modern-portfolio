import { flagship, graveyard, ownRepos, upstream } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import ItemList from "./ItemList";

// live from GitHub, re-checked hourly (ISR); falls back to the last known count
async function getStars() {
  try {
    const res = await fetch(`https://api.github.com/repos/${flagship.repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return flagship.stars;
    const json = (await res.json()) as { stargazers_count?: number };
    return json.stargazers_count ?? flagship.stars;
  } catch {
    return flagship.stars;
  }
}

const OpenSource = async () => {
  const stars = await getStars();

  return (
    <section id="open-source" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
      <SectionHead
        numeral="02"
        kicker="§2 · Solution, part one"
        title="Open source."
        note="code strangers can read. some of them even starred it."
      />

      {/* the flagship */}
      <Reveal>
        <a
          href={flagship.href}
          target="_blank"
          rel="noreferrer"
          className="group relative grid gap-8 lg:grid-cols-12 border-y rule py-10 sm:py-14"
        >
          <span className="absolute -left-4 sm:-left-6 top-0 h-full w-[3px] bg-ember scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="mono-label !text-faint">W1 · 2026 · open source</span>
            <h3 className="display text-[clamp(2.4rem,5vw,4rem)] text-bone group-hover:text-ember transition-colors duration-300">
              {flagship.title}
              <span className="inline-block text-[0.45em] align-middle ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </span>
            </h3>
            <p className="font-mono text-bone text-2xl sm:text-3xl tabular-nums">
              ★ {stars.toLocaleString("en-US")}
            </p>
            <p className="mono-label !text-faint">
              live from GitHub · none purchased · all emotionally earned
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4 lg:pt-2">
            <p className="prose-serif text-lg sm:text-xl text-dim max-w-[58ch]">
              {flagship.pitch}
            </p>
            <p className="font-mono text-sm text-faint max-w-[62ch]">{flagship.roast}</p>
          </div>
        </a>
      </Reveal>

      <Reveal className="mt-14">
        <p className="mono-label mb-2">my repos · the smaller children, loved equally (publicly)</p>
        <ItemList items={ownRepos} />
      </Reveal>

      <Reveal className="mt-14">
        <p className="mono-label mb-2">upstream · PRs into other people's houses</p>
        <ItemList items={upstream} />
        <p className="font-mono text-sm text-faint mt-6 leading-relaxed">
          <span className="text-dim">Also reviewed by:</span> {graveyard.join(", ")}.
          Closed, unmerged, deeply character-building. We don't talk about it.
        </p>
      </Reveal>
    </section>
  );
};

export default OpenSource;
