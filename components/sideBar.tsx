"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "@/public/profile-pic.jpeg";
import {
  FaBars,
  FaCertificate,
  FaKey,
  FaLightbulb,
  FaMicrophoneAlt,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { IoClose, IoPersonCircleOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { BsAward, BsEnvelopeOpen, BsJournalText } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const Sidebar = () => {
  const { activeSection, scrollToSection } = useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isJudgeDropdownOpen, setIsJudgeDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleJudgeDropdown = () =>
    setIsJudgeDropdownOpen(!isJudgeDropdownOpen);

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed flex items-center justify-between w-full h-24 z-50 bg-white dark:bg-[#212529] px-7 shadow-md">
        <div className="mt-3">
          <p className="text-lg font-normal dark:text-white text-[#212529] tracking-[1px]">
            Rahul Vadisetty
          </p>
          <p className="text-base dark:text-[#e9ecef] text-gray-600 font-light opacity-50">
            Experienced Sr Software Enginner (AI/ML Specialist)
          </p>
        </div>
        <button onClick={toggleSidebar} className="text-2xl">
          {!isOpen ? (
            <FaBars className="dark:text-[#e9ecef] text-[#212529]" />
          ) : (
            <IoClose className="dark:text-[#e9ecef] text-[#212529]" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed sidebar top-0 left-0 z-50 w-72 h-screen bg-[#F2F0EC] dark:bg-[#212529] text-[#212529] dark:text-white shadow-lg transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center p-6 ">
          <Image
            src={profile}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-2 border-gray-300"
          />
          <h2 className="mt-3 text-2xl font-semibold">Rahul Vadisetty</h2>
          <p className="text-base text-black dark:text-white font-extrabold opacity-80">
            Experienced Sr Software Enginner (AI/ML Specialist)
          </p>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-3 mt-4 px-4">
          <li onClick={() => handleMenuClick("ABOUT")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "ABOUT"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <IoPersonCircleOutline className="w-5 h-5" />
              ABOUT
            </div>
          </li>
          <li onClick={() => handleMenuClick("EDUCATION")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "EDUCATION"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaUserGraduate className="w-5 h-5" />
              EDUCATION
            </div>
          </li>
          <li onClick={() => handleMenuClick("EXPERIENCE")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "EXPERIENCE"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaUniversity className="w-5 h-5" />
              EXPERIENCE
            </div>
          </li>
          <li onClick={() => handleMenuClick("CERTIFICATION")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "CERTIFICATION"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaCertificate className="w-5 h-5" />
              CERTIFICATIONS
            </div>
          </li>
          <li onClick={() => handleMenuClick("GOOGLE_SCHOLAR")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "GOOGLE_SCHOLAR"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <MdSchool className="w-5 h-5" />
              GOOGLE SCHOLAR
            </div>
          </li>
          <li onClick={() => handleMenuClick("MEDIA")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "MEDIA"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <BsJournalText className="w-5 h-5" />
              MEDIA
            </div>
          </li>
          <li onClick={() => handleMenuClick("MEMBERSHIPS")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "MEMBERSHIPS"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaPeopleRoof className="w-5 h-5" />
              MEMBERSHIPS
            </div>
          </li>
          <li onClick={() => handleMenuClick("AWARDS")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "AWARDS"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <BsAward className="w-5 h-5" />
              AWARDS
            </div>
          </li>
          <li>
            <div
              className="p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300"
              onClick={toggleJudgeDropdown}
            >
              <FaMicrophoneAlt className="w-5 h-5" />
              <span className="font-medium">JUDGE</span>
            </div>
            {isJudgeDropdownOpen && (
              <ul className="ml-6 space-y-2 mt-2">
                <li onClick={() => handleMenuClick("JUDGE (Journals)")}>
                  <div
                    className={`p-2 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                      activeSection === "JUDGE (Journals)"
                        ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                        : ""
                    }`}
                  >
                    {/* <FaMicrophoneAlt className="w-4 h-4" /> */}
                    JUDGE (Journals)
                  </div>
                </li>
                <li onClick={() => handleMenuClick("JUDGE (Conference)")}>
                  <div
                    className={`p-2 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                      activeSection === "JUDGE (Conference)"
                        ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                        : ""
                    }`}
                  >
                    {/* <FaMicrophoneAlt className="w-4 h-4" /> */}
                    JUDGE (Conferences)
                  </div>
                </li>
                <li onClick={() => handleMenuClick("JUDGE (Book Chap)")}>
                  <div
                    className={`p-2 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                      activeSection === "JUDGE (Book Chap)"
                        ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                        : ""
                    }`}
                  >
                    {/* <FaMicrophoneAlt className="w-4 h-4" /> */}
                    JUDGE (Book Chapters)
                  </div>
                </li>
                <li onClick={() => handleMenuClick("JUDGE (Session Chair)")}>
                  <div
                    className={`p-2 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                      activeSection === "JUDGE (Session Chair)"
                        ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                        : ""
                    }`}
                  >
                    {/* <FaMicrophoneAlt className="w-4 h-4" /> */}
                    JUDGE (Session Chair)
                  </div>
                </li>
                <li onClick={() => handleMenuClick("JUDGE GITHUB OPEN SOURCE")}>
                  <div
                    className={`p-2 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                      activeSection === "JUDGE GITHUB OPEN SOURCE"
                        ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                        : ""
                    }`}
                  >
                    {/* <FaMicrophoneAlt className="w-4 h-4" /> */}
                    JUDGE GITHUB OPEN SOURCE
                  </div>
                </li>
              </ul>
            )}
          </li>

          <li onClick={() => handleMenuClick("PATENTS")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "PATENTS"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaLightbulb className="w-5 h-5" />
              PATENTS
            </div>
          </li>
          <li onClick={() => handleMenuClick("BOOKS")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "BOOKS"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <BiBook className="w-5 h-5" />
              BOOKS
            </div>
          </li>
          <li onClick={() => handleMenuClick("KEYNOT")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "KEYNOT"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaKey className="w-5 h-5" />
              KEY NOTE SPEAKER
            </div>
          </li>
          <li onClick={() => handleMenuClick("KEYNOT")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "MENTORSHIP"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <FaKey className="w-5 h-5" />
              MENTORSHIP
            </div>
          </li>
          <li onClick={() => handleMenuClick("CONTACT")}>
            <div
              className={`p-3.5 flex items-center cursor-pointer rounded-md gap-2 text-[13px] hover:bg-white border hover:border-black border-transparent dark:hover:border-yellow dark:hover:text-yellow dark:hover:bg-[#343A40] hover:rounded-md transition duration-300 ${
                activeSection === "CONTACT"
                  ? "dark:border-yellow dark:text-yellow dark:bg-[#343A40] rounded-md bg-white border-slate-950 border-black"
                  : ""
              }`}
            >
              <BsEnvelopeOpen className="w-5 h-5" />
              CONTACT
            </div>
          </li>
        </ul>

        <div className="flex justify-center mt-12 mb-6">
          <div className="p-2 rounded-full dark:bg-[#343A40] hover:text-white bg-[#E9ECEF] hover:bg-[#0E76A8] dark:hover:bg-[#0E76A8] cursor-pointer">
            <Link href="https://www.linkedin.com/in/rahulv91/" target="_blank">
              <FaLinkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
