"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HomeButton from "./HomeButton";

export default function Education() {
  const educationData = [
    {
      title: "San Jose State University, San Jose, CA",
      degree: "MS in Applied Data Science and Analytics",
      date: "Jan 2023 – Dec 2024",
      coursework:
        "Python, Data Visualization, DB Systems, Data Engineering, Data Mining, Machine Learning, Deep Learning, Artificial Intelligence",
      icon: "/SJSU_Icon.png",
    },
    {
      title: "Vellore Institute of Technology, Tamil Nadu, India",
      degree: "BS in Electrical and Electronics Engineering",
      date: "July 2018 – Aug 2022",
      coursework:
        "Python, Object Oriented Programming, IoT Domain Analysis, Neural Networks & Deep Learning, Robotics, VLSI, Analog & Digital Circuits, Semiconductors, Signals & Systems, Field Theory",
      icon: "/VIT_ICON.jpg",
    },
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-extrabold uppercase tracking-[10px] text-gray-300 mb-12">
        Education
      </h2>

      <div className="max-w-3xl w-full space-y-10 text-left">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-emerald-400 hover:shadow-emerald-500 transition duration-300 flex items-start gap-5"
          >
            {/* University Icon */}
            <div className="flex-shrink-0">
              <Image
                src={edu.icon}
                alt={`${edu.title} logo`}
                width={48}
                height={48}
                className="rounded-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-1">
                {edu.title}
              </h3>
              <p className="text-sm md:text-base font-semibold text-gray-200">
                {edu.degree}{" "}
                <span className="font-normal text-gray-400">| {edu.date}</span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <span className="font-semibold text-gray-300">Coursework:</span>{" "}
                {edu.coursework}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Home Button */}
      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}
