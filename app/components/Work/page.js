"use client";

import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
    Aos.refresh();
  }, []);
  return (
    <section
      id="work"
      className="relative text-white py-20 px-8 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center lg:mt-[-180px] sm:mt-[15px]"
      >
      <h1 className="text-4xl font-bold mb-12 text-center">
        Work <span className="text-purple-400"> Experience</span>
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
        data-aos="zoom-in-up"
      >
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
  );
};

export default Work;
