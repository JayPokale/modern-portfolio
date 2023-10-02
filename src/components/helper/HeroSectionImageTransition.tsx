import { onMount } from "solid-js";

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
    <section class="sticky top-1/4">
      <div id="jayImg" class="absolute z-10 overflow-hidden">
        <img src="Jay.png" class="w-3/4 mx-auto" alt="Jay Normal" />
      </div>
      <div>
        <img src="Jay2.png" class="invert w-3/4 mx-auto" alt="Jay B&W" />
      </div>
    </section>
  );
};

export default ImageTransition;
