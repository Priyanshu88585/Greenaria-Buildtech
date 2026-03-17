"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import locationsData from "@/data/locations.json";

export default function Locations() {
  return (
    <section className="section-pad" style={{ background:"#f5faf5" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>Prime Locations</h2>
          <div className="gold-divider" />
          <p style={{ color:"#6b7280", fontSize:15 }}>Explore properties in India&apos;s most sought-after real estate markets</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {locationsData.map((loc,i) => (
            <motion.div key={loc.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.08 }}>
              <Link href={`/locations/${loc.slug}`}
                className="group relative block rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio:"3/4", boxShadow:"0 2px 12px rgba(0,0,0,.1)" }}>
                <div className="absolute inset-0 bg-gray-800 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage:`url(${loc.image})`, backgroundSize:"cover", backgroundPosition:"center" }} />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(13,33,55,.85) 0%,rgba(13,33,55,.2) 60%,transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-heading font-bold text-white mb-1" style={{ fontSize:14 }}>{loc.city}</p>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,.7)" }}>{loc.count}+ Properties</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
