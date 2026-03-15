"use client"

import { createContext, useContext, useState } from "react"

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

  const [filters,setFilters] = useState({
    location:"",
    type:"",
    minPrice:"",
    maxPrice:"",
    keyword:""
  })

  const updateFilter = (name,value)=>{

    setFilters((prev)=>({
      ...prev,
      [name]:value
    }))

  }

  const clearFilters = ()=>{

    setFilters({
      location:"",
      type:"",
      minPrice:"",
      maxPrice:"",
      keyword:""
    })

  }

  return (

    <FilterContext.Provider
      value={{
        filters,
        updateFilter,
        clearFilters
      }}
    >

      {children}

    </FilterContext.Provider>

  )

}

export const useFilterContext = () => useContext(FilterContext)