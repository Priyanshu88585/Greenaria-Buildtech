// src/components/filters/PropertyFilters.tsx

"use client";

import LocationFilter from "./LocationFilter";
import TypeFilter from "./TypeFilter";
import BudgetFilter from "./BudgetFilter";

import Button from "../ui/button";

import { useFilterStore } from "@/store/filterStore";

export default function PropertyFilters() {
  const { clearFilters } = useFilterStore();

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filter Properties</h3>

        <button
          onClick={clearFilters}
          className="text-sm text-gray-500 hover:text-gray-800"
        >
          Reset Filters
        </button>
      </div>

      {/* FILTER GRID */}

      <div className="grid gap-4 md:grid-cols-4">
        {/* LOCATION */}

        <LocationFilter />

        {/* PROPERTY TYPE */}

        <TypeFilter />

        {/* BUDGET */}

        <BudgetFilter />

        {/* SEARCH BUTTON */}

        <div className="flex items-end">
          <Button className="w-full">Search</Button>
        </div>
      </div>
    </div>
  );
}
