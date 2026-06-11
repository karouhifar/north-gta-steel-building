// components/sections/ProjectArchiveSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";

function ProjectCard({
  project,
  size = "default",
  delay = 0,
}: {
  project: Project;
  size?: "large" | "wide" | "default";
  delay?: number;
}) {
  const aspectClass =
    size === "large"
      ? "aspect-[16/10]"
      : size === "wide"
        ? "aspect-[16/10]"
        : "aspect-[4/3]";

  const titleSizeClass =
    size === "large"
      ? "text-2xl lg:text-3xl"
      : size === "wide"
        ? "text-xl lg:text-2xl"
        : "text-lg lg:text-xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 56, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group "
    >
      <Card className="relative  overflow-hidden rounded-none p-0 ring-0 border-0 shadow-none transition-colors duration-300 hover:border-steel-red">
        <CardContent className={`relative overflow-hidden p-0 ${aspectClass}`}>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes={
              size === "large"
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 1024px) 100vw, 34vw"
            }
            className="h-full object-cover brightness-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-50"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-foreground/20 transition-colors duration-500 group-hover:bg-foreground/80" />

          {/* Featured label */}
          {project.featured && (
            <div className="absolute left-4 top-4 bg-steel-red px-3 py-1">
              <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground">
                Featured
              </span>
            </div>
          )}

          {/* Hover content */}
          <div className="absolute inset-0 flex translate-y-5 flex-col justify-end p-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:p-8">
            <div className="border-l-2 border-steel-red pl-4">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                {project.code}
              </p>

              <h3
                className={`font-clash font-semibold uppercase tracking-tight text-primary-foreground ${titleSizeClass}`}
              >
                {project.title}
              </h3>

              {project.description && (
                <p className="mt-2 max-w-xl font-general text-sm leading-relaxed text-steel-light">
                  {project.description}
                </p>
              )}
            </div>

            {project.stats && project.stats.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-5 border-t border-steel-mid pt-4">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-xs uppercase text-steel-light">
                      {stat.label}
                    </p>

                    <p className="font-mono text-xs text-primary-foreground sm:text-sm">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Project() {
  const featureProject = projects[0];
  const stackedProjects = projects.slice(1, 3);
  const bottomProjects = projects.slice(3);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:py-32"
    >
      {/* Optional grid texture */}
      <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="min-w-0">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-steel-red sm:text-xs">
              [002] Selected Works
            </p>

            <h2 className="font-clash text-[clamp(3rem,14vw,5rem)] font-bold uppercase leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              Project
              <br />
              Archive_
            </h2>
          </div>

          <div className="max-w-xl lg:max-w-xs">
            <p className="font-general text-sm leading-relaxed text-muted-foreground lg:text-right lg:text-steel-light">
              A curated selection of our most demanding structural projects.
              Each one a testament to engineering without compromise.
            </p>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Large feature card */}
          {featureProject && (
            <div className="min-w-0 md:col-span-2 lg:col-span-7">
              <ProjectCard project={featureProject} size="large" delay={0.05} />
            </div>
          )}

          {/* Two stacked cards */}
          <div className="flex min-w-0 flex-col gap-4 md:col-span-2 lg:col-span-5 lg:gap-6">
            {stackedProjects.map((project, index) => (
              <ProjectCard
                key={project.code}
                project={project}
                size="wide"
                delay={0.15 + index * 0.1}
              />
            ))}
          </div>

          {/* Bottom three cards */}
          {bottomProjects.map((project, index) => (
            <div key={project.code} className="min-w-0 lg:col-span-4">
              <ProjectCard
                project={project}
                size="default"
                delay={0.25 + index * 0.1}
              />
            </div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="h-auto w-full rounded-none border-steel-mid bg-transparent px-8 py-4 font-general text-xs font-medium uppercase tracking-widest text-foreground hover:border-steel-red hover:bg-transparent hover:text-steel-red sm:w-auto sm:px-10"
          >
            <Link
              href="#all-projects"
              className="flex items-center justify-center"
            >
              View Full Archive
              <ArrowRight className="ml-3 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
