"use client";

import { UserTier } from "@/lib/supabase";
import { getTierDisplayName, getTierColor } from "@/lib/utils";

interface TierStatsProps {
  userTier: UserTier;
  totalEvents: number;
  accessibleEvents: number;
}

export default function TierStats({
  userTier,
  totalEvents,
  accessibleEvents,
}: TierStatsProps) {
  const lockedEvents = totalEvents - accessibleEvents;
  const accessPercentage =
    totalEvents > 0 ? Math.round((accessibleEvents / totalEvents) * 100) : 0;

  const nextTier = getNextTier(userTier);
  const nextTierEvents = getEventsForTier(nextTier);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Your Access Summary
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getTierColor(
            userTier,
          )}`}
        >
          {getTierDisplayName(userTier)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            {accessibleEvents}
          </div>
          <div className="text-sm text-gray-500">Available Events</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-400">{lockedEvents}</div>
          <div className="text-sm text-gray-500">Locked Events</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {accessPercentage}%
          </div>
          <div className="text-sm text-gray-500">Access Level</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Event Access</span>
          <span>
            {accessibleEvents}/{totalEvents}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300`}
            style={{ width: `${Math.min(accessPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Next Tier Info */}
      {nextTier && (
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">
              Upgrade to {getTierDisplayName(nextTier)}
            </span>{" "}
            to unlock{" "}
            <span className="font-medium text-blue-600">
              {nextTierEvents - accessibleEvents} more events
            </span>
          </p>
          <div className="text-xs text-gray-500">
            Total access with {getTierDisplayName(nextTier)}: {nextTierEvents}/
            {totalEvents} events
          </div>
        </div>
      )}
    </div>
  );
}

function getNextTier(currentTier: UserTier): UserTier | null {
  const tiers: UserTier[] = ["free", "silver", "gold", "platinum"];
  const currentIndex = tiers.indexOf(currentTier);
  if (currentIndex < tiers.length - 1) {
    return tiers[currentIndex + 1];
  }
  return null;
}

function getEventsForTier(tier: UserTier | null): number {
  if (!tier) return 0;

  // This is a simplified calculation - in reality you'd query your database
  // For now, assume each tier adds access to more events progressively
  switch (tier) {
    case "free":
      return 2;
    case "silver":
      return 4;
    case "gold":
      return 6;
    case "platinum":
      return 8;
    default:
      return 0;
  }
}
