import { PenLine, Share2, Video } from "lucide-react";
import { whatHeDoes } from "@/config/homepage";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";

const icons = { video: Video, pen: PenLine, share: Share2 };

export function WhatHeDoesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader title={whatHeDoes.title} subtitle={whatHeDoes.subtitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {whatHeDoes.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Video;
            return (
              <Card key={item.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
