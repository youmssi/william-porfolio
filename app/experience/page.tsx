import { ExperienceSection } from "@/components/experience-section";

export default function ExperiencePage() {
  return (
    <>
      <div className="py-12 md:py-16 space-y-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Experience</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
            My professional journey, education, and qualifications
          </p>
        </div>
      </div>
      
      <ExperienceSection />
    </>
  );
} 