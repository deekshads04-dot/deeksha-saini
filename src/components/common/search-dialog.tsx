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
      <DialogContent className="max-w-lg overflow-hidden p-0">
        <div className="border-b border-border p-4">
          <Input
            placeholder="Search blogs, case studies, experience..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="border-0 bg-transparent shadow-none focus-visible:ring-0"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Press <kbd className="rounded border px-1">⌘K</kbd> to open anytime
          </p>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted-foreground">
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
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item.title}</p>
                      <p className="truncate text-xs text-muted-foreground">
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
