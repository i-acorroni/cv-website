const DEFAULT_SITE_NAME = "CV Website";
const DEFAULT_SITE_DESCRIPTION = "Professional CV and portfolio website";

export function getSiteName(): string {
  return process.env.NEXT_PUBLIC_SITE_NAME?.trim() || DEFAULT_SITE_NAME;
}

export function getSiteDescription(): string {
  return DEFAULT_SITE_DESCRIPTION;
}

export function getSiteUrl(): URL | undefined {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawSiteUrl) {
    return undefined;
  }

  const normalizedSiteUrl = /^https?:\/\//i.test(rawSiteUrl)
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

  try {
    return new URL(normalizedSiteUrl);
  } catch {
    return undefined;
  }
}
