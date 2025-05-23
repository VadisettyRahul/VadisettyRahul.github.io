"use client";
import MainTitle from "@/common/mainTitle";
import Image from "next/image";
import { BsAward } from "react-icons/bs";
import { awards } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const parseDate = (dateString: string): [number, number, number] => {
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

  const month = months[monthName] || 0;
  const day = dayRange ? parseInt(dayRange.split("-")[0], 10) : 1;
  return [month, day, parseInt(year, 10)];
};

export default function AwardList() {
  const { sectionRefs } = useActiveSectionContext();

  const sortedAwards = [...awards].sort((a, b) => {
    const [monthA, dayA, yearA] = parseDate(a.date);
    const [monthB, dayB, yearB] = parseDate(b.date);

    if (yearA !== yearB) return yearB - yearA;
    if (monthA !== monthB) return monthB - monthA;
    return dayB - dayA;
  });

  const truncateWords = (text: string, limit: number): string => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
    <section
      className="mx-auto mb-24 scroll-mt-10"
      ref={(el) => (sectionRefs.current["AWARDS"] = el)}
      id="awards"
    >
      <MainTitle heading={{ title: "Awards", icon: BsAward }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 justify-center">
        {sortedAwards.map((award: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center text-center justify-between"
          >
            <Image
              src={award.image}
              alt={award.conferenceName}
              width={310}
              height={113}
              className="mx-auto bg-slate-50 cursor-pointer"
              loading="lazy"
              onClick={() => {
                window.open(award?.mediaLink, "_blank", "noopener,noreferrer");
              }}
            />
            <h2
              className="text-xl font-semibold text-[#212529] dark:text-white mt-6 font-larken cursor-pointer"
              onClick={() => {
                window.open(award?.mediaLink, "_blank", "noopener,noreferrer");
              }}
            >
              {award.conferenceName}
            </h2>
            <p
              className="text-md text-gray-400 mt-1 cursor-pointer"
              onClick={() => {
                window.open(award?.mediaLink, "_blank", "noopener,noreferrer");
              }}
            >
              <span className="font-medium">
                {truncateWords(award.awardName, 5)} : {award.date}
              </span>
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-16 dark:bg-white bg-black dark:opacity-10" />
    </section>
  );
}
