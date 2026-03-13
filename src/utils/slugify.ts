// Utility to convert text into URL friendly slugs

export function slugify(text: string): string {
  if (!text) return "";

  return (
    text
      .toString()
      .toLowerCase()
      .trim()

      // Replace accented characters
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

      // Remove invalid characters
      .replace(/[^a-z0-9\s-]/g, "")

      // Replace spaces with hyphens
      .replace(/\s+/g, "-")

      // Remove multiple hyphens
      .replace(/-+/g, "-")

      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, "")
  );
}
