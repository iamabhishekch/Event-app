import { currentUser } from "@clerk/nextjs/server";
import { UserTier } from "./supabase";

export async function getUserTier(): Promise<UserTier> {
  const user = await currentUser();

  if (!user) {
    return "free"; // Default tier for non-authenticated users
  }

  // Get tier from user metadata, default to 'free' if not set
  const tier = user.publicMetadata?.tier as UserTier;
  return tier || "free";
}
