import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mubeen Ahmed | Digital Profile",
  description: "Digital profile of Mubeen Ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {children}
      </body>
    </html>
  );
}
