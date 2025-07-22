"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Once mounted, we can show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/research-area", label: "Research Area" },
    { href: "/contact", label: "Contact" },
  ];
  const moreLinks = [
    { href: "/research-contributions", label: "Research Contributions" },
    { href: "/awards", label: "Awards" },
    { href: "/references", label: "References" },
    { href: "/books", label: "Books" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center gap-2">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2 font-bold text-xl"
          >
            Timoh William Chick
          </Link>
          
          <nav className="hidden md:flex gap-6 items-center">
            {mainLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1 focus:outline-none"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-background border rounded shadow-lg z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={toggleTheme}
          >
            {mounted && (theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            ))}
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-3 mx-auto px-4 md:px-0">
            {[...mainLinks, ...moreLinks].map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === link.href 
                    ? "bg-muted text-foreground" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 