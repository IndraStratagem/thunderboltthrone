export interface HallOfFameTweet {
  id: string;
  rank: number;
  tweetUrl: string;
  category: "brutal-reply" | "savage-post" | "mic-drop" | "ratio-king";
  commentary: string; // Your commentary on why this tweet is hall-of-fame worthy
}

// ============================================================
// HALL OF FAME TEMPLATE
// ============================================================
// To add a new tweet to the Hall of Fame, copy the template below
// and fill in the details. Add it to the `hallOfFameTweets` array.
//
// {
//   id: "unique-id",
//   rank: 1,                                     // Ranking position
//   username: "twitterhandle",                    // Without @
//   displayName: "Display Name",
//   avatarUrl: "https://...",                     // Profile pic URL
//   verified: true,                               // Blue check
//   tweetText: "The actual tweet text...",
//   tweetUrl: "https://twitter.com/user/status/...", // Link to tweet
//   likes: 50000,
//   retweets: 12000,
//   replies: 3000,
//   date: "2025-01-10",
//   category: "brutal-reply",                     // See categories above
//   commentary: "Why this tweet is legendary...",
// },
//
// WORKFLOW INSTRUCTIONS:
// 1. Add the tweet URL to the hallOfFameTweets array
// 2. The EmbeddedTweet component will automatically fetch and display the tweet
// 3. Add your commentary about why this tweet is hall-of-fame worthy
// 4. Set the rank (1-10) for hall of fame positioning
// 5. Select the appropriate category for the tweet
// ============================================================

export const hallOfFameTweets: HallOfFameTweet[] = [
  {
    id: "1",
    rank: 1,
    tweetUrl: "https://x.com/desishitposterr/status/2018244863410786722?s=20",
    category: "brutal-reply",
    commentary: "Water kanglu bhwhahahaha.",
  },
  {
    id: "2",
    rank: 2,
    tweetUrl: "https://x.com/KautilyaOps/status/2019257602119778391?s=20",
    category: "mic-drop",
    commentary: "Marlboro Bhai Cooked Congressi Dalla.",
  },
  {
    id: "3",
    rank: 3,
    tweetUrl: "https://x.com/memenist_/status/2015802047631913012?s=20",
    category: "brutal-reply",
    commentary: "Minister Sahab, casually dropped legendary a reply.",
  },
  {
    id: "4",
    rank: 4,
    tweetUrl: "https://x.com/desishitposterr/status/2017561976709566554?s=20",
    category: "brutal-reply",
    commentary: "Desh ke gaddaro ki...",
  },
  {
    id: "5",
    rank: 5,
    tweetUrl: "https://x.com/be_mewadi/status/2020765316658164195?s=20",
    category: "ratio-king",
    commentary: "Bro... I mean Broooo, Edit 🔥",
  },
  {
    id: "6",
    rank: 6,
    tweetUrl: "https://x.com/1spacerecorder/status/2020752121617121446?s=20",
    category: "brutal-reply",
    commentary: "Aura - Laura 😂😂😂.",
  },
  {
    id: "7",
    rank: 7,
    tweetUrl: "https://x.com/memenist_/status/2015669965563765048?s=20",
    category: "savage-post",
    commentary: "Republic Day 2026 meme",
  },
  {
    id: "8",
    rank: 8,
    tweetUrl: "https://x.com/Tuhaikaunbe/status/2015669288791929009?s=20",
    category: "savage-post",
    commentary: "Peticot me chupan chupai! 😂😂😂",
  },
  {
    id: "9",
    rank: 9,
    tweetUrl: "https://x.com/IndraStratagem/status/2015810895881158740?s=20",
    category: "savage-post",
    commentary: "Ek post toh meri taraf se bhi banta hai. 😂😂😂",
  },


];

export const tweetCategories = [
  { id: "all", label: "All", emoji: "🏆" },
  { id: "brutal-reply", label: "Brutal Replies", emoji: "💀" },
  { id: "savage-post", label: "Savage Posts", emoji: "🔥" },
  { id: "mic-drop", label: "Mic Drops", emoji: "🎤" },
  { id: "ratio-king", label: "Ratio Kings", emoji: "👑" },
];
