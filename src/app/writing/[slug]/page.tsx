import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import SiteFooter from "../../../components/SiteFooter";
import { SITE_URL } from "../../../data";
import { PERSON_ID } from "../../../lib/schema";
import { formatDate, getPost, getPosts } from "../../../lib/writing";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/writing/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      types: { "application/rss+xml": "/writing/rss.xml" },
    },
    openGraph: {
      type: "article",
      url,
      siteName: "Jay Pokale",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [SITE_URL],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@JayPokale35",
    },
    robots: post.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function Article({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/writing/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: `${SITE_URL}/opengraph-image.jpg`,
    inLanguage: "en",
    author: { "@type": "Person", "@id": PERSON_ID, name: "Jay Pokale", url: SITE_URL },
    publisher: { "@id": PERSON_ID },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav writing />
      <main className="px-5 sm:px-10 max-w-[46rem] mx-auto pt-32 pb-24">
        <a href="/writing" className="mono-label link-sweep hover:!text-bone transition-colors">
          ← writing
        </a>
        <p className="mono-label mt-10">
          {formatDate(post.date)} · {post.readingMinutes} min read
          {post.draft && " · draft, not published"}
        </p>
        <h1 className="display text-[clamp(2.2rem,5.5vw,3.8rem)] text-bone mt-4">
          {post.title}
        </h1>
        <p className="prose-serif text-xl sm:text-2xl text-dim mt-6">{post.description}</p>

        <article
          className="article mt-12"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <p className="prose-serif text-lg text-dim mt-16 border-t rule pt-8">
          Written by{" "}
          <a href="/" className="link-sweep text-bone hover:text-ember transition-colors">
            Jay Pokale
          </a>{" "}
          — researcher at IIT Hyderabad, top 1% competitive programmer, author of
          Chisle.{" "}
          <span className="quip">Replies faster than his CI.</span>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
