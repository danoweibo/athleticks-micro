"use client";

import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PieChart } from "lucide-react";
import { motion } from "@/lib/framer-motion";

interface DailyNutritionProps {
  className?: string;
}

export function DailyNutrition({ className }: DailyNutritionProps) {
  // Mock data for demonstration
  const mockData = {
    calories: {
      total: 2500,
      consumed: 1850,
    },
    macros: {
      protein: {
        goal: 150,
        consumed: 110,
      },
      carbs: {
        goal: 250,
        consumed: 180,
      },
      fat: {
        goal: 80,
        consumed: 65,
      },
    },
  };

  // Calculate percentages
  const caloriePercentage = Math.round((mockData.calories.consumed / mockData.calories.total) * 100);
  const proteinPercentage = Math.round((mockData.macros.protein.consumed / mockData.macros.protein.goal) * 100);
  const carbsPercentage = Math.round((mockData.macros.carbs.consumed / mockData.macros.carbs.goal) * 100);
  const fatPercentage = Math.round((mockData.macros.fat.consumed / mockData.macros.fat.goal) * 100);

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Daily Nutrition</CardTitle>
          <CardDescription>Your nutrition intake for today</CardDescription>
        </div>
        <div className="rounded-full bg-muted p-2">
          <PieChart className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div>Calories</div>
              <div className="font-medium">
                {mockData.calories.consumed} / {mockData.calories.total} kcal
              </div>
            </div>
            <Progress value={caloriePercentage} className="h-2" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Protein</h4>
              <div className="flex items-center justify-between text-sm">
                <div>{mockData.macros.protein.consumed}g</div>
                <div className="text-muted-foreground">{mockData.macros.protein.goal}g</div>
              </div>
              <Progress value={proteinPercentage} className="h-2" 
                        indicatorColor="bg-chart-1" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Carbs</h4>
              <div className="flex items-center justify-between text-sm">
                <div>{mockData.macros.carbs.consumed}g</div>
                <div className="text-muted-foreground">{mockData.macros.carbs.goal}g</div>
              </div>
              <Progress value={carbsPercentage} className="h-2" 
                        indicatorColor="bg-chart-2" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Fat</h4>
              <div className="flex items-center justify-between text-sm">
                <div>{mockData.macros.fat.consumed}g</div>
                <div className="text-muted-foreground">{mockData.macros.fat.goal}g</div>
              </div>
              <Progress value={fatPercentage} className="h-2" 
                        indicatorColor="bg-chart-3" />
            </div>
          </div>
          
          <div className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{mockData.calories.total - mockData.calories.consumed}</span> calories remaining
            </div>
            <div className="text-sm font-medium">
              {caloriePercentage}% of daily goal
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}