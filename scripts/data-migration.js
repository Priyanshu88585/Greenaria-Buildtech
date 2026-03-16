/**
 * Data Migration Script
 * Use this to migrate properties from any external source into src/data/properties.json
 * 
 * Usage: node scripts/data-migration.js
 */

const fs = require("fs");
const path = require("path");

function migrateProperties(sourceData) {
  return sourceData.map((item, i) => ({
    id: i + 1,
    slug: item.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `property-${i+1}`,
    name: item.name || "",
    developer: item.developer || "",
    location: item.location || "Gurgaon",
    sector: item.sector || "",
    price: item.price || "On Request",
    priceValue: item.priceValue || null,
    bhk: Array.isArray(item.bhk) ? item.bhk : item.bhk ? [item.bhk] : [],
    status: Array.isArray(item.status) ? item.status : item.status ? [item.status] : [],
    featured: item.featured || false,
    type: item.type || "Residential",
    image: item.image || "/images/properties/property-placeholder.jpg",
    images: item.images || [item.image || "/images/properties/property-placeholder.jpg"],
    photos: item.photos || 1,
    description: item.description || "",
    amenities: item.amenities || [],
    rera: item.rera || "",
    area: item.area || "",
    possession: item.possession || "",
    category: item.category || "premium",
  }));
}

// Example: read from a raw JSON file
// const raw = JSON.parse(fs.readFileSync("./raw-data.json", "utf-8"));
// const migrated = migrateProperties(raw);
// fs.writeFileSync(path.join(__dirname, "../src/data/properties.json"), JSON.stringify(migrated, null, 2));

console.log("Data migration script ready. Uncomment the last 3 lines to run migration.");
