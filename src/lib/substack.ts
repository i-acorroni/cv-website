import Parser from "rss-parser";
import { BlogPost } from "@/types/content";
import { calculateReadingTime } from "./markdown";

const parser = new Parser();

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  contentSnippet?: string;
  guid?: string;
}

// Get Substack RSS feed URL from environment variable or use default
function getSubstackFeedUrl(): string | null {
  return process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL || null;
}

// Extract slug from Substack post link
function extractSlugFromLink(link: string): string {
  try {
    const url = new URL(link);
    const pathParts = url.pathname.split("/").filter(Boolean);
    // Substack URLs are typically: https://[publication].substack.com/p/[slug]
    return pathParts[pathParts.length - 1] || "unknown";
  } catch {
    return "unknown";
  }
}

// Extract the first image URL from HTML content
function extractImageFromContent(content: string): string | undefined {
  if (!content) return undefined;
  
  // Match img tags with src attribute
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  // Also check for Substack's image format
  const substackImgMatch = content.match(/https?:\/\/[^"'\s<>]+\.(jpg|jpeg|png|gif|webp)/i);
  if (substackImgMatch && substackImgMatch[0]) {
    return substackImgMatch[0];
  }
  
  return undefined;
}

// Fetch and parse Substack RSS feed
export async function fetchSubstackPosts(): Promise<BlogPost[]> {
  const feedUrl = getSubstackFeedUrl();
  
  if (!feedUrl) {
    console.warn("NEXT_PUBLIC_SUBSTACK_FEED_URL is not set. Substack posts will not be fetched.");
    return [];
  }

  try {
    const feed = await parser.parseURL(feedUrl);
    
    if (!feed.items || feed.items.length === 0) {
      return [];
    }

    const posts: BlogPost[] = feed.items.map((item) => {
      const slug = extractSlugFromLink(item.link || "");
      const content = item.content || item.contentSnippet || "";
      const image = extractImageFromContent(content);
      
      return {
        slug,
        title: item.title || "Untitled",
        date: item.pubDate || new Date().toISOString(),
        excerpt: item.contentSnippet || "",
        tags: [], // Substack doesn't provide tags in RSS
        content,
        readingTime: content ? calculateReadingTime(content) : undefined,
        link: item.link, // Store original link for external navigation
        image, // Extract featured image from content
      };
    });

    // Sort by date, newest first
    return posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error fetching Substack feed:", error);
    return [];
  }
}

// Get a single Substack post by slug
export async function getSubstackPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchSubstackPosts();
  return posts.find((post) => post.slug === slug) || null;
}

// Get recent Substack posts
export async function getRecentSubstackPosts(limit: number = 5): Promise<BlogPost[]> {
  const posts = await fetchSubstackPosts();
  return posts.slice(0, limit);
}

