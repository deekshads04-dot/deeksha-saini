import type { Company } from "@/types/company";

export const company: Company = {
  name: "Glow Labs",
  slug: "glow-labs",
  logo: "/images/companies/glow-labs-logo.svg",
  coverImage: "/images/companies/glow-labs-cover.svg",
  industry: "Beauty & Skincare",
  role: "Lead Content Creator & Copywriter",
  duration: "Jan 2024 — Present",
  overview:
    "Led content strategy and copy for Glow Labs' D2C launch, building their Instagram presence from zero to 50K followers in six months.",
  achievements: [
    "Grew Instagram following from 0 to 50K in 6 months",
    "Achieved 8.2% average engagement rate on reels",
    "Wrote launch campaign copy generating ₹2.4M in first-month sales",
    "Built content playbook adopted across 3 product lines",
  ],
  socials: {
    instagram: "https://instagram.com/glowlabs",
    youtube: "https://youtube.com/@glowlabs",
    website: "https://glowlabs.example.com",
  },
  sections: [
    "hero",
    "overview",
    "achievements",
    "featuredVideos",
    "instagramReels",
    "instagramPosts",
    "blogs",
  ],
  featuredVideos: [
    {
      id: "gl-v1",
      title: "Glow Labs Launch Day Recap",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/thumbnails/glow-labs-launch.svg",
    },
    {
      id: "gl-v2",
      title: "Skincare Routine Reel Series",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/thumbnails/glow-labs-routine.svg",
    },
  ],
  instagramReels: [
    {
      id: "gl-r1",
      title: "Morning skincare ritual",
      thumbnail: "/thumbnails/glow-reel-1.svg",
      videoSrc: "/videos/glow-reel-1.mp4",
      instagramUrl: "https://instagram.com/reel/example1",
    },
    {
      id: "gl-r2",
      title: "Product unboxing",
      thumbnail: "/thumbnails/glow-reel-2.svg",
      instagramUrl: "https://instagram.com/reel/example2",
    },
    {
      id: "gl-r3",
      title: "Before & after transformation",
      thumbnail: "/thumbnails/glow-reel-3.svg",
      videoSrc: "/videos/glow-reel-3.mp4",
      instagramUrl: "https://instagram.com/reel/example3",
    },
  ],
  instagramPosts: [
    {
      id: "gl-p1",
      title: "Launch announcement",
      thumbnail: "/thumbnails/glow-post-1.svg",
      instagramUrl: "https://instagram.com/p/example1",
      aspectRatio: "square",
    },
    {
      id: "gl-p2",
      thumbnail: "/thumbnails/glow-post-2.svg",
      instagramUrl: "https://instagram.com/p/example2",
      aspectRatio: "portrait",
    },
    {
      id: "gl-p3",
      thumbnail: "/thumbnails/glow-post-3.svg",
      instagramUrl: "https://instagram.com/p/example3",
      aspectRatio: "landscape",
    },
  ],
  blogs: [
    {
      title: "How We Launched Glow Labs on Instagram",
      slug: "glow-labs-instagram-launch",
      description: "Strategy breakdown of our 0-to-50K growth journey.",
    },
  ],
};
