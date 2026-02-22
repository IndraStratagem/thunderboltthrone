import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { blogPosts, categories } from "@/data/posts";
import { PostCard } from "@/components/PostCard";
import { NewsletterForm } from "@/components/NewsletterForm";

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Filter by category
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Sort by date
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return posts;
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-3">
            Blog
          </h1>
          <p className="text-gray-500 max-w-xl">
            All my articles in one place. Use the search and filters to find what you're looking for.
          </p>

          {/* Search */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-5 flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400 mr-1" />
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {filteredPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">No articles found</h3>
                <p className="text-sm text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <NewsletterForm source="blog-page" />

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap((p) => p.tags))).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Blog Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Articles</span>
                  <span className="text-sm font-bold text-gray-900">{blogPosts.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Categories</span>
                  <span className="text-sm font-bold text-gray-900">{categories.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Read Time</span>
                  <span className="text-sm font-bold text-gray-900">
                    {blogPosts.reduce((sum, p) => sum + p.readTime, 0)} min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
