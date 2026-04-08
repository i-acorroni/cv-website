"use client";

import { useState } from "react";
import TalkCard from "@/components/TalkCard";
import { Talk, TalkLanguage, TalkType } from "@/types/content";

interface TalksCollectionProps {
  talks: Talk[];
}

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function TalksCollection({ talks }: TalksCollectionProps) {
  const [selectedType, setSelectedType] = useState<"all" | TalkType>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<
    "all" | TalkLanguage
  >("all");

  const typeOptions = Array.from(new Set(talks.map((talk) => talk.type))).sort(
    (a, b) => formatLabel(a).localeCompare(formatLabel(b))
  );
  const languageOptions = Array.from(
    new Set(talks.map((talk) => talk.language))
  ).sort((a, b) => formatLabel(a).localeCompare(formatLabel(b)));

  const filteredTalks = talks.filter((talk) => {
    const matchesType = selectedType === "all" || talk.type === selectedType;
    const matchesLanguage =
      selectedLanguage === "all" || talk.language === selectedLanguage;

    return matchesType && matchesLanguage;
  });

  return (
    <div className="space-y-6">
      <section className="p-4 border border-border rounded-lg bg-surface">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-text">
              Type
              <select
                value={selectedType}
                onChange={(event) =>
                  setSelectedType(event.target.value as "all" | TalkType)
                }
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:outline-none"
              >
                <option value="all">All types</option>
                {typeOptions.map((type) => (
                  <option key={type} value={type}>
                    {formatLabel(type)}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text">
              Language
              <select
                value={selectedLanguage}
                onChange={(event) =>
                  setSelectedLanguage(
                    event.target.value as "all" | TalkLanguage
                  )
                }
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:outline-none"
              >
                <option value="all">All languages</option>
                {languageOptions.map((language) => (
                  <option key={language} value={language}>
                    {formatLabel(language)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="text-sm text-muted" aria-live="polite">
            {filteredTalks.length}{" "}
            {filteredTalks.length === 1 ? "engagement" : "engagements"}
          </p>
        </div>
      </section>

      {filteredTalks.length === 0 ? (
        <p className="text-muted">No talks match the current filters.</p>
      ) : (
        <ul className="grid gap-6 lg:grid-cols-2">
          {filteredTalks.map((talk) => (
            <li key={talk.id}>
              <TalkCard talk={talk} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
