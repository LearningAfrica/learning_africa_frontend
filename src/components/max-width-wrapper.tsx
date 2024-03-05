import React from "react";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
};

function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return <div className="max-w-7xl mx-auto w-full">{children}</div>;
}

export default MaxWidthWrapper;
