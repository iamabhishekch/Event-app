"use client";

import { Event } from "@/lib/supabase";
import { getTierColor, getTierDisplayName } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface EventCardProps {
  event: Event;
  offer?: {
    discount: number;
    label: string;
    validUntil?: string;
  };
}

export default function EventCard({ event, offer }: EventCardProps) {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Date TBD";
    }

    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return `Today at ${date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }

    if (diffDays === 1) {
      return `Tomorrow at ${date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }

    if (diffDays > 0 && diffDays <= 7) {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="relative h-full">
      {/* Offer Badge */}
      {offer && (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {offer.discount}% OFF
          </div>
        </div>
      )}

      <div className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="h-full flex flex-col">
          {/* Image Section */}
          <div className="relative h-56 overflow-hidden">
            {!imageError && event.image_url ? (
              <Image
                src={event.image_url}
                alt={`Event image for ${event.title}`}
                fill
                className="object-cover"
                onError={handleImageError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <svg
                      className="w-8 h-8 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    Event Image
                  </p>
                </div>
              </div>
            )}

            {/* Tier Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-white/30 shadow-sm ${getTierColor(
                  event.tier,
                )}`}
                aria-label={`${getTierDisplayName(event.tier)} tier event`}
              >
                {getTierDisplayName(event.tier)}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex-1 space-y-3">
              <h3
                id={`event-title-${event.id}`}
                className="text-xl font-bold text-slate-800 line-clamp-2"
              >
                {event.title}
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Date */}
            <div className="mt-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <time
                    dateTime={event.event_date}
                    className="text-sm font-semibold text-slate-700"
                  >
                    {formatDate(event.event_date)}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
