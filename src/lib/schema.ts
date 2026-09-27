import { SITE_URL, flagship, links } from "../data";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Homepage structured data: the page is a profile of one person. */
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Jay Pokale — Problem J.",
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
      dateModified: new Date().toISOString(),
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
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
        links.instagram,
        links.facebook,
        links.devto,
        "https://www.npmjs.com/~jaypokale",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Jay Pokale",
      alternateName: "Problem J.",
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Organization",
      name: "Dare2Solve",
      url: links.dare2solve,
      description: "A mathematics problem-solving community of more than 20,000 members.",
      founder: { "@id": PERSON_ID },
    },
    {
      "@type": "SoftwareSourceCode",
      name: flagship.title,
      description: flagship.fact,
      url: flagship.site,
      codeRepository: flagship.href,
      programmingLanguage: "JavaScript",
      license: "https://opensource.org/licenses/MIT",
      author: { "@id": PERSON_ID },
    },
  ],
};
