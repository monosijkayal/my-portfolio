"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sun } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black w-full border-b border-gray-200 dark:border-[#181818] transition-colors duration-300">
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center h-12 px-4 border-r border-l border-gray-200 dark:border-[#181818] transition-colors duration-300">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 justify-between items-center">
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

          {/* Login Button */}
          {/* <div className="px-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
            <button className="text-sm cursor-pointer">Login</button>
          </div> */}

          {/* Mode Toggle Button */}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none transition-colors duration-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className={`block font-extralight text-sm transition-all duration-300 ${
                pathname === item.path
                  ? "text-black dark:text-white scale-105"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
