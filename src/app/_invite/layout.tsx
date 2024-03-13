"use client"
import useAuthHook from "@/hooks/use-auth-hook";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ReferralLayout({ children }: Props) {
  const router = useRouter();
  const { isAuthenticated, auth } = useAuthHook();
  if (isAuthenticated) {
    let dashboard = "/";
    if (auth?.user?.user_role === "super_admin") {
      dashboard = "/dashboard/super";
    }
    if (auth?.user?.user_role === "admin") {
      dashboard = "/dashboard/admin";
    }
    if (auth?.user?.user_role === "instructor") {
      dashboard = "/dashboard/instructor";
    }
    if (auth?.user?.user_role === "student") {
      dashboard = "/dashboard/student";
    }
    router.push(dashboard);
  }
  return <React.Fragment>{children}</React.Fragment>;
}

export default ReferralLayout;
