// src/components/filters/LocationFilter.tsx

"use client";

import { LOCATIONS } from "@/constants/locations";
import { useFilterStore } from "@/store/filterStore";

export default function LocationFilter() {
  const { location, setLocation } = useFilterStore();

  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-gray-700">Location</label>

      <select
        value={location ?? ""}
        onChange={(e) => setLocation(e.target.value || undefined)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Locations</option>

        {LOCATIONS.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}
