"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Timoh William Chick
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
              HEAD of PKFokam Mechanical Engineering Lab | Robotics, AI & Smart Manufacturing Innovator | Open to PhD & Industry Opportunities
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground md:text-lg">
              Head of Mechanical Engineering Laboratory at PKFokam University Ins tute of Excellence, Cameroon. As
 Head of the Mechanical Engineering Laboratory at PKFokam University, I leading the PKFokam Innova on
 Lab Projects, supervising students and worked with lecturers on AI-driven manufacturing, automa on,
 and sustainable engineering solu ons, including AI-enhanced addi ve manufacturing and CNC
 opmiza on.

              </p>
            </div>
            <div className="flex flex-col gap-3 items-center min-[400px]:flex-row">
              <Button asChild>
                <Link href="/contact">
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link href="https://www.linkedin.com/in/timoh-chick-william-57a096375/" className="hover:text-foreground text-muted-foreground">
                <Linkedin className="h-7 w-7 text-blue-600" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-muted">
              {/* Replace with actual profile image */}
              <Image 
                src="/images/profile-img.jpg" 
                alt="William Timoh" 
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                priority
                className="object-cover object-top"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 