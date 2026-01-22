import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/blogs";

export async function GET() {
  const baseUrl = "https://dhruvdankhara.vercel.app";

  const blogs = await getBlogs();

  const urls = blogs
    .map(
      (blog) => `
    <url>
      <loc>${baseUrl}/blogs/${blog.slug}</loc>
      <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>
  `,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <priority>1.0</priority>
    </url>
    ${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
