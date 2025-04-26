"use client";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="absolute top-5 left-5 flex space-x-5 z-50">
      <Link href="https://github.com/KarthikPatralapati01" target="_blank">
        <FaGithub className="text-gray-400 hover:text-white transition duration-300 cursor-pointer text-2xl" />
      </Link>
      <Link href="https://www.linkedin.com/in/pvk04/" target="_blank">
        <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 cursor-pointer text-2xl" />
      </Link>
      <Link href="https://leetcode.com/u/karthikpatralapati/" target="_blank">
        <FaCode className="text-gray-400 hover:text-white transition duration-300 cursor-pointer text-2xl" />
      </Link>
    </div>
  );
}
