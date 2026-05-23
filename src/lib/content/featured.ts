import { featuredVideos } from "@/data/featured/videos";
import { featuredWriting } from "@/data/featured/writing";
import { brandsWorkedWith } from "@/data/featured/brands";
import { getLatestPosts, getFeaturedPosts } from "./posts";

export function getFeaturedContent() {
  return {
    videos: featuredVideos,
    writing: featuredWriting,
    brands: brandsWorkedWith,
    latestBlogs: getLatestPosts("blog", 3),
    featuredBlogs: getFeaturedPosts("blog", 3),
    latestCaseStudies: getLatestPosts("case-study", 3),
  };
}
