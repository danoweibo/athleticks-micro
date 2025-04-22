"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { WorkoutSection } from "@/components/dashboard/workout-section";

export default function WorkoutsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Workouts"
        text="Track and plan your workouts"
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <WorkoutSection className="w-full" />
    </DashboardShell>
  );
}