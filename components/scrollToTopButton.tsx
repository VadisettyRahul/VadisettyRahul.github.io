"use client";

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 w-[40px] hover:bg-yellow dark:hover:bg-yellow h-[40px] bg-opacity-80 backdrop-blur-[0.5rem] flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-[#0D0D0D] bg-[#B2B2B2] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaAngleUp />
    </button>
  );
};

export default ScrollToTopButton;
