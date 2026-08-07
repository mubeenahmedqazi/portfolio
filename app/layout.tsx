import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Loader from "@/components/layout/Loader";
import CursorSpotlight from "@/components/layout/CursorSpotlight";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import BackToTop from "@/components/layout/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "Mubeen Ahmed | Full-Stack Developer & AI/ML Engineer",
  description:
    "Digital profile of Mubeen Ahmed — Full-Stack Web Developer and AI/ML Engineer working on computer vision, RAG, and agentic AI systems.",
  keywords: [
    "Mubeen Ahmed",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Agentic AI",
    "RAG",
    "Computer Vision",
    "Next.js Developer",
    "Software Engineer",
    "Lahore",
  ],
  authors: [{ name: "Mubeen Ahmed" }],
  openGraph: {
    title: "Mubeen Ahmed | Full-Stack Developer & AI/ML Engineer",
    description: "Full-Stack Web Developer and AI/ML Engineer working on computer vision, RAG, and agentic AI systems.",
    type: "website",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubeen Ahmed | Full-Stack Developer & AI/ML Engineer",
    description: "Full-Stack Web Developer and AI/ML Engineer working on computer vision, RAG, and agentic AI systems.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/vercel.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Loader />
        <CursorSpotlight />
        <ScrollProgressBar />
        <SmoothScrollProvider>
          {children}
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
