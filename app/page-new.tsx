import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">EventTier</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover exclusive events tailored to your membership tier. From free
          community events to platinum VIP experiences.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Membership Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="w-4 h-4 bg-gray-400 rounded-full mx-auto mb-2"></div>
              <h3 className="font-medium text-gray-900">Free</h3>
              <p className="text-sm text-gray-600">Community events</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="w-4 h-4 bg-gray-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-medium text-gray-900">Silver</h3>
              <p className="text-sm text-gray-600">Premium access</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-medium text-gray-900">Gold</h3>
              <p className="text-sm text-gray-600">Exclusive events</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-medium text-gray-900">Platinum</h3>
              <p className="text-sm text-gray-600">VIP experiences</p>
            </div>
          </div>
        </div>

        <SignedIn>
          <Link
            href="/events"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View My Events
          </Link>
        </SignedIn>

        <SignedOut>
          <p className="text-gray-600 mb-4">
            Sign in to access your personalized event experience
          </p>
        </SignedOut>
      </div>
    </div>
  );
}
