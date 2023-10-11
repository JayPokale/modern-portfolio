import {
  FaBrandsFacebookF,
  FaBrandsInstagram,
  FaBrandsTwitter,
  FaBrandsGithub,
  FaBrandsLinkedinIn,
} from "solid-icons/fa";
import { For, createEffect, createSignal } from "solid-js";

export const [colorMode, setColorMode] = createSignal(1);
const colorThemes = [
  "255 8 8",
  "240 120 22",
  "230 196 11",
  "8 180 49",
  "23 123 253",
  "143 96 248",
  "243 18 154",
];

const ColorModeButton = ({ mode, index }: { mode: string; index: number }) => (
  <div class="text-center cursor-pointer" onclick={() => setColorMode(index)}>
    {mode}
  </div>
);

const ColorThemeButton = ({ theme }: { theme: string }) => (
  <div
    class="w-5 h-5 rounded-full cursor-pointer"
    style={{ "background-color": `rgb(${theme})` }}
    onClick={() => {
      document.documentElement.style.setProperty("--color-primary", theme);
    }}
  />
);

const changeColor = (
  e: InputEvent & {
    currentTarget: HTMLInputElement;
    target: HTMLInputElement;
  }
) => {
  const color = e.target.value;
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  document.documentElement.style.setProperty(
    "--color-primary",
    `${r} ${g} ${b}`
  );
};

const NavTop = () => {
  let colorToggleMenu!: HTMLDivElement;

  createEffect(() => {
    document.documentElement.style.setProperty(
      "--color-mode",
      colorMode() === 0
        ? "255 255 255"
        : colorMode() === 1
        ? "25 25 25"
        : "0 0 0"
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      colorMode() === 0 ? "50 50 50" : "255 255 255"
    );
  });

  return (
    <main class="w-screen select-none fixed top-0 left-0 py-2 z-50 bg-mode">
      <div class="max-w-7xl flex mx-auto justify-between items-center px-4 sticky">
        <div class="text-xl font-bold text-primary">Jay Pokale</div>
        <div class="flex items-center gap-4 md:gap-6 text-xl">
          <div class="relative group" tabIndex={0}>
            <div class="text-primary text-sm font-semibold px-1.5 py-0.5 border-2 border-primary rounded-md cursor-pointer">
              Theme
            </div>
            <div
              ref={colorToggleMenu}
              class="h-36 w-48 absolute mt-2 p-3 rounded-md bg-secondary/5 backdrop-blur-md duration-75 -translate-y-2 opacity-0 pointer-events-none group-focus:translate-y-0 group-focus:opacity-100 group-focus:pointer-events-auto"
              style={{
                "box-shadow": "0 1px 5px rgba(var(--color-secondary) / 0.2)",
              }}
            >
              <div class="relative grid grid-cols-3 text-sm py-1">
                <ColorModeButton mode="Light" index={0} />
                <ColorModeButton mode="Dim" index={1} />
                <ColorModeButton mode="Dark" index={2} />
                <div
                  class="absolute h-full w-1/3 -z-10 bg-secondary/5 rounded-md duration-200 ease-in-out"
                  style={{ transform: `translateX(${colorMode() * 56}px)` }}
                />
              </div>
              <div class="grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-4 place-items-center pt-6">
                <For each={colorThemes}>
                  {(color) => <ColorThemeButton theme={color} />}
                </For>
                <div
                  class="h-5 w-5 cursor-pointer rounded-full overflow-hidden animate-spin-slow"
                  style={{
                    background:
                      "radial-gradient(white, transparent 80%), conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
                  }}
                >
                  <label for="colorPicker" class="h-full w-full float-left" />
                  <input
                    type="color"
                    id="colorPicker"
                    class="hidden"
                    onInput={changeColor}
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/dare2solve"
            class="cursor-pointer text-secondary h-max"
          >
            <FaBrandsFacebookF />
          </a>
          <a
            href="https://www.instagram.com/dare2solve/"
            class="cursor-pointer text-secondary h-max"
          >
            <FaBrandsInstagram />
          </a>
          <a
            href="https://twitter.com/dare2solve"
            class="cursor-pointer text-secondary h-max"
          >
            <FaBrandsTwitter />
          </a>
          <a
            href="https://github.com/JayPokale"
            class="cursor-pointer text-secondary h-max"
          >
            <FaBrandsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-pokale-809942143/"
            class="cursor-pointer text-secondary h-max"
          >
            <FaBrandsLinkedinIn />
          </a>
        </div>
      </div>
    </main>
  );
};

export default NavTop;
