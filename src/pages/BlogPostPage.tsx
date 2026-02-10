import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Twitter, Copy, CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { client, postQuery, postsQuery } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { PostCard } from "@/components/PostCard";
import { NewsletterForm } from "@/components/NewsletterForm";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch post from Sanity
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        // Fetch the current post
        const postData = await client.fetch(postQuery, { slug });
        setPost(postData);

        // Fetch all posts for related posts
        const allPosts = await client.fetch(postsQuery);
        const related = allPosts
          .filter((p: any) => p.slug.current !== slug)
          .slice(0, 3);
        setRelatedPosts(related);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy");

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Back link */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {formattedDate}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime || 5} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-serif leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Author & Share */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              {post.mainImage && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                />
              )}
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.author || "Indra"}</p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-2.5 rounded-lg bg-gray-50 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                title="Copy link"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                className="p-2.5 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.mainImage && (
          <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        )}

        {/* Content - Using Portable Text */}
        <div className="prose prose-lg max-w-none mb-10">
          {post.body && <PortableText value={post.body} />}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-10 pb-10 border-b border-gray-200">
            <Tag className="w-4 h-4 text-gray-400" />
            {post.tags.map((tag: string) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mb-12">
          <NewsletterForm variant="hero" source={`post-${post.slug.current}`} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">
              You might also enjoy
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <PostCard key={p._id} post={p} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}