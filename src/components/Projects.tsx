"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { IconType } from "react-icons";
import {
  SiNextdotjs, SiPython, SiTypescript, SiApachespark, SiTailwindcss
} from "react-icons/si";
import HomeButton from "./HomeButton";

// Update this as needed with more tech-icon mappings
const iconMap: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  Python: SiPython,
  TypeScript: SiTypescript,
  "Apache Spark": SiApachespark,
  "Tailwind CSS": SiTailwindcss,
};

const categories = ["AI/ML", "Big Data Engineering", "Data Analytics"];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold uppercase tracking-[10px] text-gray-400 mb-8">
        Projects
      </h2>

      {categories.map((category) => {
        const filteredProjects = projectsData.filter((proj) => proj.category === category);
        return (
          <div key={category} className="mb-16 w-full max-w-5xl">
            <h3 className="text-[22px] font-extrabold mb-6 text-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-300 text-transparent bg-clip-text tracking-wide drop-shadow-lg">
              {category} Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-left hover:border-emerald-400 hover:shadow-[0_12px_35px_rgba(34,197,94,0.3)] transition-all duration-300"
                >
                  <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => {
                      const Icon = iconMap[tech];
                      return (
                        <span
                          key={i}
                          className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm text-white"
                        >
                          {Icon && <Icon className="text-blue-400" />} {tech}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}
