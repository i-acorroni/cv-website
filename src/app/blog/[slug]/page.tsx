import { getAllBlogPosts, getBlogPost } from "@/lib/content";
import { getMarkdownContent } from "@/lib/markdown";
import { format } from "date-fns";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const markdownContent = await getMarkdownContent<{
    title: string;
    date: string;
    tags?: string[];
  }>("blog", slug);

  if (!markdownContent) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
            <time dateTime={post.date}>
              {format(new Date(post.date), "PPP")}
            </time>
            {post.readingTime && (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime} min read
              </span>
            )}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownContent.html }}
        />
      </article>
    </div>
  );
}

