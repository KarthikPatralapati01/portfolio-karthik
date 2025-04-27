"use client";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="absolute top-5 left-5 flex space-x-5 z-50">
      <a href="https://github.com/KarthikPatralapati01?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-2xl hover:scale-125" />
      </a>
      <a href="https://www.linkedin.com/in/pvk04/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-2xl hover:scale-125" />
      </a>
      <a href="https://leetcode.com/u/karthikpatralapati/" target="_blank" rel="noopener noreferrer">
        <FaCode className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-2xl hover:scale-125" />
      </a>
    </div>
  );
}
