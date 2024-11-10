'use client'

import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillGithub, AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import {
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
    Aos.refresh();
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer-heading">Find Me On</h2>
      <p className="footer-subtext">
        Feel free to <span className=" text-purple-400 text-md">connect</span>{" "}
        with me
      </p>
      <div className="footer-iconContainer"
      >
        <Link
          href="https://github.com/AbdulRafay54"
          className="footer-iconLink "
          target="_blank"

        >
          <AiFillGithub  size={30}/>
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdul-rafay-37403b317/"
          target="_blank"
          className="footer-iconLink "
        >
            <FaLinkedin  size={30}/>
            </Link>
        <Link
          href="https://www.instagram.com/rafayartgallery/"
          target="_blank"
          className="footer-iconLink"
        >
            <FaInstagram size={30} />
            </Link>
        <Link
          href="mailto:rafayabdul7817@gmail.com"
          className="footer-iconLink  "
        >
          <AiTwotoneMail size={30}/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
