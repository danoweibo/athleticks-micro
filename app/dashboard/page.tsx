"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DailyNutrition } from "@/components/dashboard/daily-nutrition";
import { MealSection } from "@/components/dashboard/meal-section";
import { WorkoutSection } from "@/components/dashboard/workout-section";
import { ProgressCharts } from "@/components/dashboard/progress-charts";
import { GoalTracker } from "@/components/dashboard/goal-tracker";

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Track your nutrition and fitness progress"
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <DailyNutrition className="lg:col-span-4" />
        <GoalTracker className="lg:col-span-3" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <MealSection className="lg:col-span-4" />
        <WorkoutSection className="lg:col-span-3" />
      </div>
      <ProgressCharts />
    </DashboardShell>
  );
}