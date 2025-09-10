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
            As Head of PKFokam Mechanical Engineering Lab, I lead the PKFokam Innova on Lab Projects, 
supervising innovative solutions in robotics, AI-driven CNC optimization, subtractive and additive 
manufacturing, and sustainable engineering. My research, MSMAAI, optimizes machining sequences 
using ML and RL for Industry 4.0. With a Master’s in Industrial Maintenance and Production 
Engineering, CNC certifications (Siemens 828D), and expertise in CAD/CAM (SolidWorks, ANSYS), I am 
open to PhD opportunities and industry R&D roles. Download Research Proposal  
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
              
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                <li>
                  MSc Mechatronics Engineering (Expected 2026) 2025–2026
                  <div>ColTech College of Technology, University of Buea</div>
                </li>
                <li>
                  Current Research: Digital Twin Framework for AI-Optimized Cocoa Harvesting with Field Validation of
                  Robotic Harvesting in Tropical Farms
                </li>
                <li>
                  Master&apos;s in Industrial Maintenance and Production Engineering, and specialized diplomas in Marine and Mechanical Engineering [GPA, 3,2/4,0].
                </li>
              </ul>
              
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
              Artificial Intelligence / Industrial 4.0, Digital Manufacturing & Design , Project Management 
Product Design Production Processing Business-strategy & Marketing Industrial Automation Field-
Engineering Maintenance Reliability-Engineering Engineering simulations Mechanical Designs 
Application Software Hydraulic /Pneumatic Engineering Structural Design Materials 
Characterizations Marine Engineering Mechanical Engineering Computational Simulation Data 
acquisition system Primavera P6s Oil And Gas Engineering Research and Professional Foundry and 
Welding
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