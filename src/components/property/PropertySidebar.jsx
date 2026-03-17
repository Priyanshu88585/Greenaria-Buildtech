"use client";
import { useState } from "react";
import Link from "next/link";

export default function PropertySidebar({ property }) {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
  };

  return (
    <div className="space-y-5 sticky top-[90px]">
      {/* Price card */}
      <div className="bg-white rounded-2xl p-6" style={{ border:"1px solid #e0e0e0", boxShadow:"0 2px 12px rgba(0,0,0,.07)" }}>
        <p className="font-heading font-black text-2xl mb-1" style={{ color: property.priceValue ? "#2e7d32" : "#b8914a" }}>{property.price}</p>
        <p className="text-gray-500 text-sm mb-4">{property.area} · {property.possession}</p>
        <div className="space-y-2">
          <a href="tel:+917400230074" className="btn-primary w-full justify-center">📞 Call Now</a>
          <a href="https://wa.me/917400230074" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-heading font-bold text-sm tracking-widest uppercase text-white transition-all hover:-translate-y-0.5"
            style={{ background:"#25d366", boxShadow:"0 4px 14px rgba(37,211,102,.35)" }}>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Inquiry form */}
      <div className="bg-white rounded-2xl p-6" style={{ border:"1px solid #e0e0e0", boxShadow:"0 2px 12px rgba(0,0,0,.07)" }}>
        <h3 className="font-heading font-bold text-navy mb-4" style={{ fontSize:16 }}>Get Expert Consultation</h3>
        {sent ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-2">✅</div>
            <p className="font-heading font-bold text-navy mb-1">Message Sent!</p>
            <p className="text-gray-500 text-sm">We&apos;ll contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input className="form-input" type="text"  placeholder="Your Name"  value={form.name}    onChange={e=>setForm({...form,name:e.target.value})}    required />
            <input className="form-input" type="tel"   placeholder="Your Phone" value={form.phone}   onChange={e=>setForm({...form,phone:e.target.value})}   required />
            <input className="form-input" type="email" placeholder="Your Email" value={form.email}   onChange={e=>setForm({...form,email:e.target.value})}   />
            <textarea className="form-input" rows="3"  placeholder="Your Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
            <button type="submit" className="btn-primary w-full justify-center">Send Enquiry</button>
          </form>
        )}
      </div>

      {/* RERA info */}
      {property.rera && (
        <div className="p-4 rounded-xl bg-green-pale">
          <p className="text-xs font-heading font-bold text-[#2e7d32] tracking-widest uppercase mb-1">RERA Registered</p>
          <p className="text-sm font-mono text-navy">{property.rera}</p>
        </div>
      )}
    </div>
  );
}
