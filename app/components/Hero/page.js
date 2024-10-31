"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
    Aos.refresh
  }, []);
  return (
    <>
      {/* profile section */}
      <section
        id="#home"
        className=" text-white min-h-screen flex flex-col md:flex-row justify-center items-center sm:px-6 md:px-8 lg:px-12 space-y-8 md:space-y-0"
      >
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center mt-6 sm:mt-8 md:mt-12">
          <div className="rounded-full border-4 border-gray-800 shadow-lg overflow-hidden">
            <Image
              src="/images/my-image.jpeg"
              alt="Avatar"
              width={300}
              height={300}
              className="w-full h-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left px-4 sm:px-6 lg:px-8 xl:px-12 space-y-2 md:space-y-3">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-400 mb-1 md:mb-2">
            Hello! <span className="wave-icon">👋</span> I am{" "}
            <span className="text-blue-500 font-bold">Abdul Rafay</span>
          </p>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-400 mb-1 md:mb-2">
            <Typewriter
              options={{
                strings: [
                  "A FrontEnd Developer",
                  "A Web Designer",
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
              with <span className="text-blue-500">ReactJS and Next.js</span>
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
