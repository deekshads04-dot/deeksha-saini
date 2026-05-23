import Link from "next/link";
import { homepageCta } from "@/config/homepage";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/10 via-card to-card px-8 py-16 text-center shadow-sm md:px-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {homepageCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            {homepageCta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href={homepageCta.primaryCta.href}>
                {homepageCta.primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={homepageCta.secondaryCta.href}>
                {homepageCta.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
