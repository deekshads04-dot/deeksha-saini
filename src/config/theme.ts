export const themeConfig = {
  defaultTheme: "system" as const,
  storageKey: "portfolio-theme",
  enableSystem: true,
};

export const brandColors = {
  light: {
    background: "oklch(0.99 0.002 286)",
    foreground: "oklch(0.15 0.02 286)",
    muted: "oklch(0.96 0.005 286)",
    mutedForeground: "oklch(0.45 0.02 286)",
    card: "oklch(1 0 0)",
    border: "oklch(0.92 0.01 286)",
    accent: "oklch(0.55 0.2 286)",
    accentForeground: "oklch(0.99 0 0)",
  },
  dark: {
    background: "oklch(0.12 0.015 286)",
    foreground: "oklch(0.95 0.01 286)",
    muted: "oklch(0.18 0.015 286)",
    mutedForeground: "oklch(0.65 0.02 286)",
    card: "oklch(0.16 0.015 286)",
    border: "oklch(0.25 0.02 286)",
    accent: "oklch(0.7 0.18 286)",
    accentForeground: "oklch(0.12 0 0)",
  },
} as const;
