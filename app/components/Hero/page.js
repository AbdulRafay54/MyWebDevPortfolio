
"use client";

import Image from "next/image";
import React from "react";



const Hero = () => {
  return (
    <>
    <section className="  bg-gray-900 text-white h-screen flex flex-col md:flex-row justify-start items-center sm:px-6 md:px-8 lg:px-12">
        {/* Image */}
      <div className="img mb-8 md:mb-0 md:w-1/2 flex justify-center">
        <div className="  rounded-full border-4 border-gray-800 shadow-lg overflow-hidden">
          <Image
            src="/images/my-image.jpeg"
            alt="Avatar"
            width={300}
            height={300}
          />
        </div>
      </div>
      {/* content */}

      <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
        <p className=" text-sm sm:text-base md:text-lg text-purple-400 mb-1">
          Hello! I am <span className="text-blue-500 font-bold">Abdul Rafay</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-1">
          And
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 underline mb-1">
          A FrontEnd Developer
        </h2>
        <p className="text-xs sm:text-sm md:text text-gray-400 mb-4">
          Because if the cover does not impress you, what else can?
        </p>

        <div className="mt-5 space-y-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
            I'm a Software Engineer.
          </h3>
          <p className="text-sm sm:text md:text-lg mb-4">
            Currently, I'm a Front End Developer <span className="text-blue-500">Hello</span>
          </p>
        </div>

        <p className="text-xs sm:text-sm md:text text-gray-400 max-w-md">
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution, sometimes on purpose (injected humour and the like).
        </p>
      </div>


      
    </section>
    
{/* about */}

<section id="about" className="relative bg-gray-900 mt-[-180px] text-white py-16 px-8 flex flex-col items-center">


  <h1 className="text-4xl font-bold text-purple-400 mb-12">About</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
    
    <div className="about-card">
      <div className="flex justify-center mb-4 image-container">
        <Image
          src="/images/image.png"
          alt="Avatar"
          width={70}
          height={70}
        />
      </div>
      <h2>Frontend Developer</h2>
      <p>An empty string ("") was passed to the src attribute. This may cause the browser to download the wholT</p>
    </div>

    <div className="about-card">
      <div className="flex justify-center mb-4 image-container">
        <Image
          src="/images/image.png"
          alt="Avatar"
          width={60}
          height={60}
        />
      </div>
      <h2>Frontend Developer</h2>
      <p>Hello</p>
    </div>

    <div className="about-card">
      <div className="flex justify-center mb-4 image-container">
        <Image
          src="/images/image.png"
          alt="Avatar"
          width={60}
          height={60}
        />
      </div>
      <h2>FrontEnd Developer</h2>
      <p>Hello</p>
    </div>

    <div className="about-card">
      <div className="flex justify-center mb-4 image-container">
        <Image
          src="/images/image.png"
          alt="Avatar"
          width={60}
          height={60}
        />
      </div>
      <h2>Frontend Developer</h2>
      <p>Hello</p>
    </div>
  
  </div>
</section>

</>
  );
};

export default Hero;
