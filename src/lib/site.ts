/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Override per deployment via NEXT_PUBLIC_SITE_URL (no trailing slash).
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.heritagejute.com";
  return raw.replace(/\/+$/, "");
}

export const siteUrl = getSiteUrl();
