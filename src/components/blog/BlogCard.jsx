"use client";
import Link from "next/link";
import { useState } from "react";

export default function BlogCard({ post: p }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/blog/${p.slug}`} className="blog-card block" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="blog-img">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform .55s ease" }}
          onError={e => { e.target.src = "/images/blog/blog-placeholder.jpg"; }} />
      </div>
      <div className="p-[22px_20px_24px] flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          {p.category && <span className="badge badge-green" style={{ fontSize:9 }}>{p.category}</span>}
          <p style={{ fontSize:11, fontWeight:600, letterSpacing:".07em", textTransform:"uppercase", color:"#9ca3af" }}>{p.date}</p>
        </div>
        <h3 className="font-heading font-bold leading-[1.45] mb-3 flex-1 transition-colors duration-300"
          style={{ fontSize:14.5, color: hovered ? "#2e7d32" : "#0d2137" }}>
          {p.title}
        </h3>
        <p className="mb-4 line-clamp-3" style={{ fontSize:13, color:"#6b7280", lineHeight:1.65 }}>{p.excerpt}</p>
        <span className="inline-flex items-center gap-[5px] font-heading font-bold tracking-[.06em] uppercase transition-all duration-300"
          style={{ fontSize:12, color:"#2e7d32", gap: hovered ? 9 : 5 }}>
          Continue reading
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </Link>
  );
}
