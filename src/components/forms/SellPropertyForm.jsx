"use client";
import { useState } from "react";

export default function SellPropertyForm() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", type:"", location:"", price:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
  };

  if (sent) return (
    <div className="text-center py-10">
      <div className="text-5xl mb-4">🏡</div>
      <h3 className="font-heading font-bold text-navy text-xl mb-2">Request Submitted!</h3>
      <p className="text-gray-500">Our team will evaluate your property and contact you within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="form-label">Your Name *</label><input className="form-input" type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required /></div>
        <div><label className="form-label">Phone *</label><input className="form-input" type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required /></div>
        <div><label className="form-label">Email</label><input className="form-input" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
        <div><label className="form-label">Property Type</label>
          <select className="search-select" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
            <option value="">Select Type</option>
            {["Apartment","Villa","Commercial","Plot"].map(t=><option key={t}>{t}</option>)}
          </select>
        </div>
        <div><label className="form-label">Location</label><input className="form-input" type="text" placeholder="Sector / Area" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} /></div>
        <div><label className="form-label">Expected Price</label><input className="form-input" type="text" placeholder="e.g. ₹1.5 Cr" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} /></div>
      </div>
      <div><label className="form-label">Additional Details</label><textarea className="form-input" rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></div>
      <button type="submit" className="btn-primary">Submit Property</button>
    </form>
  );
}
