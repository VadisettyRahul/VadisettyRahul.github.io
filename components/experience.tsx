"use client";
import MainTitle from "@/common/mainTitle";
import { useActiveSectionContext } from "@/context/active-section-context";
import { experiences } from "@/lib/data";
import { FaCheck, FaUniversity } from "react-icons/fa";

export default function ExperienceTimeline() {
  const { sectionRefs } = useActiveSectionContext();

  return (
    <>
      <div
        className="text-white mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["EXPERIENCE"] = el)}
        id="experience"
      >
        <MainTitle heading={{ title: "Experience", icon: FaUniversity }} />
        <div className="relative ml-5 mt-12">
          <div className="absolute top-0 left-[-10px] h-[94%] w-1 bg-yellow"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-10">
              <div className="absolute -left-5  top-0 flex items-center justify-center w-6 h-6 bg-yellow rounded-full">
                <FaCheck className="dark:text-black text-white text-sm" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold dark:text-white text-[#212529] font-larken">
                  {exp.role}
                </h3>
                <p className=" dark:text-[#CED4DA] text-[#212529]">
                  {exp.duration}
                </p>
                <p className="dark:text-[#CED4DA] text-[#212529]">
                  {exp.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
