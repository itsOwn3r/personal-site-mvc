"use client";
import { useState, useEffect } from "react";

const useScreenScroll = () => {
  const [headerHeight, setHeaderHeight] = useState("100px");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderHeight("70px");
      } else {
        setHeaderHeight("100px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerHeight;
};

export default useScreenScroll;
