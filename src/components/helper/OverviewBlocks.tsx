import { For, createEffect } from "solid-js";
import { overviewSkills } from "~/constants";
import "./OverviewBlocks.css";

const OverviewBlocks = () => {
  let card: HTMLElement;

  createEffect(() => {
    var cardOuters = document.getElementsByClassName(
      "card-outer"
    ) as HTMLCollectionOf<HTMLDivElement>;
    var cardInners = document.getElementsByClassName(
      "card-inner"
    ) as HTMLCollectionOf<HTMLDivElement>;

    for (const card of cardInners) {
      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--pos-x", `${x}px`);
        card.style.setProperty("--pos-y", `${y}px`);
      };
    }

    document.body.onmousemove = (e) => {
      const cardRect = card?.getBoundingClientRect();
      if (
        cardRect &&
        (cardRect.top <= window.innerHeight || cardRect.bottom >= 0)
      ) {
        for (const card of cardOuters) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--pos-x", `${x}px`);
          card.style.setProperty("--pos-y", `${y}px`);
        }
      }
    };
  });

  return (
    <section
      ref={card!}
      class="max-w-2xl mx-auto pt-8 grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 gap-1"
    >
      <For each={overviewSkills}>{(skill) => createBlock(skill)}</For>
    </section>
  );
};

type overviewSkillBlock = {
  title: string;
  content: string;
  color1: string;
  color2: string;
};

function createBlock({ title, content, color1, color2 }: overviewSkillBlock) {
  return (
    <section class="overview-block relative mx-auto flex p-px min-h-[240px] max-w-sm opacity-0 scale-75">
      <div class="card-outer absolute inset-0 w-full h-full rounded-md" />
      <div class="card-inner relative w-full h-full rounded-md bg-[#121623] z-10 before:w-full before:h-full before:absolute before:duration-500 before:ease-in-out before:opacity-0 before:hover:opacity-100">
        <div class="w-3/4 mx-auto py-4">
          <h2
            class={`text-2xl my-4 text-center font-semibold text-transparent bg-clip-text`}
            style={{
              "background-image": `linear-gradient(to right,  #${color1} 0%, #${color2} 100%)`,
            }}
          >
            {title}
          </h2>
          <p class="text-white/70 text-lg">{content}</p>
        </div>
      </div>
    </section>
  );
}

export default OverviewBlocks;
