import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { contactConfig } from "@/config/contact";
import { socialLinks } from "@/data/socials";
import { SocialIcon } from "@/components/common/social-icon";
import { createPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/config/seo";

export const metadata = createPageMetadata({
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {contactConfig.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {contactConfig.subtitle}
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <Mail className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-4 text-sm text-muted-foreground">
            {contactConfig.responseTime}
          </p>
          <a
            href={`mailto:${contactConfig.email}`}
            className="mt-4 inline-block text-xl font-medium text-accent hover:underline"
          >
            {contactConfig.email}
          </a>
          {contactConfig.form.enabled === false && (
            <p className="mt-4 text-xs text-muted-foreground">
              {contactConfig.form.note}
            </p>
          )}
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm font-medium">Connect on social</p>
          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <SocialIcon key={link.platform} link={link} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Prefer a formal intro?{" "}
          <Link href="/resume/" className="text-accent hover:underline">
            View my resume
          </Link>
        </p>
      </div>
    </Container>
  );
}
