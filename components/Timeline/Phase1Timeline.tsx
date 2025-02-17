"use client";
import React from "react";
import { getFormatDateByDay, getRangeFormatDate } from "@/lib/utils";
import Link from "next/link";

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

interface TimelinePhase {
  title: string;
  time: string;
  description: React.ReactNode; // Accepts any JSX
}

interface TimelineCardProps {
  selectedDate: Date | null;
}

const Phase1Timeline = ({ selectedDate }: TimelineCardProps) => {
  const firstDayOfPeriod = selectedDate ? new Date(selectedDate) : new Date();

  const phases: TimelinePhase[] = [
    {
      title: "Period Start",
      time: getFormatDateByDay(firstDayOfPeriod, 0),
      description: <p>Start of the period cycle.</p>,
    },
    {
      title: "Seeing Doctor",
      time: getFormatDateByDay(firstDayOfPeriod, 1),
      description: (
        <div>
          <p>Ultrasound examination</p>
          <p>Consultation with the doctor</p>
          <Link href="/prices" className="underline font-bold">
            Package A
          </Link>{" "}
          From {getFormatDateByDay(firstDayOfPeriod, 1, "MMM dd")} to{" "}
          {getFormatDateByDay(firstDayOfPeriod, 11, "MMM dd, yyyy")}
        </div>
      ),
    },
    {
      title: "Ovarian Stimulation",
      time: getRangeFormatDate(firstDayOfPeriod, 1, 10),
      description: (
        <div>
          <p>
            Injection from {getFormatDateByDay(firstDayOfPeriod, 1, "MMM dd")}{" "}
            to {getFormatDateByDay(firstDayOfPeriod, 10, "MMM dd, yyyy")}
          </p>
          <p>BetaHCG on {getFormatDateByDay(new Date(), 11)}</p>
          <Link href="/prices" className="underline font-bold">
            Package A
          </Link>{" "}
          Ended {getFormatDateByDay(new Date(), 12, "MMM dd, yyyy")}
        </div>
      ),
    },
    {
      title: "Egg and Sperm Retrieval",
      time: getFormatDateByDay(new Date(), 1),
      description: (
        <p>
          Get started with dozens of web components and interactive elements.
        </p>
      ),
    },
    {
      title: "Fly back home",
      time: "Released on December 23, 2021",
      description: (
        <p>
          Get started with dozens of web components and interactive elements.
        </p>
      ),
    },
    {
      title: "Fertilization + Embryo Culture",
      time: "Released on December 23, 2021",
      description: (
        <p>
          Get started with dozens of web components and interactive elements.
        </p>
      ),
    },
    {
      title: "Flowbite Library v1.2.0",
      time: "Released on December 23, 2021",
      description: (
        <p>
          Get started with dozens of web components and interactive elements.
        </p>
      ),
    },
  ];

  return (
    <ol className="items-center lg:flex">
      {phases.map((phase, index) => (
        <li key={index} className="relative mb-6 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
              <Icon />
            </div>
            <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 lg:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {phase.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {phase.time}
            </time>
            <div className="text-base font-normal text-gray-500 dark:text-gray-400">
              {phase.description}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Phase1Timeline;
