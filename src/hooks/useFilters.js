import { useState } from "react"

export default function useFilters(initialData){

  const [filtered,setFiltered] = useState(initialData)

  const applyFilters = (filters)=>{

    let data = [...initialData]

    if(filters.location){

      data = data.filter(
        p => p.location
        .toLowerCase()
        .includes(filters.location.toLowerCase())
      )

    }

    if(filters.type){

      data = data.filter(
        p => p.type === filters.type
      )

    }

    if(filters.minPrice){

      data = data.filter(
        p => parseInt(p.price) >= filters.minPrice
      )

    }

    if(filters.maxPrice){

      data = data.filter(
        p => parseInt(p.price) <= filters.maxPrice
      )

    }

    setFiltered(data)

  }

  return {
    filtered,
    applyFilters
  }

}