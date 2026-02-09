import { useState } from "react";
import { Mail, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";
import { subscribeToNewsletter } from "@/data/newsletter";

interface NewsletterFormProps {
  source?: string;
  variant?: "default" | "hero" | "minimal";
}

export function NewsletterForm({ source = "homepage", variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    const result = await subscribeToNewsletter(email.trim(), source);
    setStatus(result.success ? "success" : "error");
    setMessage(result.message);

    if (result.success) {
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === "loading"}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors disabled:opacity-60 flex items-center gap-2"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
        {status === "success" && (
          <p className="text-sm text-green-600 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" /> {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> {message}
          </p>
        )}
      </form>
    );
  }

  if (variant === "hero") {
    return (
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5 animate-float">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-2 font-serif">Stay in the loop</h3>
          <p className="text-brand-100 mb-6 max-w-md">
            Get my latest articles, hot takes, and career advice delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={status === "loading"}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 disabled:opacity-60 backdrop-blur-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-white text-brand-700 rounded-xl font-semibold hover:bg-brand-50 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-200 bg-green-500/20 px-4 py-2.5 rounded-lg">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span className="text-sm">{message}</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-200 bg-red-500/20 px-4 py-2.5 rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-sm">{message}</span>
              </div>
            )}
          </form>

          <p className="text-xs text-brand-200 mt-4">
            Join 2,000+ readers. Delivered weekly on Sundays.
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-brand-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Newsletter</h3>
          <p className="text-sm text-gray-500">Get notified when I publish something new.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading"}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 shrink-0" /> {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 shrink-0" /> {message}
          </p>
        )}
      </form>
    </div>
  );
}
