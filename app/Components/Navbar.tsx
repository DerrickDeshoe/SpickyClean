"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/Services" },
    { label: "Pricing", href: "/OurPrice" },
    { label: "Contact Us", href: "/Contact" },
    { label: "Recruitment", href: "/Recruitment" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" h-14 flex items-center justify-between text-black px-7 lg:px-[8%] z-80">
      <div className=" w-[40%] lg:w-[20%] xl:w-[15%]">
        <Link href="./">
          <h1 className="text-green-500 text-3xl font-bold">LOGO</h1>
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-zinc-500 focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center space-x-6 font-semibold">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-spickyBlue hover:text-grayBlue transition-colors "
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex space-x-2">
        <Link href="#" className="pt-3">
          <button className=" py-2 rounded-3xl px-3 lg:px-5 font-semibold text-sm border bg-spickyBlue text-white">
            Get Started
          </button>
        </Link>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-spickyBlue h-[50vh] flex justify-center items-center z-20">
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-zinc-500 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/Contact" onClick={toggleMenu}>
              <div className="space-x-2">
                <Link href="#" className="pt-3 px-[8%]">
                  <button className="py-2 lg:py-3 rounded-3xl px-6 font-semibold text-xs lg:text-sm border bg-spickyBlue text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95">
                    Get Started
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
