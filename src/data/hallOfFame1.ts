export interface HallOfFameTweet {
  id: string;
  rank: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  verified: boolean;
  tweetText: string;
  tweetUrl: string;
  likes: number;
  retweets: number;
  replies: number;
  date: string;
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
    username: "@desishitposterr",
    displayName: "Viktor",
    avatarUrl: "https://x.com/desishitposterr/photo",
    verified: true,
    tweetText: "",
    tweetUrl: "https://x.com/desishitposterr/status/2018244863410786722?s=20",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "brutal-reply",
    commentary: "Water kanglu bhwhahahaha.",
  },
  {
    id: "2",
    rank: 2,
    username: "KautilyaOps",
    displayName: "Marlboro",
    avatarUrl: "",
    verified: false,
    tweetText: "",
    tweetUrl: "https://x.com/KautilyaOps/status/2019257602119778391?s=20",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "mic-drop",
    commentary: "Marlboro Bhai Cooked Congressi Dalla.",
  },
  {
    id: "3",
    rank: 3,
    username: "",
    displayName: "",
    avatarUrl: "",
    verified: true,
    tweetText: "",
    tweetUrl: "https://x.com/memenist_/status/2015802047631913012?s=20",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "brutal-reply",
    commentary: "Minister Sahab, casually dropped legendary a reply.",
  },
  {
    id: "4",
    rank: 4,
    username: "",
    displayName: "",
    avatarUrl: "",
    verified: false,
    tweetText: "",
    tweetUrl: "https://x.com/desishitposterr/status/2017561976709566554?s=20",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "0",
    commentary: "Desh ke gaddaro ki...",
  },
  {
    id: "5",
    rank: 5,
    username: "",
    displayName: "",
    avatarUrl: "",
    verified: true,
    tweetText: "",
    tweetUrl: "https://x.com/be_mewadi/status/2020765316658164195?s=20",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "ratio-king",
    commentary: "Bro... I mean Broooo, Edit 🔥",
  },
  {
    id: "6",
    rank: 6,
    username: "",
    displayName: "",
    avatarUrl: "",
    verified: false,
    tweetText: "",
    tweetUrl: "https://x.com/1spacerecorder/status/2020752121617121446?s=20",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "brutal-reply",
    commentary: "Aura - Laura 😂😂😂.",
  },
  {
    id: "7",
    rank: 7,
    username: "",
    displayName: "",
    avatarUrl: "",
    verified: true,
    tweetText: "",
    tweetUrl: "https://twitter.com/real_talk/status/7",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "savage-post",
    commentary: "The final boss of work culture tweets. This one caused actual corporate meetings to be called.",
  },
  {
    id: "8",
    rank: 8,
    username: "",
    displayName: "",
    avatarUrl: "",
    verified: false,
    tweetText: "",
    tweetUrl: "https://twitter.com/debug_person/status/8",
    likes: 0,
    retweets: 0,
    replies: 0,
    date: "",
    category: "savage-post",
    commentary: "The entire info-product industry unraveled in one tweet. Absolutely devastating.",
  },
];

export const tweetCategories = [
  { id: "all", label: "All", emoji: "🏆" },
  { id: "brutal-reply", label: "Brutal Replies", emoji: "💀" },
  { id: "savage-post", label: "Savage Posts", emoji: "🔥" },
  { id: "mic-drop", label: "Mic Drops", emoji: "🎤" },
  { id: "ratio-king", label: "Ratio Kings", emoji: "👑" },
];
