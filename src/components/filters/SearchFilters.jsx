"use client"

import { useState } from "react"
import LocationFilter from "./LocationFilter"
import PriceFilter from "./PriceFilter"
import PropertyTypeFilter from "./PropertyTypeFilter"

export default function SearchFilters({ onFilter }) {

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: ""
  })

  const updateFilter = (key, value) => {

    const updated = {
      ...filters,
      [key]: value
    }

    setFilters(updated)

    if (onFilter) {
      onFilter(updated)
    }
  }

  return (

    <div className="filters-wrapper">

      <LocationFilter
        value={filters.location}
        onChange={(v)=>updateFilter("location",v)}
      />

      <PropertyTypeFilter
        value={filters.type}
        onChange={(v)=>updateFilter("type",v)}
      />

      <PriceFilter
        min={filters.minPrice}
        max={filters.maxPrice}
        onChange={(min,max)=>{
          updateFilter("minPrice",min)
          updateFilter("maxPrice",max)
        }}
      />

    </div>

  )

}