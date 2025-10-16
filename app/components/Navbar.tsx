"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center h-12 px-4 border-r-1 border-l-1 border-gray-200">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 justify-between items-center">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className={`font-extralight text-sm transition-all duration-300 ${
                pathname === item.path
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {item.name}
            </a>
          ))}

          <div className="px-2 rounded-md bg-gray-200 text-gray-500 hover:text-gray-800 cursor-pointer">
            <button className="text-sm cursor-pointer">Login</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-black focus:outline-none transition-colors duration-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className={`block font-extralight text-sm transition-all duration-300 ${
                pathname === item.path
                  ? "text-black scale-105"
                  : "text-gray-500 hover:text-black"
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
  