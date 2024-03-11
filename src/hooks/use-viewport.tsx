"use client";
import React from "react";

export default function useViewPort() {
  // const localWindow = typeof window !== "undefined" ? window : null;
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = React.useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  const [isLaptop, setIsLaptop] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isPortrait, setIsPortrait] = React.useState(false);

  const [scrollHeight, setScrollHeight] = React.useState(0);

  const handleWindowResize = () => {
    if (window === undefined) return;
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
      setIsTablet(false);
      setIsLaptop(false);
      setIsDesktop(false);
    } else if (width >= 768 && width < 1024) {
      setIsMobile(false);
      setIsTablet(true);
      setIsLaptop(false);
      setIsDesktop(false);
    } else if (width >= 1024 && width < 1440) {
      setIsMobile(false);
      setIsTablet(false);
      setIsLaptop(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setIsLaptop(false);
      setIsDesktop(true);
    }
  }, [width]);

  React.useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }, [height, width]);

  React.useEffect(() => {
    setScrollHeight(document.documentElement.scrollHeight);
  }, [scrollHeight]);

  return {
    width,
    height,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isPortrait,
    scrollHeight,
  };
}
