// SparkTiers — Points & Titles Configuration
// Edit freely. Tier order: HT1 (best) > LT1 > HT2 > LT2 > HT3 > LT3 > HT4 > LT4 > HT5 > LT5 > HT6 > LT6 (worst)

const TIER_PTS = {
  HT1: 1000,
  LT1: 900,
  HT2: 800,
  LT2: 700,
  HT3: 600,
  LT3: 500,
  HT4: 400,
  LT4: 300,
  HT5: 150,
  LT5: 100,
  HT6: 50,
  LT6: 20,
};

// Special condition: Combat Grandmaster requires HT1 in at least 4 gamemodes
const GRANDMASTER_REQUIRED_HT1 = 4;

// Rank titles — order matters, first match wins.
// For Combat Grandmaster the HT1 x4 condition is checked automatically.
const RANK_TITLES = [
  { tiers: ['HT1'],                   title: 'Combat GrandMaster', color: '#ff3333', ht1Required: 4 },
  { tiers: ['LT1'],                   title: 'Combat Master',      color: '#ff6600' },
  { tiers: ['HT2'],                   title: 'Combat Ace',         color: '#f5a623' },
  { tiers: ['LT2'],                   title: 'Combat Expert',      color: '#e8c840' },
  { tiers: ['HT3'],                   title: 'Combat Veteran',     color: '#a3e635' },
  { tiers: ['LT3'],                   title: 'Combat Skilled',     color: '#6dbd45' },
  { tiers: ['HT4'],                   title: 'Combat Trainee',     color: '#22d3ee' },
  { tiers: ['LT4'],                   title: 'Combat Rookie',      color: '#38bdf8' },
  { tiers: ['HT5','LT5','HT6','LT6'],title: 'Combat Noob',        color: '#94a3b8' },
];
