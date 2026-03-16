"use client";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

export default function PropertyGrid({ properties, loading }) {
  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_,i) => (
        <div key={i} className="rounded-2xl overflow-hidden" style={{ boxShadow:"0 2px 12px rgba(0,0,0,.07)" }}>
          <div className="bg-gray-200 skeleton" style={{ aspectRatio:"16/10" }} />
          <div className="p-5 space-y-3">
            <div className="h-4 bg-gray-200 rounded skeleton w-3/4" />
            <div className="h-3 bg-gray-200 rounded skeleton w-1/2" />
            <div className="h-3 bg-gray-200 rounded skeleton w-full" />
          </div>
        </div>
      ))}
    </div>
  );

  if (!properties?.length) return (
    <div className="text-center py-20">
      <p className="text-4xl mb-4">🏠</p>
      <h3 className="font-heading font-bold text-navy text-xl mb-2">No properties found</h3>
      <p className="text-gray-500">Try adjusting your search filters.</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((prop, i) => (
        <motion.div key={prop.id} initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay: i * .07, duration:.5 }}>
          <PropertyCard property={prop} />
        </motion.div>
      ))}
    </div>
  );
}
