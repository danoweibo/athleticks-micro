"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MealSection } from "@/components/dashboard/meal-section";

export default function MealsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Meals"
        text="Track and plan your daily meals"
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <MealSection className="w-full" />
    </DashboardShell>
  );
}