"use client";
import { useState, useEffect } from "react";
import propertiesData from "@/data/properties.json";

export function useProperties(filters = {}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let filtered = [...propertiesData];
    if (filters.type     && filters.type     !== "All Type")      filtered = filtered.filter(p => p.type === filters.type);
    if (filters.location && filters.location !== "Select Sector") filtered = filtered.filter(p => p.location === filters.location || p.sector?.includes(filters.location));
    if (filters.bhk      && filters.bhk      !== "Any BHK")       filtered = filtered.filter(p => p.bhk.includes(filters.bhk));
    if (filters.featured)                                          filtered = filtered.filter(p => p.featured);
    setTimeout(() => { setProperties(filtered); setLoading(false); }, 300);
  }, [filters.type, filters.location, filters.bhk, filters.featured]);

  return { properties, loading };
}
