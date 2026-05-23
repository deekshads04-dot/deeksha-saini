import { whatHeIsGoodAt } from "@/config/homepage";
import { SectionHeader } from "@/components/common/section-header";
import { Container } from "@/components/layout/container";

export function WhatHeIsGoodAtSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeader
          title={whatHeIsGoodAt.title}
          subtitle={whatHeIsGoodAt.subtitle}
        />
        <div className="space-y-6">
          {whatHeIsGoodAt.skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
