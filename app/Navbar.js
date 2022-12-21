"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="bg-sky-700 flex items-center justify-between flex-wrap text-white p-6">
        <div className="flex items-center flex-shrink-0 text-whte mr-6">
          <h1 className="font-bold text-3xl">Orozcorp</h1>
        </div>
        <div className="block lg:hidden ml-4">
          <button
            onClick={() => setActive(!active)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden md:hidden">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Portfolio
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Stacks and Skills
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              CV
            </a>
          </div>
        </div>
      </nav>
      {active && (
        <div className="bg-sky-700 text-white p-3 w-100">
          <div className="text-sm flex flex-col items-end justify-end flex-nowrap ">
            <a
              href="/"
              className="block mt-4 text-teal-200 hover:text-white mr-4"
            >
              Portfolio
            </a>
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Stacks and skills
            </a>
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}
