import { Link } from "react-router-dom";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@/data/posts";

interface PostCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  const formattedDate = format(new Date(post.publishedAt), "MMM d, yyyy");

  if (variant === "featured") {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-56 md:h-full overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-flame-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-md">
                {post.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime} min read
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-serif leading-snug group-hover:text-brand-700 transition-colors">
              {post.title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <div className="text-xs">
                  <span className="text-gray-700 font-medium">{post.author}</span>
                  <span className="text-gray-400 mx-1.5">·</span>
                  <span className="text-gray-400">{formattedDate}</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group flex gap-4 items-start p-3 -mx-3 rounded-xl hover:bg-white transition-colors"
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-20 h-20 rounded-lg object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {formattedDate}
            <span>·</span>
            <Clock className="w-3 h-3" />
            {post.readTime} min
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-md">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5 text-xs text-gray-400">
          <Calendar className="w-3 h-3" />
          {formattedDate}
          <span>·</span>
          <Clock className="w-3 h-3" />
          {post.readTime} min read
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 font-serif leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-gray-600 font-medium">{post.author}</span>
          </div>
          <span className="text-xs text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
