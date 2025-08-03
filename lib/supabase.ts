import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: "free" | "silver" | "gold" | "platinum";
}

export type UserTier = "free" | "silver" | "gold" | "platinum";

// Tier hierarchy for filtering
export const tierHierarchy: Record<UserTier, UserTier[]> = {
  free: ["free"],
  silver: ["free", "silver"],
  gold: ["free", "silver", "gold"],
  platinum: ["free", "silver", "gold", "platinum"],
};
