"use client";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 backdrop-filter backdrop-blur-md z-10 w-full h-[100px] flex items-center bg-[#1e1f22]/80 text-white justify-between px-4 md:px-8 lg:px-12">
      <div className="flex items-center gap-2">
        <Image src="/logo2.png" width={100} height={80} alt="Logo" />
        {/* <span className="text-[15px] md:text-lg">M2P ESPORTS</span> */}
      </div>
      <div className="hidden md:flex uppercase gap-7">
        <a href="/" className="hover:text-gray-300 transition duration-300">
          Home
        </a>
        <a
          href="#about"
          className="hover:text-gray-300 transition duration-300"
        >
          About
        </a>
        <a
          href="#events"
          className="hover:text-gray-300 transition duration-300"
        >
          Events
        </a>
        <a
          href="#contact"
          className="hover:text-gray-300 transition duration-300"
        >
          Contact
        </a>
      </div>
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="backdrop-filter backdrop-blur-md absolute top-[100px] left-0 w-full bg-[#1e1f22]/80 flex flex-col items-center md:hidden">
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#events"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Events
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
