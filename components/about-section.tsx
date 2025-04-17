"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  Cog, 
  Wrench, 
  Cpu, 
  Ship, 
  ChevronRight
} from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 bg-muted/50" id="about">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Me</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              With over a decade of experience spanning engineering disciplines, I bring a unique perspective to solving complex technical challenges.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                PhD student in Projects, Master&apos;s in Industrial Maintenance and Production Engineering, and specialized diplomas in Marine and Mechanical Engineering.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                6+ years in education and training, with additional experience as a project engineer, consultant, and design specialist.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Cog className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Expertise</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Specialized in mechanical systems design, industrial automation, CAD/CAM technologies, and engineering simulations.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Engineering</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Strong foundation in mechanical principles, materials science, structural analysis, and maintenance systems.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Technology</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Proficient in multiple CAD/CAM software, simulation tools (ANSYS, MATLAB), and specialized engineering applications.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Ship className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Marine Systems</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Specialized knowledge in marine engineering, vessel systems, and maritime regulations and safety protocols.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            My philosophy is to approach complex engineering challenges with a combination of theoretical knowledge, practical experience, and innovative thinking to deliver efficient and effective solutions.
          </p>
          <a href="/about" className="mt-4 inline-flex items-center text-primary hover:underline">
            Learn more about my background <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
} 