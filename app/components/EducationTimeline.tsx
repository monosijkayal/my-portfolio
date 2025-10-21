"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui/accordion";
import { GraduationCap, Trophy, Calendar } from "lucide-react";

export default function EducationTimeline() {
  // ---------------- HACKATHONS ----------------
  const hackathons = [
    {
      event: "Innofusion 2.0",
      period: "August 2025",
      details: [
        "Participated in the Innofusion 2.0 Hackathon representing JIS University.",
        "Worked on a AI-based problem statement related to report creation of LAW.",
        "Developed a MERN-based web platform to generate suitable report of every right and aciton.",
        "Gained hands-on experience in teamwork, problem solving, and agile development.",
      ],
      skills: [
        "MERN Stack",
        "Problem Solving",
        "API Integration",
        "Team Collaboration",
        "UI/UX Design",
      ],
    },
    {
      event: "Hexafalls Hackathon' 25",
      period: "June 2025",
      details: [
        "Secured 2nd position among 50+ teams in JIS University’s internal hackathon.",
        "Developed a real-time chat app using React, Firebase, and Tailwind CSS.",
        "Focused on authentication workflows and smooth user experience.",
      ],
      skills: ["React", "Firebase", "Tailwind CSS", "Authentication", "Git"],
    },
  ];

  // ---------------- EVENTS ----------------
  const events = [
    {
      title: "TechFest 2024 — JIS University",
      period: "March 2024",
      details: [
        "Participated in the annual TechFest organized by JIS University.",
        "Presented a project on AI-powered handwriting recognition.",
        "Interacted with judges from the industry and gained presentation experience.",
      ],
      skills: ["AI", "Python", "Project Presentation", "Public Speaking"],
    },
    {
      title: "Developer Student Club Workshop — Google DSC",
      period: "December 2023",
      details: [
        "Attended a 2-day workshop on Modern Web Development organized by Google DSC JIS University.",
        "Learned about React hooks, Firebase authentication, and API integration.",
      ],
      skills: ["React", "Firebase", "JavaScript", "API Handling"],
    },
    {
      title: "Blockchain Awareness Seminar — Kolkata",
      period: "July 2023",
      details: [
        "Attended a seminar introducing the fundamentals of blockchain and Web3.",
        "Gained knowledge on decentralized networks, mining, and smart contracts.",
      ],
      skills: ["Blockchain", "Web3 Basics", "Smart Contracts"],
    },
  ];

  // ---------------- EDUCATION ----------------
  const education = [
    {
      school:
        "JIS University (B.Tech in Computer Science & Enginnering) — Kolkata, West Bengal, India",
      period: "2022 – 2026",
      details: [
        "Currently studying for a Bachelor's degree in Computer Science.",
        "Current CGPA: 8.5/10.",
        "Language Proficiency: Bengali, Hindi, English.",
      ],
      skills: [
        "C++",
        "TypeScript",
        "React",
        "Node.js",
        "Java",
        "Python",
        "Data Structures",
        "Algorithms",
        "Advanced Databases",
        "Systems Design",
        "Software Engineering",
        "Distributed Systems",
        "Self-learning",
        "Teamwork",
        "Presentation",
      ],
    },
    {
      school:
        "Sonarpur Vidyapith (Secondary & Higher Secondary education) — Sonarpur, West Bengal, India",
      period: "2015 - 2022",
      details: [
        "Completed Higher Secondary education in Pure Science stream, focusing on Physics, Chemistry, Mathematics, and Computer Science.",
        "Marks obtained: 76% in Higher Secondary and 82% in Secondary examinations.",
        "Currently pursuing a Bachelor's degree in Computer Science.",
        "Proficient in Bengali, Hindi, and English.",
      ],
      skills: ["C", "HTML & CSS", "JavaScript", "Python"],
    },
    {
      school:
        "Baikunthapur Vidyapith (Primary education) — Sonarpur, West Bengal, India",
      period: "2008 - 2014",
    },
  ];

  // ---------------- COMPONENT RETURN ----------------
  return (
    <section className="w-full max-w-3xl pt-3  border-r border-l">
      {/* ---------------- HACKATHONS ---------------- */}
      <div className="w-full max-w-3xl border-b">
      <h2 className="text-xl font-semibold mb-4   flex items-center gap-9 pl-5"><span><div className = "w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500"></div></span>Hackathons</h2>
        <div className="relative ml-6 mb-10 pr-3">
          {/* Gradient vertical border line */}
          <div className="pointer-events-none absolute  top-0 bottom-0 w-[1px] rounded-full bg-gradient-to-b from-gray-300 via-gray-200 to-white dark:from-[#1e1e1e] dark:via-[#1e1e1e] dark:to-black" />
          {hackathons.map((item, i) => (
            <div key={i} className="relative pl-10 mb-8">
              {/* Icon */}
              <div className="absolute -left-[14px] flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
                <Trophy className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value={`hackathon-${i}`} className="border-none">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{item.event}</h3>
                      <p className="text-sm text-gray-500">{item.period}</p>
                    </div>
                    <AccordionTrigger className="!no-underline hover:text-blue-600">
                      <span className="sr-only">Expand</span>
                    </AccordionTrigger>
                  </div>

                  <AccordionContent>
                    {item.details && (
                      <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                        {item.details.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    )}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-200 dark:bg-black border rounded-full px-2 py-1"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- EVENTS ---------------- */}
      <div className="w-full max-w-3xl border-b mb-3 pt-3">
        <h2 className="text-xl font-semibold mb-4   flex items-center gap-9 pl-5"><span><div className = "w-2 h-2 rounded-full  bg-gray-300 dark:bg-gray-500"></div></span>Events</h2>
        <div className="relative ml-6 mb-10 pr-3">
          {/* Gradient vertical border line */}
          <div className="pointer-events-none absolute  top-0 bottom-0 w-[1px] rounded-full bg-gradient-to-b from-gray-300 via-gray-300 to-white dark:from-[#1e1e1e] dark:via-[#1e1e1e] dark:to-black" />

          {/* Event list */}
          {events.map((item, i) => (
            <div key={i} className="relative pl-10 mb-8">
              {/* Icon */}
              <div className="absolute -left-[14px] flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
                <Calendar className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value={`event-${i}`} className="border-none">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.period}</p>
                    </div>
                    <AccordionTrigger className="!no-underline hover:text-blue-600">
                      <span className="sr-only">Expand</span>
                    </AccordionTrigger>
                  </div>

                  <AccordionContent>
                    {item.details && (
                      <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                        {item.details.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    )}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-200 dark:bg-black border rounded-full px-2 py-1"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- EDUCATION ---------------- */}
      <h2 className="text-xl font-semibold mb-4   flex items-center gap-9 pl-5"><span><div className = "w-2 h-2 rounded-full  bg-gray-300 dark:bg-gray-500"></div></span>Education</h2>
      <div className="relative ml-6 mb-10 pr-3">
          {/* Gradient vertical border line */}
          <div className="pointer-events-none absolute  top-0 bottom-0 w-[1px] rounded-full bg-gradient-to-b from-gray-300 via-gray-300 to-white dark:from-[#1e1e1e] dark:via-[#1e1e1e] dark:to-black" />
        {education.map((item, i) => (
          <div key={i} className="relative pl-10 mb-8">
            {/* Icon */}
            <div className="absolute -left-[14px] flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
              <GraduationCap className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value={`education-${i}`} className="border-none">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{item.school}</h3>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                  <AccordionTrigger className="!no-underline hover:text-blue-600">
                    <span className="sr-only">Expand</span>
                  </AccordionTrigger>
                </div>

                <AccordionContent>
                  {item.details && (
                    <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                      {item.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  )}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-200 dark:bg-black border rounded-full px-2 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
