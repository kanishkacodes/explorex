"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky z-50 w-full h-20 border-b-2 border-neutral-400 bg-white top-0">
      <div className="flex justify-between items-center h-full w-full px-6 lg:px-16">
        <div>
          <div className="w-40 lg:w-60">
            <Link href="/">
              <Image alt="LOGO" src="/TF.png" width={1351} height={184} />
            </Link>
          </div>
        </div>
        <div>
          <ul className="hidden lg:flex items-center">
            <Link href="/">
              <li className="ml-8 lg:ml-14 hover:border-b text-lg lg:text-xl hover:text-pink-500">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="ml-8 lg:ml-14 hover:border-b text-lg lg:text-xl hover:text-pink-500">
                About
              </li>
            </Link>
            <Link href="/Services">
              <li className="ml-8 lg:ml-14 hover:border-b text-lg lg:text-xl hover:text-pink-500">
                Services
              </li>
            </Link>
            <Link href="/Clients">
              <li className="ml-8 lg:ml-14 hover:border-b text-lg lg:text-xl hover:text-pink-500">
                Clients
              </li>
            </Link>
            <Link href="https://share.hsforms.com/1zBadTPyLTVu585sGj-a5TQcyk5y">
              <li className="ml-12 lg:ml-20 lg:text-lg  text-base  ">
                <button className="bg-black text-white px-4 py-2 md:px-4 md:py-3 lg:px-8 lg:py-4 rounded-lg hover:text-pink-500 hover:bg-white hover:shadow-sm hover:shadow-slate-600">
                  Contact Us
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 z-50 top-0 w-[100%] lg:hidden h-screen bg-[#f7f7f7] p-10 ease-in duration-500 flex justify-center items-center"
            : "fixed right-[-100%] z-50 w-[100%] top-0 p-10 ease-in duration-200 flex justify-center items-center"
        }
      >
        <div className="absolute top-10 right-10">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex flex-col py-4 text-center">
          <ul>
            <li className="mb-10 cursor-pointer">
              <div className="w-40">
                <Link href="/">
                  <Image alt="LOGO" src="/TF.png" width={1351} height={184} />
                </Link>
              </div>
            </li>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b text-xl hover:text-pink-500"
              >
                Home
              </li>
            </Link>
            <Link href="/About">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b text-xl hover:text-pink-500"
              >
                About
              </li>
            </Link>
            <Link href="/Services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b text-xl hover:text-pink-500"
              >
                Services
              </li>
            </Link>
            <Link href="/Clients">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b text-xl hover:text-pink-500"
              >
                Clients
              </li>
            </Link>
            <Link href="https://share.hsforms.com/1zBadTPyLTVu585sGj-a5TQcyk5y">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:border-b text-lg hover:text-pink-500"
              >
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:text-pink-500 hover:bg-white hover:shadow-sm hover:shadow-slate-600">
                  Contact Us
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
