import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "../utils/dateFormatter";

const BlogPost = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      setLoading(true);
      setError(null);

      try {
        const { data, error: supabaseError } = await supabase
          .from("blogs")
          .select("*")
          .eq("slug", slug)
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        if (data) {
          setBlogData(data);
        } else {
          setError("Blog post not found.");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch blog post.");
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex-grow pb-16">
        <div className="container mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-6 bg-bento-hover rounded-md w-48 mb-6"></div>

            <div className="bento-card mb-8 p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="h-5 bg-bento-hover rounded-full w-20"></div>
                <div className="h-5 bg-bento-hover rounded-full w-24"></div>
                <div className="h-5 bg-bento-hover rounded-full w-16"></div>
              </div>
              <div className="h-10 bg-bento-hover rounded-md w-3/4 mb-4"></div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-bento-hover mr-3"></div>
                <div>
                  <div className="h-5 bg-bento-hover rounded-md w-32 mb-1"></div>
                  <div className="h-4 bg-bento-hover rounded-md w-24"></div>
                </div>
              </div>
              <div className="w-full aspect-video bg-bento-hover rounded-lg"></div>
            </div>

            <div className="bento-card p-6">
              <div className="space-y-3">
                <div className="h-4 bg-bento-hover rounded-md w-full"></div>
                <div className="h-4 bg-bento-hover rounded-md w-full"></div>
                <div className="h-4 bg-bento-hover rounded-md w-5/6"></div>
                <div className="h-4 bg-bento-hover rounded-md w-3/4"></div>
                <br />
                <div className="h-4 bg-bento-hover rounded-md w-full"></div>
                <div className="h-4 bg-bento-hover rounded-md w-4/6"></div>
              </div>
              <div className="border-t border-white/10 mt-8 pt-6 flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <div className="h-6 bg-bento-hover rounded-full w-16"></div>
                  <div className="h-6 bg-bento-hover rounded-full w-20"></div>
                  <div className="h-6 bg-bento-hover rounded-full w-24"></div>
                </div>
                <div className="h-8 bg-bento-hover rounded-md w-32 mt-4 sm:mt-0"></div>
              </div>
            </div>
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
          <Link
            to="/blogs"
            className="text-bento-accent hover:underline mt-4 inline-block"
          >
            <ArrowLeft className="mr-2 h-4 w-4 inline" />
            Back to All Blogs
          </Link>
        </div>
      </main>
    );
  }

  if (!blogData) {
    return (
      <main className="flex-grow pb-16">
        <div className="container mx-auto px-6 text-center">
          <p>Blog post not found.</p>
          <Link
            to="/blogs"
            className="text-bento-accent hover:underline mt-4 inline-block"
          >
            <ArrowLeft className="mr-2 h-4 w-4 inline" />
            Back to All Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow  pb-16">
      <div className="container mx-auto px-6">
        <Link
          to="/blogs"
          className="inline-flex items-center text-bento-accent hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Blogs
        </Link>

        <div className="bento-card mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 rounded-full bg-bento-accent/20 text-bento-accent">
              {blogData.category}
            </span>
            <span className="text-xs text-white/50">
              {formatDate(blogData.date)}
            </span>
            <span className="text-xs text-white/50">·</span>
            <span className="text-xs text-white/50">
              {blogData.read_time} read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {blogData.title}
          </h1>

          <div className="flex items-center mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/67946796?v=4?s=400"
              alt={blogData.author}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-white font-medium">{blogData.author}</p>
              <p className="text-sm text-white/50">
                {blogData.author_title || "Blog Author"}
              </p>
            </div>
          </div>

          <div className="w-full aspect-video bg-bento-hover rounded-lg animate-pulse-slow flex items-center justify-center">
            {blogData.image_url ? (
              <img
                src={blogData.image_url}
                alt={blogData.title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-white/30 text-sm">Featured Blog Image</span>
            )}
          </div>
        </div>

        <div className="bento-card prose prose-xl prose-invert max-w-none mb-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogData.content}
          </ReactMarkdown>

          <div className="border-t border-white/10 mt-8 pt-6 flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-white/50">Tags:</span>
              {blogData.tags &&
                blogData.tags?.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-bento-hover text-white/70"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <button className=" rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground  h-8  gap-1.5 px-3    mt-4 sm:mt-0">
              Share Article
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
