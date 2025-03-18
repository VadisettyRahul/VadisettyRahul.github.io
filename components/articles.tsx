"use client";
import React from "react";
import MainTitle from "@/common/mainTitle";
import { BsJournalText } from "react-icons/bs";
import ArticleCard from "@/common/articlesCard";
import { useActiveSectionContext } from "@/context/active-section-context";
import { articles } from "@/lib/data";

const Articles = () => {
  const { sectionRefs } = useActiveSectionContext();

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
