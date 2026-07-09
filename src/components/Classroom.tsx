import { toolbox } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const Classroom = () => (
  <section id="classroom" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
    <SectionHead
      numeral="04"
      kicker="§4 · Solution, part three"
      title="Where it all began."
      note="the origin story. 20,000 witnesses, none of them paid."
    />

    <div className="grid gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <p className="prose-serif text-xl sm:text-2xl text-dim max-w-[56ch]">
          Before the ratings and the retrieval pipelines, there was a math page.{" "}
          <a
            href="https://dare2solve.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="link-sweep text-bone hover:text-ember transition-colors"
          >
            Dare2Solve
          </a>{" "}
          grew into a community of more than{" "}
          <em className="display-italic text-bone">20,000 people</em> solving
          problems they were told were too hard for them. I founded it, I still
          run it, and it is still the best proof I have that difficulty is
          mostly a rumor.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-5">
        <p className="prose-serif text-lg text-dim">
          The classroom cuts both ways — five years of collecting tools and the
          scars that teach you how to hold them.
        </p>
      </Reveal>
    </div>

    <Reveal className="mt-16 sm:mt-20">
      <p className="mono-label mb-8">
        toolbox — used in anger, sorted by era. proficiency claims audited by
        the same guy who wrote them.
      </p>
      <div className="space-y-8">
        {toolbox.map((g) => (
          <div key={g.group} className="grid gap-3 lg:grid-cols-12">
            <p className="font-mono text-sm text-faint lg:col-span-3 pt-2">
              {g.group}
            </p>
            <ul className="flex flex-wrap gap-2.5 lg:col-span-9">
              {g.items.map((t) => (
                <li
                  key={t}
                  className="font-mono text-sm text-dim border rule border-solid px-3 py-2 hover:text-ember hover:border-ember transition-colors duration-300 cursor-default"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

export default Classroom;
