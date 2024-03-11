"use client";
import assets from "@/constants/assets";
import useAuthHook from "@/hooks/use-auth-hook";
import { useScrollHeight } from "@/hooks/use-scroll-height";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function BaseHeader() {
  const { isScroll } = useScrollHeight(100, {
    expr: ">=",
    magnitude: 200,
    from: "top",
  });
  const { isAuthenticated, role } = useAuthHook();
  const dashboardUrl =
    role === "super_admin"
      ? "/super/dashboard"
      : role === "admin"
      ? "/org-admin/dashboard"
      : role === "instructor"
      ? "/instructor-dashboard"
      : role === "student"
      ? "/student/dashboard"
      : "/";
  return (
    <motion.div
      animate={
        {
          // y: isScroll ? 0 : -100,
          // opacity: isScroll ? 1 : 0
        }
      }
      style={{
        backgroundImage: `url(${assets.images.headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "w-full flex justify-between items-center px-4 transition-all duration-500 py-2  bg-primary-pk bg-blend-overlay bg-opacity-10",

        {
          "sticky top-2  z-20 mx-auto bg-white bg-opacity- border-b-2 border-primary shadow":
            isScroll,
        }
      )}
    >
      <div
        className={cn(
          "bg-white w-full flex justify-between items-center p-4 max-w-7xl mx-auto rounded-md h-20 shadow border",
          {
            "bg-opacity-100 border-none shadow-none": isScroll,
          }
        )}
      >
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              className="w-14 h-14 rounded-full"
              src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4"
              alt="avatar"
            />
            <div
              className={cn(
                "text-xl hidden md:block  text-primary-pk ml-4 font-bold uppercase"
              )}
            >
              Learning Africa
            </div>
          </div>
        </div>
        <div>
          <div className="items-center hidden md:flex">
            <div className="text-sm font-medium text-gray-900">Home</div>
            <div className="text-sm font-medium text-gray-900 ml-4">About</div>
            <div className="text-sm font-medium text-gray-900 ml-4">
              Contact
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {isAuthenticated ? (
            <div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium text-gray-900 ml-4">
                  <Link
                    href={dashboardUrl}
                    className={cn(
                      "text-sm font-medium text-gray-900 ml-4",
                      {
                        "bg-primary-pk px-4 text-white py-2 rounded": isScroll,
                      }
                      // {
                      // 	'bg-primary': isActive
                      // }
                    )}
                  >
                    Dashboard
                  </Link>
                </div>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://secure.gravatar.com/avatar/2b7b7c9b5c9c5b5c9b7c9b5c9b7c9b5c?s=200&d=mm&r=g"
                  alt="avatar"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                href={"/auth/login"}
                className="text-sm font-medium text-gray-900 ml-4 bg-primary-pk px-4 md:px-8 py-2 md:py-2 border border-primary rounded hover:border-transparent hover:text-white hover:bg-primary hover:shadow-md transition-all duration-300"
              >
                Login
              </Link>{" "}
              <Link
                href={"/auth/register"}
                className="text-sm font-medium text-white ml-4 bg-primary border border-transparent px-4 md:px-8 py-2 md:py-2 rounded  hover:border-primary hover:text-primary hover:bg-white hover:shadow-md transition-all duration-300"
              >
                Sign up
              </Link>
              <div className="">
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default BaseHeader;
