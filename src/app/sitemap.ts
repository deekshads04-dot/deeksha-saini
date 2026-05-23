import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllPostSlugs } from "@/lib/content/posts";
import { getAllCompanySlugs } from "@/lib/content/companies";
import { withBasePath } from "@/utils/base-path";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/experience/",
    "/portfolio/",
    "/blog/",
    "/case-studies/",
    "/resume/",
    "/contact/",
  ].map((path) => ({
    url: `${base}${withBasePath(path === "" ? "/" : path)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = getAllPostSlugs("blog").map((slug) => ({
    url: `${base}${withBasePath(`/blog/${slug}/`)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseRoutes = getAllPostSlugs("case-study").map((slug) => ({
    url: `${base}${withBasePath(`/case-studies/${slug}/`)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const companyRoutes = getAllCompanySlugs().map((slug) => ({
    url: `${base}${withBasePath(`/experience/${slug}/`)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes, ...companyRoutes];
}
