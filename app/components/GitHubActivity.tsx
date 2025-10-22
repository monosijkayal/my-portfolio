"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

export default function GitHubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[120px] w-full flex items-center justify-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl overflow-x-auto no-scrollbar">
      <div className="flex items-center justify-center min-w-[600px] sm:min-w-full">
        <GitHubCalendar
          username="monosijkayal"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={11}
          blockMargin={2}
          fontSize={12}
          showWeekdayLabels
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              title: `${activity.count} contribution${
                activity.count !== 1 ? "s" : ""
              } on ${activity.date}`,
            })
          }
        />
      </div>
    </div>
  );
}
