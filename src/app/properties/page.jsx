"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertyGrid from "@/components/property/PropertyGrid";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useProperties } from "@/hooks/useProperties";

const sectors  = ["Select Sector","Sector 37D","Sector 56","Sector 61","Sector 65","Sector 71","Sector 89","Sector 114","Golf Course Road","Dwarka Expressway","Noida","Dubai"];
const types    = ["All Type","Residential","Commercial","Villa","Plot","Studio","SCO"];
const budgets  = ["Select Budget","Under ₹50L","₹50L–₹1Cr","₹1Cr–₹2Cr","₹2Cr–₹5Cr","Above ₹5Cr"];
const bhks     = ["Any BHK","1 BHK","2 BHK","2.5 BHK","3 BHK","4 BHK","5+ BHK"];

export default function PropertiesPage() {
  const [filters, setFilters] = useState({ type:"", location:"", budget:"", bhk:"" });
  const { properties, loading } = useProperties(filters);

  return (
    <>
      <Header />
      <main className="page-wrapper">
        {/* Banner */}
        <section className="relative flex items-center justify-center" style={{ minHeight:280, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>All Properties</h1>
            <p className="text-white/70">RERA-Verified Properties in Prime Locations</p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-6 bg-white sticky top-[72px] z-50" style={{ boxShadow:"0 4px 20px rgba(0,0,0,.08)" }}>
          <div className="max-content">
            <div className="flex flex-wrap gap-3 items-end">
              {[
                { label:"Location",      key:"location", opts:sectors },
                { label:"Property Type", key:"type",     opts:types   },
                { label:"Budget",        key:"budget",   opts:budgets },
                { label:"BHK",           key:"bhk",      opts:bhks    },
              ].map(f => (
                <div key={f.key} className="flex-1 min-w-[130px]">
                  <label className="form-label">{f.label}</label>
                  <select className="search-select" value={filters[f.key]} onChange={e => setFilters({ ...filters, [f.key]: e.target.value })}>
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <button onClick={() => setFilters({ type:"", location:"", budget:"", bhk:"" })}
                className="btn-green-outline flex-shrink-0" style={{ height:46 }}>
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="section-pad" style={{ background:"#f9f9f9" }}>
          <div className="max-content">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-bold text-navy" style={{ fontSize:20 }}>
                {loading ? "Loading..." : `${properties.length} Properties Found`}
              </h2>
            </div>
            <PropertyGrid properties={properties} loading={loading} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
