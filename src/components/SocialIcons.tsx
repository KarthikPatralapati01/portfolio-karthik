"use client";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function SocialIcons() {
  const [loadingIcon, setLoadingIcon] = useState<string | null>(null);

  const handleClick = (platform: string) => {
    setLoadingIcon(platform);
    setTimeout(() => {
      setLoadingIcon(null); // reset after some time if needed
    }, 2000);
  };

  return (
    <div className="absolute top-5 left-5 flex space-x-5 z-50">
      <Link
        href="https://github.com/KarthikPatralapati01?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick("github")}
      >
        <div className="relative">
          {loadingIcon === "github" ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-400"></div>
          ) : (
            <FaGithub className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-2xl hover:scale-125" />
          )}
        </div>
      </Link>

      <Link
        href="https://www.linkedin.com/in/pvk04/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick("linkedin")}
      >
        <div className="relative">
          {loadingIcon === "linkedin" ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-400"></div>
          ) : (
            <FaLinkedin className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-2xl hover:scale-125" />
          )}
        </div>
      </Link>

      <Link
        href="https://leetcode.com/u/karthikpatralapati/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick("leetcode")}
      >
        <div className="relative">
          {loadingIcon === "leetcode" ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-400"></div>
          ) : (
            <FaCode className="text-gray-400 hover:text-emerald-400 transition duration-300 cursor-pointer text-2xl hover:scale-125" />
          )}
        </div>
      </Link>
    </div>
  );
}
