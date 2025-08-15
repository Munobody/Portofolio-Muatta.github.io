import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkVeil from "@/components/utils/DarkVeil";
import Navbar from "@/components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Muatta Muhariq",
  description: "Portofolio Front-End Developer Muatta Muhariq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-transparent overflow-x-hidden font-sans flex flex-col`}
      >
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <DarkVeil />
        </div>
        {/* Navbar di tengah atas, fixed */}
        <Navbar className="w-full flex justify-center items-center fixed top-0 left-0 z-50 bg-transparent" />
        {/* Main Content, beri padding top agar tidak tertutup navbar */}
        <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-8 pt-28 pb-24">
          {children}
        </main>
        {/* Footer */}
        <footer className="flex gap-6 flex-wrap items-center justify-center mt-16 text-gray-400 text-sm w-full">
          &copy; {new Date().getFullYear()} Muatta Muhariq. All rights reserved.
        </footer>
      </body>
    </html>
  );
}