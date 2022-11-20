import React from "react";
import { useQuery } from "react-query";
import TemplateRow from "./TemplateRow";

const Template = () => {
  const { data: templates } = useQuery("template", () =>
    fetch("Template.json").then((res) => res.json())
  );
  console.log(templates);
  return (
    <div className="h-full bg-[#DAFCF9]">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center lg:pt-28 pt-16 gap-6">
          <h1 className="lg:text-5xl text-3xl pb-8 lg:pb-0 font-semibold text-[#000248] w-full">
            Our Template Are Just Ready to Use
          </h1>
          <h3 className="lg:text-2xl text-xl w-full text-gray-600">
            You will love all of the features in our template. 100% guaranteed
            satisfaction.
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-9 pt-16 pb-28">
          {templates?.map((template, index) => (
            <TemplateRow key={index} template={template} />
          ))}
          <img
            src="https://new.axilthemes.com/demo/react/keystroke/images/preview/comming-soon.png?imwidth=1920"
            alt="comming soon"
            className="border-2 border-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
