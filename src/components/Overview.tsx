import gsap, { Expo } from "gsap";
import OverviewBlocks from "./helper/OverviewBlocks";
import TitleGSAP from "./helper/Title.gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

const Overview = () => {
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.to("#overview-content", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: "#overview-content",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to(".overview-block", {
      opacity: 1,
      scale: 1,
      duration: 2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".overview-block",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
      ease: "elastic",
    });
  });

  return (
    <main class="min-h-[calc(min(100vh,100vw))] flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <TitleGSAP id="overview" title="Overview" />
        <div
          id="overview-content"
          class="flex gap-8 px-8 opacity-0 -translate-y-2"
        >
          <div class="h-48 w-1 -translate-y-0.5 bg-gradient-to-b rounded-t-full from-white" />
          <p class="w-3/4 text-xl text-justify">
            I am a skilled full stack software developer and competitive
            programmer with experience in
            <span class="font-semibold text-heading"> TypeScript</span>,
            <span class="font-semibold text-heading"> JavaScript </span>
            and <span class="font-semibold text-heading">Python</span> with
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
