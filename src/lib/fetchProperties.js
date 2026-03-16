import propertiesData from "@/data/properties.json";
export async function getAllProperties() { return propertiesData; }
export async function getPropertyBySlug(slug) { return propertiesData.find(p => p.slug === slug) || null; }
export async function getFeaturedProperties() { return propertiesData.filter(p => p.featured); }
export async function getPropertiesByLocation(location) { return propertiesData.filter(p => p.location.toLowerCase() === location.toLowerCase()); }
export async function getPropertiesByType(type) { return propertiesData.filter(p => p.type.toLowerCase() === type.toLowerCase()); }
