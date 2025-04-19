"use client";
import MainTitle from "@/common/mainTitle";
import Image from "next/image";
import { BsAward } from "react-icons/bs";
import { awards, patentExhibition } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

// const parseDate = (dateString: string): [number, number, number] => {
//   const [monthName, dayRange, year] = dateString.split(/[\s,]+/);
//   const months: Record<string, number> = {
//     January: 1,
//     February: 2,
//     March: 3,
//     April: 4,
//     May: 5,
//     June: 6,
//     July: 7,
//     August: 8,
//     September: 9,
//     October: 10,
//     November: 11,
//     December: 12,
//   };

//   const month = months[monthName] || 0;
//   const day = dayRange ? parseInt(dayRange.split("-")[0], 10) : 1;
//   return [month, day, parseInt(year, 10)];
// };

export default function PatentExhibition() {
  const { sectionRefs } = useActiveSectionContext();

  // const sortedAwards = [...patentExhibition].sort((a, b) => {
  //   const [monthA, dayA, yearA] = parseDate(a.date);
  //   const [monthB, dayB, yearB] = parseDate(b.date);

  //   if (yearA !== yearB) return yearB - yearA;
  //   if (monthA !== monthB) return monthB - monthA;
  //   return dayB - dayA;
  // });

  return (
    <section
      className="mx-auto mb-24 scroll-mt-10"
      ref={(el) => (sectionRefs.current["Patent_exhibition"] = el)}
      id="Patent_exhibition"
    >
      <MainTitle
        heading={{ title: "Patent and Book exhibition", icon: BsAward }}
      />
      <div className="mt-12 flex gap-4 flex-col">
        {patentExhibition.map((items, index: number) => (
          <div
            className="flex flex-col lg:flex-row text-white rounded-lg mt-12"
            key={index}
          >
            <div className="lg:w-1/2 flex flex-col lg:pl-12">
              <p className="font-semibold dark:text-yellow text-[#212529] mt-4">
                <span className="text-gray-400">Exhibition Name:</span>{" "}
                {items?.exhibitionName}
              </p>
              <p className="font-semibold dark:text-yellow text-[#212529]">
                <span className="text-gray-400">Exhibition Link:</span>{" "}
                {items?.exhibitionLink}
              </p>
              <p className="font-semibold dark:text-yellow text-[#212529]">
                <span className="text-gray-400">Exhibition Date:</span>{" "}
                {items?.eventDate}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-16 dark:bg-white bg-black dark:opacity-10" />
    </section>
  );
}
