"use client";
import React from "react";
import { getFormatDateByDay } from "@/lib/utils";

const Icon = () => (
  <svg
    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>
);

interface TimelineCardProps {
  selectedDate: Date | null;
}

const Phase1Timeline = ({ selectedDate }: TimelineCardProps) => {
  const firstDayOfPeriod = selectedDate ? new Date(selectedDate) : new Date();

  return (
    <ol className="items-center lg:flex">
      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Period Start
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {getFormatDateByDay(firstDayOfPeriod, 0)}
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Seeing Doctor
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Ultrasond
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ovarian Stimulation
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            ovarian stimuation from A to B injection on hcg on
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Egg and sperm retrieval
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Fly back home
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Fertilization + Embyo Culture
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.0
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>

      <li className="relative mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
            <Icon />
          </div>
          <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 lg:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.0
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
    </ol>
  );
};

export default Phase1Timeline;
