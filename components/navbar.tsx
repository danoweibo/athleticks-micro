"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Dumbbell } from "lucide-react";

export function NavBar() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Athleticks
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/dashboard"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/dashboard" ? "text-foreground font-medium" : "text-foreground/60"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/meals"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/meals")
                  ? "text-foreground font-medium"
                  : "text-foreground/60"
              )}
            >
              Meals
            </Link>
            <Link
              href="/workouts"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/workouts")
                  ? "text-foreground font-medium"
                  : "text-foreground/60"
              )}
            >
              Workouts
            </Link>
            <Link
              href="/progress"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/progress")
                  ? "text-foreground font-medium"
                  : "text-foreground/60"
              )}
            >
              Progress
            </Link>
          </nav>
        </div>
        <Link href="/" className="mr-6 flex md:hidden items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="font-bold">Athleticks</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <ThemeToggle />
            <div className="flex items-center gap-2 ml-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}