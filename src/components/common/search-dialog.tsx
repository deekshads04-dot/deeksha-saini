"use client";

import { useCallback, useEffect, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Search, FileText, Briefcase, Building2, Folder } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { SearchDocument, SearchResultType } from "@/types/search";
import { withBasePath } from "@/utils/base-path";
import { cn } from "@/utils/cn";

const typeIcons: Record<SearchResultType, typeof FileText> = {
  blog: FileText,
  "case-study": Briefcase,
  company: Building2,
  portfolio: Folder,
};

const typeLabels: Record<SearchResultType, string> = {
  blog: "Blog",
  "case-study": "Case Study",
  company: "Experience",
  portfolio: "Portfolio",
};

export function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchDocument[]>([]);
  const [index, setIndex] = useState<SearchDocument[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchDocument> | null>(null);

  useEffect(() => {
    fetch(withBasePath("/search-index.json"))
      .then((res) => res.json())
      .then((data: SearchDocument[]) => {
        setIndex(data);
        setFuse(
          new Fuse(data, {
            keys: ["title", "description", "tags", "category"],
            threshold: 0.35,
            includeScore: true,
          }),
        );
      })
      .catch(() => setIndex([]));
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults(index.slice(0, 8));
      return;
    }
    if (!fuse) return;
    setResults(fuse.search(query).map((r) => r.item).slice(0, 8));
  }, [query, fuse, index]);

  const handleOpenChange = useCallback((value: boolean) => {
    setOpen(value);
    if (!value) setQuery("");
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          "flex max-h-[min(100dvh,32rem)] w-full max-w-lg flex-col gap-0 overflow-hidden p-0",
          "max-sm:fixed max-sm:inset-x-0 max-sm:top-0 max-sm:bottom-auto max-sm:max-h-[100dvh]",
          "max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-none max-sm:border-x-0 max-sm:border-t-0",
          "sm:max-h-[min(85dvh,32rem)]",
          "[&>button]:max-sm:top-[max(1rem,env(safe-area-inset-top))]",
        )}
      >
        <h2 className="sr-only">Search</h2>
        <div className="shrink-0 border-b border-border px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-3 pr-10">
            <Search
              className="h-5 w-5 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <Input
              placeholder="Search blogs, case studies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="h-11 flex-1 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0 sm:h-10 sm:text-sm"
            />
          </div>
        </div>
        <ul
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2 max-sm:max-h-[calc(100dvh-5.5rem-env(safe-area-inset-top))] sm:max-h-80"
          role="listbox"
        >
          {results.length === 0 ? (
            <li className="px-3 py-10 text-center text-sm text-muted-foreground">
              No results found
            </li>
          ) : (
            results.map((item) => {
              const Icon = typeIcons[item.type];
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-start gap-3 rounded-xl px-3 py-3 transition-colors active:bg-muted sm:min-h-0 sm:rounded-lg sm:py-2.5 sm:hover:bg-muted"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground sm:h-4 sm:w-4" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-snug sm:truncate">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground sm:truncate">
                        {typeLabels[item.type]}
                        {item.category ? ` · ${item.category}` : ""}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
