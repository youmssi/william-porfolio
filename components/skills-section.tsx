"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SkillsChart } from "@/components/skills-chart";

export function SkillsSection() {
  const technicalSkills = [
    { name: "CAD/CAM Software", proficiency: 95 },
    { name: "Engineering Simulation", proficiency: 90 },
    { name: "CNC Machining & Programming", proficiency: 90 },
    { name: "3D Modeling & Design", proficiency: 95 },
    { name: "FEA & CFD Analysis", proficiency: 85 },
    { name: "Mechanical Systems Design", proficiency: 90 },
    { name: "Industrial Automation", proficiency: 85 },
    { name: "Material Testing & Analysis", proficiency: 80 },
    { name: "Project Management", proficiency: 85 },
    { name: "Manufacturing Processes", proficiency: 90 },
  ];

  const softwareSkills = [
    { category: "CAD/CAM", skills: ["Siemens NX", "ANSYS", "SIMUMERIK", "aUTODESK 360"] },
    { category: "Programming", skills: ["Python (in progress)", "C++", "MATLAB"] },
    { category: "AI/ML", skills: ["TensorFlow (in progress)", "Reinforcement Learning (in progress)"] },
    { category: "Simulation", skills: ["FEA (ANSYS)", "CFD", "Kongsberg Simulation Trainer"] },
    { category: "Others", skills: ["LabView", "Proteus", "Arduino", "Ms Project"] },
    // { category: "Office & Project", skills: ["Microsoft Word", "Excel", "Access", "MS Project", "PowerPoint"] },
    // { category: "Specialized", skills: ["Proteus", "Lab View", "Energy Plus", "Sketch Up", "Kongsberg Simulator"] },
  ];

  const professionalSkills = [
    { name: "Project Leadership", proficiency: 85 },
    { name: "Technical Documentation", proficiency: 90 },
    { name: "Research Methodology", proficiency: 95 },
    { name: "Problem Solving", proficiency: 90 },
    { name: "Team Coordination", proficiency: 85 },
    { name: "Technical Teaching", proficiency: 95 },
    { name: "Client Consultation", proficiency: 80 },
    { name: "Engineering Analysis", proficiency: 90 },
    { name: "Innovation & Design Thinking", proficiency: 85 },
    { name: "Technical Troubleshooting", proficiency: 95 },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills & Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Technical proficiencies and professional capabilities
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="technical">
            <div className="flex justify-center mb-8">
              <TabsList className="flex flex-wrap gap-2 sm:gap-0 w-full sm:w-auto">
                <TabsTrigger value="technical" className="flex-1 sm:flex-initial px-3 md:px-4 py-2">
                  <span className="hidden sm:inline">Technical Skills</span>
                  <span className="sm:hidden">Technical</span>
                </TabsTrigger>
                <TabsTrigger value="software" className="flex-1 sm:flex-initial px-3 md:px-4 py-2">
                  <span className="hidden sm:inline">Software Proficiency</span>
                  <span className="sm:hidden">Software</span>
                </TabsTrigger>
                <TabsTrigger value="professional" className="flex-1 sm:flex-initial px-3 md:px-4 py-2">
                  <span className="hidden sm:inline">Professional Skills</span>
                  <span className="sm:hidden">Professional</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical">
              <div className="grid gap-6 md:grid-cols-2">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Card>
                  <CardContent className="p-4">
                    <SkillsChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="software">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {softwareSkills.map((category) => (
                  <Card key={category.category}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional">
              <div className="grid gap-6 md:grid-cols-2">
                {professionalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>English</span>
                    <span>Excellent</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>French</span>
                    <span>Very Good</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Manufacturing</Badge>
                <Badge>Fabrication</Badge>
                <Badge>Engineering Design</Badge>
                <Badge>Research Tools</Badge>
                <Badge>Materials</Badge>
                <Badge>Energy Systems</Badge>
                <Badge>Structural Design</Badge>
                <Badge>Product Design</Badge>
                <Badge>Project Management</Badge>
                <Badge>Maintenance</Badge>
                <Badge>Reliability Engineering</Badge>
                <Badge>Industrial Automation</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 