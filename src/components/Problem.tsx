import { motion } from "motion/react";
import { links } from "../data";
import ParticlePortrait from "./ParticlePortrait";

const rise = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const proofLinks = [
  ["GitHub", links.github],
  ["LeetCode", links.leetcode],
  ["Codeforces", links.codeforces],
  ["LinkedIn", links.linkedin],
  ["X", links.twitter],
] as const;

const Problem = () => (
  <header className="relative min-h-svh flex flex-col justify-between px-5 sm:px-10 lg:px-16 pt-24 pb-10 max-w-[1400px] mx-auto">
    {/* the author, in roughly sixteen thousand pieces */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.9 }}
      className="absolute inset-x-0 bottom-0 top-16 lg:left-[40%] lg:inset-y-0 opacity-25 lg:opacity-90 pointer-events-none lg:[mask-image:linear-gradient(to_right,transparent_0%,black_34%)]"
      aria-hidden
    >
      <ParticlePortrait src="/Jay.png" className="w-full h-full" />
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col gap-10"
    >
      {/* problem header row */}
      <motion.div
        variants={fade}
        custom={0}
        className="flex flex-wrap justify-between gap-x-8 gap-y-2 border-b rule pb-4"
      >
        <span className="mono-label !text-ember">Problem J.</span>
        <span className="mono-label">
          time limit: one lifetime · memory: unbounded · sleep: segfaulted
        </span>
      </motion.div>

      {/* the name */}
      <h1 className="display text-[clamp(2.7rem,9.5vw,8rem)] text-bone">
        <span className="block overflow-hidden">
          <motion.span variants={rise} custom={0} className="block">
            Jay
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span variants={rise} custom={1} className="block">
            Pokale<span className="cursor-blink ml-3 sm:ml-5" aria-hidden />
          </motion.span>
        </span>
      </h1>

      {/* statement */}
      <motion.p
        variants={fade}
        custom={1}
        className="prose-serif text-lg sm:text-xl text-dim max-w-[46ch]"
      >
        Engineer & researcher at{" "}
        <em className="display-italic text-bone">IIT Hyderabad</em>. I rank in
        the top&nbsp;1% of competitive programmers worldwide, build retrieval
        systems that cite their sources, and run a twenty-thousand-strong math
        community. This page is the{" "}
        <em className="display-italic text-bone">editorial</em>. Modesty was
        cut in code review.
      </motion.p>
    </motion.div>

    {/* input/output block + proof links */}
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 mt-16 grid gap-10 lg:grid-cols-2 lg:items-end"
    >
      <motion.dl
        variants={fade}
        custom={2}
        className="font-mono text-base sm:text-lg space-y-2 border-l-2 border-ember pl-5"
      >
        <div className="flex gap-4">
          <dt className="text-faint w-20 shrink-0">Input</dt>
          <dd className="text-bone">an unreasonable problem.</dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-faint w-20 shrink-0">Output</dt>
          <dd className="text-bone">a shipped, verified system.</dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-faint w-20 shrink-0">Scoring</dt>
          <dd className="text-dim">partial credit not accepted.</dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-faint w-20 shrink-0">Note</dt>
          <dd className="text-dim">
            it is guaranteed that a solution exists.
          </dd>
        </div>
      </motion.dl>

      <motion.nav
        variants={fade}
        custom={3}
        className="flex flex-wrap items-baseline gap-x-7 gap-y-3 lg:justify-end"
        aria-label="Profiles"
      >
        <span className="mono-label !text-faint w-full lg:w-auto lg:mr-2">
          evidence, in case this sounds made up →
        </span>
        {proofLinks.map(([name, href]) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="link-sweep mono-label !text-bone hover:!text-ember transition-colors"
          >
            {name}&nbsp;↗
          </a>
        ))}
      </motion.nav>
    </motion.div>

    {/* prologue hook — chapter one awaits */}
    <motion.a
      href="#observations"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.9 }}
      className="group relative z-10 mt-14 flex flex-col items-center gap-3 text-center no-underline"
    >
      <p className="display display-italic text-[clamp(1.15rem,2.2vw,1.6rem)] text-dim group-hover:text-bone transition-colors">
        The judges demanded proof. He brought receipts.
      </p>
      <span className="mono-label !text-ember">chapter one ↓</span>
    </motion.a>
  </header>
);

export default Problem;
