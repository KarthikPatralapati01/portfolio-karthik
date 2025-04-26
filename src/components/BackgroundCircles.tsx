"use client";

import { motion } from "framer-motion";
import React from "react";

export default function BackgroundCircles() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
      <motion.div
        className="absolute border border-[#00ffc8] rounded-full h-[200px] w-[200px] shadow-[0_0_25px_5px_#00ffc860]"
        animate={{
          scale: [1, 4],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </div>
  );
}
