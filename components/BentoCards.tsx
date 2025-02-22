import {
  CalendarIcon,
  InfoCircledIcon,
  SketchLogoIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import Image from "next/image";

import planning_img from "@/public/planning.png";
import packages_img from "@/public/packages.png";

const features = [
  {
    Icon: CalendarIcon,
    name: "Plans",
    description: "Plan and schedule your journey with ease.",
    href: "/planning",
    cta: "Start planning",
    background: (
      <Image
        src={packages_img}
        className="absolute -right-20 -top-20 opacity-60 blur-md"
        alt=""
      />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4", // Largest area
  },
  {
    Icon: InfoCircledIcon,
    name: "Infos",
    description: "Find all the details and FAQs in one place.",
    href: "/infos",
    cta: "Learn more",
    background: (
      <Image
        src={packages_img}
        className="absolute -right-20 -top-20 opacity-60 blur-md"
        alt=""
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1", // Medium size
  },
  {
    Icon: SketchLogoIcon,
    name: "Packages",
    description: "Explore various packages tailored to your needs.",
    href: "/prices",
    cta: "View packages",
    background: (
      <Image
        src={planning_img}
        className="absolute -right-20 -top-20 opacity-60 blur-md"
        alt=""
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4", // Smallest area
  },
];

export function BentoCards() {
  return (
    <BentoGrid className="grid grid-cols-2 gap-6 sm:gap-3 h-2/3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
