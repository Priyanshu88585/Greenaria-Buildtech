"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export default function LatestProjects() {
  const latest = projectsData.filter(p => p.type === "latest");
  return (
    <section className="section-pad" style={{ background:"#faf8f4" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>Latest Projects</h2>
          <div className="gold-divider" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latest.map((p,i) => (
            <motion.div key={p.id} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*.1 }}>
              <Link href={`/properties/${p.slug}`} className="group flex gap-4 bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                style={{ border:"1px solid #e5e7eb", boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
                <div className="w-[140px] h-[120px] flex-shrink-0 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.src = "/images/projects/sample-project.jpg"; }} />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="badge badge-launch mb-2 self-start">{p.status}</span>
                  <h3 className="font-heading font-bold text-navy mb-1" style={{ fontSize:14 }}>{p.name}</h3>
                  <p style={{ fontSize:12, color:"#6b7280", marginBottom:4 }}>{p.location}</p>
                  <p className="font-heading font-bold" style={{ fontSize:13, color:"#2e7d32" }}>{p.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/projects/latest" className="btn-green-outline">View All Latest Projects</Link>
        </div>
      </div>
    </section>
  );
}
