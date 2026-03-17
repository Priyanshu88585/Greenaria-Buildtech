"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background:"#fff" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-10">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>Greenaria BuildTech</h2>
          <p style={{ fontFamily:"Montserrat,sans-serif", fontWeight:600, fontSize:12, letterSpacing:".1em", textTransform:"uppercase", color:"#6b7280", marginBottom:4 }}>Preferred Choice for Builders</p>
          <div className="gold-divider" />
        </motion.div>

        <div className="max-w-[900px] mx-auto space-y-5">
          {[
            <><strong>Greenaria BuildTech</strong> is a trusted and experienced <span style={{color:"#2e7d32",fontWeight:600}}>real estate developer in Noida</span>, associated with some of the most reputed builders in the industry, including <strong>DLF, M3M, Trump Towers, AIPL, Bhutani Group, Emaar, and Sobha Dubai</strong>. With over <strong>10 years of experience</strong> and <strong>8,000+ successful property transactions</strong>, we have established ourselves as a leading real estate consultancy catering to both Indian and international markets.</>,
            <>We offer premium residential, commercial, and investment property advisory services across <strong>Noida, Delhi-NCR, Noida, and Dubai</strong>. Recognised with multiple awards from top developers, Greenaria BuildTech is known for its strong market knowledge, ethical practices, and excellence in marketing new real estate developments. Our reputation as one of the <span style={{color:"#2e7d32",fontWeight:600}}>best real estate consultants in Noida</span> is built on long-term client trust and consistent results.</>,
            <>At Greenaria BuildTech, our clients&apos; interests are our highest priority. We are committed to protecting, guiding, and serving buyers and investors with complete transparency and accountability. Guided by our core principle — <em style={{color:"#2e7d32",fontWeight:600}}>&ldquo;You make a living by what you get, but you make a life by what you give&rdquo;</em> — we strive to create lasting value for our clients and community.</>,
          ].map((para, i) => (
            <motion.p key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*.15 }} className="text-center" style={{ fontSize:15, lineHeight:1.82, color:"#2d2d2d" }}>
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
