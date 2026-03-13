// src/components/property/PropertyGallery.tsx

"use client";

import Image from "next/image";

type Props = {
  images: string[];
};

export default function PropertyGallery({ images }: Props) {
  if (!images || images.length === 0) {
    return (
      <div className="text-sm text-gray-500">
        No images available for this property.
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-full h-48 overflow-hidden rounded-xl group"
        >
          <Image
            src={img}
            alt={`Property Image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw,
                   (max-width: 1200px) 33vw,
                   25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
