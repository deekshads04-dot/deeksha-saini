import type { HomepageSectionConfig } from "@/types/homepage";

export const homepageSections: HomepageSectionConfig[] = [
  { id: "hero", enabled: true, order: 1 },
  { id: "whatHeDoes", enabled: true, order: 2 },
  { id: "whatHeIsGoodAt", enabled: true, order: 3 },
  { id: "seeMyWork", enabled: true, order: 4 },
  { id: "featuredVideos", enabled: true, order: 5 },
  { id: "featuredWriting", enabled: true, order: 6 },
  { id: "brandsWorkedWith", enabled: true, order: 7 },
  { id: "latestBlogs", enabled: true, order: 8 },
  { id: "cta", enabled: true, order: 9 },
];

export const whatHeDoes = {
  title: "What I Do",
  subtitle: "Full-funnel storytelling for modern brands",
  items: [
    {
      id: "content",
      title: "Content Creation",
      description:
        "Reels, posts, and short-form video that capture attention and build community.",
      icon: "video",
    },
    {
      id: "copy",
      title: "Copywriting",
      description:
        "Website copy, ad scripts, and brand voice that converts browsers into buyers.",
      icon: "pen",
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description:
        "Strategy, calendars, and campaigns that grow reach and engagement.",
      icon: "share",
    },
  ],
} as const;

export const whatHeIsGoodAt = {
  title: "What I'm Good At",
  subtitle: "Skills honed across dozens of brand campaigns",
  skills: [
    { name: "Brand Storytelling", level: 95 },
    { name: "Instagram Growth", level: 92 },
    { name: "YouTube Strategy", level: 88 },
    { name: "Ad Copywriting", level: 94 },
    { name: "Content Strategy", level: 90 },
    { name: "Campaign Analytics", level: 85 },
  ],
} as const;

export const seeMyWork = {
  title: "See My Work",
  subtitle: "Explore campaigns, writing samples, and case studies",
  cta: { label: "View Portfolio", href: "/portfolio/" },
} as const;

export const brandsWorkedWith = {
  title: "Brands I've Worked With",
  subtitle: "Trusted by growth-focused teams",
} as const;

export const homepageCta = {
  title: "Let's Create Something Remarkable",
  subtitle: "Ready to elevate your brand's story?",
  primaryCta: { label: "Get in Touch", href: "/contact/" },
  secondaryCta: { label: "View Resume", href: "/resume/" },
} as const;
