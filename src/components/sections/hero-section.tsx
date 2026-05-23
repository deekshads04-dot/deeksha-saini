"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { withBasePath } from "@/utils/base-path";

const floatingCards = [
  { label: "50K+ Followers Grown", position: "top-8 right-4 md:right-8" },
  { label: "34% Conversion Lift", position: "bottom-24 left-0 md:left-4" },
  { label: "12+ Brand Campaigns", position: "bottom-8 right-8" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:min-h-[90vh] md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {siteConfig.creator.role}
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Stories that{" "}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                grow brands
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              {siteConfig.creator.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={withBasePath("/portfolio/")}>
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={withBasePath("/contact/")}>Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
          >
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
              <Image
                src={siteConfig.creator.image}
                alt={siteConfig.creator.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`absolute ${card.position} rounded-xl border border-border bg-card/95 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur-sm md:text-sm`}
              >
                {card.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
