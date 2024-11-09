"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
    Aos.refresh();
  }, []);

  return (
    <>
      {/* profile section */}

      <section
        id="home"
        className="text-white min-h-screen flex flex-col md:flex-row justify-center items-center sm:px-6 md:px-8 lg:px-12 space-y-8 md:space-y-0 mt-16"
      >
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center mt-6 sm:mt-4 md:mt-12 image-shift-up">
          <div className="profile-img overflow-hidden relative mt-12 md:mt-16 sm:mt-10">
            <Image
              src="/images/profile1.png"
              crossOrigin="anonymous"
              priority
              alt="Avatar"
              width={400}
              height={500}
              className="object-cover max-w-full h-auto sm:w-56 sm:h-72 md:w-80 md:h-96 lg:w-96 lg:h-[430px]"
            />
            <div className="glowing-underline"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left px-4 sm:px-6 lg:px-8 xl:px-12 space-y-2 md:space-y-3 lg-fade-left">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-300 mb-1 md:mb-2">
            Hello! <span className="wave-icon">👋🏼</span> I am{" "}
            <span className="name text-purple-500 font-bold">Abdul Rafay</span>
          </p>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-400 mb-1 md:mb-2">
            <Typewriter
              options={{
                strings: [
                  "A Frontend Developer",
                  "A React Enthusiast",
                  "A UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-2 md:mb-3 leading-relaxed md:leading-loose">
            "Code is where my creativity meets technology."
          </p>

          <div className="mt-4 space-y-1 md:space-y-2">
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">
              I'm a Frontend Developer with a vision.
            </h3>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 md:mb-3 leading-relaxed md:leading-loose">
              Currently, I'm focusing on building interactive web experiences
              with <span className="text-purple-500">ReactJS and NextJS</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed md:leading-loose">
            I'm committed to designing solutions that make an impact, blending
            functionality with aesthetics.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
