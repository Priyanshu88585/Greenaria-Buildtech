'use client'
import { createContext,useContext,useState } from 'react'
const CompareContext=createContext()
export const CompareProvider=({children})=>{ const [compare,setCompare]=useState([]); const addToCompare=(p)=>{ if(compare.find(i=>i.id===p.id)) return; if(compare.length>=3){ alert('Max 3 properties'); return } setCompare(prev=>[...prev,p]) }; const removeFromCompare=id=>setCompare(prev=>prev.filter(i=>i.id!==id)); const clearCompare=()=>setCompare([]); return <CompareContext.Provider value={{compare,addToCompare,removeFromCompare,clearCompare}}>{children}</CompareContext.Provider> }
export const useCompare=()=>useContext(CompareContext)
