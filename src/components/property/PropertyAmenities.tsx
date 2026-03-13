// src/components/property/PropertyAmenities.tsx

import {
  Wifi,
  Car,
  Dumbbell,
  ShieldCheck,
  TreePalm,
  Building,
} from "lucide-react";

type Amenity = {
  id: string;
  name: string;
};

type Props = {
  amenities: Amenity[];
};

const iconMap: Record<string, any> = {
  Wifi: Wifi,
  Parking: Car,
  Gym: Dumbbell,
  Security: ShieldCheck,
  Garden: TreePalm,
  Clubhouse: Building,
};

export default function PropertyAmenities({ amenities }: Props) {
  if (!amenities || amenities.length === 0) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">Amenities</h3>

        <p className="text-gray-500 text-sm">
          No amenities information available.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      {/* TITLE */}

      <h3 className="text-xl font-semibold mb-6">Amenities</h3>

      {/* GRID */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity) => {
          const Icon = iconMap[amenity.name] || Building;

          return (
            <div
              key={amenity.id}
              className="flex items-center gap-3 border rounded-lg px-4 py-3 hover:bg-gray-50 transition"
            >
              <Icon size={18} className="text-green-600" />

              <span className="text-sm font-medium">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
