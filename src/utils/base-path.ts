const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix for fetch() and other non-Next URLs (Next.js does not apply basePath here). */
export function withBasePath(path: string): string {
  if (!basePath) return path.startsWith("/") ? path : `/${path}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Full URL for sitemap, Open Graph, RSS, etc. Avoids doubling when SITE_URL already includes the repo path. */
export function absoluteUrl(path: string): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(
    /\/$/,
    "",
  );
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return `${siteUrl}${normalized}`;
  if (siteUrl.endsWith(basePath)) return `${siteUrl}${normalized}`;
  return `${siteUrl}${basePath}${normalized}`;
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
}
