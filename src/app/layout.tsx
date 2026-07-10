import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://jaypokale.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:
      "Jay Pokale — Engineer, Researcher & Top 1% Competitive Programmer",
    template: "%s · Jay Pokale",
  },
  description:
    "Jay Pokale: engineer and graduate researcher at IIT Hyderabad (certifiably robust GraphRAG, cache integrity), LeetCode Guardian (top 0.94%, peak 2285), Codeforces Expert, founder of the 20,000-strong Dare2Solve math community, and builder of RDXmin and production RAG systems. This site is the editorial to Problem J.",
  keywords: [
    "Jay Pokale",
    "software engineer",
    "IIT Hyderabad",
    "competitive programming",
    "LeetCode Guardian",
    "Codeforces Expert",
    "RAG",
    "retrieval-augmented generation",
    "GraphRAG",
    "RDXmin",
    "Dare2Solve",
    "full-stack developer",
    "portfolio",
  ],
  authors: [{ name: "Jay Pokale", url: SITE }],
  creator: "Jay Pokale",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Jay Pokale — Problem J.",
    title: "Jay Pokale — Problem J.",
    description:
      "Given one engineer and a stream of unreasonable problems, output shipped systems. Top 1% competitive programmer, IIT Hyderabad researcher, founder of Dare2Solve. This site is the editorial.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Jay Pokale — Problem J.",
    description:
      "Top 1% competitive programmer, IIT Hyderabad RAG researcher, founder of Dare2Solve. Verdict: Accepted.",
    creator: "@JayPokale35",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay Pokale",
  url: SITE,
  email: "mailto:jay.pokale.35@gmail.com",
  image: `${SITE}/Jay.png`,
  jobTitle: "Software Engineer & Graduate Researcher",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Hyderabad",
  },
  founder: {
    "@type": "Organization",
    name: "Dare2Solve",
  },
  knowsAbout: [
    "Competitive Programming",
    "Retrieval-Augmented Generation",
    "GraphRAG",
    "Cache Integrity",
    "Machine Learning",
    "Full-Stack Development",
    "Algorithms",
  ],
  sameAs: [
    "https://github.com/JayPokale",
    "https://www.linkedin.com/in/JayPokale",
    "https://leetcode.com/u/jaypokale",
    "https://codeforces.com/profile/rdx_panther",
    "https://x.com/JayPokale35",
  ],
};

const themeInit = `try{var t=localStorage.getItem("jp-theme");if(t==="light")document.documentElement.dataset.theme="light";var a=localStorage.getItem("jp-accent");if(a)document.documentElement.style.setProperty("--accent",a);}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="grain relative">{children}</body>
    </html>
  );
}
