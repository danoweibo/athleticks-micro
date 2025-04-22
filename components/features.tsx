import {
  Activity,
  BarChart3,
  Calendar,
  Salad,
  Utensils,
  Clock,
  Trophy,
  PieChart,
} from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <Salad className="h-10 w-10 text-primary" />,
      title: "Meal Tracking",
      description:
        "Log your meals and track your calorie intake with our extensive food database.",
    },
    {
      icon: <Activity className="h-10 w-10 text-primary" />,
      title: "Workout Plans",
      description:
        "Access customized workout plans based on your fitness goals and preferences.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Progress Analytics",
      description:
        "Visualize your progress with detailed charts and analytics to stay motivated.",
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Macro Tracking",
      description:
        "Monitor your protein, carbs, and fat intake to optimize your nutrition.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Meal Planning",
      description:
        "Plan your meals ahead of time and generate shopping lists automatically.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Goal Setting",
      description:
        "Set personalized fitness and nutrition goals and track your progress.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to achieve your fitness goals
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive tools help you track, plan, and optimize your
              nutrition and fitness journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="rounded-full bg-muted p-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
