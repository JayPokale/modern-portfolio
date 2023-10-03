const WorksItems = () => {
  return (
    <section class="relative px-4 w-full max-w-2xl mx-auto">
      <div class="absolute h-full">
        <div
          class="h-10 w-10 rounded-full opacity-50"
          style={{
            background: `radial-gradient(#ff0000 0%, transparent 80%)`,
          }}
        />
        <div
          class="h-full mx-auto w-0.5 mt-2"
          style={{
            "background-image": `linear-gradient(to bottom,  #ff0000 0%, #00ff00 100%)`,
          }}
        />
      </div>
      <div class="px-14">
        <h1 class="font-semibold text-2xl pb-4" style={{ color: "#ff0000" }}>
          Open Blogging Website
        </h1>
        <div class="flex flex-col gap-4">
          <p class="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            ea! Deleniti molestias, temporibus harum sunt quia expedita fugit
            incidunt optio.
          </p>
          <p>
            <span class="font-semibold" style={{ color: "#ff0000" }}>
              Teck Stack:
            </span>{" "}
            Solidjs, SolidStart, tRPC, MongoDB
          </p>
          <p>
            <span class="font-semibold" style={{ color: "#ff0000" }}>
              URL:
            </span>{" "}
            <a href="https://authorslog.vercel.app/">authorslog.vercel.app</a>
          </p>
          <p>
            <span class="font-semibold" style={{ color: "#ff0000" }}>
              GitHub:
            </span>{" "}
            <a href="https://authorslog.vercel.app/">authorslog.vercel.app</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorksItems;
