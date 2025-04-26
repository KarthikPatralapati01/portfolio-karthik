"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import HomeButton from "./HomeButton"; // ✅ Correct casing

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold uppercase tracking-[10px] text-gray-400 mb-6">
        Contact
      </h2>
      <p className="text-gray-300 mb-10 max-w-xl">
        Let's get in touch! Whether it's about a job opportunity, a collaboration, or just to say hi — I'm happy to hear from you.
      </p>
      <div className="space-y-6 text-left">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-400 text-xl" />
          <a
            href="mailto:venkatakarthik.patralapati@sjsu.edu"
            className="text-white hover:text-blue-400 transition"
          >
            venkatakarthik.patralapati@sjsu.edu
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-blue-400 text-xl" />
          <a
            href="https://www.linkedin.com/in/pvk04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            linkedin.com/in/pvk04
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-blue-400 text-xl" />
          <span className="text-white">+1 408-581-3187</span>
        </div>
      </div>

      {/* Home Button at bottom */}
      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}
