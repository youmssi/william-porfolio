import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Settings, Leaf, Bot, Layers, Brain, Atom } from "lucide-react";

const researchAreas = [
  {
    title: "Robotics and Automation",
    icon: <Bot className="h-6 w-6 text-primary" />
  },
  {
    title: "Additive Manufacturing and 3D Printing",
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  {
    title: "Sustainable Engineering and Renewable Energy",
    icon: <Leaf className="h-6 w-6 text-primary" />
  },
  {
    title: "Artificial Intelligence and Machine Learning Integration",
    icon: <Brain className="h-6 w-6 text-primary" />
  },
  {
    title: "Industry 4.0 and Smart Manufacturing",
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Computational Mechanics and Simulation",
    icon: <Cpu className="h-6 w-6 text-primary" />
  },
  {
    title: "Advanced Materials and Nanotechnology",
    icon: <Atom className="h-6 w-6 text-primary" />
  }
];

export function ResearchAreaSection() {
  return (
    <section className="py-16 bg-muted/50" id="research-area">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Research Areas</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Key domains of expertise and ongoing research interests.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, idx) => (
            <Card key={idx} className="flex flex-col items-center text-center h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center gap-4 flex-1 justify-center">
                <div>{area.icon}</div>
                <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 