"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const sectors  = ["Select Sector","Sector 37D","Sector 56","Sector 61","Sector 65","Sector 71","Sector 89","Sector 114","Golf Course Road","Dwarka Expressway","Noida","Dubai"];
const types    = ["All Type","Residential","Commercial","Villa","Plot","Studio","SCO"];
const budgets  = ["Select Budget","Under ₹50L","₹50L–₹1Cr","₹1Cr–₹2Cr","₹2Cr–₹5Cr","Above ₹5Cr"];
const bhks     = ["Any BHK","1 BHK","2 BHK","2.5 BHK","3 BHK","4 BHK","5+ BHK"];

export default function SearchBar() {
  const router = useRouter();
  const [form, setForm] = useState({ sector:"", type:"", budget:"", bhk:"" });

  const handleExplore = () => {
    const params = new URLSearchParams();
    if (form.sector && form.sector !== "Select Sector") params.set("sector", form.sector);
    if (form.type   && form.type   !== "All Type")      params.set("type",   form.type);
    if (form.budget && form.budget !== "Select Budget") params.set("budget", form.budget);
    if (form.bhk    && form.bhk    !== "Any BHK")       params.set("bhk",    form.bhk);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:.8, duration:.6 }}
      className="bg-white rounded-t-2xl px-7 py-6"
      style={{ boxShadow:"0 -4px 50px rgba(0,0,0,.18)" }}>
      <div className="flex flex-wrap items-end gap-4">
        {[
          { label:"Location",      key:"sector", opts:sectors  },
          { label:"Property Type", key:"type",   opts:types    },
          { label:"Budget",        key:"budget", opts:budgets  },
          { label:"BHK",           key:"bhk",    opts:bhks     },
        ].map(f => (
          <div key={f.key} className="flex-1 min-w-[140px]">
            <label className="form-label">{f.label}</label>
            <select value={form[f.key]} onChange={e => setForm({...form,[f.key]:e.target.value})} className="search-select">
              {f.opts.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
        <div className="flex-shrink-0 self-end">
          <button onClick={handleExplore} className="btn-primary" style={{ height:46 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Explore Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
