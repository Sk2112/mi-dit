"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0  md:border-b border-gray-200 dark:bg-white-900 dark:border-gray-600  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo here okay */}
        <a href="#" className="flex items-center space-x-3">
          <Image src="/" width={32} height={32} alt="Logo" />
          <span className="text-2xl  font-bold text-green-600">MiDiT</span>
        </a>

      <button
  type="button"
  onClick={() => setIsOpen(!isOpen)}
  className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-5700 rounded-lg md:hidden hover:bg-gray-100"
>
  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}
        >
         <ul className="flex flex-col font-medium mt-4  bg-white md:bg-transparent md:flex-row md:space-x-8 md:mt-0">
  <li>
    <a
      href="#"
      className="flex items-center justify-between py-2 px-3 text-green-600 font-semibold md:p-0"
    >
      Home
      <ChevronRight className="w-5 h-5 ml-2 md:hidden" />
    </a>
  </li>
  <li>
    <a
      href="#"
      className="flex items-center justify-between py-2 px-3  text-gray-900 hover:text-green-600 md:p-0"
    >
      Features
      <ChevronRight className="w-5 h-5 ml-2 md:hidden" />
    </a>
  </li>
  <li>
    <a
      href="#"
      className="flex items-center justify-between py-2 px-3  text-gray-900 hover:text-green-600 md:p-0"
    >
      About
      <ChevronRight className="w-5 h-5 ml-2 md:hidden" />
    </a>
  </li>
  <li>
    <a
      href="#"
      className="flex items-center justify-between py-2 px-3  text-gray-900 hover:text-green-600 md:p-0"
    >
      Contact
      <ChevronRight className="w-5 h-5 ml-2 md:hidden" />
    </a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;  
