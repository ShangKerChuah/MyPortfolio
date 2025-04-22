"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import Navlink from "./Navlink";

import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-nav-container fixed w-full h-24">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-6">
        <div className="nav-logo-container h-full flex item-center- overflow-hidden">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={205}
              height={80}
              className="nav-logo-img flex item-center cursor-pointer object-contain h-full w-auto"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex">
            <Navlink href="/about" label="About Me" />
            <Navlink href="/skills" label="Skills" />
            <Navlink href="/projects" label="Projects" />
            <Navlink href="/contact" label="Contact Me" />
          </ul>

          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[60%] max-w-[300px] sm-hidden h-screen bg-[#ecf0f3] p-8 ease-in duration-300"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-between h-8">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={65}
              height={80}
              className="nav-logo-img flex cursor-pointer object-contain w-[75%] h-auto pt-2 float-left"
              priority
            />
          </Link>
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-5 pl-4 pt-10 text-lg font-bold">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-5 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Services
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around items-center w-full h-screen">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
