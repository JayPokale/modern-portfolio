import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "../data";

// self-hosted at build time: no requests to Google from visitors' browsers
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plex-mono",
});

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
  openGraph: { type: "website", siteName: "Jay Pokale", locale: "en_US" },
  twitter: { card: "summary_large_image", creator: "@JayPokale35" },
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

const themeInit = `try{var t=localStorage.getItem("jp-theme");if(t==="light")document.documentElement.dataset.theme="light";var a=localStorage.getItem("jp-accent");if(a)document.documentElement.style.setProperty("--accent",a);}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.png" />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="grain relative">{children}</body>
    </html>
  );
}
