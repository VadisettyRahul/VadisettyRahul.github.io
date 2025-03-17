import React from "react";

const MainTitle = ({ heading }: any) => {
  return (
    <div className="flex items-center justify-center">
      <heading.icon className="w-14 h-14 text-yellow pr-2" />
      <h1 className="lg:text-6xl text-4xl font-bold text-[#212529] dark:text-white font-larken">
        {heading.title}
      </h1>
    </div>
  );
};

export default MainTitle;
