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
        "Verified Advocate Profiles & Search",
        "Real-time Video Consultation (ZeoCloud)",
        "Live Chat via Socket.IO",
        "Gemini AI–powered Document Drafting & Translation",
        "Role-based Access (User / Advocate / Admin)",
        "Legal Journal Publishing for Advocates",
        "Developed a MERN-based web platform to generate suitable report of every right and aciton.",
        "Gained hands-on experience in teamwork, problem solving, and agile development.",
      ],
      skills: [
        "Next.js (App Router)",
        "React & Tailwind CSS",
        "Prisma + PostgreSQL",
        "NextAuth.js",
        "Socket.IO",
        "Gemini API (Google)",
        "ZeoCloud (Video infra)",
        "Cloudinary (Image storage)",
        "TypeScript",
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
        "Developed a real-time chat app using NextJs and Tailwind CSS.",
        "Focused on authentication workflows and smooth user experience.",
        "Converts agricultural assets (like land, crops, equipment, or produce) into digital tokens.",
        "Each token represents a verified, traceable share of the real-world asset.",
        "Enables international and domestic investors to directly invest in Indian agriculture through secure blockchain transactions.",
        "Reduces middlemen and ensures transparency.",
        "All investments, profit-sharing, and payouts are handled automatically using smart contracts.",
      ],
      skills: [
        "Solidity",
        "React",
        "Node.js",
        "IPFS",
        "Chainlink",
        "Base (Ethereum L2)",
        "Hardhat",
        "OpenZeppelin",
        "Web3.js",
      ],
    },
  ];

  // ---------------- EVENTS ----------------
  const events = [
    {
      title: "Core Connect Campus Edition - TIU, Kolkata, WB",
      period: "May, 2025",
      details: [
        "Hands-on Move language workshops to learn smart contract development on the Aptos blockchain.",
        "dApp building sessions guided by mentors from Rise In and Aptos.",
        "Web3 networking opportunities with developers, blockchain enthusiasts, and industry experts.",
        "Gained insights into decentralized application architecture and Aptos ecosystem tools.",
      ],
      skills: [
        "AI",
        "Web3",
        "Blockchain",
        "Project Presentation",
        "Public Speaking",
        "Networking",
      ],
    },
    {
      title: "Move Build Station Kolkata - Ideapod, Kolkata, WB",
      period: "May, 2025",
      details: [
        "Attended Move language workshops, hands-on dApp building sessions, and Web3 networking events.",
        "Pre-hackathon meetup by Rise In x Aptos — Move workshops, dApp building, and Web3 networking.",
      ],
      skills: ["Web3", "Blockchain", "TypeScript", "API Handling"],
    },
    {
      title: "DroidFest Kolkata 2025 - TIU, Kolkata, WB",
      period: "April, 2025",
      details: [
        "An interactive tech event bringing together Android developers and enthusiasts for expert talks, practical workshops, and community collaboration to explore the latest in Android innovation.",
        "DroidFest — A meetup uniting Android and tech enthusiasts through talks, workshops, and community engagement.",
      ],
      skills: [
        "Blockchain",
        "Web3 Basics",
        "Smart Contracts",
        "Python",
        "Cotlin",
        "Android Development",
      ],
    },
    {
      title: "Build On Aptos Bootcamp - RCCIIT, Kolkata, WB",
      period: "April, 2025",
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
      marksheet:
        "https://drive.google.com/file/d/your-btech-marksheet-link/view",
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
      marksheet:
      "https://drive.google.com/file/d/1SHyMa5vdXGwFiUK1hdveIwrJfI-8cGiM/preview",
      details: [
        "Completed Higher Secondary education in Pure Science stream, focusing on Physics, Chemistry, Mathematics, and Computer Science.",
        "Marks obtained: 82% in Higher Secondary and 76% in Secondary examinations.",
        "Currently pursuing a Bachelor's degree in Computer Science.",
        "Proficient in Bengali, Hindi, and English.",
      ],
      skills: ["C", "HTML & CSS", "JavaScript", "Python"],
    },
    {
      school:
        "Baikunthapur Vidyapith (Primary education) — Sonarpur, West Bengal, India",
      period: "2008 - 2014",
      marksheet:
      "https://drive.google.com/file/d/your-btech-marksheet-link/view",
    },
  ];

  // ---------------- COMPONENT RETURN ----------------
  return (
    <section className="w-full max-w-3xl pt-3  border-r border-l text-[13px]">
      {/* ---------------- HACKATHONS ---------------- */}
      <div className="w-full max-w-3xl border-b">
        <h2 className="text-xl font-semibold mb-4   flex items-center gap-9 pl-5">
          <span>
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500"></div>
          </span>
          Hackathons
        </h2>
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
                      <ul className="list-disc ml-5 mt-3 text-[13px] font-mono text-gray-700 dark:text-gray-500 space-y-1">
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
                            className="text-xs bg-gray-200 font-mono dark:bg-black border rounded-full px-2 py-1"
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
        <h2 className="text-xl font-semibold mb-4   flex items-center gap-9 pl-5">
          <span>
            <div className="w-2 h-2 rounded-full  bg-gray-300 dark:bg-gray-500"></div>
          </span>
          Events
        </h2>
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
                      <ul className="list-disc ml-5 mt-3 text-[13px] font-mono text-gray-700 dark:text-gray-500 space-y-1">
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
                            className="text-xs font-mono bg-gray-200 dark:bg-black border rounded-full px-2 py-1"
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
      <h2 className="text-xl font-semibold mb-4   flex items-center gap-9 pl-5">
        <span>
          <div className="w-2 h-2 rounded-full  bg-gray-300 dark:bg-gray-500"></div>
        </span>
        Education
      </h2>
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
                <div className="w-20 mt-2 p-0.5 border-1 border-green-100 dark:border-[#043915]  rounded-sm cursor-pointer">
                <div className="flex border border-green-200 dark:border-[#4C763B] items-center gap-0.5 bg-green-100 dark:bg-[#043915] px-1 py-0.1 rounded-sm">
                  {item.marksheet && (
                    <a
                      href={item.marksheet}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-sm"
                    >
                      Marksheet
                    </a>
                                  
                  )}
                  </div>
                  </div>

                  {item.details && (
                    <ul className="list-disc ml-5 mt-3 text-[13px] font-mono text-gray-700 dark:text-gray-500 space-y-1">
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
                          className="text-xs font-mono bg-gray-200 dark:bg-black border rounded-full px-2 py-1"
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
