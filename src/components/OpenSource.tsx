import { flagship, graveyard, ownRepos, upstream } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import ItemList from "./ItemList";
import Caption from "./Caption";

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

const outLink =
  "mono-label link-sweep !text-bone hover:!text-ember transition-colors";

const OpenSource = async () => {
  const stars = await getStars();

  return (
    <section id="open-source" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
      <SectionHead
        numeral="02"
        kicker="§2 · Solution, part one"
        title="Open source."
        note="Code strangers can read. Some of them even starred it."
      />

      {/* the flagship */}
      <Reveal>
        <div className="group relative grid gap-8 lg:grid-cols-12 border-y rule py-10 sm:py-14">
          <span className="absolute -left-4 sm:-left-6 top-0 h-full w-[3px] bg-ember scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="mono-label">W1 · 2026 · open source</span>
            <h3 className="display text-[clamp(2.4rem,5vw,4rem)] text-bone">
              <a
                href={flagship.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ember transition-colors duration-300"
              >
                {flagship.title}
              </a>
            </h3>
            <p className="font-mono text-bone text-2xl sm:text-3xl tabular-nums">
              ★ {stars.toLocaleString("en-US")}
            </p>
            <p className="quip text-base">
              Live from GitHub. None purchased, all emotionally earned.
            </p>
            <p className="flex gap-6 pt-2">
              <a href={flagship.href} target="_blank" rel="noreferrer" className={outLink}>
                GitHub&nbsp;↗
              </a>
              <a href={flagship.site} target="_blank" rel="noreferrer" className={outLink}>
                Website&nbsp;↗
              </a>
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5 lg:pt-2">
            <p className="prose-serif text-lg sm:text-xl text-dim max-w-[58ch]">
              {flagship.fact}
            </p>
            <p className="quip text-2xl sm:text-3xl">{flagship.quip}</p>
            <p className="quip text-lg max-w-[52ch]">{flagship.roast}</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <Caption label="my repos" quip="The smaller children. Loved equally, publicly." />
        <ItemList items={ownRepos} />
      </Reveal>

      <Reveal className="mt-14">
        <Caption label="upstream" quip="Code I left in other people's houses." />
        <ItemList items={upstream} />
        <p className="font-mono text-xs text-dim mt-6 leading-relaxed">
          closed without merging: {graveyard.join(", ")}
        </p>
        <p className="quip text-lg mt-1">
          Deeply character-building. We don't talk about it.
        </p>
      </Reveal>
    </section>
  );
};

export default OpenSource;
