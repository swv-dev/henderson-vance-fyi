import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henderson-Vance FYI - Data Centers & Kerr Lake",
  description:
    "Citizen-researched reports on data center proposals in Vance County, NC and the Kerr Lake water reallocation. 69+ cited sources. No agenda - just facts.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Henderson-Vance FYI",
    description:
      "What every citizen should know about data centers, water, and Kerr Lake. Two reports. 100+ sources. No agenda.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henderson-Vance FYI",
    description:
      "What every citizen should know about data centers, water, and Kerr Lake.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="/water/admin"
          className="fixed top-4 right-4 z-50 h-3 w-3 rounded-full bg-card-border/30 hover:bg-gold transition opacity-20 hover:opacity-100"
          aria-label="Admin"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
