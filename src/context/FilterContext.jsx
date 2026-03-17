"use client";
import { createContext, useContext, useState, useCallback } from "react";
const FilterContext = createContext(null);
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({ type:"", location:"", budget:"", bhk:"" });
  const updateFilter = useCallback((key, val) => setFilters(p => ({ ...p, [key]: val })), []);
  const resetFilters = useCallback(() => setFilters({ type:"", location:"", budget:"", bhk:"" }), []);
  return <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>{children}</FilterContext.Provider>;
}
export function useFilterContext() { return useContext(FilterContext); }
