import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

import { getBlogBySlug } from "@/lib/blogs";
import { formatDate } from "@/utils/dateFormatter";
import ShareButton from "../../../components/ShareButton";

export const revalidate = 0;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog post not found",
    };
  }

  return {
    title: `${blog.title} | Dhruv Dankhara`,
    description: blog.excerpt,
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-black">
        {/* Back Button - White */}
        <div className="bg-white p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex items-center">
          <Link
            href="/blogs"
            className="pop-btn-secondary inline-flex items-center py-2 px-4 text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={2.5} />
            Back to All Blogs
          </Link>
        </div>

        {/* Category & Meta - Pink */}
        <div className="bg-pop-pink p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <span className="pop-badge bg-pop-teal text-white mb-3 inline-block">
            {blog.category}
          </span>
          <div className="flex items-center gap-2 text-sm font-bold text-black/70">
            <span>{formatDate(blog.date)}</span>
            <span>·</span>
            <span>{blog.read_time} read</span>
          </div>
        </div>

        {/* Author Info - Teal */}
        <div className="bg-pop-teal p-6 flex items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/67946796?v=4"
            alt={blog.author ?? "Dhruv Dankhara"}
            width={48}
            height={48}
            className="border-2 border-black mr-3"
            unoptimized
          />
          <div>
            <p className="text-black font-bold">
              {blog.author ?? "Dhruv Dankhara"}
            </p>
            <p className="text-sm text-black/70 font-medium">
              {blog.author_title ?? "Blog Author"}
            </p>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="bg-pop-yellow p-8 md:p-12 border-b-2 border-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black max-w-4xl">
          {blog.title}
        </h1>
      </section>

      {/* Featured Image */}
      <section className="border-b-2 border-black">
        <div className="w-full aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden">
          {blog.image_url ? (
            <Image
              src={blog.image_url}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
              unoptimized
            />
          ) : (
            <span className="text-black/30 text-sm font-bold">
              Featured Blog Image
            </span>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <div className="prose prose-xl prose-neutral max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-gray-50 p-8">
          <div className="sticky top-24">
            <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags && blog.tags.length > 0 ? (
                blog.tags.map((tag) => (
                  <span key={tag} className="pop-badge bg-pop-pink">
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-xs text-black/40 font-bold">
                  No tags available
                </span>
              )}
            </div>

            <div className="mt-8">
              <ShareButton title={blog.title} excerpt={blog.excerpt} />
            </div>

            <Link
              href="/blogs"
              className="pop-btn-secondary w-full py-3 text-sm inline-flex items-center justify-center gap-2 mt-3"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
