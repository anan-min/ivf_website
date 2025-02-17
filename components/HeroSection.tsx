"use client";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#ffe6db] min-h-[60vh] lg:min-h-[70vh] min-w-full relative mt-16 p-8 lg:p-16 flex items-center justify-center">
      {/* Grid pattern as a background */}
      <div className="absolute inset-0">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] fill-black"
          )}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold lg:mt-24">
          Plan Your{" "}
          <span className="bg-[#fcd8c9] rounded-xl px-4 py-1/2 my-2 text-nowrap">
            IVF Journey
          </span>{" "}
          with Confidence
        </h1>
        <p className="w-8/12 text-sm sm:text-lg lg:text-2xl text-gray-700">
          Take the stress out of your IVF planning. Select your first date and
          receive a personalized timeline, event details, and pricing tailored
          to your needs.
        </p>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 gap-4 sm:gap-0">
          <Link href={"/infos"}>
            <Button className="px-6 py-4 bg-white hover:bg-[#e9e3e0] text-stone-700 font-medium text-xl w-full sm:w-auto">
              Learn More
            </Button>
          </Link>
          <Link href={"/planning"}>
            <Button className="text-grey-700 px-6 py-4 bg-[#ffc1b5] hover:bg-[#ffd5cd] font-medium text-xl w-full sm:w-auto">
              Start Planning
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
