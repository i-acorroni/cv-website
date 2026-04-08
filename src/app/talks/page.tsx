import type { Metadata } from "next";
import TalkCard from "@/components/TalkCard";
import { getAllTalks } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Talks",
  description:
    "Talks, workshops, panels, and lectures related to Izabela Acorroni's research and professional work.",
  pathname: "/talks",
});

export default function TalksPage() {
  const talks = getAllTalks();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-h1 font-heading font-semibold text-text mb-4">
          Talks
        </h1>
        <p className="max-w-3xl text-text">
          This section gathers talks, workshops, panels, and other speaking
          engagements related to my research and professional work.
        </p>
      </header>

      {talks.length === 0 ? (
        <p className="text-muted">
          No talks available yet. Add talks in content/talks/talks.json
        </p>
      ) : (
        <ul className="grid gap-6 lg:grid-cols-2">
          {talks.map((talk) => (
            <li key={talk.id}>
              <TalkCard talk={talk} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
