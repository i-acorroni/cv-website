import Link from "next/link";
import { format, isValid, parseISO } from "date-fns";
import { ExternalLink, FileText } from "lucide-react";
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
  if (/^\d{4}$/.test(date)) {
    return date;
  }

  const parsedDate = parseISO(date);

  if (!isValid(parsedDate)) {
    return date;
  }

  return format(parsedDate, "yyyy");
}

function getEventLine(talk: Talk): string {
  if (talk.event && talk.organisation && talk.organisation !== talk.event) {
    return `${talk.event} • ${talk.organisation}`;
  }

  return talk.event || talk.organisation;
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

      {talk.relatedReports && talk.relatedReports.length > 0 && (
        <section className="mt-5 border-t border-border pt-5">
          <h4 className="text-xs font-mono uppercase tracking-wide text-muted">
            Related institutional reports
          </h4>
          <ul
            className="mt-3 space-y-3"
            aria-label={`Related institutional reports for ${talk.title}`}
          >
            {talk.relatedReports.map((report) => (
              <li
                key={report.url}
                className="rounded-md border border-border bg-paper px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <FileText
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-text">{report.description}</p>
                    <Link
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-sm text-link-alt hover:underline"
                    >
                      {report.label} <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
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
