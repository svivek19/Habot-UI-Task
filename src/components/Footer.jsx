import React from "react";
import logo from "../assets/footerLogo.png";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#123557] py-10">
      <div className="w-5/6 mx-auto space-y-8 md:space-y-0 flex flex-col md:flex-row justify-around items-center">
        <div>
          <img src={logo} alt="brand logo" />
        </div>

        <div className="flex space-x-5">
          <ul className="text-white  space-y-2">
            <li className="font-bold text-[15px]">Company</li>
            <li className="text-[14px]">About</li>
            <li className="text-[14px]">FAQ</li>
          </ul>

          <ul className="text-white  space-y-2">
            <li className="font-bold text-[15px]">Terms</li>
            <li className="text-[14px]">Data privacy</li>
            <li className="text-[14px]">Terms</li>
            <li className="text-[14px]">Accessibility</li>
          </ul>

          <ul className="text-white  space-y-2">
            <li className="font-bold text-[15px]">Related</li>
            <li className="text-[14px]">Find Buyer</li>
            <li className="text-[14px]">Feedback</li>
          </ul>
        </div>

        <div className="flex space-x-6 ">
          <div className="border border-[#6b6a6a] text-white rounded-full">
            <FaLinkedinIn className=" w-6 h-6 p-1 " />
          </div>
          <div className="border border-[#6b6a6a] text-white rounded-full">
            <FaTwitter className=" w-6 h-6 p-1 " />
          </div>
          <div className="border border-[#6b6a6a] text-white rounded-full">
            <FaFacebookF className=" w-6 h-6 p-1 " />
          </div>
          <div className="border border-[#6b6a6a] text-white rounded-full">
            <FaInstagram className=" w-6 h-6 p-1 " />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
