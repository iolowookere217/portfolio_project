"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-[#54549c] text-white fixed top-0 left-0 right-0 z-[9999] px-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5 framer-animation">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <Link href="/" className="text-lg font-semibold">
            ISAAC
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div>
          <p className="text-white text-sm hidden md:block">
            Frontend Engineer based in Lagos, Nigeria
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <a
            href="#case-studies"
            className="hover:underline hover:text-gray-400">
            Projects
          </a>
          <a
            href="#work-experience"
            className="hover:underline hover:text-gray-400">
            Work Experience
          </a>
          <a href="#" className="hover:underline hover:text-gray-400">
            About Me
          </a>
          <a
            href="https://drive.google.com/file/d/16kLR7tAPk15fqZ2RP6ls69TPak76_M9X/view?usp=sharing"
            className="hover:underline hover:text-gray-400">
            Resume
          </a>
        </div>
        {/* Contact */}
        <div className="hidden md:flex relative items-center justify-end">
          <button
            className="bg-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in flex items-center gap-2"
            onClick={() => {
              window.location.href =
                "mailto:olowookere.isaaco@gmail.com?subject=Hello&body=Hi, I would like to get in touch with you.";
            }}>
            <MdEmail />
            Send me an email
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-2xl">
            {isDrawerOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="mb-4 bg-gray-800 text-white p-4 rounded-lg md:hidden">
          {/* Switch */}
          <div className="hidden md:flex relative w-10 h-5 bg-gray-700 rounded-full items-center justify-end p-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <Link
            href="#case-studies"
            className="block mb-2 hover:underline hover:text-gray-400"
            onClick={toggleDrawer}>
            Projects
          </Link>
          <Link
            href="#work-experience"
            className="block mb-2 hover:underline hover:text-gray-400"
            onClick={toggleDrawer}>
            Work Experience
          </Link>
          <Link
            href="#"
            className="block hover:underline hover:text-gray-400"
            onClick={toggleDrawer}>
            About Me
          </Link>
          <Link
            href="https://drive.google.com/file/d/16kLR7tAPk15fqZ2RP6ls69TPak76_M9X/view?usp=drive_link"
            className="block hover:underline hover:text-gray-400"
            onClick={toggleDrawer}>
            Resume
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
