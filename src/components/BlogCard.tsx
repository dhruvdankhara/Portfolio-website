import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateFormatter";

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

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  return (
    <div className="bento-card flex flex-col h-full hover:border-bento-accent/40 transition-all duration-300">
      {post.image_url ? (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full aspect-video object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-full aspect-video bg-bento-hover rounded-lg mb-4 animate-pulse-slow flex items-center justify-center">
          <span className="text-white/30 text-sm">Blog Image</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="text-xs px-2 py-1 rounded-full bg-bento-accent/20 text-bento-accent">
          {post.category}
        </span>
        <span className="text-xs text-white/50">{post.read_time} read</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
      <p className="text-white/70 text-sm mb-4 flex-grow">{post.excerpt}</p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-white/50">{formatDate(post.date)}</span>
        <Link
          to={`/blogs/${post.slug}`}
          className="text-sm text-bento-accent hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
