import React from "react";
import { VscArrowDown } from "react-icons/vsc";
import thumbnail from "../Assets/images/thumb.png";

const Banner = () => {
  return (
    <div className="h-full pt-20 bg-[url('https://img.freepik.com/free-vector/abstract-nebula_91008-231.jpg?w=740&t=st=1668781561~exp=1668782161~hmac=5f9ef3e6e323d929e35bcd7968e054e42a9eb62b925d7f3618b6209bc2828247')] bg-cover">
      <div className="container px-4 mx-auto relative">
        {/* main section  */}
        <div className="">
          <div className="lg:max-w-2xl lg:pb-24 pb-8">
            <h1 className="lg:text-5xl text-4xl font-semibold text-[#000248] pt-20 pb-8 lg:pt-28 lg:pb-14">
              Creative Agency, Corporate and Portfolio React Template
            </h1>
            <div className="flex w-fit gap-5 cursor-pointer items-center text-[#000248] hover:text-[#702FFF]">
              <div className="bg-white opacity-70 p-2 rounded-full">
                <VscArrowDown size={20} />
              </div>
              <h2 className="text-[17px] font-semibold">Explore Template</h2>
            </div>
          </div>
          <div className="lg:pt-48 pb-16 lg:flex justify-end">
            <div className="lg:max-w-xl lg:flex grid grid-cols-2 gap-8 lg:gap-32 whitespace-nowrap">
              <div className="w-full text-[#000248]">
                <h4 className="opacity-80">Demo Website</h4>
                <h1 className="lg:text-5xl text-4xl font-bold">05+</h1>
              </div>
              <div className="w-full text-[#000248]">
                <h4 className="opacity-80">Inner Page</h4>
                <h1 className="lg:text-5xl text-4xl font-bold">20+</h1>
              </div>
              <div className="w-full text-[#000248]">
                <h4 className="opacity-80">Elements</h4>
                <h1 className="lg:text-5xl text-4xl font-bold">15+</h1>
              </div>
            </div>
          </div>
        </div>
        {/* image section  */}
        <div className="lg:block hidden">
          <img
            src={thumbnail}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-9/12 h-9/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
