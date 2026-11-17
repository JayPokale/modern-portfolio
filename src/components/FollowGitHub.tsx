import { links } from "../data";
import { githubCount } from "../lib/github";
import Reveal from "./Reveal";

/** The call to action: a terminal line you can paste, or a button you can click. */
const FollowGitHub = async () => {
  const followers = await githubCount("users/JayPokale", "followers", 32);

  return (
    <Reveal className="mt-20 scroll-mt-24">
      <div id="follow" className="scroll-mt-24 border rule p-6 sm:p-10 grid gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="mono-label">follow the work</span>
          <p className="font-mono text-sm sm:text-base text-bone break-all">
            <span className="text-ember select-none">$ </span>
            <span className="select-all">gh api -X PUT user/following/JayPokale</span>
          </p>
          <p className="font-mono text-xs text-dim">
            # {followers.toLocaleString("en-US")} followers · new repos, merged PRs and the benchmarks Chisle loses, as they ship
          </p>
          <p className="quip text-xl sm:text-2xl">
            Fewer followers than Chisle has stars. The code is more popular than me, which is the correct order.
          </p>
        </div>
        <div className="lg:col-span-5 flex lg:justify-end">
          <a
            href={links.github}
            target="_blank"
            rel="me noreferrer"
            className="display text-2xl sm:text-3xl px-7 py-4 bg-ember text-ink hover:bg-bone transition-colors duration-300"
          >
            Follow @JayPokale&nbsp;↗
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default FollowGitHub;
