"use client";

import { useState } from "react";
import { UserTier } from "@/lib/supabase";
import { getTierDisplayName } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface TierUpgradeProps {
  currentTier: UserTier;
  onTierUpdate: (newTier: UserTier) => void;
}

export default function TierUpgrade({
  currentTier,
  onTierUpdate,
}: TierUpgradeProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("");

  const tiers: UserTier[] = ["free", "silver", "gold", "platinum"];

  const handleUpgrade = async (newTier: UserTier) => {
    if (newTier === currentTier) return;

    setIsUpdating(true);
    setMessage("");

    try {
      const response = await fetch("/api/update-tier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tier: newTier }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        onTierUpdate(newTier);
        // Refresh the page to get updated events
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setMessage(data.error || "Failed to update tier");
      }
    } catch (error) {
      console.error("Error updating tier:", error);
      setMessage("Failed to update tier");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Tier Management</h3>
      <p className="text-sm text-gray-600 mb-4">
        Current tier:{" "}
        <span className="font-medium">{getTierDisplayName(currentTier)}</span>
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tiers.map((tier) => (
          <Button
            key={tier}
            onClick={() => handleUpgrade(tier)}
            disabled={isUpdating || tier === currentTier}
            variant={tier === currentTier ? "secondary" : "primary"}
            size="sm"
            isLoading={isUpdating}
          >
            {tier === currentTier
              ? `Current: ${getTierDisplayName(tier)}`
              : `Upgrade to ${getTierDisplayName(tier)}`}
          </Button>
        ))}
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.includes("Failed") ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
