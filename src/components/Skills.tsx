import { For, onMount } from "solid-js";
import SkillHexagon from "./helper/SkillsHexagon";
import { skills } from "~/constants";

const Skills = () => {
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

  return (
    <main class="min-h-[calc(min(100vh,100vw))]">
      <h1 class="font-semibold text-4xl py-4">
        Skills <span class="text-2xl text-heading">(Tech Stack)</span>
        <div class="max-w-5xl mx-auto py-16 flex flex-wrap justify-center gap-4 overflow-hidden">
          <For each={skills}>{(skill) => <SkillHexagon skill={skill} />}</For>
        </div>
      </h1>
    </main>
  );
};

export default Skills;
