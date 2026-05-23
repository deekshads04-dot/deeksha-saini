import type { ComponentType } from "react";
import type { HomepageSectionId } from "@/types/homepage";
import { HeroSection } from "./hero-section";
import { WhatHeDoesSection } from "./what-he-does-section";
import { WhatHeIsGoodAtSection } from "./what-he-is-good-at-section";
import { SeeMyWorkSection } from "./see-my-work-section";
import { FeaturedVideosSection } from "./featured-videos-section";
import { FeaturedWritingSection } from "./featured-writing-section";
import { BrandsWorkedWithSection } from "./brands-worked-with-section";
import { LatestBlogsSection } from "./latest-blogs-section";
import { CtaSection } from "./cta-section";

export const homepageSectionRegistry: Record<
  HomepageSectionId,
  ComponentType
> = {
  hero: HeroSection,
  whatHeDoes: WhatHeDoesSection,
  whatHeIsGoodAt: WhatHeIsGoodAtSection,
  seeMyWork: SeeMyWorkSection,
  featuredVideos: FeaturedVideosSection,
  featuredWriting: FeaturedWritingSection,
  brandsWorkedWith: BrandsWorkedWithSection,
  latestBlogs: LatestBlogsSection,
  cta: CtaSection,
};
