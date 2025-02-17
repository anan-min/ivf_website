"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineCard } from "@/components/Timeline/TimelineCard";
import Phase1Timeline from "@/components/Timeline/Phase1Timeline";
import SelectTimeline from "@/components/Timeline/SelectTimeline";
import GridDecoration from "@/components/GridDecoration";

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    "timeline1"
  );

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "timeline1":
        return (
          <TimelineCard
            title="IVF Treatment Timeline"
            description="The IVF process begins in the chosen month, with the IVF cycle starting on the second day of your menstrual period. This phase includes ovarian stimulation, egg retrieval, and fertilization, typically lasting around two weeks."
            TimelineComponent={Phase1Timeline}
          />
        );
      case "timeline2":
        return (
          <TimelineCard
            title="Timeline 2"
            description="Description 2"
            TimelineComponent={Phase1Timeline}
          />
        );
      case "combined":
        return (
          <TimelineCard
            title="Combined Timeline"
            description="Description 3"
            TimelineComponent={Phase1Timeline}
          />
        );
      default:
        return <p>Please select a timeline to display.</p>;
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <GridDecoration />
      </div>
      <Navbar />
      <main className="flex flex-col relative">
        <section className="w-full lg:w-10/12 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 py-20 gap-4 lg:p-20 z-10 relative">
          <h1 className="text-5xl font-bold z-10 my-6">Plannings</h1>
          <div className="w-full lg:hidden z-10">
            <SelectTimeline
              onChange={(value: string) => setSelectedComponent(value)}
            />
          </div>
          <div className="w-full lg:hidden z-10">
            {renderSelectedComponent()}
          </div>
          <div className="hidden lg:flex flex-col gap-12 w-full z-10">
            <TimelineCard
              title="Timeline 1"
              description="Description 1"
              TimelineComponent={Phase1Timeline}
            />
            <TimelineCard
              title="Timeline 2"
              description="Description 1"
              TimelineComponent={Phase1Timeline}
            />
            <TimelineCard
              title="Combined Timeline"
              description="Description 1"
              TimelineComponent={Phase1Timeline}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
