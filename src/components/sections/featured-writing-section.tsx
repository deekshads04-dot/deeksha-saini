import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedContent } from "@/lib/content/featured";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function FeaturedWritingSection() {
  const { writing } = getFeaturedContent();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          title="Featured Writing"
          subtitle="Copy, strategy, and storytelling that drives results"
        />
        <div className="grid gap-4">
          {writing.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <Badge variant="secondary" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="text-lg font-semibold group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.excerpt}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
