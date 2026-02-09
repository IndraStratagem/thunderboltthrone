import { Heart, Repeat2, MessageCircle, ExternalLink, Trophy, BadgeCheck } from "lucide-react";
import { format } from "date-fns";
import type { HallOfFameTweet } from "@/data/hallOfFame";

interface TweetCardProps {
  tweet: HallOfFameTweet;
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

const categoryColors: Record<string, string> = {
  "brutal-reply": "bg-red-50 text-red-700 border-red-100",
  "savage-post": "bg-orange-50 text-orange-700 border-orange-100",
  "mic-drop": "bg-purple-50 text-purple-700 border-purple-100",
  "ratio-king": "bg-yellow-50 text-yellow-700 border-yellow-100",
};

const categoryEmojis: Record<string, string> = {
  "brutal-reply": "💀",
  "savage-post": "🔥",
  "mic-drop": "🎤",
  "ratio-king": "👑",
};

const rankBadges: Record<number, { bg: string; text: string; shadow: string }> = {
  1: { bg: "bg-gradient-to-br from-yellow-400 to-amber-500", text: "text-white", shadow: "shadow-amber-200" },
  2: { bg: "bg-gradient-to-br from-gray-300 to-gray-400", text: "text-white", shadow: "shadow-gray-200" },
  3: { bg: "bg-gradient-to-br from-amber-600 to-amber-700", text: "text-white", shadow: "shadow-amber-200" },
};

export function TweetCard({ tweet }: TweetCardProps) {
  const badge = rankBadges[tweet.rank];

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 relative">
      {/* Rank Badge */}
      <div className="absolute -top-3 -left-2">
        {badge ? (
          <div className={`w-10 h-10 ${badge.bg} rounded-xl flex items-center justify-center shadow-lg ${badge.shadow} rotate-[-6deg] group-hover:rotate-0 transition-transform`}>
            <Trophy className="w-4 h-4 text-white" />
          </div>
        ) : (
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-sm font-bold text-gray-500">#{tweet.rank}</span>
          </div>
        )}
      </div>

      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${categoryColors[tweet.category]}`}>
          {categoryEmojis[tweet.category]} {tweet.category.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
        </span>
        <a
          href={tweet.tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-gray-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
          title="View original tweet"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={tweet.avatarUrl}
          alt={tweet.displayName}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-gray-900">{tweet.displayName}</span>
            {tweet.verified && <BadgeCheck className="w-4 h-4 text-blue-500" />}
          </div>
          <span className="text-xs text-gray-400">@{tweet.username}</span>
        </div>
      </div>

      {/* Tweet Text */}
      <p className="text-gray-800 text-sm leading-relaxed mb-4 whitespace-pre-line">
        {tweet.tweetText}
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 mb-4">
        {format(new Date(tweet.date), "h:mm a · MMM d, yyyy")}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-6 py-3 border-t border-gray-50">
        <div className="flex items-center gap-1.5 text-gray-400">
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-medium">{formatNumber(tweet.replies)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <Repeat2 className="w-4 h-4" />
          <span className="text-xs font-medium">{formatNumber(tweet.retweets)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-rose-400">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-xs font-medium">{formatNumber(tweet.likes)}</span>
        </div>
      </div>

      {/* Commentary */}
      <div className="mt-3 pt-3 border-t border-gray-50">
        <p className="text-xs text-gray-500 italic leading-relaxed">
          💬 <span className="font-medium text-gray-600">My take:</span> {tweet.commentary}
        </p>
      </div>
    </div>
  );
}
