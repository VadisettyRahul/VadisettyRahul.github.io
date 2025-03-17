"use client";

import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: any;
  setActiveSection: React.Dispatch<React.SetStateAction<any>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  sectionRefs: React.MutableRefObject<{
    [key in any]?: HTMLElement | null;
  }>;
  scrollToSection: (section: any) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<any>("ABOUT");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const sectionRefs = useRef<{ [key in any]?: HTMLElement | null }>({});

  const scrollToSection = (section: any) => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());

    if (sectionRefs.current[section]) {
      sectionRefs.current[section]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: any = "ABOUT";

      Object.entries(sectionRefs.current).forEach(([name, ref]) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
            currentSection = name as any;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        sectionRefs,
        scrollToSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
