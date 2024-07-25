import About from "@/components/about/about";
import Experience from "@/components/experiences";
import HeroSection from "@/components/hero/hero-section";
import Skills from "@/components/skill/skills";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Work />
    </main>
  );
}
