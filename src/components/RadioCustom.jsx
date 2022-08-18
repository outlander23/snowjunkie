import React from "react";

const RadioCustom = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-start items-center">
        <label className=" inline-block  font-semibold leading-3 text-xs cursor-pointer">
          {title}
        </label>
      </div>

      <div className="flex flex-col">
        <div className="description-accordion">{description}</div>
      </div>
    </div>
  );
};

export default RadioCustom;
