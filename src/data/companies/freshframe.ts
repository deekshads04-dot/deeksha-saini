import type { Company } from "@/types/company";

export const company: Company = {
  name: "FreshFrame",
  slug: "freshframe",
  logo: "/images/companies/freshframe-logo.svg",
  coverImage: "/images/companies/freshframe-cover.svg",
  industry: "Food & Lifestyle",
  role: "Social Media Content Lead",
  duration: "Jun 2022 — Feb 2023",
  overview:
    "Created and managed FreshFrame's Instagram reel strategy, producing viral food content that established the brand as a category leader.",
  achievements: [
    "Produced 12-reel series with 500K+ total views",
    "Grew account engagement rate to 11.5%",
    "Secured 3 brand partnership deals through content",
    "Built repeatable content production workflow",
  ],
  socials: {
    instagram: "https://instagram.com/freshframe",
    youtube: "https://youtube.com/@freshframe",
  },
  sections: [
    "hero",
    "overview",
    "achievements",
    "instagramReels",
    "instagramPosts",
  ],
  featuredVideos: [],
  instagramReels: [
    {
      id: "ff-r1",
      title: "60-second pasta recipe",
      thumbnail: "/thumbnails/fresh-reel-1.svg",
      videoSrc: "/videos/fresh-reel-1.mp4",
      instagramUrl: "https://instagram.com/reel/fresh1",
    },
    {
      id: "ff-r2",
      title: "Street food tour",
      thumbnail: "/thumbnails/fresh-reel-2.svg",
      instagramUrl: "https://instagram.com/reel/fresh2",
    },
  ],
  instagramPosts: [
    {
      id: "ff-p1",
      thumbnail: "/thumbnails/fresh-post-1.svg",
      instagramUrl: "https://instagram.com/p/fresh1",
      aspectRatio: "square",
    },
    {
      id: "ff-p2",
      thumbnail: "/thumbnails/fresh-post-2.svg",
      instagramUrl: "https://instagram.com/p/fresh2",
      aspectRatio: "portrait",
    },
  ],
  blogs: [],
};
