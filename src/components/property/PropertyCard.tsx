// src/components/property/PropertyGallery.tsx

"use client";

import Image from "next/image";

type Props = {
  images: string[];
};

export default function PropertyGallery({ images }: Props) {
  if (!images || images.length === 0) {
    return (
      <div className="text-gray-500 text-sm">No property images available</div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-full h-48 overflow-hidden rounded-lg group"
        >
          <Image
            src={img}
            alt={`Property image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw,
                   (max-width: 1200px) 33vw,
                   25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
