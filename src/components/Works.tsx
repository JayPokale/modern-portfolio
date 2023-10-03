import TitleGSAP from "./helper/TitleGSAP";
import WorksItems from "./helper/WorksItems";

const Works = () => {
  return (
    <main class="min-h-[calc(min(100vh,100vw))]">
      <TitleGSAP id="works" title="Works" />
      <div class="mx-auto flex flex-col gap-14">
        <WorksItems />
      </div>
    </main>
  );
};

export default Works;
