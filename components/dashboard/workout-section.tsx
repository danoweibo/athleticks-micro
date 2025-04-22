"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface WorkoutSectionProps {
  className?: string;
}

export function WorkoutSection({ className }: WorkoutSectionProps) {
  // Mock data for demonstration
  const mockWorkouts = [
    {
      id: 1,
      name: "Morning Run",
      time: "6:30 AM",
      duration: "30 min",
      calories: 320,
      completed: true,
    },
    {
      id: 2,
      name: "Strength Training",
      time: "5:00 PM",
      duration: "45 min",
      calories: 280,
      completed: false,
    },
  ];

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Todays Workouts</CardTitle>
          <CardDescription>Track your exercise activities</CardDescription>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Workout
        </Button>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          {mockWorkouts.map((workout) => (
            <motion.div
              key={workout.id}
              className={`rounded-lg border ${
                workout.completed ? "bg-muted/50" : "bg-card"
              } text-card-foreground shadow-sm`}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{workout.name}</h3>
                  <Badge variant={workout.completed ? "secondary" : "outline"}>
                    {workout.completed ? "Completed" : "Scheduled"}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {workout.time} • {workout.duration}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm">
                    {workout.calories} calories burned
                  </span>
                  {!workout.completed && (
                    <Button variant="secondary" size="sm">
                      Start
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Workouts
        </Button>
      </CardFooter>
    </Card>
  );
}
