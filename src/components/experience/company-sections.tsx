import Image from "next/image";
import Link from "next/link";
import type { Company, CompanySectionId } from "@/types/company";
import { CompanySocialLinks } from "@/components/common/company-socials";
import { YouTubeGrid } from "@/components/portfolio/youtube-grid";
import { InstagramReelsCarousel } from "@/components/portfolio/instagram-reels-carousel";
import { InstagramPostsMasonry } from "@/components/portfolio/instagram-posts-masonry";
import { Container } from "@/components/layout/container";

const sectionRenderers: Record<
  CompanySectionId,
  (company: Company) => React.ReactNode
> = {
  hero: (company) => (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src={company.coverImage}
          alt={company.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>
      <Container className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-xl border border-border bg-card p-2">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain p-1"
              />
            </div>
            <h1 className="text-3xl font-semibold md:text-4xl">{company.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{company.role}</p>
            <p className="text-sm text-muted-foreground">
              {company.industry} · {company.duration}
            </p>
          </div>
          <CompanySocialLinks socials={company.socials} />
        </div>
      </Container>
    </section>
  ),
  overview: (company) => (
    <section className="py-12">
      <Container size="narrow">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {company.overview}
        </p>
      </Container>
    </section>
  ),
  achievements: (company) =>
    company.achievements.length > 0 ? (
      <section className="bg-muted/30 py-12">
        <Container size="narrow">
          <h2 className="text-2xl font-semibold">Key Achievements</h2>
          <ul className="mt-6 space-y-3">
            {company.achievements.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    ) : null,
  featuredVideos: (company) =>
    company.featuredVideos.length > 0 ? (
      <section className="py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Featured Videos</h2>
          <YouTubeGrid videos={company.featuredVideos} />
        </Container>
      </section>
    ) : null,
  instagramReels: (company) =>
    company.instagramReels.length > 0 ? (
      <section className="py-12">
        <Container>
          <InstagramReelsCarousel reels={company.instagramReels} />
        </Container>
      </section>
    ) : null,
  instagramPosts: (company) =>
    company.instagramPosts.length > 0 ? (
      <section className="py-12">
        <Container>
          <InstagramPostsMasonry posts={company.instagramPosts} />
        </Container>
      </section>
    ) : null,
  blogs: (company) =>
    company.blogs.length > 0 ? (
      <section className="bg-muted/30 py-12">
        <Container size="narrow">
          <h2 className="text-2xl font-semibold">Related Writing</h2>
          <ul className="mt-6 space-y-4">
            {company.blogs.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}/`}
                  className="group block rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-medium group-hover:text-accent">
                    {blog.title}
                  </h3>
                  {blog.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {blog.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    ) : null,
};

export function CompanySections({ company }: { company: Company }) {
  return (
    <>
      {company.sections.map((sectionId) => {
        const render = sectionRenderers[sectionId];
        if (!render) return null;
        return <div key={sectionId}>{render(company)}</div>;
      })}
    </>
  );
}
