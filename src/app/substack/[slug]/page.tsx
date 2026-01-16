import { getAllSubstackPosts, getSubstackPost } from "@/lib/content";
import { format } from "date-fns";
import { Clock, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SubstackPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllSubstackPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SubstackPostPage({ params }: SubstackPostPageProps) {
  const { slug } = await params;
  const post = await getSubstackPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/substack"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Substack
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
          {post.link && (
            <div className="mt-4">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read on Substack <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          )}
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

