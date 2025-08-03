import { NextRequest, NextResponse } from "next/server";
import { supabase, tierHierarchy, UserTier } from "@/lib/supabase";

// This route needs to be dynamic because it handles query parameters
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get tier from query parameter or default to free
    const userTier = (request.nextUrl.searchParams.get("tier") as UserTier) || "free";

    // Get allowed tiers for this user
    const allowedTiers = tierHierarchy[userTier];

    // Fetch events from Supabase
    const { data: events, error } = await supabase
      .from("events")
      .select("*")
      .in("tier", allowedTiers)
      .order("event_date", { ascending: true });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch events" },
        { status: 500 },
      );
    }

    return NextResponse.json({ events, userTier });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
