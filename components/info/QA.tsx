import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const QA = () => {
  return (
    <div className="bg-white border shadow-lg rounded-lg p-4">
      <div className="flex flex-row gap-4">
        {/* Adjust the icon size and positioning */}
        <div className="text-4xl items-center justify-center h-full aspect-square mt-6 px-3">
          <InfoCircledIcon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Can I change my plan later?</h1>
          <p className="text-sm">
            Of course you can! Our pricing scales with your company. Chat to our
            friendly team to find a solution that works for you as you grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QA;
