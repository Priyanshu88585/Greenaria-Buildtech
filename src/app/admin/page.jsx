"use client";
import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({ name:"", developer:"", location:"", price:"", type:"Residential", description:"", image:"" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("/api/admin/add-property", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
    const data = await res.json();
    setMsg(data.message || data.error);
  };

  return (
    <div className="min-h-screen bg-[#f5faf5] flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl">
        <h1 className="font-heading font-black text-navy text-2xl mb-6">Add New Property</h1>
        {msg && <div className="mb-4 p-3 rounded-lg bg-green-pale text-green-primary text-sm font-medium">{msg}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label:"Property Name", key:"name",      type:"text",   required:true  },
            { label:"Developer",     key:"developer",  type:"text",   required:true  },
            { label:"Location",      key:"location",   type:"text",   required:true  },
            { label:"Price",         key:"price",      type:"text",   required:false },
            { label:"Image URL",     key:"image",      type:"text",   required:false },
          ].map(f => (
            <div key={f.key}>
              <label className="form-label">{f.label}</label>
              <input className="form-input" type={f.type} value={form[f.key]} onChange={e=>setForm({...form,[f.key]:e.target.value})} required={f.required} />
            </div>
          ))}
          <div>
            <label className="form-label">Property Type</label>
            <select className="search-select" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
              {["Residential","Commercial","Villa","Plot","Studio"].map(t=><option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label">Description</label>
            <textarea className="form-input" rows={4} value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
          </div>
          <button type="submit" className="btn-primary">Add Property</button>
        </form>
      </div>
    </div>
  );
}
