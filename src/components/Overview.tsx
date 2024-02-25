import OverviewBlocks from "./helper/OverviewBlock";
import TitleGSAP from "./helper/TitleGSAP";
import gsap, { Back, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

const Overview = () => {
  let overviewContent!: HTMLDivElement;

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(overviewContent, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: overviewContent,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to(".overview-block", {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".overview-block",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
      ease: "elastic",
    });
  });

  return (
    <main class="min-h-[calc(min(100vh,100vw))] flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <TitleGSAP title="Overview" />
        <div ref={overviewContent} class="px-8 opacity-0 -translate-y-5">
          <p class="w-3/4 text-xl text-justify">
            I am a skilled full stack software developer and competitive
            programmer with experience in
            <span class="font-semibold text-primary"> TypeScript</span>,
            <span class="font-semibold text-primary"> JavaScript</span>,
            <span class="font-semibold text-primary"> Python </span>
            and <span class="font-semibold text-primary">GoLang</span> with
            experties in frameworks like React, Solid and ThreeJS. I am a quick
            learner and colaborate closely with clients to create efficient,
            scalable and user-friendly solutions that solve real world problems.
          </p>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <OverviewBlocks />
      </div>
    </main>
  );
};

export default Overview;
