// src/components/filters/TypeFilter.tsx

"use client";

import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import { useFilterStore } from "@/store/filterStore";

export default function TypeFilter() {
  const { type, setType } = useFilterStore();

  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-gray-700">Property Type</label>

      <select
        value={type ?? ""}
        onChange={(e) => setType(e.target.value || undefined)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Types</option>

        {PROPERTY_TYPES.map((propertyType) => (
          <option key={propertyType} value={propertyType}>
            {propertyType}
          </option>
        ))}
      </select>
    </div>
  );
}
