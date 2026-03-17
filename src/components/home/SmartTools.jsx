"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tools = [
  { emoji:"🧮", title:"EMI Calculator",    desc:"Calculate monthly payments instantly",  green:true  },
  { emoji:"🔔", title:"Price Alerts",       desc:"Get notified on price drops",           green:false },
  { emoji:"📅", title:"Visit Booking",      desc:"Schedule property visits",              green:false },
  { emoji:"🏠", title:"Explore Properties", desc:"Search favourite properties",           green:true  },
];

export default function SmartTools() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:.1 });
  return (
    <section id="smart-tools" className="section-pad" style={{ background:"#fff" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)", lineHeight:1.2 }}>Smart Tools for Property<br/>Buyers in Noida</h2>
          <div className="gold-divider" />
          <p style={{ color:"#6b7280", fontSize:15, maxWidth:580, margin:"0 auto" }}>
            Designed to assist property buyers and investors with accurate calculations, timely alerts, and seamless property exploration.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tools.map((t,i) => (
            <motion.div key={t.title} initial={{ opacity:0, x:t.green?-30:30 }} animate={inView?{ opacity:1,x:0 }:{}} transition={{ delay:i*.1, duration:.6 }}
              className={`group relative overflow-hidden flex items-center gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${t.green?"tool-card-green":"tool-card-white"}`}>
              {t.green && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)", backgroundSize:"200% 100%", animation:"shimmer 1.8s linear infinite" }} />
              )}
              <div className={`w-[72px] h-[72px] rounded-full flex-shrink-0 flex items-center justify-center text-[28px] transition-all duration-300 ${t.green?"bg-white/20 group-hover:bg-white/30":"bg-[#e8f5e9] group-hover:bg-[#2e7d32]"}`}>
                {t.emoji}
              </div>
              <div className="relative z-10">
                <p className={`font-heading font-bold mb-1 ${t.green?"text-white":"text-navy"}`} style={{ fontSize:17 }}>{t.title}</p>
                <p className={`${t.green?"text-white/85":"text-gray-500"}`} style={{ fontSize:13 }}>{t.desc}</p>
              </div>
              <div className={`ml-auto transition-transform duration-300 group-hover:translate-x-1 ${t.green?"text-white/50":"text-gray-300"}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
