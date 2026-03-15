"use client"

import { useState } from "react"

export default function PriceFilter({ min, max, onChange }) {

  const [minPrice,setMin] = useState(min || "")
  const [maxPrice,setMax] = useState(max || "")

  const handleChange = (m1,m2)=>{
    setMin(m1)
    setMax(m2)
    onChange(m1,m2)
  }

  return (

    <div className="filter-item">

      <label>Price Range</label>

      <div className="price-inputs">

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e)=>handleChange(e.target.value,maxPrice)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e)=>handleChange(minPrice,e.target.value)}
        />

      </div>

    </div>

  )

}