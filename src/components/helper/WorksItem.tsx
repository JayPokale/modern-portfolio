import gsap, { Back, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";

type work = {
  item: {
    title: string;
    content: string;
    tech: string;
    url: string;
    curColor: string;
  };
};
const WorksItems = ({ item }: work) => {
  const { title, content, tech, url, curColor } = item;

  let navigatorCircle!: HTMLDivElement;
  let navigatorPath!: HTMLDivElement;
  let workTitle!: HTMLDivElement;
  let workContent!: HTMLDivElement;

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(navigatorCircle, {
      opacity: 1,
      duration: 0.5,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: navigatorCircle,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(navigatorPath, {
      height: "100%",
      duration: 1,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: navigatorCircle,
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
        <div class="h-5 w-5 grid place-items-center">
          <div
            ref={navigatorCircle}
            class="h-1/2 w-1/2 rounded-full opacity-0"
            style={{
              background: `${curColor}`,
              "box-shadow": `0px 0px 30px 5px ${curColor}`,
            }}
          />
        </div>
        <div
          ref={navigatorPath}
          class="mx-auto w-0.5 mt-2 rounded-sm"
          style={{
            "background-image": `linear-gradient(to bottom, ${curColor} 0%, transparent 100%)`,
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
            <a href={url} class="underline underline-offset-4">
              {url}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorksItems;
