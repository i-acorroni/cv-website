import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, Publication, Project, Talk } from "@/types/content";
import { calculateReadingTime } from "./markdown";

const contentDirectory = path.join(process.cwd(), "content");

function getDateTimestamp(date: string): number {
  const timestamp = new Date(date).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

// Blog posts (local markdown content)
export function getAllBlogPosts(): BlogPost[] {
  try {
    const blogDirectory = path.join(contentDirectory, "blog");

    if (!fs.existsSync(blogDirectory)) {
      return [];
    }

    const posts = fs
      .readdirSync(blogDirectory)
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const slug = file.replace(/\.md$/, "");
        const fullPath = path.join(blogDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const tags = Array.isArray(data.tags)
          ? data.tags.filter((tag): tag is string => typeof tag === "string")
          : [];

        return {
          slug,
          title: typeof data.title === "string" ? data.title : slug,
          date:
            typeof data.date === "string" ? data.date : new Date(0).toISOString(),
          excerpt: typeof data.excerpt === "string" ? data.excerpt : undefined,
          tags,
          content,
          readingTime: calculateReadingTime(content),
        };
      });

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  return getAllBlogPosts().find((post) => post.slug === slug) || null;
}

// Substack posts (using RSS feed)
export async function getAllSubstackPosts(): Promise<BlogPost[]> {
  const { fetchSubstackPosts } = await import("./substack");
  return fetchSubstackPosts();
}

export async function getSubstackPost(slug: string): Promise<BlogPost | null> {
  const { getSubstackPost: getPost } = await import("./substack");
  return getPost(slug);
}

export async function getRecentSubstackPosts(limit: number = 5): Promise<BlogPost[]> {
  const { getRecentSubstackPosts: getRecent } = await import("./substack");
  return getRecent(limit);
}

// Publications
export function getAllPublications(): Publication[] {
  try {
    const publicationsPath = path.join(contentDirectory, "publications", "publications.json");
    const fileContents = fs.readFileSync(publicationsPath, "utf8");
    const publications: Publication[] = JSON.parse(fileContents);
    return publications.sort((a, b) => b.year - a.year);
  } catch {
    return [];
  }
}

// Projects
export function getAllProjects(): Project[] {
  try {
    const projectsPath = path.join(contentDirectory, "projects", "projects.json");
    const fileContents = fs.readFileSync(projectsPath, "utf8");
    const projects: Project[] = JSON.parse(fileContents);
    return projects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  } catch {
    return [];
  }
}

// Talks
export function getAllTalks(): Talk[] {
  try {
    const talksPath = path.join(contentDirectory, "talks", "talks.json");
    const fileContents = fs.readFileSync(talksPath, "utf8");
    const talks: Talk[] = JSON.parse(fileContents);

    return talks.sort(
      (a, b) => getDateTimestamp(b.date) - getDateTimestamp(a.date)
    );
  } catch {
    return [];
  }
}

export function getFeaturedTalks(limit: number = 3): Talk[] {
  const talks = getAllTalks();
  const featuredTalks = talks.filter((talk) => talk.featured);

  if (featuredTalks.length >= limit) {
    return featuredTalks.slice(0, limit);
  }

  const fallbackTalks = talks
    .filter((talk) => !talk.featured)
    .slice(0, limit - featuredTalks.length);

  return [...featuredTalks, ...fallbackTalks];
}
