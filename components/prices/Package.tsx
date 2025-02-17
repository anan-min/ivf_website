import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PackageProps {
  title: string;
  price: string;
  description: string;
  items: string[];
}

const Package = ({ title, price, description, items }: PackageProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <p className="text-sm text-gray-500">{price}</p>
          <h1 className="text-3xl font-bold mt-2">{title}</h1>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 rounded-full bg-[#ffc1b5]" />
              <p className="ml-2">{item}</p>
            </li>
          ))}
        </ol>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default Package;
