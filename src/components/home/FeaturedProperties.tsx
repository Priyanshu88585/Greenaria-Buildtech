// src/components/home/FeaturedProperties.tsx

import Container from "../layout/Container";
import PropertyCard from "../property/PropertyCard";
// import { getProperties } from "@/services/property.service";
import { getFeaturedProperties } from "@/services/property.service";
import Link from "next/link";

export default async function FeaturedProperties() {
  // const properties = await getProperties();
  const properties = await getFeaturedProperties();
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* SECTION HEADER */}

        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Properties
            </h2>

            <p className="text-gray-500 mt-2">
              Explore our hand-picked premium real estate listings
            </p>
          </div>

          {/* VIEW ALL */}

          <Link
            href="/properties"
            className="text-blue-600 font-medium hover:underline"
          >
            View All
          </Link>
        </div>

        {/* PROPERTIES GRID */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.length === 0 && (
            <p className="text-gray-500">No featured properties available.</p>
          )}

          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
