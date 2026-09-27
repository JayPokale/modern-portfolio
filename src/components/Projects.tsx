import { projects } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import ItemList from "./ItemList";

const Projects = () => (
  <section id="projects" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-32 sm:mt-48">
    <SectionHead
      numeral="03"
      kicker="§3 · Solution, part two"
      title="Personal projects."
      note="48 repos were audited. These survived. The snake game knows what it did."
    />
    <Reveal>
      <ItemList items={projects} />
    </Reveal>
  </section>
);

export default Projects;
