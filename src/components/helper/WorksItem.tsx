import gsap, { Back, Expo, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

type work = {
  item: {
    title: string;
    content: string;
    tech: string;
    url: string;
    curColor: string;
    nextColor: string;
  };
};
const WorksItems = ({ item }: work) => {
  const { title, content, tech, url, curColor, nextColor } = item;

  let radialShadow!: HTMLDivElement;
  let navigatorPath!: HTMLDivElement;
  let workTitle!: HTMLDivElement;
  let workContent!: HTMLDivElement;

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(radialShadow, {
      opacity: 1,
      duration: 2,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: radialShadow,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(navigatorPath, {
      height: "100%",
      duration: 3,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: radialShadow,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(workTitle, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: workTitle,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(workContent, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: workContent,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section class="relative px-4 w-full max-w-xl mx-auto">
      <div class="absolute h-full">
        <div
          ref={radialShadow}
          class="h-5 w-5 rounded-full opacity-0"
          style={{
            background: `${curColor}`,
            "box-shadow": `0px 0px 30px 5px ${curColor}`,
          }}
        />
        <div
          ref={navigatorPath}
          class="mx-auto w-0.5 mt-2"
          style={{
            "background-image": `linear-gradient(to bottom,  ${curColor} 0%, ${nextColor} 100%)`,
          }}
        />
      </div>
      <div class="px-14 pb-12">
        <h1
          ref={workTitle}
          class="font-semibold text-2xl pb-4 opacity-0 translate-x-10"
          style={{ color: `${curColor}` }}
        >
          {title}
        </h1>
        <div
          ref={workContent}
          class="flex flex-col gap-4 opacity-0 translate-x-10"
        >
          <p class="text-justify">{content}</p>
          <p>
            <span class="font-semibold" style={{ color: `${curColor}` }}>
              Teck Stack:
            </span>{" "}
            {tech}
          </p>
          <p>
            <span class="font-semibold" style={{ color: `${curColor}` }}>
              URL:
            </span>{" "}
            <a href={url} class="text-heading">
              {url}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorksItems;