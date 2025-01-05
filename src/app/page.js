import Banner from "@/components/home-page/Banner";
import Projects from "@/components/home-page/Projects";
import Collaborate from "@/components/home-page/Collaborate";
import WorkExperience from "@/components/home-page/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[#060608] px-5">
      <Banner />
      <Projects />
      <WorkExperience />
      <Collaborate />
    </div>
  );
}
