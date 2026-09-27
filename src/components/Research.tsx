import { theses } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const Research = () => (
  <section id="lab" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
    <SectionHead
      numeral="04"
      kicker="§4 · Solution, part three"
      title="Now, the lab."
      note="Three theses, one sleep schedule. Anything titled 'X is all you need' is read with suspicion — mine included."
    />

    <div className="grid lg:grid-cols-3 border-t border-l rule">
      {theses.map((t, i) => (
        <Reveal key={t.title} delay={i * 0.08}>
          <article className="h-full flex flex-col gap-4 border-r border-b rule p-6 sm:p-8">
            <span className="mono-label">thesis {i + 1} · {t.field}</span>
            <h3 className="display text-[clamp(1.6rem,2.6vw,2.2rem)] text-bone leading-tight">
              “{t.title}”
            </h3>
            <p className="font-mono text-sm text-dim leading-relaxed">{t.fact}</p>
            <p className="quip text-xl mt-auto pt-2">{t.quip}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Research;
