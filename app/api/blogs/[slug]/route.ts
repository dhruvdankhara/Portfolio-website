import { NextResponse } from "next/server";

import { getBlogBySlug } from "@/lib/blogs";

type Params = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 0;

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error(`Error fetching blog ${slug}`, error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
