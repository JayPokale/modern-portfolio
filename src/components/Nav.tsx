"use client";

import { motion } from "motion/react";
import ThemeControl from "./ThemeControl";

const items = [
  ["observations", "§1", "§1"],
  ["works", "§2", "§2"],
  ["research", "§3", "§3"],
  ["classroom", "§4", "§4"],
  ["verdict", "verdict", "AC"],
] as const;

const Nav = () => (
  <motion.nav
    initial={{ y: -24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ink/70 border-b rule"
  >
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
      <a href="#top" className="display text-xl text-bone hover:text-ember transition-colors">
        JP<span className="text-ember">.</span>
      </a>
      <div className="flex gap-5 sm:gap-8">
        {items.map(([id, label, short]) => (
          <a
            key={id}
            href={`#${id}`}
            className="mono-label link-sweep hover:!text-bone transition-colors"
          >
            <span className="sm:hidden">{short}</span>
            <span className="hidden sm:inline">
              {id === "verdict" ? "verdict" : `${label} · ${id}`}
            </span>
          </a>
        ))}
        <ThemeControl />
      </div>
    </div>
  </motion.nav>
);

export default Nav;
