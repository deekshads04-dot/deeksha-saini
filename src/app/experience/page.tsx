import { Container } from "@/components/layout/container";
import { CompanyCard } from "@/components/experience/company-card";
import { getAllCompanies } from "@/lib/content/companies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/config/seo";

export const metadata = createPageMetadata({
  title: pageSeo.experience.title,
  description: pageSeo.experience.description,
  path: "/experience/",
});

export default function ExperiencePage() {
  const companies = getAllCompanies();

  return (
    <Container className="py-16 md:py-24">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Experience
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Brand partnerships, campaigns, and the results behind the work.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {companies.map((company) => (
          <CompanyCard key={company.slug} company={company} />
        ))}
      </div>
    </Container>
  );
}
