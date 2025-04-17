"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import the chart component
const DynamicChart = dynamic(() => import("@/components/dynamic-chart").then(mod => mod.DynamicChart), {
  ssr: false, // Don't render on server
  loading: () => <Skeleton className="w-full h-[400px] rounded-lg" /> // Show skeleton while loading
});

export function SkillsChart() {
  return (
    <Suspense fallback={<Skeleton className="w-full h-[400px] rounded-lg" />}>
      <DynamicChart />
    </Suspense>
  );
} 