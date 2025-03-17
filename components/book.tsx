"use client";
import MainTitle from "@/common/mainTitle";
import { useActiveSectionContext } from "@/context/active-section-context";
import { books } from "@/lib/data";
import Link from "next/link";
import { BsBook } from "react-icons/bs";

export default function BooksList() {
  const { sectionRefs } = useActiveSectionContext();
  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["BOOKS"] = el)}
        id="book"
      >
        <MainTitle
          heading={{
            title: "Books & Book Chapters & Book Editor",
            icon: BsBook,
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {books.map((book, index) => (
            <Link
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white dark:bg-[#212529] rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white font-larken">
                {book.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {book.publisher}
              </p>
              <p className="text-blue-500 hover:underline mt-3 text-sm font-medium">
                View Book &rarr;
              </p>
            </Link>
          ))}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
