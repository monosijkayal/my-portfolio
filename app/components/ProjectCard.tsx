"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui/accordion";
import { Link } from 'lucide-react';

export default function ProjectCard() {
  const projects = [
    {
      image: "/chatapp.png",
      title: "WALL_E",
      duration: "02.2025 - 04.2025",
      description:
        "A MERN-based social media app that includes authentication, real-time chat, and post-sharing features. Built with React, Node.js, MongoDB, and Socket.io for real-time messaging functionality.",
      link: "https://github.com/monosij/social-app",
    },
    {
      image: "/project2.jpg",
      title: "Color Picker Website",
      duration: "11.2024 - 12.2024",
      description:
        "A React + Tailwind CSS app where users can select, copy, and save custom colors. It includes gradient generation and background previews to help users visualize designs.",
      link: "https://github.com/monosij/color-picker",
    },
    {
      image: "/Portfolio.png",
      title: "Portfolio Website",
      duration: "01.2025 - Present",
      description:
        "A personal portfolio built using Next.js, Tailwind CSS, and Framer Motion. It features a responsive layout, smooth animations, and dynamic sections for projects and gallery.",
      link: "https://github.com/monosij/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-3xl absolute text-black flex justify-center items-center border border-gray-200"
    >
      <div className="w-full max-w-3xl">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="border-b hover:bg-gray-200 bg-white overflow-hidden flex flex-col"
            >
              <AccordionItem value={`item-${index}`} className="border-none">
                <div className="flex justify-between items-center w-full border-b">
                  {/* Left side: Image + title */}
                  <div className="flex items-center">
                    <div className="flex border-r h-26 p-6 items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-10 h-10"
                      />
                    </div>

                    <div className=" pr-2 ml-4">
                      <h3 className="text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-md">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Right side: View Code + Accordion Arrow */}
                  <div className="flex items-center gap-10 mr-6 ">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <Link className = "size-4 text-gray-500"/>
                    </a>
                    <AccordionTrigger className="!p-0 hover:no-underline text-gray-700">
                      
                    </AccordionTrigger>
                  </div>
                </div>

                {/* Hidden description (expands on click) */}
                <AccordionContent className="px-6 mt-4 pb-4 text-gray-700">
                  {project.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
