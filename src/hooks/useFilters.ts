// src/hooks/useFilters.ts

"use client"

import { useMemo } from "react"
import { useFilterStore } from "@/store/filterStore"

/**
 * Central hook for accessing property filters.
 * Provides both values and helpers so components stay clean.
 */
export function useFilters() {

  const location = useFilterStore((s) => s.location)
  const type = useFilterStore((s) => s.type)
  const minPrice = useFilterStore((s) => s.minPrice)
  const maxPrice = useFilterStore((s) => s.maxPrice)

  const setLocation = useFilterStore((s) => s.setLocation)
  const setType = useFilterStore((s) => s.setType)
  const setPriceRange = useFilterStore((s) => s.setPriceRange)
  const clearFilters = useFilterStore((s) => s.clearFilters)

  const hasActiveFilters = useMemo(() => {
    return Boolean(location || type || minPrice || maxPrice)
  }, [location, type, minPrice, maxPrice])

  return {
    location,
    type,
    minPrice,
    maxPrice,

    setLocation,
    setType,
    setPriceRange,
    clearFilters,

    hasActiveFilters
  }
}