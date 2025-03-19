"use client";
import React, { useState } from "react";
import ConferenceCard from "@/common/conferenceCard";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { judgeData } from "@/lib/data";

export default function Judge() {
  const { sectionRefs } = useActiveSectionContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function parseDate(dateString: string) {
    const [monthName, dayRange, year] = dateString.split(/[\s,]+/);
    const months: Record<string, number> = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    let day = parseInt(dayRange.split("-")[0], 10);
    return [months[monthName], day, parseInt(year, 10)];
  }

  const filteredData = selectedYear
    ? judgeData.filter((item) => item.date.includes(selectedYear))
    : judgeData;

  const sortedArticles = [...filteredData].sort((a, b) => {
    const [monthA, dayA, yearA] = parseDate(a.date);
    const [monthB, dayB, yearB] = parseDate(b.date);

    if (yearA !== yearB) return yearB - yearA;
    if (monthA !== monthB) return monthB - monthA;
    return dayB - dayA;
  });

  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["JUDGE (Journals)"] = el)}
        id="judge"
      >
        <MainTitle
          heading={{ title: "Judge (Journals)", icon: FaMicrophoneAlt }}
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
          {sortedArticles.map((conf, index) => (
            <ConferenceCard
              key={index}
              index={index}
              isOpen={openIndex === index}
              toggleAccordion={toggleAccordion}
              {...conf}
            />
          ))}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
