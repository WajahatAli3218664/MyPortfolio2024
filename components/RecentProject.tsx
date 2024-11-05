"use client";

import { FaGithub } from "react-icons/fa";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-24 mb-10" id="projects">
      <h1 className="heading">
        A Glimpse into Some of {" "}
        <span className="text-purple">My Recent Work</span>
      </h1>
      <div className="grid  md:grid-cols-2 gap-y-50 gap-x-20 mt-40 px-4 sm:gap-64 ">
     
        {projects.map((item) => (
          <div
            className="flex items-center justify-center"
            key={item.id}
          >
            <PinContainer
              title="https://github.com/WajahatAli3218664"
              href="https://twitter.com/wajahatali"
            >
              <div className="relative flex items-center justify-center sm:w-[470px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-purple line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light line-clamp-2 text-white"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-cyan-500 font-bold">
                    Git Hub
                  </p>
                  <FaGithub className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
