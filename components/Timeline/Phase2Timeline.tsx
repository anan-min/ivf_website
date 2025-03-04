"use client";
import React from "react";
import { getFormatDateByDay, getRangeFormatDate } from "@/lib/utils";
import Link from "next/link";

const Icon = () => (
  <svg
    className="w-2.5 h-2.5 text-[#ffc1b5]"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>
);

interface TimelinePhase {
  title: string;
  time: string;
  description: React.ReactNode; // Accepts any JSX
}

interface TimelineCardProps {
  selectedDate: Date | null;
}

const Phase2Timeline = ({ selectedDate }: TimelineCardProps) => {
  const firstDayOfPeriod = selectedDate ? new Date(selectedDate) : new Date();

  const phases: TimelinePhase[] = [
    {
      title: "Period Start",
      time: getFormatDateByDay(firstDayOfPeriod, 1),
      description: (
        <ul>
          <li>Start of the period cycle.</li>
          <br />
          <li>
            <Link href="/prices" className="underline font-bold">
              Package D
            </Link>{" "}
            (Embryo Transfer)
          </li>
        </ul>
      ),
    },
    {
      title: "Begin Hormone Medications",
      time: getRangeFormatDate(firstDayOfPeriod, 2, 12),
      description: (
        <ul>
          <li>- Ultrasound on {getFormatDateByDay(new Date(), 2)}</li>
          <li>
            - Blood test for Estradiol on{" "}
            {getRangeFormatDate(firstDayOfPeriod, 7, 8)}
          </li>
        </ul>
      ),
    },
    {
      title: "Fly to Bangkok to see the doctor",
      time: getFormatDateByDay(firstDayOfPeriod, 13),
      description: (
        <ul>
          <li>
            - Fly to Bangkok for ultrasound before the thawed embryo transfer.
          </li>
          <li>
            - Ultrasound on {getRangeFormatDate(firstDayOfPeriod, 13, 15)}
          </li>
        </ul>
      ),
    },
    {
      title: "Embryo Transfer",
      time: getRangeFormatDate(firstDayOfPeriod, 18, 21),
      description: (
        <ul>
          <li>Range between {getRangeFormatDate(firstDayOfPeriod, 18, 21)}</li>
        </ul>
      ),
    },
    {
      title: "Fly Back Home",
      time: getRangeFormatDate(firstDayOfPeriod, 22, 25),
      description: (
        <ul>
          <li>
            Around 4 days after the embryo transfer (
            {getRangeFormatDate(firstDayOfPeriod, 22, 25)})
          </li>
        </ul>
      ),
    },
    {
      title: "Pregnancy Test",
      time: getRangeFormatDate(firstDayOfPeriod, 28, 31),
      description: (
        <ul>
          <li>
            Around 10 days after the embryo transfer (
            {getRangeFormatDate(firstDayOfPeriod, 28, 31)})
          </li>
        </ul>
      ),
    },
  ];

  return (
    <ol className="items-center lg:flex lg:items-start lg:gap-2">
      {phases.map((phase, index) => (
        <li key={index} className="relative mb-6 lg:mb-0 lg:w-1/3">
          <div className="flex items-center justify-start lg:justify-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#ffe6db] rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-800 shrink-0">
              <Icon />
            </div>
            {/* Connecting line, flex-grow for alignment */}
            <div className="hidden lg:flex flex-grow w-full bg-gray-200 h-0.5 dark:bg-gray-800"></div>
          </div>
          <div className="mt-3 lg:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {phase.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-800">
              {phase.time}
            </time>
            <div className="text-sm font-normal text-gray-600">
              {phase.description}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Phase2Timeline;
