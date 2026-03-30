import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllSubstackPosts } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Substack",
  description:
    "Recent writing from The Law and Tech Mix & Match by Izabela Acorroni.",
  pathname: "/substack",
});

export default async function SubstackPage() {
  const posts = await getAllSubstackPosts();
  const publicationUrl =
    process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL?.replace(/\/feed$/, "") ||
    "https://thelawandtechmixandmatch.substack.com";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-h1 font-heading font-semibold text-text mb-2">
            Substack
          </h1>
          <p className="text-muted max-w-2xl">
            Essays and commentary from The Law and Tech Mix & Match.
          </p>
        </div>
        <Link
          href={publicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-surface border border-border text-text hover:bg-accent hover:text-white hover:border-accent transition-colors text-sm font-medium"
        >
          Visit publication
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted">
          No Substack posts are available right now. Check that the RSS feed is
          configured and reachable.
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
