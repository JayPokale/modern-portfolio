import Reveal from "./Reveal";

const SectionHead = ({
  numeral,
  kicker,
  title,
  note,
}: {
  numeral: string;
  kicker: string;
  title: string;
  note?: string;
}) => (
  <div className="relative mb-14 sm:mb-20">
    <span
      className="ghost-numeral absolute -top-10 sm:-top-16 -left-2 sm:-left-4 text-[clamp(7rem,22vw,17rem)]"
      aria-hidden
    >
      {numeral}
    </span>
    <Reveal className="relative pt-16 sm:pt-24">
      <p className="mono-label !text-ember mb-3">{kicker}</p>
      <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)] text-bone">
        {title}
      </h2>
      {note && (
        <p className="font-mono text-sm text-faint mt-4 max-w-[52ch]">
          {note}
        </p>
      )}
    </Reveal>
  </div>
);

export default SectionHead;
