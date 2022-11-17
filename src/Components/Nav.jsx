import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import dodo from "../Assets/dodo.png";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);

  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="container mx-auto w-full">
      <div
        className={`flex absolute w-full z-40 duration-500 justify-between mt-11 items-center px-4 left-0 ${
          nav ? "-top-10" : "top-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={dodo} alt="dodo" className="w-16" />
          <div className="text-[#1F1E5E] tracking-wide">
            <h1 className="font-bold text-xl">DodoTech</h1>
            <p className="font-medium">Official Website</p>
          </div>
        </div>
        <div className="lg:flex hidden items-center gap-8 tracking-wide">
          <ul className="flex gap-8 text-[#1F1E5E] font-bold">
            <li>
              <a className="hover:text-[#702FFF]" href="#">
                Template
              </a>
            </li>
            <li>
              <a className="hover:text-[#702FFF]" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-[#702FFF]" href="#">
                Why Us
              </a>
            </li>
          </ul>
          <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative"
          >
            <div
              className={`absolute w-full h-full z-[-1] ${
                isHover ? "scale-50" : "scale-100 bg-[#702FFF]"
              }`}
            ></div>
            <div
              className={`absolute w-full h-full z-[-1] duration-300 ${
                isHover
                  ? "scale-100 border-[3px] border-[#702FFF]"
                  : "scale-110"
              }`}
            ></div>
            <div className="flex items-center gap-5 font-bold text-white tracking-wide hover:text-[#702FFF] py-[13px] px-4">
              <span>Buy Now</span>
              <BsCart3 />
            </div>
          </button>
        </div>
        <CgMenuGridO size={40} className="text-[#1F1E5E] lg:hidden" />
      </div>
      <div
        className={`flex fixed z-40 w-full duration-1000 bg-white justify-between py-2 shadow-lg items-center px-4 left-0 ${
          nav ? "top-0" : "-top-28"
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={dodo} alt="dodo" className="w-16" />
          <div className="text-[#1F1E5E] tracking-wide">
            <h1 className="font-bold text-xl">DodoTech</h1>
            <p className="font-medium">Official Website</p>
          </div>
        </div>
        <div className="lg:flex hidden items-center gap-8 tracking-wide">
          <ul className="flex gap-8 text-[#1F1E5E] font-bold">
            <li>
              <a className="hover:text-[#702FFF]" href="#">
                Template
              </a>
            </li>
            <li>
              <a className="hover:text-[#702FFF]" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-[#702FFF]" href="#">
                Why Us
              </a>
            </li>
          </ul>
          <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative"
          >
            <div
              className={`absolute w-full h-full z-[-1] duration-300 ${
                isHover ? "scale-50" : "scale-100 bg-[#702FFF]"
              }`}
            ></div>
            <div
              className={`absolute w-full h-full z-[-1] duration-300 ${
                isHover
                  ? "scale-100 border-[3px] border-[#702FFF]"
                  : "scale-110"
              }`}
            ></div>
            <div className="flex items-center gap-5 font-bold text-white tracking-wide hover:text-[#702FFF] py-[13px] px-4">
              <span>Buy Now</span>
              <BsCart3 />
            </div>
          </button>
        </div>
        <CgMenuGridO size={40} className="text-[#1F1E5E] lg:hidden" />
      </div>
    </div>
  );
};

export default Nav;
