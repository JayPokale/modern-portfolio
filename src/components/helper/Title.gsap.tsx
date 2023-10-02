import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

type props = {
  id: string;
  title: string;
};

const TitleGSAP = ({ id, title }: props) => {
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.to(`#${id}`, {
      translateY: 0,
      opacity: 1,
      duration: 2,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: `#${id}`,
      },
    });
  });

  return (
    <div class="font-semibold text-4xl py-4">
      <h1 id={`${id}`} style={{ transform: "translateY(-100%)", opacity: 0 }}>
        {title}
      </h1>
    </div>
  );
};

export default TitleGSAP;
