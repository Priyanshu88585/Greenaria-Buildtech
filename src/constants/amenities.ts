// src/constants/amenities.ts

export interface Amenity {
  id: string
  label: string
  icon: string
  category: "lifestyle" | "security" | "convenience"
}

export const AMENITIES: Amenity[] = [

  {
    id: "swimming_pool",
    label: "Swimming Pool",
    icon: "🏊",
    category: "lifestyle"
  },

  {
    id: "gym",
    label: "Gym",
    icon: "🏋️",
    category: "lifestyle"
  },

  {
    id: "clubhouse",
    label: "Clubhouse",
    icon: "🏢",
    category: "lifestyle"
  },

  {
    id: "jogging_track",
    label: "Jogging Track",
    icon: "🏃",
    category: "lifestyle"
  },

  {
    id: "children_park",
    label: "Children Park",
    icon: "🛝",
    category: "lifestyle"
  },

  {
    id: "24x7_security",
    label: "24x7 Security",
    icon: "🛡️",
    category: "security"
  },

  {
    id: "cctv",
    label: "CCTV Surveillance",
    icon: "📹",
    category: "security"
  },

  {
    id: "gated_community",
    label: "Gated Community",
    icon: "🚧",
    category: "security"
  },

  {
    id: "parking",
    label: "Parking",
    icon: "🚗",
    category: "convenience"
  },

  {
    id: "power_backup",
    label: "Power Backup",
    icon: "🔌",
    category: "convenience"
  },

  {
    id: "lift",
    label: "Lift",
    icon: "🛗",
    category: "convenience"
  },

  {
    id: "wifi",
    label: "High Speed Internet",
    icon: "📶",
    category: "convenience"
  }

]