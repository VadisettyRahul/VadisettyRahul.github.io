"use client";
import React from "react";
import MainTitle from "@/common/mainTitle";
import { FaUserGraduate } from "react-icons/fa";
import { TbBook } from "react-icons/tb";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

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
        <div className="flex gap-5 mt-12">
          <Image
            src={"/wayne_state_university_logo.jpeg"}
            alt={"Wayne State University"}
            width={50}
            height={50}
            className=""
          />
          <div className="">
            <p className="text-lg dark:text-white text-[#212529] font-semibold font-larken">
              Masters in Electrical Enginnering
            </p>
            <p className="text-base text-[#6c757d] dark:text-[#CED4DA] flex mt-1">
              Wayne State University, Detroit, MI
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-12">
          <Image
            src={"/SriChaitanyaEngineeringCollege.avif"}
            alt={"Wayne State University"}
            width={50}
            height={50}
            className=""
          />
          <div className="">
            <p className="text-lg dark:text-white text-[#212529] font-semibold font-larken">
              Bachelors in Electronics and Communications
            </p>
            <p className="text-base text-[#6c757d] dark:text-[#CED4DA] mt-1">
              Sri Chaitanya Engineering College , Kommadi, Madhurawada,
              Visakhapatnam, Andhra Pradesh. Pincode : 530048.
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
};

export default Education;
