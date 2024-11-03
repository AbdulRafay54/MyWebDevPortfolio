"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import {
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

  const resumeUrl = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-4 shadow-md z-50 transition duration-300 ${
        isScrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-[#1a0b2e]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">
          <Link href="#home" className="logo">
            <span className="grey-color">&lt; </span>
            <span className="logo-name">Abdul Rafay </span>
            <span className="grey-color">/&gt;</span>
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <img
            src="https://www.shareicon.net/data/512x512/2017/05/09/885755_list_512x512.png"
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>

        <div className="hidden md:flex space-x-8 relative">
          <Link
            href="#home"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineHome className="mb-1" />
              <span className="ml-1 text-sm md:text-base">Home</span>
              <span className="underline"></span>
            </div>
          </Link>
          <Link
            href="#about"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineUser className="mb-1" />
              <span className="ml-1 text-sm md:text-base">About</span>
              <span className="underline"></span>
            </div>
          </Link>
          <Link
            href="#projects"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineFundProjectionScreen className="mb-1" />
              <span className="ml-2 text-sm md:text-base">Projects</span>
              <span className="underline"></span>
            </div>
          </Link>
          <Link
            href="#contact"
            className="nav-link flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <AiOutlineMail className="mb-1" />
              <span className="ml-1 text-sm md:text-base">Contact</span>
              <span className="underline"></span>
            </div>
          </Link>
          {/* Resume Link */}
          <Link
            href={resumeUrl}
            className="nav-link flex items-center space-x-2 group"
            onClick={handleDownload}
            target="_blank"
          >
            <div className="flex items-center">
              <CgFileDocument className="mb-1" />{" "}
              <span className="ml-1 text-sm md:text-base">Resume</span>
              <span className="underline"></span>
            </div>
          </Link>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}  p-4`}>
        <Link
          href="#home"
          className="nav-link block py-2 text-center"
          onClick={toggleMenu}
        >
          <div className="flex items-center justify-center">
            <AiOutlineHome className="mb-1" />
            <span className="ml-2 text-sm">Home</span>
          </div>
        </Link>
        <Link
          href="#about"
          className="nav-link block py-2 text-center"
          onClick={toggleMenu}
        >
          <div className="flex items-center justify-center">
            <AiOutlineUser className="mb-1" />
            <span className="ml-2 text-sm">About</span>
          </div>
        </Link>
        <Link
          href="#projects"
          className="nav-link block py-2 text-center"
          onClick={toggleMenu}
        >
          <div className="flex items-center justify-center">
            <AiOutlineFundProjectionScreen className="mb-1" />
            <span className="ml-2 text-sm">Projects</span>
          </div>
        </Link>
        <Link
          href="#contact"
          className="nav-link block py-2 text-center"
          onClick={toggleMenu}
        >
          <div className="flex items-center justify-center">
            <AiOutlineMail className="mb-1" />
            <span className="ml-2 text-sm">Contact</span>
          </div>
        </Link>
        <Link
          href={resumeUrl}
          className="nav-link block py-2 text-center"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
            handleDownload();
            window.open(e.currentTarget.href, "_blank");
          }}
        >
          <div className="flex items-center justify-center">
            <CgFileDocument className="mb-1" />
            <span className="ml-2 text-sm">Resume</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
