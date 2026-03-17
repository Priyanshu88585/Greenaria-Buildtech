"use client";
import { motion } from "framer-motion";

const services = [
  { icon:<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
    title:"Home Loan Assistance", desc:"Get pre-approved loans from 15+ top banks with competitive rates and complete documentation support." },
  { icon:<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    title:"Legal & Valuation Help", desc:"RERA verification, title check, and valuation — all done by certified professionals for transparent transactions." },
  { icon:<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title:"Site Visit Coordination", desc:"Personalised site visits with transportation and expert guidance — seeing your future home should be effortless." },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background:"#f5faf5" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)", lineHeight:1.2 }}>Real Estate Consultancy<br/>Services in Noida</h2>
          <div className="gold-divider" />
          <p style={{ color:"#6b7280", fontSize:15, maxWidth:540, margin:"0 auto" }}>
            As experienced property consultants in Noida, we provide end-to-end real estate solutions from search to possession.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s,i) => (
            <motion.div key={s.title} initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*.12, duration:.6 }}
              className="svc-card group">
              <div className="svc-icon">{s.icon}</div>
              <h3 className="font-heading font-bold text-navy mb-3" style={{ fontSize:15 }}>{s.title}</h3>
              <p style={{ fontSize:13.5, color:"#6b7280", lineHeight:1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
