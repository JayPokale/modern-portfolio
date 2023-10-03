import { For } from "solid-js";
import TitleGSAP from "./helper/TitleGSAP";
import WorksItems from "./helper/WorksItem";
import { works } from "~/constants";

const Works = () => {
  return (
    <main class="min-h-[calc(min(100vh,100vw))]">
      <TitleGSAP id="works" title="Works" />
      <div class="mx-auto flex flex-col gap-9">
        <For each={works}>{(item) => <WorksItems item={item} />}</For>
      </div>
    </main>
  );
};

export default Works;
