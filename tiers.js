// tiers.js — SparkTiers configuration
// Handles tier ordering, point values, colors, and rank titles.
// Loaded by index.html before data.js and the main script.

// ── Ordered from best to worst ──
const TIER_ORDER = [
  'HT1','HT2','HT3','HT4','HT5','HT6',
  'LT1','LT2','LT3','LT4','LT5','LT6'
];

// ── Point value for each tier (used to calculate ranking score) ──
const TIER_PTS = {
  HT1: 100,
  HT2:  80,
  HT3:  60,
  HT4:  45,
  HT5:  35,
  HT6:  25,
  LT1:  87,
  LT2:  70,
  LT3:   53,
  LT4:   42,
  LT5:   30,
  LT6:   13,
};

// ── Hex color for each tier (used in badges and highlights) ──
const TIER_COLOR = {
  HT1: '#ff3333',
  HT2: '#ff6600',
  HT3: '#f5a623',
  HT4: '#a3e635',
  HT5: '#22d3ee',
  HT6: '#38bdf8',
  LT1: '#818cf8',
  LT2: '#a78bfa',
  LT3: '#94a3b8',
  LT4: '#64748b',
  LT5: '#475569',
  LT6: '#334155',
};

// ── Score thresholds → displayed rank title ──
// Listed highest-first; first match wins.
const RANK_TITLES = [
  { min: 400, title: 'Combat Legend',      color: '#ff3333' },
  { min: 300, title: 'Combat Grandmaster', color: '#ff6600' },
  { min: 200, title: 'Combat Master',      color: '#f5a623' },
  { min: 100, title: 'Combat Ace',         color: '#a3e635' },
  { min:   0, title: 'Combat Rookie',      color: '#94a3b8' },
];

// ── All ranked gamemodes (order matches the column layout on site) ──
const GM_ALL = ['vanilla','uhc','pot','nethop','smp','sword','axe','mace'];

// ── Human-readable labels for each gamemode ──
const GM_LABELS = {
  overall: 'Overall',
  vanilla: 'Vanilla',
  uhc:     'UHC',
  pot:     'Pot',
  nethop:  'NethOP',
  smp:     'SMP',
  sword:   'Sword',
  axe:     'Axe',
  mace:    'Mace',
};
