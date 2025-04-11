import About from "@/components/about";
import Articles from "@/components/articles";
import AwardList from "@/components/awards";
import Book from "@/components/book";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Education from "@/components/education";
import ExperienceTimeline from "@/components/experience";
import GoogleScholar from "@/components/googleScholar";
import Judge from "@/components/judge";
import JudgeBookChap from "@/components/JudgeBookChap";
import JudgeConference from "@/components/judgeConference";
import JudgeGithub from "@/components/judgeGithub";
import JudgeSessionChair from "@/components/judgeSessionChair";
import KeyNoteSpeaker from "@/components/keyNoteSpeaker";
import MembershipList from "@/components/membershipList";
import MentorShip from "@/components/mentorShip";
import PatentExhibition from "@/components/patentExhibition";
import Patents from "@/components/patents";
import WorkshopList from "@/components/Workshop";

export default function Home() {
  return (
    <main className="px-8 lg:ml-80">
      <About />
      <Education />
      <ExperienceTimeline />
      <Certifications />
      <GoogleScholar />
      <Articles />
      <MembershipList />
      <AwardList />
      <Judge />
      <JudgeConference />
      <JudgeSessionChair />
      <JudgeBookChap />
      <JudgeGithub />
      <Patents />
      <Book />
      <KeyNoteSpeaker />
      <WorkshopList />
      <PatentExhibition />
      <MentorShip />
      <Contact />
    </main>
  );
}
