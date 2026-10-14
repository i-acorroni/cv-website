import Link from "next/link";
import { format } from "date-fns";
import type { BlogPost } from "@/types/content";

export default function BlogCard({ post, basePath = "/substack" }: { post: BlogPost; basePath?: string }) {
  const href = post.link || `${basePath}/${post.slug}`;
  return (
    <article>
      <h3 className="entry-title">
        <time dateTime={post.date} className="date-marker">{format(new Date(post.date), "yyyy_MMMM d")}_</time>{" "}
        <Link href={href} {...(post.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {post.title}{post.link && <span className="sr-only"> (opens in a new tab)</span>}
        </Link>
      </h3>
      {post.readingTime && <p className="entry-meta">{post.readingTime} min read</p>}
      {post.excerpt && <p className="entry-description">{post.excerpt}</p>}
      {post.tags && post.tags.length > 0 && <p className="entry-meta">{post.tags.join(" · ")}</p>}
    </article>
  );
}
