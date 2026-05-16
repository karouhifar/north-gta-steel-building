"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import LogoImg from "@/public/images/logo/logo.png";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Commercial",
        href: "/categories/commercial",
      },
      {
        label: "Industrial",
        href: "/categories/industrial",
      },
      {
        label: "Agricultural",
        href: "/categories/agricultural",
      },
      {
        label: "Engineering Design",
        href: "/categories/engineering-design",
      },
    ],
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Resources",
    href: "#resources",
    children: [
      {
        label: "Service Area",
        href: "/serviceAreas",
        description: "Ontario coverage and local service areas",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
];

const headerVariants = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -12,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function LogoSection() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex  items-center justify-center "
      >
        <Image
          src={LogoImg}
          alt="North GTA Steel Buildings Logo"
          width={220}
          height={70}
          priority
          className="h-auto w-30 object-contain transition duration-700 group-hover:scale-105 lg:w-35"
        />
      </motion.div>
    </Link>
  );
}

export default function Header() {
  const [resourcesOpen, setResourcesOpen] = useState<string | null>(null);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur"
    >
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <motion.div variants={itemVariants}>
          <LogoSection />
        </motion.div>

        {/* Desktop nav */}
        <motion.div
          variants={itemVariants}
          className="hidden items-center gap-10 lg:flex"
        >
          {navLinks.map((link) => {
            const isOpen = resourcesOpen === link.label;
            if (link.children) {
              return (
                <motion.div
                  key={link.label}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(() => link.label)}
                  onMouseLeave={() => setResourcesOpen(() => null)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25 }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setResourcesOpen((current) =>
                        current === link.label ? link.label : null,
                      )
                    }
                    className="hover-line group relative inline-flex items-center gap-1 font-general text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
                  >
                    {link.label}

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <ChevronDown className="size-3" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -10,
                          scale: 0.96,
                          filter: "blur(6px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: -8,
                          scale: 0.96,
                          filter: "blur(6px)",
                        }}
                        transition={{
                          duration: 0.28,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute left-1/2 top-full z-50 mt-5 w-72 -translate-x-1/2 border border-border bg-background p-2 shadow-2xl"
                      >
                        <div className="border-b border-border px-4 py-3">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-steel-red">
                            {link.label}
                          </p>
                        </div>

                        <div className="py-2">
                          {link.children.map((child, index) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.25,
                                delay: index * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              <Link
                                href={child.href}
                                className="group/item flex items-center justify-between border-l-2 border-transparent px-4 py-4 transition-all duration-300 hover:border-steel-red hover:bg-muted hover:pl-5"
                              >
                                <span>
                                  <span className="block font-general text-xs uppercase tracking-widest text-foreground">
                                    {child.label}
                                  </span>

                                  <span className="mt-1 block font-general text-xs normal-case tracking-normal text-muted-foreground">
                                    {child?.description}
                                  </span>
                                </span>

                                <ArrowRight className="size-4 text-steel-red opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={link.href}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href={link.href}
                  className="hover-line relative font-general text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Desktop CTA */}
        <motion.div
          variants={itemVariants}
          className="hidden items-center gap-6 lg:flex"
        >
          <span className="hidden font-mono text-xs tracking-wide text-muted-foreground xl:block">
            1-416-505-1371
          </span>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
            <Button
              asChild
              variant="default"
              className="rounded-none px-6 py-3 text-xs font-medium uppercase tracking-widest"
            >
              <Link href="/contact">Free Estimate</Link>
            </Button>
          </motion.div>

          <AnimatedThemeToggler variant="hexagon" duration={600} fromCenter />
        </motion.div>

        {/* Mobile menu */}
        <motion.div variants={itemVariants} className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-none border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground"
              >
                <Menu className="size-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-border bg-background text-foreground"
            >
              <SheetHeader>
                <SheetTitle className="text-left font-clash uppercase tracking-tight text-foreground">
                  North GTA Steel
                </SheetTitle>
              </SheetHeader>

              <Separator className="my-6 bg-border" />

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                    },
                  },
                }}
                className="flex flex-col gap-5"
              >
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <motion.div
                        key={link.label}
                        variants={{
                          hidden: { opacity: 0, x: 24 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-general text-sm uppercase tracking-widest text-foreground">
                            {link.label}
                          </p>

                          <ChevronDown className="size-4 text-steel-red" />
                        </div>

                        <div className="space-y-2 border-l border-border pl-4">
                          {link.children.map((child, index) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: 16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.06,
                              }}
                              whileHover={{ x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                href={child.href}
                                className="group flex items-center justify-between font-general text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                              >
                                <span>{child.label}</span>

                                <ArrowRight className="size-3 text-steel-red opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                              </Link>

                              <p className="mt-1 font-general text-xs text-muted-foreground">
                                {child.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: 24 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className="font-general text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <Separator className="my-6 bg-border" />

              <div className="space-y-4">
                <p className="font-mono text-xs text-muted-foreground">
                  1-416-505-1371
                </p>

                <Button
                  asChild
                  className="w-full rounded-none bg-steel-red font-general text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-steel-darkred"
                >
                  <Link href="/contact">Free Estimate</Link>
                </Button>

                <AnimatedThemeToggler
                  variant="hexagon"
                  duration={600}
                  fromCenter
                />
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </nav>
    </motion.header>
  );
}
