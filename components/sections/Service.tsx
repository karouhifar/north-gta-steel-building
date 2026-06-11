// components/sections/ServicesSection.tsx

"use client";

import { Factory, DraftingCompass, Tractor, Warehouse } from "lucide-react";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { services, type ServiceIcon } from "@/data/services";

const iconMap: Record<
  ServiceIcon,
  React.ComponentType<{ className?: string }>
> = {
  warehouse: Warehouse,
  factory: Factory,
  tractor: Tractor,
  DraftingCompass: DraftingCompass,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-0 bg-steel-offwhite py-16 text-foreground ring-0 dark:bg-steel-dark sm:py-20 lg:py-32"
    >
      <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-12 lg:mb-16 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-red sm:text-xs">
              [003]
            </p>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              Capabilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 lg:col-span-10"
          >
            <h2 className="font-clash text-[clamp(3rem,14vw,5rem)] font-bold uppercase leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              What We
              <br />
              Fabricate_
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${index === 1 || index === 3 ? "lg:mt-8" : ""}`}
              >
                <Card className="group h-full rounded-none border border-border bg-transparent shadow-none transition-colors duration-300 hover:border-steel-red">
                  <CardContent className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
                    <div className="mb-6 flex items-center justify-between sm:mb-8">
                      <span className="font-mono text-xs text-muted-foreground">
                        {service.number}
                      </span>

                      <Icon className="size-6 text-muted-foreground transition-colors duration-300 group-hover:text-steel-red" />
                    </div>

                    <h3 className="mb-3 font-clash text-lg font-semibold uppercase tracking-tight text-foreground sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="font-general text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6 sm:pt-8">
                      <div className="border-t border-border pt-4">
                        <p className="font-mono text-[11px] uppercase text-muted-foreground sm:text-xs">
                          {service.startingFrom}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
