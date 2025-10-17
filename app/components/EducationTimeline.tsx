"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui/accordion";
import { GraduationCap } from "lucide-react";

export default function EducationTimeline() {
  const education = [
    {
      school: "University of Science — VNUHCM",
      period: "08.2018 – 2026",
      details: [
        "Currently studying for a Bachelor's degree in Information Systems.",
        "Language Proficiency: B1 English Level.",
        "Achieved several awards, including:",
        "• Bronze Medal – 10th Design, Manufacturing, and Application Award 2022",
        "• 2nd Prize – Business Startup Competition 2019",
      ],
      skills: [
        "C++",
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
      school: "Ly Tu Trong High School for the Gifted — Can Tho City",
      period: "08.2015 – 06.2018",
    },
    {
      school: "Thuan Hung Secondary School",
      period: "08.2011 – 06.2015",
    },
  ];

  return (
    <section className=" w-full max-w-3xl pt-3 pr-3  border-r border-l">
      <div className=" border-l-1 border-gray-200 ml-6 ">
        {education.map((item, i) => (
          <div key={i} className="relative pl-10 mb-8">
            {/* Icon */}
            <div className="absolute -left-[15px] flex border size-7 items-center justify-center rounded-md border-gray-100">
              <GraduationCap className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${i}`} className="border-none">
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
                          className="text-xs bg-gray-200 rounded-full px-2 py-1"
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
