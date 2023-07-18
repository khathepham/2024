"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-black/80 `}>
      {/* Desktop Navbar */}
      <div
        className={`max-w-full mx-auto px-6 lg:px-24 uppercase transition ease-out duration-1000 ${
          isMobileMenuOpen ? "backdrop-blur-md" : "backdrop-blur-none"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={44} height={44} />
              <span className="ml-2 text-white text-lg font-semibold">
                {/* CUSEC */}
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                About Us
              </Link>
              <Link
                href="/event"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                Event Details
              </Link>
              <Link
                href="/faq"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Nav Toggle Button */}

          <div className="flex md:hidden">
            <button className="" onClick={toggleMobileMenu}>
              <div className=" flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                      isMobileMenuOpen ? "translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-white h-[2px] w-7 rounded transform transition-all duration-700 delay-75 ${
                      isMobileMenuOpen ? "translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-700 origin-left delay-150 ${
                      isMobileMenuOpen ? "translate-x-10" : ""
                    }`}
                  ></div>

                  <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${isMobileMenuOpen ?'translate-x-0  w-12': 'translate-x-10 w-0'}`}>
                    <div
                      className={`absolute bg-white h-[2px] w-5 transform transition-all duration-700 delay-300 ${
                        isMobileMenuOpen ? "rotate-45" : "rotate-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute bg-white h-[2px] w-5 transform transition-all duration-700 delay-300 ${
                        isMobileMenuOpen ? "-rotate-45" : "rotate-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          // `transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-300 z-30 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`

          `border-t border-stone-700 transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto transition duration-1000 ease-in-out z-30 ${
            isMobileMenuOpen
              ? "translate-x-0 backdrop-blur-md"
              : "translate-x-full backdrop-blur-none"
          }`
        }
      >
        <div className="flex flex-col mx-6 ml-6 mt-24 space-y-10 uppercase">
          <Link
            href="/"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            About Us
          </Link>
          <Link
            href="/event"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            Event Details
          </Link>
          <Link
            href="/faq"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
