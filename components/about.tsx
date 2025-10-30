"use client";
import Image from "next/image";
import profile from "@/public/profile-pic.jpeg";
import { useActiveSectionContext } from "@/context/active-section-context";

const About = () => {
  const { sectionRefs } = useActiveSectionContext();

  return (
    <div
      className="flex flex-col md:flex-row dark:text-white text-[#212529] pt-36 items-stretch"
      ref={(el) => (sectionRefs.current["ABOUT"] = el)}
      id="about"
    >
      {/* Left Side: Text Content with Vertical Line */}
      <div className="md:w-1/2 md:text-left flex flex-col justify-center">
        <h4 className="text-base font-thin uppercase mb-8 text-yellow tracking-[3px]">
          - Bio
        </h4>
        <h1 className="text-4xl md:text-6xl font-bold leading-snug mt-2 font-larken tracking-[3px]">
          Rahul Vadisetty
        </h1>
        <p className="text-base font-semibold dark:text-white text-[#212529] mt-10 leading-8 font-larken border-l-4 border-yellow pl-6">
          Rahul Vadisetty is a Cloud Infrastructure Architect at the Gemological Institute of America (GIA). He earned his Master’s degree in Electrical Engineering from Wayne State University (2015) and a Bachelor’s degree in Electronics and Communication Engineering (ECE) from JNTU Kakinada.
          Rahul has made significant contributions in the fields of Cloud Computing and Artificial Intelligence (AI), authoring or contributing to 69 publications, presentations, lectures, and courses. He has received multiple Best Paper Awards and holds active memberships as a Senior Member of IEEE, ACM, BCS, and Sigma Xi.
          His research focuses on AI-driven cybersecurity, intelligent cloud infrastructure, and adaptive data protection systems. His architectural designs integrate AI-powered intelligence that continuously monitors, detects, and mitigates cyber threats across cloud, on-premises, and mobile environments. 
          By leveraging machine learning for adaptive threat detection and automated data protection, his frameworks enhance the integrity, confidentiality, and availability of information systems—ensuring compliance, scalability, and resilience against evolving cyber risks.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center items-stretch mt-10">
        <div className="relative w-full max-w-[529px] h-full">
          <Image
            src={profile}
            alt="Rahul Vadisetty"
            layout="responsive"
            width={529}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
