import { For, onMount } from "solid-js";
import { professionalSkills } from "~/constants";
import TitleGSAP from "./helper/TitleGSAP";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProfessionalSkillBlock from "./helper/ProfessionalSkillBlock";

const ProfessionalSkills = () => {
  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to("#professional-skills", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#professional-skills",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <main class="min-h-[calc(min(100vh,100vw))]">
      <TitleGSAP id="professional" title="Professional Skills" />
      <div
        id="professional-skills"
        class="max-w-4xl w-full overflow-hidden mx-auto flex flex-wrap justify-center gap-4 py-8 opacity-0"
      >
        <style>{`#shadow:hover {box-shadow: 0 0 15px #8f60f8}`}</style>
        <For each={professionalSkills}>
          {(skillItem) => <ProfessionalSkillBlock skillItem={skillItem} />}
        </For>
      </div>
    </main>
  );
};

export default ProfessionalSkills;
