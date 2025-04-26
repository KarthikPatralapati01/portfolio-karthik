"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Tools from "@/components/Tools";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications"; // ✅ Import Certifications
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Tools />
      <Experience />
      <Projects />
      <Certifications /> {/* ✅ Add Certifications just before Contact */}
      <Contact />
    </main>
  );
}
