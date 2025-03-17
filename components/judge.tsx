"use client";
import React, { useState } from "react";
import ConferenceCard from "@/common/conferenceCard";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";

const conferenceData = [
  {
    conferenceName: "Internet Technology Letters",
    topicName:
      "Artificial Intelligence Technique for Cyber-Attack Prevention in Edge Computing Networks ",
    conferenceSortName: "Internet Technology Letters",
    event: "Internet Technology Letters",
    date: "Feb 27, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "Internet Technology Letters",
    topicName:
      "Dynamic Transmission Time Allocation Using Sigmoid Function for Energy Optimization in WSNs ",
    conferenceSortName: "Internet Technology Letters",
    event: "Internet Technology Letters",
    date: "Feb 27, 2025",
    // date: "Feb 27, 2025 | Dec 29, 2024",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "Internet Technology Letters",
    topicName:
      "MAVEN: Majority Voting Ensemble for Attack Detection on IoT Data Streams",
    conferenceSortName: "Internet Technology Letters",
    event: "Internet Technology Letters",
    date: "Feb 2, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "GT4MAGR: Leveraging Graph Transformer and Multi-Agent Deep Reinforcement Learning for Robust Routing in Software Defined Networks",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Jan 9, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Big Data",
    topicName:
      "Traffic Flow Forecasting Based on Complex Gray Relational Degree Network and Multi-Period Exattention-GRU Model",
    conferenceSortName: "IEEE Transactions on Big Data",
    event: "IEEE Transactions on Big Data",
    date: "Jan 8, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Big Data",
    topicName: "Sentences based Adversarial Attack on Generated Text Detectors",
    conferenceSortName: "IEEE Transactions on Big Data",
    event: "IEEE Transactions on Big Data",
    date: "Jan 8, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "An Adaptive Contention Window Backoff Scheme Differentiating Network Conditions Based on Deep Q-Learning Network",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Nov 11, 2024",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "A General Approach for Network Video Traffic Classification Using Improved Deep Learning",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Nov 11, 2024",
    role: "Journal Peer Review",
  },
];

export default function Judge() {
  const { sectionRefs } = useActiveSectionContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sortedArticles = [...conferenceData].sort((a, b) => {
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
