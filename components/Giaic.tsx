import React from "react";

export default function Giaic() {
  return (
    <div>
      <section className="mt-24">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-indigo-500 ">
            Upcoming section showcases my journey and passion for learning
            Next.js in Govornor House.
          </p>

          <h1 className="mt-2 text-8xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
            Crafting My Path in Web Development
          </h1>
          <br />
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-6" />

          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full -z-10 md:h-96 rounded-2xl hover:ease-in-out"></div>

            <div className="w-full p-6 bg-indigo-200 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-100 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl border-4 border-cyan-400 hover:ease-in-out"
                src="../images/mom.png"
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">
                    Hello!  I am Wajahat Ali,
                  </p>
                  <p className="text-cyan-400 uppercase ">
                    Igniting Passion for Coding and Creativity
                  </p>
                </div>
                <p></p>
                <p className="mt-4 leading-relaxed text-white">
                  {" "}
                  As a beginner, I focus on mastering the foundational skills
                  that allow me to build dynamic and responsive websites. I am
                  currently diving into Next.js and Tailwind CSS, exploring the
                  endless possibilities these technologies offer. My goal is to
                  create engaging user experiences that merge functionality with
                  aesthetics.
                </p>
                <br />
                <p className="text-cyan-400 uppercase">
                  Embarking on my web development journey
                </p>

                <p className="mt-4 leading-relaxed text-white">
                  {" "}
                  I truly enjoy being part of these classes, where I can learn
                  from my instructor and discover my potential in web
                  development. Together, we delve into the capabilities of
                  Next.js and work on creating beautiful, dynamic websites.
                </p>
                <br />
                <p className="text-cyan-400 uppercase ">
                  multifaceted approach to learning
                </p>

                <p className="mt-4 leading-relaxed text-white">
                  {" "}
                  drawing insights from books, online courses, and hands-on
                  projects. I enjoy collaborating with fellow developers and
                  sharing knowledge, as I think it enriches the learning
                  experience. I am committed to continuous growth and staying
                  updated with industry trends to enhance my skills further
                </p>

                <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-cyan-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    title="right arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-cyan-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>

        <section className="relative text-gray-400  body-font">
          {/* Overlay to slightly darken video for readability */}
          <div className="absolute top-0 left-0 w-full h-full  opacity-50 z-10"></div>

          {/* Section Content */}
          <div className="relative z-20 container px-2 py-4 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-cyan-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                NEXT JS LEARNING MADE EASY{" "}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                Happy Coding
              </h2>
              <p className="text-cyan-500">Keep Scrolling</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
