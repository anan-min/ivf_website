import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const QA = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="bg-white border shadow-lg rounded-lg p-4">
      <div className="flex flex-row gap-4">
        <div className="text-4xl items-center justify-center h-full aspect-square mt-6 px-4">
          <InfoCircledIcon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h1 className="font-bold text-lg ">{title}</h1>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default QA;
