"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui/accordion";
import { Link, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectCard() {
  const projects = [
    {
      image: "/wall-e.png",
      title: "WALL_E",
      duration: "02.2025 - 04.2025",
      description: (
        <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-400 whitespace-pre-line">
          My{" "}
          <span className="font-semibold text-green-500">
            Social Media Platform
          </span>{" "}
          is a modern web application built with{" "}
          <span className="text-blue-500">React</span>,
          <span className="text-sky-500"> Firebase</span>, and
          <span className="text-cyan-400">Tailwind CSS</span>, designed to
          deliver a fast, engaging, and community-driven experience.
          <br />
          <br />
          It features full-fledged{" "}
          <span className="text-emerald-500">Firebase Authentication</span> for
          user login and registration — including{" "}
          <span className="text-yellow-500">Google sign-in</span> — while
          <span className="text-emerald-500"> Cloud Firestore</span> and
          <span className="text-emerald-500"> Firebase Storage</span> handle
          secure and real-time data management for posts, profiles, and media.
          <br />
          <br />
          Users can easily <span className="text-pink-400">create</span>,
          <span className="text-pink-400">edit</span>, and
          <span className="text-pink-400">delete</span> their posts, with
          instant updates reflected across the platform. Each user has a
          dedicated <span className="text-purple-400">Profile Page</span> that
          displays their details and posts, along with a dynamic
          <span className="text-indigo-400"> Feed Page</span> where everyone can
          explore posts from all users in real time.
          <br />
          <br />
          Social interactions are at the core — users can
          <span className="text-green-400">like</span> and
          <span className="text-green-400">comment</span> on posts,
          <span className="text-blue-400">follow</span> other users, and
          <span className="text-amber-400">save</span> posts they find
          interesting to revisit later in the
          <span className="text-amber-400"> Saved Page</span>.
          <br />
          <br />
          Overall, this project demonstrates how modern technologies like
          Firebase can power a scalable, feature-rich social network with
          seamless authentication, real-time updates, and a smooth user-centric
          interface.
        </p>
      ),
      link: "https://wall-e-0.web.app/",
    },
    {
      image: "/couplespoint.png",
      title: "Couplespoint",
      duration: "11.2024 - present",
      description: (
        <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-100 max-w-3xl mx-auto whitespace-pre-line">
          <span className="font-semibold text-pink-500">CouplesPoint.life</span>{" "}
          is an all-in-one lifestyle platform designed exclusively for couples —
          blending technology, creativity, and personalization into one unified
          experience. The platform helps couples plan, gift, celebrate, and
          create memories together in fun and meaningful ways. Built with{" "}
          <span className="text-blue-500">React</span>,
          <span className="text-sky-500"> Tailwind CSS</span>, and AI-powered
          modules, it transforms how modern relationships organize and celebrate
          love.
          <br />
          <br />
          <span className="text-pink-400 font-semibold">
            🎁 Gift Finder + Price Comparison
          </span>
          <br />
          Discover thoughtful gifts through AI-driven recommendations that learn
          from your partner’s likes, recent purchases, and upcoming events.
          Compare prices across Amazon, Flipkart, Meesho, and Nykaa. Save gifts
          to your wishlist, set reminders, or even earn affiliate rewards — all
          from a single dashboard.
          <br />
          <br />
          <span className="text-pink-400 font-semibold">
            📍 Date Planner (Location + Budget Based)
          </span>
          <br />
          Simply enter your city, interests, and budget to get complete date
          itineraries including cafés, parks, spas, and event suggestions.
          Couples can even book a full surprise plan in one click, with
          partnerships from local vendors for exclusive discounts and deals.
          <br />
          <br />
          <span className="text-pink-400 font-semibold">
            🌐 Customized Website Surprise Builder
          </span>
          <br />A one-of-a-kind module where users can create a personalized
          romantic website for their partner in just 60 seconds. Upload a name,
          image, and message, and the system auto-generates a beautifully
          animated landing page with a custom share link — e.g.,{" "}
          <span className="text-purple-400">priya.couplespoint.life</span>.
          Users can even integrate playlists, galleries, countdowns, and “Open
          at Midnight” surprise messages. Optionally, they can purchase custom
          domains like
          <span className="text-purple-400"> forpriya.com</span> via GoDaddy or
          Namecheap APIs.
          <br />
          <br />
          <span className="text-pink-400 font-semibold">
            ❤️ Couple Timeline / Journey Tracker
          </span>
          <br />
          A private digital scrapbook for couples — track relationship
          milestones, anniversaries, travel logs, and photos, all within a
          shared timeline. Everything stays private between the couple, with
          optional public sharing for memorable highlights.
          <br />
          <br />
          <span className="text-pink-400 font-semibold">
            🛍️ Online Store & Affiliate Gift Shop
          </span>
          <br />
          Browse curated romantic products filtered by occasion and budget.
          Includes a built-in price comparison widget and the ability to order
          personalized gift boxes — a future revenue stream for the platform.
          <br />
          <br />
          <span className="text-pink-400 font-semibold">
            🧩 Gamified Experience
          </span>
          <br />
          Couples earn badges like “Romantic Hero” or “Surprise King” and
          collect points for sending gifts, planning dates, or using features
          regularly. A playful leaderboard adds a fun, competitive twist while
          maintaining full privacy control.
          <br />
          <br />
          <span className="text-emerald-500 font-semibold">
            In essence, CouplesPoint.life
          </span>
          redefines digital romance — merging gifting, planning,
          personalization, and gamification into one elegant ecosystem built to
          make love interactive, organized, and endlessly creative.
        </p>
      ),
      link: "https://github.com/monosijkayal/couplespoint",
    },
    {
      image: "/Portfolio.png",
      title: "Portfolio Website",
      duration: "01.2025 - Present",
      description: (
        <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-400 whitespace-pre-line max-w-3xl">
          <span className="font-semibold text-green-500">
            🧑‍💻 Personal Portfolio — Showcasing My Journey
          </span>
          <br />
          <br />
          My personal portfolio is a sleek, modern, and fully responsive website
          built to highlight my skills, projects, and achievements as a web
          developer. Designed with a focus on clean UI, smooth animations, and
          accessibility — it reflects both my technical proficiency and creative
          approach to web design.
          <br />
          <br />
          <span className="font-semibold">🚀 Features</span>
          <br />• <span className="font-medium">Dynamic Sections</span> — Home,
          About, Projects, Education, Events, and Contact pages.
          <br />• <span className="font-medium">Responsive Design</span> —
          optimized for all screen sizes with seamless layouts.
          <br />• <span className="font-medium">Dark & Light Mode</span> —
          built-in theme toggle for better user experience.
          <br />• <span className="font-medium">GitHub Activity Section</span> —
          integrated GitHub contributions calendar.
          <br />• <span className="font-medium">Smooth Animations</span> — page
          transitions and hover effects for modern interactivity.
          <br />• <span className="font-medium">Event Timeline</span> —
          showcases hackathons and achievements with beautiful gradient lines.
          <br />• <span className="font-medium">ShadCN Components</span> —
          custom Accordions, Cards, and Sidebar UI for a minimal aesthetic.
          <br />• <span className="font-medium">Fully Customizable</span> —
          easily updatable content and modular structure for scalability.
          <br />
          <br />
          <span className="font-semibold">🛠️ Tech Stack</span>
          <br />• Frontend:{" "}
          <span className="text-blue-500">Next.js (React Framework)</span>
          <br />• Styling: <span className="text-sky-500">
            Tailwind CSS
          </span> + <span className="text-purple-400">ShadCN UI</span>
          <br />• Animations:{" "}
          <span className="text-indigo-400">Framer Motion</span>
          <br />• Icons & Fonts:{" "}
          <span className="text-gray-500">Lucide React</span> +{" "}
          <span className="text-amber-400">Geist Mono</span>
          <br />• Theming: <span className="text-green-500">
            next-themes
          </span>{" "}
          for light/dark mode handling.
          <br />
          <br />
          <span className="italic text-gray-500 dark:text-gray-400">
            Live site:
          </span>{" "}
          <a
            href="https://your-portfolio-link.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            your-portfolio-link.vercel.app
          </a>
        </p>
      ),
      link: "https://github.com/monosij/portfolio",
    },
    {
      image: "/onlinebank.png",
      title: "Online Bank",
      duration: "05.2025 - 06.2025",
      description: (
        <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-400 whitespace-pre-line max-w-3xl">
          <span className="font-semibold text-green-500">
            💰 Online Bank — All-in-One Finance Hub
          </span>
          <br />
          <br />
          Online Bank is a modern, full-stack web application designed to
          deliver a seamless, secure, and intuitive digital banking experience.
          From account management and transaction history to investment planning
          with built-in calculators, it’s a personal finance dashboard built
          with production-ready tools and UX in mind.
          <br />
          <br />
          <span className="font-semibold">🚀 Features</span>
          <br />• <span className="font-medium">User Dashboard</span> — account
          summaries, balance overview, and transaction history.
          <br />• <span className="font-medium">Secure Authentication</span> —
          Login/Signup using{" "}
          <span className="text-red-500 font-semibold">JWT</span>.
          <br />• <span className="font-medium">MF & FD Calculators</span> —
          Mutual Fund (MF) and Fixed Deposit (FD) simulators for investment
          planning.
          <br />• <span className="font-medium">Reset Password</span> — email
          verification/password reset flows.
          <br />• <span className="font-medium">Responsive UI</span> — polished
          layout for desktop, tablet, and mobile using modern UI libraries.
          <br />• <span className="font-medium">Contact / Feedback</span> —
          users can send feedback via a contact form.
          <br />
          <br />
          <span className="font-semibold">🛠️ Tech Stack</span>
          <br />• Frontend: <span className="text-blue-500">Next.js</span>,{" "}
          <span className="text-sky-500">Tailwind CSS</span>,{" "}
          <span className="text-purple-400">ShadCN UI</span>,{" "}
          <span className="text-indigo-400">Magic UI</span>.
          <br />• Backend: <span className="text-emerald-500">
            Node.js
          </span>, <span className="text-emerald-500">Express.js</span>,{" "}
          <span className="text-amber-400">MongoDB</span> (with Mongoose).
          <br />• Auth & Services: <span className="text-red-500">JWT</span> for
          authentication, and email services for password reset.
          <br />• UX: <span className="text-yellow-500">
            React Hot Toaster
          </span>{" "}
          for notifications and{" "}
          <span className="text-gray-500">Lucide React</span> for icons.
          <br />
          <br />
          <span className="italic text-gray-500 dark:text-gray-400">
            Live demo / repo:
          </span>{" "}
          <a
            href="https://online-bank-opal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            online-bank-opal.vercel.app
          </a>
        </p>
      ),
      link: "online-bank-opal.vercel.app/",
    },
    {
      image: "/pixai.png",
      title: "PixAI",
      duration: "05.2025 - 06.2025",
      description: (
        <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-100 max-w-3xl mx-auto whitespace-pre-line">
          <span className="font-semibold text-indigo-500">PixAI</span> is an
          innovative
          <span className="text-purple-500">
            {" "}
            AI-powered Text-to-Image Generator
          </span>
          application designed to turn creative text prompts into stunning,
          high-quality images using the power of the
          <span className="text-pink-500"> ClipDrop API</span>. Built as a
          <span className="text-blue-500"> Full Stack SaaS platform</span>, it
          seamlessly combines intelligent automation with modern web design,
          offering creators, developers, and businesses a new way to visualize
          ideas.
          <br />
          <br />
          Developed with the
          <span className="text-green-500"> MERN stack</span> —
          <span className="text-emerald-400">MongoDB</span>,
          <span className="text-emerald-400">Express</span>,
          <span className="text-emerald-400">React</span>, and
          <span className="text-emerald-400">Node.js</span> — PixAI provides a
          smooth and secure experience supported by
          <span className="text-orange-400"> Razorpay integration</span> for
          credit-based payments. With its responsive and scalable architecture,
          PixAI bridges creativity and technology, making AI image generation
          accessible to everyone.
          <br />
          <br />
          <span className="text-indigo-400 font-semibold">🚀 Key Features</span>
          <br />
          🌐 <span className="text-blue-500">Modern User Interface:</span> A
          sleek and responsive design that ensures smooth navigation across all
          devices.
          <br />
          🤖{" "}
          <span className="text-purple-500">
            AI-Powered Text-to-Image Generation:
          </span>
          Generate high-quality visuals using the ClipDrop API from simple text
          prompts.
          <br />
          💰 <span className="text-amber-400">Credit-Based System:</span> Users
          start with free credits and can easily purchase more using Razorpay’s
          secure payment gateway.
          <br />
          🔐 <span className="text-green-400">Secure Authentication:</span> Full
          user account creation, login, and password recovery with data
          protection.
          <br />
          🧩{" "}
          <span className="text-pink-400">Scalable Database Integration:</span>
          MongoDB stores user profiles, credits, and transactions efficiently.
          <br />
          📱 <span className="text-blue-400">Responsive Design:</span> Fully
          optimized for desktop, tablet, and mobile users.
          <br />
          📊 <span className="text-emerald-400">Purchase Management:</span>{" "}
          Monitor credit usage and transaction history via an intuitive
          dashboard.
          <br />
          ⚙️ <span className="text-cyan-400">
            Efficient API Integration:
          </span>{" "}
          Reliable backend communication ensures fast, secure image generation.
          <br />
          🧱 <span className="text-orange-400">Modular Architecture:</span>{" "}
          Clean, scalable, and maintainable codebase designed for long-term
          product growth.
          <br />
          <br />
          <span className="text-emerald-500 font-semibold">
            In essence, PixAI
          </span>{" "}
          merges the power of artificial intelligence with modern web
          technologies — delivering an intuitive, high-performance platform that
          transforms imagination into visually stunning art with just a few
          words.
        </p>
      ),
      link: "https://pixai-io.vercel.app/",
    },
    {
      image: "/chatapp.png",
      title: "ChatApp",
      duration: "09.2024 - 10.2024",
      description: (
        <p className="font-mono text-[13px] leading-relaxed text-gray-800 dark:text-gray-400 whitespace-pre-line max-w-3xl">
          <span className="font-semibold text-green-500">
            💬 Real-Time Chat Application — Connect Instantly
          </span>
          <br />
          <br />
          A fully functional real-time chat platform that enables users to
          communicate seamlessly through instant messaging. Built with the MERN
          stack and Socket.io, this application focuses on providing a fast,
          secure, and responsive chatting experience with a clean, modern UI.
          <br />
          <br />
          <span className="font-semibold">🚀 Highlights</span>
          <br />• <span className="font-medium">🌟 Tech Stack:</span> MERN +
          Socket.io + TailwindCSS + DaisyUI
          <br />•{" "}
          <span className="font-medium">
            🎃 Authentication & Authorization:
          </span>{" "}
          JWT-based secure login and signup flow
          <br />• <span className="font-medium">
            👾 Real-time Messaging:
          </span>{" "}
          powered by Socket.io for instant chat updates
          <br />• <span className="font-medium">
            🚀 Online User Status:
          </span>{" "}
          live user presence indicator
          <br />•{" "}
          <span className="font-medium">👌 Global State Management:</span>{" "}
          handled with Zustand for smoother performance
          <br />• <span className="font-medium">🐞 Error Handling:</span>{" "}
          implemented on both server and client for reliability
          <br />
          <br />
          <span className="font-semibold">🧩 Features</span>
          <br />
          • Real-time private and group chats
          <br />
          • Message timestamps and online indicators
          <br />
          • User-friendly UI built with Daisy UI and TailwindCSS
          <br />
          • Persistent login using JWT and cookies
          <br />
          • Efficient message storage in MongoDB with Mongoose ODM
          <br />
          <br />
          <span className="font-semibold">🛠️ Tech Stack</span>
          <br />• Frontend: <span className="text-blue-500">
            React (Vite)
          </span>{" "}
          + <span className="text-sky-500">TailwindCSS</span> +{" "}
          <span className="text-purple-400">Daisy UI</span>
          <br />• Backend: <span className="text-green-500">
            Node.js
          </span> + <span className="text-gray-400">Express.js</span>
          <br />• Database: <span className="text-emerald-400">
            MongoDB
          </span>{" "}
          with <span className="text-indigo-400">Mongoose</span>
          <br />• Real-time Communication:{" "}
          <span className="text-yellow-400">Socket.io</span>
          <br />• State Management:{" "}
          <span className="text-pink-400">Zustand</span>
          <br />• Authentication: <span className="text-orange-400">JWT</span>
          <br />
          <br />
          <span className="italic text-gray-500 dark:text-gray-400">
            Live Demo:
          </span>{" "}
          <a
            href="https://your-chatapp-link.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            your-chatapp-link.vercel.app
          </a>
        </p>
      ),
      link: "chatapp-k9xg.onrender.com/login",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="w-full max-w-3xl relative text-black  dark:text-white flex flex-col items-center border-r border-l border-gray-200 dark:border-[#181818]"
    >
      <div className="w-full max-w-3xl">
        <div className="flex flex-col">
          {visibleProjects.map((project, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="hover:bg-[#F8F8F8] bg-white dark:bg-black overflow-hidden flex flex-col"
            >
              <AccordionItem value={`item-${index}`} className="border-none">
                <div className="flex justify-between items-center w-full border-b dark:border-[#181818]">
                  {/* Left side: Image + title */}
                  <div className="flex items-center">
                    <div className="flex border-r h-26 p-6 items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-10 h-10"
                      />
                    </div>

                    <div className="pr-2 ml-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-gray-400 text-md">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Right side: View Code + Accordion Arrow */}
                  <div className="flex items-center gap-10 mr-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link className="size-4 text-gray-500" />
                    </a>
                    <AccordionTrigger className="!p-0 hover:no-underline text-gray-700" />
                  </div>
                </div>

                {/* Hidden description (expands on click) */}
                <AccordionContent className="px-6 mt-4 pb-4 text-gray-700 dark:text-gray-500 font-mono ">
                  {project.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 mb-2 px-3 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-[#181818] transition-colors flex items-center gap-2"
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
}
