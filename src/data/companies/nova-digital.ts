import type { Company } from "@/types/company";

export const company: Company = {
  name: "Nova Digital",
  slug: "nova-digital",
  logo: "/images/companies/nova-digital-logo.svg",
  coverImage: "/images/companies/nova-digital-cover.svg",
  industry: "SaaS / Technology",
  role: "Senior Copywriter",
  duration: "Mar 2023 — Dec 2023",
  overview:
    "Owned website copy, email sequences, and ad creative for Nova Digital's B2B SaaS platform, driving measurable conversion improvements.",
  achievements: [
    "Increased landing page conversion rate by 34%",
    "Rewrote 12 core product pages with unified brand voice",
    "Created email nurture sequence with 42% open rate",
    "Developed ad copy framework used across paid channels",
  ],
  socials: {
    linkedin: "https://linkedin.com/company/novadigital",
    website: "https://novadigital.example.com",
    twitter: "https://twitter.com/novadigital",
  },
  sections: [
    "hero",
    "overview",
    "achievements",
    "featuredVideos",
    "blogs",
  ],
  featuredVideos: [
    {
      id: "nd-v1",
      title: "Nova Digital Product Demo Script",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/thumbnails/nova-demo.svg",
    },
  ],
  instagramReels: [],
  instagramPosts: [],
  blogs: [
    {
      title: "Anatomy of a High-Converting Landing Page",
      slug: "anatomy-of-high-converting-landing-page",
    },
  ],
};
