// src/store/filterStore.ts

import { create } from "zustand"

export interface FilterState {
  location?: string
  type?: string
  minPrice?: number
  maxPrice?: number

  // actions
  setLocation: (location?: string) => void
  setType: (type?: string) => void
  setMinPrice: (price?: number) => void
  setMaxPrice: (price?: number) => void
  setPriceRange: (min?: number, max?: number) => void

  clearFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  location: undefined,
  type: undefined,
  minPrice: undefined,
  maxPrice: undefined,

  setLocation: (location) =>
    set(() => ({ location })),

  setType: (type) =>
    set(() => ({ type })),

  setMinPrice: (price) =>
    set((state) => ({
      ...state,
      minPrice: price
    })),

  setMaxPrice: (price) =>
    set((state) => ({
      ...state,
      maxPrice: price
    })),

  setPriceRange: (minPrice, maxPrice) =>
    set((state) => ({
      ...state,
      minPrice,
      maxPrice
    })),

  clearFilters: () =>
    set(() => ({
      location: undefined,
      type: undefined,
      minPrice: undefined,
      maxPrice: undefined
    }))
}))