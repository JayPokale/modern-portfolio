import ImageTransition from "./helper/HeroSectionImageTransition";
import gsap, { Back } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to("#herosection-navigator-circle-1", {
      opacity: 1,
      duration: 2,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: "#herosection-navigator-circle-1",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#herosection-navigator-circle-2", {
      opacity: 1,
      duration: 2,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: "#herosection-navigator-circle-2",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#herosection-navigator-path-1", {
      height: "16rem",
      duration: 3,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: "#herosection-navigator-path-1",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#herosection-navigator-path-2", {
      height: "16rem",
      duration: 3,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: "#herosection-navigator-path-2",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#herosection-content-1", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: "#herosection-content-1",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#herosection-content-2", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: "#herosection-content-2",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <main class="min-h-[calc(2*min(100vh,100vw))] grid grid-rows-4 md:grid-rows-2 md:grid-cols-2">
      <div class="relative flex items-center">
        <div class="relative pt-8 min-h-[50%]">
          <div class="absolute top-0 left-0">
            <div
              id="herosection-navigator-circle-1"
              class="h-5 w-5 mx-auto rounded-full bg-primary opacity-0"
              style={{
                "box-shadow": "0px 0px 30px 5px rgb(var(--color-primary))",
              }}
            />
            <div
              id="herosection-navigator-path-1"
              class="w-1 mx-auto -translate-y-0.5 bg-gradient-to-b from-primary"
              style={{ height: 0 }}
            />
          </div>
          <div id="herosection-content-1" class="pl-10 opacity-0 translate-x-5">
            <p class="text-5xl font-semibold pb-4">
              I am <span class="text-primary">Jay Pokale</span> <br />
              AKA <span class="text-primary">Dare2Solve</span>
            </p>
            <p class="text-2xl max-w-xs">
              Full Stack Developer & Competitive Programmer
            </p>
          </div>
        </div>
      </div>
      <div class="row-span-2">
        <ImageTransition />
      </div>
      <div class="relative flex items-center">
        <div class="relative pt-8 min-h-[50%]">
          <div class="absolute top-0 left-0">
            <div
              id="herosection-navigator-circle-2"
              class="h-5 w-5 mx-auto rounded-full bg-primary opacity-0"
              style={{
                "box-shadow": "0px 0px 30px 5px rgb(var(--color-primary))",
              }}
            />
            <div
              id="herosection-navigator-path-2"
              class="w-1 mx-auto -translate-y-0.5 bg-gradient-to-b from-primary"
              style={{ height: 0 }}
            />
          </div>
          <div id="herosection-content-2" class="pl-10 opacity-0 translate-x-5">
            <p class="text-2xl max-w-xs">
              I am also a Maths enthusiast with over{" "}
              <span class="text-primary font-semibold">20,000+</span> followers
              on social media in the name of{" "}
              <span class="text-primary font-semibold">Dare2Solve</span> which
              is a Maths community created by myself.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
