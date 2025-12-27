import { NextResponse } from "next/server";

import { getBlogs } from "@/lib/blogs";

export const revalidate = 0;

export async function GET() {
  try {
    const blogs = await getBlogs();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
