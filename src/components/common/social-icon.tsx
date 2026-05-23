import Link from "next/link";
import {
  Camera,
  Play,
  Briefcase,
  MessageCircle,
  Globe,
  type LucideIcon,
} from "lucide-react";
import type { SocialLink } from "@/types/links";
import { cn } from "@/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  instagram: Camera,
  youtube: Play,
  linkedin: Briefcase,
  twitter: MessageCircle,
  globe: Globe,
};

interface SocialIconProps {
  link: SocialLink;
  size?: "sm" | "md";
}

export function SocialIcon({ link, size = "md" }: SocialIconProps) {
  const Icon = iconMap[link.icon] ?? Globe;

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent",
        size === "sm" ? "h-8 w-8" : "h-10 w-10",
      )}
    >
      <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
    </Link>
  );
}
