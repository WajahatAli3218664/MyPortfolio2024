"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { cn } from "@//utils/cn";

export const FloatingNav = ({
  navItems,
  logo,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  logo: JSX.Element;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previous = 0;

    const unsubscribe = scrollYProgress.on("change", (current) => {
      const direction = current - previous;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
      previous = current;
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex justify-between items-center max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border-spacing-2 border-cyan-400 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "12px",
          border: "1px solid rgba(75, 85, 99, 1)",
        }}
      >
        {/** Logo on the left */}
        
        <div className="flex-shrink-0">{logo}</div>

        {/** Navigation Menu */}
        <div className="flex space-x-4 items-center">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-sky-300 hover:text-neutral-500 uppercase"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
