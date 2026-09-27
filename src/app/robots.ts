import type { MetadataRoute } from "next";
import { SITE_URL, flagship, links } from "../data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    // each sister site keeps its own sitemap (every Dare2Solve post, Chisle's pages)
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${flagship.site}/sitemap.xml`,
      `${links.dare2solve}/sitemap.xml`,
    ],
  };
}
