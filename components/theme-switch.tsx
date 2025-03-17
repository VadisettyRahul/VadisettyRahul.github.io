"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState, useEffect } from "react";
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [bgColor, setBgColor] = useState("bg-[#eca92d]");

  useEffect(() => {
    setBgColor(theme === "dark" ? "bg-[#eca92d]" : "bg-[#212529]");
  }, [theme]);

  return (
    <button
      className={`${bgColor} fixed lg:top-7 top-28 right-4 w-[42px] h-[38px] rounded-md flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <BsBrightnessHigh className="fill-black" />
      ) : (
        <BsMoonStars className="fill-white" />
      )}
    </button>
  );
}
