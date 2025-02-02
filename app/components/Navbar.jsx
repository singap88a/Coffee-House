"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [activeLink, setActiveLink] = useState("/");  

  const links = [
    { link: "Home", url: "/" },
    { link: "About", url: "/pages/about" },
     { link: "Our Menu", url: "/pages/coffee-menu" },
    { link: "Menu", url: "/pages/menu" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[150] transition-colors duration-300 ${
        hasBackground ? " bg-[#E5DCD3] shadow-md " : "  "
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-3">
        
          <div className="  text-lg font-bold relative z-[200]">
            <Link href="/">
              <Image src={logo} alt="Logo" className=" " />
            </Link>
          </div>

           <div className="flex items-center gap-4 lg:hidden ">
            <button
              className="text-primary focus:outline-none relative z-[200]"
              onClick={toggleSearch}
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>

            <button
              className="text-primary focus:outline-none relative z-[200]"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

           <ul className="hidden lg:flex items-center gap-7 text-text_color">
            {links.map((item, index) => (
              <li
                key={index}
                className={`hover:text-primary transition-all font-bold   ${
                  activeLink === item.url ? "text-primary   " : ""
                }`}
              >
                <Link href={item.url} onClick={() => setActiveLink(item.url)}>
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>

           <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-full bg-[#8d755252] bg-opacity-20 text-primary placeholder-primary focus:outline-none "
              />
              <button className="absolute right-2 top-2 text-primary ">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

         {isMenuOpen && (
          <>
             <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[80] mt-20"
              onClick={toggleMenu}
            ></div>

             <div className="lg:hidden absolute top-0 left-0 right-0 bg-[#E5DCD3] p-4 z-[99]  pt-20">
              <ul className="flex flex-col items-center gap-4 text-primary">
                {links.map((item, index) => (
                  <li key={index} className="hover:text-primary transition-all font-bold">
                    <Link href={item.url} onClick={toggleMenu}>
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

         {isSearchOpen && (
          <div className="lg:hidden absolute top-12 left-0 right-0 bg-[#E5DCD3] p-4 z-[100]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full   bg-opacity-20 text-primary placeholder-primary focus:outline-none bg-text_color  "
              />
              <button className="absolute right-2 top-2 text-primary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
