"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init(); 
    Aos.refresh();
  }, []);
  return (
    <section
      id="about"
      className="text-white mt-[-40px] py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center max-w-5xl mx-auto rounded-lg mt-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        About <span className="text-purple-400"> Me</span>
      </h1>

      <div
        className="flex flex-col md:flex-row items-center justify-between w-full"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold text-white mb-2">
            Know Who <span className="text-purple-400">I'M</span>
          </h2>
          <p className="text-lg mb-2 ">
            Hi Everyone
            <span className="wave-icon">👋🏼</span>, I am{" "}
            <span className="text-purple-500 font-bold">Abdul Rafay</span> from{" "}
            <span className="text-purple-500">Karachi, Pakistan</span>.
          </p>
          <p className="text-gray-300 mb-4">
            I am a Frontend Developer specializing in
            building interactive and user-friendly web applications.
          </p>
          <p className="text-gray-300 mb-6">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center text-gray-300">
              <span className="mr-2">➤</span> Calligraphy
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2">➤</span> Sketching
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2">➤</span> Cooking
            </li>
          </ul>
        </div>

        <div className="w-40 sm:w-48 md:w-60 rounded-full border-4 border-gray-800 shadow-lg overflow-hidden">
          <Image
            src="/images/about1.png"
            alt="Avatar"
            width={240}
            height={240}
            className="object-cover"
          />
        </div>
      </div>

      <h3 className="text-3xl font-bold mt-12 mb-8 text-center text-white">
        Professional <span className="text-purple-400">Skillset</span>
      </h3>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex items-center justify-center  rounded-full-icon w-16 h-16 p-2 shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
            alt="HTML"
            className="w-12 h-12"
          />
        </div>
        <div className="flex items-center justify-center  rounded-full-icon w-16 h-16 p-2 shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png"
            alt="CSS"
            className="w-12 h-12"
          />
        </div>
        <div className="flex items-center justify-center  rounded-full-icon w-16 h-16 p-2 shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
            alt="JavaScript"
            className="w-12 h-12"
          />
        </div>
        <div className="flex items-center justify-center  rounded-full-icon w-16 h-16 p-2 shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
            alt="React"
            className="w-12 h-12"
          />
        </div>
        <div className="flex items-center justify-center  rounded-full-icon w-16 h-16 p-2 shadow-lg">
          <img src="/images/next.png" alt="Next.js" className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
};

export default About;
