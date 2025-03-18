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
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sortedArticles = [...judgeData].sort((a, b) => {
    const [monthA, dayA, yearA] = parseDate(a.date);
    const [monthB, dayB, yearB] = parseDate(b.date);

    if (yearA !== yearB) return yearB - yearA;
    if (monthA !== monthB) return monthB - monthA;
    return dayB - dayA;
  });

  function parseDate(dateString: any) {
    const [monthName, dayRange, year] = dateString.split(/[\s,]+/);
    const months: any = {
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
