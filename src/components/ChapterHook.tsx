import Reveal from "./Reveal";

const ChapterHook = ({ line, target }: { line: string; target: string }) => (
  <Reveal className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-24 sm:mt-32">
    <a
      href={target}
      className="group flex flex-col items-center gap-5 text-center no-underline"
    >
      <span
        className="w-px h-14 sm:h-20 bg-gradient-to-b from-transparent via-rule to-ember/60"
        aria-hidden
      />
      <p className="display display-italic text-[clamp(1.25rem,2.6vw,1.9rem)] text-dim group-hover:text-bone transition-colors duration-300 max-w-[46ch]">
        {line}
      </p>
      <span className="mono-label !text-ember opacity-80 group-hover:opacity-100 transition-opacity">
        the story continues ↓
      </span>
    </a>
  </Reveal>
);

export default ChapterHook;
