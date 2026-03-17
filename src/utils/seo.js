export function generateSEO({ title, description, image, url }) {
  return {
    title,
    description,
    openGraph: { title, description, images: image ? [{ url: image }] : [], url, type: "website" },
    twitter:   { card: "summary_large_image", title, description, images: image ? [image] : [] },
  };
}
