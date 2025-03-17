"use client";
import React from "react";
import MainTitle from "@/common/mainTitle";
import { BsJournalText } from "react-icons/bs";
import ArticleCard from "@/common/articlesCard";
import { useActiveSectionContext } from "@/context/active-section-context";

const Articles = () => {
  const { sectionRefs } = useActiveSectionContext();

  const articles = [
    {
      image: "/khaleej-times.svg",
      conferenceName:
        "The International Conference on Innovation, Sustainability, and Applied Sciences (ICISAS 2025)",
      shortName: "ICISAS 2025",
      publisher: "Taylor and Francis",
      date: "February 22-23,2025",
      link: "https://conference.curtindubai.ac.ae/icisas-2025/",
      mediaLink:
        "https://www.khaleejtimes.com/kt-network/icisas-2025-dubai-conference-explores-advancements-in-ai-cloud-security-and-ethical-technology",
    },
    {
      image: "/India-header-logo.svg",
      conferenceName:
        "The International Conference on Intelligent Computing and Emerging Communication Technologies ICEC 2024",
      shortName: "ICEC 2025",
      publisher: "IEEE",
      date: "November 23–25, 2024",
      link: "https://icecconf.org/icec_2024-2/",
      mediaLink:
        "https://www.india.com/business/rahul-vadisetty-honored-for-outstanding-contribution-to-ai-and-cybersecurity-receives-best-paper-award-at-ieee-icec-2024-conference-2-7590579/",
    },
    {
      image: "/hans_india.png",
      conferenceName:
        "OITS International Conference on Information Technology OCIT 2024",
      shortName: "OCIT 2025",
      subtitle: "Insurance Industry Impact",
      publisher: "IEEE",
      date: "December 12-14, 2024",
      link: "https://www.oits-icit.org/oits-archieve/OCIT_2024_Website/",
      mediaLink:
        "https://www.thehansindia.com/business/rahul-vadisetty-harnessing-ai-to-revolutionize-predictive-healthcare-932304",
    },
    {
      image: "/logon24.webp",
      conferenceName:
        "7th International Conference on Data Analytics and Cyber Security (DACS 2024)",
      shortName: "DACS 2025",
      publisher: "Springer",
      date: "December 20-22, 2024",
      link: "https://icdacs.github.io/",
      mediaLink:
        "https://news24online.com/information/ai-innovation-in-healthcare-vadisetty-polamarasetti-win-best-paper-award-at-springer-dacs-2024/502405/",
    },
    {
      image: "/Outlook.svg",
      shortName: "Ayushman Hospital",
      conferenceName: "Ayushman Hospital",
      publisher: "Ayushman Hospital",
      date: "October 17th, 2024",
      link: "https://www.acoit.in/contact.php",
      mediaLink:
        "https://www.outlookindia.com/healthcare-spotlight/dr-swami-karri-ceo-aayushman-hospital-praises-mr-rahul-vadisetty-and-mr-anand-polamarasettis-groundbreaking-research-on-ai-based-lung-segmentation/",
    },
    {
      image: "/freePress.avif",
      conferenceName:
        "International Conference On ICTBIG (IEEE Computer Society Chapter & IEEE Madhya Pradesh Section.)",
      shortName: "ICTBIG",
      publisher: "IEEE",
      date: "December 12-14, 2024",
      link: "https://indore.hosting.acm.org/ictbig2024/index.htm",
      mediaLink:
        "https://www.freepressjournal.in/latest-news/revolutionizing-cloud-data-sharing-rahul-vadisetty-and-anand-polamarasetti-wins-best-paper-award-at-ieee-ictbig-2024-conference/",
    },
  ];

  const sortedArticles = [...articles].sort((a, b) => {
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
        ref={(el) => (sectionRefs.current["MEDIA"] = el)}
        id="media"
      >
        <MainTitle heading={{ title: "Media", icon: BsJournalText }} />
        {sortedArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
};

export default Articles;
