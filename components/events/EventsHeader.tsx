import { UserTier } from "@/lib/supabase";
import { getTierDisplayName } from "@/lib/utils";

interface ClerkUser {
  firstName?: string | null;
  publicMetadata?: {
    tier?: UserTier;
  };
}

interface EventsHeaderProps {
  user: ClerkUser;
  userTier: UserTier;
}

export default function EventsHeader({ user, userTier }: EventsHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Exclusive Events
      </h1>
      <p className="text-gray-600">
        Welcome, {user?.firstName || "User"}! You have access to{" "}
        {getTierDisplayName(userTier)} events and below.
      </p>
    </div>
  );
}
