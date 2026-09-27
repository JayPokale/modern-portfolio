import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, flagship, links } from "../data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Jay Pokale — Engineer, Researcher & Top 1% Competitive Programmer",
    template: "%s · Jay Pokale",
  },
  description:
    "Jay Pokale — researcher at IIT Hyderabad, top 1% competitive programmer (LeetCode Guardian, Codeforces Expert), creator of Chisle and founder of Dare2Solve.",
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
    "Chisle",
    "open source",
    "Dare2Solve",
    "full-stack developer",
    "portfolio",
  ],
  authors: [{ name: "Jay Pokale", url: SITE_URL }],
  creator: "Jay Pokale",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Jay",
    lastName: "Pokale",
    username: "JayPokale",
    url: SITE_URL,
    siteName: "Jay Pokale — Problem J.",
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

const PERSON = `${SITE_URL}/#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Jay Pokale — Problem J.",
      mainEntity: { "@id": PERSON },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: new Date().toISOString(),
    },
    {
      "@type": "Person",
      "@id": PERSON,
      name: "Jay Pokale",
      givenName: "Jay",
      familyName: "Pokale",
      url: SITE_URL,
      image: `${SITE_URL}/Jay.png`,
      email: "mailto:jay.pokale.35@gmail.com",
      jobTitle: "Software Engineer & Graduate Researcher",
      description:
        "Engineer and graduate researcher at IIT Hyderabad, top 1% competitive programmer, creator of Chisle, founder of Dare2Solve and powerlifter.",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Hyderabad",
        url: "https://www.iith.ac.in",
      },
      award: [
        "LeetCode Guardian — top 1% worldwide, peak contest rating 2285",
        "Codeforces Expert",
      ],
      knowsAbout: [
        "Competitive Programming",
        "Algorithms",
        "Retrieval-Augmented Generation",
        "GraphRAG",
        "Semantic Cache Security",
        "Continual Learning",
        "Machine Learning",
        "Full-Stack Development",
        "Powerlifting",
      ],
      sameAs: [
        links.github,
        links.linkedin,
        links.leetcode,
        links.codeforces,
        links.twitter,
        "https://www.npmjs.com/~jaypokale",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Jay Pokale",
      alternateName: "Problem J.",
      inLanguage: "en",
      publisher: { "@id": PERSON },
    },
    {
      "@type": "Organization",
      name: "Dare2Solve",
      url: links.dare2solve,
      description: "A mathematics problem-solving community of more than 20,000 members.",
      founder: { "@id": PERSON },
    },
    {
      "@type": "SoftwareSourceCode",
      name: flagship.title,
      description: flagship.fact,
      url: flagship.site,
      codeRepository: flagship.href,
      programmingLanguage: "JavaScript",
      license: "https://opensource.org/licenses/MIT",
      author: { "@id": PERSON },
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain relative">{children}</body>
    </html>
  );
}
