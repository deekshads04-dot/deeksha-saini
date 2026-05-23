export type HomepageSectionId =
  | "hero"
  | "whatHeDoes"
  | "whatHeIsGoodAt"
  | "seeMyWork"
  | "featuredVideos"
  | "featuredWriting"
  | "brandsWorkedWith"
  | "latestBlogs"
  | "cta";

export interface HomepageSectionConfig {
  id: HomepageSectionId;
  enabled: boolean;
  order: number;
}
