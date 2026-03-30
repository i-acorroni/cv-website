import type { MetadataRoute } from "next";
import { getAbsoluteUrl, getSiteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = getAbsoluteUrl("/sitemap.xml");
  const host = getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl ? [sitemapUrl] : undefined,
    host,
  };
}
