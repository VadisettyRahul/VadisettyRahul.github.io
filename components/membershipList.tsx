"use client";
import MainTitle from "@/common/mainTitle";
import { useActiveSectionContext } from "@/context/active-section-context";
import { memberships } from "@/lib/data";
import Link from "next/link";
import { FaPeopleRoof } from "react-icons/fa6";

export default function MembershipList() {
  const { sectionRefs } = useActiveSectionContext();

  return (
    <>
      <div
        className="text-white mb-24 flex flex-col items-center scroll-mt-10"
        ref={(el) => (sectionRefs.current["MEMBERSHIPS"] = el)}
        id="memberships"
      >
        <MainTitle heading={{ title: "Memberships", icon: FaPeopleRoof }} />
        <div className="w-full mt-12">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg mb-10 group"
            >
              <Link
                href={membership?.link}
                target="_blank"
                className="border-2 border-transparent rounded-full p-1 group-hover:border-[#484E53] transition-colors duration-200"
              >
                <div className="w-16 h-16 flex-shrink-0 bg-yellow rounded-full flex items-center justify-center group-hover:bg-[#484E53] transition-colors duration-200">
                  <membership.icon className="w-7 h-7" />
                </div>
              </Link>
              <div className="ml-4 text-[#212529] dark:text-white">
                <span className="dark:text-white text-[#212529] text-2xl">
                  {membership.title}
                </span>
                <Link href={membership?.link} target="_blank">
                  <p className="text-yellow-400 text-yellow mt-2 text-lg">
                    {membership.role}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
