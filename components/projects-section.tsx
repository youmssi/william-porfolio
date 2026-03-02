"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cog, Ship, Factory, Wrench, FlaskConical, Layers, Hammer, Leaf, Settings, BookOpen, Cpu, Zap } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: "Autonomous Infrastructure Inspection Robot",
      description: "Developed an autonomous robot for infrastructure inspection using computer vision and ROS2 framework. Achieved 96% accuracy in defect detection through deep learning models trained on structural damage datasets.",
      metrics: "96% accuracy",
      technologies: ["ROS2", "Gazebo", "Computer Vision", "Python"],
      icon: <Cpu className="h-8 w-8 text-primary" />,
      tags: ["Robotics", "AI", "Computer Vision", "ROS2"]
    },
    {
      id: 2,
      title: "AI-Driven Machining Optimization",
      description: "Implemented deep reinforcement learning (DQN) to optimize CNC machining parameters on Siemens 828D controllers. Reduced cycle time by 18% while maintaining part quality through intelligent feed rate and spindle speed optimization.",
      metrics: "18% cycle time reduction",
      technologies: ["Python", "TensorFlow", "DQN", "CNC", "Siemens 828D"],
      icon: <Zap className="h-8 w-8 text-primary" />,
      tags: ["AI", "CNC", "Machine Learning", "Manufacturing"]
    },
    {
      id: 3,
      title: "IoT Predictive Battery Health Monitor",
      description: "Designed an IoT-based predictive maintenance system for battery health monitoring using ESP32 microcontrollers and TensorFlow Lite. Reduced equipment downtime by 20% through early failure detection and MQTT-based real-time alerts.",
      metrics: "20% downtime reduction",
      technologies: ["ESP32", "TensorFlow Lite", "IoT", "MQTT", "Python"],
      icon: <Cpu className="h-8 w-8 text-primary" />,
      tags: ["IoT", "Predictive Maintenance", "Machine Learning", "Embedded Systems"]
    },
    {
      id: 4,
      title: "Adaptive 6-DOF Robotic Arm",
      description: "Developed an adaptive control system for a 6-DOF robotic arm using MATLAB/Simulink. Improved positioning accuracy by 15% through advanced kinematics modeling and real-time trajectory optimization algorithms.",
      metrics: "15% accuracy improvement",
      technologies: ["MATLAB", "Simulink", "Control Systems", "Kinematics"],
      icon: <Cog className="h-8 w-8 text-primary" />,
      tags: ["Robotics", "Control Systems", "MATLAB", "Kinematics"]
    }
  ];

  const currentProjects = [
    {
      id: 0,
      title: "Integrated Smart Mechatronic Systems for Sustainable Precision Agriculture (MSc Project)",
      description:
        "A framework for AI-driven robotics, additive manufacturing, and renewable energy solutions, enabling precision agriculture through smart mechatronic integration. Tools: AI, Robotics, 3D Printing, Renewable Energy.",
      icon: <Factory className="h-8 w-8 text-primary" />,
      tags: ["Precision Agriculture", "AI", "Robotics", "Additive Manufacturing", "Renewable Energy"]
    },
    {
      id: 1,
      title: "Jion Project: AI-Enhanced Additive Manufacturing for Rapid Prototyping",
      description: "Supervised development of AI-driven 3D printing processes to optimize material use and speed. Used machine learning to predict print failures, reducing waste by 20%. Tools: Python, SolidWorks, TensorFlow (in progress). [Details in Portfolio PDF]",
      icon: <Layers className="h-8 w-8 text-primary" />,
      tags: ["AI", "3D Printing", "Machine Learning", "Python", "SolidWorks"]
    },
    {
      id: 2,
      title: "Jion Project: General Purpose Industrial Mixer",
      description: "Led design of an automated mixer for industrial applications, integrating PLC control (Siemens). Improved mixing efficiency by 15%. Tools: Siemens NX, MATLAB. [Details in Portfolio PDF]",
      icon: <Cog className="h-8 w-8 text-primary" />,
      tags: ["Industrial Mixer", "PLC", "Siemens NX", "MATLAB"]
    },
    {
      id: 3,
      title: "Minijet Engine Design and Development",
      description: "Guided team in designing a compact jet engine prototype for educational use. Conducted FEA simulations (ANSYS) to optimize blade stress. Tools: ANSYS, Creo. [Details in Portfolio PDF]",
      icon: <FlaskConical className="h-8 w-8 text-primary" />,
      tags: ["Jet Engine", "FEA", "ANSYS", "Creo"]
    },
    {
      id: 4,
      title: "All-Terrain Vehicle Design and Development",
      description: "Supervised CAD design and prototyping of a rugged vehicle for rural Cameroon. Enhanced suspension durability by 30%. Tools: SolidWorks, AutoCAD. [Details in Portfolio PDF]",
      icon: <Hammer className="h-8 w-8 text-primary" />,
      tags: ["Vehicle Design", "SolidWorks", "AutoCAD"]
    },
    {
      id: 5,
      title: "Agricultural/Waste General Purpose Shredder",
      description: "Oversaw design of a shredder for agricultural waste recycling, improving throughput by 25%. Tools: Siemens NX, MATLAB. [Details in Portfolio PDF]",
      icon: <Leaf className="h-8 w-8 text-primary" />,
      tags: ["Shredder", "Agricultural Engineering", "Siemens NX", "MATLAB"]
    },
    {
      id: 6,
      title: "Dual Heat Furnace for Metal Melting (2500°C)",
      description: "Led development of a gas/charcoal furnace for small-scale foundries in Cameroon. Optimized thermal efficiency using CFD (ANSYS). Tools: ANSYS, SolidWorks. [Details in Portfolio PDF]",
      icon: <FlaskConical className="h-8 w-8 text-primary" />,
      tags: ["Furnace", "CFD", "ANSYS", "SolidWorks"]
    },
    {
      id: 7,
      title: "Universal Pellet Machine for Feed Production",
      description: "Supervised design of a pelletizer for livestock feed, increasing production rate by 20%. Tools: Creo, MATLAB. [Details in Portfolio PDF]",
      icon: <Settings className="h-8 w-8 text-primary" />,
      tags: ["Pellet Machine", "Feed Production", "Creo", "MATLAB"]
    },
    {
      id: 8,
      title: "Sugar Cane Press for Juice Production",
      description: "Guided team in designing a press for small-scale farmers, improving juice yield by 15%. Tools: SolidWorks, AutoCAD. [Details in Portfolio PDF]",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      tags: ["Sugar Cane Press", "SolidWorks", "AutoCAD"]
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
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Projects & Research</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Showcasing innovative engineering solutions and research initiatives
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="mb-16">
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-center">Featured Projects</h3>
            <p className="text-muted-foreground text-center mb-8">Highlighted research projects with quantifiable impact</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="mb-4">{project.icon}</div>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="mt-2">
                      <Badge variant="default" className="text-sm">{project.metrics}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
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


