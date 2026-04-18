import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vance County Facts - Data Centers & Kerr Lake",
  description:
    "Citizen-researched reports on data center proposals in Vance County, NC and the Kerr Lake water reallocation. 69+ cited sources. No agenda - just facts.",
  openGraph: {
    title: "Vance County Facts",
    description:
      "What every citizen should know about data centers, water, and Kerr Lake. Two reports. 100+ sources. No agenda.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vance County Facts",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
