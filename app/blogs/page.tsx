export const revalidate = 0;

import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/blogs";
import { BookOpen, Rss, TrendingUp } from "lucide-react";

const BlogsPage = async () => {
  const blogs = await getBlogs();

  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-black">
        {/* Title Section - Teal */}
        <div className="bg-pop-teal p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
              <BookOpen className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <span className="text-black font-bold">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black">
            Latest Posts
          </h1>
          <p className="text-black/80 font-medium mt-4">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        {/* Stats Section - Pink */}
        <div className="bg-pop-pink p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5" strokeWidth={2.5} />
              <span className="font-bold text-sm">TOTAL POSTS</span>
            </div>
            <p className="text-6xl font-black">{blogs.length}</p>
            <p className="text-black/70 font-medium mt-2">Articles published</p>
          </div>
        </div>

        {/* Subscribe CTA - Yellow */}
        <div className="bg-pop-yellow p-8 md:p-12 flex items-center justify-center">
          <div className="text-center">
            <Rss className="h-10 w-10 mx-auto mb-4" strokeWidth={2.5} />
            <p className="font-black text-xl mb-2">Stay Updated</p>
            <p className="text-black/70 font-medium text-sm">
              New posts every week
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, index) => (
              <div key={post._id}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white">
            <p className="text-black/70 font-bold text-lg">
              No blog posts found.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogsPage;
