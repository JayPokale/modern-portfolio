import { appendix, works } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const Works = () => (
  <section id="works" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
    <SectionHead
      numeral="02"
      kicker="§2 · Solution, part one"
      title="Then, the building years."
      note="48 repositories were audited for this page. four survived. the snake game did not make it, and it knows what it did. full audit report will be shared on WhatsApp. thank you for trusting the process."
    />

    <div className="border-t rule">
      {works.map((w, i) => {
        const Row = (
          <div className="group grid gap-5 lg:grid-cols-12 py-10 sm:py-14 border-b rule relative">
            {/* accent bar sweeps in on hover */}
            <span className="absolute -left-4 sm:-left-6 top-0 h-full w-[3px] bg-ember scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />

            <div className="lg:col-span-5 flex flex-col gap-4 lg:pr-10">
              <div className="flex items-baseline gap-5">
                <span className="mono-label !text-faint">{w.index}</span>
                <span className="mono-label">{w.year}</span>
                {w.badge && (
                  <span className="mono-label border rule border-solid px-2 py-1 !text-dim">
                    {w.badge}
                  </span>
                )}
              </div>
              <h3 className="display text-[clamp(1.9rem,4vw,3.2rem)] text-bone group-hover:text-ember group-hover:translate-x-2 transition-all duration-300">
                {w.title}
                {w.href && (
                  <span className="inline-block text-[0.5em] align-middle ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    ↗
                  </span>
                )}
              </h3>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 lg:pt-1">
              <p className="prose-serif text-lg sm:text-xl text-dim max-w-[62ch]">
                {w.description}
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {w.tech.map((t) => (
                  <li key={t} className="mono-label !text-faint">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

        return (
          <Reveal key={w.index} delay={Math.min(i * 0.05, 0.2)}>
            {w.href ? (
              <a href={w.href} target="_blank" rel="noreferrer" className="block">
                {Row}
              </a>
            ) : (
              Row
            )}
          </Reveal>
        );
      })}
    </div>

    {/* appendix — the survivors of the archive */}
    <Reveal className="mt-16 sm:mt-20">
      <p className="mono-label mb-6">
        Appendix A · earlier work that earned its keep — the rest rest in peace
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-12">
        {appendix.map((a) => {
          const inner = (
            <>
              <span className="prose-serif text-lg text-bone group-hover:text-ember transition-colors">
                {a.title}
                <span className="mono-label !text-faint ml-3">
                  {a.href ? "↗" : "private"}
                </span>
              </span>
              <span className="font-mono text-sm text-faint group-hover:text-dim transition-colors leading-relaxed">
                {a.note}
              </span>
            </>
          );
          return (
            <li key={a.title} className="border-b rule">
              {a.href ? (
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-1.5 py-5"
                >
                  {inner}
                </a>
              ) : (
                <div className="group flex flex-col gap-1.5 py-5">
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Reveal>
  </section>
);

export default Works;
