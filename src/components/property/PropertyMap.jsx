"use client";
export default function PropertyMap({ location, sector }) {
  const query = encodeURIComponent(`${sector || ""} ${location || "Gurgaon"}`);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ height:300, border:"1px solid #e0e0e0" }}>
      <iframe
        title="Property Location"
        src={`https://maps.google.com/maps?q=${query}&output=embed&z=14`}
        width="100%" height="100%" style={{ border:0 }} allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
