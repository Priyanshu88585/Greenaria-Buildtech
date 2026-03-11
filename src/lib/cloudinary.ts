// src/lib/cloudinary.ts

import { v2 as cloudinary } from "cloudinary";

/**
 * Ensure required environment variables exist
 */
function validateEnv() {
  if (!process.env.CLOUDINARY_CLOUD_NAME) {
    throw new Error("Missing CLOUDINARY_CLOUD_NAME");
  }

  if (!process.env.CLOUDINARY_API_KEY) {
    throw new Error("Missing CLOUDINARY_API_KEY");
  }

  if (!process.env.CLOUDINARY_API_SECRET) {
    throw new Error("Missing CLOUDINARY_API_SECRET");
  }
}

validateEnv();

/**
 * Cloudinary configuration
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Upload image to Cloudinary
 */
export async function uploadImage(
  file: string,
  folder = "greenaria/properties",
) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      resource_type: "image",
      transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
    };
  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error);

    throw new Error("Image upload failed");
  }
}

/**
 * Upload property gallery images
 */
export async function uploadMultipleImages(
  files: string[],
  folder = "greenaria/properties",
) {
  try {
    const uploads = files.map((file) => uploadImage(file, folder));

    return await Promise.all(uploads);
  } catch (error) {
    console.error("Multiple Upload Error:", error);

    throw new Error("Multiple image upload failed");
  }
}

/**
 * Delete image from Cloudinary
 */
export async function deleteImage(publicId: string) {
  if (!publicId) return false;

  try {
    await cloudinary.uploader.destroy(publicId);

    return true;
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);

    return false;
  }
}

/**
 * Delete multiple images
 */
export async function deleteMultipleImages(publicIds: string[]) {
  try {
    const deletes = publicIds.map((id) => deleteImage(id));

    return await Promise.all(deletes);
  } catch (error) {
    console.error("Multiple Delete Error:", error);

    return false;
  }
}

export default cloudinary;
