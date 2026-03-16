"use client";
import { useState } from "react";
export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300">
      <div className="relative bg-navy" style={{ aspectRatio:"16/9" }}>
        {playing ? (
          <video src={video.src} controls autoPlay className="w-full h-full object-cover" />
        ) : (
          <>
            <img src={video.thumbnail||"/images/projects/sample-project.jpg"} alt={video.title} className="w-full h-full object-cover opacity-80" />
            <button onClick={()=>setPlaying(true)} className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-navy" style={{ fontSize:14 }}>{video.title}</h3>
        {video.duration && <p className="text-xs text-gray-500 mt-1">{video.duration}</p>}
      </div>
    </div>
  );
}
