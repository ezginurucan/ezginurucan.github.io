'use client'
import React, { useState } from "react";
import { ReactNode } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Requires @heroicons/react package
import Image from "next/image";
interface LayoutProps {
  children: ReactNode;
}

const Navbar = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-gray-900 px-4 py-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-4xl font-bold">
            <a href="/">
              <Image
                src="/assets/ezginurucan-logo.png"
                alt="ezginurucan"
                className="h-16"
              />
            </a>
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XIcon className="h-8 w-8 text-white" />
              ) : (
                <MenuIcon className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } sm:flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0`}
          >
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/ezginurucan/about" className="hover:text-gray-400">
              About
            </a>
            <a href="/ezginurucan/projects" className="hover:text-gray-400">
              Projects
            </a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navbar;
