"use client";
import React, { useState } from "react";
import ConferenceCard from "@/common/conferenceCard";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";

const conferenceData = [
  {
    conferenceName: "3rd Doctoral Symposium on Human Centered Computing",
    conferenceTopicName:
      "Designing Industry-Specific Modular Solutions Using Salesforce OmniStudio for Accelerated Digital Transformation",
    conferenceSortName: "Human 2025",
    event: "Human 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName: "3rd Doctoral Symposium on Human Centered Computing",
    conferenceTopicName:
      "Enhancing Strategic Business Decisions with AI-Powered Forecasting Models in Salesforce CRMT",
    conferenceSortName: "Human 2025",
    event: "Human 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName: "3rd Doctoral Symposium on Human Centered Computing",
    conferenceTopicName:
      "Exploring Advanced API Strategies with MuleSoft for Seamless Salesforce Integration in Multi-Cloud Environments",
    conferenceSortName: "Human 2025",
    event: "Human 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "Exploring Factors Affecting Employee Motivation in the Private Sector: A Preliminary Study on Organizations in Amman",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "A DETAILED SURVEY ON HEAVY HITTER DETECTION IN CLOUD DATA CENTRE NETWORK",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "Screw Defect Detection using Xception Algorithm over Resnet50 Algorithm for Better Accuracy",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName: "Facial Sketch Mapping and Recognition in Forensics	",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "Intelligent Monitoring and Predictive Analytics for Dairy Farming: IoT-Driven Mastitis Detection and Milk Production Enhancement",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Advanced Techniques in Deep Learning for Pancreatic Cancer Detection and Classification",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "AI-Powered Privacy Shields and Machine Learning Approaches for Securing Digital Money Transactions: A Systematic Review",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Advancements in Brain Tumor Detection: A Deep Learning Approach: A Comprehensive Analysis of Machine Learning Models in Medical Imaging",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "UNET-BASED DEEP LEARNING MODEL FOR LIVER CIRRHOSIS STAGE CLASSIFICATION AND TUMOR SIZE DETECTION",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName: "ML Based Finance and Budget Optimiser",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Analysis of Electricity Generation on live data from Regions of Sikkim",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Securing Assistive Smart Glasses: A Framework for Mitigating Cybersecurity Threats",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Advanced Path Planning Algorithms on NVIDIA Jetson TX2 for Assistive Technologies",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "A Detailed Survey of Security Threats in Wireless Sensor Network",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Survey on Information Security and Quantum Cryptography",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Integrating Al for Enhanced Battery Lifespan and Efficiency in Electric Vehicles",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "The Role of Artificial Intelligence and Machine Learning in Autonomous Vehicle Diagnostics and Control",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Data Science and Regulatory Affairs: Navigating the Complex Landscape of Drug Approval Processes",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Smart Semiconductor Wafer Inspection Systems Integrating Al for Increased Efficiency",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Global Parts Management through Data and AI Leveraging Structured and Unstructured Data",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Jenkins-The Leading Automation Server for Continuous Integration and Continuous Delivery",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName: "Simulation of Obstacle Avoidance Robots",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "The Future of Al in Big Data: Cloud Platforms are Evolving to Support Machine Learning and Analytics",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Real-Time Adaptation: Change Data Capture in Modern Computer Architecture",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "YOL-SFV2: An Effective Deep Learning Technique to Detect and Classify the Human Face Action in Thermal Images",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Securing the Edge: A Comprehensive Review of Adaptive Video Streaming Security Mechanisms in Decentralized Environments",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Al-Driven Business Intelligence: Unlocking the Future of Decision-Making",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "A Systematic Review of Artificial Intelligence and Cyber Security in Higher Education Space",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Building Robust Al Systems in Finance: The Indispensable Role of Data Engineering and Data Quality",
    conferenceSortName: "ESP-JETA 2024",
    event: "ESP-JETA 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "Global Conference on Information Technologies and Communications",
    conferenceTopicName:
      "Revolutionizing Covid-19 Pneumonia Detection With Convolutional Neural Networks",
    conferenceSortName: "GCITC 2024",
    event: "GCITC 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
];

export default function JudgeConference() {
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
        ref={(el) => (sectionRefs.current["JUDGE (Conference)"] = el)}
        id="judgeConference"
      >
        <MainTitle
          heading={{ title: "JUDGE (Conferences)", icon: FaMicrophoneAlt }}
        />
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
