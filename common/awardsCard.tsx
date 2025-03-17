import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";

const AwardCards = ({
  image,
  title,
  subtitle,
  publisher,
  date,
  link,
  mediaLink,
}: any) => {
  return (
    <div className="flex flex-col lg:flex-row text-white rounded-lg mt-12">
      {/* Left Section with Image */}
      {/* <div className="relative w-full lg:w-1/2">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-80 rounded-lg"></div>
      </div> */}

      {/* Right Section with Text */}
      <div className="lg:w-1/2 flex flex-col lg:pl-12">
        <h3 className="text-xl font-bold mb-2 leading-8 dark:text-white text-[#212529] font-larken">
          {title}
        </h3>
        <p className="font-semibold text-yellow mt-4">
          <span className="text-gray-400">Publisher:</span> {publisher}
        </p>
        <p className="font-semibold text-yellow">
          <span className="text-gray-400">Published on:</span> {date}
        </p>
        <p className="font-semibold text-yellow">
          <span className="text-gray-400">Conference Link:</span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            {link}
          </a>
        </p>
        <div className="flex gap-4 items-center flex">
          <span className="text-gray-400">Media :</span>
          <a href={mediaLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="rounded-lg bg-white p-3 mt-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwardCards;
