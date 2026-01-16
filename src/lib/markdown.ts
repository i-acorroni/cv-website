import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export async function getMarkdownContent<T>(
  directory: string,
  slug: string
): Promise<{ data: T; content: string; html: string } | null> {
  try {
    const fullPath = path.join(contentDirectory, directory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(remarkHtml).process(content);
    const html = processedContent.toString();

    return {
      data: data as T,
      content,
      html,
    };
  } catch (error) {
    return null;
  }
}

export function getAllMarkdownSlugs(directory: string): string[] {
  try {
    const fullPath = path.join(contentDirectory, directory);
    const files = fs.readdirSync(fullPath);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    return [];
  }
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

