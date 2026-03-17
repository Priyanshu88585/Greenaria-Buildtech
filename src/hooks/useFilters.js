"use client";
import { useState, useCallback } from "react";

export function useFilters(initial = {}) {
  const [filters, setFilters] = useState(initial);
  const updateFilter = useCallback((key, value) => setFilters(prev => ({ ...prev, [key]: value })), []);
  const resetFilters = useCallback(() => setFilters(initial), []);
  return { filters, updateFilter, resetFilters };
}
