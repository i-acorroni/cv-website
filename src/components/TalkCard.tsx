import type { Talk } from "@/types/content";
import { format, isValid, parseISO } from "date-fns";

function formatEventDate(date: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const parsed = parseISO(date);
    if (isValid(parsed)) return format(parsed, "yyyy_MMMM d");
  }
  const monthYear = date.match(/^([A-Za-z]+) (\d{4})$/);
  return monthYear ? `${monthYear[2]}_${monthYear[1]}` : date;
}

export default function TalkCard({ talk }: { talk: Talk }) {
  const event = talk.organisation && talk.organisation !== talk.event
    ? `${talk.event}, ${talk.organisation}` : talk.event || talk.organisation;
  const links = [
    { label: "event", href: talk.link },
    { label: "recording", href: talk.videoUrl },
    { label: "slides", href: talk.slidesUrl },
  ].filter((link) => link.href);

  return (
    <article>
      <p className="talk-entry">
        <span className="date-marker">{formatEventDate(talk.date)}_</span>{" "}
        <strong>{talk.shortTitle || talk.title}</strong> — {event}.
        {links.map((link) => (
          <span key={link.label} className="talk-resource">
            {" "}<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} for ${talk.title} (opens in a new tab)`}>
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          </span>
        ))}
      </p>
    </article>
  );
}
