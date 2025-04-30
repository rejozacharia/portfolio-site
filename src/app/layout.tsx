import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update metadata
export const metadata: Metadata = {
  title: "Rejo Z Mathew | AI & Data Strategy Leader",
  description: "Executive portfolio showcasing expertise in AI/ML, Data Science, Analytics, and Engineering within Financial Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header /> {/* Add Header */}
        <div className="flex-grow"> {/* Main content area */}
          {children}
        </div>
        <Footer /> {/* Add Footer */}
      </body>
    </html>
  );
}
