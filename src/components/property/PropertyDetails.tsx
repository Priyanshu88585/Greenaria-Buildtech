// src/components/property/PropertyDetails.tsx

import { MapPin, Bed, Bath, Square } from "lucide-react";

type Property = {
  title: string;
  location: string;
  description: string;
  price?: number;
  area?: number;
  bedrooms?: number;
  bathrooms?: number;
};

type Props = {
  property: Property;
};

export default function PropertyDetails({ property }: Props) {
  return (
    <div className="bg-white border rounded-xl p-8 shadow-sm">
      {/* TITLE */}

      <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>

      {/* LOCATION */}

      <div className="flex items-center text-gray-500 mb-6">
        <MapPin size={18} className="mr-2 text-green-600" />

        <span>{property.location}</span>
      </div>

      {/* PRICE */}

      {property.price && (
        <div className="text-2xl font-bold text-green-600 mb-6">
          ₹ {property.price.toLocaleString()}
        </div>
      )}

      {/* PROPERTY FEATURES */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {property.area && (
          <div className="flex items-center gap-3">
            <Square size={20} className="text-green-600" />

            <span className="text-sm">{property.area} sqft</span>
          </div>
        )}

        {property.bedrooms && (
          <div className="flex items-center gap-3">
            <Bed size={20} className="text-green-600" />

            <span className="text-sm">{property.bedrooms} Bedrooms</span>
          </div>
        )}

        {property.bathrooms && (
          <div className="flex items-center gap-3">
            <Bath size={20} className="text-green-600" />

            <span className="text-sm">{property.bathrooms} Bathrooms</span>
          </div>
        )}
      </div>

      {/* DESCRIPTION */}

      <div className="prose max-w-none text-gray-700">
        <p>{property.description}</p>
      </div>
    </div>
  );
}
