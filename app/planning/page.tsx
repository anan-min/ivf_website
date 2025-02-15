"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineCard } from "@/components/Timeline/TimelineCard";
import Phase1Timeline from "@/components/Timeline/Phase1Timeline";
// import Phase2Timeline from "@/components/Timeline/Phase2Timeline";
// import CombinedTimeline from "@/components/Timeline/CombinedTimeline";
import SelectTimeline from "@/components/Timeline/SelectTimeline";

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    "timeline1"
  );

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "timeline1":
        return (
          <TimelineCard
            title="Timeline 1"
            description="Description 1"
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
    <div>
      <Navbar />
      <main className="flex flex-col">
        <section className="w-full lg:w-10/12 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 py-20 gap-4 lg:p-20 relative mt-9">
          <div className="w-full lg:hidden">
            <SelectTimeline
              onChange={(value: string) => setSelectedComponent(value)}
            />
          </div>
          <div className="w-full lg:hidden">{renderSelectedComponent()}</div>
          <div className="hidden lg:flex flex-col gap-12 w-full">
            <TimelineCard
              title="Timeline 1"
              description="Description 1"
              TimelineComponent={Phase1Timeline}
            />
            <TimelineCard
              title="Timeline 1"
              description="Description 1"
              TimelineComponent={Phase1Timeline}
            />
            <TimelineCard
              title="Timeline 1"
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
