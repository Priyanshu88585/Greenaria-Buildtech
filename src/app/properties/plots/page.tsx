// src/app/properties/plots/page.tsx

import Container from "@/components/layout/Container";
import PropertyCard from "@/components/property/PropertyCard";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plots & Land for Sale | Greenaria Buildtech",
  description:
    "Browse residential and commercial plots for sale. Invest in land and development opportunities with Greenaria Buildtech.",
};

export const revalidate = 1800;

export default async function PlotProperties() {
  const properties = await prisma.property.findMany({
    where: {
      category: "PLOT",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container className="py-20">
      {/* PAGE HEADER */}

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Plot Listings</h1>

        <p className="text-gray-600 max-w-xl">
          Discover residential and commercial plots available for investment and
          development.
        </p>
      </div>

      {/* EMPTY STATE */}

      {properties.length === 0 && (
        <div className="text-gray-500">No plots available right now.</div>
      )}

      {/* PROPERTY GRID */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </Container>
  );
}
