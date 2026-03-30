import type { Metadata } from "next";
import { getAbsoluteUrl, getSiteDescription, getSiteName } from "@/lib/site";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  pathname?: string;
}

export function createPageMetadata({
  title,
  description,
  pathname,
}: PageMetadataOptions): Metadata {
  const siteName = getSiteName();
  const resolvedDescription = description || getSiteDescription();
  const canonicalPath = pathname || "/";
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageUrl = getAbsoluteUrl(canonicalPath);

  return {
    title,
    description: resolvedDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: pageTitle,
      description: resolvedDescription,
      siteName,
      type: "website",
      url: pageUrl,
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: resolvedDescription,
    },
  };
}
