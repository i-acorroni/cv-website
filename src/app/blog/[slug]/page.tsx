import type { Metadata } from "next";
import { getAllBlogPosts, getBlogPost } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
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

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createPageMetadata({
      title: "Blog",
      description: "Local blog posts and notes by Izabela Acorroni.",
      pathname: "/blog",
    });
  }

  const metadata = createPageMetadata({
    title: post.title,
    description: post.excerpt || "Local blog post by Izabela Acorroni.",
    pathname: `/blog/${slug}`,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.date,
    },
  };
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
    <div className="site-page">
      <Link
        href="/blog"
        className="inline-flex items-center text-accent hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="page-title">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-muted space-x-4">
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
                  className="text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownContent.html }}
        />
      </article>
    </div>
  );
}
