import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: {
    default: "EventTier - Premium Event Management Platform",
    template: "%s | EventTier",
  },
  description:
    "A sophisticated tier-based event management platform with premium access controls. Experience events like never before with intelligent tier-based access, real-time updates, and stunning modern interface.",
  keywords: [
    "events",
    "management",
    "tier-based",
    "premium",
    "access control",
    "real-time",
  ],
  authors: [{ name: "EventTier Team" }],
  creator: "EventTier",
  publisher: "EventTier",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "EventTier - Premium Event Management Platform",
    description:
      "Experience events like never before with intelligent tier-based access, real-time updates, and stunning modern interface.",
    siteName: "EventTier",
  },
  twitter: {
    card: "summary_large_image",
    title: "EventTier - Premium Event Management Platform",
    description:
      "Experience events like never before with intelligent tier-based access, real-time updates, and stunning modern interface.",
    creator: "@eventtier",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50`}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
