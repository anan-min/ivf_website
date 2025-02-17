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
      description: <p>Start of the period cycle.</p>,
    },
    {
      title: "Begin Hormone Medications",
      time: getRangeFormatDate(firstDayOfPeriod, 2, 12),
      description: (
        <>
          Ultrasound on {getFormatDateByDay(new Date(), 2)}
          <br />
          Injection from {getFormatDateByDay(
            firstDayOfPeriod,
            2,
            "MMM dd"
          )} to {getFormatDateByDay(firstDayOfPeriod, 11, "MMM dd, yyyy")}
          <br />
          BetaHCG on {getFormatDateByDay(new Date(), 12)}
          <br />
          <Link href="/prices" className="underline font-bold">
            Package A
          </Link>{" "}
          ( Period Start - End of Ovarian Stimulation ) <br />
          From {getRangeFormatDate(firstDayOfPeriod, 1, 12)}
        </>
      ),
    },
    {
      title: "Fly to Bangkok to see the doctor",
      time: getFormatDateByDay(firstDayOfPeriod, 13),
      description: (
        <p>UltraSound on {getFormatDateByDay(firstDayOfPeriod, 12)}</p>
      ),
    },
    {
      title: "Embryo Transfer",
      time: getRangeFormatDate(firstDayOfPeriod, 19, 21),
      description: (
        <p>Ranged between {getRangeFormatDate(firstDayOfPeriod, 19, 21)}</p>
      ),
    },
    {
      title: "Fly Back Home",
      time: getFormatDateByDay(firstDayOfPeriod, 22),
      description: (
        <p>
          Fertilization + Embryo Culture <br />
          <Link href="/prices" className="underline font-bold">
            Package B
          </Link>{" "}
        </p>
      ),
    },
    {
      title: "Pregnancy Test",
      time: getFormatDateByDay(firstDayOfPeriod, 32),
      description: (
        <>
          <p>Pregnancy Test</p>
        </>
      ),
    },
  ];

  return (
    <ol className="items-center lg:flex lg:items-start lg:gap-2">
      {phases.map((phase, index) => (
        <li key={index} className="relative mb-6 lg:mb-0 lg:w-1/3">
          <div className="flex items-center justify-start lg:justify-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#ffe6db] rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
              <Icon />
            </div>
            {/* Connecting line, flex-grow for alignment */}
            <div className="hidden lg:flex flex-grow w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 lg:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {phase.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-800">
              {phase.time}
            </time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-700">
              {phase.description}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Phase2Timeline;
