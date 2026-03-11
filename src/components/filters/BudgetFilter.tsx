// src/components/filters/BudgetFilter.tsx

"use client";

import { useState } from "react";
import { useFilterStore } from "@/store/filterStore";

export default function BudgetFilter() {
  const { setPriceRange } = useFilterStore();

  const [min, setMin] = useState<number | "">("");
  const [max, setMax] = useState<number | "">("");

  function handleMinChange(value: number) {
    setMin(value);
    setPriceRange(value, max || undefined);
  }

  function handleMaxChange(value: number) {
    setMax(value);
    setPriceRange(min || undefined, value);
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Budget</label>

      <div className="grid grid-cols-2 gap-3">
        {/* MIN PRICE */}

        <input
          type="number"
          placeholder="Min Price"
          value={min}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className="border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* MAX PRICE */}

        <input
          type="number"
          placeholder="Max Price"
          value={max}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className="border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
