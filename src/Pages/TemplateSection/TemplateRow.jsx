import React from "react";

const TemplateRow = ({ template }) => {
  return (
    <div>
      <img
        src={template?.img}
        alt={template?.name}
        className="border-2 border-white rounded-md h-48 lg:h-80 object-cover object-center"
      />
      <h1 className="text-center lg:text-xl text-lg font-bold text-[#1F1E5E] hover:text-[#702FFF] mt-6 cursor-pointer">
        {template?.name}
      </h1>
    </div>
  );
};

export default TemplateRow;
