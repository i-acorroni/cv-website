import Link from "next/link";
import { format, isValid, parseISO } from "date-fns";
import { ExternalLink } from "lucide-react";
import { Talk } from "@/types/content";

interface TalkCardProps {
  talk: Talk;
  showThemes?: boolean;
}

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatTalkDate(date: string): string {
  const parsedDate = parseISO(date);

  if (!isValid(parsedDate)) {
    return date;
  }

  return format(parsedDate, "MMMM d, yyyy");
}

function getEventLine(talk: Talk): string {
  if (!talk.organisation || talk.organisation === talk.event) {
    return talk.event;
  }

  return `${talk.event} • ${talk.organisation}`;
}

export default function TalkCard({
  talk,
  showThemes = true,
}: TalkCardProps) {
  return (
    <article className="p-6 border border-border rounded-lg bg-surface h-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-heading font-semibold text-text">
            {talk.title}
          </h3>
          <p className="text-text">{getEventLine(talk)}</p>
          <p className="text-meta text-muted">
            {formatTalkDate(talk.date)}
            {talk.location ? ` • ${talk.location}` : ""}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <span className="px-2 py-1 text-xs rounded bg-accent text-white font-mono">
            {formatLabel(talk.type)}
          </span>
          <span className="px-2 py-1 text-xs rounded bg-surface border border-border text-muted font-mono">
            {formatLabel(talk.language)}
          </span>
        </div>
      </div>

      <p className="text-text mt-4">{talk.description}</p>

      {showThemes && talk.themes.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-4" aria-label="Talk themes">
          {talk.themes.map((theme) => (
            <li
              key={theme}
              className="px-2 py-1 text-meta bg-border text-text rounded font-mono"
            >
              {theme}
            </li>
          ))}
        </ul>
      )}

      {(talk.link || talk.videoUrl || talk.slidesUrl) && (
        <div className="flex flex-wrap gap-3 mt-4">
          {talk.link && (
            <Link
              href={talk.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View event details for ${talk.title}`}
              className="text-sm text-accent hover:underline flex items-center"
            >
              Event details <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {talk.videoUrl && (
            <Link
              href={talk.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch the recording for ${talk.title}`}
              className="text-sm text-accent hover:underline flex items-center"
            >
              Watch recording <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
          {talk.slidesUrl && (
            <Link
              href={talk.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View slides for ${talk.title}`}
              className="text-sm text-link-alt hover:underline flex items-center"
            >
              View slides <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
