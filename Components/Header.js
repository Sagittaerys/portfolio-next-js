"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container sticky z-10 top-0 bg-[#1E1E1E] md:px-10 md:py-7  p-5">
      <div className="relative flex justify-between md:max-w-[100%] items-center">
      <Link className="w-[15%] flex items-center" href="/">
        <h1 className="test-font tracking-wider text-[24px] font-extrabold text-[#FFFFFF] ">
          Sagittaerys!
        </h1>
          <div>⚡</div>
      </Link>

      {/* Desktop Menu */}

      <div className="hidden md:block">
        <div className="nav-list w-[65%] flex items-center text-[15px] text-[#C1C1C1] items-baseline space-x-5 ">
          <Link className="hover:text-[#A78BFA]" href="/">
            Home
          </Link>

          <Link className="hover:text-[#A78BFA]" href="#about">
            About
          </Link>

          <Link className="hover:text-[#A78BFA]" href="#projects">
            Projects
          </Link>

          <Link className="hover:text-[#A78BFA]" href="#services">
            Services
          </Link>
          <Link className="hover:text-[#A78BFA]" href="#resume">
            Resume
          </Link>
        </div>
      </div>

      <div className="nav-list w-[25%] hidden  md:block">
        <div className="flex justify-between items-center text-[#FFFFFF] ">
          <Link href="#contact">
            <button className="px-4 py-1 hover:bg-[#A78BFA] hover:scale-105 transition-transform duration-300  border border-[#A78BFA] text-[#FFFFFF] text-[15px] rounded-md">
              Contact Me
            </button>
          </Link>

          <a href="https://github.com/sagittaerys" target="_blank" rel="noopener noreferrer">

          <button className="name px-3 py-1 text-[#C1C1C1] hover:text-white  flex items-center gap-3">
              <div> <IoLogoGithub className="text-[30px]" /> </div>
              <div> github</div>
          </button>

          </a>

        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="p-2  md:hidden"
      >
        <div className="w-[14px] h-[10px] flex items-center justify-center">
          <Image
            className={`${isOpen ? "hidden" : "block"}`}
            src="/Vector.png"
            width={14}
            height={10}
            alt="hamburger-icon"
          />

          <svg
            className={`${
              isOpen ? "block" : "hidden"
            } text-[#FFFFFF] font-bold w-[14px] h-[10px]`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-20 top-10  right-0 md:hidden`}
      >
        <div className="nav-links text-center px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[15px] text-[#FFFFFF] bg-[#1E1E1E]">
          <Link
            href="/"
            className="hover:text-[#A78BFA] block px-3 py-2 "
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#A78BFA] block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#A78BFA] block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="hover:text-[#A78BFA] block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#resume"
            className="hover:text-[#A78BFA] block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
