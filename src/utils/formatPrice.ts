// Utility to format prices for Indian real estate UI

export interface FormatPriceOptions {
  compact?: boolean // show 1.2 Cr / 45 L
}

export function formatPrice(
  price: number,
  options: FormatPriceOptions = {}
): string {
  if (!price && price !== 0) return "₹0"

  // Compact format (Lakhs / Crores)
  if (options.compact) {
    if (price >= 10000000) {
      const crores = price / 10000000
      return `₹${crores.toFixed(2)} Cr`
    }

    if (price >= 100000) {
      const lakhs = price / 100000
      return `₹${lakhs.toFixed(2)} L`
    }
  }

  // Standard currency format
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}