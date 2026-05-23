import { Container } from "@/components/layout/container";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts, getAllCategories } from "@/lib/content/posts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/config/seo";

export const metadata = createPageMetadata({
  title: pageSeo.caseStudies.title,
  description: pageSeo.caseStudies.description,
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  const posts = getAllPosts("case-study");
  const categories = getAllCategories("case-study");

  return (
    <Container className="py-16 md:py-24">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Case Studies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Deep dives into campaigns, strategies, and measurable outcomes.
        </p>
      </header>
      <BlogList posts={posts} basePath="/case-studies" categories={categories} />
    </Container>
  );
}
