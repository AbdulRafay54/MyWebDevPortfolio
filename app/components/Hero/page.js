"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
    {/* profile section */}
      <section className="text-white min-h-screen flex flex-col md:flex-row justify-center items-center sm:px-6 md:px-8 lg:px-12">
  <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center mt-6 sm:mt-8 md:mt-12">
    <div className="rounded-full border-4 border-gray-800 shadow-lg overflow-hidden">
      <Image
        src="/images/my-image.jpeg"
        alt="Avatar"
        width={300}
        height={300}
        className="w-full h-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] object-cover"
      />
    </div>
  </div>

  <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left px-4 sm:px-8">
    <p className="text-sm sm:text-base md:text-lg text-purple-400 mb-1">
      Hello! I am{" "}
      <span className="text-blue-500 font-bold">Abdul Rafay</span>
    </p>
    <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-1">And</p>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400  mb-1">
      A FrontEnd Developer
    </h2>
    <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4">
      Because if the cover does not impress you, what else can?
    </p>

    <div className="mt-5 space-y-1">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
        I'm a Software Engineer.
      </h3>
      <p className="text-sm sm:text-base md:text-lg mb-4">
        Currently, I'm a Front End Developer{" "}
        <span className="text-blue-500">Hello</span>
      </p>
    </div>

    <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-md">
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution, sometimes on purpose (injected humour and the like).
    </p>
  </div>
</section>

{/* Work Experience section*/}
<section
  id="work-experience"
  className="relative mt-[-100px]  text-white py-16 px-8 flex flex-col items-center"
>
  <h1 className="text-4xl font-bold mb-12 text-center">Work Experience</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
    <div className="work-experience flex flex-col items-center">
      <h2>HTML, CSS, JS</h2>
      <div className="flex justify-center mb-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
          alt="HTML Icon"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png"
          alt="CSS Icon"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
          alt="JavaScript Icon"
          width={40}
          height={40}
        />
      </div>
      <p>Experience in HTML, CSS, and JavaScript development.</p>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/9489/9489913.png"
        alt="Star Icon"
        width={50}
        height={50}
        className="mt-4"
      />
    </div>
    <div className="work-experience flex flex-col items-center">
      <h2>REACT</h2>
      <div className="flex justify-center mb-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
          alt="React Icon"
          width={40}
          height={40}
        />
      </div>
      <p>Experience in building dynamic web applications using React.</p>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/9489/9489913.png"
        alt="Star Icon"
        width={50}
        height={50}
        className="mt-4"
      />
    </div>
    <div className="work-experience flex flex-col items-center">
      <h2>NEXTJS</h2>
      <div className="flex justify-center mb-4">
        <Image
          src="/images/next.png"
          alt="Next.js Icon"
          width={40}
          height={40}
        />
      </div>
      <p>
        Experience in server-side rendering and static site with Next.js.
      </p>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/9489/9489909.png"
        alt="Star Icon"
        width={50}
        height={50}
        className="mt-4"
      />
    </div>
    <div className="work-experience flex flex-col items-center">
      <h2>REACT NATIVE</h2>
      <div className="flex justify-center mb-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/3379/3379166.png"
          alt="React Native Icon"
          width={40}
          height={40}
        />
      </div>
      <p>Experience in mobile app development using React Native.</p>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/929/929424.png"
        alt="Star Icon"
        width={40}
        height={40}
        className="mt-4"
      />
    </div>
  </div>
</section>

      {/* About Section */}

      <section
  id="about"
  className="text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center max-w-5xl mx-auto rounded-lg mt-20"
>
  <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h1>

  <div className="flex flex-col md:flex-row items-center justify-between w-full">
    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
      <h2 className="text-3xl font-semibold text-purple-400 mb-2">
        Know Who <span className="text-purple-500">I'M</span>
      </h2>
      <p className="text-lg mb-2 ">
        Hi Everyone 
        <span className="wave-icon">👋</span>
        , I am{" "}
        <span className="text-purple-400 font-bold">Abdul Rafay</span> from{" "}
        <span className="text-purple-400">Karachi, Pakistan</span>.
      </p>
      <p className="text-gray-300 mb-4">
        I am a Software Engineer, a Frontend Developer specializing in building
        interactive and user-friendly web applications.
      </p>
      <p className="text-gray-300 mb-6">
        Apart from coding, some other activities that I love to do!
      </p>
      <ul className="list-none space-y-2 mb-6">
        <li className="flex items-center text-gray-300">
          <span className="mr-2">╰┈➤</span> Cooking
        </li>
        <li className="flex items-center text-gray-300">
          <span className="mr-2">╰┈➤</span> Calligraphy
        </li>
        <li className="flex items-center text-gray-300">
          <span className="mr-2">╰┈➤</span> Sketching
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

  <h3 className="text-3xl font-bold mt-12 mb-8 text-center text-purple-400">
    Professional <span className="text-purple-500">Skillset</span>
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
      <img
        src="/images/next.png"
        alt="Next.js"
        className="w-12 h-12"
      />
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
