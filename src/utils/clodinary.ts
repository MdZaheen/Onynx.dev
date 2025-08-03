// utils/uploadImage.ts

import cloudinary from "@/app/lib/cloudinary";

// This function uploads an image buffer to Cloudinary
export const uploadImageToCloudinary = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Return a promise to handle async upload
  return new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: "projects",
        resource_type: "auto",
        public_id: `project_${Date.now()}`,
        transformation: [
          { width: 800, height: 600, crop: "limit" },
          { quality: "auto" }
        ]
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          reject(error);
        } else {
          resolve({
            secure_url: (result as any).secure_url,
            public_id: (result as any).public_id
          });
        }
      }
    ).end(buffer);
  });
};
