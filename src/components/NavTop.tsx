import {
  FaBrandsFacebookF,
  FaBrandsInstagram,
  FaBrandsTwitter,
  FaBrandsGithub,
  FaBrandsLinkedinIn,
} from "solid-icons/fa";
import { IoSunny, IoCloudy, IoMoon } from "solid-icons/io";
import { createSignal } from "solid-js";

const modes = ["dim", "dark", "light"];
const element = [<IoCloudy />, <IoMoon />, <IoSunny />];

const NavTop = () => {
  const [mode, setMode] = createSignal(0);

  return (
    <main class="w-screen select-none fixed top-0 left-0 py-2 z-50">
      <div
        class="absolute top-0 h-16 w-full"
        style={{
          "background-image":
            "linear-gradient(to bottom,  rgb(var(--color-mode)) 0%, rgb(var(--color-mode)) 60%, transparent 100%)",
        }}
      />
      <div class="max-w-7xl flex mx-auto justify-between items-center px-4 sticky">
        <div class="text-xl font-bold text-primary">Jay Pokale</div>
        <div>
          <nav class="flex gap-4 md:gap-6 opacity-75 text-xl">
            <div
              class="cursor-pointer text-primary"
              onclick={() => {
                setMode((prev) => (prev + 1) % 3);
                document.documentElement.setAttribute(
                  "data-mode",
                  modes[mode()]
                );
              }}
            >
              {element[mode()]}
            </div>
            <a
              href="https://www.facebook.com/dare2solve"
              class="cursor-pointer text-secondary"
            >
              <FaBrandsFacebookF />
            </a>
            <a
              href="https://www.instagram.com/dare2solve/"
              class="cursor-pointer text-secondary"
            >
              <FaBrandsInstagram />
            </a>
            <a
              href="https://twitter.com/dare2solve"
              class="cursor-pointer text-secondary"
            >
              <FaBrandsTwitter />
            </a>
            <a
              href="https://github.com/JayPokale"
              class="cursor-pointer text-secondary"
            >
              <FaBrandsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jay-pokale-809942143/"
              class="cursor-pointer text-secondary"
            >
              <FaBrandsLinkedinIn />
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default NavTop;
