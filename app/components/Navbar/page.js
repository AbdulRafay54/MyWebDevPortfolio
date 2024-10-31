"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-4 shadow-md z-50 transition duration-300 ${
        isScrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-[#1a0b2e]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">
          <Link href="#home" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Abdul Rafay</span>
            <span className="grey-color">/&gt;</span>
          </Link>
        </div>

        {/* Hide menu icon on md screens and above */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <img
            src="https://www.shareicon.net/data/512x512/2017/05/09/885755_list_512x512.png"
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>

        {/* Navigation links, visible on md screens and above */}
        <div className="hidden md:flex space-x-8 relative">
          <Link href="/" className="nav-link flex items-center space-x-2 group">
            <div className="flex items-center">
              <AiOutlineHome />
              <span className="ml-1 text-sm md:text-base">Home</span>
              <span className="underline"></span>
            </div>
          </Link>
          <Link
            href="#about"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineUser />
              <span className="ml-1 text-sm md:text-base">About</span>
              <span className="underline"></span>
            </div>
          </Link>
          <Link
            href="#portfolio"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineFundProjectionScreen />
              <span className="ml-2 text-sm md:text-base">Projects</span>
              <span className="underline"></span>
            </div>
          </Link>
          <Link
            href="/contact"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineMail />
              <span className="ml-1 text-sm md:text-base">Contact</span>
              <span className="underline"></span>
            </div>
          </Link>
          {/* Resume Link */}
          <Link
            href="/path/to/your/resume.pdf"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <CgFileDocument />{" "}
              <span className="ml-1 text-sm md:text-base">Resume</span>
              <span className="underline"></span>
            </div>
          </Link>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}
      >
        <Link
          href="/"
          className="nav-link block py-2 relative"
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <AiOutlineHome />
            <span className="ml-2 text-sm">Home</span>
          </div>
        </Link>
        <Link
          href="#about"
          className="nav-link block py-2 relative"
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <AiOutlineUser />
            <span className="ml-2 text-sm">About</span>
          </div>
        </Link>
        <Link
          href="/projects"
          className="nav-link block py-2 relative"
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <AiOutlineFundProjectionScreen />
            <span className="ml-2 text-sm">Projects</span>
          </div>
        </Link>
        <Link
          href="/contact"
          className="nav-link block py-2 relative"
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <AiOutlineMail />
            <span className="ml-2 text-sm">Contact</span>
          </div>
        </Link>
        {/* Resume Link for dropdown */}
        <Link
          href="/path/to/your/resume.pdf"
          className="nav-link block py-2 relative"
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <CgFileDocument /> <span className="ml-2 text-sm">Resume</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
