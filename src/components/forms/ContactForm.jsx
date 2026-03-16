"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
    } catch {}
    await new Promise(r => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  if (sent) return (
    <div className="text-center py-10">
      <div className="w-20 h-20 rounded-full bg-green-pale flex items-center justify-center mx-auto mb-4" style={{ animation:"float 4s ease-in-out infinite" }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 className="font-heading font-bold text-navy text-xl mb-2">Message Sent!</h3>
      <p className="text-gray-500">Our expert will contact you within 24 hours.</p>
      <button onClick={() => { setSent(false); setForm({ name:"", email:"", phone:"", message:"" }); }}
        className="mt-5 text-[#2e7d32] font-heading font-semibold text-sm underline">
        Send another message
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="form-input" type="text"  placeholder="Your Name"    value={form.name}    onChange={e=>setForm({...form,name:e.target.value})}    required />
      <input className="form-input" type="email" placeholder="Your Email"   value={form.email}   onChange={e=>setForm({...form,email:e.target.value})}   required />
      <input className="form-input" type="tel"   placeholder="Your Phone"   value={form.phone}   onChange={e=>setForm({...form,phone:e.target.value})}   required />
      <textarea className="form-input" rows={5}  placeholder="Your Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <button type="submit" disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0110 10"/></svg>
            Sending...
          </span>
        ) : "SEND MESSAGE"}
      </button>
    </form>
  );
}
