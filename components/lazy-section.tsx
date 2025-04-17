"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

export function LazySection({ children, threshold = 0.1, className = "" }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {isVisible ? children : <div style={{ height: ref.current?.clientHeight ?? 200 }} />}
    </div>
  );
} 