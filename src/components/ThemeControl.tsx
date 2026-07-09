import { useEffect, useRef, useState } from "react";

const SWATCHES = [
  "#ff4d00", // ember (default)
  "#e5484d", // crimson
  "#d4a016", // gold
  "#12a594", // teal
  "#3e63dd", // cobalt
  "#8e4ec6", // violet
];

const apply = (theme: string, accent: string) => {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  root.style.setProperty("--accent", accent);
  try {
    localStorage.setItem("jp-theme", theme);
    localStorage.setItem("jp-accent", accent);
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new CustomEvent("jp-theme"));
};

const ThemeControl = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? "dark"
  );
  const [accent, setAccent] = useState(() =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim()
  );
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    apply(theme, accent);
  }, [theme, accent]);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", close);
    return () => window.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Theme settings"
        aria-expanded={open}
        className="flex items-center gap-2 mono-label hover:!text-bone transition-colors cursor-pointer"
      >
        <span
          className="inline-block w-3 h-3 rounded-full border border-rule"
          style={{ background: "var(--accent)" }}
        />
        <span className="hidden sm:inline">edition</span>
      </button>

      {open && (
        <div className="absolute right-0 top-10 w-60 bg-ink-2 border rule border-solid p-5 flex flex-col gap-5 shadow-2xl z-50">
          <div>
            <p className="mono-label mb-3">paper</p>
            <div className="grid grid-cols-2 border rule border-solid">
              {(["dark", "light"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`font-mono text-xs py-2 transition-colors cursor-pointer ${
                    theme === t
                      ? "bg-bone text-ink"
                      : "text-dim hover:text-bone"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mono-label mb-3">ink</p>
            <div className="flex items-center gap-2.5 flex-wrap">
              {SWATCHES.map((c) => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  aria-label={`Accent ${c}`}
                  className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-115"
                  style={{
                    background: c,
                    outline:
                      accent.toLowerCase() === c
                        ? "2px solid var(--t-bone)"
                        : "1px solid var(--t-rule)",
                    outlineOffset: "2px",
                  }}
                />
              ))}
              <label
                className="relative w-6 h-6 rounded-full cursor-pointer overflow-hidden border rule border-solid"
                aria-label="Custom accent color"
                title="any color you like"
                style={{
                  background:
                    "conic-gradient(#ff4d00,#d4a016,#12a594,#3e63dd,#8e4ec6,#e5484d,#ff4d00)",
                }}
              >
                <input
                  type="color"
                  value={accent.startsWith("#") ? accent : "#ff4d00"}
                  onChange={(e) => setAccent(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>
          </div>

          <p className="font-mono text-[0.6rem] text-faint leading-relaxed">
            pick any ink — the edition reprints itself.
          </p>
        </div>
      )}
    </div>
  );
};

export default ThemeControl;
