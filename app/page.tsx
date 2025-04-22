import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <Features />
      <Testimonials />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to transform your fitness journey?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who have already achieved their fitness goals with NutriTrack.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="px-8">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}