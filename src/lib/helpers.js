export const formatPrice = (v) => {
  if (!v) return "On Request";
  if (v >= 10000000) return `₹ ${(v / 10000000).toFixed(1)} Cr`;
  if (v >= 100000)   return `₹ ${(v / 100000).toFixed(1)} Lac`;
  return `₹ ${v.toLocaleString("en-IN")}`;
};
export const truncate = (str, n = 120) => str?.length > n ? str.slice(0, n) + "..." : str;
export const slugify  = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const getBadgeStyle = (s) => ({ "Launching Soon":"badge-launch","Under Construction":"badge-const","Ready To Move":"badge-ready","Featured":"badge-green" }[s] || "badge-green");
