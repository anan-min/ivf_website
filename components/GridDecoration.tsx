"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

const GridDecoration = () => {
  return (
    <div
      className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 opacity-50"
      style={{
        background:
          "linear-gradient(to bottom right, #ffe6db 0%, rgba(255, 230, 219, 0) 60%)",
      }}
    >
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default GridDecoration;
