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

/**
 * Default Open Graph image used across the site.
 * Kept as JPEG (not WebP) for compatibility with Facebook, LinkedIn,
 * WhatsApp, Slack, and iMessage — these consumers don't render WebP previews.
 */
export const defaultOgImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Heritage Jute Fibers — certified Bangladesh jute exporter",
} as const;
