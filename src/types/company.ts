import type { InstagramPost, InstagramReel, VideoItem } from "./media";
import type { PostLink } from "./links";

export type CompanySectionId =
  | "hero"
  | "overview"
  | "achievements"
  | "featuredVideos"
  | "instagramReels"
  | "instagramPosts"
  | "blogs";

export interface CompanySocials {
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  website?: string;
  twitter?: string;
}

export interface Company {
  name: string;
  slug: string;
  logo: string;
  coverImage: string;
  industry: string;
  role: string;
  duration: string;
  overview: string;
  achievements: string[];
  socials: CompanySocials;
  sections: CompanySectionId[];
  featuredVideos: VideoItem[];
  instagramReels: InstagramReel[];
  instagramPosts: InstagramPost[];
  blogs: PostLink[];
}
