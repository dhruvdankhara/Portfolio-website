"use client";

import Image, { type ImageLoaderProps } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogSummary } from "@/lib/blogs";
import { formatDate } from "@/utils/dateFormatter";

const externalImageLoader = ({ src }: ImageLoaderProps) => src;

const BlogCard = ({ post }: { post: BlogSummary }) => {
  return (
    <div className="bg-white p-6 flex flex-col h-full hover:bg-gray-50 transition-colors border-r-2 border-black">
      {post.image_url ? (
        <div className="w-full aspect-video overflow-hidden mb-4 border-2 border-black">
          <Image
            src={post.image_url}
            alt={post.title}
            width={600}
            height={340}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            loader={externalImageLoader}
            unoptimized
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-pop-pink mb-4 flex items-center justify-center border-2 border-black">
          <span className="text-black/50 text-sm font-bold">Blog Image</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-3">
        <span className="pop-badge bg-pop-teal text-white">
          {post.category}
        </span>
        <span className="text-xs text-black/50 font-bold">
          {post.read_time} read
        </span>
      </div>

      <h3 className="text-xl font-black text-black mb-2">{post.title}</h3>
      <p className="text-black/70 text-sm mb-4 flex-grow font-medium line-clamp-3">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black">
        <span className="text-xs text-black/50 font-bold">
          {formatDate(post.date)}
        </span>
        <Link
          href={`/blogs/${post.slug}`}
          className="font-bold text-sm inline-flex items-center gap-2 hover:text-pop-teal transition-colors"
        >
          Read More
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
