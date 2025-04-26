"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import HomeButton from "./HomeButton";
import Link from "next/link";

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold uppercase tracking-[10px] text-gray-400 mb-8">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              y: -8,
              boxShadow: "0 12px 35px rgba(34,197,94,0.3)",  
              borderColor: "#34d399",                         
            }}
            transition={{
              type: "tween",        
              ease: "easeOut",
              duration: 0.3,       
            }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-left transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              {cert.title}
            </h4>
            <p className="text-sm text-gray-300 mb-4">{cert.issuer}</p>

            <div className="flex flex-wrap gap-2">
              <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm text-white hover:bg-emerald-400 hover:text-black transition-all duration-300 cursor-pointer">
                  Show Credential ↗
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}
