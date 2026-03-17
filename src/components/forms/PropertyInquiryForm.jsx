"use client";
import { useState } from "react";

export default function PropertyInquiryForm({ propertyName }) {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:`I am interested in ${propertyName}. Please share more details.` });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  if (sent) return (
    <div className="text-center py-4">
      <div className="text-3xl mb-2">✅</div>
      <p className="font-heading font-bold text-navy">Thank you! We&apos;ll be in touch soon.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="form-input" type="text"  placeholder="Name"  value={form.name}  onChange={e=>setForm({...form,name:e.target.value})}  required />
      <input className="form-input" type="tel"   placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
      <input className="form-input" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <textarea className="form-input" rows={3}  value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70">
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
