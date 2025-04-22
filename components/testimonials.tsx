import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "NutriTrack completely transformed my approach to nutrition. I've lost 20 pounds and feel better than ever!",
      author: "Sarah J.",
      role: "Lost 20 lbs in 3 months",
    },
    {
      quote:
        "The meal tracking is so intuitive and the workout plans are perfect for my busy schedule. Highly recommend!",
      author: "Michael T.",
      role: "Gained 15 lbs of muscle",
    },
    {
      quote:
        "I love how easy it is to see my macros and adjust my meals accordingly. My athletic performance has improved tremendously.",
      author: "Emma R.",
      role: "Marathon runner",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px]">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Hear from our satisfied users
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thousands of users have already transformed their fitness journey
              with NutriTrack.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between space-y-6 rounded-lg border bg-card p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="space-y-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-left">{testimonial.quote}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted h-10 w-10"></div>
                <div className="text-left">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
