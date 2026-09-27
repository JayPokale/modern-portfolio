import type { Metadata } from "next";
import Nav from "../components/Nav";
import Problem from "../components/Problem";
import Observations from "../components/Observations";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Classroom from "../components/Classroom";
import Verdict from "../components/Verdict";
import ChapterHook from "../components/ChapterHook";
import { homeJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Jay",
    lastName: "Pokale",
    username: "JayPokale",
    url: "/",
    siteName: "Jay Pokale",
    title: "Jay Pokale — Problem J.",
    description:
      "Given one engineer and a stream of unreasonable problems, output shipped systems. Top 1% competitive programmer, IIT Hyderabad researcher, founder of Dare2Solve. This site is the editorial.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Pokale — Problem J.",
    description:
      "Top 1% competitive programmer, IIT Hyderabad RAG researcher, founder of Dare2Solve. Verdict: Accepted.",
    creator: "@JayPokale35",
  },
};

export default function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
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
        target="#origin"
        line="Every villain has an origin story. His has a math page and twenty thousand accomplices."
      />
      <Classroom />
      <ChapterHook
        target="#verdict"
        line="Which brings us to the verdict. Spoiler: it's green."
      />
      <Verdict />
    </div>
  );
}
