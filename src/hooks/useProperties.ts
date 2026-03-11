// src/hooks/useProperties.ts

"use client"

import { useEffect, useState, useCallback } from "react"

interface UsePropertiesOptions {
  location?: string
  type?: string
  minPrice?: number
  maxPrice?: number
}

export function useProperties(options: UsePropertiesOptions = {}) {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProperties = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams()

      if (options.location) params.append("location", options.location)
      if (options.type) params.append("type", options.type)
      if (options.minPrice) params.append("minPrice", String(options.minPrice))
      if (options.maxPrice) params.append("maxPrice", String(options.maxPrice))

      const query = params.toString()
      const res = await fetch(`/api/properties${query ? `?${query}` : ""}`)

      if (!res.ok) {
        throw new Error("Failed to fetch properties")
      }

      const data = await res.json()
      setProperties(data.data || [])
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }, [options.location, options.type, options.minPrice, options.maxPrice])

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return {
    properties,
    loading,
    error,
    refetch: fetchProperties,
  }
}