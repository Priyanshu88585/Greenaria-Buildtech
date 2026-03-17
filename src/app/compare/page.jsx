"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useCompare } from "@/context/CompareContext";

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompare() || { compareList:[], removeFromCompare:()=>{}, clearCompare:()=>{} };

  const fields = ["name","developer","location","price","area","possession","rera"];
  const labels = { name:"Property", developer:"Developer", location:"Location", price:"Price", area:"Area", possession:"Possession", rera:"RERA No." };

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="relative flex items-center justify-center" style={{ minHeight:240, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Compare Properties</h1>
          </div>
        </section>
        <section className="section-pad" style={{ background:"#f9f9f9" }}>
          <div className="max-content">
            {compareList.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">⚖️</p>
                <h2 className="font-heading font-bold text-navy text-xl mb-3">No properties to compare</h2>
                <p className="text-gray-500 mb-6">Add properties from the listings page to compare.</p>
                <a href="/properties" className="btn-primary inline-flex">Browse Properties</a>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="flex justify-end mb-4">
                  <button onClick={clearCompare} className="btn-green-outline text-sm">Clear All</button>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 bg-white font-heading font-bold text-navy border-b border-gray-200" style={{ width:160 }}>Feature</th>
                      {compareList.map(p => (
                        <th key={p.id} className="p-4 bg-white border-b border-gray-200 text-center" style={{ minWidth:220 }}>
                          <div className="relative">
                            <img src={p.image} alt={p.name} className="w-full h-28 object-cover rounded-xl mb-2" />
                            <button onClick={() => removeFromCompare(p.id)} className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">×</button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((f, i) => (
                      <tr key={f} className={i%2===0?"bg-[#f9f9f9]":"bg-white"}>
                        <td className="p-4 font-heading font-bold text-navy text-sm">{labels[f]}</td>
                        {compareList.map(p => (
                          <td key={p.id} className="p-4 text-center text-sm text-gray-600">
                            {f==="price" ? <span className="font-bold" style={{ color: p.priceValue?"#2e7d32":"#b8914a" }}>{p[f]}</span> : p[f] || "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
