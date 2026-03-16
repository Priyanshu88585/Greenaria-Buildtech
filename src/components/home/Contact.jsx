"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";

const contactMeta = [
  { bg:"#22c55e", shadow:"rgba(34,197,94,.3)", icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.84a16 16 0 006.24 6.24l1.42-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label:"Call Us", value:"+91 7400230074" },
  { bg:"#1a78c2", shadow:"rgba(26,120,194,.3)", icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:"Enquiry", value:"enquiries@greenariabuildtech.com" },
  { bg:"#f59e0b", shadow:"rgba(245,158,11,.3)", icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:"Visit Office", value:"A-512-517, 5th floor, Emaar Digital Greens, Golf Course Ext Road, Sector 61, Gurugram 122102" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ background:"#fff" }}>
      <div className="max-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div initial={{ opacity:0,x:-40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} className="lg:col-span-2">
            <h2 className="section-title mb-4" style={{ fontSize:"clamp(1.2rem,2.8vw,1.9rem)", lineHeight:1.28 }}>
              Ready To Find Your<br/>Dream Property?
            </h2>
            <p className="mb-8" style={{ fontSize:15, color:"#6b7280", lineHeight:1.72 }}>
              Looking for a trusted <strong>property consultant in Gurgaon</strong>? Get in touch with Greenaria BuildTech for personalised real estate advisory.
            </p>
            {contactMeta.map(m => (
              <div key={m.label} className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background:m.bg, boxShadow:`0 4px 14px ${m.shadow}` }}>{m.icon}</div>
                <div>
                  <p className="font-heading font-bold mb-1" style={{ fontSize:13, color:"#0d2137" }}>{m.label}</p>
                  <p style={{ fontSize:14, color:"#6b7280" }}>{m.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity:0,x:40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-[40px_36px]" style={{ boxShadow:"0 8px 48px rgba(0,0,0,.12)", border:"1px solid #e5e7eb" }}>
              <p className="font-heading font-bold text-navy mb-6 tracking-[.04em]" style={{ fontSize:18 }}>Get Expert Consultation</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
