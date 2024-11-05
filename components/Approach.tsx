"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { BsFillPeopleFill } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import {
  FaBook,
  FaUsers,
  FaRocket,
  FaAccusoft,
  FaBlogger,
} from "react-icons/fa"; 

type ApproachedDataType = {
  [key: string]: {
    description: string;
    tabs: {
      [key: string]: string;
    };
  };
};

const approachedData: ApproachedDataType = {
  "My Learning Resources": {
    description:
      "My resources that utilize to enhance my skills in Next.js and Web Development.",
    tabs: {
      Books:
        "My learning journey has been enriched by various books that offer insights into programming concepts and best practices.",
      "Online Courses":
        "I have taken several courses from platforms like Udemy, Coursera, and freeCodeCamp that have significantly contributed to my growth as a developer.",
      "Blogs & Tutorials":
        "I find the tutorials on freeCodeCamp's YouTube channel particularly helpful, as they guide aspiring developers through essential concepts and practical applications.",
    },
  },
  "Development & Progress Update": {
    description:
      "Involvement in the tech community and any contributions I've made.",
    tabs: {
      "Open Source Contributions":
        "I have contributed to projects like a to-do list app, a countdown timer, and various React Native applications.",
      Mentorship:
        "My journey has been greatly supported by my teachers on various platforms, who provide guidance and encouragement.",
    },
  },
  "Future Aspirations": {
    description:
      "Future goals and aspirations in my career and learning journey.",
    tabs: {
      "Short-Term Goals":
        "I aim to master a new framework and develop an e-commerce platform utilizing APIs.",
      "Long-Term Vision":
        "My goal is to pursue freelancing while becoming a proficient web developer and eventually transitioning into a tech lead role.",
      "Skills to Learn":
        "I plan to focus on enhancing my skills in technologies such as TypeScript, Python, AI, blockchain, and MySQL.",
    },
  },
};

const Approached = () => {
  const [activeCategory, setActiveCategory] = useState<
    keyof typeof approachedData
  >("My Learning Resources");
  const [activeTab, setActiveTab] = useState<string>("Books");

  const currentCategory = approachedData[activeCategory];

  return (
    <div className="py-10 w-full max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg mt-7">


      <h5 className="heading mt-24">
      Odyssey
        <span className="text-purple"> Digital </span>
       Frontier
      </h5>
      <br />
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-6" />
<br />

      <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />

      {/* Category Tabs */}
      <div className="flex justify-center gap-5 mb-8">
        {Object.keys(approachedData).map((category) => (
          <motion.button
            key={category}
            className={`py-3 px-5 transition-all duration-300 ease-in-out rounded-lg shadow-lg flex items-center gap-2 ${
              activeCategory === category
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-purple-300"
            }`}
            onClick={() => {
              setActiveCategory(category as keyof typeof approachedData);
              setActiveTab(
                Object.keys(
                  approachedData[category as keyof typeof approachedData].tabs
                )[0]
              );
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on tap
          >
            {category === "My Learning Resources" && <FaBook />}
            {category === "Development & Progress Update" && <FaUsers />}
            {category === "Future Aspirations" && <FaRocket />}
            {category}
          </motion.button>
        ))}
      </div>
<br />
      {/* Description */}
      <motion.p
        className="text-gray-100 text-lg mb-5 text-center px-4"
        initial={{ opacity: 0 }} // Initial state for animation
        animate={{ opacity: 1 }} // Animate to this state
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        {currentCategory.description}
      </motion.p>

      {/* Tabs */}
      <div className="flex justify-center gap-5 mb-4">
        {Object.keys(currentCategory.tabs).map((tab) => (
          <motion.button
            key={tab}
            className={`py-2 px-4 transition-colors duration-300 ease-in-out rounded-lg shadow-lg ${
              activeTab === tab
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-blue-700 hover:bg-purple-300"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on tap
          >
            {tab === "Online Courses" && <FaAccusoft />}
            {tab === "Books" && <FaBook />}
            {tab === "Blogs & Tutorials" && <FaBlogger />}
            {tab === "Open Source Contributions" && <FaUsers />}
            {tab === "Mentorship" && <BsFillPeopleFill />}
            {tab === "Short-Term Goals" && <FaRocket />}
            {tab === "Long-Term Vision" && <GiStairsGoal />}
            {tab === "Skills to Learn" && <GrCloudComputer />}
            {tab}
          </motion.button>
        ))}
      </div>
<br />
      {/* Content */}
      <motion.div
        className="bg-gray-100 p-5 rounded-lg text-gray-900 shadow-md"
        initial={{ opacity: 0 }} // Initial state for animation
        animate={{ opacity: 1 }} // Animate to this state
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        {currentCategory.tabs[activeTab]}
      </motion.div>
    </div>
  );
};

export default Approached;
