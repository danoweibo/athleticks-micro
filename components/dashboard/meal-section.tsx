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

interface MealSectionProps {
  className?: string;
}

export function MealSection({ className }: MealSectionProps) {
  // Mock data for demonstration
  const mockMeals = [
    {
      id: 1,
      name: "Breakfast",
      time: "8:30 AM",
      calories: 450,
      items: [
        {
          name: "Oatmeal with berries",
          calories: 320,
          protein: 12,
          carbs: 45,
          fat: 8,
        },
        { name: "Greek yogurt", calories: 130, protein: 15, carbs: 8, fat: 3 },
      ],
    },
    {
      id: 2,
      name: "Lunch",
      time: "1:00 PM",
      calories: 620,
      items: [
        {
          name: "Chicken salad",
          calories: 450,
          protein: 35,
          carbs: 25,
          fat: 22,
        },
        {
          name: "Whole grain bread",
          calories: 170,
          protein: 7,
          carbs: 30,
          fat: 3,
        },
      ],
    },
    {
      id: 3,
      name: "Snack",
      time: "4:00 PM",
      calories: 180,
      items: [
        { name: "Apple", calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
        { name: "Almonds (1oz)", calories: 85, protein: 6, carbs: 3, fat: 7 },
      ],
    },
    {
      id: 4,
      name: "Dinner",
      time: "7:30 PM",
      calories: 600,
      items: [
        {
          name: "Grilled salmon",
          calories: 350,
          protein: 40,
          carbs: 0,
          fat: 20,
        },
        { name: "Quinoa", calories: 120, protein: 4, carbs: 21, fat: 2 },
        {
          name: "Roasted vegetables",
          calories: 130,
          protein: 4,
          carbs: 16,
          fat: 7,
        },
      ],
    },
  ];

  return (
    <>
      <Card className={cn(className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <CardTitle>Today&apos;s Meals</CardTitle>
            <CardDescription>Track and log your meals</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Meal
          </Button>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-4">
            {mockMeals.map((meal) => (
              <motion.div
                key={meal.id}
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{meal.name}</h3>
                    <Badge variant="outline">{meal.calories} kcal</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {meal.time}
                  </div>
                  <div className="mt-3">
                    {meal.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-1 text-sm"
                      >
                        <span>{item.name}</span>
                        <Badge variant="secondary" className="ml-2">
                          {item.calories} kcal
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Meals
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
