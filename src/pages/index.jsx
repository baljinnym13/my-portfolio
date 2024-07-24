import About from "@/components/about/about";
import ExperienceCard from "@/components/experiences";
import HeroSection from "@/components/hero/hero-section";
import Skills from "@/components/skill/skills";
const experiences = [
  {
    title: "Senior",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
  {
    title: "Team-Lead",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
  {
    title: "Mid Engineer",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
  {
    title: "Junior",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Skills />
      {experiences.map(({ title, companyLogo, jobRoles }) => (
        <ExperienceCard
          title={title}
          companyLogo={companyLogo}
          jobRoles={jobRoles}
        />
      ))}
    </main>
  );
}
