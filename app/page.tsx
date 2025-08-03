import type { Metadata } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to EventTier - Premium event management platform with intelligent tier-based access control. Experience events like never before.",
  openGraph: {
    title: "EventTier - Premium Event Management Platform",
    description:
      "Experience events like never before with intelligent tier-based access, real-time updates, and stunning modern interface.",
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {" "}
      {/* Background Effects */}{" "}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>{" "}
      {/* Floating Elements */}{" "}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>{" "}
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>{" "}
      <div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>{" "}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          {/* Hero Section */}{" "}
          <div className="mb-16">
            {" "}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm font-medium text-gray-700 mb-8">
              {" "}
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
              Now Live - Premium Event Platform{" "}
            </div>{" "}
            <h1 className="heading-xl mb-8 text-gray-900">
              {" "}
              Welcome to{" "}
              <span className="text-gradient animate-glow">EventTier</span>{" "}
            </h1>{" "}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {" "}
              Discover exclusive events tailored to your membership tier. From
              free community workshops to{" "}
              <span className="font-semibold text-purple-600">
                platinum VIP experiences
              </span>
              .{" "}
            </p>{" "}
            {/* CTA Section */}{" "}
            <SignedOut>
              {" "}
              <div className="space-y-4">
                {" "}
                <Link
                  href="/events"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  {" "}
                  Explore Events{" "}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />{" "}
                  </svg>{" "}
                </Link>{" "}
                <p className="text-sm text-gray-500">
                  {" "}
                  No credit card required • Start with free events{" "}
                </p>{" "}
              </div>{" "}
            </SignedOut>{" "}
            <SignedIn>
              {" "}
              <Link
                href="/events"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                {" "}
                Explore Events{" "}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />{" "}
                </svg>{" "}
              </Link>{" "}
            </SignedIn>{" "}
          </div>{" "}
          {/* Feature Highlights */}{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {" "}
            <div className="text-center p-6">
              {" "}
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                {" "}
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tier-Based Access
              </h3>{" "}
              <p className="text-gray-600 text-sm">
                Exclusive events based on your membership level
              </p>{" "}
            </div>{" "}
            <div className="text-center p-6">
              {" "}
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                {" "}
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-Time Updates
              </h3>{" "}
              <p className="text-gray-600 text-sm">
                Instant access to new events and tier upgrades
              </p>{" "}
            </div>{" "}
            <div className="text-center p-6">
              {" "}
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                {" "}
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Premium Experience
              </h3>{" "}
              <p className="text-gray-600 text-sm">
                Curated events with modern interface design
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
