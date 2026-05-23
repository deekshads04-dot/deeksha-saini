export const siteConfig = {
  name: "Deeksha Saini",
  title: "Deeksha Saini — Content Creator & Copywriter",
  description:
    "Content creator, copywriter, and social media marketer crafting stories that grow brands.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  creator: {
    name: "Deeksha Saini",
    role: "Content Creator · Copywriter · Social Media Marketer",
    tagline: "I turn ideas into scroll-stopping stories that convert.",
    bio: "I help brands find their voice, grow their audience, and tell stories that resonate across Instagram, YouTube, and beyond.",
    image: "/images/creator-hero.svg",
    location: "India",
    email: "hello@deekshasaini.com",
  },
  resume: {
    pdfUrl: "/resume/deeksha-saini-resume.pdf",
    previewImage: "/images/resume-preview.svg",
  },
} as const;
