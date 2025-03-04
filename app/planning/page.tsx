"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineCard } from "@/components/Timeline/TimelineCard";
import Phase1Timeline from "@/components/Timeline/Phase1Timeline";
import Phase2Timeline from "@/components/Timeline/Phase2Timeline";
import SelectTimeline from "@/components/Timeline/SelectTimeline";
import GridDecoration from "@/components/GridDecoration";
import CombinedTimeline from "@/components/Timeline/CombinedTimeline";

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
            title="Frozen Thawed Embryo Transfer"
            description="Your embryo transfer journey starts with taking hormonal medications at the beginning of your periods and then, the blood test of hormonal level on day 7-8 of periods cycle, and followed by a trip to Bangkok for ultrasound monitoring. After the thawed embryo transfer, you will return home and undergo the blood test for pregnancy later."
            TimelineComponent={Phase2Timeline}
          />
        );
      case "combined":
        return (
          <TimelineCard
            title="Combined Timeline"
            description="he IVF process begins in the chosen month, with the IVF cycle starting on the second day of your menstrual period. This phase includes ovarian stimulation, egg retrieval, and fertilization, typically lasting around two weeks."
            TimelineComponent={CombinedTimeline}
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
              title="IVF Treatment Timeline"
              description="The IVF process begins in the chosen month, with the IVF cycle starting on the second day of your menstrual period. This phase includes ovarian stimulation, egg retrieval, and fertilization, typically lasting around two weeks."
              TimelineComponent={Phase1Timeline}
            />
            <TimelineCard
              title="Frozen Embryo Transfer"
              description="Your IVF journey starts with your period and hormone medications, followed by a trip to Bangkok for the embryo transfer. After monitoring via ultrasound, you'll return home and take a pregnancy test to confirm the results."
              TimelineComponent={Phase2Timeline}
            />
            <TimelineCard
              title="Combined Timeline"
              description="Description 1"
              TimelineComponent={CombinedTimeline}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
