import { UserTier } from "@/lib/supabase";
import TierUpgrade from "@/components/TierUpgrade";

interface TierUpgradeSectionProps {
  userTier: UserTier;
  onTierUpdate: (tier: UserTier) => void;
}

export default function TierUpgradeSection({
  userTier,
  onTierUpdate,
}: TierUpgradeSectionProps) {
  return (
    <div className="mb-8">
      <TierUpgrade currentTier={userTier} onTierUpdate={onTierUpdate} />
    </div>
  );
}
