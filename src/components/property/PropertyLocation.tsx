// src/components/property/PropertyLocation.tsx

import { MapPin } from "lucide-react";

type Props = {
  latitude?: number;
  longitude?: number;
};

export default function PropertyLocation({ latitude, longitude }: Props) {
  if (!latitude || !longitude) {
    return null;
  }

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      {/* HEADER */}

      <div className="flex items-center gap-2 mb-4">
        <MapPin size={20} className="text-green-600" />

        <h3 className="text-xl font-semibold">Property Location</h3>
      </div>

      {/* MAP */}

      <div className="overflow-hidden rounded-lg">
        <iframe
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
          width="100%"
          height="380"
          loading="lazy"
          className="border-0 w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
