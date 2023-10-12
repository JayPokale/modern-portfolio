import { onMount } from "solid-js";
import { colorMode } from "../NavTop";

const ImageTransition = () => {
  onMount(() => {
    var img = document.getElementById("jayImg")! as HTMLDivElement;
    var height = Math.min(window.innerHeight, window.innerWidth);

    window.addEventListener(
      "resize",
      () => (height = Math.min(window.innerHeight, window.innerWidth))
    );
    window.addEventListener("scroll", () => {
      if (img.getBoundingClientRect().bottom >= 0) {
        var reqHeight = ((height - window.scrollY) / height) * 100;
        reqHeight = Math.max(reqHeight, 0);
        img.style.height = `${reqHeight}%`;
      }
    });
  });

  return (
    <section class="sticky top-1/4 hover:scale-105 duration-200 ease-in-out">
      <div id="jayImg" class="absolute overflow-hidden">
        <img
          src="JayMask.png"
          class={`w-3/4 mx-auto opacity-40 ${colorMode() ? "" : "invert"}`}
          alt="Jay Normal"
        />
      </div>
      <div>
        <img
          src="JaySketch.png"
          class={`w-3/4 mx-auto ${colorMode() ? "" : "invert"}`}
          alt="Jay B&W"
        />
      </div>
    </section>
  );
};

export default ImageTransition;
