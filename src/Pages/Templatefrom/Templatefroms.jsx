import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import tem1 from "../../Assets/images/Templatefrom/tem1.png";
import tem2 from "../../Assets/images/Templatefrom/tem2.png";
import tem3 from "../../Assets/images/Templatefrom/tem3.png";
import Templatefrom from "../Templatefrom/Templatefrom";

const Templatefroms = () => {
  const [isHover, setIsHover] = useState(false);

  const recipientEmail = "dev.dodotech@gmail.com";

  const handleSendMail = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <div id="why" className="bg-[#e4e4e4]">
      <div className="container mx-auto px-4 pt-32">
        <div className="lg:flex gap-32 mx-auto">
          <div className="w-full">
            <h2 className="font-bold text-[#1F1E5E] lg:text-5xl text-2xl mb-6">
              Why Buy Template From Us?{" "}
            </h2>
          </div>
          <div className="w-full">
            <p className="lg:text-2xl text-lg text-slate-500">
              Every template is built with such efforts that they are ready to
              meet all of our clients’ expectations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto my-10 ">
          <Templatefrom
            Title="A Complete Product forYour Business"
            bgClass="bg-violet-700"
            img={tem1}
            description="We build Templates that are rich in content and have a good user interface to deliver a premium user experience for your customers."
          ></Templatefrom>
          <Templatefrom
            Title="SEO & SMM Friendly"
            bgClass="bg-cyan-500"
            img={tem2}
            description="Our Template is SEO and SMM-friendly that aligns with your digital marketing strategies to bring more organic traffic to your website."
          ></Templatefrom>
          <Templatefrom
            Title="Well Organized Codes"
            bgClass="bg-orange-400"
            img={tem3}
            description="The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed."
          ></Templatefrom>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-11 gap-20 justify-center pt-20">
          <div className="text-center bg-white lg:w-1/3 px-16 py-11 relative">
            <img
              src="https://new.axilthemes.com/demo/react/keystroke/images/preview/feature-icon-06.png?imwidth=48"
              alt=""
              className="mx-auto bg-[#cacebf] py-4 px-5 absolute -top-10 right-1/2 translate-x-1/2"
            />
            <h1 className="text-2xl font-bold text-[#702FFF] tracking-tight">
              Online Documentation
            </h1>
            <p className="text-gray-500 py-4">Well organized and up to date</p>
            <button className="bg-[#702FFF] text-white py-1.5 px-5 text-2xl">
              <MdArrowForward />
            </button>
          </div>
          <div className="text-center bg-white lg:w-1/3 px-16 py-11 relative">
            <img
              src="https://new.axilthemes.com/demo/react/keystroke/images/preview/feature-icon-08.png?imwidth=48"
              alt=""
              className="mx-auto bg-[#cacebf] py-4 px-5 absolute -top-10 right-1/2 translate-x-1/2"
            />
            <h1 className="text-2xl font-bold text-[#00D09C] tracking-tight">
              Dedicated Support
            </h1>
            <p className="text-gray-500 py-4">
              Our response time is 24-hour in regular business days.
            </p>
            <button className="bg-[#00D09C] text-white py-1.5 px-5 text-2xl">
              <MdArrowForward />
            </button>
          </div>
        </div>
        <div className="lg:flex justify-between items-center mt-28 bg-white lg:py-14 py-8 px-8 lg:px-16">
          <div>
            <h1 className="lg:text-5xl text-3xl font-semibold text-[#2F316A]">
              Let’s Start Your Business Today!
            </h1>
            <p className="text-xl text-gray-500 lg:pt-6 pt-4">
              Missing something? Just tell us what you need by{" "}
              <br className="lg:hidden" />
              <a href="#" className="text-[#26D6FF] underline font-semibold">
                requesting us here.
              </a>
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => handleSendMail()}
              className="relative w-36 h-14"
            >
              <div className="absolute top-1 z-20">
                <div className="flex items-center gap-5 font-bold text-white tracking-wide hover:text-[#702FFF] py-[13px] px-4">
                  <span>Buy Now</span>
                  <FaShoppingCart />
                </div>
              </div>
              <div
                className={`absolute top-0 w-full z-10 h-full duration-300 ${
                  isHover ? "scale-50" : "scale-100 bg-[#702FFF]"
                }`}
              ></div>
              <div
                className={`absolute w-full z-10 top-0 h-full duration-300 ${
                  isHover
                    ? "scale-100 border-[3px] border-[#702FFF]"
                    : "scale-110"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templatefroms;
