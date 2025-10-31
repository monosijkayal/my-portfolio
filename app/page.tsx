import React from "react";
import { MorphingText } from "./components/ui/morphing-text";
import { WordRotate } from "./components/ui/word-rotate";
import GitHubActivity from "./components/GitHubActivity";
import {
  CodeXml,
  MapPin,
  Phone,
  Mail,
  Mars,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import EducationTimeline from "./components/EducationTimeline";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <div
      id="hero"
      className="flex flex-col dark:bg-black px-3 sm:px-0 py-3 sm:py-0 "
    >
      {/* //Profile section */}
      <div className="flex justify-center items-center top-0 border-b border-gray-200 dark:bg-black dark:border-[#181818]">
        <div className="flex w-full max-w-3xl bg-white dark:bg-black dark:border-[#181818] justify-center items-center border-x border-gray-200">
          <div className="flex flex-col text-black mt-11 mb-11 border-t border-b dark:border-[#181818] border-gray-200 w-full max-w-3xl">
            <div className="flex flex-row items-center justify-center w-full border-gray-200 dark:border[#181818] ">
              {/* Left side: profile image */}
              <div className="flex justify-center items-center w-25 h-20 md:w-60 md:h-44  border-r">
                <div className="flex justify-center items-center w-20 h-20 md:w-44 md:h-44 border border-gray-200 rounded-full overflow-hidden">
                  <img
                    src="profileImage.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full object-[center_30%]"
                  />
                </div>
              </div>

              {/* Right side: name and role */}
              <div className="flex flex-col justify-center text-left border-black w-full ">
                <div className="border-b dark:border-[#181818] border-gray-200 p-2">
                  <h1 className="text-2xl md:text-4xl font-semibold dark:text-white text-[#181818]">
                    Monosij Kayal
                  </h1>
                </div>

                <div className="p-2 border-b font-mono">
                  <WordRotate
                    className="text-gray-500 text-sm md:text-base"
                    words={[
                      "Web Developer",
                      "Building the Web, One Pixel at a Time",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //persoal info section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300"></div>
      <div className="flex justify-center items-center  border border-gray-200 dark:border-[#181818]">
        <div className="flex flex-col w-full max-w-3xl -gap-2 font-mono ">
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 ">
            <div className="flex size-7 items-center justify-center rounded-md border border-gray-100 dark:border-[#282828]">
              <CodeXml className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />
            </div>

            <h1 className="text-[13px] items-center content-center">
              Aspiring Full Stack Developer | Building Modern Web Experiences
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
              <MapPin className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />{" "}
            </div>
            <h1 className="text-[13px] items-center content-center">
              Kolkata, India
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828] ">
              <Phone className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />{" "}
            </div>
            <h1 className="text-[13px] items-center content-center">
              +91 90511 09596
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
              <Mail className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />{" "}
            </div>
            <h1 className="text-[13px] items-center content-center">
              monosijkayal@gmail.com
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
              <FileText className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />{" "}
            </div>
            <div className="flex items-center justify-center p-0.5 border-1 border-green-100 dark:border-[#043915]  rounded-sm cursor-pointer">
              <div className="flex border border-green-200 dark:border-[#4C763B] items-center gap-0.5 bg-green-100 dark:bg-[#043915] px-1 py-0.1 rounded-sm">
                <a
                  href="https://drive.google.com/file/d/1ERWYZG7OOfryK2z5OohUFsMXnbqWGs5c/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border-green-200 dark:border-[#4C763B] items-center gap-0.5 bg-green-100 dark:bg-[#043915] px-1 py-0.1 rounded-sm hover:bg-green-200 dark:hover:bg-[#064a1d] transition"
                >
                  <h1 className="text-[13px] text-green-700 dark:text-[#F8F7BA] text-shadow-sm">
                    Resume
                  </h1>
                  <ArrowUpRight className="size-3 text-green-700 dark:text-[#B0CE88]" />
                </a>
              </div>
            </div>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100 dark:border-[#282828]">
              <Mars className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100 dark:text-gray-300 dark:border-[#404040] dark:bg-[#303030]" />{" "}
            </div>
            <h1 className="text-[13px] items-center content-center">He / Him</h1>
          </div>
        </div>
      </div>

      {/* //social links section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300"></div>
      <div className="flex justify-center items-center border-b border-t">
        <div className="w-full max-w-3xl border-l border-r">
          {/* Main grid container — controls responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white dark:bg-black">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/monosij-kayal-222359276/ "
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between border-b sm:border-b-0 sm:border-r p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex justify-center items-center w-10 h-10 border rounded-md border-gray-800">
                    <img src="linkedIn icon.jpg" alt="LinkedIn" className = "rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold">LinkedIn</h1>
                    <p className="text-gray-600 font-mono">@monosijkayal</p>
                  </div>
                </div>
                <ArrowUpRight className="ml-4 size-4" />
              </div>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/Monosijkayal"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between border-b sm:border-b-0 p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex justify-center items-center w-10 h-10 border rounded-md border-gray-800">
                    <img src="twitter.png" alt="Twitter" className = "rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold">Twitter</h1>
                    <p className="text-gray-600 font-mono">@monosijkayal</p>
                  </div>
                </div>
                <ArrowUpRight className="ml-4 size-4" />
              </div>
            </a>

            {/* Leetcode */}
            <a
              href="https://leetcode.com/u/monosij_leetcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between border-t sm:border-t sm:border-r p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex justify-center items-center w-10 h-10 rounded-md border border-gray-800">
                    <img src="leetcodeicon.png" alt="Leetcode" className = "rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold">Leetcode</h1>
                    <p className="text-gray-600 font-mono">@monosijkayal</p>
                  </div>
                </div>
                <ArrowUpRight className="ml-4 size-4" />
              </div>
            </a>

            {/* Github */}
            <a
              href="https://github.com/monosijkayal"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between border-t sm:border-t p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex justify-center items-center w-10 h-10 border rounded-md border-gray-800">
                    <img src="github.png" alt="Github" className = "rounded-md"  />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold">Github</h1>
                    <p className="text-gray-600 font-mono">@monosijkayal</p>
                  </div>
                </div>
                <ArrowUpRight className="ml-4 size-4" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* //About section  */}
      <div
        id="about"
        className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300"
      ></div>
      <div className="w-full h-10 border-b border-t flex items-center justify-center ">
        <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-3xl">
          {" "}
          About{" "}
        </div>
      </div>
      <div className="flex justify-center items-center border-b">
        <div className="flex w-full max-w-3xl border-r border-l  border-gray-200 dark:border-[#181818] p-6 bg-white dark:bg-black">
          <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-100 max-w-3xl mx-auto whitespace-pre-line">
            Hello, World! I’m{" "}
            <span className="font-semibold">Monosij Kayal</span> — a passionate
            <span className="text-green-500"> Full-Stack Developer</span> driven
            by the mission to craft scalable, high-performance, and visually
            engaging web applications that make technology feel effortless for
            users.
            <br />
            <br />
            With a strong foundation in{" "}
            <span className="text-blue-500">React</span>,{" "}
            <span className="text-yellow-500">Node.js</span>,
            <span className="text-emerald-500"> MongoDB</span>, and{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, I specialize in
            building end-to-end web experiences that balance functionality with
            clean, modern design.
            <br />
            <br />
            My journey began with a curiosity for how the web works, and over
            time, it evolved into a deep interest in{" "}
            <span className="text-purple-400">Web3</span> and{" "}
            <span className="text-indigo-400">blockchain development</span>,
            where I’m now exploring decentralized applications, smart contracts,
            and blockchain mining concepts.
            <br />
            <br />
            Beyond code, I’m constantly improving my problem-solving and logical
            thinking skills — striving every day to become a faster, more
            efficient engineer. I believe that great software comes from the
            perfect mix of creativity, precision, and persistence.
            <br />
            <br />
            One of my ongoing goals is to bridge the gap between Web2 and Web3,
            blending modern web technologies with the decentralized future of
            the internet.
            <br />
            <br />
            <span className="italic text-gray-500 dark:text-gray-400">
              Let’s connect and build something impactful together!
            </span>
          </p>
        </div>
      </div>

      {/* //Github Contribution section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300"></div>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full h-10 border-b border-t flex items-center justify-center ">
          <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-3xl">
            {" "}
            My Github Contribution{" "}
          </div>
        </div>
        <div className="w-full max-w-3xl flex items-center justify-center p-3 border-l border-r ">
          <GitHubActivity />
        </div>
      </div>

      {/* Stack section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300 border-t dark:border-[#181818]"></div>
      <div className="w-full flex-col border-b border-t flex items-center justify-center ">
        <div className="w-full h-10 border-b flex items-center justify-center ">
          <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-3xl">
            {" "}
            Stack{" "}
          </div>
        </div>
        <div className="">
          <Skills />
        </div>
      </div>

      {/* Education section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300"></div>
      <div className="w-full flex-col flex items-center justify-center ">
        <div className="w-full border-b border-t h-10 border-gray-200 dark:border-[#181818] flex flex-col items-center justify-center ">
          <div className=" w-full h-10 max-w-3xl border-r border-l flex items-center px-2 font-bold text-3xl">
            {" "}
            Experience{" "}
          </div>
        </div>
        <EducationTimeline />
      </div>

      {/* Projects section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300 border-t border-gray-200 dark:border-[#181818]"></div>
      <div className="w-full flex-col flex items-center justify-center ">
        <div className="w-full h-10 border-b border-t flex flex-col items-center justify-center ">
          <div className=" w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-3xl">
            {" "}
            <div className="flex items-center gap-2">
              <span>Projects</span>
              <span className="text-gray-400 text-sm">(6)</span>{" "}
            </div>
          </div>
        </div>
        <div className=" w-full max-w-3xl ">
          <ProjectCard />
        </div>
      </div>

      {/* Certificates section */}
      <div className="w-full  h-8 bg-[repeating-linear-gradient(132deg,#f5f5f5_0,#f5f5f5_1px,transparent_2px,transparent_7px)] dark:bg-[repeating-linear-gradient(132deg,#181818_0,#181818_1px,transparent_2px,transparent_7px)] transition-colors duration-300 border-t dark:border-[#181818]"></div>
      <div className="w-full flex-col flex items-center justify-center ">
        <div className="w-full h-10 border-b border-t flex flex-col items-center justify-center ">
          <div className=" w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-3xl">
            {" "}
            <div className="flex items-center gap-2">
              <span>Certificates</span>
              <span className="text-gray-400 text-sm">(5)</span>{" "}
            </div>
          </div>
        </div>
        <div className=" w-full max-w-3xl ">
          <Certificates />
        </div>
      </div>
    </div>
  );
}
