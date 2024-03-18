"use client";
import DashboardWrapper from "../_components/dashboard-wrapper";
import React, { Suspense } from "react";
import { instructorSidebarItems } from "./_data/dashboard-sidebar-items";
type Props = {
  children: React.ReactNode;
};
function InstructorLayout({ children }: Props) {
  return (
    <Suspense>
    <DashboardWrapper menu_items={instructorSidebarItems} title="instructor">
      <React.Fragment>{children}</React.Fragment>
    </DashboardWrapper>
    </Suspense>
  );
}

export default InstructorLayout;
