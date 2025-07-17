import { Card, CardContent } from "@/components/ui/card";

export default function ResearchContributionsPage() {
  return (
    <>
      <div className="py-12 md:py-16 space-y-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Research Contributions</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
            Key research presentations and ongoing academic work.
          </p>
        </div>
      </div>
      <section className="py-8">
        <div className="container px-4 md:px-6 mx-auto max-w-2xl">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Conference Presentation</h2>
                <p className="text-muted-foreground text-sm">
                  “Optimization of Data Research Management in African Universities: Case Study of Mechanical Engineering Labs,” PKFokam Conference on Science & Technology, Cameroon, 2023.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">In Progress</h2>
                <p className="text-muted-foreground text-sm">
                  Preparing paper on “AI-Driven Machining Sequence Optimization for CNC Milling” for ASME MSEC 2026.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
} 