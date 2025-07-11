"use client";
import React, { useState } from "react";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { judgeConference } from "@/lib/data";

export default function JudgeConference() {
  const { sectionRefs } = useActiveSectionContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredData = selectedYear
    ? judgeConference.filter((conf) => conf.date.includes(selectedYear))
    : judgeConference;

  const sortedConferenceData = [...filteredData].sort(
    (a, b) => parseInt(b.date) - parseInt(a.date)
  );

  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["JUDGE (Conference)"] = el)}
        id="judgeConference"
      >
        <MainTitle
          heading={{ title: "JUDGE (Conferences)", icon: FaMicrophoneAlt }}
        />
        <div className="mt-10 text-center flex justify-end items-center gap-2">
          <button
            type="button"
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ${
              selectedYear === null
                ? "bg-blue-800 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedYear(null)}
          >
            All
          </button>
           <button
            type="button"
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ${
              selectedYear === "2024"
                ? "bg-blue-800 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedYear("2022")}
          >
            2022
          </button>
          <button
            type="button"
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ${
              selectedYear === "2024"
                ? "bg-blue-800 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedYear("2024")}
          >
            2024
          </button>
          <button
            type="button"
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ${
              selectedYear === "2025"
                ? "bg-blue-800 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedYear("2025")}
          >
            2025
          </button>
        </div>
        <div className="mt-12">
          {sortedConferenceData.map((conf, index) => (
            <div
              className="dark:bg-[#212529] bg-[#F8F9FA] p-6 rounded-lg w-full mb-6 cursor-pointer transition-all duration-300"
              onClick={() => toggleAccordion(index)}
              key={index}
            >
              <span className="text-yellow-400 text-2xl font-semibold text-[#212529] dark:text-white">
                {conf?.conferenceName}
              </span>
              <div className="flex justify-between items-center cursor-pointer">
                <h2 className="text-1xl font-bold text-[#212529] dark:text-white">
                  {conf?.conferenceTopicName}
                </h2>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                {conf?.role} | {conf?.event}
              </p>
              <div className="mt-3">
                <span className="bg-yellow text-black px-3 py-1 text-sm font-semibold rounded-md">
                  {conf?.date}
                </span>
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <hr className="my-4 border-gray-700" />
                <p className="text-[#212529] dark:text-white">
                  {conf?.conferenceSortName}
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
