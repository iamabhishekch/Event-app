import { UserTier } from "@/lib/supabase";

// Utility function to get available tiers based on user's tier
export function getAvailableTiers(userTier: UserTier): UserTier[] {
  const allTiers: UserTier[] = ["free", "silver", "gold", "platinum"];
  const tierIndex = allTiers.indexOf(userTier);
  return allTiers.slice(0, tierIndex + 1);
}
