import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function MaxWidthWrapper({ children, className }: Props) {
  return (
    <div className={cn("max-w-7xl mx-auto  w-full", className)}>
      {children}
    </div>
  );
}
