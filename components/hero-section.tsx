"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

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
                Engineering & Technology Expert
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground md:text-lg">
                A forward-thinking, result-driven professional with expertise in Industrial, Mechanical, and Marine Engineering.
                Experienced in automation systems, complex troubleshooting, and innovative product design.
              </p>
              <p className="font-medium md:text-lg">
                Currently the Head of Laboratory at Mechanical Engineering Department, PKFokam University Institute of Excellence
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/contact">
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#" className="inline-flex items-center">
                  Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-muted bg-muted">
              {/* Replace with actual profile image */}
              <div className="flex h-full items-center justify-center text-lg font-medium">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 