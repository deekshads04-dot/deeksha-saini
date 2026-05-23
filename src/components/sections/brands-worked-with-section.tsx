import Image from "next/image";
import Link from "next/link";
import { brandsWorkedWith as brandsConfig } from "@/config/homepage";
import { getFeaturedContent } from "@/lib/content/featured";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";
import { withBasePath } from "@/utils/base-path";

export function BrandsWorkedWithSection() {
  const { brands } = getFeaturedContent();

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeader
          title={brandsConfig.title}
          subtitle={brandsConfig.subtitle}
          align="center"
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={withBasePath(`/experience/${brand.slug}/`)}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
              <span className="text-xs text-muted-foreground">{brand.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
