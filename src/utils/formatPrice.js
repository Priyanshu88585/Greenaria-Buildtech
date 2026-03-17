export default function formatPrice(v) {
  if (!v) return "On Request";
  if (v >= 10000000) return `₹ ${(v / 10000000).toFixed(1)} Cr`;
  if (v >= 100000)   return `₹ ${(v / 100000).toFixed(1)} Lac`;
  return `₹ ${v.toLocaleString("en-IN")}`;
}
