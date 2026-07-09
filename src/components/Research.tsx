import { research } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const Research = () => (
  <section id="research" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
    <SectionHead
      numeral="03"
      kicker="§3 · Solution, part two"
      title="Now, the lab."
      note="where I poison retrieval systems on purpose. for science. they signed a waiver. papers titled 'X is all you need' are read with suspicion."
    />

    <div className="grid gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <p className="mono-label mb-4">
          {research.institution} · two theses in progress · sleep in backlog
        </p>
        <p className="display-italic display text-[clamp(1.6rem,3.4vw,2.8rem)] text-bone leading-tight">
          “{research.area}”
        </p>
        <p className="prose-serif text-lg sm:text-xl text-dim max-w-[58ch] mt-8">
          {research.summary}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-5">
        <p className="mono-label mb-6">
          currently on the desk · yes, actually read
        </p>
        <ul className="space-y-0">
          {research.readings.map((r, i) => (
            <li key={r.title} className="border-t rule py-5 flex gap-5">
              <span className="mono-label !text-faint pt-1">[{i + 1}]</span>
              <div>
                <p className="prose-serif text-lg text-bone">{r.title}</p>
                <p className="font-mono text-sm text-dim mt-1.5">{r.authors}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Research;
