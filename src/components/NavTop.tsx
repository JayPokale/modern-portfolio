import {
  FaBrandsFacebookF,
  FaBrandsInstagram,
  FaBrandsTwitter,
  FaBrandsGithub,
  FaBrandsLinkedinIn,
} from "solid-icons/fa";

const NavTop = () => {
  return (
    <main class="w-screen select-none fixed top-0 left-0 py-2 z-50">
      <div
        class="absolute top-0 h-16 w-full"
        style={{
          "background-image":
            "linear-gradient(to bottom,  #050917 0%, #050917 60%, transparent 100%)",
        }}
      />
      <div class="max-w-7xl flex mx-auto justify-between items-center px-4 sticky">
        <div class="text-xl font-semibold">Jay Pokale</div>
        <div>
          <nav class="flex gap-4 md:gap-6 opacity-75 text-xl">
            <a
              href="https://www.facebook.com/dare2solve"
              class="cursor-pointer"
            >
              <FaBrandsFacebookF color="white" />
            </a>
            <a
              href="https://www.instagram.com/dare2solve/"
              class="cursor-pointer"
            >
              <FaBrandsInstagram color="white" />
            </a>
            <a href="https://twitter.com/dare2solve" class="cursor-pointer">
              <FaBrandsTwitter color="white" />
            </a>
            <a href="https://github.com/JayPokale" class="cursor-pointer">
              <FaBrandsGithub color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jay-pokale-809942143/"
              class="cursor-pointer"
            >
              <FaBrandsLinkedinIn color="white" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default NavTop;
