import React from "react";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import LogoComponent from "./LogoComponent";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const App = () => {
  return (
    <div>
      <FloatingNav
        navItems={navItems}
        logo={<LogoComponent />} // Pass the logo here as a JSX element
      />
      {/* Other content of your page */}
      <main className="pt-20">
        <h1>Welcome to My Website</h1>
        <p>Explore our content and enjoy the experience!</p>
      </main>
    </div>
  );
};

export default App;
