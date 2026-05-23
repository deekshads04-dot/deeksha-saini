import { portfolioItems } from "@/data/portfolio";
import type { PortfolioCategory, PortfolioItem } from "@/types/portfolio";

export function getAllPortfolioItems(): PortfolioItem[] {
  return [...portfolioItems];
}

export function getFeaturedPortfolioItems(limit = 6): PortfolioItem[] {
  return portfolioItems.filter((p) => p.featured).slice(0, limit);
}

export function getPortfolioByCategory(
  category: PortfolioCategory,
): PortfolioItem[] {
  return portfolioItems.filter((p) => p.category === category);
}

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.id === id);
}
