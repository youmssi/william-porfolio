import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { LazySection } from "@/components/lazy-section";

// Use metadata for better SEO
export const metadata = {
  title: "William Timoh | Engineering & Technology Expert",
  description: "Portfolio of Timoh William Chick - Expert in Mechanical Engineering, Automation, and Marine Engineering",
};

export default function Home() {
  return (
    <>
      {/* Hero is loaded immediately */}
      <HeroSection />
      
      {/* Other sections are lazy loaded as user scrolls */}
      <LazySection>
        <AboutSection />
      </LazySection>
      
      <LazySection>
        <SkillsSection />
      </LazySection>
      
      <LazySection>
        <ExperienceSection />
      </LazySection>
      
      <LazySection>
        <ProjectsSection />
      </LazySection>
      
      <LazySection>
        <ContactSection />
      </LazySection>
    </>
  );
}
