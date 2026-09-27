import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import SiteFooter from "../../components/SiteFooter";
import { formatDate, getPosts } from "../../lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles by Jay Pokale on AI coding tools, retrieval security and competitive programming.",
  alternates: {
    canonical: "/writing",
    types: { "application/rss+xml": "/writing/rss.xml" },
  },
  openGraph: {
    type: "website",
    url: "/writing",
    siteName: "Jay Pokale",
    title: "Writing · Jay Pokale",
    locale: "en_US",
  },
};

export default function Writing() {
  const posts = getPosts();
  if (!posts.length) notFound();

  return (
    <>
      <Nav writing />
      <main className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-32 pb-24">
        <p className="mono-label !text-ember mb-3">Problem J. · the long-form</p>
        <h1 className="display text-[clamp(2.6rem,7vw,5.5rem)] text-bone">Writing.</h1>
        <p className="quip text-lg sm:text-xl mt-5 max-w-[46ch]">
          For when a commit message won't cover it.
        </p>

        <ul className="mt-16 border-t rule">
          {posts.map((p) => (
            <li key={p.slug} className="border-b rule">
              <a href={`/writing/${p.slug}`} className="group grid gap-3 lg:grid-cols-12 py-8">
                <span className="mono-label lg:col-span-2 lg:pt-3">
                  {formatDate(p.date)}
                  {p.draft && " · draft"}
                </span>
                <span className="lg:col-span-10 flex flex-col gap-2">
                  <span className="display text-[clamp(1.6rem,3vw,2.4rem)] text-bone group-hover:text-ember transition-colors duration-300">
                    {p.title}
                  </span>
                  <span className="prose-serif text-lg text-dim max-w-[62ch]">
                    {p.description}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
