import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    // Sesuaikan dengan domain Anda
    sitemap: "https://dutaenergi.com/sitemap.xml",
  };
}
