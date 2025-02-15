"use client";
import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "./DatePicker";

interface TimelineCardProps {
  title: string;
  description: string;
  TimelineComponent: React.ComponentType<{ selectedDate: Date | null }>;
}

export function TimelineCard({
  title,
  description,
  TimelineComponent,
}: TimelineCardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="pt-3">
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>
      </CardHeader>
      <CardContent>
        <TimelineComponent selectedDate={selectedDate} />
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
