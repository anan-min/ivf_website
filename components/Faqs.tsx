import React from "react";
import {
  FaQuestionCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Faqs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
      <div className="flex flex-row items-center p-4 border rounded-lg w-3/4">
        <div className="text-2xl m-3">
          <FaQuestionCircle />
        </div>
        <p className="text-gray-600">
          Here we explain the purpose and use of this service to help our users
          understand it better.
        </p>
      </div>
      <div className="flex flex-row items-center p-4 border rounded-lg w-3/4">
        <div className="text-2xl m-3">
          <FaInfoCircle />
        </div>
        <p className="text-gray-600">
          Learn about the mechanisms behind our service and how users can
          benefit from it.
        </p>
      </div>
      <div className="flex flex-row items-center p-4 border rounded-lg w-3/4">
        <div className="text-2xl m-3">
          <FaExclamationCircle />
        </div>
        <p className="text-gray-600">
          If you face any issues, here's where you'll find solutions to common
          problems.
        </p>
      </div>
    </div>
  );
};

export default Faqs;
