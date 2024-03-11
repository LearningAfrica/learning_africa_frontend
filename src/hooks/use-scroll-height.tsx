"use client";
import React from "react";

type ScrollHeightOptions = {
  expr: "<=" | ">=" | "===" | "!==" | "<" | ">";
  magnitude: number;
  from: "top" | "bottom";
};

export function useScrollHeight(
  magnitude: number,
  options: ScrollHeightOptions
) {
  const [scrollHeight, setScrollHeight] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scroll =
        options.from === "top"
          ? window.scrollY
          : window.innerHeight + window.scrollY;
      setScrollHeight(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [options.from, options.expr, options.magnitude, scrollHeight, magnitude]);

  return {
    scrollHeight,
    isScroll: eval(`${scrollHeight} ${options.expr} ${magnitude}`) as boolean,
    bottom: options.from === "bottom" ? scrollHeight : undefined,
  };
}
