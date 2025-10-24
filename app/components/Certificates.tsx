"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      image: "/ardent.jpeg",
      title: "Full Stack Web Development",
      time: "Issued March 2025 by Ardent Computech Pvt. Ltd.",
      company: "Coursera",
      link: "https://drive.google.com/file/d/1NdgAmF9X-nz_itPfK_2c8q5V3P73U-QV/preview",
    },
    {
      image: "/learnyard.jpg",
      title: "DSA Course - The Complete Guide",
      time: "Issued Mar 2024 by Learnyard",
      company: "Udemy",
      link: "https://drive.google.com/file/d/1OLECvQl3K5OgLifQa114ojSh2IDMZPUy/view?usp=drive_link",
    },
    {
      image: "/ardent.jpeg",
      title: "Internet of Things (IoT)",
      time: "Issued May 2024 by Ardetnt Computech Pvt. Ltd.",
      company: "edX",
      link: "https://drive.google.com/file/d/1Ni27WGtafR84FDuONK0uxZPkDQDhfZzt/preview",
    },
    {
      image: "/nptel.jpg",
      title: "Computer architecture (COA)",
      time: "Issued June 2024 by NPTEL",
      company: "Codecademy",
      link: "https://drive.google.com/file/d/1Jzw4ZMO_9T_9UlNYGYfhHlmvgj2SA6FQ/preview",
    },
    {
      image: "/nptel.jpg",
      title: "JAVA course",
      time: "Issued July 2024 by NPTEL",
      company: "Udemy",
      link: "https://drive.google.com/file/d/1VZQooan1PMwulQN8R6I0-Hab-2fE5ASx/preview",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section
      id="certificates"
      className="w-full max-w-3xl relative text-black dark:text-white flex flex-col items-center border-r border-l border-gray-200 dark:border-[#181818]"
    >
      <div className="w-full max-w-3xl">
        <div className="flex flex-col">
          {visibleCertificates.map((certificate, index) => (
            <div
              key={index}
              className="hover:bg-[#F8F8F8] bg-white dark:bg-black overflow-hidden flex flex-col border-b transition-colors"
            >
              <div className="flex justify-between items-center w-full">
                {/* Left side: Image + title */}
                <div className="flex items-center">
                  <div className="flex border-r h-26 p-6 items-center justify-center">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="object-cover w-10 h-10"
                    />
                  </div>

                  <div className="pr-2 ml-4">
                    <h3 className="text-xl font-semibold">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-400 text-md">{certificate.time}</p>
                  </div>
                </div>

                {/* Right side: ArrowUpRight icon */}
                <div className="flex items-center gap-10 mr-6">
                  <button
                    onClick={() => window.open(certificate.link, "_blank")}
                    className="hover:text-gray-700 text-gray-500 transition-colors"
                    aria-label={`Open ${certificate.title} certificate`}
                  >
                    <ArrowUpRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      {certificates.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 mb-2 px-3 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-#181818 transition-colors flex items-center gap-2"
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
};

export default Certificates;
