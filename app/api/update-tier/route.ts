import { NextRequest, NextResponse } from "next/server";
import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { UserTier } from "@/lib/supabase";

// This route needs to be dynamic because it handles authentication and POST requests
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { tier } = (await request.json()) as { tier: UserTier };

    // Validate tier
    const validTiers = ["free", "silver", "gold", "platinum"];
    if (!validTiers.includes(tier)) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    // Update user metadata in Clerk
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      publicMetadata: {
        ...user.publicMetadata,
        tier: tier,
      },
    });

    return NextResponse.json({
      success: true,
      tier,
      message: `Tier updated to ${tier}`,
    });
  } catch (error) {
    console.error("Update tier error:", error);
    return NextResponse.json(
      { error: "Failed to update tier" },
      { status: 500 },
    );
  }
}
