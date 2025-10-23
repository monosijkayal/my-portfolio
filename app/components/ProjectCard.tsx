"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui/accordion";
import { Link, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectCard() {
  const projects = [
    {
      image: "/wall-e.png",
      title: "WALL_E",
      duration: "02.2025 - 04.2025",
      description:
        "A MERN-based social media app that includes authentication, real-time chat, and post-sharing features. Built with React, Node.js, MongoDB, and Socket.io for real-time messaging functionality.",
      link: "https://wall-e-0.web.app/",
    },
    {
      image: "/couplespoint.png",
      title: "Couplespoint",
      duration: "11.2024 - present",
      description:
        "A React + Tailwind CSS app where users can select, copy, and save custom colors. It includes gradient generation and background previews to help users visualize designs.",
      link: "https://github.com/monosijkayal/couplespoint",
    },
    {
      image: "/Portfolio.png",
      title: "Portfolio Website",
      duration: "01.2025 - Present",
      description:
        "A personal portfolio built using Next.js, Tailwind CSS, and Framer Motion. It features a responsive layout, smooth animations, and dynamic sections for projects and gallery.",
      link: "https://github.com/monosij/portfolio",
    },
    {
      image: "/onlinebank.png",
      title: "Online Bank - All-in-One Finance Hub",
      duration: "05.2025 - 06.2025",
      description:
        "A full-featured e-commerce web app built with Next.js, Stripe integration for payments, and Tailwind CSS for UI. Includes product filtering and admin dashboard.",
      link: "online-bank-opal.vercel.app/",
    },
    {
      image: "/chatapp.png",
      title: "ChatApp",
      duration: "09.2024 - 10.2024",
      description:
        "A minimal productivity app using React and Firebase for real-time data sync, featuring drag-and-drop task organization and dark mode support.",
      link: "chatapp-k9xg.onrender.com/login",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="w-full max-w-3xl relative text-black  dark:text-white flex flex-col items-center border-r border-l border-gray-200 dark:border-[#181818]"
    >
      <div className="w-full max-w-3xl">
        <div className="flex flex-col">
          {visibleProjects.map((project, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="hover:bg-[#F8F8F8] bg-white dark:bg-black overflow-hidden flex flex-col"
            >
              <AccordionItem value={`item-${index}`} className="border-none">
                <div className="flex justify-between items-center w-full border-b dark:border-[#181818]">
                  {/* Left side: Image + title */}
                  <div className="flex items-center">
                    <div className="flex border-r h-26 p-6 items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-10 h-10"
                      />
                    </div>

                    <div className="pr-2 ml-4">
                      <h3 className="text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-md">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Right side: View Code + Accordion Arrow */}
                  <div className="flex items-center gap-10 mr-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link className="size-4 text-gray-500" />
                    </a>
                    <AccordionTrigger className="!p-0 hover:no-underline text-gray-700" />
                  </div>
                </div>

                {/* Hidden description (expands on click) */}
                <AccordionContent className="px-6 mt-4 pb-4 text-gray-700 font-mono">
                  {project.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > 3 && (
  <button
    onClick={() => setShowAll(!showAll)}
    className="mt-2 mb-2 px-3 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-[#181818] transition-colors flex items-center gap-2"
  >
    {showAll ? (
      <>
        Show Less <ChevronUp className="w-4 h-4" />
      </>
    ) : (
      <>
        Show More <ChevronDown className="w-4 h-4" />
      </>
    )}
  </button>
)}
    </section>
  );
}
