import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Flowbite Logo" />
        </a>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-900 font-bold rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <CiMenuBurger />
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 text-[#6D6E71] rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[15px]"
                aria-current="page"
              >
                Find Suppliers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#6D6E71] text-[15px]"
              >
                Find Service Tags
              </a>
            </li>
            <li className="border border-[#00732F] text-[15px] rounded-[5px] text-[#00732f] font-semibold flex items-center px-4 py-2">
              Login / Sign Up
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
