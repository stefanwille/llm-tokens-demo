import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LLM Tokens Demo | Stefan Wille, Berlin",
  description: "A demonstration that makes LLM tokens more tangible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-64 border-r p-4 md:block hidden">
            {/* Sidebar content here */}
            <a href="https://www.stefanwille.com">Stefan Wille</a>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4">
            {/* Navbar */}
            {/* Page content */}
            <div className="p-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
