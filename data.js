// data.js — SparkTiers player data — written by the bot, read by the website
//
// Fields per player:
//   name      – display name shown on the site
//   skinName  – Minecraft username whose skin is fetched (often same as name,
//               but can differ if the player has a separate skin account)
//   region    – player's region tag (e.g. "AS")
//   tiers     – object mapping gamemode → tier string (e.g. { mace: "LT4" })
//   rankedBy  – username of the staff member who ranked this player
//   rankedAt  – ISO date the rank was assigned

const SPARK_DATA = {
  "whynotking": {
    name:     "WhyNotKing",
    skinName: "WhyNotKing",
    region:   "AS",
    tiers: {
      nethop: "LT4",
      sword:  "LT4"
    },
    rankedBy: "1_truthoflife_1",
    rankedAt: "2026-09-27"
  },
  "lostgalaxy67": {
    name:     "Lostgalaxy67",
    skinName: "Lostgalaxy6",   // ← custom skin account
    region:   "AS",
    tiers: {
      mace: "HT4"
    },
    rankedBy: "lostgalax_y",
    rankedAt: "2026-09-27"
  },
  "not_ry": {
    name:     "Not_RY",
    skinName: "Not_RY",
    region:   "AS",
    tiers: {
      nethop: "LT3",
      sword:  "LT4"
    },
    rankedBy: "1_truthoflife_1",
    rankedAt: "2026-09-27"
  },
  "atkillerninja": {
    name:     "atkillerninja",
    skinName: "atkillerninja",
    region:   "AS",
    tiers: {
      nethop: "LT4"
    },
    rankedBy: "not_ry1",
    rankedAt: "2026-09-27"
  },
  "itzdraco": {
    name:     "ItzDraco",
    skinName: "ItzDraco",
    region:   "AS",
    tiers: {
      mace: "LT4"
    },
    rankedBy: "lostgalax_y",
    rankedAt: "2026-09-27"
  }
};
