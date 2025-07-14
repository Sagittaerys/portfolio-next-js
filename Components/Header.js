"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container relative  md:max-w-[100%] md:px-10 md:py-7 flex justify-between  items-center border border-red-600 p-5">
      <Link className="w-[15%]" href="/">
        <h1 className="test-font tracking-wider text-[24px] font-extrabold text-[#FFFFFF] ">
          sagittaerys!
        </h1>
      </Link>

      {/* Desktop Menu */}

      <div className="hidden md:block">
        <div className="nav-list w-[65%] flex items-center text-[15px] text-[#C1C1C1] items-baseline space-x-5 ">
          <Link className="hover:text-red-600" href="/">
            Home
          </Link>

          <Link className="hover:text-red-600" href="#about">
            About
          </Link>

          <Link className="hover:text-red-600" href="#projects">
            Projects
          </Link>

          <Link className="hover:text-red-600" href="#contact">
            Services
          </Link>
          <Link className="hover:text-red-600" href="#contact">
            Resume
          </Link>
        </div>
      </div>

      <div className="nav-list w-[25%] hidden  md:block">
        <div className="flex justify-between items-center text-[#FFFFFF] ">
          <Link href="#contact">
            <button className="px-4 py-1 border border-red-600 text-[#FFFFFF] text-[15px] rounded-md">
              Contact Me
            </button>
          </Link>

          <button className="">
            <Image src="/Group.png" height={30} width={30} alt="color-mode" />
          </button>
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="border p-2 border-red-600 md:hidden"
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
        } absolute z-20 top-15  right-0 md:hidden`}
      >
        <div className="nav-links px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[#FFFFFF] bg-[#1E1E1E]">
          <Link
            href="#home"
            className="hover:text-red-600 block px-3 py-2 "
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-red-600 block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-red-600 block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-red-600 block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
