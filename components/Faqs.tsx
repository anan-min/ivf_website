import React from "react";
import {
  FaQuestionCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Faqs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-4 items-center lg:items-start text-sm mb-4 pb-6">
      <div className="flex flex-row items-center p-2 border rounded-lg sm:w-3/4 text-wrap">
        <div className="text-sm lg:text-xl m-3">
          <FaQuestionCircle />
        </div>
        <p className="text-gray-600">
          <span className="font-bold">IVF Treatment Roadmap:</span>
          Create a personalized IVF plan based on your first menstrual date,
          with key dates and treatment duration.
        </p>
      </div>
      <div className="flex flex-row items-center p-2 border rounded-lg sm:w-3/4">
        <div className="text-sm lg:text-xl m-3">
          <FaInfoCircle />
        </div>
        <p className="text-gray-600">
          <span className="font-bold">Plan Your Trip: </span>
          Use the treatment roadmap to plan your travel, including when to be at
          the hospital and how long you&apos;ll need to stay.
        </p>
      </div>
      <div className="flex flex-row items-center p-2 border rounded-lg sm:w-3/4">
        <div className="text-sm lg:text-xl m-3">
          <FaExclamationCircle />
        </div>
        <p className="text-gray-600">
          <span className="font-bold">IVF Packages:</span>
          Explore our IVF treatment packages to understand the options available
          and what’s included in your journey with us.
        </p>
      </div>
    </div>
  );
};

export default Faqs;
