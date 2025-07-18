"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10 mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">William Timoh</h3>
            <p className="text-sm text-muted-foreground">
              Engineering & Technology Expert with extensive experience in design, 
              research, and education.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="mailto:wtimoh@ymail.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span>wtimoh@ymail.com</span>
              </Link>
              <Link href="mailto:chicktimw@gmail.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span>chicktimw@gmail.com</span>
              </Link>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(+237) 677536586</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(+237) 681756393</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/timoh-chick-william-57a096375/" className="hover:text-foreground text-muted-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-foreground text-muted-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-foreground text-muted-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} William Timoh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 