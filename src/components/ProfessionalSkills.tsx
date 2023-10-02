import { For } from "solid-js";
import { professionalSkills } from "~/constants";

const ProfessionalSkills = () => {
  return (
    <main class="min-h-[calc(min(100vh,100vw))]">
      <h1 class="font-semibold text-4xl py-4">Professional Skills</h1>
      <div class="max-w-4xl w-full overflow-hidden mx-auto flex flex-wrap justify-center gap-4 py-8">
        <style>{`#shadow:hover {box-shadow: 0 0 15px #8f60f8}`}</style>
        <For each={professionalSkills}>
          {([skill, svgPath]) => {
            let child: HTMLDivElement;

            return (
              <div
                id="shadow"
                class="w-64 h-64 relative rounded-md bg-white/5 text-white/50 duration-1000 ease-in-out border-2 border-transparent hover:bg-transparent hover:text-heading hover:opacity-100 hover:duration-200 hover:border-heading"
                onMouseEnter={() => (child.style.transitionDuration = "200ms")}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + child.clientWidth / 2;
                  const centerY = rect.top + child.clientHeight / 2;

                  const distX = e.clientX - centerX;
                  const distY = e.clientY - centerY;
                  child.style.transform = `
                    translateX(${distX / 3}px)
                    translateY(${distY / 3}px)
                    rotateZ(${distX / 10}deg)
                  `;
                }}
                onMouseLeave={() => {
                  child.style.transform = "translateX(0) translateY(0)";
                  child.style.transitionDuration = "500ms";
                }}
              >
                <div
                  class="w-full h-full absolute flex flex-col justify-center items-center gap-4 pointer-events-none"
                  style={{
                    "transition-timing-function": "cubic-bezier(0, 0, .5, 1.5)",
                  }}
                  ref={child!}
                >
                  <svg
                    class="svg-icon h-12 w-12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d={svgPath} />
                  </svg>
                  <p class="font-semibold text-xl">{skill}</p>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </main>
  );
};

export default ProfessionalSkills;
