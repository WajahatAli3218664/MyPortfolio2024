import React from 'react';
import { motion } from 'framer-motion';

export default function SkillExperience() {
  return (
    <div>
      <section className="text-gray-700 body-font "> {/* Added a background for better contrast */}
        <div className="flex justify-center mt-10 font-regular text-white">
        My Diverse Skill Set: Integrating Technical Expertise, Creative Design, and Strategic Marketing to Deliver Impactful Results
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {/** Animate each card with Framer Motion **/}
            {[
              {
                imgSrc: "/creative.svg",
                title: "Learning and Adaptation",
              },
              {
                imgSrc: "/grad.svg",
                title: "Project Experience",
              },
              {
                imgSrc: "/progress.svg",
                title: "Peers To Tackle Challenges",
              },
              {
                imgSrc: "/marketing.svg",
                title: "Value Constructive Feedback",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 md:w-1/4 sm:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }} // Initial state
                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
              >
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110  rounded-lg shadow-lg"> {/* Background and shadow */}
                  <div className="flex justify-center">
                    <img src={item.imgSrc} className="w-32 mb-3" />
                  </div>
                  <h2 className="title-font font-regular text-white"> {/* Changed to text-white */}
                    {item.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
