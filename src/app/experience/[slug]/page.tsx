import { notFound } from "next/navigation";
import { CompanySections } from "@/components/experience/company-sections";
import {
  getAllCompanySlugs,
  getCompanyBySlug,
} from "@/lib/content/companies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema } from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompanySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return {};

  return createPageMetadata({
    title: `${company.name} | Experience`,
    description: company.overview,
    path: `/experience/${slug}/`,
    image: company.coverImage,
  });
}

export default async function CompanyPage({ params }: PageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience/" },
    { name: company.name, path: `/experience/${slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <CompanySections company={company} />
    </>
  );
}
