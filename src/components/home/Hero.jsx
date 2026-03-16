"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

const slides = [
  { bg:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=90", title:"Best Real Estate Developer\nin Delhi NCR & Dubai",     sub:"Buy, Sell & Invest in Gurgaon Properties with Trusted Real Estate Consultants" },
  { bg:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90", title:"Premium Eco-Luxury Homes\nin Gurgaon",              sub:"Explore RERA-verified Properties with Exclusive Builder Partnerships" },
  { bg:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90", title:"Your Trusted Property\nPartner in Gurgaon",         sub:"8,000+ Successful Transactions · 10+ Years Experience · 100% RERA Compliant" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => { clearInterval(timerRef.current); setCurrent(i); timerRef.current = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6000); };

  useEffect(() => { timerRef.current = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6000); return () => clearInterval(timerRef.current); }, []);

  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior:"smooth" }); };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight:"100vh" }}>
      <AnimatePresence mode="sync">
        <motion.div key={current} initial={{ opacity:0, scale:1.06 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }} transition={{ duration:1.2, ease:"easeInOut" }}
          className="absolute inset-0" style={{ backgroundImage:`url(${slides[current].bg})`, backgroundSize:"cover", backgroundPosition:"center" }} />
      </AnimatePresence>

      <div className="absolute inset-0 z-[1]" style={{ background:"linear-gradient(160deg,rgba(13,33,55,.85) 0%,rgba(46,125,50,.15) 55%,rgba(13,33,55,.70) 100%)" }} />

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(5)].map((_,i) => (
          <div key={i} className="absolute rounded-full opacity-[.12]" style={{ width:`${70+i*40}px`, height:`${70+i*40}px`, background:"radial-gradient(circle,#4caf50,transparent)", left:`${8+i*18}%`, top:`${12+i*14}%`, animation:`float ${5+i}s ease-in-out ${i*.6}s infinite` }} />
        ))}
      </div>

      <div className="relative z-[2] flex flex-col justify-center items-center text-center px-4"
        style={{ minHeight:"calc(100vh - 80px)", paddingTop:80, paddingBottom:200 }}>
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:.65 }} className="max-w-[860px]">
            <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.1 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background:"rgba(255,255,255,.1)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,.2)" }}>
              <span className="w-2 h-2 rounded-full bg-[#4caf50]" style={{ animation:"ping2 2.5s ease infinite" }} />
              <span style={{ fontFamily:"Montserrat,sans-serif", fontWeight:600, fontSize:11, color:"rgba(255,255,255,.9)", letterSpacing:".12em", textTransform:"uppercase" }}>
                Greenaria BuildTech — Gurgaon&apos;s Trusted Partner
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.2 }}
              className="font-heading font-black text-white uppercase tracking-[.07em] leading-[1.12] mb-5"
              style={{ fontSize:"clamp(1.9rem,5.5vw,3.9rem)", textShadow:"0 2px 28px rgba(0,0,0,.45)" }}>
              {slides[current].title.split("\n").map((line,i) => (
                <span key={i} className="block">{i===0 ? line : <span className="gradient-text">{line}</span>}</span>
              ))}
            </motion.h1>

            <motion.p initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3 }}
              className="mb-8 max-w-[600px] mx-auto" style={{ fontSize:"1.05rem", color:"rgba(255,255,255,.85)" }}>
              {slides[current].sub}
            </motion.p>

            <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.45 }} className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => scrollTo("contact")} className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                Talk To An Expert
              </button>
              <button onClick={() => scrollTo("properties")} className="btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Explore Properties
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button onClick={() => goTo((current-1+slides.length)%slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.25)" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button onClick={() => goTo((current+1)%slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.25)" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div className="absolute flex gap-2" style={{ bottom:210, left:"50%", transform:"translateX(-50%)" }}>
          {slides.map((_,i) => (
            <button key={i} onClick={() => goTo(i)} className="rounded-full transition-all duration-300"
              style={{ width:i===current?24:8, height:8, background:i===current?"#fff":"rgba(255,255,255,.4)" }} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <div className="max-content"><SearchBar /></div>
      </div>
    </section>
  );
}
