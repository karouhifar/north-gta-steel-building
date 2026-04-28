"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Specifications",
    href: "#specs",
  },
  {
    label: "About",
    href: "#about",
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

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 180, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-8 w-8 items-center justify-center bg-steel-red"
      >
        <div className="h-0 w-0 rotate-180 border-x-[6px] border-b-10 border-x-transparent border-b-white" />
      </motion.div>

      <span className="font-clash text-lg font-semibold uppercase tracking-tight text-white">
        Steel Forge
      </span>
    </Link>
  );
}

export default function Header() {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-steel-mid bg-steel-black/95 backdrop-blur"
    >
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover-line relative font-general text-xs uppercase tracking-widest text-steel-light transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <span className="hidden font-mono text-xs tracking-wide text-steel-light xl:block">
            1-888-449-7756
          </span>

          <Button
            asChild
            variant="default"
            className="rounded-none px-6 py-3  text-xs font-medium uppercase tracking-widest"
          >
            <Link href="#quote">Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-none border-steel-mid bg-transparent text-white hover:bg-steel-gray hover:text-white"
              >
                <Menu className="size-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-steel-mid bg-steel-black text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-left font-clash uppercase tracking-tight text-white">
                  Steel Forge
                </SheetTitle>
              </SheetHeader>

              <Separator className="my-6 bg-steel-mid" />

              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-general text-sm uppercase tracking-widest text-steel-light transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Separator className="my-6 bg-steel-mid" />

              <div className="space-y-4">
                <p className="font-mono text-xs text-steel-light">
                  1-888-449-7756
                </p>

                <Button
                  asChild
                  className="w-full rounded-none bg-steel-red font-general text-xs font-semibold uppercase tracking-widest text-white hover:bg-steel-darkred"
                >
                  <Link href="#quote">Free Estimate</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
