import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, Publication, Project } from "@/types/content";
import { calculateReadingTime } from "./markdown";

const contentDirectory = path.join(process.cwd(), "content");

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
  } catch (error) {
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
  } catch (error) {
    return [];
  }
}

