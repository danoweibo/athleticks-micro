import { OnboardingForm } from "@/components/onboarding-form";

export default function OnboardingPage() {
  return (
    <div className="container max-w-4xl py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Let's get to know you better</h1>
          <p className="text-muted-foreground">
            We'll use this information to personalize your experience and help you reach your fitness goals.
          </p>
        </div>
        <OnboardingForm />
      </div>
    </div>
  );
}