"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function ProgressCharts() {
  // Mock data for weight progress
  const weightData = [
    { name: "Week 1", weight: 185 },
    { name: "Week 2", weight: 183 },
    { name: "Week 3", weight: 181 },
    { name: "Week 4", weight: 179 },
    { name: "Week 5", weight: 178 },
    { name: "Week 6", weight: 176 },
    { name: "Week 7", weight: 175 },
    { name: "Week 8", weight: 173 },
  ];

  // Mock data for nutrition tracking
  const nutritionData = [
    {
      name: "Mon",
      protein: 120,
      carbs: 180,
      fat: 60,
    },
    {
      name: "Tue",
      protein: 110,
      carbs: 200,
      fat: 55,
    },
    {
      name: "Wed",
      protein: 135,
      carbs: 160,
      fat: 70,
    },
    {
      name: "Thu",
      protein: 125,
      carbs: 190,
      fat: 65,
    },
    {
      name: "Fri",
      protein: 130,
      carbs: 170,
      fat: 60,
    },
    {
      name: "Sat",
      protein: 115,
      carbs: 210,
      fat: 50,
    },
    {
      name: "Sun",
      protein: 105,
      carbs: 230,
      fat: 45,
    },
  ];

  // Mock data for workout tracking
  const workoutData = [
    {
      name: "Mon",
      duration: 30,
      calories: 320,
    },
    {
      name: "Tue",
      duration: 45,
      calories: 450,
    },
    {
      name: "Wed",
      duration: 0,
      calories: 0,
    },
    {
      name: "Thu",
      duration: 60,
      calories: 580,
    },
    {
      name: "Fri",
      duration: 30,
      calories: 300,
    },
    {
      name: "Sat",
      duration: 90,
      calories: 750,
    },
    {
      name: "Sun",
      duration: 45,
      calories: 420,
    },
  ];

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Progress Charts</CardTitle>
        <CardDescription>Visualize your fitness and nutrition progress</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weight" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
          </TabsList>
          <TabsContent value="weight" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weightData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={['auto', 'auto']} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="hsl(var(--chart-1))"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="nutrition" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={nutritionData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="protein" fill="hsl(var(--chart-1))" />
                  <Bar dataKey="carbs" fill="hsl(var(--chart-2))" />
                  <Bar dataKey="fat" fill="hsl(var(--chart-3))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="workouts" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={workoutData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-4))" />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-5))" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="duration" yAxisId="left" fill="hsl(var(--chart-4))" name="Duration (min)" />
                  <Bar dataKey="calories" yAxisId="right" fill="hsl(var(--chart-5))" name="Calories Burned" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}