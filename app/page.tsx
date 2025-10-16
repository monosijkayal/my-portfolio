import React from "react";
import { MorphingText } from "./components/ui/morphing-text";
import { WordRotate } from "./components/ui/word-rotate";
import GitHubActivity from "./components/GitHubActivity";
import { CodeXml, MapPin, Phone, Mail, Mars, ArrowUpRight } from "lucide-react";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div id = "hero"className="flex flex-col">
      <div className="flex justify-center items-center top-0 border-b border-gray-200">
        <div className=" flex w-full max-w-3xl bg-white justify-center items-center border-r border-l border-gray-200">
          <div className="flex flex-col text-black mt-11 mb-11 border-t border-b border-gray-200 w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center w-full border-gray-200 md:space-x-6 space-y-4 md:space-y-0 p-4">
              {/* Left side: profile image */}
              <div className="flex justify-center items-center w-36 h-36 md:w-44 md:h-44 border border-gray-200 rounded-full overflow-hidden">
                <img
                  src="ProfileImge.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Right side: name and role */}
              <div className="flex flex-col justify-center text-center md:text-left border-t md:border-t-0 md:border-l border-gray-200 md:pl-6 w-full md:w-[590px]">
                <div className="border-t md:border-t-0 border-b border-gray-200 p-2">
                  <h1 className="text-2xl md:text-4xl font-mono font-semibold text-gray-900">
                    Monosij Kayal
                  </h1>
                </div>

                <div className="p-2">
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

      <div className="w-full h-10 bg-gray-200"></div>

      <div className="flex justify-center items-center  border border-gray-200">
        <div className="flex flex-col w-full max-w-3xl -gap-2">
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100">
              <CodeXml className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>
            <h1 className="text-sm items-center content-center">
              Aspiring Full Stack Developer | Building Modern Web Experiences
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100">
              <MapPin className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>
            <h1 className="text-sm items-center content-center">
              Kolkata, India
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100">
              <Phone className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>
            <h1 className="text-sm items-center content-center">
              +91 90511 09596
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100">
              <Mail className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>
            <h1 className="text-sm items-center content-center">
              monosijkayal@gmail.com
            </h1>
          </div>
          <div className=" relative flex flex-row w-full max-w-3xl border-r border-l gap-2 p-3 -mt-4">
            <div className="flex border size-7 items-center justify-center rounded-md border-gray-100">
              <Mars className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>
            <h1 className="text-sm items-center content-center">He / Him</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-10 border-b bg-gray-200"></div>

      <div className="flex justify-center items-center border-b">
        <div className="w-full max-w-3xl border-l border-r">
          {/* Main grid container — controls responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
            {/* LinkedIn */}
            <div className="flex items-center justify-between border-b sm:border-b-0 sm:border-r p-4">
              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center w-10 h-10">
                  <img src="LinkedIn.png" alt="LinkedIn" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold">LinkedIn</h1>
                  <p className="text-gray-600">@monosijkayal</p>
                </div>
              </div>
              <ArrowUpRight className="ml-4" />
            </div>

            {/* Twitter */}
            <div className="flex items-center justify-between border-b sm:border-b-0 p-4">
              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center w-10 h-10">
                  <img src="twitter.png" alt="Twitter" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold">Twitter</h1>
                  <p className="text-gray-600">@monosijkayal</p>
                </div>
              </div>
              <ArrowUpRight className="ml-4" />
            </div>

            {/* Leetcode */}
            <div className="flex items-center justify-between border-t sm:border-t sm:border-r p-4">
              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center w-10 h-10">
                  <img src="leetcode.jpg" alt="Leetcode" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold">Leetcode</h1>
                  <p className="text-gray-600">@monosijkayal</p>
                </div>
              </div>
              <ArrowUpRight className="ml-4" />
            </div>

            {/* Github */}
            <div className="flex items-center justify-between border-t sm:border-t p-4">
              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center w-10 h-10">
                  <img src="github.png" alt="Github" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold">Github</h1>
                  <p className="text-gray-600">@monosijkayal</p>
                </div>
              </div>
              <ArrowUpRight className="ml-4" />
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="w-full h-10 border-b bg-gray-200"></div>

      <div  className="w-full h-10 border-b flex items-center justify-center ">
        <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-2xl">
          {" "}
          About{" "}
        </div>
      </div>
      <div className="flex justify-center items-center border-b">
        <div className="flex w-full max-w-3xl border-r border-l  border-gray-200 p-6 bg-white">
          <p>
            Hello, World! I’m Monosij Kayal — a passionate Full-Stack Developer
            driven by the mission to craft scalable, high-performance, and
            visually engaging web applications that make technology feel
            effortless for users. With a strong foundation in React, Node.js,
            MongoDB, and Tailwind CSS, I specialize in building end-to-end web
            experiences that balance functionality with clean, modern design. My
            journey began with a curiosity for how the web works, and over time,
            it evolved into a deep interest in Web3 and blockchain development,
            where I’m now exploring decentralized applications, smart contracts,
            and blockchain mining concepts. Beyond code, I’m constantly
            improving my problem-solving and logical thinking skills — striving
            every day to become a faster, more efficient engineer. I believe
            that great software comes from the perfect mix of creativity,
            precision, and persistence. One of my ongoing goals is to bridge the
            gap between Web2 and Web3, blending modern web technologies with the
            decentralized future of the internet. Let’s connect and build
            something impactful together
          </p>
        </div>
      </div>

      <div className="w-full h-10 border-b bg-gray-200"></div>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full h-10 border-b flex items-center justify-center ">
          <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-2xl">
            {" "}
            My Github Contribution{" "}
          </div>
        </div>
        <div className="w-full max-w-3xl flex items-center justify-center p-3 border-l border-r ">
          <GitHubActivity />
        </div>
      </div>

      <div className="w-full h-10 border-b bg-gray-200"></div>
      <div className="w-full flex-col border-b flex items-center justify-center ">
        <div className="w-full h-10 border-b flex items-center justify-center ">
          <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-2xl">
            {" "}
            Stack{" "}
          </div>
        </div>
        <div className="">
          <Skills />
        </div>
      </div>

      <div id = "projects" className="w-full h-10 border-b bg-gray-200"></div>
      <div>
        <div className="w-full h-10 border-b flex items-center justify-center ">
          <div className="w-full h-full max-w-3xl border-r border-l flex items-center px-2 font-bold text-2xl">
            {" "}
            <div className = "flex items-center gap-2">
              <span>Projects</span>
              <span className="text-gray-400 text-sm">(5)</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
