// Property type definitions

export type PropertyCategory = "RESIDENTIAL" | "COMMERCIAL" | "PLOT"

export type PropertyStatus = "AVAILABLE" | "SOLD" | "UPCOMING"

export interface PropertyBuilder {
  id: string
  name: string
  logo?: string
  website?: string
}

export interface PropertyAmenity {
  id: string
  name: string
  icon?: string
}

export interface Property {
  id: string

  title: string
  slug: string
  description: string

  location: string
  city: string
  state: string

  propertyType: string
  category: PropertyCategory

  status?: PropertyStatus

  price: number
  pricePerSqft?: number

  area?: number

  bedrooms?: number
  bathrooms?: number

  images: string[]
  floorPlans?: string[]

  latitude?: number
  longitude?: number

  builderId: string
  builder?: PropertyBuilder

  amenities?: PropertyAmenity[]

  featured?: boolean

  createdAt: string
  updatedAt?: string
}

export interface PropertyListResponse {
  properties: Property[]
  total: number
}

export interface PropertyFilters {
  city?: string
  category?: PropertyCategory
  propertyType?: string
  minPrice?: number
  maxPrice?: number
}