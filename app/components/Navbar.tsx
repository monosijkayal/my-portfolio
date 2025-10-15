"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "CLI Mode", path: "/cli-mode" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white w-full border-b border-gray-200 ">
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center h-12 px-4 border-r-1 border-l-1 border-gray-200">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 justify-between items-center ">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`font-extralight text-sm transition-all duration-300 ${
                  isActive
                    ? "text-black "
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className ="px-2 rounded-md bg-gray-200 text-gray-500 hover:text-gray-800 cursor-pointer">
            <button  className = "text-sm cursor-pointer">Login</button>
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
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block font-extralight text-sm transition-all duration-300 ${
                  isActive
                    ? "text-black scale-105"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
