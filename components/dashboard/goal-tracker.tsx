"use client";

import { CircleCheck, CircleDashed, Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface GoalTrackerProps {
  className?: string;
}

export function GoalTracker({ className }: GoalTrackerProps) {
  // Mock data for demonstration
  const mockGoals = [
    {
      id: 1,
      name: "Lose 10 pounds",
      target: 10,
      current: 7,
      unit: "lbs",
      targetDate: "July 15, 2025",
      completed: false,
    },
    {
      id: 2,
      name: "Drink 2L of water daily",
      target: 7,
      current: 5,
      unit: "days",
      targetDate: "Weekly",
      completed: false,
    },
    {
      id: 3,
      name: "Exercise 5 times per week",
      target: 5,
      current: 3,
      unit: "sessions",
      targetDate: "Weekly",
      completed: false,
    },
    {
      id: 4,
      name: "Avoid processed sugar",
      target: 7,
      current: 7,
      unit: "days",
      targetDate: "Weekly",
      completed: true,
    },
  ];

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Goals & Achievements</CardTitle>
          <CardDescription>
            Track your progress toward your fitness goals
          </CardDescription>
        </div>
        <div className="rounded-full bg-muted p-2">
          <Trophy className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockGoals.map((goal) => (
            <motion.div
              key={goal.id}
              className="space-y-2"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {goal.completed ? (
                    <CircleCheck className="mr-2 h-4 w-4 text-green-500" />
                  ) : (
                    <CircleDashed className="mr-2 h-4 w-4 text-muted-foreground" />
                  )}
                  <span
                    className={cn(
                      "text-sm font-medium",
                      goal.completed && "line-through text-muted-foreground"
                    )}
                  >
                    {goal.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {goal.current}/{goal.target} {goal.unit}
                </span>
              </div>
              {!goal.completed && (
                <>
                  <Progress
                    value={(goal.current / goal.target) * 100}
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Target: {goal.targetDate}</span>
                    <span>
                      {Math.round((goal.current / goal.target) * 100)}% complete
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
          <Button size="sm" variant="outline" className="w-full mt-4">
            Add New Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
