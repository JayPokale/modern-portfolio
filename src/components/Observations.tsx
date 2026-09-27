import { observations } from "../data";
import { getCodeforces, getLeetCode } from "../lib/stats";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Counter from "./Counter";

const Observations = async () => {
  const [lc, cf] = await Promise.all([getLeetCode(), getCodeforces()]);

  return (
    <section id="observations" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-28 sm:mt-40">
      <SectionHead
        numeral="01"
        kicker="§1 · Observations"
        title="First, the evidence."
        note="The section recruiters scroll to first. Hi. Screenshots are allowed."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l rule">
        {observations(lc, cf).map((o, i) => (
          <Reveal key={o.id} delay={i * 0.08}>
            <a
              href={o.href}
              target={o.href.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex flex-col gap-5 border-r border-b rule p-6 sm:p-8 h-full min-h-56 justify-between transition-colors duration-300 hover:bg-ink-2"
            >
              <div className="flex items-baseline justify-between">
                <span className="mono-label">obs. {o.id}</span>
                <span className="mono-label opacity-0 group-hover:opacity-100 transition-opacity !text-ember">
                  ↗
                </span>
              </div>
              <span className="text-[clamp(2.6rem,5vw,4rem)] leading-none text-bone group-hover:text-ember transition-colors duration-300">
                <Counter value={o.figure} suffix={o.suffix} />
              </span>
              <div>
                <p className="prose-serif text-lg text-bone">{o.label}</p>
                <p className="font-mono text-xs text-dim mt-1">{o.fact}</p>
                <p className="quip text-lg mt-3">{o.quip}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Observations;
