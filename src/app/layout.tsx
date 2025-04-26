import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik Patralapati",
  description: "Portfolio of Karthik Patralapati – AI, Data, and GenAI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Top Header */}
        <header className="fixed top-6 left-8 right-8 z-50 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6 ml-4">
            <a
              href="https://github.com/venkatakarthik04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pvk04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/venkatakarthik04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-3xl"
            >
              <FaCode />
            </a>
          </div>

          {/* GET IN TOUCH button with matching style */}
          <Link href="#contact">
            <button className="text-sm md:text-md tracking-wider uppercase border-[2px] border-emerald-400 text-white py-2 px-4 rounded-full hover:bg-emerald-300 hover:text-black hover:shadow-md transition-all duration-300">
              GET IN TOUCH
            </button>
          </Link>
        </header>

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
