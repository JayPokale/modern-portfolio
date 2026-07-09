import Nav from "./components/Nav";
import Problem from "./components/Problem";
import Observations from "./components/Observations";
import Works from "./components/Works";
import Research from "./components/Research";
import Classroom from "./components/Classroom";
import Verdict from "./components/Verdict";
import ChapterHook from "./components/ChapterHook";

const App = () => (
  <div id="top" className="grain relative">
    <Nav />
    <Problem />
    <Observations />
    <ChapterHook
      target="#works"
      line="But ratings only prove he can solve other people's problems — a lawyer would call that circumstantial. So he started shipping his own."
    />
    <Works />
    <ChapterHook
      target="#research"
      line="Then one of his systems retrieved a poisoned answer. He took it personally — so personally it became two theses. IIT Hyderabad is now funding the grudge."
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

export default App;
