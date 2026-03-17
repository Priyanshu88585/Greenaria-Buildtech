"use client";
import { useState, useMemo } from "react";
import propertiesData from "@/data/properties.json";

export function useSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return propertiesData.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.developer.toLowerCase().includes(q) ||
      p.sector?.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);
  return { query, setQuery, results };
}
