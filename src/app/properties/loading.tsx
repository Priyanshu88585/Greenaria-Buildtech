// src/app/properties/loading.tsx

import Container from "@/components/layout/Container";

export default function Loading() {
  return (
    <Container className="py-20">
      {/* PAGE HEADER */}

      <div className="animate-pulse mb-12">
        <div className="h-10 w-64 bg-gray-200 rounded mb-4" />

        <div className="h-4 w-96 bg-gray-200 rounded" />
      </div>

      {/* PROPERTY GRID SKELETON */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border rounded-xl overflow-hidden bg-white">
            {/* IMAGE */}

            <div className="h-48 bg-gray-200 animate-pulse" />

            {/* CONTENT */}

            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />

              <div className="h-4 bg-gray-200 rounded w-1/2" />

              <div className="h-6 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
