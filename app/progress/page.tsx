"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProgressCharts } from "@/components/dashboard/progress-charts";
import { GoalTracker } from "@/components/dashboard/goal-tracker";

export default function ProgressPage() {
  return (
    <DashboardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <GoalTracker className="lg:col-span-3" />
      </div>
    </DashboardShell>
  );
}
