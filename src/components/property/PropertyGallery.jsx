"use client";
import { useState } from "react";

export default function PropertyGallery({ images, name }) {
  const [main, setMain] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!images?.length) return null;

  return (
    <>
      <div className="space-y-3">
        <div className="rounded-2xl overflow-hidden cursor-pointer" style={{ aspectRatio:"16/10" }} onClick={() => setLightbox(true)}>
          <img src={images[main]} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={e => { e.target.src="/images/properties/property-placeholder.jpg"; }} />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img,i) => (
            <button key={i} onClick={() => setMain(i)}
              className="flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden transition-all duration-200"
              style={{ border: i === main ? "3px solid #2e7d32" : "3px solid transparent" }}>
              <img src={img} alt="" className="w-full h-full object-cover"
                onError={e => { e.target.src="/images/properties/property-placeholder.jpg"; }} />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(false)}>
          <img src={images[main]} alt={name} className="max-w-full max-h-[90vh] rounded-xl object-contain" />
          <button className="absolute top-4 right-4 text-white text-3xl">&times;</button>
        </div>
      )}
    </>
  );
}
