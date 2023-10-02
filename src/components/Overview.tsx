import OverviewBlocks from "./helper/OverviewBlocks";

const Overview = () => {
  return (
    <main class="min-h-[calc(min(100vh,100vw))] flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <h1 class="font-semibold text-4xl py-4">Overview</h1>
        <div class="flex gap-8 px-8">
          <div class="h-48 w-1 -translate-y-0.5 bg-gradient-to-b rounded-t-full from-white" />
          <p class="w-3/4 text-xl text-justify">
            I am a skilled full stack software developer and competitive
            programmer with experience in
            <span class="font-semibold text-heading"> TypeScript</span>,
            <span class="font-semibold text-heading"> JavaScript </span>
            and <span class="font-semibold text-heading">Python</span> with
            experties in frameworks like React, Solid and ThreeJS. I am a quick
            learner and colaborate closely with clients to create efficient,
            scalable and user-friendly solutions that solve real world problems.
          </p>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <OverviewBlocks />
      </div>
    </main>
  );
};

export default Overview;
