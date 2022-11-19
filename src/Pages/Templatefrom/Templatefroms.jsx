import React from "react";
import tem1 from "../../Assets/images/Templatefrom/tem1.png";
import tem2 from "../../Assets/images/Templatefrom/tem2.png";
import tem3 from "../../Assets/images/Templatefrom/tem3.png";
import Templatefrom from "../Templatefrom/Templatefrom";

const Templatefroms = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="lg:flex gap-32 mx-auto mt-20 mb-20">
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
    </div>
  );
};

export default Templatefroms;
