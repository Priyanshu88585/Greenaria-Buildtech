"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const types = [
  { icon:"🏙️", label:"Apartments",  count:45, href:"/properties?type=Residential" },
  { icon:"🏢", label:"Commercial",  count:18, href:"/properties?type=Commercial"  },
  { icon:"🏡", label:"Villas",      count:12, href:"/properties?type=Villa"        },
  { icon:"🌍", label:"Dubai",       count:8,  href:"/locations/dubai"              },
  { icon:"🏗️", label:"Plots",       count:22, href:"/properties?type=Plot"         },
  { icon:"🏪", label:"SCO/Retail",  count:9,  href:"/properties?type=SCO"          },
];

export default function PropertyTypes() {
  return (
    <section className="section-pad-sm" style={{ background:"#fff" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-12">
          <h2 className="section-title" style={{ fontSize:"clamp(1.1rem,2.2vw,1.7rem)" }}>Explore by Property Type</h2>
          <div className="gold-divider" />
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {types.map((t,i) => (
            <motion.div key={t.label} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*.07 }}>
              <Link href={t.href}
                className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-gray-100 hover:border-[#2e7d32] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ background:"#fff", boxShadow:"0 2px 8px rgba(0,0,0,.06)" }}>
                <span className="text-[32px] mb-3 transition-transform duration-300 group-hover:scale-110 block">{t.icon}</span>
                <p className="font-heading font-bold text-navy" style={{ fontSize:13 }}>{t.label}</p>
                <p style={{ fontSize:11, color:"#6b7280", marginTop:2 }}>{t.count} listings</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
