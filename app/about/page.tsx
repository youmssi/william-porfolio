import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";

export default function AboutPage() {
  return (
    <>
      <div className="py-12 md:py-16 space-y-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">About Me</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
            Learn more about my background, skills, and professional journey
          </p>
        </div>
      </div>
      
      <AboutSection />
      <SkillsSection />
    </>
  );
} 