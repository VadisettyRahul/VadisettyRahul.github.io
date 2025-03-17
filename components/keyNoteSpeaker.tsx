"use client";
import MainTitle from "@/common/mainTitle";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import Link from "next/link";
import { FaKey } from "react-icons/fa";

const keyNoteData = [
  {
    image: "/ny-black.webp",
    conferenceName: "IEEE CN Smart Cities Austin Texas USA",
    publisher: "IEEE",
    shortName: "IEEE CN Smart Cities Austin Texas USA",
    date: "2024",
    link: "https://events.vtools.ieee.org/m/430011/",
    mediaLink:
      "https://nyweekly.com/tech/rahul-vadisetty-and-anand-polamarasetti-smart-city-development",
  },
  {
    image: "/esp.png",
    conferenceName: "ICICCS- 2024",
    publisher: "Eternal Scientific Publication",
    shortName: "Eternal Scientific Publication",
    date: "2024",
    link: "https://www.espjournals.org/",
    mediaLink:
      "https://www.espjournals.org/International_Conference_ICICCS.php",
  },
];

export default function KeyNoteSpeaker() {
  const { sectionRefs } = useActiveSectionContext();
  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["KEYNOT"] = el)}
        id="keyNot"
      >
        <MainTitle
          heading={{
            title: "Key Note Speaker",
            icon: FaKey,
          }}
        />
        {keyNoteData?.map((items, i) => {
          return (
            <div
              className="flex flex-col lg:flex-row text-white rounded-lg mt-12"
              key={i}
            >
              <div className="lg:w-1/2 flex flex-col lg:pl-12">
                <h3 className="text-xl font-bold mb-2 leading-8 dark:text-white text-[#212529] font-larken">
                  {items?.conferenceName}
                </h3>
                <p className="font-semibold dark:text-yellow text-[#212529] mt-4">
                  <span className="text-gray-400">Publisher:</span>{" "}
                  {items?.publisher}
                </p>
                <p className="font-semibold dark:text-yellow text-[#212529]">
                  <span className="text-gray-400">Published on:</span>{" "}
                  {items?.date}
                </p>
                <p className="font-semibold dark:text-yellow text-[#212529]">
                  <span className="text-gray-400">Link:</span>
                  <Link
                    href={items?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    {items?.shortName}
                  </Link>
                </p>
                <div className="flex gap-4 items-center">
                  <span className="text-gray-400">Media :</span>
                  <a
                    href={items?.mediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={items?.image}
                      alt={"conferenceName"}
                      width={100}
                      height={100}
                      className="rounded-lg dark:bg-white bg-[#E9ECEF] mt-2"
                      style={{
                        objectFit: "contain",
                        width: "100px",
                        height: "50px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
