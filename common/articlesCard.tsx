import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({
  image,
  conferenceName,
  publisher,
  date,
  link,
  mediaLink,
  shortName,
}: any) => {
  return (
    <div className="flex flex-col lg:flex-row text-white rounded-lg mt-12 ">
      <div className="lg:w-1/2 flex flex-col lg:pl-12">
        <h3 className="text-xl font-bold mb-2 leading-8 dark:text-white text-[#212529] font-larken">
          {conferenceName}
        </h3>
        <p className="font-semibold dark:text-yellow text-[#212529] mt-4">
          <span className="text-gray-400">Publisher:</span> {publisher}
        </p>
        <p className="font-semibold dark:text-yellow text-[#212529]">
          <span className="text-gray-400">Published on:</span> {date}
        </p>
        <p className="font-semibold dark:text-yellow text-[#212529]">
          <span className="text-gray-400">Conference Link:</span>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            {shortName}
          </Link>
        </p>
        <div className="flex gap-4 items-center">
          <span className="text-gray-400">Media :</span>
          <a href={mediaLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={conferenceName}
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
};

export default ArticleCard;
