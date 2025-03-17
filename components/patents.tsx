"use client";
import { FaLightbulb } from "react-icons/fa";
import { MdGavel } from "react-icons/md";
import { BiRegistered } from "react-icons/bi";
import MainTitle from "@/common/mainTitle";
import { patents } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Patent() {
  const { sectionRefs } = useActiveSectionContext();
  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["PATENTS"] = el)}
        id="patents"
      >
        <MainTitle heading={{ title: "Patents", icon: FaLightbulb }} />
        <div className="space-y-6 mt-12">
          {patents.map((section, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg dark:text-white text-[#212529]"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                {section.category.includes("Patent") ? (
                  <MdGavel className="text-blue-600" />
                ) : (
                  <BiRegistered className="text-red-500" />
                )}
                {section.category} <span>{section?.year}</span>
              </h3>
              <ul className="list-disc pl-5">
                {section.items.map((patent, i) => (
                  <li key={i} className="mb-2">
                    <span className="font-larken">{patent?.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
