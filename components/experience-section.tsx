"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-16" id="experience">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Experience & Qualifications</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              My professional journey and educational background
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="work">
            <div className="flex justify-center mb-8">
              <TabsList className="flex flex-wrap gap-2 sm:gap-0">
                <TabsTrigger value="work" className="flex items-center gap-2 px-3 md:px-4">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Work Experience</span>
                  <span className="sm:hidden">Work</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2 px-3 md:px-4">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                  <span className="sm:hidden">Edu</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2 px-3 md:px-4">
                  <Award className="h-4 w-4" />
                  <span className="hidden sm:inline">Certifications</span>
                  <span className="sm:hidden">Certs</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="work" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Head of Laboratory, Mechanical Engineering</CardTitle>
                  <CardDescription>PKFokam University Institute of Excellence, Cameroon (2019 - Present)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Commissioned state-of-the-art CNC milling/turning facili es (EMCOMAT/FB).</li>
                    <li> Lecturer in CNC Machining and Programming, Manufacturing Automa on, Metrology and Design
                    and Manufacturing Engineering Graphic II.</li>
                    <li> Supervised student projects in AI-driven manufacturing opmiza on.</li>
                    <li> Hands-on Prac cal projects on USING SIEMEN, FANUC Controllers for Advanced Machining.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>PROJECT ENGINEER</CardTitle>
                  <CardDescription>WALLY CONSTRUCTION, Cameroon (2018-2019)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Managed CAD/CAM designs and mechanical systems maintenance.</li>
                    <li> Led project budgeting and inventory control.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>3D Design Engineer (Freelance)</CardTitle>
                  <CardDescription>DESSIMINTEL, Ghana (2016-2018)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Conducted FEA and CFD simulations for oil storage tanks.</li>
                    <li>Developed MATLAB app for automation at KAAF University.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle> Maintenance Engineer</CardTitle>
                  <CardDescription>Cameroon Railway (CAMRAIL), Douala (2011–2012)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Optimized locomotive performance using flash-based memory systems.</li>
                    <li>Performed troubleshooting, maintenance, and wheel design for railway locomotive systems.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>PhD Student - Doctorate in Projects</CardTitle>
                  <CardDescription>Funiber, 2021-2022</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Advanced studies in project management methodologies and implementation strategies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>HIGHER DIPLOMA MARINE ENGINEERING (Hons)</CardTitle>
                  <CardDescription>Regional Maritime University Ghana, 2014-2016</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Specialized training in marine engineering systems, vessel operations, and maritime regulations.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>MASTER OF ENGINEERING DEGREE</CardTitle>
                  <CardDescription>Industrial Maintenance and Production Engineering, University of Ngaoundere, 2009-2012</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Advanced studies in industrial systems, maintenance strategies, and production engineering principles.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>HIGHER DIPLOMA MECHANICAL ENGINEERING AND INDUSTRIAL AUTOMATION</CardTitle>
                  <CardDescription>University of Technology (IUT) Douala, Cameroon, 2006-2008</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Focused on mechanical systems design, industrial automation technologies, and control systems.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>ADVANCED LEVEL BACCALAUREATE</CardTitle>
                  <CardDescription>MAINTENANCE OF ELECTRO-MECHANICAL EQUIPMENT&apos;S, Government Technical High School, 2003-2006</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Foundational studies in electro-mechanical systems maintenance and repair.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="certifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research/Practical Training Proficiency</CardTitle>
                  <CardDescription>Kumaraguru College of Technology, 2022-2023</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Advanced research methodologies and practical applications in mechanical engineering.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Material Testing and Analysis Certification</CardTitle>
                  <CardDescription>Zwick/Roell Machine, Avatar Solutions South Africa, 2020-2022</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Specialized training in materials testing procedures and analysis techniques.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Professional Research and Training Certification</CardTitle>
                  <CardDescription>GUNT HAMBURG Germany Equipment for Engineering Education, 2020-2022</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">Advanced training in engineering education methodologies and equipment operation.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>EMCO Training Certification</CardTitle>
                  <CardDescription>Basic training CT260, FB450, EMCOMAT20D, HMI Operate and Siemens 828D, 2020-2022</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">CNC Machining specialist certification with focus on programming and maintenance.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Maritime Certifications</CardTitle>
                  <CardDescription>Regional Maritime University Ghana, 2014-2016</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Certificate of Proficiency for Seafarer with Security Awareness and Designated Security Duties</li>
                    <li>Certificate of Proficiency for Personal Survival Technique</li>
                    <li>Certificate of Proficiency for Fire Prevention and Fire Fighting</li>
                    <li>Certificate of Proficiency for Personal Safety and Responsibilities</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
} 