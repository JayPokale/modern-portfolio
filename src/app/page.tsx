import Nav from "../components/Nav";
import Problem from "../components/Problem";
import Observations from "../components/Observations";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Classroom from "../components/Classroom";
import Verdict from "../components/Verdict";
import ChapterHook from "../components/ChapterHook";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <Problem />
      <Observations />
      <ChapterHook
        target="#open-source"
        line="Ratings prove he solves other people's problems. So he started shipping his own — in public, where strangers can file issues."
      />
      <OpenSource />
      <ChapterHook
        target="#projects"
        line="Not everything gets a README and a star count. Some things just quietly run in production and never call home."
      />
      <Projects />
      <ChapterHook
        target="#lab"
        line="Then one of his systems retrieved a poisoned answer. He took it personally. IIT Hyderabad is now funding the grudge — times three."
      />
      <Research />
      <ChapterHook
        target="#classroom"
        line="Every solver has an origin story. His starts years earlier — a math page, twenty thousand strangers, and absolutely no business plan."
      />
      <Classroom />
      <ChapterHook
        target="#verdict"
        line="Which brings this editorial, at last, to its verdict. Spoiler: it's green."
      />
      <Verdict />
    </div>
  );
}
