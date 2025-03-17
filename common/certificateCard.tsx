import Image from "next/image";
import Link from "next/link";

const CredentialCard = ({ title, image, credentialLink, altText }: any) => {
  return (
    <div className="dark:bg-[#212529] border rounded-md bg-white text-white p-5 flex flex-wrap md:flex-nowrap gap-4 items-center">
      <div className="flex justify-center w-full md:w-auto">
        <Image
          src={image}
          alt={altText}
          width={50}
          height={50}
          className="object-contain max-w-full h-auto"
        />
      </div>
      <div className="w-full">
        <h2 className="text-base font-light mt-2 dark:text-[#DEE2E6] text-[#212529]">
          {title}
        </h2>
        <div className="mt-3">
          <Link
            href={credentialLink}
            target="_blank"
            className="block w-full md:w-auto text-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            View Credential
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CredentialCard;
