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
    tweetUrl: "https://x.com/raybankachasma/status/2026952913759932495?s=20,
    category: "brutal-reply",
    commentary: "Gupta ji Banged paijaans with finesse",
  },
  {
    id: "2",
    rank: 2,
    tweetUrl: "https://x.com/Neetivaan/status/2025947517373071549?s=20",
    category: "brutal-reply",
    commentary: "Ghatak bhai ke Ghatak replies!",
  },
  {
    id: "3",
    rank: 3,
    tweetUrl: "https://x.com/Neetivaan/status/2025986986432246114?s=20",
    category: "brutal-reply",
    commentary: "Bruv, lowkey slow banged BJP, absolutely based",
  },
    {
    id: "4",
    rank: 4,
    tweetUrl: "https://x.com/Desh_bhakati/status/2025908338996002901?s=20",
    category: "brutal-reply",
    commentary: "Dhruv rathee's career summarised in a line",
  },
  {
    id: "5",
    rank: 5,
    tweetUrl: "https://x.com/mujifren/status/2024390693620494810?s=20",
    category: "brutal-reply",
    commentary: "Lord Muji Dakait Drops a Banger.",
  },
  {
    id: "6",
    rank: 6,
    tweetUrl: "https://x.com/BesuraTaansane/status/2024167575706620275?s=20",
    category: "savage-post",
    commentary: "Congi Chhapris cooked.",
  },
  {
    id: "7",
    rank: 7,
    tweetUrl: "https://x.com/VarunKrRana/status/2024189785288691830?s=20",
    category: "savage-post",
    commentary: "Bro took shots at both commie tapsee pannu & Galgotiya.",
  },
  {
    id: "8",
    rank: 8,
    tweetUrl: "https://x.com/anon_71306268/status/2024114564603040092?s=20",
    category: "brutal-reply",
    commentary: "Uffffff.",
  },
  {
    id: "9",
    rank: 9,
    tweetUrl: "https://x.com/TrulyMonica/status/2020862998949052652?s=20",
    category: "brutal-reply",
    commentary: "kanglu Reality Nutshell.",
  },
  {
    id: "10",
    rank: 10,
    tweetUrl: "https://x.com/KautilyaOps/status/2019257602119778391?s=20",
    category: "brutal-reply",
    commentary: "Bro invoked Gaandhar naresh to ratio a nalla congressi.",
  },
  {
    id: "11",
    rank: 11,
    tweetUrl: "https://x.com/GenZKaoboy/status/2018361694607864318?s=20",
    category: "mic-drop",
    commentary: "Special Mention to CC1 for creating this pookie post.",
  },
  {
    id: "12",
    rank: 12,
    tweetUrl: "https://x.com/desishitposterr/status/2018244863410786722?s=20",
    category: "savage-post",
    commentary: "Water kanglu hahahaha.",
  },
  {
    id: "13",
    rank: 13,
    tweetUrl: "https://x.com/memenist_/status/2015802047631913012?s=20",
    category: "brutal-reply",
    commentary: "Pakistani Terror sympathiser burned.",
  },
];

export const tweetCategories = [
  { id: "all", label: "All", emoji: "🏆" },
  { id: "brutal-reply", label: "Brutal Replies", emoji: "💀" },
  { id: "savage-post", label: "Savage Posts", emoji: "🔥" },
  { id: "mic-drop", label: "Mic Drops", emoji: "🎤" },
  { id: "ratio-king", label: "Ratio Kings", emoji: "👑" },
];
