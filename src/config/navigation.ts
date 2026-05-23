export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Resume", href: "/resume/" },
  { label: "Contact", href: "/contact/" },
];

export const footerNavigation = {
  explore: [
    { label: "Experience", href: "/experience/" },
    { label: "Portfolio", href: "/portfolio/" },
    { label: "Blog", href: "/blog/" },
    { label: "Case Studies", href: "/case-studies/" },
  ],
  resources: [
    { label: "Resume", href: "/resume/" },
    { label: "Contact", href: "/contact/" },
    { label: "RSS Feed", href: "/feed.xml" },
  ],
} as const;
