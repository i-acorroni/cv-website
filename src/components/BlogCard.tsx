import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { BlogPost } from "@/types/content";
import { Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  basePath?: string; // Allow custom base path (default: /substack)
}

export default function BlogCard({ post, basePath = "/substack" }: BlogCardProps) {
  // If post has a link (external Substack post), use it; otherwise use local route
  const href = post.link || `${basePath}/${post.slug}`;
  const isExternal = !!post.link;

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors overflow-hidden"
    >
      {post.image && (
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {post.title}
        </h3>
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3 space-x-4">
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
      {post.excerpt && (
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
          {post.excerpt}
        </p>
      )}
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
      </div>
    </Link>
  );
}

