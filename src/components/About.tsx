"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HomeButton from "./HomeButton"; // Make sure casing matches the filename exactly

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 text-white bg-black relative"
    >
      <Image
        src="/profile.jpg"
        alt="Karthik Patralapati"
        width={260}
        height={260}
        className="rounded-xl object-cover shadow-lg"
      />

      <div className="max-w-2xl space-y-6 text-left">
        <h2 className="text-cyan-400 text-xl font-semibold uppercase tracking-[6px]">About</h2>
        <h3 className="text-4xl font-extrabold leading-tight">
          Hey 👋🏼 I’m Karthik – a Software Oriented Data/AI/ML Engineer based in the SF Bay Area 🌉.
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          I earned my Master’s in Applied Data Science and Analytics with a focus on AI at San Jose State University, USA and I completed my undergrad in Electrical and Electronics Engineering at VIT University, India.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm passionate about building large-scale AI/ML systems and pipelines across Big Data, Finance, Healthcare, and Manufacturing domains.
        </p>
      </div>

      {/* Home Button positioned at the bottom center */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <HomeButton />
      </div>
    </motion.section>
  );
}
