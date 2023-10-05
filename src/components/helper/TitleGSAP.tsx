import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

type props = {
  title: string;
};

const TitleGSAP = ({ title }: props) => {
  let text!: HTMLHeadingElement;

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(text, {
      translateY: 0,
      opacity: 1,
      duration: 3,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <div class="font-semibold text-4xl py-4">
      <h1
        ref={text}
        class="relative w-max px-1 group"
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
        <span class="px-1">{title}</span>
        <span class="absolute left-0 -bottom-0 w-full h-0 transition-all -z-10 group-hover:h-full bg-heading rounded-md"></span>
      </h1>
    </div>
  );
};

export default TitleGSAP;
