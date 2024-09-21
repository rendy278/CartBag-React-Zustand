import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../constants/navLinks";
import Wrap from "./Wrap";
import Logo from "./Logo";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="border-b border-primary/30 fixed top-0 z-10 w-full bg-secondary">
      <Wrap>
        <nav className="flex items-center justify-between">
          <Logo />
          <ul
            className={`md:flex md:flex-row bg-base-100 fixed lg:flex-row items-center gap-2 lg:gap-8 py-6 lg:py-0 md:py-2 lg:shadow-none shadow-xl lg:static bg-primary text-white opacity-95 h-auto rounded-t-2xl lg:h-auto lg:bg-transparent lg:border-none lg:w-auto z-10 w-full left-0 md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
              open ? "bottom-0" : "bottom-[-580px]"
            }`}
          >
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  onClick={() => setOpen(true)}
                  className="mx-auto  cursor-pointer text-xl md:my-4 lg:my-auto my-5"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <Link to="/cart" className="text-xl font-bold text-blue-400">
              <IoCartSharp size={25} />
            </Link>
            <button
              className="flex md:hidden text-sky-400"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoMdClose /> : <FaBars />}
            </button>
          </div>
        </nav>
      </Wrap>
    </header>
  );
};

export default Navbar;
