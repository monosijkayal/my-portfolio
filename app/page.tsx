import React from "react";
import { MorphingText } from "./components/ui/morphing-text";
import { WordRotate } from "./components/ui/word-rotate";
import { CodeXml, MapPin, Phone, Mail, Mars, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
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
      <div className="w-full h-10"></div>
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
      <div className="w-full h-10 border-b"></div>
      <div className="flex justify-center items-center border-b">
        <div className=" w-full max-w-3xl  border-l border-r ">
          <div className="w-full max-w-3xl flex flex-col bg-white">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center justify-center border-r  p-4">

                  <div className="flex flex-row items-center space-x-4">
                    <div className="flex justify-center items-center w-10 h-10 border-red-800">
                      <img src="LinkedIn.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <h1>LinkedIn</h1>
                      <p>@monosijkayal</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center ml-38">
                    <ArrowUpRight className="" />
                  </div>

              </div>
              {/* <div className="w-5 h-18 border-r border-l mr-3"></div> */}
              <div className = "border-l flex flex-row px-4">
                <div className="flex flex-row space-x-4 items-center ">
                  <div className="flex justify-center items-center w-10 h-10">
                    <img src="twitter.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h1>Twitter</h1>
                    <p>@monosijkayal</p>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-38">
                  <ArrowUpRight className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-3 border-b"></div>
      <div className="flex justify-center items-center border-b">
        <div className=" w-full max-w-3xl  border-l border-r ">
          <div className="w-full max-w-3xl flex flex-col bg-white">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center justify-center border-r  p-4">

                  <div className="flex flex-row items-center space-x-4">
                    <div className="flex justify-center items-center w-10 h-10 border-red-800">
                      <img src="leetcode.jpg" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <h1>Leetcode</h1>
                      <p>@monosijkayal</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center ml-38">
                    <ArrowUpRight className="" />
                  </div>

              </div>
              {/* <div className="w-5 h-18 border-r border-l mr-3"></div> */}
              <div className = "border-l flex flex-row px-4">
                <div className="flex flex-row space-x-4 items-center ">
                  <div className="flex justify-center items-center w-10 h-10">
                    <img src="github.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h1>Github</h1>
                    <p>@monosijkayal</p>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-38">
                  <ArrowUpRight className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
