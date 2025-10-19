"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      image: "/cert1.png",
      title: "Full Stack Web Development",
      time: "Issued Jan 2024 by Coursera",
      company: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/ABC123",
    },
    {
      image: "/cert2.png",
      title: "React - The Complete Guide",
      time: "Issued Mar 2024 by Udemy",
      company: "Udemy",
      link: "https://www.udemy.com/certificate/XYZ456",
    },
    {
      image: "/cert3.png",
      title: "Node.js Developer",
      time: "Issued May 2024 by edX",
      company: "edX",
      link: "https://www.edx.org/certificate/DEF789",
    },
    {
      image: "/cert4.png",
      title: "Advanced JavaScript",
      time: "Issued June 2024 by Codecademy",
      company: "Codecademy",
      link: "https://www.codecademy.com/certificates/HIJ111",
    },
    {
      image: "/cert5.png",
      title: "TypeScript Masterclass",
      time: "Issued July 2024 by Udemy",
      company: "Udemy",
      link: "https://www.udemy.com/certificate/TS222",
    },
    {
      image: "/cert6.png",
      title: "Next.js Fundamentals",
      time: "Issued Aug 2024 by Vercel",
      company: "Vercel",
      link: "https://vercel.com/certificates/NEXT333",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section
      id="certificates"
      className="w-full max-w-3xl relative text-black flex flex-col items-center border-r border-l border-gray-200"
    >
      <div className="w-full max-w-3xl">
        <div className="flex flex-col">
          {visibleCertificates.map((certificate, index) => (
            <div
              key={index}
              className="hover:bg-[#F8F8F8] bg-white overflow-hidden flex flex-col border-b transition-colors"
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
          className="mt-2 mb-2 px-3 py-2 text-sm font-medium text-white bg-black hover:bg-gray-900 transition-colors flex items-center gap-2"
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
