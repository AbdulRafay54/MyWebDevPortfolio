
"use client";

import Image from "next/image";
import React from "react";





const Hero = () => {
  return (
    <>
   <section className=" bg-gray-900 text-white h-screen flex flex-col md:flex-row justify-start items-center sm:px-6 md:px-8 lg:px-12">
  {/* Image */}
  <div className="img mb-8 md:mb-0 md:w-1/2 flex justify-center mt-6 sm:mt-8 md:mt-12">
    <div className="rounded-full border-4 border-gray-800 shadow-lg overflow-hidden">
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
    <p className="text-sm sm:text-base md:text-lg text-purple-400 mb-1">
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
  <h1 className="text-4xl font-monobold mb-12">Work Experience</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">

    <div className="about-card card flex flex-col items-center">
      <h2>HTML , CSS , JS</h2>
      <div className="flex justify-center mb-4">
        <Image src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="HTML Icon" width={40} height={40} />
        <Image src="https://cdn-icons-png.flaticon.com/128/11516/11516361.png" alt="CSS Icon" width={40} height={40} />
        <Image src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="JavaScript Icon" width={40} height={40} />
      </div>
      <p>Experience in HTML, CSS, and JavaScript development.</p>
      <Image src="https://cdn-icons-png.flaticon.com/128/9489/9489913.png" alt="Star Icon" width={50} height={50} className="mt-4" />
    </div>

    <div className="about-card flex flex-col items-center">
      <h2>REACT</h2>
      <div className="flex justify-center mb-4">
        <Image src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png" alt="React Icon" width={40} height={40} />
      </div>
      <p>Experience in building dynamic web applications using React.</p>
      <Image src="https://cdn-icons-png.flaticon.com/128/9489/9489913.png" alt="Star Icon" width={50} height={50} className="mt-4" />
    </div>

    <div className="about-card flex flex-col items-center">
      <h2>NEXTJS</h2>
      <div className="flex justify-center mb-4">
        <Image src="/images/next.png" alt="Next.js Icon" width={40} height={40} />
      </div>
      <p>Experience in server-side rendering and static site with Next.js.</p>
      <Image src="https://cdn-icons-png.flaticon.com/128/9489/9489909.png" alt="Star Icon" width={50} height={50} className="mt-4" />
    </div>

    <div className="about-card flex flex-col items-center">
      <h2>REACT NATIVE</h2>
      <div className="flex justify-center mb-4">
        <Image src="https://cdn-icons-png.flaticon.com/128/3379/3379166.png" alt="React Native Icon" width={40} height={40} />
      </div>
      <p>Experience in mobile app development using React Native.</p>
      <Image src="https://cdn-icons-png.flaticon.com/128/929/929424.png" alt="Star Icon" width={40} height={40} className="mt-4" />
    </div>
  
  </div>
</section>

{/* #FFC400 */}

</>
  );
};

export default Hero;
