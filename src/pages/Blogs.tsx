import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface BlogPostProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  read_time: string;
  slug: string;
  id?: number | string;
  image_url?: string;
}

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: supabaseError } = await supabase
          .from("blogs")
          .select("*");

        if (supabaseError) {
          throw supabaseError;
        }

        if (data) {
          setBlogPosts(data as BlogPostProps[]);
        } else {
          setBlogPosts([]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch blog posts.");
        } else {
          setError("An unknown error occurred while fetching blog posts.");
        }
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <main className="flex-grow pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 animate-pulse">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bento-card flex flex-col h-full">
                <div className="w-full aspect-video bg-bento-hover rounded-lg mb-4"></div>
                <div className="flex items-center justify-between mb-2">
                  <div className="h-4 bg-bento-hover rounded-md w-1/4"></div>
                  <div className="h-4 bg-bento-hover rounded-md w-1/6"></div>
                </div>
                <div className="h-6 bg-bento-hover rounded-md w-3/4 mb-2"></div>
                <div className="h-4 bg-bento-hover rounded-md w-full mb-1"></div>
                <div className="h-4 bg-bento-hover rounded-md w-5/6 mb-4"></div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="h-4 bg-bento-hover rounded-md w-1/4"></div>
                  <div className="h-4 bg-bento-hover rounded-md w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-grow pb-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))
          ) : (
            <p className="col-span-full text-center text-white/70">
              No blog posts found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
