import { For } from "solid-js";

type props = {
  skill: string;
};

const SkillHexagon = ({ skill }: props) => {
  const sidesRotations = [
    [0, 0],
    [60, 0],
    [-60, 180],
    [0, 180],
    [60, 180],
    [-60, 0],
  ];

  return (
    <section
      class="skill-hexagon relative w-[150px] h-[150px]"
      style={{
        "transform-style": "preserve-3d",
        transform: "rotateX(15deg) rotateY(15deg) translateZ(-50px)",
      }}
    >
      <div
        class="absolute"
        style={{
          transform: "translateX(51px) translateY(33px) translateZ(45px)",
        }}
      >
        <div class="absolute w-[48px] h-[84px] rotate-[60deg] bg-mode" />
        <div class="absolute w-[48px] h-[84px] rotate-[120deg] bg-mode" />
        <div class="absolute grid place-items-center w-[48px] h-[84px] bg-mode">
          <img
            src={"skills/" + skill + ".png"}
            alt={skill + " logo"}
            class="w-3/4"
          />
        </div>
      </div>

      <div
        class="absolute"
        style={{
          "transform-style": "preserve-3d",
          transform: "translateX(51px) translateY(33px) rotateZ(30deg)",
        }}
      >
        <For each={sidesRotations}>{([x, z]) => HexagonSide(x, z)}</For>
      </div>
    </section>
  );
};

export default SkillHexagon;

function HexagonSide(x: number, z: number) {
  return (
    <div
      class="absolute w-[84px] h-[48px]"
      style={{
        transform: `rotateZ(${z}deg) rotateY(-90deg) rotateX(${x}deg) translateZ(42px)`,
        "box-shadow": "0 0 10px rgb(var(--color-mode)) inset",
        "background-image":
          "linear-gradient(-90deg, rgb(var(--color-primary) / 0.5) 0%, transparent 50%)",
      }}
    />
  );
}
