"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiPython,
  SiCplusplus,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiPostman,
  SiGit,
  SiSolidity,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Prisma", icon: <SiPrisma className="text-gray-700 dark:text-gray-300" /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "AWS", icon: <SiAmazon className="text-orange-400" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-red-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "Solidity", icon: <SiSolidity className="text-gray-700 dark:text-gray-300" /> },
  ];

  return (
    <section className="  dark:bg-gray-900">
      <div className="w-full max-w-3xl p-3 border-r border-l">
        <div className="flex flex-wrap gap-2 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200"
            >
              <div className="text-xl">{skill.icon}</div>
              <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
