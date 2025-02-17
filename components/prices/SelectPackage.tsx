import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectPackageProps {
  onChange: (value: string) => void;
}

const SelectPackage = ({ onChange }: SelectPackageProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[200px] bg-white">
        <SelectValue placeholder="Select an IVF Package" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="a">Package A</SelectItem>
          <SelectItem value="b">Package B</SelectItem>
          <SelectItem value="c">Package C</SelectItem>
          <SelectItem value="d">Package D</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectPackage;
