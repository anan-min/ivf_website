"use client";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#ffe6db] min-h-[60vh] lg:min-h-[70vh] min-w-full relative mt-16 p-16">
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
      <main className="relative z-10 flex flex-col w-10/12  lg:w-7/12 items-center justify-center mx-auto text-center space-y-6 px-4 sm:px-8">
        <h1 className="text-5xl sm:text-5xl font-bold lg:mt-24">
          Plan Your{" "}
          <span className="bg-[#fcd8c9] rounded-xl px-4 py-1/2 my-2 text-nowrap">
            IVF Journey
          </span>{" "}
          with Confidence
        </h1>
        <p className="text-sm sm:text-2xl text-gray-700">
          Take the stress out of your IVF planning. Select your first date and
          receive a personalized timeline, event details, and pricing tailored
          to your needs.
        </p>
        <div className="flex flex-row space-x-4">
          <Link href={"/infos"}>
            <Button className="px-6 py-4 bg-white hover:bg-[#e9e3e0]  text-stone-7000 font-medium text-xl mt-4">
              Learn More
            </Button>
          </Link>
          <Link href={"/planning"}>
            <Button className="text-grey-700 px-6 py-4 bg-[#ffc1b5] hover:bg-[#ffd5cd]  font-medium text-xl mt-4">
              Start Planning
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
