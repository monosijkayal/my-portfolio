"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubActivity() {
  return (
    <div className="flex flex-col ">


      <div className="w-full max-w-3xl overflow-x-auto">
        <GitHubCalendar
          username="monosijkayal"
          colorScheme="light"  // or "dark"
          blockSize={10}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
}
