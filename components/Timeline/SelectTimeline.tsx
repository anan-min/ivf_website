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
      <SelectTrigger className="w-[250px] bg-white">
        <SelectValue placeholder="Select an IVF plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="timeline1">IVF Treatment</SelectItem>
          <SelectItem value="timeline2">
            Frozen Thawed Embryo Transfer
          </SelectItem>
          <SelectItem value="combined">Combined</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectTimeline;
