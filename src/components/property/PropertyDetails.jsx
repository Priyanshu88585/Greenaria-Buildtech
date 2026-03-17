"use client";
import Amenities from "./Amenities";

export default function PropertyDetails({ property }) {
  if (!property) return null;
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {property.featured && <span className="badge badge-green">Featured</span>}
        {property.bhk?.map(b => <span key={b} className="badge badge-const">{b}</span>)}
        {property.status?.map(s => <span key={s} className={`badge ${s==="Ready To Move"?"badge-ready":s==="Launching Soon"?"badge-launch":"badge-const"}`}>{s}</span>)}
      </div>
      <h1 className="font-heading font-black text-navy" style={{ fontSize:"clamp(1.4rem,3vw,2rem)" }}>{property.name}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <span>📍 {property.location}, {property.sector}</span>
        {property.area && <span>📐 {property.area}</span>}
        {property.possession && <span>🗓️ Possession: {property.possession}</span>}
        {property.developer && <span>🏗️ {property.developer}</span>}
      </div>
      <p className="font-heading font-black" style={{ fontSize:"clamp(1.4rem,3vw,2rem)", color:property.priceValue?"#2e7d32":"#b8914a" }}>{property.price}</p>
      <p style={{ fontSize:15, lineHeight:1.82, color:"#4b5563" }}>{property.description}</p>
      <Amenities amenities={property.amenities} />
      {property.rera && (
        <div className="p-4 rounded-xl bg-green-pale">
          <p className="text-xs font-heading font-bold text-green-primary tracking-widest uppercase mb-1">RERA Registered</p>
          <p className="text-sm font-mono text-navy">{property.rera}</p>
        </div>
      )}
    </div>
  );
}
