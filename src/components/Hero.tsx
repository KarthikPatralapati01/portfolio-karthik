"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import BackgroundCircles from "./BackgroundCircles";

const pageInfo = {
  name: "Karthik Patralapati",
  role: "Software Engineer",
  profileImage: "/profile.jpg",
};

const buttons = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      `Hi, the name's ${pageInfo.name}`,
      "AI/ML Nerd with Data Grit",
      "I_like_to_code.py & .ipynb",
    ],
    loop: true,
    delaySpeed: 800,
  });

  const getEmoji = () => {
    if (text.includes("AI/ML")) return "🤖🧠";
    if (text.includes("code")) return "💻";
    if (text.includes("name")) return "👨‍💻";
    return "";
  };

  return (
    <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Background Circles */}
      <BackgroundCircles />

      {/* Profile Image */}
      <img
        src={pageInfo.profileImage}
        alt="Profile"
        className="relative rounded-full h-32 w-32 object-cover z-10"
      />

      {/* Name and Role */}
      <div className="z-20 mt-4">
        <h2 className="text-sm uppercase tracking-[10px] text-gray-400 mb-4">
          {pageInfo.role}
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white flex items-center justify-center gap-3">
          <span>{text}</span>
          <span className="text-5xl md:text-6xl">{getEmoji()}</span>
          <Cursor cursorColor="#22c55e" />
        </h1>
      </div>

      {/* Navigation Buttons */}
      <motion.div
        className="pt-8 flex flex-wrap justify-center gap-4 z-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {buttons.map((btn, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={btn.href}>
              <button className="text-xs md:text-sm tracking-wider uppercase border-2 border-emerald-400 text-white py-2 px-5 rounded-full hover:bg-emerald-300 hover:text-black hover:shadow-lg transition-all duration-300">
                {btn.label}
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Home Button at Bottom */}
      <Link href="#hero">
        <footer className="absolute bottom-6">
          <div className="h-10 w-10 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center transition hover:scale-110">
            <HomeIcon className="h-6 w-6 text-black" />
          </div>
        </footer>
      </Link>
    </section>
  );
}
