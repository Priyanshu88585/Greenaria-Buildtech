// src/store/propertyStore.ts

import { create } from "zustand"
import { Property } from "@/types/property"

interface PropertyState {
  properties: Property[]
  featured: Property[]
  selectedProperty?: Property

  loading: boolean

  setProperties: (properties: Property[]) => void
  setFeatured: (properties: Property[]) => void
  setSelectedProperty: (property?: Property) => void

  setLoading: (loading: boolean) => void
  clearProperties: () => void
}

export const usePropertyStore = create<PropertyState>((set) => ({
  properties: [],
  featured: [],
  selectedProperty: undefined,

  loading: false,

  setProperties: (properties) =>
    set(() => ({ properties })),

  setFeatured: (featured) =>
    set(() => ({ featured })),

  setSelectedProperty: (property) =>
    set(() => ({ selectedProperty: property })),

  setLoading: (loading) =>
    set(() => ({ loading })),

  clearProperties: () =>
    set(() => ({
      properties: [],
      featured: [],
      selectedProperty: undefined
    }))
}))