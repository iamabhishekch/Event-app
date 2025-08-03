import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load environment variables
config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function setupDatabase() {
  console.log("🚀 Setting up database...");

  try {
    // First, check if the table exists by trying to select from it
    const { data: existingEvents, error: checkError } = await supabase
      .from("events")
      .select("id")
      .limit(1);

    if (!checkError && existingEvents && existingEvents.length > 0) {
      console.log("✅ Events already exist in database");
      return;
    }

    if (checkError && checkError.code === "42P01") {
      console.log(
        "📝 Events table does not exist, please create it manually in Supabase dashboard using the SQL from database/seed.sql",
      );
      console.log(
        "Then run this script again to populate it with sample data.",
      );
      return;
    }

    if (checkError) {
      console.error("❌ Error checking existing events:", checkError);
      return;
    }

    // If we get here, table exists but has no data
    console.log("📊 Table exists, inserting sample events...");

    // Insert sample events
    const sampleEvents = [
      // Free tier events
      {
        title: "Community Meetup: Web Development Basics",
        description:
          "Join us for a beginner-friendly workshop covering HTML, CSS, and JavaScript fundamentals. Perfect for those starting their web development journey.",
        event_date: "2025-08-15T18:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
        tier: "free",
      },
      {
        title: "Open Source Contribution Workshop",
        description:
          "Learn how to contribute to open source projects on GitHub. We'll walk through finding projects, making your first pull request, and building your developer profile.",
        event_date: "2025-08-20T19:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        tier: "free",
      },

      // Silver tier events
      {
        title: "Advanced React Patterns Workshop",
        description:
          "Deep dive into advanced React patterns including custom hooks, context patterns, and performance optimization techniques. Intermediate to advanced level.",
        event_date: "2025-08-25T14:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        tier: "silver",
      },
      {
        title: "Database Design & Performance Tuning",
        description:
          "Master database design principles and learn advanced SQL optimization techniques. Includes hands-on exercises with PostgreSQL.",
        event_date: "2025-09-01T10:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
        tier: "silver",
      },

      // Gold tier events
      {
        title: "Full-Stack Architecture Masterclass",
        description:
          "Exclusive masterclass on designing scalable full-stack applications. Learn about microservices, API design, and deployment strategies from industry experts.",
        event_date: "2025-09-05T13:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        tier: "gold",
      },
      {
        title: "AI/ML Integration in Web Applications",
        description:
          "Discover how to integrate machine learning models into your web applications. Covers TensorFlow.js, API integration, and practical use cases.",
        event_date: "2025-09-10T15:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        tier: "gold",
      },

      // Platinum tier events
      {
        title: "Private Mentoring Session with Tech Leaders",
        description:
          "One-on-one mentoring sessions with CTOs and senior engineers from top tech companies. Personalized career guidance and technical advice.",
        event_date: "2025-09-15T11:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        tier: "platinum",
      },
      {
        title: "Exclusive Product Launch Preview",
        description:
          "Be the first to see and test our upcoming platform features. VIP access to beta testing and direct feedback sessions with the product team.",
        event_date: "2025-09-20T16:00:00Z",
        image_url:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
        tier: "platinum",
      },
    ];

    const { data, error } = await supabase
      .from("events")
      .insert(sampleEvents)
      .select();

    if (error) {
      console.error("❌ Error inserting events:", error);
      return;
    }

    console.log(`✅ Successfully inserted ${data.length} events`);
    console.log("🎉 Database setup complete!");
  } catch (error) {
    console.error("❌ Setup failed:", error);
  }
}

// Run the setup
setupDatabase();
