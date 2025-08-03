import { Event, UserTier } from "@/lib/supabase";
import { getTierDisplayName } from "@/lib/utils";
import EventCard from "@/components/EventCard";

interface EventsGridProps {
  events: Event[];
  userTier: UserTier;
}

export default function EventsGrid({ events, userTier }: EventsGridProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          No Events Available
        </h2>
        <p className="text-gray-600">
          There are no events available for your current tier.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Showing {events.length} event{events.length !== 1 ? "s" : ""} for{" "}
          {getTierDisplayName(userTier)} tier
        </p>
      </div>
    </>
  );
}
