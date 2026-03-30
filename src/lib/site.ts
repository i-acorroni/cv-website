const DEFAULT_SITE_NAME = "Izabela Acorroni";
const DEFAULT_SITE_DESCRIPTION =
  "Law and technology researcher sharing publications, projects, writing, and a CV.";

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

export function getSiteOrigin(): string | undefined {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return undefined;
  }

  return siteUrl.origin;
}

export function getAbsoluteUrl(pathname: string = "/"): string | undefined {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return undefined;
  }

  return new URL(pathname, siteUrl).toString();
}
