import Link from "next/link";
import Image from "next/image";
import { seeMyWork } from "@/config/homepage";
import { getFeaturedPortfolioItems } from "@/lib/content/portfolio";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function SeeMyWorkSection() {
  const items = getFeaturedPortfolioItems(3);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title={seeMyWork.title}
            subtitle={seeMyWork.subtitle}
            className="mb-0"
          />
          <Button asChild variant="outline">
            <Link href={seeMyWork.cta.href}>{seeMyWork.cta.label}</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={
                item.companySlug
                  ? `/experience/${item.companySlug}/`
                  : "/portfolio/"
              }
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-accent">
                  {item.category.replace("-", " ")}
                </p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
