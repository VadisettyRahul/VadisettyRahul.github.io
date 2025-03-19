"use client";
import React, { useState } from "react";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import { badges, judgeGithub } from "@/lib/data";

export default function JudgeGithub() {
  const { sectionRefs } = useActiveSectionContext();

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sortedConferenceData = [...judgeGithub].sort(
    (a, b) => parseInt(b.date) - parseInt(a.date)
  );

  // Filter conference data based on selectedYear
  const filteredData = selectedYear
    ? sortedConferenceData.filter((conf) => conf.date.includes(selectedYear))
    : sortedConferenceData;

  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["JUDGE GITHUB OPEN SOURCE"] = el)}
        id="judgeGit"
      >
        <MainTitle
          heading={{ title: "JUDGE (GITHUB)", icon: FaMicrophoneAlt }}
        />

        {/* Year Filter Buttons */}
        <div className="mt-10 text-center flex justify-end items-center gap-2">
          {["All", "2024", "2025"].map((year, index) => (
            <button
              key={index}
              type="button"
              className={`inline-block px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ${
                selectedYear === (year === "All" ? null : year)
                  ? "bg-blue-800 text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => setSelectedYear(year === "All" ? null : year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Badges Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-15 justify-center">
            {badges.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item?.badgeUrl}
                  alt={item?.badgeName}
                  width={200}
                  height={90}
                  className="mx-auto"
                />
                <h2 className="text-xl font-semibold dark:text-white text-[#212529] mt-6 font-larken text-center">
                  {item?.badgeName}
                </h2>
                <p className="text-md text-gray-400 mt-1 text-center">
                  <span className="font-medium">
                    {item?.badgeDes} : {item?.fest}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />

          {/* Filtered Conference Data */}
          {filteredData.length > 0 ? (
            filteredData.map((conf, index) => (
              <div
                className="dark:bg-[#212529] bg-[#F8F9FA] p-6 rounded-lg w-full mb-6 cursor-pointer transition-all duration-300"
                onClick={() => toggleAccordion(index)}
                key={index}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h2 className="text-2xl font-bold text-[#212529] dark:text-white">
                    {conf?.repoName}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm mt-2">{conf?.issue}</p>
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
                    <a
                      href={conf?.conversationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conversation Link
                    </a>
                    , &nbsp;
                    <a
                      href={conf?.commitsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Commits Link
                    </a>
                    , &nbsp;
                    <a
                      href={conf?.filesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      File Changes Link
                    </a>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 mt-6">
              No data available for {selectedYear}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
