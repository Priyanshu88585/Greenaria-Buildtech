"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num:2500, prefix:"₹ ", suffix:" Cr+", label:"Transactions",    note:"Total property value transacted" },
  { num:500,  prefix:"",   suffix:"+",    label:"Happy Clients",   note:"Families found their dream homes" },
  { num:10,   prefix:"",   suffix:"+",    label:"Years Experience", note:"Of real estate expertise" },
  { num:100,  prefix:"",   suffix:"%",    label:"RERA Compliant",  note:"listings" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:.3 });
  return (
    <section id="stats" ref={ref} className="relative section-pad overflow-hidden"
      style={{ background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full opacity-30" style={{ top:"-10%", left:"10%", width:400, height:400, background:"radial-gradient(circle,rgba(46,125,50,.5),transparent 70%)" }} />
        <div className="absolute rounded-full opacity-20" style={{ bottom:"-5%", right:"10%", width:300, height:300, background:"radial-gradient(circle,rgba(184,145,74,.4),transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 style={{ fontFamily:"Montserrat,sans-serif", fontWeight:900, fontSize:"clamp(1.2rem,2.5vw,1.9rem)", letterSpacing:".12em", textTransform:"uppercase", color:"#fff", marginBottom:8 }}>Why Choose Greenaria?</h2>
          <div className="w-12 h-[3px] rounded-full mx-auto mb-4" style={{ background:"linear-gradient(90deg,#2e7d32,#b8914a)" }} />
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, maxWidth:520, margin:"0 auto" }}>
            Your trusted real estate consultant in Noidawith proven market expertise delivering transparent services.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s,i) => (
            <motion.div key={s.label} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*.1 }}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/[.08]"
              style={{ border:"1px solid rgba(255,255,255,.08)", background:"rgba(255,255,255,.04)" }}>
              <div className="stat-num font-heading font-black mb-2" style={{ fontSize:"clamp(1.8rem,4vw,2.7rem)", lineHeight:1.1 }}>
                {inView ? <CountUp start={0} end={s.num} duration={2.5} delay={i*.15} separator="," prefix={s.prefix} suffix={s.suffix} /> : `${s.prefix}0${s.suffix}`}
              </div>
              <p className="font-heading font-bold text-white tracking-[.12em] uppercase mb-1" style={{ fontSize:11.5 }}>{s.label}</p>
              <p style={{ fontSize:11.5, color:"rgba(255,255,255,.45)" }}>{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
