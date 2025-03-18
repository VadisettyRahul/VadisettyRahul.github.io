"use client";
import React from "react";
import MainTitle from "@/common/mainTitle";
import { FaUserGraduate } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import { education } from "@/lib/data";

const Education = () => {
  const { sectionRefs } = useActiveSectionContext();
  return (
    <>
      <div
        className="mb-24 mt-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["EDUCATION"] = el)}
        id="education"
      >
        <MainTitle heading={{ title: "Education", icon: FaUserGraduate }} />
        {education.map((item, index) => (
          <div className="flex gap-5 mt-12" key={index}>
            <Image
              src={item.logo}
              alt={"Wayne State University"}
              width={50}
              height={50}
              className=""
            />
            <div className="">
              <p className="text-lg dark:text-white text-[#212529] font-semibold font-larken">
                {item.degree}
              </p>
              <p className="text-base text-[#6c757d] dark:text-[#CED4DA] flex mt-1">
                {item.university}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
};

export default Education;
