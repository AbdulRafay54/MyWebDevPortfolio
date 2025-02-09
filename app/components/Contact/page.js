"use client";

import React, { useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; 

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    Aos.init(); 
    Aos.refresh();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k33zyrh",
        "template_mbyahv8",
        form.current,
        "FCmysMJUuTU57e2lf"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Your message has been sent successfully",
          });
          form.current.reset(); 
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Failed to send message",
            text: "Try again later",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative text-white py-16 px-8 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">
        Contact <span className="text-purple-400">Me</span>
      </h1>

      <div
        className="flex items-center justify-center"
        data-aos="flip-up"
        data-aos-offset="300"
        data-aos-duration="600"
      >
        <div className="form-container">
          <form
            ref={form}
            onSubmit={sendEmail} 
            className="contact w-full lg:w-[1040px] md:w-[750px] sm:w-[580px] p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-white mb-6 text-center text-2xl font-bold">
              Get in Touch
            </h2>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mb-4 w-full p-3 rounded-md border border-gray-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mb-4 w-full p-3 rounded-md border border-gray-300"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="mb-4 w-full p-3 rounded-md border border-gray-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit w-full p-3 text-white rounded-md border-none cursor-pointer transition duration-300 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" />
              Send Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
