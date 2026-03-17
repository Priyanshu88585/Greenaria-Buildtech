"use client";
import { useState } from "react";
export default function Gallery({ images }) {
  const [lightbox, setLightbox] = useState(null);
  if (!images?.length) return null;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img,i) => (
          <button key={i} onClick={()=>setLightbox(i)} className="group rounded-xl overflow-hidden" style={{ aspectRatio:"4/3" }}>
            <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          </button>
        ))}
      </div>
      {lightbox!==null && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white text-4xl" onClick={()=>setLightbox(null)}>×</button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl" onClick={()=>setLightbox((lightbox-1+images.length)%images.length)}>‹</button>
          <img src={images[lightbox]} alt="" className="max-w-full max-h-[90vh] object-contain rounded-xl"/>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl" onClick={()=>setLightbox((lightbox+1)%images.length)}>›</button>
        </div>
      )}
    </>
  );
}
