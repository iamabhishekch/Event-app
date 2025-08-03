import { Event, UserTier } from "@/lib/supabase";

export function getEventsByTier(events: Event[], userTier: UserTier): Event[] {
  const tierHierarchy: Record<UserTier, UserTier[]> = {
    free: ["free"],
    silver: ["free", "silver"],
    gold: ["free", "silver", "gold"],
    platinum: ["free", "silver", "gold", "platinum"],
  };

  return events.filter((event) => tierHierarchy[userTier].includes(event.tier));
}

export function getEventStats(events: Event[], userTier: UserTier) {
  const totalEvents = events.length;
  const accessibleEvents = getEventsByTier(events, userTier).length;
  const lockedEvents = totalEvents - accessibleEvents;

  return {
    total: totalEvents,
    accessible: accessibleEvents,
    locked: lockedEvents,
    accessPercentage:
      totalEvents > 0 ? Math.round((accessibleEvents / totalEvents) * 100) : 0,
  };
}

export function getUpcomingEvents(events: Event[], limit = 3): Event[] {
  const now = new Date();
  return events
    .filter((event) => new Date(event.event_date) > now)
    .sort(
      (a, b) =>
        new Date(a.event_date).getTime() - new Date(b.event_date).getTime(),
    )
    .slice(0, limit);
}

export function getEventsByDateRange(
  events: Event[],
  startDate?: Date,
  endDate?: Date,
): Event[] {
  return events.filter((event) => {
    const eventDate = new Date(event.event_date);
    if (startDate && eventDate < startDate) return false;
    if (endDate && eventDate > endDate) return false;
    return true;
  });
}

export function searchEvents(events: Event[], query: string): Event[] {
  const lowercaseQuery = query.toLowerCase();
  return events.filter(
    (event) =>
      event.title.toLowerCase().includes(lowercaseQuery) ||
      event.description.toLowerCase().includes(lowercaseQuery),
  );
}
