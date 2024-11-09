import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "aos/dist/aos.css";
const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center max-w-6xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Recent <span className="text-purple-400">Works</span>
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Here are a few projects I've worked on recently.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="zoom-in-up"
      >
        {/* Project Card 1 */}
        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/laptop-blog.png"
            alt="Blogging Website"
            width={300}
            height={180}
            className="rounded-lg mb-4"
            crossOrigin="anonymous"
          />
          <h2 className="text-xl font-semibold mb-2">Blogging Website</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            Introducing the Blogging App. Built with React, this app enables
            users to easily create, edit, and delete blogs, enhancing the
            blogging experience.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Blogging-App"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://blogging-app-eg84.vercel.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/laptop-weather.png"
            alt="Weather app"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Weather App</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            Introducing the Weather App. Developed with React, this app delivers
            real-time weather updates to make daily planning easier for users{" "}
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Weather-App"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://weather-app-eight-eta-31.vercel.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className=" portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/laptop-ecommerce.png"
            alt="Ecommerce app"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Ecommerce Website</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            The E-commerce App is a powerful platform built with React,
            displaying products seamlessly using API integration.
          </p>
          <div className="  flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Ecommerce-App-"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://ecommerce-app-xi-lovat.vercel.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
        {/* 4 */}
        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/duroodsharif.png"
            alt="duroodsharif"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Durood-e-Pak Counter</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            The Durood-e-Pak Counter App, developed in React, helps users easily
            track and manage their recitations with a simple interface.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Durood-Sharif-Counter"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://durood-sharif-counter.vercel.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
        {/* 5 */}
        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/text-editor.png"
            alt="Ecommerce app"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Text Editor App</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            The Text Editor App is a simple tool using HTML, CSS, and
            JavaScript, enabling users to write and format text easily.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Text-Editor-App"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://sparkly-syrniki-6afcbd.netlify.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
        {/* 6 */}

        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/bulb.png"
            alt="Ecommerce app"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Bulb Glowing App</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            The Bulb Glowing App is a simple platform created with HTML and CSS,
            allowing users to control a glowing bulb with a button.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Css-bulb"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://imaginative-faloodeh-1071cf.netlify.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
        {/* 7 */}

        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/stopwatch.png"
            alt="Stop Watch"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Stop Watch App</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            A stopwatch has been created using HTML, CSS, and JavaScript,
            providing users with a simple interface to track time efficiently.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Stop-Watch-JS"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://stellar-heliotrope-bdd136.netlify.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
        {/* 8 */}

        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/calculator.png"
            alt="Ecommerce app"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Calculator App</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            This calculator app, created with HTML and JavaScript, allows users
            to perform basic arithmetic calculations easily.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Calculator-Js"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://calm-parfait-ea916b.netlify.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
        {/* 9 */}

        <div className="portfolio-card flex flex-col items-center p-6 rounded-lg shadow-lg">
          <Image
            src="/images/password.png"
            alt="Ecommerce app"
            width={300}
            height={180}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Password Generator App</h2>
          <p className="text-gray-400 text-sm mb-4 text-center">
            This password generator, built with HTML, CSS, and JavaScript,
            creates strong, random passwords for enhanced security
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AbdulRafay54/Password-generator"
              className="portfolio-button"
              target="_blank"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>

            <Link
              href="https://leafy-strudel-55ec12.netlify.app/"
              className="portfolio-button"
              target="_blank"
            >
              <FiExternalLink className="mr-2" /> Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
