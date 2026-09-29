// SparkTiers — Points Configuration
// Edit these values to change how players are ranked.
// Higher = better. These determine the leaderboard order.

const TIER_PTS = {
  HT1: 1000,
  HT2: 800,
  HT3: 600,
  HT4: 400,
  HT5: 60,
  HT6: 30,
  LT1: 900,
  LT2: 750,
  LT3: 550,
  LT4: 370,
  LT5: 40,
  LT6: 20,
};

// Rank titles shown under a player's name.
// "tiers" — which tiers trigger this title.
// "title" — the text shown on the site.
// "color" — the color of the title text (hex).
// Order matters — first match wins.
const RANK_TITLES = [
  { tiers: ['HT1'],             title: 'Combat GrandMaster',      color: '#ff3333' },
  { tiers: ['HT2'],             title: 'Combat Master', color: '#ff6600' },
  { tiers: ['HT3'],             title: 'Combat Ace',      color: '#f5a623' },
  { tiers: ['HT4', 'HT5', 'HT6'], title: 'Combat Expert',      color: '#a3e635' },
  { tiers: ['LT1', 'LT2'],     title: 'Combat Master',      color: '#818cf8' },
  { tiers: ['LT3'],     title: 'Combat Ace',     color: '#94a3b8' },
  { tiers: ['LT4'],      title: 'Combat Trainee', color: '#895129' },
  { tiers: ['LT5', 'LT6'],     title: 'Combat Noob',      color: '#64748b' },
];
 
