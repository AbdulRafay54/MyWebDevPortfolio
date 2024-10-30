"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a0b2e] p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">
          <Link href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Abdul Rafay</span>
            <span className="grey-color">/&gt;</span>
          </Link>{" "}
        </div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <img
            src="https://www.shareicon.net/data/512x512/2017/05/09/885755_list_512x512.png"
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>

        <div className="hidden md:flex space-x-8">
          <Link
            className="text-gray-300 hover:text-white text-lg font-bold transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-300 hover:text-white text-lg font-bold transition duration-300"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-gray-300 hover:text-white text-lg font-bold transition duration-300"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-gray-300 hover:text-white text-lg font-bold transition duration-300"
            href="/product"
          >
            Product
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}
      >
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          href="/"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          href="#about"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          href="/contact"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <Link
          className="block text-gray-300 hover:text-white text-lg py-2"
          href="/product"
          onClick={toggleMenu}
        >
          Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
