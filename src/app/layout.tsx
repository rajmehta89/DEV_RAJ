import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://rajmehta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Raj Mehta | Full-Stack & AI Engineer",
    template: "%s | Raj Mehta",
  },
  description:
    "Full-Stack & AI Engineer with 1.5+ years experience delivering production-grade applications. Expert in React, Next.js, Node.js, Java, Go, and LLM/voice AI integration.",
  keywords: [
    "Full-Stack Engineer",
    "AI Engineer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Java",
    "Go",
    "LLM Integration",
    "Freelance Developer",
    "Raj Mehta",
  ],
  authors: [{ name: "Raj Mehta", url: BASE_URL }],
  creator: "Raj Mehta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Raj Mehta Portfolio",
    title: "Raj Mehta | Full-Stack & AI Engineer",
    description:
      "Production-grade Full-Stack & AI Engineer. React, Next.js, Node.js, Java, Go, LLM integration. Available for full-time and freelance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Mehta | Full-Stack & AI Engineer",
    description:
      "Production-grade Full-Stack & AI Engineer. React, Next.js, Node.js, Java, Go, LLM integration.",
    creator: "@rajmehta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
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
      <body className="min-h-full text-[var(--text)]">
        <Navbar name="Raj Mehta" />
        {children}
      </body>
    </html>
  );
}
