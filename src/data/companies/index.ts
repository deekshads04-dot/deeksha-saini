import type { Company } from "@/types/company";
import { company as glowLabs } from "./glow-labs";
import { company as novaDigital } from "./nova-digital";
import { company as freshframe } from "./freshframe";

const companies: Company[] = [glowLabs, novaDigital, freshframe];

export function getAllCompanies(): Company[] {
  return [...companies].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}

export function getAllCompanySlugs(): string[] {
  return companies.map((c) => c.slug);
}
