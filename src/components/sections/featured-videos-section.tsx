import { getFeaturedContent } from "@/lib/content/featured";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";
import { YouTubeGrid } from "@/components/portfolio/youtube-grid";

export function FeaturedVideosSection() {
  const { videos } = getFeaturedContent();

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeader
          title="Featured Videos"
          subtitle="Campaign highlights and creative breakdowns"
        />
        <YouTubeGrid videos={videos} />
      </Container>
    </section>
  );
}
