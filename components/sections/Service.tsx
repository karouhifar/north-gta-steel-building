// components/sections/ServicesSection.tsx

"use client";

import { Factory, Plane, Tractor, Warehouse } from "lucide-react";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { services, type ServiceIcon } from "@/data/services";

const iconMap = {
  warehouse: Warehouse,
  factory: Factory,
  tractor: Tractor,
  plane: Plane,
} satisfies Record<ServiceIcon, React.ComponentType<{ className?: string }>>;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden ring-0 border-0 bg-steel-offwhite dark:bg-steel-dark py-24 text-foreground lg:py-32"
    >
      <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-12 lg:col-span-2"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-steel-red">
              [003]
            </p>

            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-steel-light">
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
            className="col-span-12 lg:col-span-10"
          >
            <h2 className="font-clash text-5xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-7xl">
              What We
              <br />
              Fabricate_
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
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
                className={`col-span-12 lg:col-span-6 xl:col-span-3 ${
                  index === 1 || index === 3 ? "lg:mt-8" : ""
                }`}
              >
                <Card className="group h-full rounded-none border border-steel-mid bg-transparent shadow-none transition-colors duration-300 hover:border-steel-red">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-xs text-steel-light">
                        {service.number}
                      </span>

                      <Icon className="size-6 text-steel-light transition-colors duration-300 group-hover:text-steel-red" />
                    </div>

                    <h3 className="mb-3 font-clash text-xl font-semibold uppercase tracking-tight text-foreground">
                      {service.title}
                    </h3>

                    <p className="font-general text-sm leading-relaxed text-steel-light">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="border-t border-steel-gray pt-4">
                        <p className="font-mono text-xs uppercase text-steel-light">
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
