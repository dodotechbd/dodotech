import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F7F3ED] pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-56 flex lg:flex-row flex-col gap-6 lg:gap-0 items-center">
        <div className="w-full">
          <h1 className="text-lg text-gray-500">
            {" "}
            © 2022. All rights reserved by DodoTech
          </h1>
          <div className="text-gray-500 flex items-center gap-2 mt-3 lg:mt-0">
            <button className="uppercase duration-700  hover:text-[#702FFF]">
              More Template
            </button>
            <div>|</div>
            <button className="uppercase duration-700  hover:text-[#702FFF]">
              Privacy Policy
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button className="bg-white duration-700 text-gray-800 hover:text-white hover:bg-[#702FFF] p-3 rounded-full">
            <FaFacebookF />
          </button>
          <button className="bg-white duration-700 text-gray-800 hover:text-white hover:bg-[#702FFF] p-3 rounded-full">
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
