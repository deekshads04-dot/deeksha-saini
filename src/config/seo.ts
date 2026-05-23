import { siteConfig } from "./site";

export const defaultSeo = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image" as const,
    creator: "@deekshasaini",
  },
};

export const pageSeo = {
  home: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
  experience: {
    title: `Experience | ${siteConfig.name}`,
    description: "Company-wise experience, campaigns, and brand work.",
  },
  portfolio: {
    title: `Portfolio | ${siteConfig.name}`,
    description: "Writing samples, campaigns, and creative work.",
  },
  blog: {
    title: `Blog | ${siteConfig.name}`,
    description: "Insights on content, copywriting, and social growth.",
  },
  caseStudies: {
    title: `Case Studies | ${siteConfig.name}`,
    description: "Deep dives into campaigns and measurable results.",
  },
  resume: {
    title: `Resume | ${siteConfig.name}`,
    description: "Professional resume and downloadable PDF.",
  },
  contact: {
    title: `Contact | ${siteConfig.name}`,
    description: "Get in touch for collaborations and projects.",
  },
} as const;
