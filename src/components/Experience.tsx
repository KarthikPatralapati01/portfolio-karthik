"use client";

import { motion } from "framer-motion";
import { experiencesData } from "@/data/experiences";
import HomeButton from "./HomeButton";

export default function Experience() {
  const sortedExperiences = [...experiencesData].sort((a, b) =>
    b.startDate.localeCompare(a.startDate)
  );

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold uppercase tracking-[10px] text-gray-400 mb-8">
        Experience
      </h2>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-5xl w-full">
        {sortedExperiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              boxShadow: "0px 0px 25px 8px rgba(16, 185, 129, 0.6)",
              borderColor: "#34d399",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-left hover:border-emerald-400 transition-all duration-300 shadow-md"
          >
            <h3 className="text-lg font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {exp.role}
            </h3>
            <p className="text-sm text-green-400 mb-1">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}
