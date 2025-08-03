-- Create events table
CREATE TABLE IF NOT EXISTS events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    image_url TEXT,
    tier TEXT NOT NULL CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW();
RETURN NEW;
END;
$$ language 'plpgsql';
CREATE TRIGGER update_events_updated_at BEFORE
UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
-- Insert sample events
INSERT INTO events (title, description, event_date, image_url, tier)
VALUES -- Free tier events
    (
        'Community Meetup: Web Development Basics',
        'Join us for a beginner-friendly workshop covering HTML, CSS, and JavaScript fundamentals. Perfect for those starting their web development journey.',
        '2025-08-15 18:00:00+00',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
        'free'
    ),
    (
        'Open Source Contribution Workshop',
        'Learn how to contribute to open source projects on GitHub. We''ll walk through finding projects, making your first pull request, and building your developer profile.',
        '2025-08-20 19:00:00+00',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
        'free'
    ),
    -- Silver tier events
    (
        'Advanced React Patterns Workshop',
        'Deep dive into advanced React patterns including custom hooks, context patterns, and performance optimization techniques. Intermediate to advanced level.',
        '2025-08-25 14:00:00+00',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
        'silver'
    ),
    (
        'Database Design & Performance Tuning',
        'Master database design principles and learn advanced SQL optimization techniques. Includes hands-on exercises with PostgreSQL.',
        '2025-09-01 10:00:00+00',
        'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
        'silver'
    ),
    -- Gold tier events
    (
        'Full-Stack Architecture Masterclass',
        'Exclusive masterclass on designing scalable full-stack applications. Learn about microservices, API design, and deployment strategies from industry experts.',
        '2025-09-05 13:00:00+00',
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
        'gold'
    ),
    (
        'AI/ML Integration in Web Applications',
        'Discover how to integrate machine learning models into your web applications. Covers TensorFlow.js, API integration, and practical use cases.',
        '2025-09-10 15:00:00+00',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
        'gold'
    ),
    -- Platinum tier events
    (
        'Private Mentoring Session with Tech Leaders',
        'One-on-one mentoring sessions with CTOs and senior engineers from top tech companies. Personalized career guidance and technical advice.',
        '2025-09-15 11:00:00+00',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        'platinum'
    ),
    (
        'Exclusive Product Launch Preview',
        'Be the first to see and test our upcoming platform features. VIP access to beta testing and direct feedback sessions with the product team.',
        '2025-09-20 16:00:00+00',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
        'platinum'
    );
-- Enable Row Level Security (RLS)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
-- Create RLS policy (placeholder - would need proper user identification in production)
-- For now, allow all authenticated users to read all events
-- In production, you would implement tier-based filtering here
CREATE POLICY "Allow authenticated users to read events" ON events FOR
SELECT TO authenticated USING (true);