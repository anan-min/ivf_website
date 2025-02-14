import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "./DatePicker";
import Phase1Timeline from "./Phase1Timeline";

export function TimelineCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>Phase 1: Embryo Collection</h1>
        </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
        <div className="pt-3">
          <DatePicker />
        </div>
      </CardHeader>
      <CardContent>
        <Phase1Timeline />
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
