import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PackageA = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <p className="text-sm text-gray-500">120K THB</p>
          <h1 className="text-3xl font-bold mt-2">Package A</h1>
        </CardTitle>
        <CardDescription>
          Ovarian Stimulation with Hormonal Medication
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 rounded-full bg-[#ffc1b5]" />
            <p className="ml-2">
              Hormonal injections for ovarian stimulation (2,700–3,000 units,
              customized by the doctor).
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 rounded-full bg-[#ffc1b5]" />
            <p className="ml-2">6 injections to prevent premature ovulation.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 rounded-full bg-[#ffc1b5]" />
            <p className="ml-2">1 injection to trigger ovulation.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 rounded-full bg-[#ffc1b5]" />
            <p className="ml-2">
              3 ultrasound scans to monitor follicle growth (Ultrasound
              Follicle).
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 rounded-full bg-[#ffc1b5]" />
            <p className="ml-2">
              Doctor&apos;s fees for 3 follow-up visits to monitor follicle
              development.
            </p>
          </li>
        </ol>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default PackageA;
