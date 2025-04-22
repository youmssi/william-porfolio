"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Cog, Ship, Wind, Factory, Wrench } from "lucide-react";

export function ProjectsSection() {
  const currentProjects = [
    {
      id: 1,
      title: "AI-Based Tool Path Optimization Algorithm for CNC Machining",
      description: "Development of an AI-driven algorithm to optimize tool paths for CNC machining operations, increasing efficiency and reducing material waste.",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      tags: ["AI", "CNC", "Manufacturing", "Optimization"]
    },
    {
      id: 2,
      title: "Beans Pealing Machine",
      description: "Design and development of an efficient beans pealing machine to automate and improve the food processing industry.",
      icon: <Factory className="h-8 w-8 text-primary" />,
      tags: ["Food Processing", "Mechanical Design", "Automation"]
    },
    {
      id: 3,
      title: "Sugarcane Pressing Machine",
      description: "Engineering a high-efficiency sugarcane pressing machine for small to medium-scale operations.",
      icon: <Factory className="h-8 w-8 text-primary" />,
      tags: ["Agricultural Engineering", "Mechanical Design", "Efficiency"]
    },
    {
      id: 4,
      title: "Solar Energy Heat Magnetic Tramway Levitation",
      description: "Innovative application of solar energy for magnetic levitation in local inter-region transportation systems.",
      icon: <Wind className="h-8 w-8 text-primary" />,
      tags: ["Renewable Energy", "Transportation", "Magnetic Levitation"]
    },
    {
      id: 5,
      title: "Enhanced Wind Tracker Structural Modeling System",
      description: "Development of advanced structural modeling for repositioning floating offshore wind turbines for optimal energy capture.",
      icon: <Wind className="h-8 w-8 text-primary" />,
      tags: ["Renewable Energy", "Structural Engineering", "Modeling"]
    }
  ];

  const pastProjects = [
    {
      id: 1,
      title: "Air Cooling System for Buses",
      description: "Supervised the design of an air cooling system for buses, simulating airflow patterns and temperature distributions using vortex tube technology.",
      icon: <Cog className="h-8 w-8 text-primary" />,
      tags: ["HVAC", "CFD Simulation", "Thermal Analysis"]
    },
    {
      id: 2,
      title: "Dual Fuel Injector for Diesel Engine Starting System",
      description: "Supervised the design of a dual fuel injector system for diesel engines with stress, shear, and temperature analysis through FEA.",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      tags: ["Engine Design", "FEA", "Fluid Systems"]
    },
    {
      id: 3,
      title: "Wood Gasifier System",
      description: "Supervised the sizing, drawing, and 3D design of a wood gasifier system with comprehensive system analysis.",
      icon: <Factory className="h-8 w-8 text-primary" />,
      tags: ["Alternative Energy", "3D Design", "System Analysis"]
    },
    {
      id: 4,
      title: "SONAR for Sea Depth Measurement",
      description: "Supervised the design and simulation of a SONAR system for sea depth measurement using Arduino and Proteus software.",
      icon: <Ship className="h-8 w-8 text-primary" />,
      tags: ["Marine Technology", "Electronics", "Simulation"]
    },
    {
      id: 5,
      title: "Hull Optimization through CFD Analysis",
      description: "3D design and optimization of boat hulls using computational fluid dynamics to determine drag and FEA of hull structure.",
      icon: <Ship className="h-8 w-8 text-primary" />,
      tags: ["Naval Architecture", "CFD", "Structural Analysis"]
    }
  ];

  return (
    <section className="py-16 bg-muted/50" id="projects">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Researchs & Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Showcasing innovative engineering solutions and research initiatives
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="current">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="current">Current Projects</TabsTrigger>
                <TabsTrigger value="past">Past Projects</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="current" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((project) => (
                  <Card key={project.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="mb-4">{project.icon}</div>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pastProjects.map((project) => (
                  <Card key={project.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="mb-4">{project.icon}</div>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
} 