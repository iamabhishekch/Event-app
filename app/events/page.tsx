import type { Metadata } from "next";
import EventsClient from "@/components/EventsClient";

export const metadata: Metadata = {
  title: "Exclusive Events",
  description:
    "Discover premium events based on your tier access. From community workshops to VIP experiences, find events that match your membership level.",
  keywords: [
    "events",
    "exclusive",
    "premium",
    "tier-based",
    "workshops",
    "VIP",
  ],
  openGraph: {
    title: "Exclusive Events | EventTier",
    description:
      "Discover premium events based on your tier access. From community workshops to VIP experiences.",
  },
};

export default function EventsPage() {
  return <EventsClient />;
}
