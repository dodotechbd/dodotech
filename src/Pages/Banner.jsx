import React from "react";
import { VscArrowDown } from "react-icons/vsc";

const Banner = () => {
  return (
    <div className="h-screen pt-32 bg-[#FBF6E7]">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold text-[#000248] py-28">
            Creative Agency, Corporate and Portfolio React Template
          </h1>
          <div className="flex w-fit gap-5 cursor-pointer items-center text-[#000248] hover:text-[#702FFF]">
            <div className="bg-white opacity-70 p-2 rounded-full">
            <VscArrowDown size={20} />
            </div>
            <h2 className="text-[17px] font-semibold">Explore Template</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
