import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectTimelineProps {
  onChange: (value: string) => void;
}

const SelectTimeline = ({ onChange }: SelectTimelineProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[200px] bg-white">
        <SelectValue placeholder="Select an IVF plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="timeline1">Phase 1</SelectItem>
          <SelectItem value="timeline2">Phase 2</SelectItem>
          <SelectItem value="combined">combined</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectTimeline;
