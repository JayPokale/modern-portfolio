import { toolbox } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Caption from "./Caption";

const Classroom = () => (
  <section id="origin" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
    <SectionHead
      numeral="05"
      kicker="§5 · The origin story"
      title="Where it all began."
      note="20,000 witnesses. None of them paid."
    />

    <Reveal>
      <p className="prose-serif text-xl sm:text-2xl text-dim max-w-[52ch]">
        Before the ratings, a math page.{" "}
        <a
          href="https://dare2solve.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="link-sweep text-bone hover:text-ember transition-colors"
        >
          Dare2Solve
        </a>{" "}
        grew to <em className="display-italic text-bone">20,000 people</em>{" "}
        solving problems they were told were too hard.{" "}
        <span className="quip">Difficulty, it turns out, is mostly a rumor.</span>
      </p>
    </Reveal>

    <Reveal className="mt-16">
      <Caption
        label="toolbox"
        quip="Proficiency audited by the guy who wrote it."
        className="mb-6"
      />
      <div className="space-y-5">
        {toolbox.map((g) => (
          <div key={g.group} className="grid gap-3 lg:grid-cols-12">
            <p className="font-mono text-sm text-dim lg:col-span-3 pt-2">{g.group}</p>
            <ul className="flex flex-wrap gap-2.5 lg:col-span-9">
              {g.items.map((t) => (
                <li
                  key={t}
                  className="font-mono text-sm text-dim border rule border-solid px-3 py-1.5 hover:text-ember hover:border-ember transition-colors duration-300 cursor-default"
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
