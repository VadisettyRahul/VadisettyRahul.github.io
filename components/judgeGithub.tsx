"use client";
import React, { useState } from "react";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

const conferenceData = [
  {
    repoName: "Data_Science_Projects",
    issue: "Update Telecom_Customer_Churn.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update heart_disease_classification.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update real_state.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update iris_classification.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update axis_bank_stock_price_prediction.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update weather.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update linear_regression.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update house_price.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update asia_cup.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update yt.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update virtual_mouse.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update speech_recognition.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Create CODE_OF_CONDUCT.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7/files",
    mergeDate: "16 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update README.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4/files",
    mergeDate: "16 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update CONTRIBUTING.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15/files",
    mergeDate: "15 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Create CONTRIBUTING.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1/files",
    mergeDate: "15 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Video Classification Model Using CNN and LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/38",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/38/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/38/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Chatbot Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/36",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/36/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/36/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Captioning Model Using CNN and LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/35",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/35/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/35/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Language Translation Model Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/34",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/34/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/34/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Handwritten Digit Recognition Model Using CNN.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/33",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/33/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/33/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Sentiment Analysis Model Using LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/32",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/32/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/32/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Text Summarization.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/31",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/31/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/31/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Classifier Using CNN.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/30",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/30/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/30/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Text Summarization Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/29",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/29/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/29/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Classification.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/28",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/28/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/28/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
];
const badges = [
  {
    badgeName: "Early Bird Pegasaurus",
    fest: "",
    badgeDes: "Holopin",
    badgeUrl:
      "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDd0ZDhncDUwMTMyMDlrMHd1OHFlNHg5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
  },
  {
    badgeName: "Hacktoberfest 2024: Registered",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level0-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 1",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level1-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 2",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level2-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 3",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level3-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 4",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level4-sloth-code-0-0-0-0.webp",
  },
];

export default function JudgeGithub() {
  const { sectionRefs } = useActiveSectionContext();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sortedConferenceData = [...conferenceData].sort(
    (a, b) => parseInt(b.date) - parseInt(a.date)
  );

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
          {conferenceData.map((conf, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
