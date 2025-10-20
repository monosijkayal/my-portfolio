"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

export default function GitHubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR mismatch — render only on client
  if (!mounted) {
    return (
      <div className="h-[120px] w-full flex items-center justify-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl overflow-x-auto no-scrollbar">
      <div className="min-w-[600px] sm:min-w-full">
        <GitHubCalendar
          username="monosijkayal"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
}
