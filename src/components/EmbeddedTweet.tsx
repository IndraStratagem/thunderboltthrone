import { useState, useEffect } from "react";
import { ExternalLink, Loader2 } from "lucide-react";

interface EmbeddedTweetProps {
  tweetUrl: string;
  rank: number;
  commentary: string;
}

export function EmbeddedTweet({ tweetUrl, rank, commentary }: EmbeddedTweetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tweetId, setTweetId] = useState<string>("");

  // Extract tweet ID from URL
  useEffect(() => {
    try {
      const url = new URL(tweetUrl);
      const pathParts = url.pathname.split("/");
      const id = pathParts[pathParts.length - 1];
      setTweetId(id);
    } catch (err) {
      setError("Invalid tweet URL");
    }
  }, [tweetUrl]);

  // Load Twitter script and embed tweet
  useEffect(() => {
    if (!tweetId) return;

    // Check if Twitter script is already loaded
    if ((window as any).twttr && (window as any).twttr.widgets) {
      loadTweet();
      return;
    }

    // Load Twitter script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => {
      (window as any).twttr.widgets.load();
      loadTweet();
    };
    script.onerror = () => {
      setError("Failed to load Twitter widget");
      setIsLoading(false);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [tweetId]);

  const loadTweet = () => {
    if (!(window as any).twttr) {
      setError("Twitter widgets not available");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Create container for tweet
    const containerId = `tweet-${tweetId}`;
    
    // Wait a bit for the DOM to update
    setTimeout(() => {
      const container = document.getElementById(containerId);
      if (container) {
        (window as any).twttr.widgets
          .createTweet(tweetId, container, {
            theme: "light",
            align: "center",
            dnt: true,
          })
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => {
            setError("Failed to embed tweet");
            setIsLoading(false);
          });
      }
    }, 100);
  };

  // Get rank badge style
  const getRankBadge = () => {
    if (rank === 1) {
      return {
        bg: "bg-gradient-to-br from-yellow-400 to-amber-500",
        text: "text-white",
        shadow: "shadow-amber-200",
      };
    } else if (rank === 2) {
      return {
        bg: "bg-gradient-to-br from-gray-300 to-gray-400",
        text: "text-white",
        shadow: "shadow-gray-200",
      };
    } else if (rank === 3) {
      return {
        bg: "bg-gradient-to-br from-amber-600 to-amber-700",
        text: "text-white",
        shadow: "shadow-amber-200",
      };
    }
    return null;
  };

  const rankBadge = getRankBadge();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative">
      {/* Rank Badge */}
      <div className="absolute -top-3 -left-2 z-10">
        {rankBadge ? (
          <div
            className={`w-10 h-10 ${rankBadge.bg} rounded-xl flex items-center justify-center shadow-lg ${rankBadge.shadow} rotate-[-6deg] transition-transform`}
          >
            <span className="text-white font-bold text-sm">#{rank}</span>
          </div>
        ) : (
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-sm font-bold text-gray-500">#{rank}</span>
          </div>
        )}
      </div>

      {/* Twitter Link */}
      <div className="absolute top-3 right-3 z-10">
        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
          title="View on Twitter"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Tweet Container */}
      <div className="p-5 pt-8">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-10">
            <Loader2 className="w-6 h-6 text-gray-400 animate-spin mb-2" />
            <p className="text-sm text-gray-500">Loading tweet...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-6">
            <div className="text-red-500 mb-2">⚠️</div>
            <p className="text-sm text-gray-500">{error}</p>
            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline mt-2 inline-block"
            >
              View on Twitter
            </a>
          </div>
        )}

        <div id={`tweet-${tweetId}`} className="flex justify-center"></div>

        {/* Commentary */}
        {commentary && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic leading-relaxed">
              💬 <span className="font-medium text-gray-600">My take:</span> {commentary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}