"use client";
import { createContext, useContext, useState } from "react";
const CompareContext = createContext(null);
export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);
  const addToCompare = (p) => { if (compareList.length < 3 && !compareList.find(c => c.id === p.id)) setCompareList(prev => [...prev, p]); };
  const removeFromCompare = (id) => setCompareList(prev => prev.filter(p => p.id !== id));
  const clearCompare = () => setCompareList([]);
  const isInCompare = (id) => compareList.some(p => p.id === id);
  return <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare, isInCompare }}>{children}</CompareContext.Provider>;
}
export function useCompare() { return useContext(CompareContext); }
