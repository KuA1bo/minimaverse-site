"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchIndex } from "@/data/searchIndex";

const fuse = new Fuse(searchIndex, {
  keys: ["title", "description", "tags"],
  threshold: 0.3,
  includeScore: true,
});

export default function Search({ mobile = false }: { mobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobal = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobal);
    return () => window.removeEventListener("keydown", handleGlobal);
  }, []);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setActiveIndex(-1);
    if (value.trim() === "") {
      setResults([]);
      return;
    }
    const matches = fuse.search(value).map((r) => r.item).slice(0, 5);
    setResults(matches);
  }, []);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((p) => (p < results.length - 1 ? p + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((p) => (p > 0 ? p - 1 : results.length - 1));
      } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        router.push(results[activeIndex].url);
        setIsOpen(false);
        setQuery("");
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    },
    [results, activeIndex, router]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500 hover:text-white transition-colors"
        aria-label="Open search"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs bg-gray-700 rounded border border-gray-600">⌘K</span>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            mobile
              ? "bottom-full left-1/2 -translate-x-1/2 mb-2 w-[calc(100vw-2rem)] max-w-72"
              : "top-full right-0 mt-2 w-80"
          } bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50`}
        >
          <div className="p-2">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Type to search..."
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              aria-label="Search site"
            />
          </div>

          {results.length > 0 && (
            <ul className="max-h-60 overflow-y-auto" role="listbox">
              {results.map((item, index) => (
                <li
                  key={item.url}
                  onClick={() => {
                    router.push(item.url);
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className={`px-4 py-2 cursor-pointer text-sm transition-colors ${
                    index === activeIndex ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-gray-800"
                  }`}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500 truncate">{item.description}</div>
                </li>
              ))}
            </ul>
          )}

          {query && results.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
