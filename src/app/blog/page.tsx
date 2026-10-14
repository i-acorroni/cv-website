import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description: "Local blog posts and notes by Izabela Acorroni.",
  pathname: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="site-page">
      <h1 className="page-title">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-muted">
          No notes available yet.
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} basePath="/blog" />
          ))}
        </div>
      )}
    </div>
  );
}
