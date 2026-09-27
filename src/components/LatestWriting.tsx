import { formatDate, getPosts } from "../lib/writing";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

/** Homepage appendix: the newest articles. Renders nothing until one is published. */
const LatestWriting = () => {
  const posts = getPosts().slice(0, 3);
  if (!posts.length) return null;

  return (
    <section id="writing" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
      <SectionHead
        numeral="06"
        kicker="§6 · Appendix"
        title="In writing, too."
        note="For when a commit message won't cover it."
      />
      <Reveal>
        <ul className="border-t rule">
          {posts.map((p) => (
            <li key={p.slug} className="border-b rule">
              <a href={`/writing/${p.slug}`} className="group grid gap-2 lg:grid-cols-12 py-7">
                <span className="mono-label lg:col-span-2 lg:pt-2">{formatDate(p.date)}</span>
                <span className="lg:col-span-10 flex flex-col gap-1.5">
                  <span className="prose-serif text-2xl text-bone group-hover:text-ember transition-colors">
                    {p.title}
                  </span>
                  <span className="font-mono text-xs text-dim">{p.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/writing"
          className="inline-block mt-6 mono-label link-sweep !text-bone hover:!text-ember transition-colors"
        >
          all writing →
        </a>
      </Reveal>
    </section>
  );
};

export default LatestWriting;
