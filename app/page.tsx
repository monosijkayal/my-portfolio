import React from "react";
import { MorphingText } from "./components/ui/morphing-text";
import { WordRotate } from "./components/ui/word-rotate";
import { CodeXml, MapPin, Phone, Mail, Mars } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center top-0 border-b border-gray-200">
        <div className=" flex w-full max-w-3xl bg-white justify-center items-center border-r border-l border-gray-200">
          <div className="flex flex-col text-black mt-11 mb-11 border-t border-b border-gray-200 w-full max-w-3xl">
            <div className="flex ">
              <div className="flex justify-center items-center w-45 h-45 border object-cover border-gray-200 rounded-full overflow-hidden">
                <img
                  src="ProfileImge.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Right side: name and role */}
              <div className="flex flex-col justify-center border-l border-gray-200 w-[590px]">
                <div className="border-t border-b border-gray-200 p-1">
                  {" "}
                  <h1 className="text-4xl font-mono font-semibold text-gray-900">
                    Monosij Kayal
                  </h1>{" "}
                </div>
                <div className="p-1.5">
                  <WordRotate
                    className="text-gray-500"
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
              <Phone  className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
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
              <Mars  className="size-6 text-gray-500 border rounded-md p-1 bg-gray-100" />{" "}
            </div>
            <h1 className="text-sm items-center content-center">
              He / Him
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-10 border-b"></div>
    </div>
  );
}
