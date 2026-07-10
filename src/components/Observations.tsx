"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { observations } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const Figure = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}0{suffix}
    </span>
  );
};

const Observations = () => (
  <section id="observations" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-28 sm:mt-40">
    <SectionHead
      numeral="01"
      kicker="§1 · Observations"
      title="First, the evidence."
      note="the section recruiters scroll to first. hi. take your time — screenshots are allowed."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l rule">
      {observations.map((o, i) => (
        <Reveal key={o.id} delay={i * 0.08}>
          <a
            href={o.href}
            target={o.href.startsWith("#") ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex flex-col gap-5 border-r border-b rule p-6 sm:p-8 h-full min-h-56 justify-between transition-colors duration-300 hover:bg-ink-2"
          >
            <div className="flex items-baseline justify-between">
              <span className="mono-label">obs. {o.id}</span>
              <span className="mono-label opacity-0 group-hover:opacity-100 transition-opacity !text-ember">
                ↗
              </span>
            </div>
            <span className="text-[clamp(2.6rem,5vw,4rem)] leading-none text-bone group-hover:text-ember transition-colors duration-300">
              <Figure value={o.figure} prefix={o.prefix} suffix={o.suffix} />
            </span>
            <div>
              <p className="prose-serif text-lg text-bone">{o.label}</p>
              <p className="font-mono text-[0.8rem] leading-relaxed text-dim mt-2">{o.note}</p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Observations;
