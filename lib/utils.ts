import { UserTier } from "./supabase";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTierColor(tier: UserTier): string {
  const colors = {
    free: "bg-gray-100 text-gray-800 border-gray-300",
    silver: "bg-gray-200 text-gray-900 border-gray-400",
    gold: "bg-yellow-100 text-yellow-800 border-yellow-300",
    platinum: "bg-purple-100 text-purple-800 border-purple-300",
  };
  return colors[tier];
}

export function getTierDisplayName(tier: UserTier): string {
  const names = {
    free: "Free",
    silver: "Silver",
    gold: "Gold",
    platinum: "Platinum",
  };
  return names[tier];
}
