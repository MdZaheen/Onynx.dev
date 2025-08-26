import dbConnect from "@/app/lib/dbconnect";
import ProjectModel from "@/models/projects.model";
import { uploadImageToCloudinary } from "@/utils/cloudinary"; // Import reusable upload function
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Parse form data
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const projectLink = formData.get("projectLink") as string;
    const imageFile = formData.get("image") as File | null;

    if (!title || !description || !projectLink) {
      return NextResponse.json(
        { error: "Title, description, and projectLink are required" },
        { status: 400 }
      );
    }

    // Initialize image variables
    let imageUrl = null;

    // If image provided, upload using utility function
    if (imageFile && imageFile.size > 0) {
      try {
        const { secure_url } = await uploadImageToCloudinary(imageFile);
        imageUrl = secure_url;
      } catch (uploadError) {
        console.error('Image upload error:', uploadError);
        return NextResponse.json(
          { error: "Image upload failed" },
          { status: 500 }
        );
      }
    }

    // Create project
    const project = await ProjectModel.create({
      title,
      description,
      projectLink,
      image: imageUrl,
      // imagePublicId,
    });
    console.log('Project created:', project);

    return NextResponse.json({ success: true, project }, { status: 201 });

  } catch (error) {
    console.error("Unexpected server error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while creating the project" },
      { status: 500 }
    );
  }
}
