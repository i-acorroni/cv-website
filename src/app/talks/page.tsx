import type { Metadata } from "next";
import TalkCard from "@/components/TalkCard";
import { getAllTalks } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Talks",
  description: "Talks, workshops, panels, and lectures related to Izabela Acorroni's research and professional work.",
  pathname: "/talks",
});

export default function TalksPage() {
  const talks = getAllTalks();

  return (
    <div className="site-page">
      <p className="page-kicker">Speaking &amp; events</p>
      <h1 className="page-title">talks</h1>
      {talks.length === 0 ? <p>No talks available yet.</p> : (
        <ul className="notebook-list">
          {talks.map((talk) => <li key={talk.id}><TalkCard talk={talk} /></li>)}
        </ul>
      )}
    </div>
  );
}
