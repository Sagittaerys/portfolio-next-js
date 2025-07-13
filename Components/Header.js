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
    <div className="container md:max-w-[100%] md:px-10 md:py-7 flex justify-between  items-center border border-red-600 p-5">

      <Link className="w-[25%]" href="/">
        <h1 className="test-font tracking-wider text-[24px] font-extrabold text-[#FFFFFF] ">
          sagittaerys!
        </h1>
      </Link>

      {/* Desktop Menu */}

      <div className="hidden md:block">
        <div className="nav-list w-[50%] flex items-center text-[15px] text-[#C1C1C1] items-baseline space-x-8 ">
          <Link href="/">
            Home
          </Link>

          <Link href="#about">
            About
          </Link>

          <Link href="#projects" >
            Projects
          </Link>

          <Link href="#contact">
            Services
          </Link>
          <Link href="#contact">
            Resume
          </Link>
        </div>
      </div>

      <div className="nav-list w-[25%] hidden  md:block">

        <div className="flex justify-between items-center text-[#FFFFFF] ">

          <Link href="#contact">
            <button className="px-4 py-1 border border-red-600 text-[#FFFFFF] text-[15px] rounded-md">Contact Me</button>
          </Link>

          <button className="">
            <Image src="/Group.png" height={30} width={30} alt="color-mode" />
          </button>
        </div>
      </div>

      <button className="border p-2 border-red-600 md:hidden">
        <Image src="/Vector.png" width={14} height={10} alt="hamburger-icon" />
      </button>
    </div>
  );
}
