"use client";
import MainTitle from "@/common/mainTitle";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { MdSchool } from "react-icons/md";

export default function GoogleScholar() {
  const { sectionRefs } = useActiveSectionContext();
  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["GOOGLE_SCHOLAR"] = el)}
        id="googleScholar"
      >
        <MainTitle
          heading={{
            title: "Google Scholar",
            icon: MdSchool,
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="mt-10 text-center">
            <Link
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=1&hl=en&user=zLRrw_wAAAAJ&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300"
            >
              View More on Google Scholar
            </Link>
          </div>
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
