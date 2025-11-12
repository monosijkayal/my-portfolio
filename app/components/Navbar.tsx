"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
  ];

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black w-full border-b border-gray-200 dark:border-[#181818] transition-colors duration-300">
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center h-12 px-4 border-r border-l border-gray-200 dark:border-[#181818] transition-colors duration-300">
        {/* Same navbar for all screens */}
        <div className="flex space-x-8 justify-between items-center">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className={`font-extralight text-sm transition-all duration-300 ${
                pathname === item.path
                  ? "text-black dark:text-white"
                  : "text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Mode Toggle Button */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
