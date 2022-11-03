import React, { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import dodo from "../Assets/dodo.png";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-11 items-center px-4">
        <div className="flex items-center gap-2">
          <img src={dodo} alt="dodo" className="w-16" />
          <div className="text-[#1F1E5E] tracking-wide">
            <h1 className="font-bold text-xl">DodoTech</h1>
            <p className="font-medium">Official Website</p>
          </div>
        </div>
        <div className="flex items-center gap-8 tracking-wide">
          <ul className="flex gap-8 text-[#1F1E5E] font-bold">
            <li>
              <a className="hover:text-[#702FFF]" href="#">Template</a>
            </li>
            <li>
              <a className="hover:text-[#702FFF]" href="#">Features</a>
            </li>
            <li>
              <a className="hover:text-[#702FFF]" href="#">Why Us</a>
            </li>
          </ul>
          <button
          onMouseEnter={()=> setIsHover(true)}
          onMouseLeave={()=> setIsHover(false)}
          className="relative">
            <div
              className={`absolute w-full h-full z-[-1] duration-300 ${
                isHover ? "scale-50" : "scale-100 bg-[#702FFF]"
              }`}
            ></div>
            <div
              className={`absolute w-full h-full z-[-1] duration-300 ${
                isHover ? "scale-100 border-[3px] border-[#702FFF]" : "scale-110"
              }`}
            ></div>
            <div className="flex items-center gap-5 font-bold text-white tracking-wide hover:text-[#702FFF] py-[13px] px-4">
              <span>Buy Now</span>
              <RiShoppingCart2Fill />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
