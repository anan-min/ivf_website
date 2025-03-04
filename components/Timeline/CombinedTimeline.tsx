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

const CombinedTimeline = ({ selectedDate }: TimelineCardProps) => {
  const firstDayOfPeriod = selectedDate ? new Date(selectedDate) : new Date();

  const phases: TimelinePhase[] = [
    {
      title: "Cycle Start and Ovarian Stimulation",
      time: getRangeFormatDate(firstDayOfPeriod, 1, 12),
      description: (
        <ul>
          <li>
            - Start of the period cycle on{" "}
            {getFormatDateByDay(firstDayOfPeriod, 1)}
          </li>
          <li>- Ultrasound on {getFormatDateByDay(new Date(), 2)}</li>
          <li>
            - Ovulation Triggering on {getFormatDateByDay(new Date(), 12)}
          </li>
          <br />
          <li>
            <Link href="/prices" className="underline font-bold">
              Package A
            </Link>{" "}
            (Period Start - End of Ovarian Stimulation)
          </li>
        </ul>
      ),
    },
    {
      title: "Egg and Sperm Retrieval",
      time: getRangeFormatDate(firstDayOfPeriod, 13, 15),
      description: (
        <ul>
          <li>
            - Around {getFormatDateByDay(firstDayOfPeriod, 13, "MMM dd")} -{" "}
            {getFormatDateByDay(firstDayOfPeriod, 15, "MMM dd")}
          </li>
          <br />
          <li>
            <Link href="/prices" className="underline font-bold">
              Package B
            </Link>{" "}
            (Egg/Sperm Retrieval - End of Embryo Culture)
          </li>
        </ul>
      ),
    },
    {
      title: "Fertilization, Embryo Culture, and Embryo Biopsy",
      time: getRangeFormatDate(firstDayOfPeriod, 15, 20),
      description: (
        <ul>
          <li>- Fertilization + Embryo Culture</li>
          <li>
            - Embryo Biopsy on {getFormatDateByDay(firstDayOfPeriod, 19)} (D5)
            and {getFormatDateByDay(firstDayOfPeriod, 20)} (D6)
          </li>
          <br />
          <li>
            <Link href="/prices" className="underline font-bold">
              Package C
            </Link>{" "}
            (PGTA)
          </li>
        </ul>
      ),
    },
    {
      title: "Period Start and Chromosome Report",
      time: getRangeFormatDate(firstDayOfPeriod, 19, 26),
      description: (
        <ul>
          <li>
            - Period usually comes 6-8 days after the egg retrieval,{" "}
            {getRangeFormatDate(firstDayOfPeriod, 19, 23)}
          </li>
          <li>
            - Around {getRangeFormatDate(firstDayOfPeriod, 25, 26)}, the
            chromosome report is expected.
          </li>
          <li>- Start Oral Hormonal Medication</li>
        </ul>
      ),
    },
    {
      title: "Pre-Transfer Tests & Embryo Transfer",
      time: getRangeFormatDate(firstDayOfPeriod, 31, 43),
      description: (
        <ul>
          <li>- Hormonal Test on {getFormatDateByDay(firstDayOfPeriod, 31)}</li>
          <li>
            - Ultrasound Monitoring on{" "}
            {getFormatDateByDay(firstDayOfPeriod, 38)}
          </li>
          <li>
            - Embryo Transfer on {getFormatDateByDay(firstDayOfPeriod, 43)}
          </li>
        </ul>
      ),
    },
    {
      title: "Fly Back Home and Pregnancy Test",
      time: getRangeFormatDate(firstDayOfPeriod, 47, 54),
      description: (
        <ul>
          <li>- Fly back home on {getFormatDateByDay(firstDayOfPeriod, 47)}</li>
          <li>
            - Pregnancy Test around{" "}
            {getRangeFormatDate(firstDayOfPeriod, 53, 54)}
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

export default CombinedTimeline;
