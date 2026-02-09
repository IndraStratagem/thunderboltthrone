import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen, Trophy, Zap } from "lucide-react";
import { getLatestPosts, getFeaturedPosts } from "@/data/posts";
import { PostCard } from "@/components/PostCard";
import { NewsletterForm } from "@/components/NewsletterForm";

export function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(6);
  const heroPost = featuredPosts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-warm-50 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Welcome to my corner of the internet
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-serif leading-tight mb-5">
              Ideas, Opinions &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                Unfiltered Takes
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              I write about Geopolitics, Economics, and Anything that comes to my mind while scrolling on X.com. No Political Agenda Driven fluff — just honest thoughts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
              >
                <BookOpen className="w-4 h-4" />
                Read the Blog
              </Link>
              <Link
                to="/hall-of-fame"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <Trophy className="w-4 h-4" />
                Hall of Fame
              </Link>
            </div>
          </div>

          {/* Featured Post */}
          {heroPost && (
            <div className="animate-fade-in-up">
              <PostCard post={heroPost} variant="featured" />
            </div>
          )}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-brand-600 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Latest</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">
                Recent Articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.slice(0, 6).map((post, i) => (
              <div
                key={post.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / What I Write About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif mb-3">
              What I Write About
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              A curated mix of topics that I genuinely care about and have opinions on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "👩‍💼",
                title: "Civil Administration",
                desc: "Roasting Bureaucrats and Babu culture, Highlighting their inefficiencies and Abuse of power.",
              },
              {
                icon: "⚡",
                title: "Technology",
                desc: "What's new in tech these days in our country.",
              },
              {
                icon: "💵",
                title: "Economics",
                desc: "I try to explain basic and most crucial concepts of Economics through simplified writing.",
              },
              {
                icon: "🔥",
                title: "Hot Takes",
                desc: "The controversial opinions that spark real conversations and debates.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 hover:border-brand-100 hover:bg-brand-50/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterForm variant="hero" source="homepage" />
        </div>
      </section>
    </div>
  );
}
