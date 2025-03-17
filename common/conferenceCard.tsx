import React from "react";

const ConferenceCard = ({
  event,
  date,
  role,
  index,
  isOpen,
  toggleAccordion,
  topicName,
  conferenceName,
  conferenceSortName,
}: any) => {
  return (
    <div
      className="dark:bg-[#212529] bg-[#F8F9FA] p-6 rounded-lg w-full mb-6 cursor-pointer transition-all duration-300"
      onClick={() => toggleAccordion(index)}
    >
      <span className="text-yellow-400 text-2xl font-semibold text-[#212529] dark:text-white">
        {conferenceName}
      </span>
      <div className="flex justify-between items-center cursor-pointer">
        <h2 className="text-1xl font-bold text-[#212529] dark:text-white">
          {topicName}
        </h2>
      </div>
      <p className="text-gray-400 text-sm mt-2">
        {role} | {event}
      </p>
      <div className="mt-3">
        <span className="bg-yellow text-black px-3 py-1 text-sm font-semibold rounded-md">
          {date}
        </span>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <hr className="my-4 border-gray-700" />
        <p className="text-[#212529] dark:text-white">{conferenceSortName}</p>
      </div>
    </div>
  );
};

export default ConferenceCard;
