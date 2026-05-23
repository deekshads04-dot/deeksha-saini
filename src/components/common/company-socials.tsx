import Link from "next/link";
import { Camera, Play, Briefcase, MessageCircle, Globe } from "lucide-react";
import type { CompanySocials } from "@/types/company";
import { cn } from "@/utils/cn";

const socialConfig = [
  { key: "instagram" as const, icon: Camera, label: "Instagram" },
  { key: "youtube" as const, icon: Play, label: "YouTube" },
  { key: "linkedin" as const, icon: Briefcase, label: "LinkedIn" },
  { key: "twitter" as const, icon: MessageCircle, label: "Twitter" },
  { key: "website" as const, icon: Globe, label: "Website" },
];

interface CompanySocialLinksProps {
  socials: CompanySocials;
  className?: string;
}

export function CompanySocialLinks({
  socials,
  className,
}: CompanySocialLinksProps) {
  const available = socialConfig.filter(({ key }) => socials[key]);

  if (available.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {available.map(({ key, icon: Icon, label }) => (
        <Link
          key={key}
          href={socials[key]!}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
