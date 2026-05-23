import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/utils/base-path";
import type { PostMeta } from "@/types/content";

export function createPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creator.name,
    jobTitle: siteConfig.creator.role,
    url: siteConfig.url,
    email: siteConfig.creator.email,
    image: absoluteUrl(siteConfig.creator.image),
  };
}

export function createArticleSchema(post: PostMeta, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: post.author ?? siteConfig.creator.name,
    },
    image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    url: absoluteUrl(path),
  };
}

export function createBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
