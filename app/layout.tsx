import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
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
  title: "Monosij Kayal | Portfolio",
  description: "My personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        <div className="flex justify-center min-h-screen">
          {/* Common width + borders */}
          <div className="w-full max-w-full border-x border-gray-100">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
  
}
