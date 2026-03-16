"use client";
import { useState } from "react";
import Link from "next/link";

const badgeMap = { "Launching Soon":"badge-launch", "Under Construction":"badge-const", "Ready To Move":"badge-ready", "Featured":"badge-green" };

export default function PropertyCard({ property: p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/properties/${p.slug}`} className="block h-full" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <article className="prop-card h-full">
        {/* Image */}
        <div className="prop-img">
          <img src={p.image} alt={p.name} className="w-full h-full object-cover"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)", transition: "transform .55s ease" }}
            onError={e => { e.target.src = "/images/properties/property-placeholder.jpg"; }} />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-[5px] z-10">
            {p.featured && <span className="badge badge-green">Featured</span>}
            {p.bhk.map(b => <span key={b} className="badge badge-bhk">{b}</span>)}
            {p.status.map(s => <span key={s} className={`badge ${badgeMap[s] || "badge-green"}`}>{s}</span>)}
          </div>

          {/* Location tag */}
          <div className="absolute bottom-2 left-3 flex items-center gap-[5px] px-2.5 py-1 rounded text-white font-semibold" style={{ fontSize:11, background:"rgba(0,0,0,.55)", backdropFilter:"blur(4px)" }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#ef4444"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            {p.location}
          </div>

          {/* Photo count */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded text-white font-semibold" style={{ fontSize:11, background:"rgba(0,0,0,.55)", backdropFilter:"blur(4px)" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            {p.photos}
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="font-heading font-bold leading-[1.4] mb-[5px] transition-colors duration-300"
            style={{ fontSize:15, color: hovered ? "#2e7d32" : "#0d2137" }}>
            {p.name}
          </h3>
          <p className="font-heading font-bold mb-2" style={{ fontSize:14, color: p.priceValue ? "#2e7d32" : "#b8914a" }}>
            {p.price}
          </p>
          <p className="line-clamp-2" style={{ fontSize:13, color:"#6b7280", lineHeight:1.6 }}>{p.description}</p>
        </div>
      </article>
    </Link>
  );
}
