import { For, onMount } from "solid-js";
import SkillHexagon from "./helper/SkillsHexagon";
import { skills } from "~/constants";
import TitleGSAP from "./helper/TitleGSAP";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Skills = () => {
  let skillsBlock!: HTMLDivElement;

  onMount(() => {
    const hexagons = document.getElementsByClassName(
      "skill-hexagon"
    ) as HTMLCollectionOf<HTMLDivElement>;
    document.onmousemove = (e) => {
      for (const hexagon of hexagons) {
        const rect = hexagon.getBoundingClientRect();
        const x =
          ((rect.top + rect.bottom) / 2 - e.clientY) / window.innerHeight;
        const y =
          (e.clientX - (rect.left + rect.right) / 2) / window.innerWidth;
        if (x < -1 || x > 1) {
          hexagon.style.transform =
            "rotateX(0deg) rotateY(0deg) translateZ(-50px)";
        } else {
          hexagon.style.transform = `rotateX(${x * 90}deg) rotateY(${
            y * 90
          }deg) translateZ(-50px)`;
        }
      }
    };
  });

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(skillsBlock, {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: skillsBlock,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <main class="min-h-[calc(min(100vh,100vw))]">
      <TitleGSAP title="Skills (Tech Stack)" />
      <div
        ref={skillsBlock}
        class="max-w-5xl mx-auto py-16 flex flex-wrap justify-center gap-4 overflow-hidden opacity-0"
      >
        <For each={skills}>{(skill) => <SkillHexagon skill={skill} />}</For>
      </div>
    </main>
  );
};

export default Skills;
