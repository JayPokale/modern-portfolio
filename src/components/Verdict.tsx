"use client";

import { motion } from "motion/react";
import { links } from "../data";
import Reveal from "./Reveal";
import Caption from "./Caption";

const social = [
  ["GitHub", links.github],
  ["LinkedIn", links.linkedin],
  ["LeetCode", links.leetcode],
  ["Codeforces", links.codeforces],
  ["X / Twitter", links.twitter],
] as const;

const Verdict = () => (
  <footer id="verdict" className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mt-36 sm:mt-56 pb-12">
    <div className="border-t rule pt-20 sm:pt-28 flex flex-col items-center text-center gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 1.6, rotate: -14 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 210, damping: 15, mass: 0.9 }}
        className="stamp px-8 sm:px-12 py-4 sm:py-5 text-xl sm:text-3xl"
      >
        Verdict: Accepted
      </motion.div>

      <Reveal delay={0.1}>
        <p className="prose-serif text-xl sm:text-3xl text-bone max-w-[40ch]">
          Every problem here started unsolved. If yours is{" "}
          <em className="display-italic text-bone">interesting enough</em>, it
          won't stay that way.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <a
          href={links.email}
          className="display text-[clamp(1.6rem,5vw,3.6rem)] text-bone hover:text-ember transition-colors duration-300 link-sweep"
        >
          jay.pokale.35@gmail.com
        </a>
        <p className="quip text-lg sm:text-xl mt-6 max-w-[40ch] mx-auto">
          Write fast — my inbox is the only queue I keep at O(1).
        </p>
      </Reveal>

      <Reveal delay={0.3} className="w-full">
        <Caption
          label="the usual witnesses"
          quip="No paywall. OnlyCommits."
          className="justify-center mb-4"
        />
        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-1"
          aria-label="Social links"
        >
          {social.map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="mono-label link-sweep !text-dim hover:!text-bone transition-colors"
            >
              {name}
            </a>
          ))}
        </nav>
      </Reveal>

      <div className="w-full border-t rule pt-6 mt-8 flex flex-col sm:flex-row justify-between gap-3 text-left">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} Jay Pokale ·{" "}
          <span className="quip text-sm">commit, committed, institutionalized.</span>
        </p>
        <p className="font-mono text-xs text-dim">
          no trackers · no cookies · no contact form{" "}
          <span className="quip text-sm">
            (it never worked). Site status: “trust me bro”.
          </span>
        </p>
      </div>
    </div>
  </footer>
);

export default Verdict;
