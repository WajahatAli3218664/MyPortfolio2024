"use client";
import React from "react";
import { AlignJustify } from "lucide-react"; // Ensure you have this import for the AlignJustify icon
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  // Implementing slideInFromLeft animation for framer-motion
  const slideInFromLeft = (
    duration: number
  ): import("framer-motion").Variants => ({
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
      },
    },
  });

  return (
    <div>
      <div className="w-full h-auto px-5 lg:px-12 py-10 ">
        <nav className="w-full h-10">
          <div className="w-full flex justify-between items-center relative h-16">
            <div className="relative uppercase text-lg font-bold text-white px-4">
              Wajahat<span className="bg-violet-500 rounded-md">Ali</span>
              <span className="h-3 w-3 bg-violet-500 rounded-full absolute top-0 right-0"></span>
            </div>
            <AlignJustify
              size={24}
              className="block lg:hidden hover:opacity-80 transition text-gray-100"
            />
          </div>
        </nav>
        <section className="flex flex-col lg:flex-row h-auto w-full my-20">
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl md:text-2xl lg:text-2xl max-w-sm relative">
              <span className="text-lg text-gray-400 my-5 max-w-[600px]">
                Hello there, I am a{" "}
              </span>
            </h4>

            {/* Typewriter Effect */}
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-sky-400">
              <Typewriter
                options={{
                  strings: [
                    "Creative Coder,",
                    "Innovative Builder,",
                    "Passionate Programmer,",
                    "Ideas to Reality.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <motion.p
              variants={slideInFromLeft(0.8)}
              initial="hidden"
              animate="show"
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              A meticulous BBA student and software aficionado with over a
              <span className="text-violet-500 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-cyan-500">
                {" "}
                decade of experience{" "}
              </span>
              in bringing innovative ideas to life. My journey is fueled by a
              passion for crafting
              <span className="text-violet-500 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-cyan-500">
                {" "}
                high-quality web and back-end applications,{" "}
              </span>
              transforming complex challenges into seamless solutions. Check out
              my projects and skills.
            </motion.p>

            <div className="mt-10 h-12 flex items-center justify-start gap-3">
              <a
                href="https://github.com/WajahatAli3218664" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-1.5 h-12 text-black bg-sky-400 rounded-lg hover:opacity-75 transition-all duration-300"
              >
                <FaGithub size={20} /> {/* GitHub Icon */}
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/wajahat-ali-3189862b4" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-white rounded-lg hover:opacity-75 transition-all duration-300"
              >
                <FaLinkedin size={20} /> {/* LinkedIn Icon */}
                LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full h-auto gap-2 lg:divide-x divide-gray-500 place-content-center">
              <div className="w-full h-20 px-5 flex lg:block items-center justify-center">
                <h2 className="text-5xl font-bold text-violet-500 hover:text-cyan-500">
                  12<span className="text-white ">+</span>
                </h2>
                <h3 className="text-gray-300 text-sm mt-2">
                  TypeScript Projects
                </h3>
              </div>
              <div className="w-full h-20 px-5 flex lg:block items-center justify-center">
                <h2 className="text-5xl font-bold text-violet-500 hover:text-cyan-500">
                  15<span className="text-white">+</span>
                </h2>
                <h3 className="text-gray-300 text-sm mt-2">
                  Websites Built with AI
                </h3>
              </div>
              <div className="w-full h-20 px-5 flex lg:block items-center justify-center">
                <h2 className="text-5xl font-bold text-violet-500 hover:text-cyan-500">
                  8<span className="text-white ">+</span>
                </h2>
                <h3 className="text-gray-300 text-sm mt-2">Next.js Coders</h3>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center h-screen">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <h2 className="text-white text-center font-bold hover:text-sky-300">
                    {[
                      { text: "C", rotate: 0 },
                      { text: "o", rotate: 30 },
                      { text: "d", rotate: 60 },
                      { text: "e", rotate: 90 },
                      { text: "r", rotate: 120 },
                      { text: " ", rotate: 150 },
                      { text: "A", rotate: 180 },
                      { text: "t", rotate: 210 },
                      { text: " ", rotate: 240 },
                      { text: "G", rotate: 270 },
                      { text: "I", rotate: 300 },
                      { text: "A", rotate: 330 },
                      { text: "I", rotate: 360 },
                      { text: "C", rotate: 390 },
                      { text: " ", rotate: 420 },
                      { text: "Q", rotate: 450 },
                      { text: "u", rotate: 480 },
                      { text: "a", rotate: 510 },
                      { text: "r", rotate: 540 },
                      { text: "t", rotate: 570 },
                      { text: "e", rotate: 600 },
                      { text: "r", rotate: 630 },
                      { text: " ", rotate: 660 },
                      { text: "2", rotate: 690 },
                    ].map(({ text, rotate }, index) => (
                      <motion.span
                        key={index}
                        className="block"
                        style={{ transform: `rotate(${rotate}deg)` }}
                        initial={{ scale: 1 }} // Start at scale 1
                        animate={{
                          scale: [1, 1.2, 1], // Scale to 1.2 and back to 1
                        }}
                        transition={{
                          duration: 0.5, // Duration of the animation
                          repeat: Infinity, // Repeat indefinitely
                          repeatType: "loop", // Loop type
                          delay: index * 0.1, // Staggered delay for each letter
                        }}
                      >
                        {text}
                      </motion.span>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Bid Section */}
          <div className="relative w-full lg:w-1/2 lg:px-10 flex justify-center">
            {/* Art Background Image */}
            <img
              src="https://utfs.io/f/d51769d9-d155-4c71-8999-9069edf34040-ym3cpl.png"
              alt="Art Background"
              className="h-auto w-[30%] absolute top-0 left-10 z-30" // Increased width
            />

            {/* Profile Image with Bid Section Overlay */}

            <div className="relative z-20">
              {/* Profile Image with Bid Section Overlay */}
              <img
                src="/images/profile.jpg" // Ensure this path is correct
                alt="Profile"
                className="h-[100px] w-[200px] md:w-[100%] md:h-[70%] border-2 border-transparent hover:border-cyan-500 transition-all duration-300"
              />

              {/* Bid Section overlaid on Profile Image */}
              <div className=" bottom-0 left-0 w-full bg-slate-900 bg-opacity-80 border-t border-violet-500 rounded-b-xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-violet-500">Roll No</p>
                    <p className="text-sm text-white">00:10:33:69</p>
                  </div>
                  <div>
                    <p className="text-sm text-violet-500">Current Project</p>
                    <p className="text-sm text-white">03 OnGoing</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 w-full text-cyan-500 border border-sky-500 rounded-lg hover:opacity-75 transition-all duration-300">
                  Hire Me..!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
