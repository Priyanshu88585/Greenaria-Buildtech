import { NextResponse } from "next/server";
import propertiesData from "@/data/properties.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type     = searchParams.get("type");
  const location = searchParams.get("location");
  const bhk      = searchParams.get("bhk");
  const featured = searchParams.get("featured");
  const slug     = searchParams.get("slug");

  let results = [...propertiesData];
  if (slug)     return NextResponse.json(results.find(p => p.slug === slug) || null);
  if (type)     results = results.filter(p => p.type === type);
  if (location) results = results.filter(p => p.location === location || p.sector?.includes(location));
  if (bhk)      results = results.filter(p => p.bhk.includes(bhk));
  if (featured) results = results.filter(p => p.featured);

  return NextResponse.json({ properties: results, total: results.length });
}
