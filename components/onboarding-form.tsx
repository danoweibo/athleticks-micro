"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "@/lib/framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  age: z.string().min(1, { message: "Please enter your age." }),
  height: z.string().min(1, { message: "Please enter your height." }),
  weight: z.string().min(1, { message: "Please enter your weight." }),
  goal: z.enum(["lose_weight", "gain_muscle", "maintain", "improve_health"], {
    required_error: "Please select a goal.",
  }),
  activityLevel: z.enum(
    ["sedentary", "light", "moderate", "active", "very_active"],
    {
      required_error: "Please select your activity level.",
    }
  ),
  dietaryPreference: z.enum(
    ["no_preference", "vegetarian", "vegan", "keto", "paleo"],
    {
      required_error: "Please select a dietary preference.",
    }
  ),
});

export function OnboardingForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      age: "",
      height: "",
      weight: "",
      goal: undefined,
      activityLevel: undefined,
      dietaryPreference: undefined,
    },
  });

  function goToNextStep() {
    setStep((prev) => prev + 1);
  }

  function goToPreviousStep() {
    setStep((prev) => prev - 1);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);

      router.push("/dashboard");
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <div className="text-sm text-muted-foreground">Step 1 of 3</div>
            </div>

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height (cm)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your height"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your weight"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="button" onClick={goToNextStep} className="w-full">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Fitness Goals</h2>
              <div className="text-sm text-muted-foreground">Step 2 of 3</div>
            </div>

            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What is your primary fitness goal?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lose_weight" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Lose Weight
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="gain_muscle" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Gain Muscle
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="maintain" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Maintain Weight
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="improve_health" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Improve Overall Health
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your activity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sedentary">
                        Sedentary (little or no exercise)
                      </SelectItem>
                      <SelectItem value="light">
                        Light (exercise 1-3 days/week)
                      </SelectItem>
                      <SelectItem value="moderate">
                        Moderate (exercise 3-5 days/week)
                      </SelectItem>
                      <SelectItem value="active">
                        Active (exercise 6-7 days/week)
                      </SelectItem>
                      <SelectItem value="very_active">
                        Very Active (intense exercise daily)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                className="w-full"
              >
                Back
              </Button>
              <Button type="button" onClick={goToNextStep} className="w-full">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Dietary Preferences</h2>
              <div className="text-sm text-muted-foreground">Step 3 of 3</div>
            </div>

            <FormField
              control={form.control}
              name="dietaryPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dietary Preference</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your dietary preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="no_preference">
                        No Preference
                      </SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="keto">Keto</SelectItem>
                      <SelectItem value="paleo">Paleo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                className="w-full"
              >
                Back
              </Button>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Setting up your profile...
                  </>
                ) : (
                  "Complete Setup"
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
}
