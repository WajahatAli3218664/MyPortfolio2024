import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data"; // Adjust the import according to your file structure
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      <div className="absolute w-full left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Header section */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Let’s Work Together
          <br />
          <span className="text-purple">Turn Your</span>
          <br />
          Vision Into Reality
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="wajahat345678@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer section */}
      <div className="flex flex-col items-center mt-16 w-full px-4">
        <p className="md:text-purple text-sm md:font-normal font-light text-center">
          Wajahat Ali ©2024 All Rights Reserved.
        </p>

        {/* Social media icons inline */}
        <div className="flex flex-row items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center 
                         backdrop-filter backdrop-blur-lg bg-opacity-75 
                         bg-black-200 rounded-lg border border-black-300 
                         transition-transform transform hover:scale-110 
                         hover:bg-opacity-100 hover:border-purple"
            >
              <info.icon className="text-white text-xl transition-colors duration-200 hover:text-purple" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
