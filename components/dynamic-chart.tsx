"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type SkillDataItem = {
  name: string;
  value: number;
};

const skillData: SkillDataItem[] = [
  { name: "CAD/CAM", value: 95 },
  { name: "Simulation", value: 90 },
  { name: "CNC", value: 90 },
  { name: "3D Modeling", value: 95 },
  { name: "FEA/CFD", value: 85 },
  { name: "Automation", value: 85 },
];

export function DynamicChart() {
  const [, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (_data: SkillDataItem, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="w-full h-[400px] p-4">
      <h3 className="text-xl font-bold mb-4 text-center">Technical Skills Visualization</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={skillData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            name="Proficiency (%)"
            fill="var(--color-primary)"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 