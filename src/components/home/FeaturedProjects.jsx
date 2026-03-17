"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PropertyCard from "@/components/property/PropertyCard";
import propertiesData from "@/data/properties.json";

export default function FeaturedProjects() {
  const featured = propertiesData.filter(p => p.featured);
  return (
    <section id="properties" className="section-pad" style={{ background:"#fff" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.9rem)" }}>Featured Properties in Noida</h2>
          <div className="gold-divider" />
          <p className="font-heading font-semibold" style={{ fontSize:14, color:"#2d2d2d", marginBottom:8 }}>Discover Hand Picked Premium Properties in Prime Locations</p>
          <p style={{ color:"#6b7280", fontSize:15, maxWidth:640, margin:"0 auto" }}>
            Explore premium <strong>Residential and Commercial Properties in Noida</strong> curated by Greenaria BuildTech. All listings are RERA-verified and located in prime sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((prop, i) => (
            <motion.div key={prop.id} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.1, duration:.6 }}>
              <PropertyCard property={prop} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mt-12">
          <Link href="/properties" className="btn-primary inline-flex">
            Load More Listings
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-1"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
