"use client";

import { useEffect, useState, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import { Event, UserTier } from "@/lib/supabase";
import LoadingSkeleton from "./events/LoadingSkeleton";
import SignInPrompt from "./events/SignInPrompt";
import ErrorState from "./events/ErrorState";
import EventsHeader from "./events/EventsHeader";
import TierUpgradeSection from "./events/TierUpgradeSection";
import EventsGrid from "./events/EventsGrid";

export default function EventsClient() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [userTier, setUserTier] = useState<UserTier>("free");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const currentUserTier =
        (user?.publicMetadata?.tier as UserTier) || "free";
      const response = await fetch(`/api/events?tier=${currentUserTier}`);
      const data = await response.json();

      if (response.ok) {
        setEvents(data.events);
        setUserTier(currentUserTier);
      } else {
        setError(data.error || "Failed to fetch events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const userTierFromClerk =
        (user?.publicMetadata?.tier as UserTier) || "free";
      setUserTier(userTierFromClerk);
      fetchEvents();
    } else if (isLoaded && !isSignedIn) {
      setLoading(false);
      setError("Please sign in to view events");
    }
  }, [isLoaded, isSignedIn, user, fetchEvents]);

  const handleTierUpdate = (newTier: UserTier) => {
    setUserTier(newTier);
  };

  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  if (!isSignedIn) {
    return <SignInPrompt />;
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={fetchEvents} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventsHeader user={user} userTier={userTier} />
        <TierUpgradeSection
          userTier={userTier}
          onTierUpdate={handleTierUpdate}
        />
        <EventsGrid events={events} userTier={userTier} />
      </div>
    </div>
  );
}
