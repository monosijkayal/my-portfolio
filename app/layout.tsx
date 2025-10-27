import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import LenisProvider from "./components/LenisProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* ✅ LenisProvider goes INSIDE body */}
          <LenisProvider>
            <div className="flex justify-center min-h-screen">
              <div className="w-full max-w-full">
                <Navbar />
                <main>{children}</main>
              </div>
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
