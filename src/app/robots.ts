import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/utils/base-path";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}${withBasePath("/sitemap.xml")}`,
  };
}
