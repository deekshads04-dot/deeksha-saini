import Image from "next/image";
import Link from "next/link";
import type { Company } from "@/types/company";
import { withBasePath } from "@/utils/base-path";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link
      href={withBasePath(`/experience/${company.slug}/`)}
      className="group relative block overflow-hidden rounded-2xl border border-border shadow-sm transition-all hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={company.coverImage}
          alt={company.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mb-3 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white/10 p-1 backdrop-blur-sm">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{company.name}</h3>
              <p className="text-sm text-white/80">{company.industry}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-white/90">{company.role}</p>
          <p className="mt-1 text-xs text-white/70">{company.duration}</p>
        </div>
      </div>
    </Link>
  );
}
