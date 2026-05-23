import Link from "next/link";
import { getFeaturedContent } from "@/lib/content/featured";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";

export function LatestBlogsSection() {
  const { latestBlogs } = getFeaturedContent();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title="Latest from the Blog"
            subtitle="Insights on content, copy, and growth"
            className="mb-0"
          />
          <Button asChild variant="outline">
            <Link href="/blog/">View All Posts</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latestBlogs.map((post) => (
            <BlogCard key={post.slug} post={post} basePath="/blog" />
          ))}
        </div>
      </Container>
    </section>
  );
}
