import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { defaultSeo } from "@/config/seo";
import { withBasePath } from "@/utils/base-path";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title = defaultSeo.title,
    description = defaultSeo.description,
    path = "/",
    image = "/images/og-default.svg",
    type = "website",
    publishedTime,
    modifiedTime,
    tags,
  } = options;

  const url = `${siteConfig.url}${withBasePath(path)}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${withBasePath(image)}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: defaultSeo.openGraph.locale,
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(tags && { tags }),
    },
    twitter: {
      card: defaultSeo.twitter.card,
      title,
      description,
      images: [imageUrl],
      creator: defaultSeo.twitter.creator,
    },
  };
}
