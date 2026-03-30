import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/content";
import { getAbsoluteUrl } from "@/lib/site";

function buildEntry(
  pathname: string,
  options?: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  }
): MetadataRoute.Sitemap[number] | null {
  const url = getAbsoluteUrl(pathname);

  if (!url) {
    return null;
  }

  return {
    url,
    lastModified: options?.lastModified || new Date(),
    changeFrequency: options?.changeFrequency,
    priority: options?.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = [
    buildEntry("/", { changeFrequency: "weekly", priority: 1 }),
    buildEntry("/cv", { changeFrequency: "monthly", priority: 0.8 }),
    buildEntry("/publications", { changeFrequency: "monthly", priority: 0.9 }),
    buildEntry("/projects", { changeFrequency: "monthly", priority: 0.8 }),
    buildEntry("/blog", { changeFrequency: "monthly", priority: 0.7 }),
    buildEntry("/substack", { changeFrequency: "weekly", priority: 0.7 }),
  ].filter(
    (entry): entry is MetadataRoute.Sitemap[number] => entry !== null
  );
  const blogEntries = getAllBlogPosts()
    .map((post) =>
      buildEntry(`/blog/${post.slug}`, {
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.6,
      })
    )
    .filter((entry): entry is MetadataRoute.Sitemap[number] => entry !== null);

  return [...staticEntries, ...blogEntries];
}
