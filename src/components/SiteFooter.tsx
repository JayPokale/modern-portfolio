/** Slim footer for pages other than the homepage, which ends in the verdict. */
const SiteFooter = () => (
  <footer className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pb-12">
    <div className="border-t rule pt-6 flex flex-col sm:flex-row justify-between gap-3">
      <p className="font-mono text-xs text-dim">
        © {new Date().getFullYear()} Jay Pokale ·{" "}
        <a href="/" className="link-sweep text-bone hover:text-ember transition-colors">
          back to the editorial
        </a>
      </p>
      <p className="font-mono text-xs text-dim">
        <a href="/writing/rss.xml" className="link-sweep hover:text-bone transition-colors">
          RSS
        </a>{" "}
        · <span className="quip text-sm">no trackers, no cookies, no newsletter popup.</span>
      </p>
    </div>
  </footer>
);

export default SiteFooter;
