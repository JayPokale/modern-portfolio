import ImageTransition from "./helper/HeroSectionImageTransition";

const HeroSection = () => {
  return (
    <section class="min-h-[calc(2*min(100vh,100vw))] grid grid-rows-4 md:grid-rows-2 md:grid-cols-2">
      <div class="flex justify-center items-center gap-6">
        <div class="min-h-[50%]">
          <div
            class="h-5 w-5 mx-auto rounded-full bg-heading"
            style={{ "box-shadow": "0px 0px 30px 5px #8f60f8" }}
          />
          <div class="h-64 w-1 mx-auto -translate-y-0.5 bg-gradient-to-b from-heading" />
        </div>
        <div class="pt-8 min-h-[50%] w-3/4">
          <p class="text-5xl font-semibold pb-4">
            I am <span class="text-heading">Jay Pokale</span> <br />
            AKA <span class="text-heading">Dare2Solve</span>
          </p>
          <p class="text-2xl max-w-xs">
            Full Stack Developer & Competitive Programmer
          </p>
        </div>
      </div>
      <div class="row-span-2">
        <ImageTransition />
      </div>
      <div class="flex justify-center items-center gap-6">
        <div class="min-h-[50%]">
          <div
            class="h-5 w-5 mx-auto rounded-full bg-white"
            style={{ "box-shadow": "0px 0px 30px 5px #ffffff" }}
          />
          <div class="h-64 w-1 mx-auto -translate-y-0.5 bg-gradient-to-b from-white" />
        </div>
        <div class="pt-8 min-h-[50%] w-3/4">
          <p class="text-2xl max-w-xs">
            I am also a Maths enthusiast with over{" "}
            <span class="text-heading font-semibold">20,000+</span> followers on
            social media in the name of{" "}
            <span class="text-heading font-semibold">Dare2Solve</span> which is
            a Maths community created by myself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
