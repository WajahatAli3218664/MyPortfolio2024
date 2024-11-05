"use client";

import { navItems } from "@/data"; // Import navigation items from data
import Hero from "@/components/Hero"; // Import Hero component

import Footer from "@/components/Footer"; // Import Footer component
import Clients from "@/components/Clients"; // Import Clients component
import Approach from "@/components/Approach"; // Import Approach component
import Experience from "@/components/Experience"; // Import Experience component

import { FloatingNav } from "@/components/ui/FloatingNavbar"; // Import Floating Navbar component
import Giaic from "@/components/Giaic";
import Skills from "@/components/Skills";
import SkillExperience from "@/components/ui/SkillExperience";
import LogoComponent from "@/components/LogoComponent"; // Import your logo component

import RecentProject from "@/components/RecentProject";
import Milestones from "@/components/Milestones";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} logo={<LogoComponent />} />{" "}
        {/* Pass navItems and logo */}
        <Hero /> {/* Render Hero Section */}
        <Experience /> {/* Render Experience Section */}
        <Skills />
        <SkillExperience />
        <Giaic />
        <Milestones />
        <RecentProject />
        <Approach />
        <Clients /> {/* Render Clients Section */}
        <Footer /> {/* Render Footer Section */}
      </div>
    </main>
  );
};

export default Home; // Export Home component
