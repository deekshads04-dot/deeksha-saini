import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getAllPortfolioItems } from "@/lib/content/portfolio";
import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/config/seo";

export const metadata = createPageMetadata({
  title: pageSeo.portfolio.title,
  description: pageSeo.portfolio.description,
  path: "/portfolio/",
});

export default function PortfolioPage() {
  const items = getAllPortfolioItems();

  return (
    <Container className="py-16 md:py-24">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Campaigns, copy, and creative work across brands and industries.
        </p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <Badge variant="secondary" className="mb-2">
                {item.category.replace("-", " ")}
              </Badge>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              {item.companySlug && (
                <Link
                  href={`/experience/${item.companySlug}/`}
                  className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                >
                  View company experience →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
