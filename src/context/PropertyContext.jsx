"use client";
import { createContext, useContext, useState } from "react";
import propertiesData from "@/data/properties.json";

const PropertyContext = createContext(null);

export function PropertyProvider({ children }) {
  const [properties] = useState(propertiesData);
  const getBySlug = (slug) => properties.find(p => p.slug === slug);
  return (
    <PropertyContext.Provider value={{ properties, getBySlug }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function usePropertyContext() {
  return useContext(PropertyContext);
}
