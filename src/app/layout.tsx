import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer

// Setup Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font load
  weight: ["400", "700"], // Load regular and bold weights
});

// Update metadata
export const metadata: Metadata = {
  title: "Rejo Z Mathew | AI & Data Strategy Leader",
  description:
    "Executive portfolio showcasing expertise in AI/ML, Data Science, Analytics, and Engineering within Financial Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`} // Apply Inter font class
      >
        <Header /> {/* Add Header */}
        <div className="flex-grow">
          {" "}
          {/* Main content area */}
          {children}
        </div>
        <Footer /> {/* Add Footer */}
      </body>
    </html>
  );
}
