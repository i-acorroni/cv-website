import { getAllBlogPosts } from "@/lib/content";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No blog posts available yet. Add blog posts in content/blog/ directory.
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

