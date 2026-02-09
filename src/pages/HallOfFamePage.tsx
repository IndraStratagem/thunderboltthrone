import { useState, useMemo } from "react";
import { Trophy, Flame, Crown } from "lucide-react";
import { hallOfFameTweets, tweetCategories } from "@/data/hallOfFame";
import { EmbeddedTweet } from "@/components/EmbeddedTweet";

export function HallOfFamePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTweets = useMemo(() => {
    let tweets = [...hallOfFameTweets];
    if (activeCategory !== "all") {
      tweets = tweets.filter((t) => t.category === activeCategory);
    }
    return tweets.sort((a, b) => a.rank - b.rank);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              Hall of Fame
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4 leading-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Hall of Fame
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              A curated collection of the most brutal replies, savage posts, and legendary mic drops on Twitter. These people chose violence and we're here for it.
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-yellow-400">
                <Crown className="w-4 h-4" />
                <span>{hallOfFameTweets.length} Legends</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Flame className="w-4 h-4" />
                <span>Ranked by savagery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {tweetCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tweets Grid */}
        {filteredTweets.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTweets.map((tweet, i) => (
              <div
                key={tweet.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.01}s`, opacity: 0 }}
              >
                <EmbeddedTweet 
                  tweetUrl={tweet.tweetUrl} 
                  rank={tweet.rank} 
                  commentary={tweet.commentary} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">No tweets in this category</h3>
            <p className="text-sm text-gray-500">Try selecting a different filter.</p>
          </div>
        )}

        {/* How to add */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 font-serif mb-3">
            🏅 How the Hall of Fame Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>💀 <strong>Brutal Replies</strong> — Devastating responses that ended careers</li>
                <li>🔥 <strong>Savage Posts</strong> — Original posts dripping with fire</li>
                <li>🎤 <strong>Mic Drops</strong> — The final word that nobody could argue with</li>
                <li>👑 <strong>Ratio Kings</strong> — When the reply got more likes than the original</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ranking Criteria</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Impact and virality of the tweet</li>
                <li>• Creativity and wit of the response</li>
                <li>• How perfectly it dismantled the original point</li>
                <li>• The sheer audacity and bravery of the poster</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}