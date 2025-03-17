"use client";
import MainTitle from "@/common/mainTitle";
import { FaCertificate } from "react-icons/fa";
import CredentialCard from "@/common/certificateCard";
import { certifications } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
const Certifications = () => {
  const { sectionRefs } = useActiveSectionContext();

  return (
    <div
      ref={(el) => (sectionRefs.current["CERTIFICATION"] = el)}
      id="certification"
      className="scroll-mt-10"
    >
      <div className="mb-24">
        <MainTitle heading={{ title: "Certifications", icon: FaCertificate }} />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-12 gap-6">
          {certifications.map((cert, index) => (
            <CredentialCard
              key={index}
              title={cert.title}
              image={cert.image}
              credentialLink={cert.credentialLink}
              altText={cert.altText}
            />
          ))}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </div>
  );
};

export default Certifications;
