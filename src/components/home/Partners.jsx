"use client";
import { motion } from "framer-motion";
import partnersData from "@/data/partners.json";

export default function Partners() {
  const doubled = [...partnersData, ...partnersData];
  return (
    <section id="partners" className="section-pad-sm overflow-hidden" style={{ background:"#f5faf5" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-12">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>Trusted Builder Partners</h2>
          <div className="gold-divider" />
          <p style={{ color:"#6b7280", fontSize:15 }}>Exclusive partnerships with Gurgaon&apos;s most reputed developers</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background:"linear-gradient(to right,#f5faf5,transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background:"linear-gradient(to left,#f5faf5,transparent)" }} />
          <div className="flex" style={{ animation:"marquee 22s linear infinite" }}>
            {doubled.map((p,i) => (
              <div key={i} className="flex-shrink-0 px-10 py-4 flex items-center justify-center transition-all duration-300"
                style={{ filter:"grayscale(50%)", opacity:.75 }}
                onMouseEnter={e => { e.currentTarget.style.filter="grayscale(0%)"; e.currentTarget.style.opacity="1"; }}
                onMouseLeave={e => { e.currentTarget.style.filter="grayscale(50%)"; e.currentTarget.style.opacity=".75"; }}>
                <span className="font-heading font-black tracking-widest" style={{ fontSize:p.size+"px", color:p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0,1,2,3,4,5,6].map(i => (
            <div key={i} className="rounded-full transition-all" style={{ width:i===1?24:8, height:8, background:i===1?"#2e7d32":"#d1d5db" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
